import { DOMAIN_FAMILIES } from '../data/taxonomy';
import { WORKFLOWS } from '../data/workflows';
import { DomainFamily, Subdiscipline, WorkflowSchema } from '../types';

// ─── Situation Phrases ─────────────────────────────────────────
// Natural language phrases mapped to domain/subdiscipline IDs
// These let users find things by describing what they're dealing with
export interface SituationPhrase {
  phrase: string;
  domainId: string;
  subdisciplineId?: string;
  workflowId?: string;
}

export const SITUATION_PHRASES: SituationPhrase[] = [
  // Civil
  { phrase: 'soil is too soft for building', domainId: 'civil_built', subdisciplineId: 'ce-geotech' },
  { phrase: 'concrete is cracking', domainId: 'civil_built', subdisciplineId: 'ce-materials' },
  { phrase: 'building settlement', domainId: 'civil_built', subdisciplineId: 'ce-geotech' },
  { phrase: 'beam is deflecting too much', domainId: 'civil_built', subdisciplineId: 'ce-struct' },
  { phrase: 'need to calculate load', domainId: 'civil_built', subdisciplineId: 'ce-struct' },
  { phrase: 'road is cracking', domainId: 'civil_built', subdisciplineId: 'ce-trans' },
  { phrase: 'pipe sizing for drainage', domainId: 'civil_built', subdisciplineId: 'ce-water' },
  { phrase: 'foundation design', domainId: 'civil_built', subdisciplineId: 'ce-geotech' },
  { phrase: 'quantity take off', domainId: 'civil_built', subdisciplineId: 'ce-mgmt' },
  { phrase: 'construction method statement', domainId: 'civil_built', subdisciplineId: 'ce-mgmt' },

  // Computing
  { phrase: 'website is slow', domainId: 'computing_software', subdisciplineId: 'cs-frontend' },
  { phrase: 'server keeps crashing', domainId: 'computing_software', subdisciplineId: 'cs-devops' },
  { phrase: 'deployment keeps failing', domainId: 'computing_software', subdisciplineId: 'cs-devops' },
  { phrase: 'need to write tests', domainId: 'computing_software', subdisciplineId: 'cs-qa' },
  { phrase: 'api is not working', domainId: 'computing_software', subdisciplineId: 'cs-backend' },
  { phrase: 'database is slow', domainId: 'computing_software', subdisciplineId: 'cs-backend' },
  { phrase: 'how to design a system', domainId: 'computing_software', subdisciplineId: 'cs-sysdesign' },
  { phrase: 'cloud costs are too high', domainId: 'computing_software', subdisciplineId: 'cs-cloud' },
  { phrase: 'network is down', domainId: 'computing_software', subdisciplineId: 'cs-networking' },
  { phrase: 'build a mobile app', domainId: 'computing_software', subdisciplineId: 'cs-mobile' },

  // Real Estate
  { phrase: 'tenant complaint', domainId: 'realestate_housing', subdisciplineId: 'rh-manage' },
  { phrase: 'buying a house', domainId: 'realestate_housing', subdisciplineId: 'rh-home' },
  { phrase: 'rental property investment', domainId: 'realestate_housing', subdisciplineId: 'rh-invest' },
  { phrase: 'commercial lease negotiation', domainId: 'realestate_housing', subdisciplineId: 'rh-commercial' },
  { phrase: 'property development feasibility', domainId: 'realestate_housing', subdisciplineId: 'rh-develop' },

  // Marketing
  { phrase: 'nobody is visiting my website', domainId: 'marketing_sales', subdisciplineId: 'ms-seo' },
  { phrase: 'ads are not converting', domainId: 'marketing_sales', subdisciplineId: 'ms-ppc' },
  { phrase: 'need social media content', domainId: 'marketing_sales', subdisciplineId: 'ms-social' },
  { phrase: 'email open rates are low', domainId: 'marketing_sales', subdisciplineId: 'ms-email' },
  { phrase: 'write better copy', domainId: 'marketing_sales', subdisciplineId: 'ms-landing' },

  // Finance
  { phrase: 'need to reconcile accounts', domainId: 'finance_markets', subdisciplineId: 'fm-accounting' },
  { phrase: 'company valuation', domainId: 'finance_markets', subdisciplineId: 'fm-valuation' },
  { phrase: 'tax filing preparation', domainId: 'finance_markets', subdisciplineId: 'fm-tax' },
  { phrase: 'how to invest money', domainId: 'finance_markets', subdisciplineId: 'fm-personal' },
  { phrase: 'insurance claim', domainId: 'finance_markets', subdisciplineId: 'fm-insurance' },

  // Business
  { phrase: 'have a business idea', domainId: 'business_entrepreneurship', subdisciplineId: 'be-validate' },
  { phrase: 'write a product spec', domainId: 'business_entrepreneurship', subdisciplineId: 'be-prd' },
  { phrase: 'how to price my product', domainId: 'business_entrepreneurship', subdisciplineId: 'be-econ' },
  { phrase: 'starting a business', domainId: 'business_entrepreneurship', subdisciplineId: 'be-small' },

  // Education
  { phrase: 'preparing for exam', domainId: 'education_exams', subdisciplineId: 'ee-tutor' },
  { phrase: 'creating a lesson plan', domainId: 'education_exams', subdisciplineId: 'ee-lesson' },
  { phrase: 'need to study for test', domainId: 'education_exams', subdisciplineId: 'ee-tutor' },
  { phrase: 'online course design', domainId: 'education_exams', subdisciplineId: 'ee-online' },

  // Electrical
  { phrase: 'power system fault', domainId: 'electrical_energy', subdisciplineId: 'ee-power' },
  { phrase: 'solar panel sizing', domainId: 'electrical_energy', subdisciplineId: 'ee-solar' },
  { phrase: 'PLC programming', domainId: 'electrical_energy', subdisciplineId: 'ee-control' },
  { phrase: 'cable sizing calculation', domainId: 'electrical_energy', subdisciplineId: 'ee-power' },

  // Mechanical
  { phrase: 'pipe pressure loss', domainId: 'mechanical_automotive', subdisciplineId: 'me-fluids' },
  { phrase: 'pump is not working', domainId: 'mechanical_automotive', subdisciplineId: 'me-fluids' },
  { phrase: 'AC not cooling enough', domainId: 'mechanical_automotive', subdisciplineId: 'me-hvac' },
  { phrase: 'machine keeps breaking', domainId: 'mechanical_automotive', subdisciplineId: 'me-maintenance' },

  // Operations
  { phrase: 'write a standard procedure', domainId: 'operations_supplychain', subdisciplineId: 'os-sop' },
  { phrase: 'inventory keeps running out', domainId: 'operations_supplychain', subdisciplineId: 'os-sop' },
  { phrase: 'warehouse efficiency', domainId: 'operations_supplychain', subdisciplineId: 'os-logistics' },
  { phrase: 'finding new suppliers', domainId: 'operations_supplychain', subdisciplineId: 'os-procurement' },

  // HR & Careers
  { phrase: 'preparing for interview', domainId: 'careers_workplace', subdisciplineId: 'cw-interview' },
  { phrase: 'writing my resume', domainId: 'careers_workplace', subdisciplineId: 'cw-resume' },
  { phrase: 'hiring new employees', domainId: 'careers_workplace', subdisciplineId: 'cw-recruit' },
  { phrase: 'employee performance review', domainId: 'careers_workplace', subdisciplineId: 'cw-performance' },

  // Office
  { phrase: 'excel formula not working', domainId: 'office_productivity', subdisciplineId: 'op-excel' },
  { phrase: 'need to make a dashboard', domainId: 'office_productivity', subdisciplineId: 'op-bi' },
  { phrase: 'create a presentation', domainId: 'office_productivity', subdisciplineId: 'op-present' },
  { phrase: 'automate repetitive work', domainId: 'office_productivity', subdisciplineId: 'op-automate' },

  // Writing
  { phrase: 'writing a novel', domainId: 'languages_writing', subdisciplineId: 'lw-creative' },
  { phrase: 'need to write a speech', domainId: 'languages_writing', subdisciplineId: 'lw-speech' },
  { phrase: 'API documentation', domainId: 'languages_writing', subdisciplineId: 'lw-technical' },
  { phrase: 'translate content', domainId: 'languages_writing', subdisciplineId: 'lw-translate' },

  // Arts & Creative
  { phrase: 'need product photos', domainId: 'arts_design_media', subdisciplineId: 'adm-photo' },
  { phrase: 'edit a photo', domainId: 'arts_design_media', subdisciplineId: 'adm-edit' },
  { phrase: 'design a logo', domainId: 'arts_design_media', subdisciplineId: 'adm-brand' },
  { phrase: 'make a video', domainId: 'arts_design_media', subdisciplineId: 'adm-video' },
  { phrase: 'redesign my room', domainId: 'arts_design_media', subdisciplineId: 'adm-interior' },

  // Personal
  { phrase: 'planning a wedding', domainId: 'family_relationships', subdisciplineId: 'fr-events' },
  { phrase: 'talking to aging parents', domainId: 'family_relationships', subdisciplineId: 'fr-elder' },
  { phrase: 'home renovation budget', domainId: 'home_daily_living', subdisciplineId: 'hd-renovation' },
  { phrase: 'need to declutter', domainId: 'home_daily_living', subdisciplineId: 'hd-organize' },
  { phrase: 'making a career change', domainId: 'personal_growth', subdisciplineId: 'pg-career' },
  { phrase: 'cant make a decision', domainId: 'personal_growth', subdisciplineId: 'pg-decision' },
  { phrase: 'want to be more productive', domainId: 'personal_growth', subdisciplineId: 'pg-goals' },

  // Health
  { phrase: 'doctor appointment questions', domainId: 'medicine_health', subdisciplineId: 'mh-prep' },
  { phrase: 'workout plan', domainId: 'fitness_nutrition', subdisciplineId: 'fn-period' },
  { phrase: 'meal prep for the week', domainId: 'fitness_nutrition', subdisciplineId: 'fn-macro' },
  { phrase: 'training for a marathon', domainId: 'fitness_nutrition', subdisciplineId: 'fn-endurance' },

  // Agriculture
  { phrase: 'crop rotation plan', domainId: 'agriculture_animals', subdisciplineId: 'aa-agronomy' },
  { phrase: 'livestock feed calculation', domainId: 'agriculture_animals', subdisciplineId: 'aa-livestock' },

  // Law
  { phrase: 'reviewing a contract', domainId: 'law_governance', subdisciplineId: 'lg-contract' },
  { phrase: 'employee rights question', domainId: 'law_governance', subdisciplineId: 'lg-employment' },
  { phrase: 'patent my invention', domainId: 'law_governance', subdisciplineId: 'lg-ip' },

  // Trades
  { phrase: 'bathroom plumbing leak', domainId: 'skilled_trades', subdisciplineId: 'st-plumb' },
  { phrase: 'electrical wiring for room', domainId: 'skilled_trades', subdisciplineId: 'st-elec' },
  { phrase: 'car wont start', domainId: 'skilled_trades', subdisciplineId: 'st-auto' },
  { phrase: 'build custom cabinets', domainId: 'skilled_trades', subdisciplineId: 'st-carp' },

  // Security
  { phrase: 'company got hacked', domainId: 'cybersecurity_privacy', subdisciplineId: 'cp-incident' },
  { phrase: 'security audit needed', domainId: 'cybersecurity_privacy', subdisciplineId: 'cp-audit' },
  { phrase: 'data breach response', domainId: 'cybersecurity_privacy', subdisciplineId: 'cp-incident' },

  // Travel
  { phrase: 'planning a vacation', domainId: 'travel_places', subdisciplineId: 'tp-itin' },
  { phrase: 'visa application help', domainId: 'travel_places', subdisciplineId: 'tp-visa' },
  { phrase: 'moving to another country', domainId: 'travel_places', subdisciplineId: 'tp-business' },
];


