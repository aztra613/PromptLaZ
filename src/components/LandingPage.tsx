import React, { useState } from 'react';
import { 
  Compass, ArrowRight, Sparkles, Search, CheckCircle2, Shield, Lock, 
  HelpCircle, ChevronDown, ChevronUp, Copy, Check, Eye, AlertTriangle,
  Building2, Code, Camera, Briefcase, GraduationCap, TrendingUp, Layers,
  Video, Globe, Wand2, BookOpen, Zap, X
} from 'lucide-react';
import { WORKFLOWS } from '../data/workflows';

interface LandingPageProps {
  onSelectWorkflow: (workflowId: string) => void;
  onExploreAtlas: () => void;
  onOpenHelpMeChoose: () => void;
  onOpenPolicy: (tab: 'safety' | 'privacy' | 'boundaries') => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onSelectWorkflow,
  onExploreAtlas,
  onOpenHelpMeChoose,
  onOpenPolicy
}) => {
  // Hero Universal Search for writer's block & 12-year-old intuitive discovery
  const [heroSearchQuery, setHeroSearchQuery] = useState('');

  // Hero mini-workspace interactive state
  const [demoGoal, setDemoGoal] = useState('Product photo of a ceramic coffee dripper');
  const [demoLighting, setDemoLighting] = useState('Warm morning window light with soft diffusion');
  const [demoBlur, setDemoBlur] = useState('Soft blurry background (f/2.8 equivalent)');
  const [demoCopied, setDemoCopied] = useState(false);

  // Search input on directory section
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilterChip, setSelectedFilterChip] = useState<string>('All');

  // FAQ open/close accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Hero search matching across all workflows and aliases
  const heroSearchResults = heroSearchQuery.trim()
    ? WORKFLOWS.filter(wf => {
        const q = heroSearchQuery.toLowerCase();
        return (
          wf.title.toLowerCase().includes(q) ||
          wf.aliases.some(a => a.toLowerCase().includes(q)) ||
          wf.summary.toLowerCase().includes(q) ||
          wf.discipline.toLowerCase().includes(q) ||
          wf.domainName.toLowerCase().includes(q)
        );
      }).slice(0, 5)
    : [];

  // Demo prompt calculation
  const demoPromptText = `Create a polished editorial commercial photograph of ${demoGoal || 'a handcrafted item'} on a light travertine stone slab.
Lighting: ${demoLighting}.
Depth of Field: ${demoBlur}.
Composition: 4:5 vertical portrait framing, hero item centered in right third, natural subtle shadow on tabletop.
Preserve authentic ceramic glaze texture and matte finish.
Avoid: text, watermarks, plastic props, or artificial glare.`;

  const handleCopyDemo = () => {
    navigator.clipboard.writeText(demoPromptText);
    setDemoCopied(true);
    setTimeout(() => setDemoCopied(false), 2000);
  };

  // Filter workflows for directory section
  const filteredWorkflows = WORKFLOWS.filter(wf => {
    if (selectedFilterChip === 'Beginner-friendly' && wf.skillLevel !== 'Beginner') return false;
    if (selectedFilterChip === 'Advanced' && wf.skillLevel === 'Beginner') return false;
    if (selectedFilterChip === 'Engineering' && wf.domainId !== 'civil_built') return false;
    if (selectedFilterChip === 'Software' && wf.domainId !== 'computing_software') return false;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = wf.title.toLowerCase().includes(q);
      const matchAliases = wf.aliases.some(a => a.toLowerCase().includes(q));
      const matchSummary = wf.summary.toLowerCase().includes(q);
      const matchDomain = wf.domainName.toLowerCase().includes(q);
      return matchTitle || matchAliases || matchSummary || matchDomain;
    }
    return true;
  });

  const faqs = [
    {
      q: 'Do I need to know prompt engineering or special syntax?',
      a: 'No. PromptLaz is designed for people who have a task but do not know prompt-engineering vocabulary. You answer everyday plain-language questions, and PromptLaz structures the instructions, constraints, and verification checks automatically.'
    },
    {
      q: 'Does PromptLaz generate the image or execute the code itself?',
      a: 'No, and we are completely transparent about this boundary. PromptLaz prepares the structured prompt with quality and safety checks. Execution happens in your designated tool (ChatGPT, Claude, Gemini, Midjourney, Cursor, etc.).'
    },
    {
      q: 'What if I do not know a technical answer or contract code?',
      a: 'Every specialized field has a safe "I do not know" or "Help me choose" option. When critical data is missing (like soil layer tests), PromptLaz safely converts the output into an investigation checklist rather than inventing fictitious numbers.'
    },
    {
      q: 'Can I use PromptLaz without signing in?',
      a: 'Yes. The entire core prompt studio operates 100% in your browser with no login, no accounts, and no cookies required.'
    },
    {
      q: 'Are engineering or financial prompts certified advice?',
      a: 'No. Civil engineering and corporate valuation workflows provide computational framing and calculation verification briefs. They do NOT replace certified Professional Engineer (PE) stamps or licensed financial advisor reviews.'
    },
    {
      q: 'Can I edit the assembled prompt before copying?',
      a: 'Yes. You can edit the prompt text directly in the Studio workspace. If you later change form fields, PromptLaz gives you the choice to keep your manual edits or rebuild from the form, so your edits are never silently overwritten.'
    },
    {
      q: 'Are my uploaded reference photos sent to PromptLaz servers?',
      a: 'Never. In prompt-only mode, reference images are previewed locally in your browser memory via temporary object URLs (blob:). Zero image bytes are uploaded to remote servers.'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      
      {/* 1. HERO SECTION (Above the fold) */}
      <section className="pt-8 sm:pt-14 pb-8 sm:pb-12 border-b border-[#D9DFEA] dark:border-[#334155] bg-gradient-to-b from-white to-[#F7F8FC] dark:from-[#0B1120] dark:to-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left Column: Copy & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#312E81]/40 border border-[#C7D2FE] dark:border-[#4F46E5]/40 text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:text-[#A5B4FC]">
                <Sparkles className="w-3.5 h-3.5" />
                Turn your idea into a clear AI prompt
              </div>

              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[3.25rem] text-[#172033] dark:text-[#F1F5F9] tracking-tight leading-[1.08]">
                Tell us what you need to do. <br className="hidden sm:inline" />
                <span className="text-[#4F46E5] dark:text-[#818CF8]">We’ll help you ask AI clearly.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#596579] dark:text-[#94A3B8] max-w-xl leading-relaxed">
                Overcome writer's block in seconds. Type what you want to achieve or pick your field — our guided forms build high-precision, safety-checked prompts. No prompt-engineering experience required.
              </p>

              {/* Universal "I want to..." Search Bar */}
              <div className="relative pt-1">
                <div className="relative flex items-center">
                  <div className="absolute left-4 text-[#4F46E5] dark:text-[#818CF8]">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={heroSearchQuery}
                    onChange={(e) => setHeroSearchQuery(e.target.value)}
                    placeholder="What are you trying to do? (e.g. 'design a concrete beam', 'write a video script', 'balance sheet')"
                    className="w-full h-13 pl-12 pr-24 rounded-2xl border-2 border-[#C7D2FE] dark:border-[#3730A3] bg-white dark:bg-[#0F172A] text-xs sm:text-sm text-[#172033] dark:text-[#F1F5F9] shadow-sm focus:outline-hidden focus:border-[#4F46E5] focus:ring-4 focus:ring-[#EEF2FF] dark:focus:ring-[#312E81]/40 transition-all placeholder:text-[#94A3B8]"
                  />
                  {heroSearchQuery ? (
                    <button
                      onClick={() => setHeroSearchQuery('')}
                      className="absolute right-3 p-1.5 rounded-lg text-[#596579] dark:text-[#94A3B8] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B]"
                      title="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  ) : (
                    <div className="absolute right-3 hidden sm:flex items-center gap-1 text-[11px] font-bold text-[#4F46E5] dark:text-[#818CF8] bg-[#EEF2FF] dark:bg-[#312E81]/40 px-2.5 py-1 rounded-lg">
                      <Sparkles className="w-3.5 h-3.5" />
                      Instant Match
                    </div>
                  )}
                </div>

                {/* Quick Intent Chips for Writer's Block */}
                <div className="flex items-center gap-1.5 flex-wrap pt-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B]">
                    Try:
                  </span>
                  {[
                    { label: 'Concrete QA', icon: '🏗️', query: 'concrete' },
                    { label: 'Video Script', icon: '🎬', query: 'video script' },
                    { label: 'DCF Valuation', icon: '📈', query: 'valuation' },
                    { label: 'FastAPI Spec', icon: '💻', query: 'api' },
                    { label: 'Soil Compaction', icon: '🧱', query: 'soil' },
                    { label: 'Exam Tutor', icon: '🔬', query: 'exam' }
                  ].map(chip => (
                    <button
                      key={chip.label}
                      onClick={() => setHeroSearchQuery(chip.query)}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] text-[#172033] dark:text-[#CBD5E1] hover:border-[#4F46E5] dark:hover:border-[#818CF8] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>{chip.icon}</span>
                      <span>{chip.label}</span>
                    </button>
                  ))}
                </div>

                {/* Live Dropdown Matching Results */}
                {heroSearchQuery.trim().length > 0 && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#0F172A] border border-[#C7D2FE] dark:border-[#3730A3] rounded-2xl shadow-2xl p-3 z-50 max-h-96 overflow-y-auto space-y-2 animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between px-2 py-1 border-b border-[#F1F4F9] dark:border-[#334155]">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8]">
                        Matching Workflows ({heroSearchResults.length})
                      </span>
                      <button 
                        onClick={() => setHeroSearchQuery('')}
                        className="text-[11px] text-[#596579] hover:text-[#172033] dark:hover:text-white"
                      >
                        Close
                      </button>
                    </div>

                    {heroSearchResults.length > 0 ? (
                      <div className="space-y-1.5">
                        {heroSearchResults.map(wf => (
                          <div
                            key={wf.id}
                            className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] hover:border-[#4F46E5] dark:hover:border-[#818CF8] bg-[#FAFBFD] dark:bg-[#1E293B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 group transition-all"
                          >
                            <div className="space-y-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9]">
                                  {wf.title}
                                </span>
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#EEF2FF] dark:bg-[#312E81]/50 text-[#4F46E5] dark:text-[#A5B4FC]">
                                  {wf.domainName}
                                </span>
                              </div>
                              <p className="text-xs text-[#596579] dark:text-[#94A3B8] line-clamp-1">
                                {wf.summary}
                              </p>
                              {wf.recipes && wf.recipes.length > 0 && (
                                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                                  <span className="text-[10px] text-[#94A3B8]">1-Click Recipes:</span>
                                  {wf.recipes.slice(0, 2).map(r => (
                                    <span key={r.id} className="text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-700 text-[#4F46E5] dark:text-[#818CF8] font-medium">
                                      {r.title}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>

                            <button
                              onClick={() => {
                                onSelectWorkflow(wf.id);
                                setHeroSearchQuery('');
                              }}
                              className="px-3.5 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shrink-0 flex items-center gap-1 shadow-xs transition-colors"
                            >
                              Open Studio Form
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center space-y-2">
                        <p className="text-xs text-[#596579] dark:text-[#94A3B8]">
                          No predefined workflow matching "{heroSearchQuery}".
                        </p>
                        <button
                          onClick={() => {
                            onSelectWorkflow('universal_builder');
                            setHeroSearchQuery('');
                          }}
                          className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold inline-flex items-center gap-1.5"
                        >
                          <Wand2 className="w-3.5 h-3.5" />
                          Build with Universal Prompt Studio (39 Domains)
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Dynamic CTA Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={() => onSelectWorkflow('universal_builder')}
                  className="h-12 px-7 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm shadow-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
                >
                  <Wand2 className="w-4 h-4" />
                  Start with Any Task
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenHelpMeChoose}
                  className="h-12 px-5 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:bg-[#F7F8FC] dark:hover:bg-[#334155] text-[#172033] dark:text-[#F1F5F9] font-semibold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <HelpCircle className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
                  Help Me Choose
                </button>

                <button
                  onClick={onExploreAtlas}
                  className="h-12 px-5 rounded-xl border border-transparent hover:border-[#D9DFEA] dark:hover:border-[#334155] text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white font-semibold text-sm transition-colors flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore All 39 Domains
                </button>
              </div>

              {/* Reassurance line */}
              <div className="pt-1 flex items-center gap-2 text-xs text-[#596579] dark:text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#0F9D91] dark:text-[#2DD4BF]" />
                <span>Free to use · No login · Global codes & currencies · Private in your browser</span>
              </div>
            </div>

            {/* Hero Right Column: REAL Interactive Mini-Workspace Preview */}
            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#D9DFEA] dark:border-[#334155] shadow-lg p-5 space-y-4 relative">
                <div className="flex items-center justify-between border-b border-[#F1F4F9] dark:border-[#334155] pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#18794E] dark:bg-[#22C55E] animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#172033] dark:text-[#F1F5F9]">
                      Interactive Studio Preview
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-[#4F46E5] dark:text-[#A5B4FC] bg-[#EEF2FF] dark:bg-[#312E81]/40 px-2 py-0.5 rounded-md">
                    Live Demo
                  </span>
                </div>

                {/* Mini Form Inputs */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">
                      What are you creating?
                    </label>
                    <input
                      type="text"
                      value={demoGoal}
                      onChange={(e) => setDemoGoal(e.target.value)}
                      className="w-full h-8 px-2.5 text-xs rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] focus:bg-white dark:focus:bg-[#0B1120] focus:outline-hidden focus:border-[#4F46E5]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">
                      Lighting intent:
                    </label>
                    <select
                      value={demoLighting}
                      onChange={(e) => setDemoLighting(e.target.value)}
                      className="w-full h-8 px-2 text-xs rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] focus:bg-white dark:focus:bg-[#0B1120] focus:outline-hidden focus:border-[#4F46E5]"
                    >
                      <option value="Warm morning window light with soft diffusion">Warm morning window light</option>
                      <option value="Dramatic high-contrast rim lighting">Dramatic high-contrast rim lighting</option>
                      <option value="Crisp clean commercial studio softbox">Crisp commercial studio softbox</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">
                      How blurry should the background be?
                    </label>
                    <select
                      value={demoBlur}
                      onChange={(e) => setDemoBlur(e.target.value)}
                      className="w-full h-8 px-2 text-xs rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] focus:bg-white dark:focus:bg-[#0B1120] focus:outline-hidden focus:border-[#4F46E5]"
                    >
                      <option value="Soft blurry background (f/2.8 equivalent)">Soft blurry background (f/2.8)</option>
                      <option value="Moderately soft background (f/5.6 equivalent)">Moderately soft background (f/5.6)</option>
                      <option value="Sharp front-to-back (f/11 equivalent)">Sharp front-to-back (f/11)</option>
                    </select>
                  </div>
                </div>

                {/* Generated Prompt Excerpt */}
                <div className="pt-2 border-t border-[#F1F4F9] dark:border-[#334155]">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] dark:text-[#64748B]">
                      Generated Prompt Output
                    </span>
                    <button
                      onClick={handleCopyDemo}
                      className="text-[11px] font-semibold text-[#4F46E5] dark:text-[#818CF8] hover:underline flex items-center gap-1"
                    >
                      {demoCopied ? <Check className="w-3 h-3 text-[#059669] dark:text-[#34D399]" /> : <Copy className="w-3 h-3" />}
                      {demoCopied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="p-3 bg-[#FAFBFD] dark:bg-[#090D16] rounded-xl border border-[#E2E8F0] dark:border-[#334155] font-mono text-[11px] text-[#334155] dark:text-[#CBD5E1] leading-relaxed max-h-36 overflow-y-auto custom-scrollbar">
                    {demoPromptText}
                  </div>
                </div>

                <button
                  onClick={() => onSelectWorkflow('creative_product_photography')}
                  className="w-full py-2 bg-[#182742] dark:bg-[#4F46E5] hover:bg-[#172033] dark:hover:bg-[#4338CA] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors"
                >
                  Open Full Studio Workspace
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FAST START: WORLD-READY QUICK-START ROLE CARDS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEF2FF] dark:bg-[#312E81]/40 border border-[#C7D2FE] dark:border-[#4F46E5]/40 text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:text-[#A5B4FC] mb-3">
            <Globe className="w-3.5 h-3.5" />
            World-Ready Guided Domains
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#172033] dark:text-[#F1F5F9] mb-2">
            What are you here to build today?
          </h2>
          <p className="text-xs sm:text-sm text-[#596579] dark:text-[#94A3B8]">
            Whether you have writer's block or need strict technical codebook enforcement, select your field to start with guided questions and 1-click instant recipes.
          </p>
        </div>

        {/* 6 Dynamic Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Card 1: Civil & Built Environment */}
          <div className="p-5 rounded-2xl border-2 border-amber-200/80 dark:border-amber-900/60 bg-gradient-to-br from-white via-amber-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                  US · Eurocode · IS Codes
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Civil & Structural Engineering
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Turn concrete mix designs, soil compaction, retaining walls, and highway pavements into strict calculation briefs with zero hallucination.
                </p>
              </div>

              <div className="pt-2 border-t border-amber-100 dark:border-amber-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('civil_soil_mechanics')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-amber-200 dark:border-amber-800/80 hover:border-amber-500 text-amber-900 dark:text-amber-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🛣️</span>
                    <span>Highway Subgrade 98%</span>
                  </button>
                  <button
                    onClick={() => onSelectWorkflow('civil_soil_mechanics')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-amber-200 dark:border-amber-800/80 hover:border-amber-500 text-amber-900 dark:text-amber-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>📉</span>
                    <span>Clay Consolidation</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('civil_soil_mechanics')}
              className="mt-5 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Civil Engineering Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2: Software & IT Systems */}
          <div className="p-5 rounded-2xl border-2 border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-br from-white via-blue-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs">
                  <Code className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  Production SRE · Cloud DevOps
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Software, DevOps & IT Architecture
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Design production microservices, diagnose complex production incident outages (RCA), and specify REST/GraphQL API contracts cleanly.
                </p>
              </div>

              <div className="pt-2 border-t border-blue-100 dark:border-blue-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('computing_kubernetes_ops')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-blue-200 dark:border-blue-800/80 hover:border-blue-500 text-blue-900 dark:text-blue-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🚨</span>
                    <span>Kubernetes CrashLoopBackOff</span>
                  </button>
                  <button
                    onClick={() => onSelectWorkflow('universal_builder')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-blue-200 dark:border-blue-800/80 hover:border-blue-500 text-blue-900 dark:text-blue-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🔌</span>
                    <span>FastAPI + Postgres Architecture</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('computing_kubernetes_ops')}
              className="mt-5 w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Software & IT Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3: Finance, Markets & Business */}
          <div className="p-5 rounded-2xl border-2 border-emerald-200/80 dark:border-emerald-900/60 bg-gradient-to-br from-white via-emerald-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  GAAP · IFRS · $, €, £, ₹
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Finance, Valuation & Business
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Build multi-year Discounted Cash Flow (DCF) models, SaaS unit economics briefs, cap table scenarios, and pitch decks with strict accounting standards.
                </p>
              </div>

              <div className="pt-2 border-t border-emerald-100 dark:border-emerald-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('finance_equity_valuation')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-emerald-200 dark:border-emerald-800/80 hover:border-emerald-500 text-emerald-900 dark:text-emerald-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>📊</span>
                    <span>SaaS 5-Yr DCF Valuation</span>
                  </button>
                  <button
                    onClick={() => onSelectWorkflow('business_startup_prd')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-emerald-200 dark:border-emerald-800/80 hover:border-emerald-500 text-emerald-900 dark:text-emerald-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🚀</span>
                    <span>Seed Round Pitch Deck</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('finance_equity_valuation')}
              className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Finance & Business Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4: Creative, Video & Media */}
          <div className="p-5 rounded-2xl border-2 border-purple-200/80 dark:border-purple-900/60 bg-gradient-to-br from-white via-purple-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-950/80 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow-xs">
                  <Video className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  YouTube · 4K · Lighting
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Creative, Video & Commercial Media
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Write YouTube video explainer scripts, commercial photo briefs with 3-point lighting setups, camera lens focal lengths, and Midjourney parameters.
                </p>
              </div>

              <div className="pt-2 border-t border-purple-100 dark:border-purple-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 dark:text-purple-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('creative_product_photography')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-purple-200 dark:border-purple-800/80 hover:border-purple-500 text-purple-900 dark:text-purple-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>📸</span>
                    <span>Travertine Commercial Photo</span>
                  </button>
                  <button
                    onClick={() => onSelectWorkflow('creative_image_edit')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-purple-200 dark:border-purple-800/80 hover:border-purple-500 text-purple-900 dark:text-purple-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🎬</span>
                    <span>5-Min Video Script</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('creative_product_photography')}
              className="mt-5 w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Creative & Video Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 5: Science, Education & Academics */}
          <div className="p-5 rounded-2xl border-2 border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-white via-indigo-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Socratic Method · Peer Review
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Science, Academics & Exams
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Study with a patient Socratic tutor, structure research literature syntheses, design lab experiments, and test conceptual understanding step-by-step.
                </p>
              </div>

              <div className="pt-2 border-t border-indigo-100 dark:border-indigo-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('education_exam_tutor')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-indigo-200 dark:border-indigo-800/80 hover:border-indigo-500 text-indigo-900 dark:text-indigo-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🎓</span>
                    <span>Socratic Organic Chemistry</span>
                  </button>
                  <button
                    onClick={() => onSelectWorkflow('universal_builder')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-indigo-200 dark:border-indigo-800/80 hover:border-indigo-500 text-indigo-900 dark:text-indigo-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🔬</span>
                    <span>Literature Methodology Review</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('education_exam_tutor')}
              className="mt-5 w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Academic Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 6: Universal Prompt Studio (World Knowledge) */}
          <div className="p-5 rounded-2xl border-2 border-rose-200/80 dark:border-rose-900/60 bg-gradient-to-br from-white via-rose-50/20 to-white dark:from-[#1E293B] dark:via-[#1E293B] dark:to-[#172033] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-xl bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shadow-xs">
                  <Layers className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  39 Domains · 211 Disciplines
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Universal World Knowledge Studio
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                  Have a unique or niche task? Build high-precision prompts for Law, Medicine, Agriculture, Philosophy, Linguistics, or any other global discipline.
                </p>
              </div>

              <div className="pt-2 border-t border-rose-100 dark:border-rose-900/40 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                  1-Click Instant Recipes:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => onSelectWorkflow('universal_builder')}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-rose-200 dark:border-rose-800/80 hover:border-rose-500 text-rose-900 dark:text-rose-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>⚖️</span>
                    <span>Legal Case Brief</span>
                  </button>
                  <button
                    onClick={onExploreAtlas}
                    className="text-[11px] px-2 py-1 rounded-md bg-white dark:bg-[#0F172A] border border-rose-200 dark:border-rose-800/80 hover:border-rose-500 text-rose-900 dark:text-rose-200 transition-colors font-medium flex items-center gap-1 shadow-2xs"
                  >
                    <span>🗺️</span>
                    <span>Atlas Directory</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectWorkflow('universal_builder')}
              className="mt-5 w-full py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
            >
              Open Universal Studio <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* 9th Callout Route: "I'm not sure — help me choose" */}
        <div className="mt-5">
          <button
            onClick={onOpenHelpMeChoose}
            className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#EEF2FF] via-white to-[#EEF2FF] dark:from-[#1E293B] dark:via-[#131F35] dark:to-[#1E293B] border-2 border-[#C7D2FE] dark:border-[#334155] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-all flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#4F46E5] text-white flex items-center justify-center shrink-0">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm sm:text-base text-[#172033] dark:text-[#F1F5F9]">
                  I’m not sure — help me choose
                </h3>
                <p className="text-xs text-[#596579] dark:text-[#94A3B8]">
                  Answer two quick diagnostic questions to find the exact workflow for your situation.
                </p>
              </div>
            </div>
            <div className="shrink-0 text-xs font-semibold px-4 py-2 rounded-xl bg-white dark:bg-[#0F172A] group-hover:bg-[#4F46E5] text-[#4F46E5] dark:text-[#818CF8] group-hover:text-white border border-[#C7D2FE] dark:border-[#334155] transition-colors flex items-center gap-1.5 shadow-2xs">
              Guide me <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </section>

      {/* 3. ATLAS SEARCH-FIRST DIRECTORY */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-[#182742] text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">
              Find the right starting point.
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8]">
              Search across 39 domain families, tasks, standard acronyms, or plain-language situations.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try 'my soil test results', 'deploy my app', 'make a product photo'..."
              className="w-full h-14 pl-12 pr-4 rounded-xl border border-[#334155] bg-[#0F172A] text-white placeholder-[#64748B] focus:border-[#4F46E5] focus:outline-hidden text-sm"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs custom-scrollbar">
            {['All', 'Beginner-friendly', 'Advanced', 'Engineering', 'Software'].map((chip) => (
              <button
                key={chip}
                onClick={() => setSelectedFilterChip(chip)}
                className={`px-3.5 py-1.5 rounded-full font-medium transition-colors shrink-0 ${
                  selectedFilterChip === chip
                    ? 'bg-[#4F46E5] text-white'
                    : 'bg-[#243554] text-[#CBD5E1] hover:bg-[#33476B]'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Search Results Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {filteredWorkflows.slice(0, 4).map((wf) => (
              <div
                key={wf.id}
                onClick={() => onSelectWorkflow(wf.id)}
                className="p-4 rounded-xl bg-[#233554]/60 hover:bg-[#233554] border border-[#33476B] cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono uppercase text-[#A5B4FC] mb-1">
                    {wf.domainName} → {wf.discipline}
                  </div>
                  <h4 className="font-bold text-sm text-white group-hover:text-[#A5B4FC] transition-colors">
                    {wf.title}
                  </h4>
                  <p className="text-xs text-[#94A3B8] mt-1 line-clamp-2">
                    {wf.summary}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-[#33476B]/60 text-[#CBD5E1]">
                  <span>Produces: {wf.deliverableType}</span>
                  <span className="font-semibold text-[#A5B4FC] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Open <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={onExploreAtlas}
              className="text-xs font-semibold text-[#A5B4FC] hover:underline"
            >
              Browse all 39 domain families in the A–Z Directory →
            </button>
          </div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#172033] dark:text-[#F1F5F9] mb-2">
            How PromptLaz Works
          </h2>
          <p className="text-xs sm:text-sm text-[#596579] dark:text-[#94A3B8]">
            A transparent four-step intake designed to anticipate what AI tools need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] font-bold flex items-center justify-center text-sm">
              1
            </div>
            <h3 className="font-display font-bold text-sm text-[#172033] dark:text-[#F1F5F9]">
              Choose your task
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              Find your topic by problem description, role, output deliverable, or domain.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] font-bold flex items-center justify-center text-sm">
              2
            </div>
            <h3 className="font-display font-bold text-sm text-[#172033] dark:text-[#F1F5F9]">
              Answer clear questions
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              Every field has plain-language ELI5 explanations and examples. Select "I don't know" when unsure.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] font-bold flex items-center justify-center text-sm">
              3
            </div>
            <h3 className="font-display font-bold text-sm text-[#172033] dark:text-[#F1F5F9]">
              See prompt improve live
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              The prompt preview updates in real time with explicit constraints, units, and missing-input checks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] font-bold flex items-center justify-center text-sm">
              4
            </div>
            <h3 className="font-display font-bold text-sm text-[#172033] dark:text-[#F1F5F9]">
              Copy to your AI tool
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              Paste into ChatGPT, Claude, Gemini, or Midjourney. Use Response Checker to verify the answer.
            </p>
          </div>
        </div>

        {/* Explicit Boundary Notice Box */}
        <div className="mt-6 p-4 rounded-xl bg-[#F7F8FC] dark:bg-[#0F172A] border border-[#D9DFEA] dark:border-[#334155] text-center text-xs text-[#596579] dark:text-[#94A3B8]">
          <strong className="text-[#172033] dark:text-[#F1F5F9]">Important Boundary:</strong> PromptLaz builds and structures the prompt; your selected external AI tool executes it.
        </div>
      </section>

      {/* 5. BEFORE-AND-AFTER PROOF */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-[#1E293B] rounded-3xl border border-[#D9DFEA] dark:border-[#334155] p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] block mb-1">
                Before & After Demonstration
              </span>
              <h2 className="font-display font-extrabold text-2xl text-[#172033] dark:text-[#F1F5F9]">
                Why structured intake beats a blank prompt box
              </h2>
            </div>
            <button
              onClick={() => onSelectWorkflow('creative_product_photography')}
              className="h-10 px-4 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              Try this workflow in Studio
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vague Request */}
            <div className="p-5 rounded-2xl bg-[#FEF2F2] dark:bg-[#7F1D1D]/20 border border-[#FECACA] dark:border-[#991B1B]/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#B42318] dark:text-[#FCA5A5]">
                <span>A VAGUE REQUEST (Typical)</span>
                <span className="text-[10px] uppercase font-mono">High error rate</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#0F172A] rounded-xl border border-[#FECACA] dark:border-[#991B1B]/40 font-mono text-xs text-[#7F1D1D] dark:text-[#FCA5A5] leading-relaxed">
                "Make a nice product photo of my ceramic coffee cup."
              </div>
              <p className="text-[11px] text-[#991B1B] dark:text-[#F87171]">
                Problem: Omits surface materials, lighting angle, depth of field, aspect ratio, and negative constraints. Result is often plastic, distorted, or cluttered.
              </p>
            </div>

            {/* PromptLaz Structured */}
            <div className="p-5 rounded-2xl bg-[#ECFDF5] dark:bg-[#064E3B]/20 border border-[#A7F3D0] dark:border-[#059669]/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#059669] dark:text-[#6EE7B7]">
                <span>STRUCTURED WITH PromptLaz</span>
                <span className="text-[10px] uppercase font-mono">Predictable result</span>
              </div>
              <div className="p-3 bg-white dark:bg-[#0F172A] rounded-xl border border-[#A7F3D0] dark:border-[#059669]/40 font-mono text-xs text-[#065F46] dark:text-[#A7F3D0] leading-relaxed">
                "Create a polished commercial photograph of a handmade matte terracotta ceramic coffee dripper on a honed travertine stone slab. Warm morning side-window light with soft diffusion. 4:5 vertical portrait, hero item centered in right third, moderate depth-of-field (f/2.8). Preserve authentic glaze texture. Avoid text, watermarks, or plastic props."
              </div>
              <p className="text-[11px] text-[#047857] dark:text-[#34D399]">
                Clear instructions: Exact surface, lighting topology, composition ratio, depth of field, and exclusion list.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT MAKES PromptLaz DIFFERENT */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-2">
            <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
              1. Questions that fit your task
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              A soil settlement calculation and a portrait photo shoot should not use the same form. Each discipline has a tailored question bank.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-2">
            <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
              2. Know why we’re asking
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              Every specialist field includes an ELI5 plain-language explanation, realistic examples, and a prompt impact note so you learn as you build.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-2">
            <h3 className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
              3. Check the gaps
            </h3>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
              If critical values are missing, PromptLaz flags them and adapts the prompt into an investigation checklist rather than quietly fabricating data.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="max-w-[900px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-[#172033] dark:text-[#F1F5F9] mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#596579] dark:text-[#94A3B8]">
            Everything you need to know about PromptLaz, data handling, and model boundaries.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#1E293B] rounded-xl border border-[#D9DFEA] dark:border-[#334155] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#172033] dark:text-[#F1F5F9] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#94A3B8] dark:text-[#64748B] shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed border-t border-[#F1F4F9] dark:border-[#334155] bg-[#FAFBFD] dark:bg-[#0F172A]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
