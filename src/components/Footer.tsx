import React from 'react';
import { Compass, Shield, Lock, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'landing' | 'studio' | 'atlas', workflowId?: string) => void;
  onOpenPolicy: (tab: any) => void;
  onNavigatePolicy?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy, onNavigatePolicy }) => {
  return (
    <footer className="w-full bg-[#182742] dark:bg-[#070D1A] text-white border-t border-[#233554] dark:border-[#1E293B] mt-24">
      {/* Notice & Trust Strip */}
      <div className="border-b border-[#2A3E63] dark:border-[#1E293B] py-6 bg-[#131F35] dark:bg-[#0A1224]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#A0AEC0]">
            <div className="flex items-start gap-3">
              <Lock className="w-4 h-4 text-[#0F9D91] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">100% Browser-First Privacy</span>
                Prompts and reference images are processed in your local browser session. No prompt text or photo data is sent to PromptLaz servers.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-[#F4B544] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">Execution Boundary Disclosed</span>
                PromptLaz prepares and structures instructions. Image rendering, code execution, or financial analysis happens inside your external AI tool.
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white block mb-0.5">No Unverified Hallucinations</span>
                Engineering, finance, and legal workflows require governing standards and units, flagging missing critical parameters before output.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#070e28] border border-slate-700 p-0.5 flex items-center justify-center">
                <img src="/brand-mark-512x512.png" alt="PromptLaz Mark" className="w-full h-full object-contain rounded-md" />
              </div>
              <span className="font-display font-bold text-lg text-white">PromptLaz</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              The cross-disciplinary Atlas of subjects and Studio of guided prompt forms. Know what to ask. Build better prompts.
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#243554] text-[11px] text-[#A5B4FC]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0F9D91]" />
              PRD v1.5 Core Baseline
            </div>
          </div>

          {/* Directory & Atlas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Atlas Directory</h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('atlas')} className="hover:text-white transition-colors">
                  All 54 Domain Families
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'civil_soil_mechanics')} className="hover:text-white transition-colors">
                  Civil Engineering (Soil & Structural)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'computing_kubernetes_ops')} className="hover:text-white transition-colors">
                  Computing & DevOps Workflows
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'creative_product_photography')} className="hover:text-white transition-colors">
                  Commercial Product Photography
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'business_startup_prd')} className="hover:text-white transition-colors">
                  Startup Idea Validation & PRDs
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Studio Workbench</h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('studio', 'universal_builder')} className="hover:text-white transition-colors">
                  Universal Task Builder (Tier 3)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'finance_equity_valuation')} className="hover:text-white transition-colors">
                  Equity Valuation & Research (R2)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'education_exam_tutor')} className="hover:text-white transition-colors">
                  Socratic Exam Active Recall
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('studio', 'creative_image_edit')} className="hover:text-white transition-colors">
                  Reference-Preserving Photo Retouch
                </button>
              </li>
            </ul>
          </div>

          {/* Trust, Governance & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#CBD5E1]">Trust & Governance</h4>
            <ul className="space-y-2 text-xs text-[#94A3B8]">
              <li>
                <button onClick={() => onOpenPolicy('safety')} className="hover:text-white transition-colors">
                  Risk Classes (R0–R4 Policy)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-white transition-colors">
                  Zero Server Storage & Privacy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('boundaries')} className="hover:text-white transition-colors">
                  Product Boundaries & Disclaimers
                </button>
              </li>
              <li>
                <span className="text-[#64748B] block mt-1">
                  WCAG 2.2 AA Keyboard Accessible
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice matching Aztras AI Tech Solutions Standard */}
        <div className="mt-12 pt-6 border-t border-[#233554] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div>
            <p>
              Product of <strong className="text-white font-semibold">Aztras AI Tech Solutions</strong>, Chennai, India.
            </p>
            <p className="mt-1 text-[#64748B]">
              © 2026 Aztras AI Tech Solutions. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-slate-300">
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('privacy') : onOpenPolicy('privacy')} className="hover:text-white transition-colors">Privacy</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('terms') : onOpenPolicy('terms')} className="hover:text-white transition-colors">Terms</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('cookies') : onOpenPolicy('cookies')} className="hover:text-white transition-colors">Cookies</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('disclaimer') : onOpenPolicy('disclaimer')} className="hover:text-white transition-colors">Disclaimer</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('contact') : onOpenPolicy('contact')} className="hover:text-white transition-colors">Contact</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('licenses') : onOpenPolicy('licenses')} className="hover:text-white transition-colors">Licenses</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('accessibility') : onOpenPolicy('accessibility')} className="hover:text-white transition-colors">Accessibility</button>
              <span className="text-slate-600">·</span>
              <button onClick={() => onNavigatePolicy ? onNavigatePolicy('security') : onOpenPolicy('security')} className="hover:text-white transition-colors">Security</button>
            </div>
            <p className="text-[11px] text-[#64748B] max-w-xl text-left md:text-right">
              Independent static-first AI prompt engineering & domain atlas platform. Users are solely responsible for copyright compliance and lawful use.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
