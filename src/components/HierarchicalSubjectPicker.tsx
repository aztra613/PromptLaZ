import React, { useState, useEffect, useMemo } from 'react';
import { DOMAIN_FAMILIES } from '../data/taxonomy';
import { DomainGroup, SubjectPickerValue } from '../types';
import { SITUATION_PHRASES } from '../utils/fuzzySearch';
import { SearchableCombobox, ComboboxOption } from './SearchableCombobox';
import { 
  HelpCircle, ChevronRight, Sparkles, RotateCcw, 
  Layers, Dna, Shuffle, Lightbulb, Check
} from 'lucide-react';

interface HierarchicalSubjectPickerProps {
  value?: SubjectPickerValue | string;
  onChange: (val: SubjectPickerValue) => void;
  required?: boolean;
  defaultDomainId?: string;
  defaultGroup?: DomainGroup;
  title?: string;
  description?: string;
}

const CANONICAL_GROUPS: { group: DomainGroup; desc: string }[] = [
  { group: 'Technology & engineering', desc: 'Civil, software, electrical, mechanical, chemical, AI & IoT' },
  { group: 'Knowledge & science', desc: 'Math, physics, life sciences, climate, space, social & humanities' },
  { group: 'Economy & work', desc: 'Business, finance, marketing, HR, logistics, trades & real estate' },
  { group: 'Society, law & culture', desc: 'Law, education, writing, arts, sports, travel & religion' },
  { group: 'Health, food & living things', desc: 'Medicine, nutrition, culinary, agriculture & sustainability' },
  { group: 'Personal life & situations', desc: 'Family, home management, personal growth & daily life' }
];

// Curated popular situation pills for fast "Writer's Block" bypass
const WRITERS_BLOCK_PILLS = [
  { label: '🏗️ Soil settlement & compaction', domainId: 'civil_built', subId: 'ce-geotech', task: 'Standard/Modified Proctor test interpretation' },
  { label: '🧱 Concrete beam code check', domainId: 'civil_built', subId: 'ce-struct', task: 'Singly reinforced concrete beam flexure check (ACI 318 / Eurocode 2)' },
  { label: '☸️ Crashing Kubernetes pod', domainId: 'computing_software', subId: 'cs-devops', task: 'Production Kubernetes deployment manifest generator' },
  { label: '🧪 Chemistry reaction kinetics', domainId: 'physical_sciences', subId: 'ps-chem', task: 'Mechanism synthesis plan' },
  { label: '📊 DCF equity valuation', domainId: 'finance_markets', subId: 'fm-valuation', task: 'Discounted Cash Flow (DCF) framework prompt' },
  { label: '🚀 Startup MVP PRD', domainId: 'business_entrepreneurship', subId: 'be-prd', task: 'Production-ready MVP PRD specification prompt' },
  { label: '🎬 4K Cinematography & video shoot', domainId: 'arts_entertainment', subId: 'ae-film', task: '4K 24fps Cinematic B-roll shoot & lighting prompt' },
  { label: '🎓 Active recall exam tutor', domainId: 'education_exams', subId: 'ee-tutor', task: 'Active recall diagnostic exam prep tutor' },
  { label: '🏡 Property management & lease', domainId: 'realestate_housing', subId: 'rh-manage', task: 'Residential tenancy agreement review checklist' },
  { label: '🥩 Restaurant HACCP food safety', domainId: 'food_culinary', subId: 'fc-safety', task: 'HACCP critical control point plan outline' }
];

