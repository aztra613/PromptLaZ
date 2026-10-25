import { WorkflowSchema, AssembledPrompt, PromptSection, TargetTool, LocalDraft, SubjectPickerValue } from '../types';

export function isValueEmpty(val: any): boolean {
  if (val === undefined || val === null) return true;
  if (typeof val === 'string') return val.trim() === '';
  if (typeof val === 'object') {
    const p = val as SubjectPickerValue;
    const hasGroup = !!(p.group && (p.group !== '__other__' || p.customGroup?.trim()));
    const hasDomain = !!(p.domainId && (p.domainId !== '__other__' || p.customDomain?.trim()) || p.domainName?.trim());
    const hasSub = !!(p.subdisciplineId && (p.subdisciplineId !== '__other__' || p.customSubdiscipline?.trim()) || p.subdisciplineName?.trim());
    const hasTask = !!(p.taskOrTopic && (p.taskOrTopic !== '__other__' || p.customTask?.trim()));
    const hasDetails = !!p.specificDetails?.trim();
    return !(hasGroup || hasDomain || hasSub || hasTask || hasDetails);
  }
  return false;
}

export function formatSubjectPicker(val: SubjectPickerValue): string {
  const lines: string[] = [];
  const parts: string[] = [];

  const group = val.group === '__other__' ? val.customGroup : val.group;
  if (group) parts.push(group);

  const domain = val.domainId === '__other__' ? val.customDomain : (val.domainName || val.domainId);
  if (domain) parts.push(domain);

  const sub = val.subdisciplineId === '__other__' ? val.customSubdiscipline : (val.subdisciplineName || val.subdisciplineId);
  if (sub) parts.push(sub);

  if (parts.length > 0) {
    lines.push(`Domain Path: ${parts.join(' → ')}`);
  }

  const task = val.taskOrTopic === '__other__' ? val.customTask : val.taskOrTopic;
  if (task) {
    lines.push(`Topic / Task: ${task}`);
  }

  if (val.specificDetails && val.specificDetails.trim()) {
    lines.push(`Specific Details & Focus: ${val.specificDetails.trim()}`);
  }

  return lines.length > 0 ? lines.join('\n  - ') : 'None specified';
}

/**
 * Builds a deterministic, structured prompt from a workflow schema and user form answers.
 */
