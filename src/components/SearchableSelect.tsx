import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, Plus, X } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
  badge?: string;
  group?: string;
  isDefault?: boolean;
}

interface SearchableSelectProps {
  id?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  allowCustom?: boolean;
  className?: string;
}

export const SearchableSelect: React.FC<SearchableSelectProps> = ({
  id,
  value,
  onChange,
  options,
  placeholder = 'Select an option...',
  allowCustom = true,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      // Auto-focus search input when opened
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Find currently selected option
  const selectedOption = options.find(o => o.value === value);
  const displayLabel = selectedOption ? selectedOption.label : (value || placeholder);

  // Filter options based on query
  const filteredOptions = options.filter(opt => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    const matchLabel = opt.label.toLowerCase().includes(q);
    const matchValue = opt.value.toLowerCase().includes(q);
    const matchGroup = opt.group ? opt.group.toLowerCase().includes(q) : false;
    const matchBadge = opt.badge ? opt.badge.toLowerCase().includes(q) : false;
    return matchLabel || matchValue || matchGroup || matchBadge;
  });

  // Check if search query matches any existing option exactly
  const exactMatchExists = options.some(
    o => o.label.toLowerCase() === searchQuery.trim().toLowerCase() ||
         o.value.toLowerCase() === searchQuery.trim().toLowerCase()
  );

  // Group options if grouped
  const hasGroups = options.some(o => !!o.group);
  const groupedOptions: Record<string, SelectOption[]> = {};

  if (hasGroups) {
    filteredOptions.forEach(opt => {
      const g = opt.group || 'Other Options';
      if (!groupedOptions[g]) groupedOptions[g] = [];
      groupedOptions[g].push(opt);
    });
  }

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button */}
      <button
        id={id}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full min-h-[44px] px-3.5 py-2 text-left text-xs font-medium rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#0F172A] text-[#172033] dark:text-[#F1F5F9] hover:bg-white dark:hover:bg-[#131F35] focus:bg-white dark:focus:bg-[#0B1120] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 focus:outline-hidden transition-all flex items-center justify-between gap-2 shadow-2xs"
      >
        <span className={`truncate ${!value && !selectedOption ? 'text-[#94A3B8]' : ''}`}>
          {displayLabel}
        </span>
        <ChevronDown className={`w-4 h-4 text-[#94A3B8] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 bg-white dark:bg-[#0F172A] border border-[#C7D2FE] dark:border-[#3730A3] rounded-2xl shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 max-h-[380px] flex flex-col">
          
          {/* Search Input Box */}
          <div className="relative mb-2 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type to search or filter options..."
              className="w-full h-9 pl-9 pr-8 text-xs rounded-xl border border-[#D9DFEA] dark:border-[#334155] bg-[#F7F8FC] dark:bg-[#1E293B] text-[#172033] dark:text-[#F1F5F9] focus:bg-white dark:focus:bg-[#0B1120] focus:border-[#4F46E5] focus:outline-hidden placeholder:text-[#94A3B8]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#172033] dark:hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Match counter */}
          <div className="flex items-center justify-between px-2 pb-1.5 text-[10px] text-[#94A3B8] dark:text-[#64748B] border-b border-slate-100 dark:border-slate-800 shrink-0">
            <span>{filteredOptions.length} of {options.length} options</span>
            {searchQuery && <span>Filter active</span>}
          </div>

          {/* Options List */}
          <div className="overflow-y-auto space-y-1 pt-1.5 custom-scrollbar flex-1">
            
            {/* Custom Write-In Option if query doesn't match */}
            {allowCustom && searchQuery.trim() && !exactMatchExists && (
              <button
                type="button"
                onClick={() => {
                  onChange(searchQuery.trim());
                  setIsOpen(false);
                  setSearchQuery('');
                }}
                className="w-full text-left p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/80 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-xs text-indigo-900 dark:text-indigo-200 flex items-center gap-2 transition-colors font-medium mb-1"
              >
                <Plus className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="truncate">
                  Use custom: <span className="font-bold underline">"{searchQuery.trim()}"</span>
                </span>
              </button>
            )}

            {hasGroups ? (
              // Grouped Options Render
              Object.keys(groupedOptions).map(groupName => (
                <div key={groupName} className="space-y-0.5">
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-slate-50 dark:bg-slate-800/50 rounded-md">
                    {groupName}
                  </div>
                  {groupedOptions[groupName].map(opt => {
                    const isSelected = value === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => {
                          onChange(opt.value);
                          setIsOpen(false);
                          setSearchQuery('');
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all ${
                          isSelected
                            ? 'bg-[#4F46E5] text-white font-semibold shadow-xs'
                            : 'text-[#172033] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B]'
                        }`}
                      >
                        <div className="truncate">
                          <div>{opt.label}</div>
                          {opt.badge && (
                            <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                              isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                            }`}>
                              {opt.badge}
                            </span>
                          )}
                        </div>
                        {isSelected && <Check className="w-4 h-4 shrink-0 text-white" />}
                      </button>
                    );
                  })}
                </div>
              ))
            ) : (
              // Flat Options Render
              filteredOptions.map(opt => {
                const isSelected = value === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-xl text-xs flex items-center justify-between gap-2 transition-all ${
                      isSelected
                        ? 'bg-[#4F46E5] text-white font-semibold shadow-xs'
                        : 'text-[#172033] dark:text-[#CBD5E1] hover:bg-[#F1F5F9] dark:hover:bg-[#1E293B]'
                    }`}
                  >
                    <div className="truncate">
                      <div>{opt.label}</div>
                      {opt.badge && (
                        <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                          isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                        }`}>
                          {opt.badge}
                        </span>
                      )}
                    </div>
                    {isSelected && <Check className="w-4 h-4 shrink-0 text-white" />}
                  </button>
                );
              })
            )}

            {filteredOptions.length === 0 && !searchQuery.trim() && (
              <div className="p-4 text-center text-xs text-[#94A3B8]">
                No options available.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
