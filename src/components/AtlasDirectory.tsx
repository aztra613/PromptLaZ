import React, { useState, useMemo } from 'react';
import { DOMAIN_FAMILIES } from '../data/taxonomy';
import { WORKFLOWS } from '../data/workflows';
import { DomainGroup, CoverageState } from '../types';
import { 
  Search, BookOpen, Sparkles, ArrowRight, ShieldCheck, 
  Building2, Code, Camera, Briefcase, GraduationCap, TrendingUp,
  Atom, Globe, Dna, Users, Zap, FileSpreadsheet, Scale, Leaf, HeartHandshake,
  CheckCircle2, AlertCircle, HelpCircle, Eye, LayoutGrid, Shuffle
} from 'lucide-react';
import { TaxonomyVisualization } from './TaxonomyVisualization';
import { SITUATION_PHRASES } from '../utils/fuzzySearch';

interface AtlasDirectoryProps {
  onSelectWorkflow: (workflowId: string) => void;
  onOpenUniversal: () => void;
}

const GROUP_OPTIONS: ('All' | DomainGroup)[] = [
  'All',
  'Technology & engineering',
  'Knowledge & science',
  'Economy & work',
  'Society, law & culture',
  'Health, food & living things',
  'Personal life & situations'
];

export const AtlasDirectory: React.FC<AtlasDirectoryProps> = ({
  onSelectWorkflow,
  onOpenUniversal
}) => {
  const [selectedGroup, setSelectedGroup] = useState<'All' | DomainGroup>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState<'all' | 'published_only'>('all');
  const [directoryViewMode, setDirectoryViewMode] = useState<'visualizer' | 'cards' | 'both'>('both');

  // Filtered domains with situation phrase matching
  const filteredDomains = useMemo(() => {
    return DOMAIN_FAMILIES.filter((domain) => {
      // Group filter
      if (selectedGroup !== 'All' && domain.group !== selectedGroup) {
        return false;
      }

      // Coverage state filter
      if (filterState === 'published_only' && domain.coverageState !== 'published_workflow') {
        return false;
      }

      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = domain.name.toLowerCase().includes(q);
        const matchSummary = domain.summary.toLowerCase().includes(q);
        const matchAliases = domain.aliases.some(a => a.toLowerCase().includes(q));
        const matchSubs = domain.subdisciplines.some(s => 
          s.name.toLowerCase().includes(q) || 
          s.sampleTasks.some(t => t.toLowerCase().includes(q))
        );
        // Also check if any situation phrase matches this query and maps to this domain
        const matchSituation = SITUATION_PHRASES.some(sit => 
          sit.domainId === domain.id && sit.phrase.toLowerCase().includes(q)
        );
        return matchName || matchSummary || matchAliases || matchSubs || matchSituation;
      }

      return true;
    });
  }, [selectedGroup, searchQuery, filterState]);

  const handleRandomDomain = () => {
    const random = DOMAIN_FAMILIES[Math.floor(Math.random() * DOMAIN_FAMILIES.length)];
    if (random) {
      setSearchQuery(random.name);
      setSelectedGroup('All');
    }
  };

  // Total stats
  const totalSubdisciplines = DOMAIN_FAMILIES.reduce((acc, d) => acc + d.subdisciplines.length, 0);

  const getStatusBadge = (state: CoverageState) => {
    switch (state) {
      case 'published_workflow':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
            <CheckCircle2 className="w-3 h-3" />
            Verified Workflows
          </span>
        );
      case 'starter_ready':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE]">
            <Sparkles className="w-3 h-3" />
            Starter Ready
          </span>
        );
      case 'explainer_ready':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]">
            <BookOpen className="w-3 h-3" />
            Explainer Ready
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
            Taxonomy Seed
          </span>
        );
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
      {/* Directory Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] mb-2">
          <span>Global Subject Graph</span>
          <span>·</span>
          <span>A–Z Directory</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#172033] dark:text-[#F1F5F9] tracking-tight mb-3">
          Explore the PromptLas Atlas
        </h1>
        <p className="text-sm sm:text-base text-[#596579] dark:text-[#94A3B8] max-w-3xl leading-relaxed">
          The connected directory of 39 domain families and {totalSubdisciplines} subdisciplines. Every major field has a canonical node, question bank, and an honest status. Select any published workflow or launch a guided starter.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4 mb-8 bg-white dark:bg-[#1E293B] p-5 rounded-2xl border border-[#D9DFEA] dark:border-[#334155] shadow-xs">
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-[#94A3B8] dark:text-[#64748B] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search disciplines, tasks, aliases, or standards (e.g. 'soil settlement', 'kubernetes', 'proctor', 'dcf', 'playwright')..."
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden text-sm text-[#172033] dark:text-[#F1F5F9] placeholder-[#94A3B8] dark:placeholder-[#64748B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white bg-[#F7F8FC] dark:bg-[#1E293B] px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={handleRandomDomain}
            className="h-12 px-4 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shrink-0"
            title="Jump to a random domain (Wikipedia style)"
          >
            <Shuffle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>🎲 Random Domain</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px] text-slate-500 pb-0.5 custom-scrollbar">
          <span className="font-semibold text-slate-400 shrink-0">Try searching:</span>
          {['soil settlement', 'cracking beam', 'kubernetes crash', 'DCF valuation', 'tenant problem', 'tax prep', 'photo lighting', 'food safety'].map((chip) => (
            <button
              key={chip}
              type="button"
              onClick={() => {
                setSearchQuery(chip);
                setSelectedGroup('All');
              }}
              className="shrink-0 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 transition-colors"
            >
              "{chip}"
            </button>
          ))}
        </div>

        {/* Group Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {GROUP_OPTIONS.map((grp) => (
            <button
              key={grp}
              onClick={() => setSelectedGroup(grp)}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedGroup === grp
                  ? 'bg-[#182742] dark:bg-[#4F46E5] text-white shadow-xs'
                  : 'bg-[#F7F8FC] dark:bg-[#0F172A] hover:bg-[#EEF2FF] dark:hover:bg-[#1E293B] text-[#596579] dark:text-[#94A3B8] hover:text-[#4F46E5] dark:hover:text-white border border-[#D9DFEA] dark:border-[#334155]'
              }`}
            >
              {grp}
            </button>
          ))}
        </div>

        {/* Secondary toggles */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#596579] dark:text-[#94A3B8] pt-2 border-t border-[#F1F4F9] dark:border-[#334155] gap-3">
          <span>
            Showing <strong className="text-[#172033] dark:text-[#F1F5F9]">{filteredDomains.length}</strong> of 39 domain families
          </span>
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* View Mode Switcher */}
            <div className="bg-[#F1F4F9] dark:bg-[#0F172A] p-0.5 rounded-lg flex items-center border border-[#D9DFEA] dark:border-[#334155]">
              <button
                onClick={() => setDirectoryViewMode('visualizer')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  directoryViewMode === 'visualizer'
                    ? 'bg-white dark:bg-[#1E293B] text-[#4F46E5] dark:text-[#818CF8] shadow-xs'
                    : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                D3 Visualizer
              </button>
              <button
                onClick={() => setDirectoryViewMode('cards')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  directoryViewMode === 'cards'
                    ? 'bg-white dark:bg-[#1E293B] text-[#4F46E5] dark:text-[#818CF8] shadow-xs'
                    : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                Cards Grid
              </button>
              <button
                onClick={() => setDirectoryViewMode('both')}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  directoryViewMode === 'both'
                    ? 'bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] shadow-xs'
                    : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                Both
              </button>
            </div>

            <button
              onClick={() => setFilterState(filterState === 'all' ? 'published_only' : 'all')}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                filterState === 'published_only'
                  ? 'bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border-[#A7F3D0] dark:border-[#059669]/50'
                  : 'bg-[#F7F8FC] dark:bg-[#0F172A] text-[#596579] dark:text-[#94A3B8] border-[#D9DFEA] dark:border-[#334155]'
              }`}
            >
              {filterState === 'published_only' ? '✓ Verified only' : 'Filter: Verified only'}
            </button>
          </div>
        </div>
      </div>

      {/* Interactive D3 Visualization (Treemap / Sunburst) */}
      {(directoryViewMode === 'visualizer' || directoryViewMode === 'both') && (
        <TaxonomyVisualization
          onSelectWorkflow={onSelectWorkflow}
          onOpenUniversal={onOpenUniversal}
          activeFilterGroup={selectedGroup}
          searchFilter={searchQuery}
        />
      )}

      {/* Domain Cards Grid */}
      {(directoryViewMode === 'cards' || directoryViewMode === 'both') && (
        <div className="space-y-6">
        {filteredDomains.map((domain) => {
          // Find matching published workflows for this domain
          const domainWorkflows = WORKFLOWS.filter(w => w.domainId === domain.id);

          return (
            <div
              key={domain.id}
              className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#D9DFEA] dark:border-[#334155] overflow-hidden hover:border-[#CBD5E1] dark:hover:border-[#475569] transition-all shadow-xs"
            >
              {/* Domain Header */}
              <div className="p-5 sm:p-6 bg-gradient-to-r from-white to-[#F7F8FC] dark:from-[#1E293B] dark:to-[#0F172A] border-b border-[#D9DFEA] dark:border-[#334155] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] flex items-center justify-center shrink-0 shadow-2xs font-bold text-lg">
                    {domain.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h2 className="font-display font-bold text-lg sm:text-xl text-[#172033] dark:text-[#F1F5F9]">
                        {domain.name}
                      </h2>
                      {getStatusBadge(domain.coverageState)}
                    </div>
                    <p className="text-xs sm:text-sm text-[#596579] dark:text-[#94A3B8] mt-1 max-w-2xl">
                      {domain.summary}
                    </p>
                    <div className="flex items-center gap-1.5 flex-wrap mt-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B]">Aliases:</span>
                      {domain.aliases.slice(0, 4).map((alias, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#0F172A] text-[#475569] dark:text-[#94A3B8] font-mono">
                          {alias}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  {domainWorkflows.length > 0 ? (
                    <button
                      onClick={() => onSelectWorkflow(domainWorkflows[0].id)}
                      className="h-9 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                    >
                      Open Specialist Workflow
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      onClick={onOpenUniversal}
                      className="h-9 px-3.5 rounded-xl border border-[#D9DFEA] dark:border-[#334155] hover:border-[#4F46E5] dark:hover:border-[#818CF8] hover:bg-[#EEF2FF] dark:hover:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] text-xs font-medium flex items-center gap-1.5 transition-colors"
                    >
                      Launch Guided Starter
                      <ArrowRight className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
                    </button>
                  )}
                </div>
              </div>

              {/* Subdisciplines & Granular Trees */}
              <div className="p-5 sm:p-6 bg-white dark:bg-[#1E293B]">
                <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B] mb-3">
                  Disciplines & Common Tasks ({domain.subdisciplines.length})
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {domain.subdisciplines.map((sub) => (
                    <div
                      key={sub.id}
                      className="p-3.5 rounded-xl border border-[#E2E8F0] dark:border-[#334155] hover:border-[#CBD5E1] dark:hover:border-[#475569] bg-[#F8FAFC] dark:bg-[#0F172A] flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-xs text-[#172033] dark:text-[#F1F5F9]">
                            {sub.name}
                          </h3>
                          {sub.coverageState === 'published_workflow' && (
                            <span className="w-2 h-2 rounded-full bg-[#059669] dark:bg-[#34D399]" title="Published verified workflow available" />
                          )}
                        </div>
                        <p className="text-[11px] text-[#596579] dark:text-[#94A3B8] mb-2 leading-relaxed">
                          {sub.summary}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#E2E8F0] dark:border-[#334155] space-y-1">
                        <span className="text-[10px] uppercase font-bold text-[#94A3B8] dark:text-[#64748B] block">Sample tasks:</span>
                        {sub.sampleTasks.map((task, tIdx) => (
                          <div
                            key={tIdx}
                            onClick={() => {
                              if (domainWorkflows.length > 0) {
                                onSelectWorkflow(domainWorkflows[0].id);
                              } else {
                                onOpenUniversal();
                              }
                            }}
                            className="text-[11px] text-[#4F46E5] dark:text-[#818CF8] hover:underline cursor-pointer flex items-center gap-1 truncate"
                          >
                            <span>•</span>
                            <span className="truncate">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};
