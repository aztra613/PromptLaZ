import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { StudioWorkspace } from './components/StudioWorkspace';
import { AtlasDirectory } from './components/AtlasDirectory';
import { HelpMeChooseModal } from './components/HelpMeChooseModal';
import { ResponseCheckerModal } from './components/ResponseCheckerModal';
import { LocalDraftsModal } from './components/LocalDraftsModal';
import { PolicyModal } from './components/PolicyModal';
import { InstallAppModal } from './components/InstallAppModal';
import { WORKFLOWS } from './data/workflows';
import { LocalDraft } from './types';
import { getLocalDrafts } from './utils/promptBuilder';
import { ThemeProvider } from './context/ThemeContext';
import { LocalizationProvider } from './context/LocalizationContext';
import { LocalizationBar } from './components/LocalizationBar';
import { LegalPolicyPage, PolicyTab } from './components/LegalPolicyPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'studio' | 'atlas' | 'policy'>('landing');
  const [activeWorkflowId, setActiveWorkflowId] = useState<string>('civil_soil_mechanics');
  const [draftsCount, setDraftsCount] = useState<number>(0);
  const [activePolicyTab, setActivePolicyTab] = useState<PolicyTab>('privacy');

  // Modals
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [checkerModalOpen, setCheckerModalOpen] = useState(false);
  const [draftsModalOpen, setDraftsModalOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [policyModalTab, setPolicyModalTab] = useState<'safety' | 'privacy' | 'boundaries'>('safety');
  const [installModalOpen, setInstallModalOpen] = useState(false);

  // Active Draft to resume (if any)
  const [resumedAnswers, setResumedAnswers] = useState<Record<string, any> | undefined>(undefined);

  // Update drafts count
  const refreshDraftsCount = () => {
    setDraftsCount(getLocalDrafts().length);
  };

  useEffect(() => {
    refreshDraftsCount();

    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '').toLowerCase();
      const validPolicies: PolicyTab[] = ['privacy', 'terms', 'cookies', 'disclaimer', 'contact', 'licenses', 'accessibility', 'security'];
      if (validPolicies.includes(hash as PolicyTab)) {
        setActivePolicyTab(hash as PolicyTab);
        setCurrentView('policy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Find active workflow
  const activeWorkflow = WORKFLOWS.find(w => w.id === activeWorkflowId) || WORKFLOWS[0];

  const handleNavigate = (view: 'landing' | 'studio' | 'atlas' | 'policy', workflowId?: string) => {
    if (workflowId) {
      setActiveWorkflowId(workflowId);
      setResumedAnswers(undefined);
    }
    if (view !== 'policy' && window.location.hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePolicy = (tab: PolicyTab) => {
    setActivePolicyTab(tab);
    setCurrentView('policy');
    window.location.hash = `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectWorkflow = (workflowId: string, initialAnswers?: Record<string, any>) => {
    setActiveWorkflowId(workflowId);
    setResumedAnswers(initialAnswers);
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeDraft = (draft: LocalDraft) => {
    setActiveWorkflowId(draft.workflowId);
    setResumedAnswers(draft.formAnswers);
    setCurrentView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    refreshDraftsCount();
  };

  const handleOpenPolicy = (tab: 'safety' | 'privacy' | 'boundaries') => {
    setPolicyModalTab(tab);
    setPolicyModalOpen(true);
  };

  return (
    <ThemeProvider>
      <LocalizationProvider>
        <div className="min-h-screen flex flex-col bg-[#F7F8FC] dark:bg-[#0B1120] text-[#172033] dark:text-[#F1F5F9] selection:bg-[#EEF2FF] dark:selection:bg-[#312E81] selection:text-[#4F46E5] dark:selection:text-[#C7D2FE] transition-colors">
          {/* Global Standards, Currency & Units Bar */}
          <LocalizationBar />

          {/* Universal Header */}
          <Header
            currentView={currentView}
            onNavigate={handleNavigate}
            onOpenDrafts={() => setDraftsModalOpen(true)}
            onOpenPolicy={handleOpenPolicy}
            onOpenInstallApp={() => setInstallModalOpen(true)}
            draftsCount={draftsCount}
          />

        {/* Main View Router */}
        <main className="flex-1">
          {currentView === 'landing' && (
            <LandingPage
              onSelectWorkflow={handleSelectWorkflow}
              onExploreAtlas={() => handleNavigate('atlas')}
              onOpenHelpMeChoose={() => setHelpModalOpen(true)}
              onOpenPolicy={handleOpenPolicy}
            />
          )}

          {currentView === 'studio' && (
            <StudioWorkspace
              key={activeWorkflow.id}
              workflow={activeWorkflow}
              onNavigateToWorkflow={handleSelectWorkflow}
              onOpenResponseChecker={() => setCheckerModalOpen(true)}
              onOpenDraftsModal={() => setDraftsModalOpen(true)}
              initialDraftAnswers={resumedAnswers}
            />
          )}

          {currentView === 'atlas' && (
            <AtlasDirectory
              onSelectWorkflow={handleSelectWorkflow}
              onOpenUniversal={() => handleSelectWorkflow('universal_builder')}
            />
          )}

          {currentView === 'policy' && (
            <LegalPolicyPage
              activeTab={activePolicyTab}
              onBack={() => handleNavigate('landing')}
              onTabChange={handleNavigatePolicy}
            />
          )}
        </main>

        {/* Universal Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenPolicy={handleOpenPolicy}
          onNavigatePolicy={handleNavigatePolicy}
        />

        {/* Modals */}
        <HelpMeChooseModal
          isOpen={helpModalOpen}
          onClose={() => setHelpModalOpen(false)}
          onSelectWorkflow={handleSelectWorkflow}
        />

        <ResponseCheckerModal
          isOpen={checkerModalOpen}
          onClose={() => setCheckerModalOpen(false)}
          workflow={activeWorkflow}
        />

        <LocalDraftsModal
          isOpen={draftsModalOpen}
          onClose={() => {
            setDraftsModalOpen(false);
            refreshDraftsCount();
          }}
          onResumeDraft={handleResumeDraft}
        />

        <PolicyModal
          isOpen={policyModalOpen}
          onClose={() => setPolicyModalOpen(false)}
          defaultTab={policyModalTab}
        />

        <InstallAppModal
          isOpen={installModalOpen}
          onClose={() => setInstallModalOpen(false)}
        />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