export function buildPrompt(
  workflow: WorkflowSchema,
  answers: Record<string, any>,
  targetTool: TargetTool = 'general'
): AssembledPrompt {
  const sections: PromptSection[] = [];
  const missingCriticalFields: string[] = [];
  const warnings: string[] = [];
  const assumptions: string[] = [];

  // 1. Check critical fields
  for (const critFieldId of workflow.missingInputRules.criticalFields) {
    const val = answers[critFieldId];
    if (isValueEmpty(val)) {
      const fieldDef = workflow.fields.find(f => f.id === critFieldId);
      missingCriticalFields.push(fieldDef ? fieldDef.label : critFieldId);
    }
  }

  // 2. Base Role & Objective Section
  let roleTitle = 'Specialist Subject Expert';
  if (workflow.domainId === 'civil_built') {
    roleTitle = 'Senior Geotechnical / Structural Civil Engineer';
  } else if (workflow.domainId === 'computing_software') {
    roleTitle = 'Principal Systems Engineer & SRE Specialist';
  } else if (workflow.domainId === 'arts_design_media') {
    roleTitle = 'Lead Commercial Art Director & Studio Photographer';
  } else if (workflow.domainId === 'business_entrepreneurship') {
    roleTitle = 'Principal Product Manager & Venture Strategist';
  } else if (workflow.domainId === 'finance_markets') {
    roleTitle = 'Senior Financial Analyst & Corporate Valuation Specialist';
  } else if (workflow.domainId === 'education_exams') {
    roleTitle = 'Master Socratic Educator & Pedagogical Specialist';
  }

  let toolPrefix = '';
  if (targetTool === 'claude') {
    toolPrefix = 'You are a meticulous, evidence-based technical assistant. ';
  } else if (targetTool === 'chatgpt') {
    toolPrefix = 'Act as an expert advisor. Provide structured, step-by-step guidance. ';
  } else if (targetTool === 'gemini') {
    toolPrefix = 'Provide a comprehensive, logically verified analysis. ';
  } else if (targetTool === 'cursor') {
    toolPrefix = 'Generate clean, modular, production-ready implementation code and tests. ';
  }

  sections.push({
    title: '1. Role & Analytical Persona',
    content: `${toolPrefix}Act as a ${roleTitle} operating in accordance with professional industry standards for ${workflow.discipline}.`,
    reason: `Configured based on workflow: ${workflow.title}`
  });

  // 3. Task Context & Mission
  let taskObjective = workflow.outcome;
  if (answers.task_focus) {
    taskObjective = `Focus on: ${answers.task_focus}. ${workflow.outcome}`;
  } else if (answers.subject_topic) {
    const subTopic = typeof answers.subject_topic === 'object'
      ? (answers.subject_topic.taskOrTopic === '__other__' ? answers.subject_topic.customTask : answers.subject_topic.taskOrTopic) || answers.subject_topic.specificDetails || answers.subject_topic.domainName || ''
      : answers.subject_topic;
    const detailPart = typeof answers.subject_topic === 'object' && answers.subject_topic.specificDetails?.trim()
      ? ` with focus on: "${answers.subject_topic.specificDetails.trim()}"`
      : '';
    taskObjective = `Conduct an interactive Socratic study & active recall session for ${subTopic || 'the selected subject'}${detailPart}. ${workflow.outcome}`;
  } else if (answers.user_goal) {
    let goalText = answers.user_goal;
    if (answers.subject_hierarchy && typeof answers.subject_hierarchy === 'object') {
      const hierarchySummary = (answers.subject_hierarchy as SubjectPickerValue).formattedSummary;
      if (hierarchySummary) {
        goalText = `${answers.user_goal}\n[Atlas Domain Context: ${hierarchySummary}]`;
      }
    }
    taskObjective = goalText;
  } else if (answers.k8s_scenario) {
    taskObjective = `Scenario: ${answers.k8s_scenario}. ${workflow.outcome}`;
  }

  let criticalMissingNotice = '';
  if (missingCriticalFields.length > 0) {
    criticalMissingNotice = `\n\n[CRITICAL NOTICE: The following essential inputs were not provided: ${missingCriticalFields.join(', ')}. ${workflow.missingInputRules.fallbackGuidance} Do NOT fabricate numbers, loads, soil values, or test measurements.]`;
    warnings.push(`Missing critical inputs: ${missingCriticalFields.join(', ')}`);
  }

  sections.push({
    title: '2. Task Mission & Objective',
    content: `${taskObjective}${criticalMissingNotice}`,
    reason: 'Derived from your chosen goal and input parameters'
  });

  // 4. Input Parameters & Supplied Context
  const suppliedLines: string[] = [];

  for (const field of workflow.fields) {
    const val = answers[field.id];
    if (!isValueEmpty(val)) {
      if (typeof val === 'object' && ('group' in val || 'domainId' in val || 'taskOrTopic' in val || 'specificDetails' in val)) {
        const formatted = formatSubjectPicker(val as SubjectPickerValue);
        suppliedLines.push(`- **${field.label}**:\n  - ${formatted}`);
      } else if (typeof val === 'boolean') {
        suppliedLines.push(`- **${field.label}**: ${val ? 'Yes' : 'No'}`);
      } else {
        let displayVal = val;
        if (field.options && field.options.length > 0) {
          const opt = field.options.find(o => o.value === val);
          if (opt) displayVal = opt.label;
        }
        suppliedLines.push(`- **${field.label}**: ${displayVal}`);
      }
    }
  }

  if (suppliedLines.length > 0) {
    sections.push({
      title: '3. Supplied Parameters & Verified Inputs',
      content: `Use the following user-supplied parameters as the factual basis:\n${suppliedLines.join('\n')}`,
      reason: 'Assembled directly from your completed form answers'
    });
  } else {
    assumptions.push('No specific numbers or project parameters provided; AI will ask diagnostic questions.');
  }

  // 5. Constraints, Governing Codes & Guardrails
  const constraints: string[] = [];

  if (workflow.governingStandards && workflow.governingStandards.length > 0) {
    constraints.push(`- Comply strictly with applicable design codes and standards: ${workflow.governingStandards.join(', ')}.`);
  }

  if (answers.unit_system) {
    const unitLabel = answers.unit_system === 'si_metric' ? 'SI Metric (kN/m³, mm, kPa, °C)' : 'Imperial / US Customary (pcf, psi, inches, °F)';
    constraints.push(`- Maintain strict dimensional unit consistency in ${unitLabel}. Show explicit units beside every number.`);
  }

  if (workflow.riskClass === 'R2') {
    constraints.push('- Zero Hallucination Rule: Do not invent missing material strengths, load values, soil parameters, or historical stock prices. If a parameter is not specified, explicitly state the conservative assumption made and cite the reference standard.');
    constraints.push('- Professional Stamp Boundary: Include an explicit notice that this output serves as an engineering calculation aid / research framework and requires independent human review by a qualified professional before implementation.');
  }

  if (answers.avoid_elements) {
    constraints.push(`- Exclusions & Avoid List: ${answers.avoid_elements}`);
  }

  if (answers.constraints_rules) {
    constraints.push(`- Negative Constraints: ${answers.constraints_rules}`);
  }

  if (constraints.length > 0) {
    sections.push({
      title: '4. Constraints, Standards & Guardrails',
      content: constraints.join('\n'),
      reason: 'Enforces technical precision and regulatory safety standards'
    });
  }

  // 6. Deliverable Format & Output Specifications
  let deliverableSpec = `Deliverable Type: ${workflow.deliverableType}.\nStructure your response with clear Markdown headings, concise explanatory tables where relevant, and a clear executive summary.`;

  if (answers.required_deliverable) {
    deliverableSpec = `Produce a ${answers.required_deliverable} in structured Markdown format.`;
  } else if (answers.desired_output) {
    deliverableSpec = `Format output as: ${answers.desired_output}. Ensure formatting is clean, well-spaced, and immediately usable.`;
  }

  if (targetTool === 'midjourney') {
    deliverableSpec += `\nAppend relevant visual parameter flags: --v 6.1 --style raw ${answers.aspect_ratio ? `--ar ${answers.aspect_ratio.replace('_', ':')}` : '--ar 4:5'}`;
  } else if (targetTool === 'flux') {
    deliverableSpec += `\nTarget photorealistic texture with 35mm optical characteristics. Natural film grain, zero plastic skin.`;
  }

  sections.push({
    title: '5. Required Deliverable & Output Structure',
    content: deliverableSpec,
    reason: 'Specifies the exact artifact layout and target tool formatting'
  });

  // 7. Verification Checklist
  if (workflow.verificationChecks.length > 0) {
    const checksText = workflow.verificationChecks
      .map(vc => `- [ ] **${vc.title}**: ${vc.description}`)
      .join('\n');

    sections.push({
      title: '6. Self-Verification & Quality Checks',
      content: `Before concluding your response, conduct the following quality verification:\n${checksText}`,
      reason: 'Instructs the AI to verify its own response against domain failure modes'
    });
  }

  // Calculate readiness score
  const totalFields = workflow.fields.length;
  let filledFields = 0;
  for (const f of workflow.fields) {
    if (!isValueEmpty(answers[f.id])) {
      filledFields++;
    }
  }

  const baseRatio = totalFields > 0 ? filledFields / totalFields : 1;
  const criticalDeduction = missingCriticalFields.length * 0.25;
  const readinessScore = Math.max(20, Math.min(100, Math.round((baseRatio * 100) - (criticalDeduction * 100))));

  // Full formatted prompt text
  const fullText = sections
    .map(s => `### ${s.title}\n${s.content}`)
    .join('\n\n');

  return {
    fullText,
    sections,
    readinessScore,
    missingCriticalFields,
    warnings,
    assumptions
  };
}

