import React, { useState, useEffect } from 'react';
import { X, Bookmark, Trash2, ArrowRight, Shield, Download, AlertCircle } from 'lucide-react';
import { LocalDraft } from '../types';
import { getLocalDrafts, deleteLocalDraft, clearAllLocalDrafts, isLocalDraftsEnabled, setLocalDraftsEnabled, downloadFile } from '../utils/promptBuilder';

interface LocalDraftsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onResumeDraft: (draft: LocalDraft) => void;
}

export const LocalDraftsModal: React.FC<LocalDraftsModalProps> = ({
  isOpen,
  onClose,
  onResumeDraft
}) => {
  const [drafts, setDrafts] = useState<LocalDraft[]>([]);
  const [optIn, setOptIn] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setDrafts(getLocalDrafts());
      setOptIn(isLocalDraftsEnabled());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleToggleOptIn = (val: boolean) => {
    setLocalDraftsEnabled(val);
    setOptIn(val);
    if (!val) {
      setDrafts([]);
    }
  };

  const handleDelete = (id: string) => {
    deleteLocalDraft(id);
    setDrafts(getLocalDrafts());
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete all saved drafts from this browser?')) {
      clearAllLocalDrafts();
      setDrafts([]);
    }
  };

  const handleExportJson = (draft: LocalDraft) => {
    downloadFile(
      `promptlas_config_${draft.workflowId}.json`,
      JSON.stringify(draft, null, 2),
      'application/json'
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#172033]/60 backdrop-blur-xs animate-in fade-in">
      <div 
        className="bg-white dark:bg-[#1E293B] rounded-2xl max-w-xl w-full shadow-2xl border border-[#D9DFEA] dark:border-[#334155] overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drafts-modal-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between bg-[#F7F8FC] dark:bg-[#0F172A]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] dark:bg-[#312E81] text-[#4F46E5] dark:text-[#C7D2FE] flex items-center justify-center">
              <Bookmark className="w-5 h-5" />
            </div>
            <div>
              <h2 id="drafts-modal-title" className="font-display font-bold text-base text-[#172033] dark:text-[#F1F5F9]">
                Browser Local Drafts
              </h2>
              <p className="text-xs text-[#596579] dark:text-[#94A3B8]">
                Saved locally on this device · No server synchronization
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Privacy & Opt-in Toggle */}
          <div className="p-3.5 rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] flex items-center justify-between">
            <div className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#0F9D91] dark:text-[#2DD4BF] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] block">
                  Enable device-local auto-save
                </span>
                <span className="text-[11px] text-[#596579] dark:text-[#94A3B8]">
                  Stores in browser localStorage. Never sent to remote servers.
                </span>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={optIn}
                onChange={(e) => handleToggleOptIn(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-gray-200 dark:bg-gray-700 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4F46E5] dark:peer-checked:bg-[#6366F1]"></div>
            </label>
          </div>

          {/* Drafts List */}
          {drafts.length === 0 ? (
            <div className="text-center py-10 px-4 border border-dashed border-[#D9DFEA] dark:border-[#334155] rounded-xl bg-white dark:bg-[#0F172A]">
              <Bookmark className="w-8 h-8 text-[#94A3B8] dark:text-[#64748B] mx-auto mb-2 opacity-50" />
              <h3 className="text-xs font-bold text-[#172033] dark:text-[#F1F5F9] mb-1">No saved drafts</h3>
              <p className="text-xs text-[#596579] dark:text-[#94A3B8] max-w-sm mx-auto">
                {optIn
                  ? 'When you fill out any workflow form in the Studio, you can click "Save locally" to resume your progress anytime.'
                  : 'Enable local saving above to preserve your unfinished workflows on this device.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#596579] dark:text-[#94A3B8]">
                <span>{drafts.length} draft{drafts.length > 1 ? 's' : ''} stored</span>
                <button
                  onClick={handleClearAll}
                  className="text-[#B42318] dark:text-[#F87171] hover:underline font-medium"
                >
                  Clear all
                </button>
              </div>

              <div className="space-y-2">
                {drafts.map((draft) => (
                  <div
                    key={draft.id}
                    className="p-3.5 rounded-xl border border-[#D9DFEA] dark:border-[#334155] hover:border-[#4F46E5] dark:hover:border-[#818CF8] bg-white dark:bg-[#0F172A] transition-all flex items-center justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-[#172033] dark:text-[#F1F5F9] truncate group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                        {draft.workflowTitle}
                      </div>
                      <div className="text-[11px] text-[#596579] dark:text-[#94A3B8] flex items-center gap-2 mt-0.5">
                        <span>{draft.domainName}</span>
                        <span>·</span>
                        <span>Saved {new Date(draft.savedAt).toLocaleDateString()}</span>
                        {draft.isManualEdited && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-[#FEF3C7] dark:bg-[#78350F]/40 text-[#92400E] dark:text-[#FDE68A]">
                            Edited
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => handleExportJson(draft)}
                        title="Download JSON config"
                        className="p-1.5 text-[#596579] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-[#F1F5F9] hover:bg-[#F7F8FC] dark:hover:bg-[#1E293B] rounded-lg transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(draft.id)}
                        title="Delete draft"
                        className="p-1.5 text-[#596579] dark:text-[#94A3B8] hover:text-[#B42318] dark:hover:text-[#F87171] hover:bg-[#FEF2F2] dark:hover:bg-[#7F1D1D]/20 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          onResumeDraft(draft);
                          onClose();
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#6366F1] dark:hover:bg-[#4F46E5] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                      >
                        Resume
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F7F8FC] dark:bg-[#0F172A] border-t border-[#D9DFEA] dark:border-[#334155] flex items-center justify-between text-xs text-[#596579] dark:text-[#94A3B8]">
          <span className="flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-[#596579] dark:text-[#94A3B8]" />
            Clearing browser cache or incognito window deletes local drafts
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg border border-[#D9DFEA] dark:border-[#334155] hover:bg-white dark:hover:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
