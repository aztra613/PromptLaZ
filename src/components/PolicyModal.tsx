import React, { useState } from 'react';
import { X, ShieldAlert, Lock, AlertTriangle, CheckCircle2, Ban } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'safety' | 'privacy' | 'boundaries';
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'safety'
}) => {
  const [tab, setTab] = useState<'safety' | 'privacy' | 'boundaries'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172033]/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white dark:bg-[#1E293B] rounded-2xl max-w-2xl w-full shadow-2xl border border-[#D9DFEA] dark:border-[#334155] overflow-hidden flex flex-col max-h-[88vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-modal-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between bg-[#F7F8FC] dark:bg-[#0F172A]">
          <div>
            <h2 id="policy-modal-title" className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
              PromptLas Governance & Policies
            </h2>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8]">
              PRD v1.5 Standards, Trust and Operating Boundaries
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-white dark:hover:bg-[#1E293B] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex border-b border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC]/50 dark:bg-[#0F172A]/80 px-6 pt-2 gap-4 text-xs font-semibold overflow-x-auto">
          <button
            onClick={() => setTab('safety')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
              tab === 'safety'
                ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8]'
                : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9]'
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            Risk Classes (R0–R4) & Blocked Topics
          </button>

          <button
            onClick={() => setTab('privacy')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
              tab === 'privacy'
                ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8]'
                : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9]'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Privacy & Local Data
          </button>

          <button
            onClick={() => setTab('boundaries')}
            className={`pb-2.5 border-b-2 transition-colors flex items-center gap-1.5 shrink-0 ${
              tab === 'boundaries'
                ? 'border-[#4F46E5] dark:border-[#818CF8] text-[#4F46E5] dark:text-[#818CF8]'
                : 'border-transparent text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9]'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            Execution Boundaries
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#172033] dark:text-[#F1F5F9] leading-relaxed custom-scrollbar">
          {tab === 'safety' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Content Risk Classes (PRD Section 15.1)
                </h3>
                <p className="text-[#596579] dark:text-[#94A3B8] mb-3">
                  Every published workflow carries an explicit risk class dictating required review thresholds and validation safeguards.
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A]">
                    <span className="font-bold text-[#18794E] dark:text-[#34D399] block">R0 — Everyday & Creative</span>
                    Low direct harm consequence (e.g. photography planning, general hobbies). Uses standard prompt QA.
                  </div>
                  <div className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A]">
                    <span className="font-bold text-[#4F46E5] dark:text-[#818CF8] block">R1 — Learning & General Business</span>
                    Mistakes cost time but not immediate safety (e.g. study tutor, PRD creation, coding tests). Shows uncertainty checks and verification tips.
                  </div>
                  <div className="p-3 rounded-xl border border-[#FED7AA] dark:border-[#D97706]/40 bg-[#FFF7ED] dark:bg-[#78350F]/20">
                    <span className="font-bold text-[#9A5B00] dark:text-[#FBBF24] block">R2 — Professional & Consequential</span>
                    High consequence (e.g. civil/soil engineering, electrical power, valuation). Requires explicit units, governing standards (ASTM, ACI, CIS), missing-input gates, and named domain reviewer.
                  </div>
                  <div className="p-3 rounded-xl border border-[#FECACA] dark:border-[#991B1B]/40 bg-[#FEF2F2] dark:bg-[#7F1D1D]/20">
                    <span className="font-bold text-[#B42318] dark:text-[#FCA5A5] block">R3 — Restricted & Sensitive</span>
                    Healthcare literacy, legal action prep. Strictly educational and preparation-only; no medical diagnosis or legal counsel.
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-[#D9DFEA] dark:border-[#334155]">
                <h3 className="font-bold text-sm text-[#B42318] dark:text-[#F87171] mb-1 flex items-center gap-1.5">
                  <Ban className="w-4 h-4" />
                  Strictly Blocked Topics (R4 Policy - Section 15.2)
                </h3>
                <p className="text-[#596579] dark:text-[#94A3B8] mb-2">
                  PromptLas never publishes workflows intended to facilitate:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-[#596579] dark:text-[#94A3B8]">
                  <li>Weapons, explosives, chemical or radiological harm</li>
                  <li>Malware, unauthorized network intrusion, credential theft, or offensive exploits</li>
                  <li>Fraud, deceptive testimonials, fake receipts, or phishing kits</li>
                  <li>Harassment, stalking, doxxing, or non-consensual deepfakes</li>
                  <li>Academic cheating, exam impersonation, or leaked question papers</li>
                </ul>
              </div>
            </div>
          )}

          {tab === 'privacy' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Zero Server Storage by Default (PRD Section 11.6)
                </h3>
                <p className="text-[#596579] dark:text-[#94A3B8] mb-3">
                  PromptLas is a browser-first, client-side application designed with maximum privacy:
                </p>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F8FC] dark:bg-[#0F172A] border border-[#D9DFEA] dark:border-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F9D91] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block">No Account or Login Required</span>
                      You do not need to register an email, provide credit cards, or connect accounts to build prompts.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F8FC] dark:bg-[#0F172A] border border-[#D9DFEA] dark:border-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F9D91] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block">In-Memory Reference Image Preview</span>
                      When using image edit workflows, reference images are loaded via local temporary object URLs (`blob:`). No photo bytes are ever uploaded to PromptLas servers.
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F7F8FC] dark:bg-[#0F172A] border border-[#D9DFEA] dark:border-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F9D91] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block">Opt-in Local Storage</span>
                      Drafts are stored solely in your browser's `localStorage` on this specific machine and can be cleared with one click at any time.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'boundaries' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-sm text-[#172033] dark:text-[#F1F5F9] mb-1">
                  Honest Product Boundaries (PRD Section 3.2 & 0.2)
                </h3>
                <p className="text-[#596579] dark:text-[#94A3B8] mb-3">
                  To prevent misunderstanding, PromptLas clearly separates prompt assembly from task execution:
                </p>

                <div className="space-y-2">
                  <div className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A]">
                    <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block mb-0.5">Prompt Assembly ≠ Task Execution</span>
                    Generating a prompt does not mean an image has been rendered, code has run, or a structural design has been stamped. Execution takes place in your downstream model.
                  </div>

                  <div className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A]">
                    <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block mb-0.5">Engineering & Structural Safety</span>
                    Workflows in civil, geotechnical, and electrical engineering are computational drafting and requirements-gathering aids. They do NOT replace a sealed calculation by a licensed Professional Engineer (PE/SE/Chartered).
                  </div>

                  <div className="p-3 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-white dark:bg-[#0F172A]">
                    <span className="font-semibold text-[#172033] dark:text-[#F1F5F9] block mb-0.5">No Financial Advice or Trading</span>
                    Equity and valuation frameworks provide educational methodologies. PromptLas does not fetch live stock tickers, execute trades, or provide personalized financial recommendations.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F8FC] dark:bg-[#0F172A] border-t border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between text-xs text-[#596579] dark:text-[#94A3B8]">
          <span>PromptLas Trust & Governance Baseline v1.5</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#182742] hover:bg-[#172033] dark:bg-[#4F46E5] dark:hover:bg-[#4338CA] text-white text-xs font-semibold transition-colors"
          >
            I understand
          </button>
        </div>
      </div>
    </div>
  );
};
