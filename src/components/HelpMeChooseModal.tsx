import React, { useState, useMemo } from 'react';
import { 
  X, ArrowRight, CheckCircle, HelpCircle, Sparkles, 
  Search, Shuffle, BookOpen, Layers, Terminal, AlertCircle,
  Building2, Code, Camera, Briefcase, GraduationCap, TrendingUp,
  Atom, Globe, Dna, Users, ShieldCheck, HeartHandshake, Compass
} from 'lucide-react';
import { fuzzySearchTaxonomy, SITUATION_PHRASES } from '../utils/fuzzySearch';
import { DOMAIN_FAMILIES } from '../data/taxonomy';
import { WORKFLOWS } from '../data/workflows';
import { DomainGroup } from '../types';

interface HelpMeChooseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWorkflow: (workflowId: string) => void;
}

const PORTALS: { group: DomainGroup; label: string; icon: any; count: number; desc: string; sample: string }[] = [
  {
    group: 'Technology & engineering',
    label: 'Engineering & Technology',
    icon: Building2,
    count: 10,
    desc: 'Civil, electrical, mechanical, software, AI, robotics, cybersecurity & aerospace',
    sample: 'Soil compaction, RC beams, Kubernetes manifests, PCB design'
  },
  {
    group: 'Knowledge & science',
    label: 'Sciences & Humanities',
    icon: Atom,
    count: 7,
    desc: 'Physics, chemistry, life sciences, climate, space, economics, sociology & history',
    sample: 'Reaction kinetics, thermodynamics, CRISPR, climate scenarios'
  },
  {
    group: 'Economy & work',
    label: 'Business, Finance & Work',
    icon: TrendingUp,
    count: 7,
    desc: 'Startups, financial valuation, accounting, marketing, HR, logistics & real estate',
    sample: 'DCF valuation, MVP PRD, SEO audit, commercial lease review'
  },
  {
    group: 'Society, law & culture',
    label: 'Law, Education & Culture',
    icon: GraduationCap,
    count: 7,
    desc: 'Legal concepts, active-recall tutoring, creative writing, arts, sports & travel',
    sample: 'Socratic exam prep, contract review, technical writing'
  },
  {
    group: 'Health, food & living things',
    label: 'Health, Food & Environment',
    icon: HeartHandshake,
    count: 5,
    desc: 'Medicine, nursing, nutrition, restaurant operations, agriculture & sustainability',
    sample: 'HACCP food safety, clinical study breakdown, crop planning'
  },
  {
    group: 'Personal life & situations',
    label: 'Personal Life & Living',
    icon: Compass,
    count: 3,
    desc: 'Family planning, home renovation, personal productivity & life transitions',
    sample: 'Home renovation checklist, eldercare logistics, goal setting'
  }
];

