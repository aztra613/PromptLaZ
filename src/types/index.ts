/**
 * PromptLaz Prompt Studio - TypeScript Data Models & Schemas
 * PRD v1.5 Compliant
 */

export type RiskClass = 'R0' | 'R1' | 'R2' | 'R3' | 'R4';

export type ContentTier = 'T1' | 'T2' | 'T3';

export type CoverageState = 
  | 'taxonomy_seed'
  | 'explainer_ready'
  | 'starter_ready'
  | 'workflow_draft'
  | 'review_required'
  | 'published_workflow'
  | 'deprecated';

export type DomainGroup = 
  | 'Knowledge & science'
  | 'Technology & engineering'
  | 'Health, food & living things'
  | 'Economy & work'
  | 'Society, law & culture'
  | 'Personal life & situations';

export type TaskIntent = 
  | 'Learn / explain'
  | 'Calculate / derive'
  | 'Create / design'
  | 'Edit / improve'
  | 'Analyse / interpret'
  | 'Compare / select'
  | 'Plan / schedule'
  | 'Debug / troubleshoot'
  | 'Test / validate'
  | 'Review / audit'
  | 'Document / report'
  | 'Decide / recommend'
  | 'Communicate / present'
  | 'Automate / implement'
  | 'Research / verify'
  | 'Practise / drill'
  | 'Translate / localise'
  | 'Summarise / extract'
  | 'Brainstorm'
  | 'Estimate / forecast'
  | 'Prepare for an event'
  | 'Simulate / role-play'
  | 'Critique / give feedback'
  | 'Negotiate / persuade'
  | 'Operate / maintain';

export type TargetTool = 
  | 'general'
  | 'chatgpt'
  | 'claude'
  | 'gemini'
  | 'perplexity'
  | 'deepseek'
  | 'midjourney'
  | 'flux'
  | 'cursor';

export interface DomainFamily {
  id: string;
  name: string;
  group: DomainGroup;
  summary: string;
  subdisciplines: Subdiscipline[];
  coverageState: CoverageState;
  aliases: string[];
  iconName: string;
}

export interface Subdiscipline {
  id: string;
  name: string;
  summary: string;
  sampleTasks: string[];
  coverageState: CoverageState;
  workflowsCount: number;
}

export interface QuestionOption {
  label: string;
  value: string;
  description?: string;
  isDefault?: boolean;
  group?: string;
  badge?: string;
}

export interface SubjectPickerValue {
  group?: string;
  customGroup?: string;
  domainId?: string;
  domainName?: string;
  customDomain?: string;
  subdisciplineId?: string;
  subdisciplineName?: string;
  customSubdiscipline?: string;
  taskOrTopic?: string;
  customTask?: string;
  specificDetails?: string;
  formattedSummary?: string;
}

export interface QuestionField {
  id: string;
  label: string;
  technicalTerm?: string;
  eli5: string;
  example: string;
  type: 'text' | 'textarea' | 'select' | 'radio' | 'multiselect' | 'number_with_unit' | 'boolean' | 'subject_picker';
  options?: QuestionOption[];
  units?: string[];
  placeholder?: string;
  required: boolean;
  isAdvanced?: boolean;
  step: 'start' | 'fit' | 'finetune';
  promptImpact: string;
  allowUnknown?: boolean;
  unknownHelpText?: string;
  dependsOn?: {
    fieldId: string;
    value: string | string[] | boolean;
  };
}

export interface WorkflowRelation {
  type: 'prerequisite' | 'companion' | 'next_step' | 'alternative';
  workflowId: string;
  title: string;
  description: string;
}

export interface VerificationCheck {
  id: string;
  title: string;
  description: string;
  category: 'units' | 'assumptions' | 'standards' | 'evidence' | 'limitations';
}

export interface WorkflowRecipe {
  id: string;
  title: string;
  description: string;
  badge?: string;
  presetAnswers: Record<string, any>;
}

export interface WorkflowSchema {
  id: string;
  title: string;
  domainId: string;
  domainName: string;
  group: DomainGroup;
  discipline: string;
  summary: string;
  outcome: string;
  skillLevel: 'Beginner' | 'Practitioner' | 'Expert';
  riskClass: RiskClass;
  contentTier: ContentTier;
  coverageState: CoverageState;
  deliverableType: string;
  modality: 'text' | 'image' | 'code' | 'data' | 'diagram' | 'plan';
  primaryIntent: TaskIntent;
  aliases: string[];
  governingStandards?: string[];
  reviewerRole?: string;
  lastReviewedDate?: string;
  recipes?: WorkflowRecipe[];
  fields: QuestionField[];
  relatedWorkflows: WorkflowRelation[];
  verificationChecks: VerificationCheck[];
  missingInputRules: {
    criticalFields: string[];
    fallbackGuidance: string;
  };
}

export interface PromptSection {
  title: string;
  content: string;
  reason?: string;
  isAssumption?: boolean;
}

export interface AssembledPrompt {
  fullText: string;
  sections: PromptSection[];
  readinessScore: number;
  missingCriticalFields: string[];
  warnings: string[];
  assumptions: string[];
}

export interface LocalDraft {
  id: string;
  workflowId: string;
  workflowTitle: string;
  domainName: string;
  savedAt: string;
  formAnswers: Record<string, any>;
  promptText: string;
  isManualEdited: boolean;
}
