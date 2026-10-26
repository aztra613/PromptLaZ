import React from 'react';
import { ArrowLeft, Shield, Lock, FileText, AlertTriangle, Mail, Scale, Eye, Cookie } from 'lucide-react';

export type PolicyTab = 
  | 'privacy' 
  | 'terms' 
  | 'cookies' 
  | 'disclaimer' 
  | 'contact' 
  | 'licenses' 
  | 'accessibility' 
  | 'security';

interface LegalPolicyPageProps {
  activeTab: PolicyTab;
  onBack: () => void;
  onTabChange: (tab: PolicyTab) => void;
}

const TAB_CONFIG: Record<PolicyTab, { label: string; icon: any }> = {
  privacy: { label: 'Privacy', icon: Lock },
  terms: { label: 'Terms', icon: FileText },
  cookies: { label: 'Cookies', icon: Cookie },
  disclaimer: { label: 'Disclaimer', icon: AlertTriangle },
  contact: { label: 'Contact', icon: Mail },
  licenses: { label: 'Licenses', icon: Scale },
  accessibility: { label: 'Accessibility', icon: Eye },
  security: { label: 'Security', icon: Shield }
};

export const LegalPolicyPage: React.FC<LegalPolicyPageProps> = ({
  activeTab,
  onBack,
  onTabChange
}) => {
  return (
    <div className="min-h-[80vh] max-w-[860px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to PromptLaz</span>
        </button>
      </div>

      {/* Policy Navigation Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-8 border-b border-slate-200 dark:border-slate-800 custom-scrollbar">
        {(Object.keys(TAB_CONFIG) as PolicyTab[]).map((tabKey) => {
          const cfg = TAB_CONFIG[tabKey];
          const Icon = cfg.icon;
          const isActive = activeTab === tabKey;
          return (
            <button
              key={tabKey}
              onClick={() => onTabChange(tabKey)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 ${
                isActive
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cfg.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="bg-white dark:bg-[#1E293B] rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs">
        {/* COOKIES VIEW (Matches Aztras / MusikFlo Standard) */}
        {activeTab === 'cookies' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Cookies
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                PromptLaz does not set cookies.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  NO APPLICATION COOKIES
                </h2>
                <p className="mb-3">
                  PromptLaz does not create, read or rely on cookies. Its source code contains no cookie API usage, no cookie banner/consent manager, no analytics SDK and no tracking pixels.
                </p>
                <p>
                  Preferences such as your light/dark theme, unit system, currency, and saved prompt drafts are kept entirely in browser <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">localStorage</code>, not in cookies.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  THIRD PARTIES AND HOSTING
                </h2>
                <p className="mb-3">
                  PromptLaz loads modern web typography from Google Fonts. Google may receive request metadata when web font assets are fetched; that infrastructure behavior is controlled by Google, not by PromptLaz.
                </p>
                <p>
                  Your hosting provider or Edge CDN (Cloudflare Pages) may also log standard HTTP requests as part of serving static web assets and preventing denial-of-service attacks. Those are network-level operations outside the application source code.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  LOCAL DATA CONTROL
                </h2>
                <p>
                  Because PromptLaz uses browser <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-xs">localStorage</code> exclusively on your device, you can clear all data at any time via your browser settings or using the "Drafts" management modal.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PRIVACY POLICY */}
        {activeTab === 'privacy' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Privacy Policy
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                PromptLaz is built on a local-first, zero-server-storage privacy architecture.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  1. ZERO SERVER STORAGE
                </h2>
                <p>
                  We do not operate a backend database that collects your personal data. All prompt drafts, technical parameters, form inputs, and custom configurations remain strictly within your local browser sandbox.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  2. NO ACCOUNTS OR TRACKING
                </h2>
                <p>
                  You do not need to create an account, register an email address, or provide corporate credentials to use PromptLaz. We do not track your prompts, keystrokes, or task selections.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  3. THIRD-PARTY AI INTERACTIONS
                </h2>
                <p>
                  PromptLaz prepares and structures your prompt. We do not transmit your prompt to external AI APIs directly unless you explicitly copy or send it through your own AI accounts (such as ChatGPT, Claude, Gemini, Cursor, or Perplexity).
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  4. DATA RETENTION & REMOVAL
                </h2>
                <p>
                  Your drafts persist only as long as you keep your browser data intact. You can delete individual drafts or clear your full local history at any time.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TERMS OF SERVICE */}
        {activeTab === 'terms' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Terms of Service
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Guidelines for using PromptLaz prompt engineering studio and knowledge atlas.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  1. ACCEPTANCE & PERMITTED USE
                </h2>
                <p className="mb-2">
                  PromptLaz is an educational and engineering tool designed to assist in formulating high-precision prompts for AI reasoning models.
                </p>
                <p>
                  You are free to use PromptLaz for personal, academic, commercial, and research purposes. Generated prompts belong entirely to you with zero royalty or licensing claims by PromptLaz or Aztras AI Tech Solutions.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  2. PROHIBITED USES
                </h2>
                <p>
                  You agree not to use PromptLaz to formulate prompts intended for malicious activities, including malware generation, cyberattacks, automated harassment, illegal weapons fabrication, or high-consequence unlicensed professional practice (such as signing off on structural calculations or clinical medical diagnoses without human oversight).
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  3. LIMITATION OF LIABILITY
                </h2>
                <p>
                  PromptLaz is provided "as is" without warranty of any kind. Aztras AI Tech Solutions is not liable for errors, inaccuracies, or outcomes generated by downstream third-party AI models.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* DISCLAIMER */}
        {activeTab === 'disclaimer' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Disclaimer
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Product boundaries, artificial intelligence limitations, and professional advice disclaimers.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  NOT CERTIFIED PROFESSIONAL COUNSEL
                </h2>
                <p>
                  PromptLaz is a prompt-engineering aid. It does NOT provide certified professional engineering, financial, legal, or medical counsel. All specialized outputs (including structural load checks, financial valuations, and medical review summaries) must be reviewed by qualified, licensed human professionals before taking real-world action.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  AI ENGINE INDEPENDENCE
                </h2>
                <p>
                  PromptLaz is an independent static-first product developed by Aztras AI Tech Solutions. It is not affiliated with, endorsed by, or sponsored by OpenAI, Anthropic, Google DeepMind, Perplexity, DeepSeek, or Midjourney.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  NO GUARANTEE OF AI RESPONSES
                </h2>
                <p>
                  While PromptLaz formats prompts with explicit constraints, negative guardrails, and verification checks, downstream AI model outputs remain probabilistic. PromptLaz cannot guarantee that third-party AI models will comply with all constraints or produce error-free results.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Contact & Support
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Product of Aztras AI Tech Solutions, Chennai, India.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  CORPORATE HEADQUARTERS
                </h2>
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  Aztras AI Tech Solutions
                </p>
                <p>Chennai, Tamil Nadu, India.</p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  DIRECT CHANNELS
                </h2>
                <ul className="space-y-2">
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Corporate & Inquiries:</strong>{' '}
                    <a href="mailto:contact@aztras.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@aztras.com</a>
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Security & Vulnerability Reports:</strong>{' '}
                    <a href="mailto:security@aztras.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">security@aztras.com</a>
                  </li>
                  <li>
                    <strong className="text-slate-900 dark:text-slate-100">Community & Code Repository:</strong>{' '}
                    <a href="https://github.com/aztra613/PromptLaZ" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">github.com/aztra613/PromptLaZ</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  AVAILABILITY
                </h2>
                <p>
                  Technical inquiries and feedback are reviewed Monday through Friday during standard Indian Standard Time (IST) business hours.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* LICENSES */}
        {activeTab === 'licenses' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Open-Source Licenses
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Open-source components, icon libraries, and technical standards attributions.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  APPLICATION LICENSE (MIT)
                </h2>
                <p className="mb-2">
                  Copyright © 2026 Aztras AI Tech Solutions.
                </p>
                <p className="font-mono text-xs bg-slate-50 dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction...
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  THIRD-PARTY ASSETS & LIBRARIES
                </h2>
                <ul className="space-y-1.5 list-disc pl-4">
                  <li><strong>React & React-DOM</strong> — MIT License</li>
                  <li><strong>Vite</strong> — MIT License</li>
                  <li><strong>Tailwind CSS</strong> — MIT License</li>
                  <li><strong>Lucide React</strong> — ISC License</li>
                  <li><strong>D3.js</strong> — ISC License</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* ACCESSIBILITY */}
        {activeTab === 'accessibility' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Accessibility Statement
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Committed to digital inclusion, WCAG 2.2 AA standards, and universal usability.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  WCAG 2.2 LEVEL AA CONFORMANCE
                </h2>
                <p>
                  PromptLaz is engineered to comply with WCAG 2.2 Level AA accessibility criteria across both mobile and desktop environments.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  KEYBOARD ACCESSIBILITY
                </h2>
                <p>
                  All interactive controls (including dropdowns, search bars, modals, tab switchers, and prompt copying actions) support standard keyboard navigation using Tab, Shift+Tab, Enter, Space, and Escape.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  CONTRAST & TEXT RESIZING
                </h2>
                <p>
                  Both Light and Dark themes provide contrast ratios exceeding 4.5:1 for body copy. The user interface supports browser zoom up to 200% without loss of functional capabilities.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECURITY */}
        {activeTab === 'security' && (
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
                Security Architecture
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Client-side static execution and zero-credential security model.
              </p>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed pt-4 border-t border-slate-100 dark:border-slate-800/80">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  STATIC CLIENT RUNTIME
                </h2>
                <p>
                  PromptLaz executes 100% within your client browser. There are no server-side databases, remote sessions, or dynamic backend APIs that can be compromised or breached.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  ZERO CREDENTIAL HANDLING
                </h2>
                <p>
                  PromptLaz never asks for, accepts, or stores your OpenAI, Anthropic, or cloud API keys. You copy the assembled prompt text directly to your own designated AI application.
                </p>
              </div>

              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-2">
                  REPORTING VULNERABILITIES
                </h2>
                <p>
                  If you discover a security vulnerability or CSP flaw, please contact our team at <a href="mailto:security@aztras.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">security@aztras.com</a>. We adhere to coordinated responsible disclosure.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
