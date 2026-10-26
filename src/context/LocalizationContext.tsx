import React, { createContext, useContext, useState, useEffect } from 'react';

export type RegionId = 'global' | 'us' | 'eu' | 'uk' | 'in' | 'au' | 'gulf';
export type CurrencyId = 'USD' | 'EUR' | 'GBP' | 'INR' | 'CAD' | 'AUD' | 'JPY' | 'AED';
export type UnitSystemId = 'metric' | 'imperial';
export type SimplicityModeId = 'eli5' | 'standard' | 'expert';

export interface RegionMeta {
  id: RegionId;
  label: string;
  flag: string;
  defaultCurrency: CurrencyId;
  defaultUnits: UnitSystemId;
  standards: {
    concrete: string;
    steel: string;
    buildingCode: string;
    accounting: string;
    electrical: string;
  };
  summary: string;
}

export const REGIONS: Record<RegionId, RegionMeta> = {
  global: {
    id: 'global',
    label: 'Global / International',
    flag: '🌐',
    defaultCurrency: 'USD',
    defaultUnits: 'metric',
    standards: {
      concrete: 'ISO 19338 / Model Code',
      steel: 'ISO 10721 / AISC',
      buildingCode: 'International Building Code (IBC)',
      accounting: 'IFRS (International Financial Reporting Standards)',
      electrical: 'IEC 60364 (50Hz / 230V standard)'
    },
    summary: 'Universal international standards (ISO, IEC, IFRS) applicable across all borders.'
  },
  us: {
    id: 'us',
    label: 'United States',
    flag: '🇺🇸',
    defaultCurrency: 'USD',
    defaultUnits: 'imperial',
    standards: {
      concrete: 'ACI 318 (Building Code Requirements for Structural Concrete)',
      steel: 'AISC 360 (Specification for Structural Steel Buildings)',
      buildingCode: 'IBC / ASCE 7-22 Minimum Design Loads',
      accounting: 'US GAAP (FASB Codification)',
      electrical: 'NEC (NFPA 70) 60Hz / 120V'
    },
    summary: 'American building & financial codes: ACI 318, AISC 360, IBC, US GAAP, Imperial units.'
  },
  eu: {
    id: 'eu',
    label: 'European Union',
    flag: '🇪🇺',
    defaultCurrency: 'EUR',
    defaultUnits: 'metric',
    standards: {
      concrete: 'Eurocode 2 (EN 1992 Design of Concrete Structures)',
      steel: 'Eurocode 3 (EN 1993 Design of Steel Structures)',
      buildingCode: 'Eurocodes EN 1990-1999 + National Annexes',
      accounting: 'IFRS / EU Accounting Directives',
      electrical: 'CENELEC / IEC 50Hz / 230V'
    },
    summary: 'Eurocode EN 1990-1999 system, IFRS standards, Metric SI, EUR currency.'
  },
  uk: {
    id: 'uk',
    label: 'United Kingdom',
    flag: '🇬🇧',
    defaultCurrency: 'GBP',
    defaultUnits: 'metric',
    standards: {
      concrete: 'BS EN 1992 (UK National Annex)',
      steel: 'BS EN 1993 (UK National Annex) / SCI P358',
      buildingCode: 'UK Building Regulations / Approved Documents (Part A-S)',
      accounting: 'UK GAAP (FRS 102) / IFRS',
      electrical: 'BS 7671 (IET Wiring Regulations 18th Ed)'
    },
    summary: 'British Standards (BS EN), UK Building Regulations, GBP currency, Metric.'
  },
  in: {
    id: 'in',
    label: 'India',
    flag: '🇮🇳',
    defaultCurrency: 'INR',
    defaultUnits: 'metric',
    standards: {
      concrete: 'IS 456:2000 (Plain and Reinforced Concrete Code)',
      steel: 'IS 800:2007 (General Construction in Steel)',
      buildingCode: 'National Building Code of India (NBC 2016) / IRC',
      accounting: 'Ind AS (Indian Accounting Standards) / Companies Act',
      electrical: 'IS 732 / Central Electricity Authority (50Hz / 230V)'
    },
    summary: 'Bureau of Indian Standards (IS 456, IS 800, NBC 2016), Ind AS, INR currency.'
  },
  au: {
    id: 'au',
    label: 'Australia & NZ',
    flag: '🇦🇺',
    defaultCurrency: 'AUD',
    defaultUnits: 'metric',
    standards: {
      concrete: 'AS 3600 (Concrete Structures)',
      steel: 'AS 4100 (Steel Structures)',
      buildingCode: 'National Construction Code (NCC) / AS/NZS 1170',
      accounting: 'AASB (Australian Accounting Standards Board) / IFRS',
      electrical: 'AS/NZS 3000 (Wiring Rules) 50Hz / 230V'
    },
    summary: 'Australian Standards (AS 3600, AS 4100), NCC, AASB, AUD currency, Metric.'
  },
  gulf: {
    id: 'gulf',
    label: 'Middle East & Gulf (GCC)',
    flag: '🇦🇪',
    defaultCurrency: 'AED',
    defaultUnits: 'metric',
    standards: {
      concrete: 'SBC 304 / ACI 318 / BS EN with hot weather specs',
      steel: 'AISC 360 / Eurocode 3',
      buildingCode: 'Saudi Building Code (SBC) / Dubai Building Code / GSO',
      accounting: 'IFRS (mandatory across GCC)',
      electrical: 'DEWA / Kahramaa / IEC 50Hz / 230V'
    },
    summary: 'GCC & SBC Building Codes, ACI/Eurocode hot weather modifications, IFRS.'
  }
};

