import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import { DOMAIN_FAMILIES } from '../data/taxonomy';
import { WORKFLOWS } from '../data/workflows';
import { DomainGroup, CoverageState, DomainFamily, Subdiscipline } from '../types';
import { 
  Sparkles, Layers, ArrowRight, CheckCircle2, BookOpen, 
  HelpCircle, RotateCcw, Maximize2, ZoomIn, ZoomOut, Compass, Info
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface TaxonomyHierarchyNode {
  id: string;
  name: string;
  type: 'root' | 'group' | 'domain' | 'subdiscipline' | 'task';
  value?: number;
  children?: TaxonomyHierarchyNode[];
  group?: DomainGroup;
  domainId?: string;
  domainName?: string;
  subdisciplineId?: string;
  subdisciplineName?: string;
  coverageState?: CoverageState;
  summary?: string;
  workflowId?: string;
  sampleTasks?: string[];
  aliases?: string[];
}

interface TaxonomyVisualizationProps {
  onSelectWorkflow: (workflowId: string) => void;
  onOpenUniversal: () => void;
  activeFilterGroup?: 'All' | DomainGroup;
  searchFilter?: string;
}

const GROUP_COLORS: Record<DomainGroup, { base: string; light: string; border: string }> = {
  'Technology & engineering': { base: '#4F46E5', light: '#EEF2FF', border: '#C7D2FE' },
  'Knowledge & science': { base: '#0F9D91', light: '#F0FDFA', border: '#99F6E4' },
  'Economy & work': { base: '#D97706', light: '#FFFBEB', border: '#FDE68A' },
  'Society, law & culture': { base: '#7C3AED', light: '#F5F3FF', border: '#DDD6FE' },
  'Health, food & living things': { base: '#16A34A', light: '#F0FDF4', border: '#BBF7D0' },
  'Personal life & situations': { base: '#DB2777', light: '#FDF2F8', border: '#FBCFE8' }
};

export const TaxonomyVisualization: React.FC<TaxonomyVisualizationProps> = ({
  onSelectWorkflow,
  onOpenUniversal,
  activeFilterGroup = 'All',
  searchFilter = ''
}) => {
  const { isDark } = useTheme();
  const [vizType, setVizType] = useState<'treemap' | 'sunburst'>('treemap');
  const [selectedNode, setSelectedNode] = useState<TaxonomyHierarchyNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<TaxonomyHierarchyNode | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Build hierarchical data tree
  const hierarchyData: TaxonomyHierarchyNode = useMemo(() => {
    // 6 groups
    const groups: DomainGroup[] = [
      'Technology & engineering',
      'Knowledge & science',
      'Economy & work',
      'Society, law & culture',
      'Health, food & living things',
      'Personal life & situations'
    ];

    const groupNodes: TaxonomyHierarchyNode[] = groups
      .filter(g => activeFilterGroup === 'All' || g === activeFilterGroup)
      .map(groupName => {
        const domainsInGroup = DOMAIN_FAMILIES.filter(d => d.group === groupName);

        const domainNodes: TaxonomyHierarchyNode[] = domainsInGroup.map(dom => {
          // Check if there is an existing workflow for this domain
          const matchedWorkflow = WORKFLOWS.find(w => w.domainId === dom.id);

          const subNodes: TaxonomyHierarchyNode[] = dom.subdisciplines.map(sub => {
            const taskChildren: TaxonomyHierarchyNode[] = sub.sampleTasks.map((taskName, tIdx) => ({
              id: `${sub.id}-task-${tIdx}`,
              name: taskName,
              type: 'task',
              value: 1,
              group: groupName,
              domainId: dom.id,
              domainName: dom.name,
              subdisciplineId: sub.id,
              subdisciplineName: sub.name,
              coverageState: sub.coverageState,
              workflowId: matchedWorkflow?.id
            }));

            return {
              id: sub.id,
              name: sub.name,
              type: 'subdiscipline',
              group: groupName,
              domainId: dom.id,
              domainName: dom.name,
              subdisciplineId: sub.id,
              subdisciplineName: sub.name,
              coverageState: sub.coverageState,
              summary: sub.summary,
              sampleTasks: sub.sampleTasks,
              workflowId: matchedWorkflow?.id,
              children: taskChildren.length > 0 ? taskChildren : undefined,
              value: taskChildren.length > 0 ? undefined : 1
            };
          });

          return {
            id: dom.id,
            name: dom.name,
            type: 'domain',
            group: groupName,
            domainId: dom.id,
            domainName: dom.name,
            coverageState: dom.coverageState,
            summary: dom.summary,
            aliases: dom.aliases,
            workflowId: matchedWorkflow?.id,
            children: subNodes
          };
        });

        return {
          id: `group-${groupName}`,
          name: groupName,
          type: 'group',
          group: groupName,
          children: domainNodes
        };
      });

    return {
      id: 'root',
      name: 'PromptLaz Atlas',
      type: 'root',
      children: groupNodes
    };
  }, [activeFilterGroup]);

  // Color generator based on depth and group
  const getNodeColor = (d: d3.HierarchyNode<TaxonomyHierarchyNode>) => {
    const data = d.data;
    if (data.type === 'root') return '#182742';

    const group = data.group;
    if (!group || !GROUP_COLORS[group]) return '#64748B';

    const palette = GROUP_COLORS[group];

    if (data.type === 'group') {
      return palette.base;
    }

    if (data.type === 'domain') {
      return d3.color(palette.base)?.copy({ opacity: 0.85 })?.formatRgb() || palette.base;
    }

    if (data.type === 'subdiscipline') {
      return d3.color(palette.base)?.copy({ opacity: 0.65 })?.formatRgb() || palette.base;
    }

    // Task
    return d3.color(palette.base)?.copy({ opacity: 0.45 })?.formatRgb() || palette.base;
  };

  // Render Treemap or Sunburst with D3
  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth || 800;
    const height = Math.max(540, Math.min(680, window.innerHeight * 0.7));

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .attr('width', '100%')
      .attr('height', height)
      .style('font-family', 'Inter, system-ui, sans-serif');

    // Hierarchy root
    const root = d3.hierarchy<TaxonomyHierarchyNode>(hierarchyData)
      .sum(d => (d.children && d.children.length > 0 ? 0 : 1))
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    if (vizType === 'treemap') {
      // ---------------- TREEMAP RENDER ----------------
      const treemapLayout = d3.treemap<TaxonomyHierarchyNode>()
        .size([width, height])
        .paddingOuter(4)
        .paddingTop(22)
        .paddingInner(2)
        .round(true);

      treemapLayout(root);

      const g = svg.append('g');

      // Create cells
      const nodes = root.descendants().filter(d => d.depth > 0 && d.depth <= 3);

      const cell = g.selectAll('g')
        .data(nodes)
        .enter()
        .append('g')
        .attr('transform', d => `translate(${(d as any).x0},${(d as any).y0})`)
        .attr('cursor', 'pointer');

      // Rectangles
      cell.append('rect')
        .attr('width', d => Math.max(0, (d as any).x1 - (d as any).x0))
        .attr('height', d => Math.max(0, (d as any).y1 - (d as any).y0))
        .attr('fill', d => {
          if (d.data.type === 'group') return isDark ? '#0F172A' : '#F8FAFC';
          return getNodeColor(d);
        })
        .attr('stroke', d => {
          if (d.data.type === 'group') return isDark ? '#334155' : '#CBD5E1';
          return isDark ? '#0B1120' : '#FFFFFF';
        })
        .attr('stroke-width', d => (d.data.type === 'group' ? 2 : 1))
        .attr('rx', 4)
        .attr('opacity', d => {
          if (searchFilter && searchFilter.trim()) {
            const q = searchFilter.toLowerCase();
            const match = d.data.name.toLowerCase().includes(q) ||
              d.data.summary?.toLowerCase().includes(q) ||
              d.data.aliases?.some(a => a.toLowerCase().includes(q));
            return match ? 1 : 0.25;
          }
          return d.data.type === 'group' ? 1 : 0.9;
        })
        .on('mouseenter', (event, d) => {
          setHoveredNode(d.data);
          d3.select(event.currentTarget as any).attr('stroke', isDark ? '#818CF8' : '#182742').attr('stroke-width', 2);
        })
        .on('mouseleave', (event, d) => {
          d3.select(event.currentTarget as any).attr('stroke', d.data.type === 'group' ? (isDark ? '#334155' : '#CBD5E1') : (isDark ? '#0B1120' : '#FFFFFF')).attr('stroke-width', d.data.type === 'group' ? 2 : 1);
        })
        .on('click', (event, d) => {
          event.stopPropagation();
          setSelectedNode(d.data);
        });

      // Labels for group / domain / subdiscipline
      cell.append('text')
        .attr('x', 6)
        .attr('y', d => (d.data.type === 'group' ? 15 : 16))
        .attr('fill', d => (d.data.type === 'group' ? (isDark ? '#F1F5F9' : '#1E293B') : '#FFFFFF'))
        .attr('font-size', d => {
          if (d.data.type === 'group') return '11px';
          if (d.data.type === 'domain') return '11px';
          return '10px';
        })
        .attr('font-weight', d => (d.data.type === 'group' || d.data.type === 'domain' ? '700' : '500'))
        .text(d => {
          const w = (d as any).x1 - (d as any).x0;
          const h = (d as any).y1 - (d as any).y0;
          if (w < 45 || h < 24) return '';
          const name = d.data.name;
          const maxChars = Math.floor(w / 7);
          return name.length > maxChars ? name.slice(0, Math.max(0, maxChars - 2)) + '…' : name;
        })
        .attr('pointer-events', 'none');

    } else {
      // ---------------- SUNBURST RENDER ----------------
      const radius = Math.min(width, height) / 2 - 10;
      const g = svg.append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

      const partition = d3.partition<TaxonomyHierarchyNode>()
        .size([2 * Math.PI, radius]);

      partition(root);

      const arc = d3.arc<d3.HierarchyRectangularNode<TaxonomyHierarchyNode>>()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius / 2)
        .innerRadius(d => d.y0)
        .outerRadius(d => Math.max(d.y0, d.y1 - 1));

      // Slices
      const path = g.selectAll('path')
        .data(root.descendants().filter(d => d.depth > 0 && d.depth <= 3))
        .enter()
        .append('path')
        .attr('fill', d => getNodeColor(d))
        .attr('d', arc as any)
        .attr('opacity', d => {
          if (searchFilter && searchFilter.trim()) {
            const q = searchFilter.toLowerCase();
            const match = d.data.name.toLowerCase().includes(q) ||
              d.data.summary?.toLowerCase().includes(q);
            return match ? 1 : 0.2;
          }
          return 0.9;
        })
        .attr('stroke', isDark ? '#0B1120' : '#FFFFFF')
        .attr('stroke-width', 1)
        .attr('cursor', 'pointer')
        .on('mouseenter', (event, d) => {
          setHoveredNode(d.data);
          d3.select(event.currentTarget as any).attr('opacity', 1).attr('stroke', isDark ? '#818CF8' : '#182742').attr('stroke-width', 2);
        })
        .on('mouseleave', (event, d) => {
          d3.select(event.currentTarget as any).attr('opacity', 0.9).attr('stroke', isDark ? '#0B1120' : '#FFFFFF').attr('stroke-width', 1);
        })
        .on('click', (event, d) => {
          event.stopPropagation();
          setSelectedNode(d.data);
        });

      // Center circle indicator
      const centerGroup = g.append('g')
        .attr('cursor', 'pointer')
        .on('click', () => setSelectedNode(null));

      centerGroup.append('circle')
        .attr('r', radius * 0.22)
        .attr('fill', isDark ? '#1E293B' : '#182742')
        .attr('stroke', isDark ? '#334155' : 'transparent')
        .attr('stroke-width', 1.5);

      centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '-0.2em')
        .attr('fill', '#FFFFFF')
        .attr('font-size', '11px')
        .attr('font-weight', '700')
        .text('Atlas');

      centerGroup.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '1.2em')
        .attr('fill', '#94A3B8')
        .attr('font-size', '9px')
        .text('54 Domains');
    }
  }, [hierarchyData, vizType, searchFilter, isDark]);

  // Status badge helper
  const getStatusBadge = (state?: CoverageState) => {
    switch (state) {
      case 'published_workflow':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]/50">
            <CheckCircle2 className="w-3 h-3" />
            Verified Workflow
          </span>
        );
      case 'starter_ready':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#EEF2FF] dark:bg-[#312E81]/40 text-[#4F46E5] dark:text-[#A5B4FC] border border-[#C7D2FE] dark:border-[#4F46E5]/50">
            <Sparkles className="w-3 h-3" />
            Starter Ready
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F8FAFC] dark:bg-[#1E293B] text-[#64748B] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#334155]">
            Explainer Ready
          </span>
        );
    }
  };

  return (
    <div className="bg-white dark:bg-[#1E293B] rounded-3xl border border-[#D9DFEA] dark:border-[#334155] shadow-xs overflow-hidden mb-8 transition-all">
      
      {/* Visualizer Top Toolbar */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#F8FAFC] to-white dark:from-[#0F172A] dark:to-[#1E293B] border-b border-[#D9DFEA] dark:border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
            <h2 className="font-display font-bold text-sm sm:text-base text-[#172033] dark:text-[#F1F5F9]">
              Interactive Taxonomy Explorer
            </h2>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-sm bg-[#EEF2FF] dark:bg-[#312E81]/40 text-[#4F46E5] dark:text-[#A5B4FC] font-semibold border border-[#C7D2FE] dark:border-[#4F46E5]/40">
              D3.js
            </span>
          </div>
          <p className="text-xs text-[#596579] dark:text-[#94A3B8] mt-0.5">
            Click any section or slice to inspect disciplines, tasks, and directly open guided workflows.
          </p>
        </div>

        {/* View Switcher (Treemap vs Sunburst) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-[#F1F4F9] dark:bg-[#0F172A] p-1 rounded-xl flex items-center border border-[#D9DFEA] dark:border-[#334155]">
            <button
              onClick={() => setVizType('treemap')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                vizType === 'treemap'
                  ? 'bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              Treemap View
            </button>
            <button
              onClick={() => setVizType('sunburst')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                vizType === 'sunburst'
                  ? 'bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              Sunburst View
            </button>
          </div>

          {selectedNode && (
            <button
              onClick={() => setSelectedNode(null)}
              className="p-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] hover:bg-[#F1F5F9] dark:hover:bg-[#0F172A] text-xs text-[#596579] dark:text-[#94A3B8]"
              title="Clear selection"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Main Visualization Canvas & Inspector Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[540px]">
        
        {/* D3 SVG Canvas (8 cols on desktop) */}
        <div 
          ref={containerRef} 
          className="lg:col-span-8 p-3 sm:p-5 relative bg-[#FAFBFD] dark:bg-[#0B1120] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-[#D9DFEA] dark:border-[#334155]"
        >
          <svg ref={svgRef} className="max-w-full drop-shadow-2xs select-none"></svg>

          {/* Quick Hover Tooltip Overlay */}
          {hoveredNode && !selectedNode && (
            <div className="absolute top-4 left-4 pointer-events-none bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-xs border border-[#CBD5E1] dark:border-[#334155] p-3 rounded-xl shadow-lg max-w-xs animate-in fade-in text-xs z-10">
              <div className="text-[10px] font-mono uppercase text-[#4F46E5] dark:text-[#818CF8] font-semibold">
                {hoveredNode.group} {hoveredNode.domainName ? `→ ${hoveredNode.domainName}` : ''}
              </div>
              <div className="font-bold text-[#172033] dark:text-[#F1F5F9] mt-0.5">
                {hoveredNode.name}
              </div>
              {hoveredNode.summary && (
                <div className="text-[11px] text-[#596579] dark:text-[#94A3B8] mt-1 line-clamp-2">
                  {hoveredNode.summary}
                </div>
              )}
              <div className="mt-2 flex items-center gap-1.5">
                {getStatusBadge(hoveredNode.coverageState)}
                <span className="text-[10px] text-[#94A3B8] dark:text-[#64748B]">Click to inspect</span>
              </div>
            </div>
          )}

          {/* Legend Strip */}
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-[#596579] dark:text-[#94A3B8] pointer-events-none flex-wrap gap-2">
            <span className="bg-white/90 dark:bg-[#1E293B]/90 px-2 py-0.5 rounded-md border border-[#E2E8F0] dark:border-[#334155] shadow-2xs font-mono text-[10px] text-[#172033] dark:text-[#F1F5F9]">
              {vizType === 'treemap' ? 'Nested Area = Discipline Density' : 'Concentric Rings = Groups → Domains → Disciplines'}
            </span>
          </div>
        </div>

        {/* Selected Node Inspector Panel (4 cols on desktop) */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-white dark:bg-[#1E293B] flex flex-col justify-between space-y-4">
          {selectedNode ? (
            <div className="space-y-4 animate-in fade-in">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] font-bold">
                  {selectedNode.type.toUpperCase()} INSPECTOR
                </div>
                <h3 className="font-display font-extrabold text-lg text-[#172033] dark:text-[#F1F5F9] mt-0.5">
                  {selectedNode.name}
                </h3>
                <div className="mt-1.5 flex items-center gap-2">
                  {getStatusBadge(selectedNode.coverageState)}
                </div>
              </div>

              {/* Breadcrumb Hierarchy */}
              <div className="p-3 rounded-xl bg-[#F8FAFC] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] space-y-1 text-xs text-[#596579] dark:text-[#94A3B8]">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B]">
                  Hierarchy Trail:
                </div>
                <div className="font-medium text-[#172033] dark:text-[#F1F5F9]">
                  {selectedNode.group && <span>{selectedNode.group}</span>}
                  {selectedNode.domainName && <span> → {selectedNode.domainName}</span>}
                  {selectedNode.subdisciplineName && <span> → {selectedNode.subdisciplineName}</span>}
                </div>
              </div>

              {/* Description */}
              {selectedNode.summary && (
                <div className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block mb-0.5">Scope & Description:</span>
                  {selectedNode.summary}
                </div>
              )}

              {/* Aliases */}
              {selectedNode.aliases && selectedNode.aliases.length > 0 && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B] block mb-1">
                    Recognized Aliases:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {selectedNode.aliases.map((al, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 bg-[#F1F5F9] dark:bg-[#0F172A] text-[#475569] dark:text-[#94A3B8] rounded-md">
                        {al}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Sample Tasks */}
              {selectedNode.sampleTasks && selectedNode.sampleTasks.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B] block">
                    Supported Tasks ({selectedNode.sampleTasks.length}):
                  </span>
                  <div className="space-y-1 max-h-36 overflow-y-auto custom-scrollbar pr-1">
                    {selectedNode.sampleTasks.map((t, idx) => (
                      <div
                        key={idx}
                        className="text-xs p-2 rounded-lg bg-[#FAFBFD] dark:bg-[#0F172A] border border-[#E2E8F0] dark:border-[#334155] text-[#1E293B] dark:text-[#CBD5E1] hover:border-[#4F46E5] dark:hover:border-[#818CF8] hover:text-[#4F46E5] dark:hover:text-[#818CF8] cursor-pointer transition-colors"
                        onClick={() => {
                          if (selectedNode.workflowId) {
                            onSelectWorkflow(selectedNode.workflowId);
                          } else {
                            onOpenUniversal();
                          }
                        }}
                      >
                        • {t}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                {selectedNode.workflowId ? (
                  <button
                    onClick={() => onSelectWorkflow(selectedNode.workflowId!)}
                    className="w-full h-11 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    Open Specialist Workflow
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={onOpenUniversal}
                    className="w-full h-11 px-4 rounded-xl border border-[#D9DFEA] dark:border-[#334155] hover:border-[#4F46E5] dark:hover:border-[#818CF8] hover:bg-[#EEF2FF] dark:hover:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    Launch Guided Starter
                    <ArrowRight className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-[#E2E8F0] dark:border-[#334155] rounded-2xl bg-[#FAFBFD] dark:bg-[#0F172A]">
              <Compass className="w-8 h-8 text-[#94A3B8] dark:text-[#64748B] mb-2 opacity-60" />
              <h4 className="font-display font-bold text-xs text-[#172033] dark:text-[#F1F5F9] mb-1">
                Select Any Node
              </h4>
              <p className="text-xs text-[#596579] dark:text-[#94A3B8] max-w-xs leading-relaxed">
                Click on any sector in the Treemap or Sunburst to view verified tasks, standards, and open the guided prompt builder.
              </p>
            </div>
          )}

          {/* Quick Universal Builder button at the bottom */}
          <div className="pt-3 border-t border-[#F1F4F9] dark:border-[#334155]">
            <button
              onClick={onOpenUniversal}
              className="w-full py-2 text-xs font-semibold text-[#4F46E5] dark:text-[#818CF8] hover:underline flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Or open Universal Builder ("I don't know what this is called")
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
