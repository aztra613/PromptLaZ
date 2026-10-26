import React from 'react';
import { Compass, BookOpen, ShieldCheck, Bookmark, Sparkles, Menu, X, ArrowRight, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  currentView: 'landing' | 'studio' | 'atlas' | 'policy';
  onNavigate: (view: 'landing' | 'studio' | 'atlas' | 'policy', workflowId?: string) => void;
  onOpenDrafts: () => void;
  onOpenPolicy: (tab: 'safety' | 'privacy' | 'boundaries') => void;
  onOpenInstallApp?: () => void;
  draftsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenDrafts,
  onOpenPolicy,
  onOpenInstallApp,
  draftsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white dark:bg-[#0F172A] border-b border-[#D9DFEA] dark:border-[#1E293B] shadow-xs transition-colors">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        
        {/* Brand Wordmark & Compass Mark */}
        <button
          onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 text-left group focus:outline-hidden focus:ring-2 focus:ring-[#4F46E5] rounded-lg p-1"
          aria-label="PromptLaz Home"
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-xs border border-slate-200 dark:border-slate-700 bg-[#070e28] flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform duration-200">
            <img 
              src="/brand-mark-512x512.png" 
              alt="PromptLaz Mark" 
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                // Fallback if image fails to load
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-xl text-[#172033] dark:text-[#F1F5F9] tracking-tight">PromptLaz</span>
              <span className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-[#EEF2FF] dark:bg-[#1E1B4B] text-[#4F46E5] dark:text-[#A5B4FC] border border-[#C7D2FE] dark:border-[#3730A3]">Atlas + Studio</span>
            </div>
            <p className="text-xs text-[#596579] dark:text-[#94A3B8] font-medium hidden sm:block">Know what to ask. Build better prompts.</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2 text-sm font-medium text-[#596579] dark:text-[#94A3B8]">
          <button
            onClick={() => onNavigate('atlas')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              currentView === 'atlas' 
                ? 'text-[#4F46E5] dark:text-[#818CF8] bg-[#EEF2FF] dark:bg-[#1E1B4B] font-semibold' 
                : 'hover:text-[#172033] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Explore Atlas (54 Domains)
          </button>

          <button
            onClick={() => onNavigate('studio', 'universal_builder')}
            className={`px-3 py-2 rounded-lg transition-colors flex items-center gap-1.5 ${
              currentView === 'studio' 
                ? 'text-[#4F46E5] dark:text-[#818CF8] bg-[#EEF2FF] dark:bg-[#1E1B4B] font-semibold' 
                : 'hover:text-[#172033] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
            Universal Builder
          </button>

          <button
            onClick={() => onOpenPolicy('safety')}
            className="px-3 py-2 rounded-lg hover:text-[#172033] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] transition-colors flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" />
            Safety & Limits
          </button>

          <button
            onClick={onOpenDrafts}
            className="px-3 py-2 rounded-lg hover:text-[#172033] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] transition-colors flex items-center gap-1.5 relative"
            title="View browser-saved drafts"
          >
            <Bookmark className="w-4 h-4" />
            Drafts
            {draftsCount > 0 && (
              <span className="ml-1 text-[11px] font-bold px-1.5 py-0.2 rounded-full bg-[#4F46E5] text-white">
                {draftsCount}
              </span>
            )}
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] transition-colors ml-1"
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-[#FBBF24]" /> : <Moon className="w-4 h-4 text-[#4F46E5]" />}
          </button>
        </nav>

        {/* Primary CTA & PWA Install */}
        <div className="hidden md:flex items-center gap-2.5">
          {onOpenInstallApp && (
            <button
              onClick={onOpenInstallApp}
              className="h-10 px-3.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/80 dark:bg-indigo-950/60 hover:bg-indigo-100 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-2xs flex items-center gap-1.5 transition-all"
              title="Install PromptLaz app on your device"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
          )}

          <button
            onClick={() => onNavigate('studio', 'universal_builder')}
            className="h-10 px-5 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-2 transition-all active:scale-[0.98] focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
          >
            Build a prompt
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger & Actions Button */}
        <div className="flex md:hidden items-center gap-1.5">
          {onOpenInstallApp && (
            <button
              onClick={onOpenInstallApp}
              className="p-2 rounded-lg text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
              title="Install PromptLaz App"
              aria-label="Install PromptLaz App"
            >
              <Download className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={onOpenDrafts}
            className="p-2 rounded-lg text-[#596579] dark:text-[#94A3B8] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] relative"
            aria-label="View saved drafts"
          >
            <Bookmark className="w-5 h-5" />
            {draftsCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#4F46E5]"></span>
            )}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#172033] dark:text-[#F1F5F9]" /> : <Menu className="w-6 h-6 text-[#172033] dark:text-[#F1F5F9]" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#D9DFEA] dark:border-[#1E293B] bg-white dark:bg-[#0F172A] px-4 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2">
          <button
            onClick={() => { onNavigate('landing'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]"
          >
            Home & Overview
          </button>
          <button
            onClick={() => { onNavigate('atlas'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] flex items-center justify-between"
          >
            <span>Explore Atlas (54 Domains)</span>
            <span className="text-xs text-[#4F46E5] dark:text-[#818CF8] font-semibold">Browse</span>
          </button>
          <button
            onClick={() => { onNavigate('studio', 'universal_builder'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]"
          >
            Universal Builder ("I don't know what this is called")
          </button>
          <button
            onClick={() => { onOpenPolicy('safety'); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B]"
          >
            Safety, Disclaimers & Governance
          </button>
          <button
            onClick={() => { onOpenDrafts(); setMobileMenuOpen(false); }}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] flex items-center justify-between"
          >
            <span>Saved Drafts</span>
            {draftsCount > 0 && <span className="text-xs bg-[#4F46E5] text-white px-2 py-0.5 rounded-full">{draftsCount}</span>}
          </button>
          <button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#172033] dark:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] flex items-center justify-between"
          >
            <span>Theme Mode</span>
            <span className="text-xs font-semibold text-[#4F46E5] dark:text-[#FBBF24] flex items-center gap-1">
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              {isDark ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
          {onOpenInstallApp && (
            <button
              onClick={() => { onOpenInstallApp(); setMobileMenuOpen(false); }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/40 hover:bg-emerald-100 flex items-center justify-between border border-emerald-200 dark:border-emerald-800"
            >
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Install PromptLaz App (PWA)</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white">Free</span>
            </button>
          )}
          <div className="pt-2">
            <button
              onClick={() => { onNavigate('studio', 'civil_soil_mechanics'); setMobileMenuOpen(false); }}
              className="w-full h-11 rounded-xl bg-[#4F46E5] dark:bg-[#6366F1] text-white text-sm font-semibold flex items-center justify-center gap-2"
            >
              Build a prompt
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
