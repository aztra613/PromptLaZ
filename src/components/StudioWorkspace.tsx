import React, { useState, useEffect, useId, useRef } from 'react';
import { WorkflowSchema, TargetTool, LocalDraft } from '../types';
import { buildPrompt, saveLocalDraft, isLocalDraftsEnabled, downloadFile } from '../utils/promptBuilder';
import { 
  Copy, Check, Download, Bookmark, RefreshCw, Edit3, Eye, 
  AlertTriangle, ShieldCheck, HelpCircle, ArrowRight, ChevronDown, 
  ChevronUp, Upload, Trash2, CheckCircle2, Sparkles, FileText, CheckSquare
} from 'lucide-react';
import { HierarchicalSubjectPicker } from './HierarchicalSubjectPicker';

interface StudioWorkspaceProps {
  workflow: WorkflowSchema;
  onNavigateToWorkflow: (workflowId: string) => void;
  onOpenResponseChecker: () => void;
  onOpenDraftsModal: () => void;
  initialDraftAnswers?: Record<string, any>;
}

export const StudioWorkspace: React.FC<StudioWorkspaceProps> = ({
  workflow,
  onNavigateToWorkflow,
  onOpenResponseChecker,
  onOpenDraftsModal,
  initialDraftAnswers
}) => {
  // Mode: Beginner vs Expert
  const [isExpertMode, setIsExpertMode] = useState(false);
  const [activeStep, setActiveStep] = useState<'start' | 'fit' | 'finetune'>('start');
  
  // Form Answers
  const [answers, setAnswers] = useState<Record<string, any>>(() => {
    if (initialDraftAnswers) return initialDraftAnswers;
    const defaults: Record<string, any> = {};
    workflow.fields.forEach(f => {
      if (f.options) {
        const defOpt = f.options.find(o => o.isDefault);
        if (defOpt) defaults[f.id] = defOpt.value;
      }
    });
    return defaults;
  });

  // Reference image preview (client-side in-memory only)
  const [referenceImageUrl, setReferenceImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Target Tool profile
  const [targetTool, setTargetTool] = useState<TargetTool>('general');

  // Explainability view toggle ("Why this is here")
  const [showExplainability, setShowExplainability] = useState(false);

  // Manual prompt editing states
  const [isManualEditing, setIsManualEditing] = useState(false);
  const [manualPromptText, setManualPromptText] = useState<string | null>(null);
  const [hasEditConflict, setHasEditConflict] = useState(false);

  // Copy feedback
  const [copied, setCopied] = useState(false);
  const [draftSavedToast, setDraftSavedToast] = useState(false);

  // Mobile preview drawer
  const [mobilePreviewOpen, setMobilePreviewOpen] = useState(false);

  // Build the deterministic prompt
  const assembled = buildPrompt(workflow, answers, targetTool);
  const displayedPromptText = manualPromptText !== null ? manualPromptText : assembled.fullText;

  // Handle input changes
  const handleAnswerChange = (fieldId: string, val: any) => {
    if (manualPromptText !== null) {
      setHasEditConflict(true);
    }
    setAnswers(prev => ({ ...prev, [fieldId]: val }));
  };

  // Keep manual edits or rebuild
  const handleResolveConflict = (action: 'keep' | 'rebuild') => {
    if (action === 'rebuild') {
      setManualPromptText(null);
      setHasEditConflict(false);
      setIsManualEditing(false);
    } else {
      setHasEditConflict(false);
    }
  };

  // Image upload handling (Local in-memory object URL only)
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (referenceImageUrl) URL.revokeObjectURL(referenceImageUrl);
      const url = URL.createObjectURL(file);
      setReferenceImageUrl(url);
    }
  };

  const handleRemoveImage = () => {
    if (referenceImageUrl) URL.revokeObjectURL(referenceImageUrl);
    setReferenceImageUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Copy to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedPromptText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = displayedPromptText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Download Markdown
  const handleDownloadMd = () => {
    downloadFile(`promptlas_${workflow.id}.md`, displayedPromptText, 'text/markdown');
  };

  // Download Plain text
  const handleDownloadTxt = () => {
    downloadFile(`promptlas_${workflow.id}.txt`, displayedPromptText, 'text/plain');
  };

  // Export JSON configuration
  const handleExportConfig = () => {
    const config = {
      workflowId: workflow.id,
      workflowTitle: workflow.title,
      exportedAt: new Date().toISOString(),
      targetTool,
      answers
    };
    downloadFile(`promptlas_${workflow.id}_config.json`, JSON.stringify(config, null, 2), 'application/json');
  };

  // Save local draft
  const handleSaveDraft = () => {
    saveLocalDraft({
      workflowId: workflow.id,
      workflowTitle: workflow.title,
      domainName: workflow.domainName,
      formAnswers: answers,
      promptText: displayedPromptText,
      isManualEdited: manualPromptText !== null
    });
    setDraftSavedToast(true);
    setTimeout(() => setDraftSavedToast(false), 2500);
  };

  // Reset Form
  const handleReset = () => {
    if (window.confirm('Reset all fields for this workflow back to default?')) {
      const defaults: Record<string, any> = {};
      workflow.fields.forEach(f => {
        if (f.options) {
          const defOpt = f.options.find(o => o.isDefault);
          if (defOpt) defaults[f.id] = defOpt.value;
        }
      });
      setAnswers(defaults);
      setManualPromptText(null);
      setHasEditConflict(false);
      setIsManualEditing(false);
      handleRemoveImage();
    }
  };

  // Filter visible fields for current step & mode
  const currentFields = workflow.fields.filter(f => {
    if (f.step !== activeStep) return false;
    if (f.isAdvanced && !isExpertMode) return false;
    return true;
  });

  return (
    <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Quick Domain Switcher Presets */}
      <div className="mb-6 bg-white dark:bg-[#1E293B] p-3 sm:p-4 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
              Quick Domain Presets (Guided Dropdowns):
            </span>
          </div>
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Click to switch workflow
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 custom-scrollbar">
          {[
            { id: 'creative_product_photography', label: '📸 Photography (Aperture, Lens, Lighting)' },
            { id: 'creative_image_edit', label: '🎨 Photo Retouch & Edit' },
            { id: 'civil_soil_mechanics', label: '🏗️ Civil & Soil (Proctor, MDD)' },
            { id: 'civil_structural_review', label: '🧱 Concrete & Steel Codes' },
            { id: 'computing_kubernetes_ops', label: '☸️ DevOps & K8s Pods' },
            { id: 'computing_qa_testing', label: '💻 Software Testing QA' },
            { id: 'finance_equity_valuation', label: '📈 Finance & DCF Valuation' },
            { id: 'business_startup_prd', label: '🚀 Startup & MVP PRD' },
            { id: 'education_exam_tutor', label: '🎓 Exam Socratic Tutor' },
            { id: 'universal_builder', label: '🌐 Universal Custom Topic' },
          ].map((preset) => {
            const isActive = workflow.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onNavigateToWorkflow(preset.id)}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-xs ring-2 ring-indigo-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Workspace Top Row: Breadcrumbs & Header Meta */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs font-medium text-[#596579] dark:text-[#94A3B8] mb-2 flex-wrap">
          <button 
            onClick={() => onNavigateToWorkflow('universal_builder')}
            className="hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
          >
            Atlas
          </button>
          <span>/</span>
          <span className="text-[#172033] dark:text-[#F1F5F9]">{workflow.domainName}</span>
          <span>/</span>
          <span className="text-[#4F46E5] dark:text-[#818CF8] font-semibold">{workflow.discipline}</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#D9DFEA] dark:border-[#334155]">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-[#172033] dark:text-[#F1F5F9]">
                {workflow.title}
              </h1>
              
              {/* Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                  workflow.riskClass === 'R0' 
                    ? 'bg-[#ECFDF5] dark:bg-[#064E3B]/40 text-[#059669] dark:text-[#34D399] border border-[#A7F3D0] dark:border-[#059669]/50'
                    : workflow.riskClass === 'R1'
                    ? 'bg-[#EEF2FF] dark:bg-[#312E81]/40 text-[#4F46E5] dark:text-[#A5B4FC] border border-[#C7D2FE] dark:border-[#4F46E5]/50'
                    : 'bg-[#FFF7ED] dark:bg-[#78350F]/40 text-[#D97706] dark:text-[#FBBF24] border border-[#FED7AA] dark:border-[#D97706]/50'
                }`} title={`Risk Class: ${workflow.riskClass}`}>
                  {workflow.riskClass}
                </span>

                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F1F5F9] dark:bg-[#1E293B] text-[#475569] dark:text-[#94A3B8] border border-[#E2E8F0] dark:border-[#334155]">
                  Tier {workflow.contentTier}
                </span>

                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-[#F0FDF4] dark:bg-[#064E3B]/30 text-[#166534] dark:text-[#86EFAC] border border-[#BBF7D0] dark:border-[#166534]/40">
                  ✓ Verified Workflow
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#596579] dark:text-[#94A3B8] mt-1 max-w-2xl leading-relaxed">
              {workflow.summary}
            </p>
          </div>

          {/* Mode Switcher: Beginner vs Expert */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-[#F1F4F9] dark:bg-[#0F172A] p-1 rounded-xl flex items-center border border-[#D9DFEA] dark:border-[#334155]">
              <button
                onClick={() => setIsExpertMode(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  !isExpertMode
                    ? 'bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] shadow-xs'
                    : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                Beginner Mode
              </button>
              <button
                onClick={() => setIsExpertMode(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isExpertMode
                    ? 'bg-[#182742] dark:bg-[#4F46E5] text-white shadow-xs'
                    : 'text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
                }`}
              >
                Expert Mode
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: GUIDED FORM WORKBENCH (7 cols ~58%) */}
        <div className="lg:col-span-7 space-y-6">

          {/* Step Tabs */}
          <div className="flex items-center border-b border-[#D9DFEA] dark:border-[#334155] gap-2 pb-1 overflow-x-auto custom-scrollbar">
            <button
              onClick={() => setActiveStep('start')}
              className={`px-3.5 py-2 rounded-t-lg text-xs font-bold transition-colors flex items-center gap-2 border-b-2 ${
                activeStep === 'start'
                  ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8] bg-white dark:bg-[#1E293B]'
                  : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] text-[10px] flex items-center justify-center font-bold">1</span>
              Start here
            </button>

            <button
              onClick={() => setActiveStep('fit')}
              className={`px-3.5 py-2 rounded-t-lg text-xs font-bold transition-colors flex items-center gap-2 border-b-2 ${
                activeStep === 'fit'
                  ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8] bg-white dark:bg-[#1E293B]'
                  : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] text-[10px] flex items-center justify-center font-bold">2</span>
              Make it fit
            </button>

            <button
              onClick={() => setActiveStep('finetune')}
              className={`px-3.5 py-2 rounded-t-lg text-xs font-bold transition-colors flex items-center gap-2 border-b-2 ${
                activeStep === 'finetune'
                  ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8] bg-white dark:bg-[#1E293B]'
                  : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] text-[10px] flex items-center justify-center font-bold">3</span>
              Fine-tune (optional)
            </button>
          </div>

          {/* Target Tool Profile Selector */}
          <div className="p-3.5 rounded-xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div>
              <span className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9] block">Target AI Tool Format:</span>
              <span className="text-[11px] text-[#596579] dark:text-[#94A3B8]">Adapts prompt formatting conventions for your chosen destination.</span>
            </div>
            <select
              value={targetTool}
              onChange={(e) => setTargetTool(e.target.value as TargetTool)}
              className="text-xs font-semibold h-9 px-3 rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] focus:border-[#4F46E5] focus:outline-hidden"
            >
              <option value="general">General AI Assistant (Universal)</option>
              <option value="chatgpt">ChatGPT (OpenAI)</option>
              <option value="claude">Claude (Anthropic)</option>
              <option value="gemini">Gemini (Google)</option>
              <option value="midjourney">Midjourney (Image model)</option>
              <option value="flux">FLUX (Image model)</option>
              <option value="cursor">Cursor / Copilot (Code assistant)</option>
            </select>
          </div>

          {/* Optional In-Memory Reference Image Preview (for image workflows) */}
          {workflow.modality === 'image' && (
            <div className="p-4 rounded-xl border border-dashed border-[#CBD5E1] dark:border-[#334155] bg-white dark:bg-[#1E293B] space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9]">Reference Image (Local In-Memory Preview)</h3>
                  <p className="text-[11px] text-[#596579] dark:text-[#94A3B8]">
                    Upload a local reference photo to inspect what to keep and change. No files are uploaded to any server.
                  </p>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                  accept="image/*"
                  className="hidden"
                />
                {!referenceImageUrl ? (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="h-8 px-3 rounded-lg border border-[#D9DFEA] dark:border-[#334155] hover:border-[#4F46E5] bg-[#F7F8FC] dark:bg-[#0F172A] text-xs font-medium text-[#172033] dark:text-[#F1F5F9] flex items-center gap-1.5 transition-colors"
                  >
                    <Upload className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
                    Select Image
                  </button>
                ) : (
                  <button
                    onClick={handleRemoveImage}
                    className="h-8 px-2.5 rounded-lg border border-[#FECACA] dark:border-[#991B1B] bg-[#FEF2F2] dark:bg-[#7F1D1D]/30 text-xs font-medium text-[#B42318] dark:text-[#FCA5A5] flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Remove
                  </button>
                )}
              </div>

              {referenceImageUrl && (
                <div className="relative rounded-lg overflow-hidden border border-[#D9DFEA] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] max-h-48 flex items-center justify-center p-2">
                  <img
                    src={referenceImageUrl}
                    alt="Local Reference"
                    className="max-h-44 object-contain rounded-md"
                  />
                  <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-sm bg-[#172033]/80 text-white text-[10px] font-mono">
                    Local blob URL · 0 bytes sent over network
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Form Fields for the Active Step */}
          <div className="space-y-5 bg-white dark:bg-[#1E293B] p-6 rounded-2xl border border-[#D9DFEA] dark:border-[#334155] shadow-xs">
            {currentFields.length === 0 ? (
              <div className="text-center py-8 text-xs text-[#596579] dark:text-[#94A3B8]">
                All settings in this step are optional or configured for default values.
              </div>
            ) : (
              currentFields.map((field) => {
                const value = answers[field.id] ?? '';

                return (
                  <div key={field.id} className="space-y-1.5 pb-4 border-b border-[#F1F4F9] dark:border-[#334155]/60 last:border-0 last:pb-0">
                    
                    {/* Field Header */}
                    {field.type !== 'subject_picker' && (
                      <div className="flex items-start justify-between gap-2">
                        <label className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9]">
                          {field.label}
                          {field.required && <span className="text-[#B42318] dark:text-[#EF4444] ml-1">*</span>}
                          {field.technicalTerm && (
                            <span className="block text-[11px] font-normal text-[#94A3B8] dark:text-[#64748B] font-mono">
                              {field.technicalTerm}
                            </span>
                          )}
                        </label>

                        {field.isAdvanced && (
                          <span className="text-[10px] uppercase font-bold text-[#D97706] dark:text-[#FBBF24] bg-[#FFFBEB] dark:bg-[#78350F]/30 px-1.5 py-0.2 rounded-sm border border-[#FDE68A] dark:border-[#D97706]/40">
                            Advanced
                          </span>
                        )}
                      </div>
                    )}

                    {/* ELI5 Explanation */}
                    {field.type !== 'subject_picker' && (
                      <p className="text-xs text-[#596579] dark:text-[#94A3B8] leading-relaxed">
                        {field.eli5}
                      </p>
                    )}

                    {/* Input Controls */}
                    {field.type === 'subject_picker' && (
                      <HierarchicalSubjectPicker
                        value={value}
                        onChange={(val) => handleAnswerChange(field.id, val)}
                        required={field.required}
                        defaultDomainId={workflow.domainId !== 'universal' ? workflow.domainId : undefined}
                        defaultGroup={workflow.domainId !== 'universal' ? workflow.group : undefined}
                        title={field.label}
                        description={field.eli5}
                      />
                    )}

                    {field.type === 'select' && (
                      <select
                        value={value}
                        onChange={(e) => handleAnswerChange(field.id, e.target.value)}
                        className="w-full h-11 px-3 text-xs font-medium rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] focus:bg-white dark:focus:bg-[#0B1120] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden"
                      >
                        {field.options?.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {field.type === 'radio' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {field.options?.map((opt) => (
                          <label
                            key={opt.value}
                            className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-center justify-between ${
                              value === opt.value
                                ? 'border-[#4F46E5] dark:border-[#818CF8] bg-[#EEF2FF]/40 dark:bg-[#312E81]/30 text-[#172033] dark:text-[#F1F5F9] font-semibold'
                                : 'border-[#D9DFEA] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#0F172A] text-[#596579] dark:text-[#94A3B8] hover:bg-white dark:hover:bg-[#1E293B]'
                            }`}
                          >
                            <span>{opt.label}</span>
                            <input
                              type="radio"
                              name={field.id}
                              value={opt.value}
                              checked={value === opt.value}
                              onChange={() => handleAnswerChange(field.id, opt.value)}
                              className="accent-[#4F46E5]"
                            />
                          </label>
                        ))}
                      </div>
                    )}

                    {field.type === 'text' && (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleAnswerChange(field.id, e.target.value)}
                        placeholder={field.placeholder || field.example}
                        className="w-full h-11 px-3.5 text-xs rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] placeholder-[#94A3B8] dark:placeholder-[#64748B] focus:bg-white dark:focus:bg-[#0B1120] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden"
                      />
                    )}

                    {field.type === 'textarea' && (
                      <textarea
                        value={value}
                        onChange={(e) => handleAnswerChange(field.id, e.target.value)}
                        placeholder={field.placeholder || field.example}
                        rows={3}
                        className="w-full p-3 text-xs rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] placeholder-[#94A3B8] dark:placeholder-[#64748B] focus:bg-white dark:focus:bg-[#0B1120] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden custom-scrollbar"
                      />
                    )}

                    {/* Example & Prompt Impact Footer */}
                    {field.type !== 'subject_picker' && (
                      <div className="pt-1 flex flex-col gap-1 text-[11px]">
                        <div className="text-[#94A3B8] dark:text-[#64748B] italic">
                          <span className="font-semibold not-italic text-[#64748B] dark:text-[#94A3B8]">Example:</span> {field.example}
                        </div>
                        <div className="text-[#0F9D91] dark:text-[#2DD4BF] flex items-center gap-1 font-medium">
                          <Sparkles className="w-3 h-3" />
                          {field.promptImpact}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}

            {/* Step Navigation Buttons */}
            <div className="pt-4 flex items-center justify-between border-t border-[#D9DFEA] dark:border-[#334155]">
              {activeStep !== 'start' ? (
                <button
                  onClick={() => setActiveStep(activeStep === 'finetune' ? 'fit' : 'start')}
                  className="px-4 py-2 rounded-xl border border-[#D9DFEA] dark:border-[#334155] text-xs font-semibold text-[#596579] dark:text-[#94A3B8] hover:bg-[#F7F8FC] dark:hover:bg-[#0F172A]"
                >
                  Back
                </button>
              ) : <div />}

              {activeStep !== 'finetune' ? (
                <button
                  onClick={() => setActiveStep(activeStep === 'start' ? 'fit' : 'finetune')}
                  className="px-5 py-2.5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  Continue to {activeStep === 'start' ? 'Step 2: Make it fit' : 'Step 3: Fine-tune'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    className="px-3.5 py-2 rounded-xl border border-[#D9DFEA] dark:border-[#334155] text-xs font-medium text-[#596579] dark:text-[#94A3B8] hover:bg-[#F7F8FC] dark:hover:bg-[#0F172A]"
                  >
                    Reset Form
                  </button>
                  <button
                    onClick={handleCopy}
                    className="px-5 py-2.5 rounded-xl bg-[#18794E] hover:bg-[#14623F] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    Copy Assembled Prompt
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Missing Inputs & Readiness Alert Panel */}
          {assembled.missingCriticalFields.length > 0 && (
            <div className="p-4 rounded-xl bg-[#FFFBEB] dark:bg-[#78350F]/30 border border-[#FDE68A] dark:border-[#B45309]/50 text-xs text-[#92400E] dark:text-[#FDE68A] space-y-2 animate-in fade-in">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#B45309] dark:text-[#FBBF24] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block mb-0.5">What we still need (Missing Critical Inputs)</span>
                  <p className="leading-relaxed">
                    The following recommended inputs were not filled: <strong className="text-[#78350F] dark:text-[#FEF3C7]">{assembled.missingCriticalFields.join(', ')}</strong>.
                  </p>
                  <p className="mt-1 text-[11px] text-[#A16207] dark:text-[#FCD34D]">
                    Safe Fallback Applied: {workflow.missingInputRules.fallbackGuidance}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Related Next-Step Workflows */}
          {workflow.relatedWorkflows.length > 0 && (
            <div className="p-5 rounded-2xl bg-white dark:bg-[#1E293B] border border-[#D9DFEA] dark:border-[#334155] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Connected Next Steps ({workflow.relatedWorkflows.length})
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {workflow.relatedWorkflows.map((rel, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigateToWorkflow(rel.workflowId)}
                    className="text-left p-3 rounded-xl border border-[#E2E8F0] dark:border-[#334155] bg-[#FAFBFD] dark:bg-[#0F172A] hover:border-[#4F46E5] dark:hover:border-[#818CF8] hover:bg-[#EEF2FF]/30 dark:hover:bg-[#1E293B] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] block mb-1">
                        {rel.type.replace('_', ' ')}
                      </span>
                      <div className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                        {rel.title}
                      </div>
                      <div className="text-[11px] text-[#596579] dark:text-[#94A3B8] mt-0.5">
                        {rel.description}
                      </div>
                    </div>
                    <div className="mt-2 text-xs font-semibold text-[#4F46E5] dark:text-[#818CF8] flex items-center gap-1">
                      Open <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: STICKY LIVE PROMPT PREVIEW (5 cols ~42%) */}
        <div className="lg:col-span-5 sticky top-[92px] space-y-4">
          <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-[#D9DFEA] dark:border-[#334155] shadow-xs overflow-hidden flex flex-col">
            
            {/* Preview Header */}
            <div className="p-4 bg-[#F8FAFC] dark:bg-[#0F172A] border-b border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#18794E] dark:bg-[#22C55E] animate-pulse"></span>
                  <h2 className="font-display font-bold text-xs uppercase tracking-wider text-[#172033] dark:text-[#F1F5F9]">
                    Prompt Preview — Not the AI's Answer
                  </h2>
                </div>
                <p className="text-[11px] text-[#596579] dark:text-[#94A3B8] mt-0.5">
                  Updates in real-time as you fill form fields
                </p>
              </div>

              {/* Explainability View Toggle */}
              <button
                onClick={() => setShowExplainability(!showExplainability)}
                className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1 ${
                  showExplainability
                    ? 'bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] border-[#C7D2FE] dark:border-[#4F46E5]'
                    : 'bg-white dark:bg-[#1E293B] text-[#596579] dark:text-[#94A3B8] border-[#D9DFEA] dark:border-[#334155] hover:text-[#172033] dark:hover:text-white'
                }`}
                title="Show why each instruction appears"
              >
                <Eye className="w-3 h-3" />
                Why this is here
              </button>
            </div>

            {/* Edit Conflict Warning Banner */}
            {hasEditConflict && (
              <div className="p-3 bg-[#FEF3C7] dark:bg-[#78350F]/40 border-b border-[#FDE68A] dark:border-[#B45309]/50 text-xs text-[#92400E] dark:text-[#FDE68A] flex items-center justify-between gap-2">
                <span>You edited the prompt manually. Keep your changes or rebuild from form?</span>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => handleResolveConflict('keep')}
                    className="px-2 py-0.5 bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] rounded-md font-bold text-[11px] hover:bg-[#FFFBEB] dark:hover:bg-[#334155] border dark:border-[#334155]"
                  >
                    Keep edits
                  </button>
                  <button
                    onClick={() => handleResolveConflict('rebuild')}
                    className="px-2 py-0.5 bg-[#B45309] text-white rounded-md font-bold text-[11px] hover:bg-[#92400E]"
                  >
                    Rebuild
                  </button>
                </div>
              </div>
            )}

            {/* Prompt Content Area */}
            <div className="p-4 max-h-[500px] overflow-y-auto custom-scrollbar font-mono text-xs bg-[#FAFBFD] dark:bg-[#090D16] text-[#172033] dark:text-[#E2E8F0] leading-relaxed">
              {isManualEditing ? (
                <textarea
                  value={displayedPromptText}
                  onChange={(e) => {
                    setManualPromptText(e.target.value);
                  }}
                  className="w-full h-96 p-3 font-mono text-xs rounded-xl border border-[#4F46E5] dark:border-[#818CF8] focus:outline-hidden bg-white dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9]"
                  placeholder="Directly edit your prompt..."
                />
              ) : (
                <div className="space-y-4">
                  {assembled.sections.map((sec, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="font-bold text-[#4F46E5] dark:text-[#818CF8] flex items-center justify-between border-b border-[#E2E8F0] dark:border-[#1E293B] pb-0.5">
                        <span>### {sec.title}</span>
                        {showExplainability && sec.reason && (
                          <span className="text-[10px] font-sans font-normal text-[#0F9D91] dark:text-[#2DD4BF] bg-[#F0FDF4] dark:bg-[#064E3B]/30 px-1.5 py-0.2 rounded-sm border border-[#BBF7D0] dark:border-[#059669]/40">
                            {sec.reason}
                          </span>
                        )}
                      </div>
                      <div className="whitespace-pre-wrap text-[#1E293B] dark:text-[#CBD5E1] pl-1">
                        {sec.content}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Preview Action Bar */}
            <div className="p-4 bg-[#F8FAFC] dark:bg-[#0F172A] border-t border-[#D9DFEA] dark:border-[#334155] space-y-2.5">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="flex-1 h-11 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#A7F3D0]" />
                      Copied to clipboard!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Assembled Prompt
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsManualEditing(!isManualEditing)}
                  className={`h-11 px-3.5 rounded-xl border transition-colors flex items-center justify-center text-xs font-semibold ${
                    isManualEditing 
                      ? 'bg-[#182742] dark:bg-[#4F46E5] text-white border-[#182742] dark:border-[#4F46E5]' 
                      : 'border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#334155]'
                  }`}
                  title={isManualEditing ? 'Save manual edits' : 'Edit prompt manually'}
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              </div>

              {/* Secondary Download & Draft Actions */}
              <div className="flex items-center justify-between text-xs gap-1.5 flex-wrap pt-1">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleDownloadMd}
                    className="px-2.5 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:bg-[#F7F8FC] dark:hover:bg-[#334155] text-[#596579] dark:text-[#94A3B8] font-medium flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    .md
                  </button>

                  <button
                    onClick={handleDownloadTxt}
                    className="px-2.5 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:bg-[#F7F8FC] dark:hover:bg-[#334155] text-[#596579] dark:text-[#94A3B8] font-medium flex items-center gap-1"
                  >
                    <Download className="w-3.5 h-3.5" />
                    .txt
                  </button>

                  <button
                    onClick={handleExportConfig}
                    className="px-2.5 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:bg-[#F7F8FC] dark:hover:bg-[#334155] text-[#596579] dark:text-[#94A3B8] font-medium flex items-center gap-1"
                    title="Export configuration JSON"
                  >
                    JSON
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handleSaveDraft}
                    className="px-2.5 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#1E293B] hover:bg-[#EEF2FF] dark:hover:bg-[#312E81]/40 hover:text-[#4F46E5] dark:hover:text-[#A5B4FC] text-[#596579] dark:text-[#94A3B8] font-medium flex items-center gap-1"
                    title="Save draft locally in browser"
                  >
                    <Bookmark className="w-3.5 h-3.5" />
                    Save draft
                  </button>
                </div>
              </div>

              {draftSavedToast && (
                <div className="text-[11px] text-[#059669] dark:text-[#34D399] font-semibold flex items-center gap-1.5 bg-[#ECFDF5] dark:bg-[#064E3B]/30 p-2 rounded-lg border border-[#A7F3D0] dark:border-[#059669]/40 animate-in fade-in">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Saved to browser local storage. Resume anytime!
                </div>
              )}
            </div>
          </div>

          {/* Response Checker Shortcut Card */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#EEF2FF] to-white dark:from-[#1E293B] dark:to-[#0F172A] border border-[#C7D2FE] dark:border-[#334155] flex items-center justify-between gap-3 shadow-2xs">
            <div>
              <span className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9] block">Got an answer from your AI?</span>
              <span className="text-[11px] text-[#596579] dark:text-[#94A3B8]">Audit it against {workflow.verificationChecks.length} domain verification checks.</span>
            </div>
            <button
              onClick={onOpenResponseChecker}
              className="h-8 px-3 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
            >
              <CheckSquare className="w-3.5 h-3.5" />
              Check response
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