/**
 * Local Draft Storage Helpers
 */
const DRAFTS_STORAGE_KEY = 'PromptLaz_local_drafts_v1';
const DRAFTS_ENABLED_KEY = 'PromptLaz_drafts_opt_in';

export function isLocalDraftsEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(DRAFTS_ENABLED_KEY) === 'true';
}

export function setLocalDraftsEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(DRAFTS_ENABLED_KEY, enabled ? 'true' : 'false');
  if (!enabled) {
    clearAllLocalDrafts();
  }
}

export function saveLocalDraft(draft: Omit<LocalDraft, 'id' | 'savedAt'>): LocalDraft {
  const drafts = getLocalDrafts();
  const existingIdx = drafts.findIndex(d => d.workflowId === draft.workflowId);
  const now = new Date().toISOString();

  let savedDraft: LocalDraft;
  if (existingIdx >= 0) {
    savedDraft = {
      ...drafts[existingIdx],
      ...draft,
      savedAt: now
    };
    drafts[existingIdx] = savedDraft;
  } else {
    savedDraft = {
      ...draft,
      id: `draft_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      savedAt: now
    };
    drafts.unshift(savedDraft);
  }

  localStorage.setItem(DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
  return savedDraft;
}

export function getLocalDrafts(): LocalDraft[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(DRAFTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function deleteLocalDraft(draftId: string): void {
  if (typeof window === 'undefined') return;
  const drafts = getLocalDrafts().filter(d => d.id !== draftId);
  localStorage.setItem(DRAFTS_STORAGE_KEY, JSON.stringify(drafts));
}

export function clearAllLocalDrafts(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(DRAFTS_STORAGE_KEY);
}

/**
 * Download text or file
 */
export function downloadFile(filename: string, content: string, type: 'text/markdown' | 'text/plain' | 'application/json' = 'text/markdown') {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