export const CURRENCIES: Record<CurrencyId, { symbol: string; label: string }> = {
  USD: { symbol: '$', label: 'USD ($)' },
  EUR: { symbol: '€', label: 'EUR (€)' },
  GBP: { symbol: '£', label: 'GBP (£)' },
  INR: { symbol: '₹', label: 'INR (₹)' },
  CAD: { symbol: 'C$', label: 'CAD (C$)' },
  AUD: { symbol: 'A$', label: 'AUD (A$)' },
  JPY: { symbol: '¥', label: 'JPY (¥)' },
  AED: { symbol: 'AED', label: 'AED (Dirham)' }
};

interface LocalizationContextType {
  region: RegionId;
  currency: CurrencyId;
  unitSystem: UnitSystemId;
  simplicityMode: SimplicityModeId;
  regionMeta: RegionMeta;
  setRegion: (region: RegionId) => void;
  setCurrency: (currency: CurrencyId) => void;
  setUnitSystem: (unit: UnitSystemId) => void;
  setSimplicityMode: (mode: SimplicityModeId) => void;
  resetDefaults: () => void;
}

const STORAGE_KEY = 'promptlaz_localization_pref_v1';

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<RegionId>('global');
  const [currency, setCurrency] = useState<CurrencyId>('USD');
  const [unitSystem, setUnitSystem] = useState<UnitSystemId>('metric');
  const [simplicityMode, setSimplicityMode] = useState<SimplicityModeId>('standard');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.region && REGIONS[parsed.region as RegionId]) setRegionState(parsed.region);
        if (parsed.currency && CURRENCIES[parsed.currency as CurrencyId]) setCurrency(parsed.currency);
        if (parsed.unitSystem && (parsed.unitSystem === 'metric' || parsed.unitSystem === 'imperial')) {
          setUnitSystem(parsed.unitSystem);
        }
        if (parsed.simplicityMode) setSimplicityMode(parsed.simplicityMode);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save changes
  const savePreferences = (
    newRegion: RegionId,
    newCurrency: CurrencyId,
    newUnits: UnitSystemId,
    newSimplicity: SimplicityModeId
  ) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          region: newRegion,
          currency: newCurrency,
          unitSystem: newUnits,
          simplicityMode: newSimplicity
        })
      );
    } catch {
      // ignore
    }
  };

  const handleSetRegion = (newRegion: RegionId) => {
    const meta = REGIONS[newRegion];
    setRegionState(newRegion);
    // Smart auto-sync defaults if user hasn't heavily customized
    const newCurr = meta.defaultCurrency;
    const newUnits = meta.defaultUnits;
    setCurrency(newCurr);
    setUnitSystem(newUnits);
    savePreferences(newRegion, newCurr, newUnits, simplicityMode);
  };

  const handleSetCurrency = (newCurr: CurrencyId) => {
    setCurrency(newCurr);
    savePreferences(region, newCurr, unitSystem, simplicityMode);
  };

  const handleSetUnitSystem = (newUnits: UnitSystemId) => {
    setUnitSystem(newUnits);
    savePreferences(region, currency, newUnits, simplicityMode);
  };

  const handleSetSimplicityMode = (newSimplicity: SimplicityModeId) => {
    setSimplicityMode(newSimplicity);
    savePreferences(region, currency, unitSystem, newSimplicity);
  };

  const resetDefaults = () => {
    setRegionState('global');
    setCurrency('USD');
    setUnitSystem('metric');
    setSimplicityMode('standard');
    savePreferences('global', 'USD', 'metric', 'standard');
  };

  return (
    <LocalizationContext.Provider
      value={{
        region,
        currency,
        unitSystem,
        simplicityMode,
        regionMeta: REGIONS[region],
        setRegion: handleSetRegion,
        setCurrency: handleSetCurrency,
        setUnitSystem: handleSetUnitSystem,
        setSimplicityMode: handleSetSimplicityMode,
        resetDefaults
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
