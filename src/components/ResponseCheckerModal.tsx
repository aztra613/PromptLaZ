import React, { useState } from 'react';
import { X, CheckSquare, AlertCircle, AlertTriangle, CheckCircle, RefreshCw, Sparkles, FileText } from 'lucide-react';
import { WorkflowSchema } from '../types';

interface ResponseCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  workflow: WorkflowSchema;
}

export const ResponseCheckerModal: React.FC<ResponseCheckerModalProps> = ({
  isOpen,
  onClose,
  workflow
}) => {
  const [aiAnswer, setAiAnswer] = useState('');
  const [analyzed, setAnalyzed] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const handleRunChecks = () => {
    if (!aiAnswer.trim()) return;

    // Run deterministic checks
    const initialChecked: Record<string, boolean> = {};
    const textLower = aiAnswer.toLowerCase();

    workflow.verificationChecks.forEach((check) => {
      // Heuristic presence checks
      if (check.category === 'units') {
        const hasUnits = textLower.includes('kn') || textLower.includes('kpa') || textLower.includes('mdd') || textLower.includes('%') || textLower.includes('pcf') || textLower.includes('mm');
        initialChecked[check.id] = hasUnits;
      } else if (check.category === 'standards') {
        const hasStandards = textLower.includes('astm') || textLower.includes('aci') || textLower.includes('eurocode') || textLower.includes('is ') || textLower.includes('standard') || textLower.includes('cis');
        initialChecked[check.id] = hasStandards;
      } else if (check.category === 'assumptions') {
        const hasAssumptions = textLower.includes('assum') || textLower.includes('note') || textLower.includes('caution') || textLower.includes('missing');
        initialChecked[check.id] = hasAssumptions;
      } else {
        initialChecked[check.id] = true;
      }
    });

    setCheckedItems(initialChecked);
    setAnalyzed(true);
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172033]/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white dark:bg-[#1E293B] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#D9DFEA] dark:border-[#334155] overflow-hidden flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checker-modal-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between bg-[#F7F8FC] dark:bg-[#0F172A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] flex items-center justify-center">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 id="checker-modal-title" className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
                Response Checker — Verify External AI Output
              </h2>
              <p className="text-xs text-[#596579] dark:text-[#94A3B8]">
                Checking against domain standards for: <span className="font-semibold text-[#172033] dark:text-[#F1F5F9]">{workflow.title}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-white dark:hover:bg-[#1E293B] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="p-3.5 rounded-xl bg-[#FFFBEB] dark:bg-[#78350F]/20 border border-[#FDE68A] dark:border-[#B45309]/40 text-xs text-[#92400E] dark:text-[#FDE68A] flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#B45309] dark:text-[#FBBF24]" />
            <div>
              <span className="font-semibold block mb-0.5">Verification Aid Notice (PRD Section 9.7 & 15.4)</span>
              This tool applies verification heuristics and checks to perform. It flags potential issues, missing assumptions, or unverified claims. It does not certify an answer as legally or structurally correct.
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#172033] dark:text-[#F1F5F9] mb-1.5 flex items-center justify-between">
              <span>Paste the AI model's response below:</span>
              <span className="text-xs font-normal text-[#596579] dark:text-[#94A3B8]">Plain text or markdown</span>
            </label>
            <textarea
              value={aiAnswer}
              onChange={(e) => setAiAnswer(e.target.value)}
              placeholder="Paste the answer generated by ChatGPT, Claude, Gemini, or other tool here to audit against governing standards..."
              className="w-full h-36 p-3 text-xs font-mono rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] placeholder:text-[#94A3B8] dark:placeholder:text-[#64748B] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden custom-scrollbar"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleRunChecks}
              disabled={!aiAnswer.trim()}
              className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Audit against verification rubric
            </button>
          </div>

          {analyzed && (
            <div className="space-y-3 pt-3 border-t border-[#D9DFEA] dark:border-[#334155] animate-in fade-in">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#172033] dark:text-[#F1F5F9]">
                  Domain Verification Rubric ({workflow.verificationChecks.length} checks)
                </h3>
                <span className="text-xs font-medium text-[#0F9D91] dark:text-[#2DD4BF]">
                  Click items to mark verified
                </span>
              </div>

              <div className="space-y-2">
                {workflow.verificationChecks.map((vc) => {
                  const isPassed = checkedItems[vc.id] ?? false;
                  return (
                    <div
                      key={vc.id}
                      onClick={() => toggleCheck(vc.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 ${
                        isPassed 
                          ? 'border-[#A7F3D0] dark:border-[#059669]/40 bg-[#ECFDF5] dark:bg-[#064E3B]/20' 
                          : 'border-[#FED7AA] dark:border-[#D97706]/40 bg-[#FFF7ED] dark:bg-[#78350F]/20'
                      }`}
                    >
                      <div className="mt-0.5">
                        {isPassed ? (
                          <CheckCircle className="w-4 h-4 text-[#059669] dark:text-[#34D399]" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-[#D97706] dark:text-[#FBBF24]" />
                        )}
                      </div>
                      <div className="flex-1 text-xs">
                        <div className="font-semibold text-[#172033] dark:text-[#F1F5F9] flex items-center gap-2">
                          <span>{vc.title}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-white/80 dark:bg-[#0F172A] font-mono text-[#596579] dark:text-[#94A3B8] border border-[#D9DFEA] dark:border-[#334155]">
                            {vc.category}
                          </span>
                        </div>
                        <p className="text-[#596579] dark:text-[#94A3B8] mt-0.5">
                          {vc.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F8FC] dark:bg-[#0F172A] border-t border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between text-xs text-[#596579] dark:text-[#94A3B8]">
          <span>PromptLas Response Verification Engine</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] hover:bg-white dark:hover:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] text-xs font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