export const HierarchicalSubjectPicker: React.FC<HierarchicalSubjectPickerProps> = ({
  value,
  onChange,
  required = false,
  defaultDomainId,
  defaultGroup,
  title = 'Subject & Task Hierarchy',
  description = 'Search or filter through canonical disciplines or enter your own custom topic at any level.'
}) => {
  // Normalize incoming value
  const initialValue: SubjectPickerValue = useMemo(() => {
    if (!value) {
      if (defaultDomainId) {
        const found = DOMAIN_FAMILIES.find(d => d.id === defaultDomainId);
        if (found) {
          return {
            group: found.group,
            domainId: found.id,
            domainName: found.name
          };
        }
      }
      if (defaultGroup) {
        return { group: defaultGroup };
      }
      return {};
    }

    if (typeof value === 'string') {
      return {
        specificDetails: value,
        taskOrTopic: '__other__',
        customTask: value
      };
    }

    return value;
  }, [value, defaultDomainId, defaultGroup]);

  // Internal state
  const [selectedGroup, setSelectedGroup] = useState<string>(initialValue.group || '');
  const [customGroup, setCustomGroup] = useState<string>(initialValue.customGroup || '');

  const [selectedDomainId, setSelectedDomainId] = useState<string>(initialValue.domainId || '');
  const [customDomain, setCustomDomain] = useState<string>(initialValue.customDomain || '');

  const [selectedSubdisciplineId, setSelectedSubdisciplineId] = useState<string>(initialValue.subdisciplineId || '');
  const [customSubdiscipline, setCustomSubdiscipline] = useState<string>(initialValue.customSubdiscipline || '');

  const [selectedTask, setSelectedTask] = useState<string>(initialValue.taskOrTopic || '');
  const [customTask, setCustomTask] = useState<string>(initialValue.customTask || '');

  const [specificDetails, setSpecificDetails] = useState<string>(initialValue.specificDetails || '');

  // "Writer's Block helper" guidance panel
  const [showHelper, setShowHelper] = useState<boolean>(false);

  // Sync internal state when external value changes
  useEffect(() => {
    if (value && typeof value === 'object') {
      if (value.group !== undefined && value.group !== selectedGroup) setSelectedGroup(value.group);
      if (value.customGroup !== undefined && value.customGroup !== customGroup) setCustomGroup(value.customGroup);
      if (value.domainId !== undefined && value.domainId !== selectedDomainId) setSelectedDomainId(value.domainId);
      if (value.customDomain !== undefined && value.customDomain !== customDomain) setCustomDomain(value.customDomain);
      if (value.subdisciplineId !== undefined && value.subdisciplineId !== selectedSubdisciplineId) setSelectedSubdisciplineId(value.subdisciplineId);
      if (value.customSubdiscipline !== undefined && value.customSubdiscipline !== customSubdiscipline) setCustomSubdiscipline(value.customSubdiscipline);
      if (value.taskOrTopic !== undefined && value.taskOrTopic !== selectedTask) setSelectedTask(value.taskOrTopic);
      if (value.customTask !== undefined && value.customTask !== customTask) setCustomTask(value.customTask);
      if (value.specificDetails !== undefined && value.specificDetails !== specificDetails) setSpecificDetails(value.specificDetails);
    }
  }, [value]);

  // Current domain object
  const currentDomain = useMemo(() => {
    if (!selectedDomainId || selectedDomainId === '__other__') return null;
    return DOMAIN_FAMILIES.find(d => d.id === selectedDomainId) || null;
  }, [selectedDomainId]);

  // Available subdisciplines
  const availableSubdisciplines = useMemo(() => {
    return currentDomain ? currentDomain.subdisciplines : [];
  }, [currentDomain]);

  // Current subdiscipline object
  const currentSubdiscipline = useMemo(() => {
    if (!selectedSubdisciplineId || selectedSubdisciplineId === '__other__') return null;
    return availableSubdisciplines.find(s => s.id === selectedSubdisciplineId) || null;
  }, [selectedSubdisciplineId, availableSubdisciplines]);

  // Compute and emit updated SubjectPickerValue
  const emitUpdate = (updates: Partial<SubjectPickerValue>) => {
    const nextGroup = updates.group !== undefined ? updates.group : selectedGroup;
    const nextCustomGroup = updates.customGroup !== undefined ? updates.customGroup : customGroup;

    const nextDomainId = updates.domainId !== undefined ? updates.domainId : selectedDomainId;
    const nextCustomDomain = updates.customDomain !== undefined ? updates.customDomain : customDomain;

    const nextSubId = updates.subdisciplineId !== undefined ? updates.subdisciplineId : selectedSubdisciplineId;
    const nextCustomSub = updates.customSubdiscipline !== undefined ? updates.customSubdiscipline : customSubdiscipline;

    const nextTask = updates.taskOrTopic !== undefined ? updates.taskOrTopic : selectedTask;
    const nextCustomTask = updates.customTask !== undefined ? updates.customTask : customTask;

    const nextDetails = updates.specificDetails !== undefined ? updates.specificDetails : specificDetails;

    // Resolve human-readable names
    const resolvedGroup = nextGroup === '__other__' ? nextCustomGroup : nextGroup;
    
    let resolvedDomain = '';
    if (nextDomainId === '__other__') {
      resolvedDomain = nextCustomDomain;
    } else if (nextDomainId) {
      const d = DOMAIN_FAMILIES.find(x => x.id === nextDomainId);
      resolvedDomain = d ? d.name : '';
    }

    let resolvedSubdiscipline = '';
    if (nextSubId === '__other__') {
      resolvedSubdiscipline = nextCustomSub;
    } else if (nextSubId && currentDomain) {
      const s = currentDomain.subdisciplines.find(x => x.id === nextSubId);
      resolvedSubdiscipline = s ? s.name : '';
    }

    const resolvedTask = nextTask === '__other__' ? nextCustomTask : nextTask;

    // Generate formatted summary
    const parts: string[] = [];
    if (resolvedGroup) parts.push(resolvedGroup);
    if (resolvedDomain) parts.push(resolvedDomain);
    if (resolvedSubdiscipline) parts.push(resolvedSubdiscipline);
    if (resolvedTask) parts.push(resolvedTask);

    let formattedSummary = parts.join(' → ');
    if (nextDetails && nextDetails.trim()) {
      formattedSummary += formattedSummary ? ` (${nextDetails.trim()})` : nextDetails.trim();
    }

    const newValue: SubjectPickerValue = {
      group: nextGroup,
      customGroup: nextCustomGroup,
      domainId: nextDomainId,
      domainName: resolvedDomain,
      customDomain: nextCustomDomain,
      subdisciplineId: nextSubId,
      subdisciplineName: resolvedSubdiscipline,
      customSubdiscipline: nextCustomSub,
      taskOrTopic: nextTask,
      customTask: nextCustomTask,
      specificDetails: nextDetails,
      formattedSummary
    };

    onChange(newValue);
  };

  // Group change handler
  const handleGroupChange = (grp: string) => {
    setSelectedGroup(grp);
    setSelectedDomainId('');
    setSelectedSubdisciplineId('');
    setSelectedTask('');
    emitUpdate({
      group: grp,
      domainId: '',
      domainName: '',
      subdisciplineId: '',
      subdisciplineName: '',
      taskOrTopic: ''
    });
  };

  // Domain change handler
  const handleDomainChange = (domId: string) => {
    setSelectedDomainId(domId);
    let autoGroup = selectedGroup;
    if (domId && domId !== '__other__') {
      const found = DOMAIN_FAMILIES.find(d => d.id === domId);
      if (found && (!selectedGroup || selectedGroup === '__other__')) {
        autoGroup = found.group;
        setSelectedGroup(found.group);
      }
    }
    setSelectedSubdisciplineId('');
    setSelectedTask('');
    emitUpdate({
      group: autoGroup,
      domainId: domId,
      subdisciplineId: '',
      subdisciplineName: '',
      taskOrTopic: ''
    });
  };

  // Subdiscipline change handler
  const handleSubdisciplineChange = (subId: string) => {
    setSelectedSubdisciplineId(subId);
    setSelectedTask('');
    emitUpdate({
      subdisciplineId: subId,
      taskOrTopic: ''
    });
  };

  // Task change handler
  const handleTaskChange = (t: string) => {
    setSelectedTask(t);
    emitUpdate({
      taskOrTopic: t
    });
  };

  // Reset entire picker
  const handleReset = () => {
    setSelectedGroup('');
    setCustomGroup('');
    setSelectedDomainId('');
    setCustomDomain('');
    setSelectedSubdisciplineId('');
    setCustomSubdiscipline('');
    setSelectedTask('');
    setCustomTask('');
    setSpecificDetails('');
    emitUpdate({
      group: '',
      customGroup: '',
      domainId: '',
      domainName: '',
      customDomain: '',
      subdisciplineId: '',
      subdisciplineName: '',
      customSubdiscipline: '',
      taskOrTopic: '',
      customTask: '',
      specificDetails: ''
    });
  };

  // "🎲 Surprise Me / Random Inspiration" (Wikipedia Random article style)
  const handleRandomInspiration = () => {
    const randomDomain = DOMAIN_FAMILIES[Math.floor(Math.random() * DOMAIN_FAMILIES.length)];
    if (!randomDomain) return;
    const randomSub = randomDomain.subdisciplines[Math.floor(Math.random() * randomDomain.subdisciplines.length)];
    const randomTask = randomSub && randomSub.sampleTasks.length > 0
      ? randomSub.sampleTasks[Math.floor(Math.random() * randomSub.sampleTasks.length)]
      : '';

    setSelectedGroup(randomDomain.group);
    setSelectedDomainId(randomDomain.id);
    if (randomSub) setSelectedSubdisciplineId(randomSub.id);
    if (randomTask) setSelectedTask(randomTask);

    emitUpdate({
      group: randomDomain.group,
      domainId: randomDomain.id,
      subdisciplineId: randomSub ? randomSub.id : '',
      taskOrTopic: randomTask
    });
  };

  // Apply curated pill
  const handleApplyPill = (grp: string, domId: string, subId?: string, taskText?: string) => {
    const foundDomain = DOMAIN_FAMILIES.find(d => d.id === domId);
    const resolvedGrp = foundDomain ? foundDomain.group : grp;

    setSelectedGroup(resolvedGrp);
    setSelectedDomainId(domId);
    if (subId) setSelectedSubdisciplineId(subId);
    if (taskText) setSelectedTask(taskText);

    emitUpdate({
      group: resolvedGrp,
      domainId: domId,
      subdisciplineId: subId || '',
      taskOrTopic: taskText || ''
    });
  };

  // Active breadcrumbs trail
  const activeTrail: string[] = [];
  if (selectedGroup === '__other__') {
    if (customGroup.trim()) activeTrail.push(`Group: ${customGroup}`);
  } else if (selectedGroup) {
    activeTrail.push(selectedGroup);
  }

  if (selectedDomainId === '__other__') {
    if (customDomain.trim()) activeTrail.push(`Domain: ${customDomain}`);
  } else if (currentDomain) {
    activeTrail.push(currentDomain.name);
  }

  if (selectedSubdisciplineId === '__other__') {
    if (customSubdiscipline.trim()) activeTrail.push(`Discipline: ${customSubdiscipline}`);
  } else if (currentSubdiscipline) {
    activeTrail.push(currentSubdiscipline.name);
  }

  if (selectedTask === '__other__') {
    if (customTask.trim()) activeTrail.push(`Task: ${customTask}`);
  } else if (selectedTask) {
    activeTrail.push(selectedTask);
  }

  // ─── Combobox Options Preparation ─────────────────────────────

  // Group options
  const groupOptions: ComboboxOption[] = useMemo(() => {
    return CANONICAL_GROUPS.map(g => ({
      value: g.group,
      label: g.group,
      subtitle: g.desc,
      badge: `${DOMAIN_FAMILIES.filter(d => d.group === g.group).length} domains`,
      badgeColor: 'indigo'
    }));
  }, []);

  // Domain options
  const domainOptions: ComboboxOption[] = useMemo(() => {
    const pool = selectedGroup && selectedGroup !== '__other__'
      ? DOMAIN_FAMILIES.filter(d => d.group === selectedGroup)
      : DOMAIN_FAMILIES;

    return pool.map(d => ({
      value: d.id,
      label: d.name,
      subtitle: d.summary,
      badge: `${d.subdisciplines.length} areas`,
      badgeColor: d.coverageState === 'published_workflow' ? 'emerald' : 'sky',
      group: d.group,
      searchTerms: d.aliases
    }));
  }, [selectedGroup]);

  // Subdiscipline options
  const subdisciplineOptions: ComboboxOption[] = useMemo(() => {
    if (!currentDomain) return [];
    return currentDomain.subdisciplines.map(s => ({
      value: s.id,
      label: s.name,
      subtitle: s.summary,
      badge: `${s.sampleTasks.length} tasks`,
      badgeColor: s.workflowsCount > 0 ? 'emerald' : 'slate',
      searchTerms: s.sampleTasks
    }));
  }, [currentDomain]);

  // Task options
  const taskOptions: ComboboxOption[] = useMemo(() => {
    if (!currentSubdiscipline) return [];
    return currentSubdiscipline.sampleTasks.map(t => ({
      value: t,
      label: t,
      subtitle: `Sample prompt task in ${currentSubdiscipline.name}`
    }));
  }, [currentSubdiscipline]);

  return (
    <div className="bg-[#FAFBFD] dark:bg-[#131F35] rounded-2xl border border-[#D9DFEA] dark:border-[#334155] p-5 sm:p-6 space-y-5 transition-all">
      
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E2E8F0] dark:border-[#334155]">
        <div>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
            <h3 className="font-display font-bold text-sm text-[#172033] dark:text-[#F1F5F9]">
              {title}
              {required && <span className="text-rose-500 ml-1">*</span>}
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {/* Random inspiration button */}
          <button
            type="button"
            onClick={handleRandomInspiration}
            className="text-xs font-semibold px-3 py-1.5 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition-colors flex items-center gap-1.5"
            title="Random idea to break writer's block (Wikipedia style)"
          >
            <Shuffle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>🎲 Random Inspiration</span>
          </button>

          {/* "Writer's block" guidance toggle */}
          <button
            type="button"
            onClick={() => setShowHelper(!showHelper)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-xl border flex items-center gap-1.5 transition-all ${
              showHelper
                ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700'
                : 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50/60 dark:hover:bg-slate-700 border-slate-300 dark:border-slate-700'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Writer's Block?</span>
          </button>

          {activeTrail.length > 0 && (
            <button
              type="button"
              onClick={handleReset}
              className="text-xs text-slate-500 hover:text-rose-600 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Reset selection"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Quick Situation Pills (Wikipedia / Instant Inspiration) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" /> Quick Starters (Click any to auto-fill taxonomy):
          </span>
          <span className="text-[10px] text-slate-400 dark:text-slate-500">39 domain families · 211 subject branches · 30 workflows</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {WRITERS_BLOCK_PILLS.map((pill, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleApplyPill('', pill.domainId, pill.subId, pill.task)}
              className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 text-slate-700 dark:text-slate-300 transition-all text-left"
            >
              {pill.label}
            </button>
          ))}
        </div>
      </div>

      {/* Guided Helper Panel (Expanded when user clicks "Writer's Block?") */}
      {showHelper && (
        <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-50/80 via-white to-emerald-50/80 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border border-indigo-200 dark:border-indigo-900 space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-slate-100">
              <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Prompt Writer's Block: Describe what you have or pick a real situation</span>
            </div>
            <button
              type="button"
              onClick={() => setShowHelper(false)}
              className="text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              Close
            </button>
          </div>

          <p className="text-[11px] text-slate-600 dark:text-slate-300">
            You don't need to guess academic terminology. Each situation maps directly into PromptLaz prompts:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {SITUATION_PHRASES.slice(0, 9).map((sit, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleApplyPill('', sit.domainId, sit.subdisciplineId)}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 text-left text-xs transition-colors"
              >
                <span className="font-semibold text-slate-800 dark:text-slate-200 block capitalize">
                  "{sit.phrase}"
                </span>
                <span className="text-[10px] text-indigo-600 dark:text-indigo-400 block mt-0.5">
                  Click to open matched domain
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Active Breadcrumbs Trail */}
      {activeTrail.length > 0 && (
        <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs flex items-center gap-1.5 flex-wrap shadow-2xs">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">Active Path:</span>
          {activeTrail.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
              <span className="font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-md">
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}

      {/* 4 SEARCHABLE COMBOBOX LEVELS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* LEVEL 1: Domain Group */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>1. Domain Group</span>
            <span className="text-[10px] font-normal text-slate-500">6 broad groups</span>
          </label>
          <SearchableCombobox
            options={groupOptions}
            value={selectedGroup}
            onChange={handleGroupChange}
            placeholder="-- Choose or Search Domain Group --"
            searchPlaceholder="Filter groups..."
            allowCustom={true}
            customOptionLabel="Other / Custom Group"
          />

          {selectedGroup === '__other__' && (
            <div className="pt-1 animate-in fade-in">
              <input
                type="text"
                value={customGroup}
                onChange={(e) => {
                  setCustomGroup(e.target.value);
                  emitUpdate({ customGroup: e.target.value });
                }}
                placeholder="Enter custom domain group..."
                className="w-full h-9 px-3 text-xs rounded-lg border border-indigo-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
            </div>
          )}
        </div>

        {/* LEVEL 2: Domain Family */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>2. Domain Family</span>
            <span className="text-[10px] font-normal text-slate-500">
              {domainOptions.length} available
            </span>
          </label>
          <SearchableCombobox
            options={domainOptions}
            value={selectedDomainId}
            onChange={handleDomainChange}
            placeholder="-- Choose or Search Domain Family --"
            searchPlaceholder="Type 'physics', 'tax', 'concrete', 'marketing'..."
            allowCustom={true}
            customOptionLabel="Other / Custom Domain"
          />

          {selectedDomainId === '__other__' && (
            <div className="pt-1 animate-in fade-in">
              <input
                type="text"
                value={customDomain}
                onChange={(e) => {
                  setCustomDomain(e.target.value);
                  emitUpdate({ customDomain: e.target.value });
                }}
                placeholder="Enter custom domain name..."
                className="w-full h-9 px-3 text-xs rounded-lg border border-indigo-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
            </div>
          )}
        </div>

        {/* LEVEL 3: Subdiscipline */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>3. Subdiscipline / Branch</span>
            <span className="text-[10px] font-normal text-slate-500">
              {subdisciplineOptions.length} branches
            </span>
          </label>
          <SearchableCombobox
            options={subdisciplineOptions}
            value={selectedSubdisciplineId}
            onChange={handleSubdisciplineChange}
            placeholder={
              !selectedDomainId 
                ? '-- Select Domain First --' 
                : subdisciplineOptions.length === 0 
                ? 'No preset branches — enter custom' 
                : '-- Choose or Search Branch --'
            }
            searchPlaceholder="Search branches..."
            disabled={!selectedDomainId && selectedDomainId !== '__other__'}
            allowCustom={true}
            customOptionLabel="Other / Custom Branch"
          />

          {selectedSubdisciplineId === '__other__' && (
            <div className="pt-1 animate-in fade-in">
              <input
                type="text"
                value={customSubdiscipline}
                onChange={(e) => {
                  setCustomSubdiscipline(e.target.value);
                  emitUpdate({ customSubdiscipline: e.target.value });
                }}
                placeholder="Enter custom subdiscipline branch..."
                className="w-full h-9 px-3 text-xs rounded-lg border border-indigo-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
            </div>
          )}
        </div>

        {/* LEVEL 4: Sample Task or Problem */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
            <span>4. Specific Task or Problem</span>
            <span className="text-[10px] font-normal text-slate-500">
              {taskOptions.length} suggestions
            </span>
          </label>
          <SearchableCombobox
            options={taskOptions}
            value={selectedTask}
            onChange={handleTaskChange}
            placeholder={
              taskOptions.length > 0 
                ? '-- Choose or Search Sample Task --' 
                : '-- Type custom task below or pick custom --'
            }
            searchPlaceholder="Filter tasks..."
            allowCustom={true}
            customOptionLabel="Custom / Type my own specific problem"
          />

          {selectedTask === '__other__' && (
            <div className="pt-1 animate-in fade-in">
              <input
                type="text"
                value={customTask}
                onChange={(e) => {
                  setCustomTask(e.target.value);
                  emitUpdate({ customTask: e.target.value });
                }}
                placeholder="Enter your exact task or inquiry..."
                className="w-full h-9 px-3 text-xs rounded-lg border border-indigo-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
              />
            </div>
          )}
        </div>

      </div>

      {/* LEVEL 5: Free-text Specific Details & Constraints */}
      <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-slate-700">
        <label className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center justify-between">
          <span>5. Additional Context, Codes or Raw Numbers (Optional)</span>
          <span className="text-[10px] font-normal text-slate-500">Pass directly into prompt</span>
        </label>
        <textarea
          rows={2}
          value={specificDetails}
          onChange={(e) => {
            setSpecificDetails(e.target.value);
            emitUpdate({ specificDetails: e.target.value });
          }}
          placeholder="e.g., ACI 318-19, f'c = 28 MPa, span 6.5m, live load 4 kN/m², or Python 3.12, Postgres 16..."
          className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:border-indigo-500 focus:outline-hidden resize-none"
        />
      </div>

    </div>
  );
};
