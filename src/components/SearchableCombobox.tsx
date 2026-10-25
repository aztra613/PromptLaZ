import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search, ChevronDown, Check, X, Plus } from 'lucide-react';

export interface ComboboxOption {
  value: string;
  label: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'indigo' | 'emerald' | 'amber' | 'slate' | 'sky';
  group?: string;
  searchTerms?: string[];
}

interface SearchableComboboxProps {
  options: ComboboxOption[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  allowCustom?: boolean;
  customOptionLabel?: string;
  disabled?: boolean;
  className?: string;
  emptyMessage?: string;
  id?: string;
}

export const SearchableCombobox: React.FC<SearchableComboboxProps> = ({
  options,
  value,
  onChange,
  placeholder = '-- Select an option --',
  searchPlaceholder = 'Type to search or filter...',
  allowCustom = true,
  customOptionLabel = "Other / Can't find it — enter my own",
  disabled = false,
  className = '',
  emptyMessage = 'No matching options found.',
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter options based on query
  const filteredOptions = useMemo(() => {
    if (!searchQuery.trim()) return options;
    const q = searchQuery.toLowerCase().trim();

    return options.filter((opt) => {
      const matchLabel = opt.label.toLowerCase().includes(q);
      const matchSub = opt.subtitle ? opt.subtitle.toLowerCase().includes(q) : false;
      const matchGroup = opt.group ? opt.group.toLowerCase().includes(q) : false;
      const matchTerms = opt.searchTerms ? opt.searchTerms.some(t => t.toLowerCase().includes(q)) : false;
      return matchLabel || matchSub || matchGroup || matchTerms;
    });
  }, [options, searchQuery]);

  // Selected option display text
  const selectedOption = useMemo(() => {
    if (!value) return null;
    return options.find(o => o.value === value) || null;
  }, [options, value]);

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Focus search input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    const totalItems = filteredOptions.length + (allowCustom ? 1 : 0);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1 < totalItems ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : totalItems - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        handleSelect(filteredOptions[highlightedIndex].value);
      } else if (highlightedIndex === filteredOptions.length && allowCustom) {
        handleSelect('__other__');
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll('[data-combobox-item]');
      const item = items[highlightedIndex] as HTMLElement;
      if (item) {
        item.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex]);

  const getBadgeClass = (color?: string) => {
    switch (color) {
      case 'emerald':
        return 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800';
      case 'amber':
        return 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800';
      case 'sky':
        return 'bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800';
      default:
        return 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800';
    }
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className={`w-full min-h-[42px] px-3.5 py-2 text-left rounded-xl border flex items-center justify-between gap-2 transition-all ${
          disabled
            ? 'bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-600 cursor-not-allowed'
            : isOpen
            ? 'bg-white dark:bg-[#0F172A] border-indigo-500 ring-2 ring-indigo-500/20 dark:ring-indigo-400/20 text-[#172033] dark:text-[#F1F5F9]'
            : 'bg-white dark:bg-[#0F172A] border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 text-[#172033] dark:text-[#F1F5F9]'
        }`}
      >
        <div className="flex-1 min-w-0 pr-1">
          {value === '__other__' ? (
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300">
                Custom Entry
              </span>
              <span className="text-xs text-slate-600 dark:text-slate-400 truncate">
                User-defined topic
              </span>
            </div>
          ) : selectedOption ? (
            <div className="flex items-center justify-between gap-2">
              <div className="truncate">
                <span className="text-xs font-medium text-[#172033] dark:text-[#F1F5F9] truncate block">
                  {selectedOption.label}
                </span>
                {selectedOption.subtitle && (
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate block">
                    {selectedOption.subtitle}
                  </span>
                )}
              </div>
              {selectedOption.badge && (
                <span className={`shrink-0 text-[10px] font-semibold px-1.5 py-0.5 rounded-full border ${getBadgeClass(selectedOption.badgeColor)}`}>
                  {selectedOption.badge}
                </span>
              )}
            </div>
          ) : (
            <span className="text-xs text-slate-400 dark:text-slate-500">
              {placeholder}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1 text-slate-400 shrink-0">
          {value && !disabled && (
            <span
              onClick={(e) => {
                e.stopPropagation();
                onChange('');
                setSearchQuery('');
              }}
              className="p-1 hover:text-rose-500 dark:hover:text-rose-400 rounded-md transition-colors"
              title="Clear selection"
            >
              <X className="w-3.5 h-3.5" />
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-500' : ''}`} />
        </div>
      </button>

      {/* Popover Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute z-50 left-0 right-0 mt-1.5 bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[340px] animate-in fade-in zoom-in-95 duration-100"
        >
          {/* Search Header inside dropdown */}
          <div className="p-2 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60">
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setHighlightedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder={searchPlaceholder}
                className="w-full h-8 pl-8 pr-7 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between mt-1 px-1 text-[10px] text-slate-500 dark:text-slate-400">
              <span>{filteredOptions.length} of {options.length} options</span>
              <span className="hidden sm:inline">Use ↑↓ and Enter</span>
            </div>
          </div>

          {/* Scrollable Options List */}
          <div ref={listRef} className="overflow-y-auto flex-1 divide-y divide-slate-100 dark:divide-slate-800">
            {filteredOptions.length === 0 ? (
              <div className="p-4 text-center">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  {emptyMessage}
                </p>
                {allowCustom && (
                  <button
                    type="button"
                    onClick={() => handleSelect('__other__')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    Use "{searchQuery.trim() || 'Custom'}" as custom topic
                  </button>
                )}
              </div>
            ) : (
              filteredOptions.map((opt, idx) => {
                const isSelected = opt.value === value;
                const isHighlighted = idx === highlightedIndex;

                return (
                  <button
                    key={opt.value}
                    type="button"
                    data-combobox-item
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setHighlightedIndex(idx)}
                    className={`w-full text-left px-3.5 py-2.5 flex items-start justify-between gap-2 transition-colors ${
                      isSelected
                        ? 'bg-indigo-50/80 dark:bg-indigo-950/50 text-indigo-900 dark:text-indigo-100'
                        : isHighlighted
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-medium truncate ${isSelected ? 'font-semibold text-indigo-700 dark:text-indigo-300' : ''}`}>
                          {opt.label}
                        </span>
                        {opt.badge && (
                          <span className={`text-[10px] font-semibold px-1.5 py-0.2 rounded-full border shrink-0 ${getBadgeClass(opt.badgeColor)}`}>
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      {opt.subtitle && (
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {opt.subtitle}
                        </p>
                      )}
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })
            )}

            {/* Always accessible "Custom / Other" at bottom */}
            {allowCustom && (
              <button
                type="button"
                data-combobox-item
                onClick={() => handleSelect('__other__')}
                onMouseEnter={() => setHighlightedIndex(filteredOptions.length)}
                className={`w-full text-left px-3.5 py-2.5 flex items-center gap-2 text-xs font-medium border-t border-slate-200 dark:border-slate-700 transition-colors ${
                  value === '__other__'
                    ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 font-semibold'
                    : highlightedIndex === filteredOptions.length
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100'
                    : 'bg-slate-50/60 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <Plus className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span className="truncate">{customOptionLabel}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