// ─── Fuzzy Search Engine ───────────────────────────────────────

export interface SearchResult {
  type: 'domain' | 'subdiscipline' | 'workflow' | 'situation' | 'task';
  score: number;
  domain: DomainFamily;
  subdiscipline?: Subdiscipline;
  workflow?: WorkflowSchema;
  situationPhrase?: string;
  matchedOn: string; // what text matched
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(' ').filter(t => t.length > 1);
}

function scoreMatch(query: string, target: string): number {
  const q = normalize(query);
  const t = normalize(target);

  // Exact match
  if (t === q) return 100;

  // Contains full query
  if (t.includes(q)) return 85;

  // Query contains the target
  if (q.includes(t) && t.length > 3) return 70;

  // Token matching
  const queryTokens = tokenize(query);
  const targetTokens = tokenize(target);

  if (queryTokens.length === 0) return 0;

  let matchedCount = 0;
  for (const qt of queryTokens) {
    for (const tt of targetTokens) {
      if (tt.includes(qt) || qt.includes(tt)) {
        matchedCount++;
        break;
      }
    }
  }

  const tokenScore = (matchedCount / queryTokens.length) * 60;
  return tokenScore;
}

export function fuzzySearch(query: string, maxResults: number = 20): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const results: SearchResult[] = [];
  const q = query.trim();

  // 1. Search situation phrases (highest value for "writer's block" users)
  for (const sp of SITUATION_PHRASES) {
    const score = scoreMatch(q, sp.phrase);
    if (score > 25) {
      const domain = DOMAIN_FAMILIES.find(d => d.id === sp.domainId);
      if (domain) {
        const sub = sp.subdisciplineId
          ? domain.subdisciplines.find(s => s.id === sp.subdisciplineId)
          : undefined;
        results.push({
          type: 'situation',
          score: score + 10, // boost situations
          domain,
          subdiscipline: sub,
          situationPhrase: sp.phrase,
          matchedOn: sp.phrase
        });
      }
    }
  }

  // 2. Search domains (name, summary, aliases)
  for (const domain of DOMAIN_FAMILIES) {
    let bestScore = 0;
    let matchedOn = '';

    const nameScore = scoreMatch(q, domain.name);
    if (nameScore > bestScore) { bestScore = nameScore; matchedOn = domain.name; }

    const summaryScore = scoreMatch(q, domain.summary) * 0.7;
    if (summaryScore > bestScore) { bestScore = summaryScore; matchedOn = domain.summary; }

    for (const alias of domain.aliases) {
      const aliasScore = scoreMatch(q, alias);
      if (aliasScore > bestScore) { bestScore = aliasScore; matchedOn = alias; }
    }

    if (bestScore > 25) {
      results.push({
        type: 'domain',
        score: bestScore,
        domain,
        matchedOn
      });
    }

    // 3. Search subdisciplines
    for (const sub of domain.subdisciplines) {
      let subBestScore = 0;
      let subMatchedOn = '';

      const subNameScore = scoreMatch(q, sub.name);
      if (subNameScore > subBestScore) { subBestScore = subNameScore; subMatchedOn = sub.name; }

      const subSummaryScore = scoreMatch(q, sub.summary) * 0.7;
      if (subSummaryScore > subBestScore) { subBestScore = subSummaryScore; subMatchedOn = sub.summary; }

      // Search sample tasks
      for (const task of sub.sampleTasks) {
        const taskScore = scoreMatch(q, task) * 0.9;
        if (taskScore > subBestScore) { subBestScore = taskScore; subMatchedOn = task; }
      }

      if (subBestScore > 25) {
        results.push({
          type: 'subdiscipline',
          score: subBestScore,
          domain,
          subdiscipline: sub,
          matchedOn: subMatchedOn
        });
      }
    }
  }

  // 4. Search workflows
  for (const wf of WORKFLOWS) {
    let wfBestScore = 0;
    let wfMatchedOn = '';

    const titleScore = scoreMatch(q, wf.title);
    if (titleScore > wfBestScore) { wfBestScore = titleScore; wfMatchedOn = wf.title; }

    const summaryScore = scoreMatch(q, wf.summary) * 0.7;
    if (summaryScore > wfBestScore) { wfBestScore = summaryScore; wfMatchedOn = wf.summary; }

    for (const alias of wf.aliases) {
      const aliasScore = scoreMatch(q, alias);
      if (aliasScore > wfBestScore) { wfBestScore = aliasScore; wfMatchedOn = alias; }
    }

    if (wfBestScore > 25) {
      const domain = DOMAIN_FAMILIES.find(d => d.id === wf.domainId) || DOMAIN_FAMILIES[0];
      results.push({
        type: 'workflow',
        score: wfBestScore + 5, // boost workflows
        domain,
        workflow: wf,
        matchedOn: wfMatchedOn
      });
    }
  }

  // Deduplicate and sort
  const seen = new Set<string>();
  const deduped = results.filter(r => {
    const key = `${r.type}-${r.domain.id}-${r.subdiscipline?.id || ''}-${r.workflow?.id || ''}-${r.situationPhrase || ''}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return deduped
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults);
}

// Alias for fuzzySearch
export const fuzzySearchTaxonomy = fuzzySearch;

// ─── Quick Stats ───────────────────────────────────────────────

export function getTaxonomyStats() {
  const totalDomains = DOMAIN_FAMILIES.length;
  const totalSubdisciplines = DOMAIN_FAMILIES.reduce((acc, d) => acc + d.subdisciplines.length, 0);
  const totalAliases = DOMAIN_FAMILIES.reduce((acc, d) => acc + d.aliases.length, 0);
  const totalSampleTasks = DOMAIN_FAMILIES.reduce(
    (acc, d) => acc + d.subdisciplines.reduce((a, s) => a + s.sampleTasks.length, 0),
    0
  );
  const totalWorkflows = WORKFLOWS.length;
  const totalSituations = SITUATION_PHRASES.length;

  return {
    totalDomains,
    totalSubdisciplines,
    totalAliases,
    totalSampleTasks,
    totalWorkflows,
    totalSituations
  };
}
