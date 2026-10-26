import React from 'react';
import { Download, X, Smartphone, Sparkles, Check, Share2, PlusSquare } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface InstallAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InstallAppModal: React.FC<InstallAppModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, installApp } = usePWAInstall();

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    const success = await installApp();
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-[#0F172A] border border-indigo-200 dark:border-indigo-900/60 rounded-3xl shadow-2xl p-6 relative overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3.5 mb-5">
          <div className="w-13 h-13 rounded-2xl bg-[#070e28] p-1 border border-indigo-500/30 shadow-md flex items-center justify-center shrink-0">
            <img 
              src="/brand-mark-512x512.png" 
              alt="PromptLaz Icon" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
              Install PromptLaz
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                PWA Ready
              </span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Zero-install native experience for mobile, tablet & desktop
            </p>
          </div>
        </div>

        {isInstalled ? (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
              <Check className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">
              PromptLaz is already installed!
            </h4>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              You can launch it directly from your home screen or app launcher anytime.
            </p>
          </div>
        ) : isIOS ? (
          /* iOS Safari Specific Step-by-Step Instructions */
          <div className="space-y-4 mb-5 text-xs text-slate-600 dark:text-slate-300">
            <div className="p-3.5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 space-y-2.5">
              <div className="font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>How to install on iPhone & iPad:</span>
              </div>
              <ol className="space-y-2 pl-1 list-decimal list-inside text-slate-700 dark:text-slate-300 leading-relaxed">
                <li>
                  Tap the <strong className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400"><Share2 className="w-3.5 h-3.5 inline" /> Share</strong> button in Safari's bottom toolbar.
                </li>
                <li>
                  Scroll down the share sheet and tap <strong className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400"><PlusSquare className="w-3.5 h-3.5 inline" /> Add to Home Screen</strong>.
                </li>
                <li>
                  Tap <strong className="font-semibold text-indigo-600 dark:text-indigo-400">Add</strong> in the top-right corner to finish.
                </li>
              </ol>
            </div>
          </div>
        ) : (
          /* Android / Chrome / Edge 1-Click Install */
          <div className="space-y-4 mb-5">
            <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                <span><strong>Instant Offline Access:</strong> Works smoothly even with flaky cellular reception.</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                <span><strong>Standalone Window:</strong> Full-screen immersive workspace without browser address bars.</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">✓</div>
                <span><strong>Zero Storage Clutter:</strong> Feather-light web app with instant updates.</span>
              </div>
            </div>

            <button
              onClick={handleInstallClick}
              disabled={!isInstallable}
              className={`w-full h-12 rounded-2xl font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all ${
                isInstallable
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20 active:scale-[0.98]'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{isInstallable ? 'Install PromptLaz App' : 'Use Browser Menu ("Add to Home Screen")'}</span>
            </button>
          </div>
        )}

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
          <p className="text-[11px] text-slate-400 dark:text-slate-500">
            PromptLaz runs 100% locally in your browser. No sign-up or accounts required.
          </p>
        </div>
      </div>
    </div>
  );
};