export const HelpMeChooseModal: React.FC<HelpMeChooseModalProps> = ({
  isOpen,
  onClose,
  onSelectWorkflow
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<DomainGroup | null>(null);

  // Real-time fuzzy search
  const searchResults = useMemo(() => {
    if (!isOpen || !searchQuery.trim()) return [];
    return fuzzySearchTaxonomy(searchQuery, 8);
  }, [isOpen, searchQuery]);

  if (!isOpen) return null;

  // Handle Random Inspiration (Wikipedia-style)
  const handleRandomWalkthrough = () => {
    // Pick from ready workflows first, or fallback
    const randomWf = WORKFLOWS[Math.floor(Math.random() * WORKFLOWS.length)];
    if (randomWf) {
      onSelectWorkflow(randomWf.id);
      onClose();
    }
  };

  // Quick select
  const handleSelectRoute = (workflowId: string) => {
    onSelectWorkflow(workflowId);
    onClose();
  };

  // Fallback to universal builder
  const handleSelectUniversal = () => {
    onSelectWorkflow('universal_builder');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#172033]/70 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white dark:bg-[#1E293B] rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
        aria-labelledby="help-modal-title"
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 id="help-modal-title" className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <span>Prompt Finder & Inspiration Hub</span>
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Have writer's block? Search colloquial phrases or pick a domain
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRandomWalkthrough}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition-colors"
              title="Pick a random ready workflow"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>🎲 Surprise Me</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar (Wikipedia Style) */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything... e.g. 'soil too soft', 'crashing server', 'DCF valuation', 'marketing email'..."
              className="w-full h-11 pl-10 pr-24 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick situation chips under search bar */}
          <div className="flex items-center gap-1.5 mt-2.5 overflow-x-auto pb-1 text-[11px] text-slate-500 scrollbar-none">
            <span className="shrink-0 font-medium text-slate-400">Try:</span>
            {['concrete crack', 'server crash', 'DCF valuation', 'tenant problem', 'active recall', 'photo lighting'].map((chip) => (
              <button
                key={chip}
                onClick={() => setSearchQuery(chip)}
                className="shrink-0 px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
              >
                "{chip}"
              </button>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">

          {/* Real-time Search Results View */}
          {searchQuery.trim() ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Matching Prompts & Domains ({searchResults.length})</span>
                <span className="text-[11px] font-normal">Ranked by relevance</span>
              </div>

              {searchResults.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    No exact match found for "{searchQuery}"
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    PromptLaz covers 39 domain families! You can build a custom prompt for any topic using the Universal Builder.
                  </p>
                  <button
                    onClick={handleSelectUniversal}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm transition-colors"
                  >
                    <span>Open Universal Prompt Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  {searchResults.map((res, i) => {
                    if (res.type === 'workflow' && res.workflow) {
                      return (
                        <button
                          key={i}
                          onClick={() => handleSelectRoute(res.workflow!.id)}
                          className="w-full text-left p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/40 dark:bg-indigo-950/20 hover:border-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 transition-all flex items-start justify-between group"
                        >
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300">
                                Verified Studio Workflow
                              </span>
                              <span className="text-xs text-slate-400">{res.domain.name}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                              {res.workflow.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                              {res.workflow.summary}
                            </p>
                          </div>
                          <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center shrink-0 mt-1 group-hover:translate-x-1 transition-transform">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </button>
                      );
                    }

                    if (res.type === 'situation' && res.situationPhrase) {
                      return (
                        <button
                          key={i}
                          onClick={() => {
                            if (res.workflow) {
                              handleSelectRoute(res.workflow.id);
                            } else {
                              handleSelectUniversal();
                            }
                          }}
                          className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-between group"
                        >
                          <div>
                            <span className="text-[10px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                              Matched Situation
                            </span>
                            <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 capitalize">
                              "{res.situationPhrase}"
                            </div>
                            <div className="text-[11px] text-slate-500">
                              Domain: {res.domain.name} {res.subdiscipline ? `→ ${res.subdiscipline.name}` : ''}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                        </button>
                      );
                    }

                    return (
                      <button
                        key={i}
                        onClick={handleSelectUniversal}
                        className="w-full text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {res.domain.name}
                            {res.subdiscipline && <span className="font-normal text-slate-500"> · {res.subdiscipline.name}</span>}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {res.matchedOn ? `Matched: ${res.matchedOn}` : res.domain.summary}
                          </div>
                        </div>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium group-hover:translate-x-0.5 transition-transform">
                          Open →
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            /* Browse by 6 Universal Portals */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
                  Browse by Subject Portals (54 Domains)
                </span>
                <span className="text-xs text-slate-500">
                  Select an area to explore
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PORTALS.map((portal) => {
                  const Icon = portal.icon;
                  const isSelected = selectedGroup === portal.group;

                  return (
                    <div
                      key={portal.group}
                      className={`p-4 rounded-xl border transition-all text-left flex flex-col justify-between ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 ring-1 ring-indigo-500'
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-600'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                            {portal.count} domains
                          </span>
                        </div>

                        <h3 className="font-display font-semibold text-xs sm:text-sm text-slate-900 dark:text-slate-100 mb-1">
                          {portal.label}
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">
                          {portal.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                        <span className="text-[10px] text-slate-400 block mb-2 truncate">
                          e.g., {portal.sample}
                        </span>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedGroup(isSelected ? null : portal.group);
                            }}
                            className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                          >
                            <span>{isSelected ? 'Hide domains' : 'View domains'}</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Expanded domains for this portal */}
                        {isSelected && (
                          <div className="mt-3 pt-3 border-t border-indigo-100 dark:border-slate-800 space-y-1.5 animate-in fade-in">
                            {DOMAIN_FAMILIES.filter(d => d.group === portal.group).map(dom => (
                              <button
                                key={dom.id}
                                onClick={handleSelectUniversal}
                                className="w-full text-left p-2 rounded-lg bg-white dark:bg-slate-800/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-slate-200 dark:border-slate-700 text-xs flex items-center justify-between transition-colors"
                              >
                                <span className="font-medium text-slate-800 dark:text-slate-200 truncate pr-2">
                                  {dom.name}
                                </span>
                                <span className="text-[10px] text-slate-400 shrink-0">
                                  {dom.subdisciplines.length} branches →
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Universal Fallback Banner */}
              <div className="pt-2">
                <button
                  onClick={handleSelectUniversal}
                  className="w-full p-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 hover:bg-indigo-50/60 dark:hover:bg-indigo-950/30 hover:border-indigo-400 text-left transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                      <Layers className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100">
                        Universal Fallback Studio
                      </div>
                      <div className="text-xs text-slate-500">
                        Build high-precision engineering & professional prompts for any subject
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Covers all 54 PRD domain families with 298 subdisciplines</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
