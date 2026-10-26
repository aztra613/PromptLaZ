import React, { useState } from 'react';
import { 
  Globe2, DollarSign, Ruler, Sparkles, ChevronDown, Check, Info, 
  HelpCircle, Shield, X, SlidersHorizontal 
} from 'lucide-react';
import { 
  useLocalization, REGIONS, CURRENCIES, RegionId, CurrencyId, UnitSystemId, SimplicityModeId 
} from '../context/LocalizationContext';

export const LocalizationBar: React.FC = () => {
  const { 
    region, currency, unitSystem, simplicityMode, regionMeta,
    setRegion, setCurrency, setUnitSystem, setSimplicityMode, resetDefaults
  } = useLocalization();

  const [openDropdown, setOpenDropdown] = useState<'region' | 'currency' | 'units' | 'simplicity' | null>(null);
  const [showStandardsModal, setShowStandardsModal] = useState(false);

  const toggleDropdown = (name: 'region' | 'currency' | 'units' | 'simplicity') => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  return (
    <div className="w-full bg-[#070e28] text-white border-b border-indigo-900/60 shadow-xs text-xs relative z-30 transition-all">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-2 flex flex-wrap items-center justify-between gap-2.5">
        
        {/* Left: Global Indicator & Standards Summary */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 font-semibold text-indigo-200">
            <span className="text-sm">{regionMeta.flag}</span>
            <span className="hidden sm:inline">Active Standards:</span>
            <span className="text-white bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-700/50 font-medium">
              {regionMeta.label}
            </span>
          </div>

          <button
            onClick={() => setShowStandardsModal(true)}
            className="text-[11px] text-indigo-300 hover:text-white underline underline-offset-2 flex items-center gap-1 hover:opacity-90 transition-opacity"
            title="View full governing codes & standards for this region"
          >
            <Info className="w-3 h-3 text-indigo-400" />
            <span>View Specs</span>
          </button>
        </div>

        {/* Right: Quick Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap ml-auto">
          
          {/* 1. Region Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('region')}
              className="h-7 px-2.5 rounded-md bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-800/80 text-white flex items-center gap-1.5 transition-colors"
            >
              <Globe2 className="w-3 h-3 text-indigo-400" />
              <span className="font-medium">{regionMeta.flag} {regionMeta.label.split(' ')[0]}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {openDropdown === 'region' && (
              <div 
                className="absolute right-0 mt-1 w-64 max-w-[calc(100vw-2rem)] bg-slate-900 border border-indigo-700/60 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 mb-1">
                  Select Regional Code & Standards
                </div>
                <div className="space-y-0.5 max-h-72 overflow-y-auto">
                  {(Object.keys(REGIONS) as RegionId[]).map((rKey) => {
                    const r = REGIONS[rKey];
                    const isSelected = region === rKey;
                    return (
                      <button
                        key={rKey}
                        onClick={() => {
                          setRegion(rKey);
                          setOpenDropdown(null);
                        }}
                        className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-start justify-between gap-2 transition-colors ${
                          isSelected ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <div>
                          <div className="flex items-center gap-1.5 text-xs">
                            <span>{r.flag}</span>
                            <span>{r.label}</span>
                          </div>
                          <div className={`text-[10px] line-clamp-1 ${isSelected ? 'text-indigo-200' : 'text-slate-400'}`}>
                            {r.summary}
                          </div>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 mt-0.5 text-white shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 2. Currency Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('currency')}
              className="h-7 px-2.5 rounded-md bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-800/80 text-white flex items-center gap-1 transition-colors"
            >
              <DollarSign className="w-3 h-3 text-indigo-400" />
              <span className="font-semibold">{CURRENCIES[currency].symbol}</span>
              <span className="hidden md:inline text-indigo-300 text-[11px]">{currency}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {openDropdown === 'currency' && (
              <div 
                className="absolute right-0 mt-1 w-44 bg-slate-900 border border-indigo-700/60 rounded-xl shadow-2xl p-1.5 z-50 animate-in fade-in"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 mb-1">
                  Currency Output
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {(Object.keys(CURRENCIES) as CurrencyId[]).map((cKey) => {
                    const isSelected = currency === cKey;
                    return (
                      <button
                        key={cKey}
                        onClick={() => {
                          setCurrency(cKey);
                          setOpenDropdown(null);
                        }}
                        className={`text-left px-2 py-1.5 rounded-md flex items-center justify-between text-xs transition-colors ${
                          isSelected ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span>{CURRENCIES[cKey].label}</span>
                        {isSelected && <Check className="w-3 h-3" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 3. Unit System Selector */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('units')}
              className="h-7 px-2.5 rounded-md bg-indigo-950/90 hover:bg-indigo-900 border border-indigo-800/80 text-white flex items-center gap-1 transition-colors"
            >
              <Ruler className="w-3 h-3 text-indigo-400" />
              <span className="font-medium capitalize">{unitSystem === 'metric' ? 'Metric (SI)' : 'Imperial (US)'}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {openDropdown === 'units' && (
              <div 
                className="absolute right-0 mt-1 w-52 bg-slate-900 border border-indigo-700/60 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="px-1.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-400 border-b border-slate-800 mb-1">
                  Dimensional Units
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setUnitSystem('metric');
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-md flex items-center justify-between text-xs ${
                      unitSystem === 'metric' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-medium">Metric / SI System</div>
                      <div className="text-[10px] text-slate-400">m, mm, kg, kN/m³, kPa, °C</div>
                    </div>
                    {unitSystem === 'metric' && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>

                  <button
                    onClick={() => {
                      setUnitSystem('imperial');
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-md flex items-center justify-between text-xs ${
                      unitSystem === 'imperial' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <div className="font-medium">Imperial / US Customary</div>
                      <div className="text-[10px] text-slate-400">ft, in, lbs, pcf, psi, °F</div>
                    </div>
                    {unitSystem === 'imperial' && <Check className="w-3.5 h-3.5 shrink-0" />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. Simplicity / Tone Mode */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown('simplicity')}
              className={`h-7 px-2.5 rounded-md border flex items-center gap-1.5 transition-colors ${
                simplicityMode === 'eli5'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/60 font-semibold'
                  : 'bg-indigo-950/90 hover:bg-indigo-900 border-indigo-800/80 text-white'
              }`}
              title="Change tone from 12-year-old intuitive ELI5 to Expert"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span className="font-medium">
                {simplicityMode === 'eli5' ? '👶 ELI5 (Simple)' : simplicityMode === 'expert' ? '🔬 Expert' : '💼 Standard'}
              </span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {openDropdown === 'simplicity' && (
              <div 
                className="absolute right-0 mt-1 w-64 max-w-[calc(100vw-2rem)] bg-slate-900 border border-indigo-700/60 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="px-1.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 mb-1">
                  Understanding Level
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setSimplicityMode('eli5');
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs ${
                      simplicityMode === 'eli5' ? 'bg-amber-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>👶</span>
                      <span className="font-medium">Explain Like I'm 12 (ELI5)</span>
                    </div>
                    <p className="text-[10px] opacity-80 mt-0.5">
                      Zero unnecessary jargon, clear analogies, plain everyday words, intuitive step-by-step logic.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setSimplicityMode('standard');
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs ${
                      simplicityMode === 'standard' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>💼</span>
                      <span className="font-medium">Balanced Professional</span>
                    </div>
                    <p className="text-[10px] opacity-80 mt-0.5">
                      Standard industry terms with clear explanations and balanced detail.
                    </p>
                  </button>

                  <button
                    onClick={() => {
                      setSimplicityMode('expert');
                      setOpenDropdown(null);
                    }}
                    className={`w-full text-left p-2 rounded-lg text-xs ${
                      simplicityMode === 'expert' ? 'bg-indigo-600 text-white font-semibold' : 'text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <span>🔬</span>
                      <span className="font-medium">Principal Specialist</span>
                    </div>
                    <p className="text-[10px] opacity-80 mt-0.5">
                      Maximum theoretical rigor, advanced mathematical derivations, and technical code citations.
                    </p>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Standards Specs Modal */}
      {showStandardsModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-indigo-700/80 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{regionMeta.flag}</span>
                <div>
                  <h3 className="font-bold text-base text-white">{regionMeta.label} Specification</h3>
                  <p className="text-xs text-indigo-300">Prompt generation governing codes</p>
                </div>
              </div>
              <button 
                onClick={() => setShowStandardsModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              When PromptLaz compiles prompts for engineering, finance, or business, it embeds the following jurisdiction codes:
            </p>

            <div className="space-y-2 text-xs bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 font-mono">
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-indigo-400">Concrete Design:</span>
                <span className="text-slate-200 text-right">{regionMeta.standards.concrete}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-indigo-400">Structural Steel:</span>
                <span className="text-slate-200 text-right">{regionMeta.standards.steel}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-indigo-400">Building Code:</span>
                <span className="text-slate-200 text-right">{regionMeta.standards.buildingCode}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-850">
                <span className="text-indigo-400">Financial Reporting:</span>
                <span className="text-slate-200 text-right">{regionMeta.standards.accounting}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-indigo-400">Electrical System:</span>
                <span className="text-slate-200 text-right">{regionMeta.standards.electrical}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={resetDefaults}
                className="text-xs text-slate-400 hover:text-white underline underline-offset-2"
              >
                Reset to Global Standards
              </button>
              <button
                onClick={() => setShowStandardsModal(false)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-xs"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
