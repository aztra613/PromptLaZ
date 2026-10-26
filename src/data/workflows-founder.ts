/**
 * PromptLaz — Founder AI Playbook & Real-World Business Workflows
 * Sourced directly from FOUNDER_AI_DIGITAL_PLAYBOOK_2026.html
 * Enriched with Reddit r/PromptEngineering and r/ChatGPT production-tested patterns:
 * - 100% Point-and-Click Guided Dropdowns with ELI5 Explanations
 * - Zero Hallucination & Anti-Fluff Constraints (Bans 'delve', 'tapestry', 'testament')
 * - Model Dialect Optimization (Claude XML, ChatGPT System, Perplexity Citations, DeepSeek CoT)
 */
import { WorkflowSchema } from '../types';

export const FOUNDER_WORKFLOWS: WorkflowSchema[] = [

  // ═══════════════════════════════════════════════════════════════
  // FOUNDER AI 1: MARKET RESEARCH, CUSTOMER DISCOVERY & ICP
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'founder_market_discovery',
    title: 'Founder AI: Market Research & Customer Discovery',
    domainId: 'marketing_sales',
    domainName: 'Marketing, sales and e-commerce',
    group: 'Economy & work',
    discipline: 'Founder Market Validation & ICP Strategy',
    summary: 'Diagnose market bottlenecks, formulate Ideal Customer Profiles (ICP), build customer discovery interview scripts, and generate competitor intelligence matrices.',
    outcome: 'An actionable Market Diagnosis Brief, ICP Persona Matrix, or 4-Step Customer Discovery Action Plan with zero corporate fluff.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Process Diagnosis + Execution Checklist + Action Items',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ['market research', 'customer discovery', 'icp', 'msme', 'founder', 'b2b sales', 'lead generation', 'playbook'],
    governingStandards: ['The Mom Test (Rob Fitzpatrick)', 'Steve Blank Customer Development', 'Lean Startup Framework', 'Challenger Customer'],
    reviewerRole: 'Venture Partner & Head of Growth',
    lastReviewedDate: '2026-04-10',
    missingInputRules: {
      criticalFields: ['industry_context', 'primary_challenge'],
      fallbackGuidance: 'When specific customer transcripts or data are unavailable, the prompt generates an exploratory diagnostic framework to uncover the bottleneck.'
    },
    recipes: [
      {
        id: 'msme_market_bottleneck',
        title: '🎯 MSME Market Bottleneck & ICP Diagnosis',
        description: 'Diagnose process gaps, structure a 4-step start-to-finish workflow, and deliver execution checklists for MSME founders.',
        badge: 'Founder Playbook',
        presetAnswers: {
          industry_context: 'b2b_saas',
          primary_challenge: 'lead_qualification_drop',
          data_inputs: 'unstructured_sales_notes',
          deliverable_format: 'diagnosis_checklist_actions',
          target_tool_dialect: 'chatgpt_openai',
          reddit_guardrails: 'zero_cliches_straight_output'
        }
      },
      {
        id: 'perplexity_kpi_intelligence',
        title: '🔍 Perplexity Weekly Market KPI Intelligence',
        description: 'Retrieve real-world competitor metrics, industry benchmark CAC/LTV ratios, and cite authoritative sources.',
        badge: 'Perplexity AI',
        presetAnswers: {
          industry_context: 'd2c_ecommerce',
          primary_challenge: 'customer_churn_high',
          data_inputs: 'ad_campaign_metrics',
          deliverable_format: 'weekly_kpi_review_schedule',
          target_tool_dialect: 'perplexity_search',
          reddit_guardrails: 'data_dense_tables'
        }
      },
      {
        id: 'cold_outreach_icp_matrix',
        title: '🚀 B2B Cold Outreach & ICP Persona Matrix',
        description: 'Define exact buyer triggers, objection rebuttals, and 3-step high-converting cold email sequence.',
        badge: 'Sales Engine',
        presetAnswers: {
          industry_context: 'agency_consulting',
          primary_challenge: 'cold_outreach_low_response',
          data_inputs: 'crm_deal_history',
          deliverable_format: 'icp_persona_matrix',
          target_tool_dialect: 'claude_xml',
          reddit_guardrails: 'zero_cliches_straight_output'
        }
      }
    ],
    fields: [
      {
        id: 'industry_context',
        label: 'What is your company and industry context?',
        technicalTerm: 'Operating Domain & Business Model',
        eli5: 'Are you building software, running an e-commerce brand, or managing an MSME / local service business?',
        example: 'B2B SaaS with 10–50 employees targeting mid-market accounting firms',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Grounds the analysis in realistic unit economics and sales cycles.',
        options: [
          { label: 'B2B SaaS / Enterprise Software (Subscription, ACV $5k–$50k)', value: 'b2b_saas', isDefault: true },
          { label: 'D2C E-Commerce / Consumer Retail (High transaction volume, paid ads)', value: 'd2c_ecommerce' },
          { label: 'MSME / Local Manufacturing & Trade (Traditional sales, Tally ERP, credit terms)', value: 'msme_manufacturing' },
          { label: 'Agency / Professional Services & Consulting (Billable hours, project retainers)', value: 'agency_consulting' },
          { label: 'Healthcare Clinic / HealthTech (Regulated, high trust barrier, HIPAA)', value: 'healthcare_healthtech' },
          { label: 'Fintech / BFSI / Financial Advisory (Compliance-heavy, risk aversion)', value: 'fintech_bfsi' }
        ]
      },
      {
        id: 'primary_challenge',
        label: 'What is the immediate commercial bottleneck?',
        technicalTerm: 'Critical Operational Bottleneck',
        eli5: 'What is stopping your revenue from growing right now?',
        example: 'Leads drop off after the first demo without converting',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Focuses the prompt on root cause analysis and tangible action items.',
        options: [
          { label: 'Lead Qualification Drop-off (Sales reps waste time on non-buyers)', value: 'lead_qualification_drop', isDefault: true },
          { label: 'Low Response to Cold Outreach (Prospects ignore emails and LinkedIn messages)', value: 'cold_outreach_low_response' },
          { label: 'Undefined ICP & Feature Creep (Trying to serve everyone, high churn)', value: 'undefined_icp_churn' },
          { label: 'Customer Retention & Churn Spike (Users churn within 90 days of onboarding)', value: 'customer_churn_high' },
          { label: 'Pricing & Value Proposition Friction (Clients push back heavily on fees)', value: 'pricing_friction' }
        ]
      },
      {
        id: 'data_inputs',
        label: 'What factual records or data do you have ready?',
        technicalTerm: 'Ground Truth Data Assets',
        eli5: 'What notes or files can you reference so the AI does not hallucinate?',
        example: 'Unstructured notes from 12 customer discovery calls',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Defines how the AI structures its data extraction and analysis steps.',
        options: [
          { label: 'Unstructured Founder Sales Notes & Call Recaps', value: 'unstructured_sales_notes', isDefault: true },
          { label: 'CRM Deal Pipeline & Lost Reason Notes (HubSpot, Salesforce, Pipedrive)', value: 'crm_deal_history' },
          { label: 'Paid Ad Campaign Performance & Landing Page Analytics', value: 'ad_campaign_metrics' },
          { label: 'Customer Churn Exit Survey Responses & Support Tickets', value: 'churn_survey_tickets' },
          { label: 'Greenfield / Pre-launch (Hypothesis only, zero existing customer data)', value: 'greenfield_prelaunch' }
        ]
      },
      {
        id: 'deliverable_format',
        label: 'What exact deliverable format do you need?',
        technicalTerm: 'Artifact Output Specification',
        eli5: 'Do you want a full diagnosis with checklists, an ICP persona sheet, or a weekly KPI schedule?',
        example: 'Process Diagnosis + 4-Step Execution Checklist + Action Items',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Determines the document schema and section hierarchy.',
        options: [
          { label: 'Process Diagnosis + 4-Step Execution Checklist + Action Items (Founder Playbook Standard)', value: 'diagnosis_checklist_actions', isDefault: true },
          { label: 'ICP Persona Matrix (Triggers, Pain Points, Objections, Qualifying Criteria)', value: 'icp_persona_matrix' },
          { label: 'Weekly Team Review KPI Schedule & Performance Dashboard Spec', value: 'weekly_kpi_review_schedule' },
          { label: '3-Touch Cold Email & LinkedIn Message Sequence with Value Hooks', value: 'cold_outreach_sequence' }
        ]
      },
      {
        id: 'target_tool_dialect',
        label: 'Which AI Model will you run this prompt in?',
        technicalTerm: 'Target LLM Architecture Optimization',
        eli5: 'Different models prefer different prompt syntax (e.g. Claude loves XML tags, Perplexity loves search boundaries).',
        example: 'ChatGPT (GPT-4o / o1) with System Persona',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Formats instructions into model-specific syntax (XML tags, markdown headers, search parameters).',
        options: [
          { label: 'ChatGPT (GPT-4o / o1) — System Directive & Tabular Markdown', value: 'chatgpt_openai', isDefault: true },
          { label: 'Claude 3.5 Sonnet — XML Tag Enclosure (<context>, <rules>, <thinking>)', value: 'claude_xml' },
          { label: 'Perplexity AI — Real-time Web Retrieval, Date Bounds & Citation Demands', value: 'perplexity_search' },
          { label: 'DeepSeek R1 — Explicit Chain-of-Thought (<thinking>) & Mathematical Deduction', value: 'deepseek_cot' }
        ]
      },
      {
        id: 'reddit_guardrails',
        label: 'What tone and anti-fluff rules should be enforced?',
        technicalTerm: 'Reddit Anti-Fluff & Boundary Constraints',
        eli5: 'Bans annoying AI clichés like "delve", "testament", "tapestry", and avoids conversational fluff.',
        example: 'Strict Reddit Anti-Fluff: Ban buzzwords, straight to output',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Eliminates robotic AI mannerisms and enforces crisp professional output.',
        options: [
          { label: 'Strict Reddit Anti-Fluff: Ban buzzwords ("delve", "testament", "tapestry"), no conversational preamble', value: 'zero_cliches_straight_output', isDefault: true },
          { label: 'Data-Dense Tables & Bullet Points Only (Zero filler paragraphs)', value: 'data_dense_tables' },
          { label: 'Executive Board Tone (Direct, confident, risk-aware, ROI-focused)', value: 'executive_board_tone' },
          { label: 'Socratic Challenger Tone (Critique my assumptions aggressively)', value: 'socratic_challenger' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'business_startup_prd', title: 'Startup Idea Validation & PRD', description: 'Explore product PRD workflows.' },
      { type: 'companion', workflowId: 'marketing_content_strategy', title: 'Marketing Campaign & Content Strategy', description: 'Scale lead generation.' }
    ],
    verificationChecks: [
      { id: 'vc_icp_specific', title: 'Specific Non-Generic ICP', description: 'Ensure the output does not define everyone as a potential buyer.', category: 'evidence' },
      { id: 'vc_anti_fluff', title: 'No AI Fluff Words', description: 'Verify absence of words like "delve", "testament", "revolutionize", and "tapestry".', category: 'evidence' },
      { id: 'vc_human_signoff', title: 'Founder Sign-off Required', description: 'Include explicit checkpoint requiring founder or sales lead sign-off before campaign execution.', category: 'limitations' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // FOUNDER AI 2: CASH FLOW, INVOICING & RECEIVABLES DEFENSE
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'founder_finance_cashflow',
    title: 'Founder AI: Cash Flow, Invoicing & Receivables Defense',
    domainId: 'finance_markets',
    domainName: 'Finance, accounting, banking and insurance',
    group: 'Economy & work',
    discipline: 'Working Capital Management & Receivables Defense',
    summary: 'Protect cash runway, build firm overdue invoice follow-up sequences, model 13-week cash burn scenarios, and reconcile GST/Tally accounting disputes.',
    outcome: 'A 13-Week Cash Flow Defense Model, 3-Stage Overdue Invoice Escalation Sequence, or Working Capital Stress Test Brief.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Cash Flow Model + Receivables Escalation Schedule',
    modality: 'text',
    primaryIntent: 'Calculate / derive',
    aliases: ['cash flow', 'invoicing', 'receivables', 'overdue', 'gst', 'tally', 'working capital', 'burn rate', 'runway'],
    governingStandards: ['GAAP / IFRS Accounting Standards', 'MSME Development Act (45-Day Payment Rule)', 'Direct / Indirect Tax Acts (GST)'],
    reviewerRole: 'Chief Financial Officer (CFO / CA)',
    lastReviewedDate: '2026-04-10',
    missingInputRules: {
      criticalFields: ['cash_situation', 'current_runway'],
      fallbackGuidance: 'When exact bank balance figures are private or unknown, the prompt structures parametric sensitivity tables without fabricating balances.'
    },
    recipes: [
      {
        id: 'overdue_invoice_escalation',
        title: '🧾 3-Stage Overdue Invoice Escalation Engine',
        description: 'Polite reminder → Firm contractual notice → Formal legal demand under statutory MSME 45-day payment rules.',
        badge: 'Receivables Defense',
        presetAnswers: {
          cash_situation: 'overdue_receivables_45',
          current_runway: 'runway_3_to_6_months',
          accounting_stack: 'tally_prime',
          financial_deliverable: 'three_stage_escalation_sequence',
          anti_fluff_constraint: 'firm_contractual_polite'
        }
      },
      {
        id: 'thirteen_week_cash_defense',
        title: '💵 13-Week Cash Flow Runway & Stress Test',
        description: 'Model cash receipts vs disbursements under 3 scenarios: Base, Delayed Collections (-30%), and Downside Stress.',
        badge: 'Cash Runway',
        presetAnswers: {
          cash_situation: 'burn_rate_unpredictable',
          current_runway: 'runway_under_3_months',
          accounting_stack: 'excel_google_sheets',
          financial_deliverable: 'thirteen_week_cash_burn_model',
          anti_fluff_constraint: 'data_dense_tables'
        }
      },
      {
        id: 'gst_reconciliation_audit',
        title: '📊 GST / Tax Reconciliation & Input Credit Audit',
        description: 'Detect 2A/2B vendor mismatch, identify blocked input tax credits, and establish monthly closing checklist.',
        badge: 'Compliance & GST',
        presetAnswers: {
          cash_situation: 'gst_tax_mismatch',
          current_runway: 'runway_6_to_12_months',
          accounting_stack: 'zoho_books',
          financial_deliverable: 'monthly_reconciliation_sop',
          anti_fluff_constraint: 'executive_board_tone'
        }
      }
    ],
    fields: [
      {
        id: 'cash_situation',
        label: 'What is the primary cash flow or financial pressure?',
        technicalTerm: 'Liquidity Pressure Point',
        eli5: 'Are clients paying late, is burn rate too high, or is tax/GST causing confusion?',
        example: 'Clients are delaying invoice payment past 45 days, freezing working capital',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures the operational urgency, financial calculations, and tone.',
        options: [
          { label: '30–60+ Days Overdue Receivables (Clients delaying payments, hurting payroll)', value: 'overdue_receivables_45', isDefault: true },
          { label: 'Unpredictable Monthly Burn Rate (Revenue swings make runway planning impossible)', value: 'burn_rate_unpredictable' },
          { label: 'GST / Tax Mismatch & Blocked Input Credit (Vendors not filing on time)', value: 'gst_tax_mismatch' },
          { label: 'High Inventory Carrying Cost (Cash tied up in slow-moving warehouse stock)', value: 'inventory_cash_lock' },
          { label: 'Loan / Working Capital Credit Line Application Preparation', value: 'loan_application_prep' }
        ]
      },
      {
        id: 'current_runway',
        label: 'What is the estimated cash runway band?',
        technicalTerm: 'Liquidity Runway Horizon',
        eli5: 'How many months can the business operate if zero new cash comes in?',
        example: '3 to 6 months runway',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Calibrates risk conservatism and aggressive cost conservation measures.',
        options: [
          { label: 'Critical: Under 3 Months Runway (Immediate cash conservation required)', value: 'runway_under_3_months' },
          { label: 'Moderate: 3 to 6 Months Runway (Tight working capital control needed)', value: 'runway_3_to_6_months', isDefault: true },
          { label: 'Healthy: 6 to 12 Months Runway (Scaling operations responsibly)', value: 'runway_6_to_12_months' },
          { label: 'Strong: 12+ Months Runway / Cash-flow positive', value: 'runway_12_plus_months' }
        ]
      },
      {
        id: 'accounting_stack',
        label: 'What accounting or ERP stack is currently used?',
        technicalTerm: 'Financial Ledger & ERP Infrastructure',
        eli5: 'Which software holds your financial records?',
        example: 'Tally Prime with custom ledger exports',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Tailors step-by-step export and reconciliation instructions to the specific platform.',
        options: [
          { label: 'Tally Prime / Tally.ERP 9 (Standard Indian MSME Ledger)', value: 'tally_prime', isDefault: true },
          { label: 'Zoho Books (Cloud accounting, automated payment reminders)', value: 'zoho_books' },
          { label: 'QuickBooks Online / Xero (Global SaaS & consulting standard)', value: 'quickbooks_xero' },
          { label: 'Microsoft Excel / Google Sheets (Custom tracker sheets)', value: 'excel_google_sheets' },
          { label: 'SAP Business One / Oracle NetSuite (Mid-market enterprise ERP)', value: 'sap_netsuite' }
        ]
      },
      {
        id: 'financial_deliverable',
        label: 'What exact financial deliverable do you want generated?',
        technicalTerm: 'Financial Deliverable Artifact',
        eli5: 'Do you want collection emails, a cash forecast model, or a closing SOP?',
        example: '3-Stage Overdue Invoice Escalation Sequence (Friendly → Firm → Legal)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Defines the structural math, schedules, and clauses included in the prompt.',
        options: [
          { label: '3-Stage Overdue Invoice Escalation Sequence (Friendly Reminder → Firm Notice → Formal Demand)', value: 'three_stage_escalation_sequence', isDefault: true },
          { label: '13-Week Cash Flow Forecast & Burn Rate Sensitivity Model', value: 'thirteen_week_cash_burn_model' },
          { label: 'Month-End Financial Close & GST Reconciliation SOP', value: 'monthly_reconciliation_sop' },
          { label: 'Bank Overdraft / Working Capital Facility Justification Memo', value: 'od_facility_memo' }
        ]
      },
      {
        id: 'anti_fluff_constraint',
        label: 'What tone and legal constraint rules should apply?',
        technicalTerm: 'Tone Calibration & Boundary Rules',
        eli5: 'Ensure letters are firm and professional without burning long-term client relationships unnecessarily.',
        example: 'Firm contractual tone citing invoice terms without emotional language',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Guides negotiation posture, legal risk boundaries, and phrasing.',
        options: [
          { label: 'Firm Contractual Tone (Cites purchase order terms, maintains professional courtesy)', value: 'firm_contractual_polite', isDefault: true },
          { label: 'Zero Fluff & Pure Tabular Data (Tables with aging buckets, interest calculations)', value: 'data_dense_tables' },
          { label: 'Executive Board Presentation (High-level summary with working capital KPIs)', value: 'executive_board_tone' },
          { label: 'Statutory MSME Notice (Mentions statutory interest obligations under applicable law)', value: 'statutory_msme_notice' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'finance_equity_valuation', title: 'Equity Research & Corporate Valuation', description: 'Explore corporate valuation models.' },
      { type: 'companion', workflowId: 'founder_operations_erp', title: 'Founder AI: Operations & ERP Automation', description: 'Connect receivables to operations.' }
    ],
    verificationChecks: [
      { id: 'vc_math_integrity', title: 'Math & Aging Consistency', description: 'Ensure the output requires exact amounts, due dates, and interest rates rather than vague sums.', category: 'evidence' },
      { id: 'vc_contract_reference', title: 'Reference Contractual Terms', description: 'Remind user to cross-check invoice numbers, PO dates, and contractual payment grace periods.', category: 'limitations' },
      { id: 'vc_cfo_signoff', title: 'Financial Lead Review', description: 'Mandate human review by accountant or founder before dispatching formal demand letters.', category: 'limitations' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // FOUNDER AI 3: OPERATIONS, ERP & SUPPLY CHAIN AUTOMATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'founder_operations_erp',
    title: 'Founder AI: Operations, ERP & Supply Chain Automation',
    domainId: 'operations_supplychain',
    domainName: 'Operations, manufacturing and supply chain',
    group: 'Economy & work',
    discipline: 'Operations Scaling & Process Automation',
    summary: 'Standardize operations with Standard Operating Procedures (SOPs), optimize inventory reorder levels, eliminate manual spreadsheet data entry, and establish vendor SLAs.',
    outcome: 'An Operational SOP with step-by-step checklists, Inventory Reorder Optimization Model, or Workflow Automation Blueprint.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Standard Operating Procedure (SOP) + Process Checklist',
    modality: 'text',
    primaryIntent: 'Automate / implement',
    aliases: ['operations', 'erp', 'inventory', 'procurement', 'sop', 'supply chain', 'automation', 'workflow', 'tally'],
    governingStandards: ['ISO 9001 Quality Management', 'Six Sigma DMAIC Framework', 'ITIL Service Management'],
    reviewerRole: 'Head of Operations & Logistics',
    lastReviewedDate: '2026-04-10',
    missingInputRules: {
      criticalFields: ['operational_area', 'core_issue'],
      fallbackGuidance: 'When current workflow steps are undocumented, the prompt leads with an operational diagnostic questionnaire.'
    },
    recipes: [
      {
        id: 'inventory_reorder_sop',
        title: '⚙️ Inventory Reorder & Minimum Stock Level SOP',
        description: 'Define safety stock, lead-time buffers, and automated purchase order triggers to avoid stockouts.',
        badge: 'Inventory & Procurement',
        presetAnswers: {
          operational_area: 'inventory_procurement',
          core_issue: 'stockout_vs_excess',
          current_systems: 'tally_plus_sheets',
          deliverable_artifact: 'step_by_step_sop_checklist',
          automation_approach: 'no_code_webhook_automation'
        }
      },
      {
        id: 'cross_dept_workflow_blueprint',
        title: '📋 Cross-Department Order-to-Delivery SOP',
        description: 'Map handoffs between Sales, Warehouse, and Invoicing to cut turnaround time and eliminate missing orders.',
        badge: 'Process Scaling',
        presetAnswers: {
          operational_area: 'order_fulfillment_dispatch',
          core_issue: 'manual_handover_errors',
          current_systems: 'zoho_suite',
          deliverable_artifact: 'cross_department_workflow_map',
          automation_approach: 'rule_based_checklists'
        }
      },
      {
        id: 'vendor_sla_audit',
        title: '🛡️ Vendor Performance & Quality SLA Scorecard',
        description: 'Audit supplier on-time in-full (OTIF) delivery, defect rates, and dispute resolution mechanisms.',
        badge: 'Supply Chain QA',
        presetAnswers: {
          operational_area: 'vendor_management_procurement',
          core_issue: 'supplier_quality_delay',
          current_systems: 'custom_erp',
          deliverable_artifact: 'vendor_sla_scorecard',
          automation_approach: 'bi_dashboard_metrics'
        }
      }
    ],
    fields: [
      {
        id: 'operational_area',
        label: 'Which operational department or system needs attention?',
        technicalTerm: 'Operational Domain & Function',
        eli5: 'Is this about inventory, order fulfillment, procurement, or customer service?',
        example: 'Inventory and warehouse procurement management',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Scopes the procedures, role titles, and standard metrics.',
        options: [
          { label: 'Inventory & Warehouse Procurement (Safety stock, reordering, stockouts)', value: 'inventory_procurement', isDefault: true },
          { label: 'Order-to-Delivery Fulfillment (Sales to warehouse to dispatch handoff)', value: 'order_fulfillment_dispatch' },
          { label: 'Vendor & Supplier Management (Contract adherence, quality checks, OTIF)', value: 'vendor_management_procurement' },
          { label: 'Customer Support & Help Desk Triage (SLA response time, ticket resolution)', value: 'customer_support_sla' },
          { label: 'Internal IT & Cybersecurity Access (Onboarding, permissions, offboarding)', value: 'it_access_security' }
        ]
      },
      {
        id: 'core_issue',
        label: 'What is the immediate friction or operational breakdown?',
        technicalTerm: 'Process Bottleneck & Failure Mode',
        eli5: 'What is breaking, causing delays, or costing extra money?',
        example: 'Frequent stockouts on key items while capital is locked in slow-moving items',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the root cause analysis and preventative controls.',
        options: [
          { label: 'Stockouts on High-Demand SKUs vs Capital Locked in Dead Stock', value: 'stockout_vs_excess', isDefault: true },
          { label: 'Manual Handover Errors between Sales, Warehouse, and Invoicing', value: 'manual_handover_errors' },
          { label: 'Suppliers Delivering Late or with Inconsistent Quality (Defect spikes)', value: 'supplier_quality_delay' },
          { label: 'Lack of Documented SOPs: Knowledge is in key employees heads', value: 'undocumented_tribal_knowledge' },
          { label: 'Repetitive Manual Copy-Pasting across Tally, Excel, and WhatsApp', value: 'manual_copy_paste_toil' }
        ]
      },
      {
        id: 'current_systems',
        label: 'What systems and software are currently used?',
        technicalTerm: 'Technology Infrastructure',
        eli5: 'Where is daily operational work recorded right now?',
        example: 'Tally Prime for billing, Google Sheets for warehouse inventory tracking',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Ensures procedural steps integrate seamlessly into the actual tech stack.',
        options: [
          { label: 'Tally Prime + Google Sheets / Excel (MSME standard)', value: 'tally_plus_sheets', isDefault: true },
          { label: 'Zoho Inventory / Zoho Creator / Zoho One Ecosystem', value: 'zoho_suite' },
          { label: 'Shopify / WooCommerce + Shiprocket / Delivery Aggregators', value: 'ecommerce_logistics_stack' },
          { label: 'Custom In-House Web ERP / PostgreSQL Database', value: 'custom_erp' },
          { label: 'Primarily Physical Paper Registers & WhatsApp Messages', value: 'paper_whatsapp_manual' }
        ]
      },
      {
        id: 'deliverable_artifact',
        label: 'What deliverable should the prompt instruct the AI to build?',
        technicalTerm: 'Target Operational Artifact',
        eli5: 'Do you need a full SOP with checklists, an automation blueprint, or an SLA scorecard?',
        example: 'Step-by-Step Standard Operating Procedure (SOP) with RACI matrix',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Formats output into production-ready templates with roles and responsibilities.',
        options: [
          { label: 'Step-by-Step Standard Operating Procedure (SOP) with RACI Matrix', value: 'step_by_step_sop_checklist', isDefault: true },
          { label: 'Cross-Department Process Workflow Map & Error Escalation Guide', value: 'cross_department_workflow_map' },
          { label: 'Vendor Performance & Service Level Agreement (SLA) Scorecard', value: 'vendor_sla_scorecard' },
          { label: 'No-Code / Low-Code Automation Architecture (Zapier/Make/API Webhooks)', value: 'automation_blueprint' }
        ]
      },
      {
        id: 'automation_approach',
        label: 'What level of automation are you targeting?',
        technicalTerm: 'Operational Automation Maturity',
        eli5: 'Are you looking for strict human checklists first, or automated webhooks and alerts?',
        example: 'Checklists first, followed by webhook alerts for critical exceptions',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Tunes the degree of automated scripting vs manual oversight in the output.',
        options: [
          { label: 'Rule-Based Checklists & Verification Gates (Human-in-the-loop, zero code)', value: 'rule_based_checklists', isDefault: true },
          { label: 'No-Code Webhook Automation (Zapier, Make, Slack/WhatsApp automated alerts)', value: 'no_code_webhook_automation' },
          { label: 'BI Dashboard Metrics (Automated daily reporting of exceptions and delays)', value: 'bi_dashboard_metrics' },
          { label: 'Full API Integration Specs for Engineering Implementation', value: 'api_engineering_specs' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'founder_finance_cashflow', title: 'Founder AI: Cash Flow & Invoicing Defense', description: 'Connect operations to cash flow.' },
      { type: 'companion', workflowId: 'computing_kubernetes_ops', title: 'Kubernetes & DevOps Incident Triage', description: 'Explore technical IT ops.' }
    ],
    verificationChecks: [
      { id: 'vc_raci_defined', title: 'RACI Accountability', description: 'Verify that every procedural step designates a single Responsible individual.', category: 'evidence' },
      { id: 'vc_exception_handling', title: 'Explicit Exception Paths', description: 'Ensure the SOP specifies what to do when a step fails or delayed past SLA.', category: 'limitations' },
      { id: 'vc_pilot_test', title: 'Pilot Test Requirement', description: 'Include instructions to pilot the SOP for 1 week before company-wide enforcement.', category: 'evidence' }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // FOUNDER AI 4: RECRUITMENT, JOB DESCRIPTIONS & TEAM KPIS
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'founder_people_recruitment',
    title: 'Founder AI: Recruitment, Job Descriptions & Team KPIs',
    domainId: 'careers_workplace',
    domainName: 'Careers, HR and workplace',
    group: 'Economy & work',
    discipline: 'Founder Hiring, Scorecards & Performance Management',
    summary: 'Write high-conversion job descriptions with clear outcomes, design structured behavioral interview rubrics, create 30-60-90 day onboarding plans, and set measurable team KPIs.',
    outcome: 'An Outcome-Driven Job Description, Behavioral Interview Question Rubric, or 30-60-90 Day Performance Onboarding Plan.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Hiring Scorecard + Structured Interview Rubric',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['hiring', 'recruitment', 'job description', 'interview rubric', 'kpi', 'performance review', 'onboarding', 'team', 'founder'],
    governingStandards: ['Who: The A Method for Hiring (Geoff Smart)', 'High Output Management (Andy Grove)', 'Radical Candor (Kim Scott)'],
    reviewerRole: 'Head of People & Talent Acquisition',
    lastReviewedDate: '2026-04-10',
    missingInputRules: {
      criticalFields: ['role_function', 'hiring_objective'],
      fallbackGuidance: 'When specific skill requirements are not stated, the prompt prompts for 3 core measurable outcomes.'
    },
    recipes: [
      {
        id: 'outcome_driven_job_desc',
        title: '📋 Outcome-Driven Senior Role Job Description',
        description: 'Replaces generic bullet points with measurable 1-year mission outcomes and culture values.',
        badge: 'Job Description',
        presetAnswers: {
          role_function: 'head_of_growth_sales',
          hiring_objective: 'first_senior_leader',
          evaluation_format: 'outcome_scorecard_jd',
          experience_band: 'senior_lead_5_to_10',
          reddit_anti_fluff: 'zero_corporate_jargon'
        }
      },
      {
        id: 'structured_interview_rubric',
        title: '🎯 Behavioral Interview Rubric & Red Flag Detector',
        description: 'STAR-format behavioral questions with explicit Good (4-5) vs Poor (1-2) candidate response signals.',
        badge: 'Interview Rubric',
        presetAnswers: {
          role_function: 'founding_fullstack_engineer',
          hiring_objective: 'critical_individual_contributor',
          evaluation_format: 'behavioral_interview_rubric',
          experience_band: 'mid_senior_3_to_6',
          reddit_anti_fluff: 'data_dense_tables'
        }
      },
      {
        id: 'onboarding_90_day_kpis',
        title: '⭐ 30-60-90 Day Onboarding & KPI Scorecard',
        description: 'Clear milestone check-ins with measurable 30-day learning, 60-day contribution, and 90-day ownership goals.',
        badge: 'Onboarding & KPIs',
        presetAnswers: {
          role_function: 'operations_project_manager',
          hiring_objective: 'underperformance_turnaround',
          evaluation_format: 'thirty_sixty_ninety_onboarding',
          experience_band: 'mid_senior_3_to_6',
          reddit_anti_fluff: 'executive_board_tone'
        }
      }
    ],
    fields: [
      {
        id: 'role_function',
        label: 'What is the role or organizational function?',
        technicalTerm: 'Target Role & Functional Domain',
        eli5: 'Who are you hiring or evaluating?',
        example: 'Head of Growth / Senior Sales Account Executive',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Calibrates standard competencies, benchmark compensation expectations, and domain questions.',
        options: [
          { label: 'Head of Growth / Senior Sales Account Executive (Revenue generation)', value: 'head_of_growth_sales', isDefault: true },
          { label: 'Founding Full-Stack / Backend Engineer (Core product architecture)', value: 'founding_fullstack_engineer' },
          { label: 'Operations / Project Manager (Logistics, vendor control, SOP execution)', value: 'operations_project_manager' },
          { label: 'Senior Product Designer (UI/UX, design system, user research)', value: 'senior_product_designer' },
          { label: 'Customer Success & Support Lead (Account retention, onboarding, renewals)', value: 'customer_success_lead' }
        ]
      },
      {
        id: 'hiring_objective',
        label: 'What is the organizational trigger for this action?',
        technicalTerm: 'Hiring Context & Organizational Milestone',
        eli5: 'Why are you building this prompt right now?',
        example: 'Hiring our first senior commercial leader to scale past founder-led sales',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Focuses expectations on immediate business impact vs steady-state maintenance.',
        options: [
          { label: 'Hiring First Senior Leader (Transitioning away from founder-led execution)', value: 'first_senior_leader', isDefault: true },
          { label: 'Scaling the Core IC Team (Expanding bandwidth due to rapid business growth)', value: 'critical_individual_contributor' },
          { label: 'Managing an Underperforming Role (Establishing clear 60-day turnaround milestones)', value: 'underperformance_turnaround' },
          { label: 'Quarterly Team Performance Review & Merit Appraisal Cycle', value: 'quarterly_perf_review' }
        ]
      },
      {
        id: 'experience_band',
        label: 'What is the expected seniority level?',
        technicalTerm: 'Seniority Level & Career Band',
        eli5: 'Is this an early-career executor or a seasoned director who needs minimal handholding?',
        example: 'Senior Lead (5 to 10 years experience)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Adjusts question depth from tactical execution to strategic leadership.',
        options: [
          { label: 'Early Career / Associate (1 to 3 years experience, coachable, execution-focused)', value: 'early_career_1_to_3' },
          { label: 'Mid-Senior Specialist (3 to 6 years experience, independent problem solver)', value: 'mid_senior_3_to_6' },
          { label: 'Senior Lead / Manager (5 to 10 years experience, proven domain track record)', value: 'senior_lead_5_to_10', isDefault: true },
          { label: 'Executive / Director / VP (10+ years experience, strategic visionary and team builder)', value: 'executive_director_10_plus' }
        ]
      },
      {
        id: 'evaluation_format',
        label: 'What exact hiring deliverable do you need?',
        technicalTerm: 'People Operations Artifact Format',
        eli5: 'Do you want a job post, an interview question sheet, or a 30-60-90 day onboarding checklist?',
        example: 'Outcome-Driven Job Description with 3 Core Year-1 Missions',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Formats output into ready-to-publish job descriptions, rubrics, or onboarding documents.',
        options: [
          { label: 'Outcome-Driven Job Description with 3 Core Year-1 Missions & Scorecard', value: 'outcome_scorecard_jd', isDefault: true },
          { label: '4-Stage Behavioral Interview Question Rubric (STAR method + Green/Red Flags)', value: 'behavioral_interview_rubric' },
          { label: '30-60-90 Day Milestone Onboarding Plan & Ownership Scorecard', value: 'thirty_sixty_ninety_onboarding' },
          { label: 'Quarterly OKR / KPI Goal-Setting Template for Team Members', value: 'quarterly_okr_kpis' }
        ]
      },
      {
        id: 'reddit_anti_fluff',
        label: 'What tone and constraint rules should apply?',
        technicalTerm: 'Style Constraints & Inclusivity Guardrails',
        eli5: 'Avoid generic buzzwords like "ninja" or "rockstar", and ensure the job description is compelling.',
        example: 'Strictly zero corporate jargon, realistic expectations, inclusive language',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces clean candidate experience and objective evaluation criteria.',
        options: [
          { label: 'Strictly Zero Corporate Jargon (No "rockstar", "wear many hats", "dynamic environment")', value: 'zero_corporate_jargon', isDefault: true },
          { label: 'Data-Dense Rubric Tables with Clear Scoring Criteria (1 to 5 scale)', value: 'data_dense_tables' },
          { label: 'Executive Board & Investor Tone (Focus on ROI, team leverage, and retention)', value: 'executive_board_tone' },
          { label: 'High-Empathy & Transparent Culture (Clear salary, work-life boundaries, growth path)', value: 'empathy_transparency' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'hr_talent_acquisition', title: 'HR & People Operations', description: 'Explore broader HR frameworks.' },
      { type: 'companion', workflowId: 'business_startup_prd', title: 'Startup Idea Validation & PRD', description: 'Align hiring to product strategy.' }
    ],
    verificationChecks: [
      { id: 'vc_outcomes_over_years', title: 'Outcomes Over Years of Experience', description: 'Ensure the job requirements prioritize measurable achievements rather than arbitrary year counts.', category: 'evidence' },
      { id: 'vc_anti_bias', title: 'Unbiased Evaluation Criteria', description: 'Verify that interview questions evaluate skills and evidence rather than subjective personal chemistry.', category: 'limitations' },
      { id: 'vc_clear_comp', title: 'Comp & Culture Transparency', description: 'Ensure prompt requires clear compensation band guidance and realistic expectations.', category: 'limitations' }
    ]
  }

];
