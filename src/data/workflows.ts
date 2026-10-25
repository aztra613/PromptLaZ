import { WorkflowSchema } from '../types';

export const WORKFLOWS: WorkflowSchema[] = [
  // 1. CIVIL ENGINEERING: SOIL MECHANICS & COMPACTION / SETTLEMENT
  {
    id: 'civil_soil_mechanics',
    title: 'Soil Compaction & Settlement Interpretation',
    domainId: 'civil_built',
    domainName: 'Civil and built environment',
    group: 'Technology & engineering',
    discipline: 'Geotechnical Engineering & Soil Mechanics',
    summary: 'Turn soil lab/field test results (Proctor, Atterberg, consolidation) into an engineering calculation brief or QA report with strict input validation.',
    outcome: 'An engineering calculation brief or geotechnical data review that specifies standard codes, checks data gaps, and prevents hallucinated soil parameters.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Geotechnical Calculation Brief & QA Report',
    modality: 'text',
    primaryIntent: 'Calculate / derive',
    aliases: ['proctor test', 'soil compaction', 'consolidation', 'settlement', 'mdd', 'omc', 'geotechnical report', 'atterberg limits'],
    governingStandards: ['ASTM D698 / D1557', 'ASTM D2435', 'IS 2720', 'Eurocode 7 (EN 1997-2)', 'BS 1377'],
    reviewerRole: 'Licensed Geotechnical Engineer (PE / Chartered)',
    lastReviewedDate: '2026-03-15',
    missingInputRules: {
      criticalFields: ['test_type', 'soil_description', 'measured_values'],
      fallbackGuidance: 'When measured lab values or soil profile data are unknown, the prompt is safely converted into a Geotechnical Investigation & Data-Gathering Scope Checklist rather than guessing fictitious soil values.'
    },
    fields: [
      {
        id: 'task_focus',
        label: 'What is your primary geotechnical goal?',
        technicalTerm: 'Objective & Deliverable Scope',
        eli5: 'Are you interpreting lab test numbers, estimating how much the ground will settle, or writing a site quality control spec?',
        example: 'Interpret lab test results against compaction specifications',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Sets the primary analytical framing and objective statement in the prompt header.',
        options: [
          { label: 'Interpret Proctor compaction test (MDD & OMC)', value: 'proctor_compaction', isDefault: true },
          { label: 'Estimate 1D consolidation settlement & time rate', value: 'consolidation_settlement' },
          { label: 'Soil classification from Atterberg limits & grain size', value: 'soil_classification' },
          { label: 'Preliminary bearing capacity checklist for footings', value: 'bearing_capacity' }
        ]
      },
      {
        id: 'test_type',
        label: 'Which test method or standard was used?',
        technicalTerm: 'Test Standard & Energy Level',
        eli5: 'Standard Proctor uses lower compaction energy; Modified Proctor uses higher energy for heavy roads and airports.',
        example: 'Standard Proctor (ASTM D698 / IS 2720 Part 7)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Instructs the downstream AI to apply exact energy levels and governing tolerances.',
        options: [
          { label: 'Standard Proctor (ASTM D698 / IS 2720 Pt 7 / BS 1377)', value: 'standard_proctor', isDefault: true },
          { label: 'Modified Proctor (ASTM D1557 / IS 2720 Pt 8)', value: 'modified_proctor' },
          { label: 'Oedometer Consolidation (ASTM D2435 / ISO 17892-5)', value: 'oedometer_consolidation' },
          { label: 'Direct Shear / Triaxial Shear (ASTM D3080 / D2850)', value: 'shear_testing' },
          { label: 'I do not have test results yet (Need sampling plan)', value: 'no_test_yet' }
        ],
        allowUnknown: true,
        unknownHelpText: 'If you have not tested yet, the prompt will guide site sampling and bore-log requirements.'
      },
      {
        id: 'soil_description',
        label: 'How is the soil described or classified?',
        technicalTerm: 'Visual-Manual & USCS Classification',
        eli5: 'Knowing whether it is sandy, silty, or high-plasticity clay determines compaction curve shape and permeability.',
        example: 'Stiff red silty clay with sand traces (CL)',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., Lean clay (CL), Silty Sand (SM), or dark brown organic silt',
        promptImpact: 'Provides the physical soil matrix characteristics for parameter sanity checking.'
      },
      {
        id: 'unit_system',
        label: 'Which unit system are you working with?',
        technicalTerm: 'Dimensional Units',
        eli5: 'Engineering calculations fail if kN/m³ and pcf or kPa and psi are mixed up.',
        example: 'SI Metric (kN/m³, mm, kPa)',
        type: 'radio',
        step: 'fit',
        required: true,
        promptImpact: 'Mandates strict dimensional consistency in all calculations and tables.',
        options: [
          { label: 'SI Metric (kN/m³, g/cm³, kPa, mm)', value: 'si_metric', isDefault: true },
          { label: 'Imperial / US Customary (pcf, psi, inches)', value: 'us_customary' }
        ]
      },
      {
        id: 'measured_values',
        label: 'What numbers or test points do you have?',
        technicalTerm: 'Empirical Laboratory Data Points',
        eli5: 'Enter known values like Maximum Dry Density (MDD), Optimum Moisture Content (OMC), liquid limit, or field moisture. If unknown, state "None available".',
        example: 'MDD = 18.4 kN/m³, OMC = 13.5%, In-situ dry density = 17.6 kN/m³, Field moisture = 14.2%',
        type: 'textarea',
        step: 'fit',
        required: false,
        placeholder: 'e.g., MDD = 1.82 g/cm³, OMC = 14.1%, liquid limit = 38%, plastic limit = 19%',
        promptImpact: 'Injected directly into the input data section. If omitted, triggers missing-data safeguards.'
      },
      {
        id: 'compaction_spec',
        label: 'What compaction degree is specified in the contract?',
        technicalTerm: 'Relative Compaction Requirement (RC %)',
        eli5: 'Most structural fills require at least 95% of MDD; subgrades may require 98% or 90% depending on traffic.',
        example: 'Minimum 95% Standard Proctor MDD within ±2% of OMC',
        type: 'select',
        step: 'fit',
        required: false,
        isAdvanced: true,
        promptImpact: 'Adds compliance verification thresholds and acceptance/rejection criteria.',
        options: [
          { label: '≥ 95% of MDD within ±2% OMC (Standard structural fill)', value: '95_percent_std', isDefault: true },
          { label: '≥ 98% of MDD within ±1.5% OMC (Highways / runways)', value: '98_percent_heavy' },
          { label: '≥ 90% of MDD (General landscaping / non-structural)', value: '90_percent_light' },
          { label: 'Not specified / recommend appropriate specification', value: 'unspecified' }
        ]
      },
      {
        id: 'groundwater_context',
        label: 'Is groundwater present near the tested layer?',
        technicalTerm: 'Phreatic Surface & Effective Stress Context',
        eli5: 'A high water table reduces effective stress and causes liquefaction or pumping during compaction.',
        example: 'Water table observed at 1.8 m below finished ground level',
        type: 'text',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        placeholder: 'e.g., Water table at 2.5 m depth, or dry excavation pit',
        promptImpact: 'Inserts buoyancy, effective stress, and dewatering considerations.'
      },
      {
        id: 'required_deliverable',
        label: 'What exact deliverable format do you need back?',
        technicalTerm: 'Report Structure & Output Artifact',
        eli5: 'Choose whether you need a ready-to-file lab interpretation memo, a step-by-step verification, or a site snag list.',
        example: 'Engineering calculation memo with pass/fail summary table and soil curve discussion',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Defines the structural markdown sections of the final AI deliverable.',
        options: [
          { label: 'Formal QA/QC Test Evaluation Memo with pass/fail table', value: 'formal_memo', isDefault: true },
          { label: 'Step-by-step calculation brief with formula citations', value: 'calculation_brief' },
          { label: 'Contractor deficiency letter & remedial compaction actions', value: 'deficiency_letter' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'prerequisite', workflowId: 'civil_soil_mechanics', title: 'Site Investigation & Borehole Sampling Plan', description: 'Determine borehole spacing, depth and SPT frequencies before testing.' },
      { type: 'next_step', workflowId: 'civil_structural_review', title: 'Shallow Foundation Bearing Capacity Brief', description: 'Use interpreted shear and settlement parameters to size footings.' },
      { type: 'companion', workflowId: 'universal_builder', title: 'Earthwork Volume & BOQ Take-Off', description: 'Calculate cut/fill balance and borrow pit haulage factors.' }
    ],
    verificationChecks: [
      { id: 'vc_units', title: 'Unit Consistency', description: 'Confirm MDD is in kN/m³ or pcf and moisture is reported in % by dry weight.', category: 'units' },
      { id: 'vc_bounds', title: 'Physical Plausibility', description: 'Verify dry density is between 14-22 kN/m³ (90-140 pcf); flag any unphysical densities.', category: 'limitations' },
      { id: 'vc_standards', title: 'Standard Edition Check', description: 'Confirm whether ASTM D698 or ASTM D1557 was specified; energy difference is ~4.5x.', category: 'standards' },
      { id: 'vc_assumptions', title: 'Zero Ground Hallucination', description: 'Check that soil parameters not supplied in borehole data are clearly marked as unverified assumptions.', category: 'assumptions' }
    ]
  },

  // 2. CIVIL ENGINEERING: STRUCTURAL ANALYSIS & MEMBER DESIGN REVIEW
  {
    id: 'civil_structural_review',
    title: 'Structural Member Review & Code Check',
    domainId: 'civil_built',
    domainName: 'Civil and built environment',
    group: 'Technology & engineering',
    discipline: 'Structural Engineering & Analysis',
    summary: 'Prepare a code-compliant review brief for reinforced concrete or steel beams, columns, and connections with verified design assumptions.',
    outcome: 'A structured structural review brief citing applicable design codes (ACI 318, Eurocode, IS), load combinations, and shear/flexural limits.',
    skillLevel: 'Expert',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structural Design Basis Review Memo',
    modality: 'text',
    primaryIntent: 'Review / audit',
    aliases: ['structural analysis', 'rc beam design', 'steel column', 'aci 318', 'eurocode 2', 'load combinations', 'is 456'],
    governingStandards: ['ACI 318-19', 'EN 1992-1-1 (EC2)', 'IS 456:2000', 'AISC 360-22', 'IS 800:2007'],
    reviewerRole: 'Licensed Structural Engineer (SE / PE / Chartered)',
    lastReviewedDate: '2026-03-10',
    missingInputRules: {
      criticalFields: ['member_type', 'material_specification', 'governing_code'],
      fallbackGuidance: 'If exact dimensions and factored loads are missing, the prompt generates an independent Design Basis & Load Verification Checklist rather than calculating hypothetical capacities.'
    },
    fields: [
      {
        id: 'member_type',
        label: 'Which structural member or system is being reviewed?',
        technicalTerm: 'Structural Element Classification',
        eli5: 'Is this an RC beam, column, slab, steel truss member, or retaining wall?',
        example: 'Cast-in-place reinforced concrete continuous beam',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Establishes the governing failure modes (shear, flexure, buckling, deflection).',
        options: [
          { label: 'Reinforced Concrete (RC) Beam - Flexure & Shear', value: 'rc_beam', isDefault: true },
          { label: 'RC Column - Axial compression & Biaxial bending', value: 'rc_column' },
          { label: 'RC Two-way suspended slab - Deflection & Punching shear', value: 'rc_slab' },
          { label: 'Structural Steel Column - Lateral torsional buckling', value: 'steel_column' },
          { label: 'Steel Bolted / Welded Moment Connection', value: 'steel_connection' }
        ]
      },
      {
        id: 'governing_code',
        label: 'Which design standard and edition applies?',
        technicalTerm: 'Building Code Jurisdiction & Standard',
        eli5: 'Load combination factors (1.2D + 1.6L in ACI vs 1.35G + 1.5Q in Eurocode) differ substantially.',
        example: 'ACI 318-19 (Building Code Requirements for Structural Concrete)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Mandates specific strength reduction factors (phi or gamma) and formula citations.',
        options: [
          { label: 'ACI 318-19 (US / International Standard)', value: 'aci_318_19', isDefault: true },
          { label: 'Eurocode 2: EN 1992-1-1 with UK/National Annex', value: 'eurocode_2' },
          { label: 'IS 456:2000 / IS 800:2007 (India National Standard)', value: 'is_456_2000' },
          { label: 'AISC 360-22 (Specification for Structural Steel Buildings)', value: 'aisc_360_22' },
          { label: 'Not sure / help identify code from building location', value: 'unspecified_code' }
        ]
      },
      {
        id: 'material_specification',
        label: 'What material grades are specified?',
        technicalTerm: 'Characteristic Compressive / Yield Strengths',
        eli5: 'Specify concrete compressive strength (f\'c or fck) and reinforcing steel yield strength (fy).',
        example: 'Concrete f\'c = 30 MPa (4350 psi); Steel fy = 420 MPa (Grade 60 / Fe500)',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., C30/37 concrete, fyk = 500 MPa rebar, or ASTM A992 Gr 50 steel',
        promptImpact: 'Provides baseline constitutive material constants for capacity calculations.'
      },
      {
        id: 'geometry_spans',
        label: 'What are the member geometry and span lengths?',
        technicalTerm: 'Cross-section Dimensions & Boundary Conditions',
        eli5: 'Width, total depth, clear span, and whether supports are pinned, fixed, or continuous.',
        example: 'b = 300 mm, h = 600 mm, clear span L = 6.5 m, simply supported with fixed left support',
        type: 'text',
        step: 'fit',
        required: true,
        placeholder: 'e.g., b = 350 mm, d = 550 mm, span = 7.2 m, effective depth d = 500 mm',
        promptImpact: 'Sets geometric stiffness and effective depth in moment calculations.'
      },
      {
        id: 'applied_loads',
        label: 'What are the dead, live, and environmental loads?',
        technicalTerm: 'Unfactored Service Actions & Combinations',
        eli5: 'List permanent dead load (including self-weight) and imposed live load. Note if wind or seismic loads apply.',
        example: 'Dead load = 18 kN/m, Live load = 12 kN/m, Wind uplift = 4 kN/m',
        type: 'textarea',
        step: 'fit',
        required: false,
        placeholder: 'e.g., Superimposed DL = 2.5 kPa, Live Load = 3.0 kPa, Span tributary width = 4.0 m',
        promptImpact: 'Calculates factored ultimate moment (Mu) and factored shear (Vu).'
      },
      {
        id: 'detailing_concerns',
        label: 'Are there specific detailing or serviceability checks needed?',
        technicalTerm: 'Serviceability Limit States (SLS) & Detailing Rules',
        eli5: 'Check minimum cover for durability, crack width limit (e.g. 0.3 mm), or long-term creep deflection.',
        example: 'Verify span/depth ratio for deflection limit L/250 and clear bar spacing for aggregate size',
        type: 'text',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        placeholder: 'e.g., Severe marine exposure (50 mm cover), seismic ductile detailing required',
        promptImpact: 'Adds explicit serviceability limit state requirements to the verification.'
      }
    ],
    relatedWorkflows: [
      { type: 'prerequisite', workflowId: 'civil_soil_mechanics', title: 'Soil Compaction & Settlement Interpretation', description: 'Confirm soil bearing capacity before final footing sizing.' },
      { type: 'companion', workflowId: 'universal_builder', title: 'Steel Connection Design Review', description: 'Review bolted end-plate moment connections against AISC 360.' }
    ],
    verificationChecks: [
      { id: 'vc_factors', title: 'Load Combination Verification', description: 'Check that correct code factors are applied (never mix ACI 1.2D+1.6L with Eurocode 1.35G+1.5Q).', category: 'standards' },
      { id: 'vc_ductility', title: 'Tension Controlled Limit', description: 'Verify net tensile strain epsilon_t >= 0.005 for ductile failure before concrete crush.', category: 'limitations' },
      { id: 'vc_stamp', title: 'Professional Review Notice', description: 'Prompt must state that AI analysis is a computational verification aid and cannot replace a sealed drawing by a Licensed Structural Engineer.', category: 'limitations' }
    ]
  },

  // 3. COMPUTING & DEVOPS: KUBERNETES DEPLOYMENT & INCIDENT RESPONSE
  {
    id: 'computing_kubernetes_ops',
    title: 'Kubernetes Production Deployment & Incident Triage',
    domainId: 'computing_software',
    domainName: 'Computing and software',
    group: 'Technology & engineering',
    discipline: 'DevOps, SRE & Platform Engineering',
    summary: 'Build production-hardened Kubernetes manifests, zero-downtime deployment pipelines, or triage live cluster crash incidents safely.',
    outcome: 'A production-grade Kubernetes manifest or systematic incident triage runbook with health probes, resource limits, and rollback guarantees.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Production K8s Manifest & Runbook',
    modality: 'code',
    primaryIntent: 'Operate / maintain',
    aliases: ['kubernetes', 'k8s', 'docker', 'devops', 'helm', 'crashloopbackoff', 'oomkilled', 'ingress', 'sre', 'incident response'],
    governingStandards: ['CIS Kubernetes Benchmark v1.8', 'CNCF Best Practices', 'Twelve-Factor App'],
    reviewerRole: 'Lead SRE / Platform Architect',
    lastReviewedDate: '2026-03-12',
    missingInputRules: {
      criticalFields: ['k8s_scenario', 'target_environment', 'workload_type'],
      fallbackGuidance: 'If specific log traces or image details are missing, the prompt instructs the AI to generate a diagnostic isolation tree rather than inventing dummy infrastructure.'
    },
    fields: [
      {
        id: 'k8s_scenario',
        label: 'What is your current objective?',
        technicalTerm: 'Operational Objective',
        eli5: 'Are you launching a new service, updating a Helm chart, or troubleshooting a broken pod in production?',
        example: 'Troubleshoot CrashLoopBackOff on production microservice',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the prompt into either a preventative deployment configuration or a rapid triage incident workflow.',
        options: [
          { label: 'Create new production-grade Deployment & Service manifest', value: 'new_deployment', isDefault: true },
          { label: 'Troubleshoot live pod incident (CrashLoopBackOff, OOMKilled, Pending)', value: 'pod_incident' },
          { label: 'Configure zero-downtime rolling update & HPA autoscale', value: 'autoscale_rolling' },
          { label: 'Build Ingress & TLS certificate configuration', value: 'ingress_tls' }
        ]
      },
      {
        id: 'target_environment',
        label: 'What cluster environment and version are you running?',
        technicalTerm: 'Runtime Distribution & K8s Version',
        eli5: 'Managed clouds (EKS, GKE, AKS) have different IAM integrations and ingress controllers than bare metal.',
        example: 'AWS EKS v1.30 with AWS Load Balancer Controller',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Ensures API versions (e.g. apps/v1, networking.k8s.io/v1) and cloud annotations are exact.',
        options: [
          { label: 'AWS EKS (Elastic Kubernetes Service)', value: 'aws_eks', isDefault: true },
          { label: 'Google Cloud GKE (Autopilot or Standard)', value: 'gcp_gke' },
          { label: 'Azure AKS (Azure Kubernetes Service)', value: 'azure_aks' },
          { label: 'On-premise / Self-hosted / k3s', value: 'self_hosted' }
        ]
      },
      {
        id: 'workload_type',
        label: 'What kind of application is this?',
        technicalTerm: 'Application Architecture & Statefulness',
        eli5: 'Stateless web apps use Deployments; background processors or databases need StatefulSets or Jobs.',
        example: 'Stateless Node.js/Next.js API server listening on port 3000',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., FastAPI Python REST service, Go worker queue consumer, or Next.js SSR',
        promptImpact: 'Determines replica count, graceful termination period, and port exposures.'
      },
      {
        id: 'resource_limits',
        label: 'Do you have CPU/Memory requests and limits defined?',
        technicalTerm: 'Cgroup Resource Requests & Limits',
        eli5: 'Requests guarantee scheduling on nodes; limits prevent a runaway pod from taking down neighbors (OOMKilled).',
        example: 'requests: cpu: 250m, memory: 512Mi | limits: cpu: 1000m, memory: 1Gi',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., requests: 250m/512Mi, limits: 1000m/1Gi (or "Help me estimate")',
        promptImpact: 'Adds security-compliant resources blocks preventing cluster noisy-neighbor issues.'
      },
      {
        id: 'health_probes',
        label: 'How should Kubernetes test if your app is alive and ready?',
        technicalTerm: 'Liveness, Readiness & Startup Probes',
        eli5: 'Readiness prevents traffic before DB connection is ready; liveness restarts frozen containers.',
        example: 'GET /healthz on port 3000, initialDelaySeconds: 15, periodSeconds: 10',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., HTTP GET /healthz or TCP socket check',
        promptImpact: 'Generates robust readinessProbe and livenessProbe blocks with appropriate timeout margins.'
      },
      {
        id: 'secrets_management',
        label: 'How are sensitive secrets or database passwords injected?',
        technicalTerm: 'Secrets Management & External Secret Store',
        eli5: 'Never hardcode credentials! Use External Secrets Operator, AWS Secrets Manager, or Kubernetes Secrets.',
        example: 'HashiCorp Vault injected via External Secrets Operator into Secret env vars',
        type: 'select',
        step: 'finetune',
        required: true,
        isAdvanced: true,
        promptImpact: 'Guarantees the prompt never advises committing raw base64 or plaintext passwords in Git.',
        options: [
          { label: 'External Secrets Operator / Cloud Secret Store CSI', value: 'external_secrets', isDefault: true },
          { label: 'Native Kubernetes Secret (referenced via secretKeyRef)', value: 'k8s_secret' },
          { label: 'ConfigMap only (non-sensitive variables)', value: 'configmap_only' }
        ]
      },
      {
        id: 'incident_symptoms',
        label: 'If troubleshooting: paste redacted error logs or symptoms',
        technicalTerm: 'Kubectl Describe / Logs Diagnostics',
        eli5: 'Paste output from "kubectl describe pod" or recent logs. Do NOT paste passwords or API keys.',
        example: 'Back-off restarting failed container: exit code 137 (OOMKilled) after processing 10MB file',
        type: 'textarea',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        placeholder: 'e.g., Error: connect ECONNREFUSED 10.96.0.1:443 or CrashLoopBackOff with status code 1',
        promptImpact: 'Triggers targeted diagnostic root-cause hypothesis generation in the incident response section.'
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'computing_qa_testing', title: 'Automated CI/CD Integration Test Strategy', description: 'Validate containerized builds before staging rollout.' },
      { type: 'next_step', workflowId: 'universal_builder', title: 'Terraform Cloud Infrastructure IaC', description: 'Provision the underlying EKS/GKE cluster and VPC subnets.' }
    ],
    verificationChecks: [
      { id: 'vc_secrets', title: 'Zero Plaintext Secrets', description: 'Ensure no database passwords, tokens or private keys appear in environment values.', category: 'evidence' },
      { id: 'vc_probes', title: 'Probe Failure Margins', description: 'Verify initialDelaySeconds is long enough to avoid liveness murder during slow JVM/Node cold starts.', category: 'limitations' },
      { id: 'vc_security', title: 'Non-Root Security Context', description: 'Check for runAsNonRoot: true and readOnlyRootFilesystem in container securityContext.', category: 'standards' }
    ]
  },

  // 4. COMPUTING: SOFTWARE QA & TEST STRATEGY
  {
    id: 'computing_qa_testing',
    title: 'Software QA Strategy & Automated Test Suite',
    domainId: 'computing_software',
    domainName: 'Computing and software',
    group: 'Technology & engineering',
    discipline: 'Software QA & Test Engineering',
    summary: 'Turn functional requirements into an exhaustive test plan with unit, integration, and E2E test cases, boundary tests, and failure cases.',
    outcome: 'An actionable test matrix with happy-path, boundary edge-cases, mock data strategies, and executable test suite outlines (Playwright, Jest, PyTest).',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'QA Test Plan & Executable Test Cases',
    modality: 'code',
    primaryIntent: 'Test / validate',
    aliases: ['qa', 'test plan', 'playwright', 'jest', 'cypress', 'unit test', 'integration test', 'regression', 'bug reproduction'],
    governingStandards: ['ISO/IEC/IEEE 29119', 'ISTQB Foundation Principles'],
    reviewerRole: 'Lead QA Engineer / SDET',
    lastReviewedDate: '2026-03-08',
    missingInputRules: {
      criticalFields: ['system_under_test', 'test_levels', 'core_functionality'],
      fallbackGuidance: 'If acceptance criteria are vague, the prompt instructs the AI to generate an exploratory test charter with critical risk heuristics.'
    },
    fields: [
      {
        id: 'domain_context',
        label: 'Application Domain & System Context (Optional)',
        technicalTerm: 'Domain Under Test & Compliance Scope',
        eli5: 'Optional: Choose your application domain (e.g. Fintech, Healthcare, E-commerce, Cloud DevOps) to tailor risk heuristics and compliance test cases.',
        example: 'Technology & engineering → Computing and software → Full-stack Web & Mobile',
        type: 'subject_picker',
        step: 'start',
        required: false,
        promptImpact: 'Injects domain-specific edge cases and regulatory test assertions.'
      },
      {
        id: 'system_under_test',
        label: 'What kind of system or component are you testing?',
        technicalTerm: 'System Under Test (SUT)',
        eli5: 'Is this an HTTP REST/GraphQL API, a web user interface, an async worker, or a mobile app?',
        example: 'REST API service for user authentication and OAuth 2.0 token issuance',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Dictates the testing paradigm (HTTP assertion vs DOM selector vs event stream).',
        options: [
          { label: 'REST or GraphQL Backend API Service', value: 'backend_api', isDefault: true },
          { label: 'Frontend Web Application (UI / Browser)', value: 'frontend_web' },
          { label: 'Async Event Queue / Worker Consumer', value: 'event_worker' },
          { label: 'Full Full-stack Feature Flow (E2E)', value: 'fullstack_e2e' }
        ]
      },
      {
        id: 'test_levels',
        label: 'Which test levels do you want covered?',
        technicalTerm: 'Testing Pyramid Levels',
        eli5: 'Unit tests check individual functions; integration tests check DB/API connections; E2E tests check real user flows.',
        example: 'Integration and E2E tests with mock external payment gateways',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Allocates depth across the test pyramid and prevents tests from all being slow E2E suites.',
        options: [
          { label: 'All levels (Unit, Component, Integration, and E2E)', value: 'all_pyramid', isDefault: true },
          { label: 'Integration & Contract Tests only', value: 'integration_only' },
          { label: 'End-to-End (E2E) Browser User Journey only', value: 'e2e_only' },
          { label: 'Unit Tests & Mocked Edge Cases only', value: 'unit_only' }
        ]
      },
      {
        id: 'test_framework',
        label: 'What testing framework or language are you using?',
        technicalTerm: 'Test Runner & Assertion Framework',
        eli5: 'Selecting your runner ensures code snippets are copy-pasteable without syntax rewrite.',
        example: 'Playwright with TypeScript',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Formats all output code in the exact syntax of the selected test framework.',
        options: [
          { label: 'Playwright (TypeScript / JavaScript)', value: 'playwright_ts', isDefault: true },
          { label: 'Jest / Vitest (TypeScript / React Testing Library)', value: 'vitest_ts' },
          { label: 'PyTest (Python + HTTPX / Selenium)', value: 'pytest_py' },
          { label: 'JUnit 5 / Mockito (Java / Spring Boot)', value: 'junit_java' },
          { label: 'Go testing package (net/http/httptest)', value: 'go_test' }
        ]
      },
      {
        id: 'core_functionality',
        label: 'Describe the feature requirements or user stories',
        technicalTerm: 'User Story & Acceptance Criteria',
        eli5: 'Explain what the user does, what input is provided, and what should happen on success and failure.',
        example: 'User submits registration with email and password. If email exists, returns 409 Conflict. If password < 8 chars, returns 422 with field error.',
        type: 'textarea',
        step: 'fit',
        required: true,
        placeholder: 'e.g., Given a logged in user with expired token, when they refresh, they receive new valid JWT without re-login...',
        promptImpact: 'Serves as the primary source of truth for generating positive, negative, and equivalence boundary tests.'
      },
      {
        id: 'edge_case_focus',
        label: 'What specific failure scenarios or security concerns worry you?',
        technicalTerm: 'Non-Functional & Boundary Test Vectors',
        eli5: 'Do you need concurrency checks, rate limiting tests, null/empty edge cases, or network failure recovery?',
        example: 'Double-clicking submit button (race conditions), SQL injection payloads, and 500 error from downstream payment API',
        type: 'text',
        step: 'finetune',
        required: false,
        placeholder: 'e.g., Network timeout handling, SQL injection in input fields, rapid concurrent clicks',
        promptImpact: 'Generates specialized negative test cases targeting these specific hazards.'
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'computing_kubernetes_ops', title: 'Kubernetes Production Deployment Manifest', description: 'Deploy the tested application image to staging clusters.' },
      { type: 'prerequisite', workflowId: 'business_startup_prd', title: 'Product Requirements (PRD) Specification', description: 'Align test assertions with approved business requirements.' }
    ],
    verificationChecks: [
      { id: 'vc_assertions', title: 'Explicit Assertions', description: 'Confirm test cases verify both state change and response payload, not just HTTP status code.', category: 'evidence' },
      { id: 'vc_fixtures', title: 'Isolated Test Data', description: 'Ensure test plan prescribes clean teardown/mocking so tests never depend on shared mutable state.', category: 'limitations' }
    ]
  },

  // 5. CREATIVE: EDITORIAL & STUDIO PRODUCT PHOTOGRAPHY PLANNING
  {
    id: 'creative_product_photography',
    title: 'Product & Commercial Photography Studio Brief',
    domainId: 'arts_design_media',
    domainName: 'Arts, design, media and entertainment',
    group: 'Society, law & culture',
    discipline: 'Photography & Camera Planning',
    summary: 'Plan high-end product or editorial photography: choose camera setup, lighting topology, background blur, composition, and visual style.',
    outcome: 'A professional commercial photography shoot plan (real camera) or hyper-detailed visual direction prompt (image model).',
    skillLevel: 'Beginner',
    riskClass: 'R0',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Commercial Photography Brief & Visual Direction',
    modality: 'image',
    primaryIntent: 'Create / design',
    aliases: ['product photo', 'photography', 'lighting', 'midjourney', 'camera shot list', 'aperture', 'commercial photography'],
    reviewerRole: 'Commercial Studio Photographer & Creative Director',
    lastReviewedDate: '2026-03-14',
    missingInputRules: {
      criticalFields: ['product_subject', 'lighting_style', 'composition_angle'],
      fallbackGuidance: 'If specific surface materials or props are not chosen, defaults to a restrained, elegant neutral studio setting.'
    },
    fields: [
      {
        id: 'execution_mode',
        label: 'Are you planning a real camera photoshoot or building an AI image generation prompt?',
        technicalTerm: 'Physical Camera Plan vs AI Image Generation Cues',
        eli5: 'For real cameras, settings specify physical gear and light positions. For AI image tools, settings act as visual style cues.',
        example: 'AI Image Generation (Midjourney / FLUX) with photographic realism',
        type: 'radio',
        step: 'start',
        required: true,
        promptImpact: 'Labels technical values (f-stop, shutter) as physical shoot instructions or descriptive visual direction.',
        options: [
          { label: 'AI Image Generation Prompt (Midjourney, FLUX, etc.)', value: 'ai_render', isDefault: true },
          { label: 'Real Photoshoot Plan (Camera equipment, lights & call sheet)', value: 'real_camera' }
        ]
      },
      {
        id: 'product_subject',
        label: 'What is the product or subject of the photo?',
        technicalTerm: 'Primary Hero Subject & Materiality',
        eli5: 'Describe the item: what is it made of, its shape, and what makes it special?',
        example: 'Minimalist matte ceramic coffee dripper in warm terracotta tone with brass dripper stand',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., Organic cold-pressed olive oil bottle in dark green glass with gold foil label',
        promptImpact: 'Forms the anchor hero subject in the prompt text.'
      },
      {
        id: 'scene_setting',
        label: 'Where is the product placed and what is the surface?',
        technicalTerm: 'Environment, Backdrop & Prop Context',
        eli5: 'A clean travertine stone slab, warm oak countertop, or seamless colored backdrop?',
        example: 'Honed light beige travertine stone slab with a few raw linen folds nearby',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., Pale grey textured plaster pedestal with soft architectural shadows',
        promptImpact: 'Defines the foreground, tabletop, and surrounding spatial environment.'
      },
      {
        id: 'lighting_style',
        label: 'What kind of lighting should illuminate the scene?',
        technicalTerm: 'Key & Fill Lighting Topology',
        eli5: 'Soft morning window light gives a gentle natural feel; high-contrast rim lighting creates dramatic luxury.',
        example: 'Warm morning side-window light with soft diffused fill and subtle natural shadows',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Guides contrast, shadow hardness, and specular reflection highlights.',
        options: [
          { label: 'Soft Natural Daylight (Morning window with gentle diffusion)', value: 'natural_daylight', isDefault: true },
          { label: 'High-End Studio Softbox (Even, clean, commercial catalog lighting)', value: 'studio_softbox' },
          { label: 'Dramatic Dark & Moody (Chiaroscuro, rim light, deep shadows)', value: 'dramatic_rim' },
          { label: 'Hard Direct Sunlight (Crisp architectural graphic shadows)', value: 'direct_sun' }
        ]
      },
      {
        id: 'composition_angle',
        label: 'What camera angle and composition do you want?',
        technicalTerm: 'Perspective, Elevation & Framing',
        eli5: 'Eye-level looks natural; top-down (flat lay) shows arrangements; low-angle makes products feel premium.',
        example: 'Slightly elevated 30-degree angle, hero product centered in right third',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Dictates focal perspective and visual hierarchy of elements.',
        options: [
          { label: 'Eye-level commercial hero shot (Product straight on)', value: 'eye_level', isDefault: true },
          { label: 'Slight high-angle (30 to 45 degree tabletop perspective)', value: 'tabletop_45' },
          { label: 'Flat-lay / Top-down 90 degree bird-eye view', value: 'flat_lay' },
          { label: 'Macro close-up detail shot (Focus on texture & finish)', value: 'macro_detail' }
        ]
      },
      {
        id: 'background_blur',
        label: 'How blurry should the background be?',
        technicalTerm: 'Depth of Field (Aperture / f-stop equivalent)',
        eli5: 'A blurry background makes the product pop; a sharp background keeps the whole scene in focus.',
        example: 'Moderately soft background (f/2.8 equivalent)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets depth-of-field and aperture cues.',
        options: [
          { label: 'Soft & Blurry background (f/1.8 - f/2.8, strong subject isolation)', value: 'shallow_dof', isDefault: true },
          { label: 'Moderately soft (f/4.0 - f/5.6, readable environment)', value: 'medium_dof' },
          { label: 'Sharp front-to-back (f/8 - f/11, whole scene in crisp focus)', value: 'deep_dof' },
          { label: 'I do not know — choose the best look for this product', value: 'auto_dof' }
        ]
      },
      {
        id: 'aspect_ratio',
        label: 'What aspect ratio do you need?',
        technicalTerm: 'Sensor / Canvas Aspect Ratio',
        eli5: '4:5 for Instagram/social portraits; 1:1 for square e-commerce thumbnails; 16:9 for website banners.',
        example: '4:5 portrait (social & mobile)',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Appends exact aspect ratio parameters (e.g. --ar 4:5).',
        options: [
          { label: '4:5 Portrait (Instagram / Mobile product view)', value: '4_5', isDefault: true },
          { label: '1:1 Square (E-commerce catalog listing)', value: '1_1' },
          { label: '16:9 Landscape (Hero banner / website header)', value: '16_9' },
          { label: '9:16 Vertical (Stories / TikTok / Reels format)', value: '9_16' }
        ]
      },
      {
        id: 'avoid_elements',
        label: 'What elements must NOT appear in the image?',
        technicalTerm: 'Negative Prompt & Exclusion Cues',
        eli5: 'List things to keep out, like artificial glare, extra hands, text overlays, or clutter.',
        example: 'No text, no watermarks, no distorted handles, no harsh neon reflections, no plastic props',
        type: 'text',
        step: 'finetune',
        required: false,
        placeholder: 'e.g., No text, no logos, no human hands, no plastic clutter, no oversaturated colors',
        promptImpact: 'Formatted into negative prompting and exclusion constraints.'
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'creative_image_edit', title: 'Reference-Preserving Photo Retouching', description: 'Replace background or adjust lighting while preserving product shape.' },
      { type: 'next_step', workflowId: 'business_startup_prd', title: 'E-commerce Landing Page Spec', description: 'Integrate product imagery into high-converting storefront layout.' }
    ],
    verificationChecks: [
      { id: 'vc_boundary', title: 'Execution Boundary Notice', description: 'PromptLas creates the visual direction prompt; execution occurs in your designated image model or studio setup.', category: 'limitations' },
      { id: 'vc_branding', title: 'Trademark Independence', description: 'Verify that proprietary brand logos are not requested unless the user owns the brand.', category: 'standards' }
    ]
  },

  // 6. CREATIVE: REFERENCE-PRESERVING IMAGE EDITING
  {
    id: 'creative_image_edit',
    title: 'Reference-Preserving Photo & Image Editing',
    domainId: 'arts_design_media',
    domainName: 'Arts, design, media and entertainment',
    group: 'Society, law & culture',
    discipline: 'Photography & Image Work',
    summary: 'Direct an AI model to edit an existing image with precision: explicitly separate what MUST CHANGE from what MUST BE PRESERVED.',
    outcome: 'A dual-action image modification prompt that protects critical identity/geometry while making designated changes.',
    skillLevel: 'Beginner',
    riskClass: 'R0',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Preserve-and-Change Image Edit Prompt',
    modality: 'image',
    primaryIntent: 'Edit / improve',
    aliases: ['photo edit', 'inpaint', 'background replacement', 'image modify', 'preserve face', 'swap background', 'relight'],
    reviewerRole: 'Senior Digital Retoucher & AI Artist',
    lastReviewedDate: '2026-03-11',
    missingInputRules: {
      criticalFields: ['what_to_change', 'what_to_preserve'],
      fallbackGuidance: 'If either the change list or preserve list is empty, PromptLas requires clarifying boundaries to prevent accidental destruction of the reference image.'
    },
    fields: [
      {
        id: 'what_to_change',
        label: 'What EXACTLY needs to be changed or added?',
        technicalTerm: 'Modification Delta Scope',
        eli5: 'Be specific about what changes: background, lighting, clothing color, season, or an object removal.',
        example: 'Replace the busy office background with a serene modern minimalist bookshelf with soft bokeh; adjust lighting to warm golden hour',
        type: 'textarea',
        step: 'start',
        required: true,
        placeholder: 'e.g., Replace background with an airy Scandinavian kitchen, change sweater color to deep navy',
        promptImpact: 'Forms the core instruction delta in the modification prompt.'
      },
      {
        id: 'what_to_preserve',
        label: 'What MUST STAY EXACTLY AS IT IS?',
        technicalTerm: 'Identity & Geometric Preservation Invariants',
        eli5: 'Specify elements that must not shift: person face features, product logo, garment shape, hand position.',
        example: 'Keep the person facial features, skin tone, hairstyle, glasses, and natural smile completely identical',
        type: 'textarea',
        step: 'start',
        required: true,
        placeholder: 'e.g., Preserve the exact product shape, label text, bottle proportions, and brand logo with 100% fidelity',
        promptImpact: 'Forms the mandatory preservation constraints section.'
      },
      {
        id: 'change_intensity',
        label: 'How strong should the transformation be?',
        technicalTerm: 'Denoising / Inpainting Weight Strength',
        eli5: 'Subtle touch-up keeps the scene mostly intact; complete reimagination keeps only the core subject.',
        example: 'Subject-preserving background overhaul (High background change, zero subject change)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Instructs the image tool on masking strictness and image-to-image weight.',
        options: [
          { label: 'Subject-preserving background overhaul (Subject locked, environment replaced)', value: 'bg_replace', isDefault: true },
          { label: 'Subtle relighting & color correction (Environment geometry preserved)', value: 'subtle_relight' },
          { label: 'Object removal or addition only (Targeted inpainting patch)', value: 'inpainting_patch' }
        ]
      },
      {
        id: 'lighting_blend',
        label: 'How should the subject blend with the new background?',
        technicalTerm: 'Edge Refinement & Rim Light Integration',
        eli5: 'New backgrounds look fake unless the light falling on the subject matches the new environment.',
        example: 'Cast realistic soft directional warm light onto subject edges matching new background sun angle',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., Match color temperature and cast soft shadow on the ground plane',
        promptImpact: 'Applies photorealistic rim lighting and ambient occlusion instructions.'
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'creative_product_photography', title: 'Product & Commercial Photography Studio Brief', description: 'Design full scenes from scratch.' }
    ],
    verificationChecks: [
      { id: 'vc_conflict', title: 'Preserve vs Change Conflict', description: 'Ensure the change list and preserve list do not contradict (e.g. changing face vs preserving face).', category: 'evidence' },
      { id: 'vc_privacy', title: 'Local Preview Privacy', description: 'Uploaded reference photos stay strictly in the browser memory as local object URLs with zero server transmission.', category: 'limitations' }
    ]
  },

  // 7. BUSINESS: STARTUP IDEA VALIDATION & PRD GENERATOR
  {
    id: 'business_startup_prd',
    title: 'Startup Problem Validation & MVP PRD',
    domainId: 'business_entrepreneurship',
    domainName: 'Business, management and entrepreneurship',
    group: 'Economy & work',
    discipline: 'Product Management & Entrepreneurship',
    summary: 'Turn an early idea into an evidence-based Product Requirements Document (PRD), user interview scripts, and a de-risked MVP scope.',
    outcome: 'A complete PRD with customer problem statement, user personas, MVP scope cuts, acceptance criteria, and metric definitions.',
    skillLevel: 'Beginner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Executive Product Requirements Document (PRD)',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['prd', 'startup', 'product requirements', 'mvp', 'customer discovery', 'pricing', 'user stories', 'business validation'],
    reviewerRole: 'VP of Product / Venture Partner',
    lastReviewedDate: '2026-03-13',
    missingInputRules: {
      criticalFields: ['customer_problem', 'target_user'],
      fallbackGuidance: 'If customer evidence is missing, the prompt generates a Customer Discovery Interview Plan before jumping into feature specifications.'
    },
    fields: [
      {
        id: 'business_stage',
        label: 'What stage is your project currently in?',
        technicalTerm: 'Product Lifecycle Phase',
        eli5: 'Are you validating whether people have this problem, or specifying features for engineers to build?',
        example: 'Pre-build MVP scoping (Need crisp PRD to hand to engineers)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Tunes the output between problem-validation experiments and technical feature specs.',
        options: [
          { label: 'Problem Validation & The Mom Test interview script', value: 'problem_validation' },
          { label: 'Pre-build MVP Product Requirements Document (PRD)', value: 'mvp_prd', isDefault: true },
          { label: 'Pricing & Unit Economics hypothesis testing', value: 'pricing_model' },
          { label: 'Go-to-Market launch experiment plan', value: 'gtm_launch' }
        ]
      },
      {
        id: 'target_user',
        label: 'Who is the specific target user or customer?',
        technicalTerm: 'Customer Segment & ICP',
        eli5: 'Avoid "everyone". Name their specific role, company size, or life situation.',
        example: 'Solo freelance web designers managing 3-8 active client projects simultaneously',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., Junior structural engineers in consulting firms with 10-50 staff',
        promptImpact: 'Anchors the user persona and jobs-to-be-done context.'
      },
      {
        id: 'customer_problem',
        label: 'What painful problem are they struggling with today?',
        technicalTerm: 'Core Problem Statement & Existing Workaround',
        eli5: 'What takes them too long, costs money, or causes mistakes? How do they handle it right now?',
        example: 'They spend 6+ hours weekly chasing clients for content feedback across messy WhatsApp and email threads with lost versions',
        type: 'textarea',
        step: 'start',
        required: true,
        placeholder: 'e.g., Calculating compaction reports requires manually retyping Excel tables into Word templates, causing transposition errors...',
        promptImpact: 'Forms the Problem Statement and Why Now rationale in the PRD.'
      },
      {
        id: 'proposed_solution',
        label: 'What is your proposed solution or core feature?',
        technicalTerm: 'Value Proposition & Solution Hypothesis',
        eli5: 'In 1-2 sentences, what does the software or service actually do to solve that pain?',
        example: 'A lightweight visual feedback canvas where clients click on a live website to leave pinned comments without making an account',
        type: 'textarea',
        step: 'fit',
        required: true,
        placeholder: 'e.g., A browser-first prompt builder with domain question banks and missing input checks...',
        promptImpact: 'Defines the solution overview and core user journeys.'
      },
      {
        id: 'out_of_scope_cuts',
        label: 'What is strictly OUT OF SCOPE for v1 (to avoid bloat)?',
        technicalTerm: 'Non-Goals & MVP Feature Boundary',
        eli5: 'Good PRDs declare what will NOT be built for launch (e.g. no mobile app, no custom billing, no team roles).',
        example: 'No user accounts/passwords, no payment billing in v1, no video comments, no Jira integration',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., No multi-tenancy, no native iOS app, no AI chat assistant in v1',
        promptImpact: 'Creates an explicit Non-Goals section preventing engineering scope creep.'
      },
      {
        id: 'primary_metric',
        label: 'What single metric proves this product is working?',
        technicalTerm: 'North Star Metric & Acceptance Threshold',
        eli5: 'Is it weekly active users, time saved per task, or conversion rate?',
        example: 'Percentage of invites where client leaves feedback within 24 hours (target > 70%)',
        type: 'text',
        step: 'finetune',
        required: false,
        placeholder: 'e.g., Completed prompt export per session (target > 60%)',
        promptImpact: 'Sets the quantifiable success criteria in the executive summary.'
      }
    ],
    relatedWorkflows: [
      { type: 'next_step', workflowId: 'computing_qa_testing', title: 'Software QA Strategy & Test Cases', description: 'Derive test cases directly from PRD user stories.' },
      { type: 'companion', workflowId: 'finance_equity_valuation', title: 'Unit Economics & Financial Pro-Forma', description: 'Model revenue runway and CAC payback period.' }
    ],
    verificationChecks: [
      { id: 'vc_anti_hype', title: 'Separation of Fact vs Assumption', description: 'Ensure unverified market estimates are marked as hypotheses, not proven facts.', category: 'assumptions' },
      { id: 'vc_actionable', title: 'Testable Acceptance Criteria', description: 'Verify user stories include testable Given-When-Then criteria rather than vague aspirations.', category: 'evidence' }
    ]
  },

  // 8. FINANCE: EQUITY RESEARCH & VALUATION FRAMEWORK
  {
    id: 'finance_equity_valuation',
    title: 'Equity Research & Valuation Framework',
    domainId: 'finance_markets',
    domainName: 'Finance, accounting, banking and insurance',
    group: 'Economy & work',
    discipline: 'Corporate Finance & Investment Research',
    summary: 'Build a rigorous equity research framework: Discounted Cash Flow (DCF) assumptions, competitive moats, sensitivity matrices, and risk factors.',
    outcome: 'An educational fundamental research prompt with explicit valuation formulas, margin of safety, and strict disclaimer of personalized financial advice.',
    skillLevel: 'Practitioner',
    riskClass: 'R2',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Fundamental Equity Research & Valuation Framework',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ['dcf', 'valuation', 'stock analysis', 'equity research', 'discounted cash flow', 'investing', 'pe ratio', 'financial model'],
    reviewerRole: 'CFA Charterholder / Senior Equity Research Analyst',
    lastReviewedDate: '2026-03-09',
    missingInputRules: {
      criticalFields: ['ticker_company', 'valuation_method'],
      fallbackGuidance: 'If specific financial statement numbers are unavailable, the prompt focuses on educational methodology and sensitivity ranges without inventing earnings figures.'
    },
    fields: [
      {
        id: 'industry_sector',
        label: 'Industry Sector & Domain Context (Optional)',
        technicalTerm: 'Sector Classification & Peer Benchmarking',
        eli5: 'Optional: Choose the industry sector to configure peer valuation multiples (e.g. EV/EBITDA vs P/B) and operating metrics.',
        example: 'Economy & work → Finance, accounting, banking and insurance → Equity Research & Valuation',
        type: 'subject_picker',
        step: 'start',
        required: false,
        promptImpact: 'Grounds financial multiples and margin benchmarks in specific sector metrics.'
      },
      {
        id: 'research_objective',
        label: 'What is your primary investment research objective?',
        technicalTerm: 'Research Mandate',
        eli5: 'Are you evaluating an intrinsic DCF valuation, comparing peer multiples, or conducting a competitive moat audit?',
        example: 'Build an intrinsic Discounted Cash Flow (DCF) framework with 3-case scenario modeling',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures the valuation modeling approach and analytical depth.',
        options: [
          { label: 'Discounted Cash Flow (DCF) Intrinsic Value Model', value: 'dcf_model', isDefault: true },
          { label: 'Comparable Company Multiple Benchmarking (EV/EBITDA, P/E)', value: 'comps_benchmarking' },
          { label: '10-K Qualitative Moat & Risk Factor Audit', value: 'moat_risk_audit' },
          { label: 'Educational: Explain how to value this business model', value: 'educational_explainer' }
        ]
      },
      {
        id: 'ticker_company',
        label: 'What is the company name, ticker, and exchange?',
        technicalTerm: 'Entity Ticker & Primary Listing',
        eli5: 'Name the company and stock exchange so fiscal years and currency are unambiguous.',
        example: 'Apple Inc. (AAPL: NASDAQ) or HDFC Bank (HDFCBANK: NSE)',
        type: 'text',
        step: 'start',
        required: true,
        placeholder: 'e.g., Microsoft (MSFT: NASDAQ) or Siemens AG (SIE: ETR)',
        promptImpact: 'Identifies the business entity and primary reporting currency.'
      },
      {
        id: 'valuation_horizon',
        label: 'What is your forecast time horizon?',
        technicalTerm: 'Forecast Projection Period',
        eli5: 'Most DCFs project 5 or 10 years of explicit cash flows before calculating a terminal value.',
        example: '5-year explicit projection followed by 2.5% perpetual growth terminal value',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Structures projection tables and terminal value assumptions.',
        options: [
          { label: '5-Year explicit forecast + Perpetual Growth terminal', value: '5_year_terminal', isDefault: true },
          { label: '10-Year explicit forecast (High-growth / cyclical firms)', value: '10_year_terminal' },
          { label: 'Normalized trailing 12-month (LTM) peer multiples', value: 'ltm_multiples' }
        ]
      },
      {
        id: 'key_assumptions',
        label: 'What key assumptions or known data points do you have?',
        technicalTerm: 'WACC, Revenue CAGR, and Operating Margin Inputs',
        eli5: 'Enter cost of capital (WACC), expected growth rate, or operating margins. If unknown, state "Provide sensible sensitivity table".',
        example: 'WACC = 8.5%, Revenue CAGR = 12%, Terminal growth = 2.5%, Operating margin = 28%',
        type: 'textarea',
        step: 'fit',
        required: false,
        placeholder: 'e.g., WACC estimated at 9.0%, revenue growth slowing from 15% to 6%, CapEx at 5% of sales',
        promptImpact: 'Injected into the financial calculation assumptions table.'
      },
      {
        id: 'downside_risks',
        label: 'What specific business or macro risks should be tested?',
        technicalTerm: 'Downside Stress-Testing Scenarios',
        eli5: 'What could break the thesis? Regulatory changes, interest rate hikes, margin compression, or customer loss?',
        example: 'Supply chain disruption in overseas fab facilities and regulatory scrutiny of App Store take-rate',
        type: 'text',
        step: 'finetune',
        required: false,
        placeholder: 'e.g., Currency volatility, debt refinancing at higher rates, new market entrant pricing pressure',
        promptImpact: 'Requires a dedicated Bear-case downside stress test section in the report.'
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'business_startup_prd', title: 'Startup Unit Economics & PRD', description: 'Analyze early-stage product margins and revenue models.' }
    ],
    verificationChecks: [
      { id: 'vc_disclaimer', title: 'Non-Advisory Guardrail', description: 'Prompt must state this is an educational modeling exercise and not personalized investment advice.', category: 'limitations' },
      { id: 'vc_stale_data', title: 'Source Freshness Notice', description: 'Must declare that current stock prices and financial statement numbers must be verified with official SEC/exchange filings.', category: 'standards' }
    ]
  },

  // 9. EDUCATION: EXAM PREPARATION & ACTIVE RECALL TUTOR
  {
    id: 'education_exam_tutor',
    title: 'Exam Preparation & Socratic Active-Recall Tutor',
    domainId: 'education_exams',
    domainName: 'Education, teaching and exam preparation',
    group: 'Society, law & culture',
    discipline: 'Education & Study Methods',
    summary: 'Build a rigorous study plan, active recall flashcards, diagnostic mock quizzes, or step-by-step worked examples for any exam.',
    outcome: 'An interactive Socratic tutor prompt that quizzes the user one question at a time, identifies misconceptions, and forces active recall.',
    skillLevel: 'Beginner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Interactive Socratic Study Session & Quiz',
    modality: 'text',
    primaryIntent: 'Practise / drill',
    aliases: ['study', 'exam', 'quiz', 'flashcards', 'tutor', 'active recall', 'feynman technique', 'revision'],
    reviewerRole: 'Master Educator & Curriculum Specialist',
    lastReviewedDate: '2026-03-15',
    missingInputRules: {
      criticalFields: ['subject_topic', 'exam_level'],
      fallbackGuidance: 'If the syllabus or difficulty is unspecified, the tutor begins with a 3-question diagnostic baseline quiz.'
    },
    fields: [
      {
        id: 'study_mode',
        label: 'How do you want the AI tutor to interact with you?',
        technicalTerm: 'Pedagogical Interaction Paradigm',
        eli5: 'Do you want to be quizzed one question at a time, see a worked problem explained step-by-step, or generate spaced flashcards?',
        example: 'Socratic Quiz: Ask me one question at a time, wait for my response, and critique my answer',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Controls conversational pacing and prevents the AI from blurting out all answers at once.',
        options: [
          { label: 'Socratic Quiz: One question at a time, wait for me to answer', value: 'socratic_quiz', isDefault: true },
          { label: 'Worked Example: Explain a tricky problem step-by-step with intuition', value: 'worked_example' },
          { label: 'Flashcard Generator: Create Anki-style active recall Q&A pairs', value: 'flashcards' },
          { label: 'Misconception Buster: Spot common mistakes students make on this topic', value: 'misconceptions' }
        ]
      },
      {
        id: 'subject_topic',
        label: 'What subject and specific topic are you studying?',
        technicalTerm: 'Curricular Subject & Specific Topic Focus',
        eli5: 'Choose your domain and subject from the guided hierarchy, or enter custom topics at any level.',
        example: 'Knowledge & science → Physical sciences → Applied Physics & Mechanics → Worked physics derivation',
        type: 'subject_picker',
        step: 'start',
        required: true,
        placeholder: 'e.g., Organic Chemistry: SN1 vs SN2 reaction mechanisms and solvent effects',
        promptImpact: 'Forms the topical scope and question bank domain.'
      },
      {
        id: 'exam_level',
        label: 'What level or specific exam are you preparing for?',
        technicalTerm: 'Academic Rigor & Target Exam Benchmark',
        eli5: 'High school, undergraduate university, or professional credential (CFA, FE/PE, MCAT, AWS)?',
        example: 'Undergraduate University Sophomore Level (or FE Civil Engineering Exam)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Sets difficulty depth, mathematical formalism, and expected vocabulary.',
        options: [
          { label: 'Undergraduate University / College Degree level', value: 'undergrad_univ', isDefault: true },
          { label: 'Professional Licensure / Certification (FE, PE, CFA, AWS, PMP)', value: 'professional_cert' },
          { label: 'High School / AP / IB / A-Level', value: 'high_school' },
          { label: 'Self-directed adult learner / Beginner foundation', value: 'self_learner' }
        ]
      },
      {
        id: 'hardest_concept',
        label: 'What is the hardest part of this topic for you?',
        technicalTerm: 'Student Pain Point & Conceptual Friction',
        eli5: 'Mention what usually trips you up so the tutor focuses its drills there.',
        example: 'I get confused deciding whether a polar aprotic solvent favors SN1 or SN2',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., Deriving the formulas without memorizing, or identifying which theorem applies',
        promptImpact: 'Tells the AI to generate targeted diagnostic traps addressing this specific hurdle.'
      },
      {
        id: 'tone_style',
        label: 'What tutoring style works best for you?',
        technicalTerm: 'Feedback Temperament & Tone',
        eli5: 'Encouraging and patient, direct and rigorous, or practical and real-world oriented?',
        example: 'Direct and rigorous: do not sugarcoat mistakes, demand clear derivations',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Shapes the persona feedback loop and error correction guidance.',
        options: [
          { label: 'Direct & Rigorous: Point out gaps immediately, push for precise terms', value: 'rigorous', isDefault: true },
          { label: 'Socratic & Patient: Use analogies and guided questions to help me realize', value: 'patient_analogy' },
          { label: 'Exam-Cram Focus: Prioritize highest-frequency tested question patterns', value: 'exam_cram' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'universal_builder', title: 'Universal Topic Synthesizer', description: 'Explore adjacent subjects or create a study schedule.' }
    ],
    verificationChecks: [
      { id: 'vc_academic_integrity', title: 'Academic Integrity Rule', description: 'Tutor must facilitate learning and active practice; it must never offer to take a live proctored exam or write cheat sheets.', category: 'standards' },
      { id: 'vc_socratic', title: 'One Question at a Time', description: 'Ensure the prompt explicitly forbids the AI from solving all questions at once.', category: 'limitations' }
    ]
  },

  // 10. TIER 3: UNIVERSAL STARTER BUILDER (Any topic, any intent)
  {
    id: 'universal_builder',
    title: 'Universal Task Builder ("I don\'t know what it\'s called")',
    domainId: 'universal',
    domainName: 'Universal / All Domains',
    group: 'Personal life & situations',
    discipline: 'General Purpose & Cross-Discipline',
    summary: 'The universal fallback builder for any task: explain your goal in ordinary words, state what you have, and get a structured, professional prompt.',
    outcome: 'A crisp, well-structured prompt with task context, constraints, required deliverable, and self-verification checks.',
    skillLevel: 'Beginner',
    riskClass: 'R0',
    contentTier: 'T3',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Task Instruction & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Create / design',
    aliases: ['universal', 'general prompt', 'any task', 'beginner builder', 'custom prompt', 'help me build a prompt'],
    reviewerRole: 'PromptLas Core Systems Architect',
    lastReviewedDate: '2026-03-15',
    missingInputRules: {
      criticalFields: ['user_goal', 'desired_output'],
      fallbackGuidance: 'If the goal is brief, PromptLas structures the prompt to ask clarifying questions before completing work.'
    },
    fields: [
      {
        id: 'subject_hierarchy',
        label: 'Optional: Choose domain & task from Atlas directory',
        technicalTerm: 'Taxonomy Classification & Domain Hierarchy',
        eli5: 'Optional: If you want structured taxonomy guidance, select from the 39-domain hierarchy below, or describe your task in everyday words in the next field.',
        example: 'Technology & engineering → Computing and software → DevOps, SRE & Cloud Native',
        type: 'subject_picker',
        step: 'start',
        required: false,
        promptImpact: 'Grounds your request in domain standards and industry conventions.'
      },
      {
        id: 'user_goal',
        label: 'In plain language, what are you trying to accomplish?',
        technicalTerm: 'Primary Objective',
        eli5: 'Describe what you need in everyday words. You do not need to know technical jargon.',
        example: 'I need to write a polite but firm email to a client who is two weeks late paying their invoice',
        type: 'textarea',
        step: 'start',
        required: true,
        placeholder: 'e.g., I want to compare three different database options for our new mobile app, or plan a 3-day team offsite agenda...',
        promptImpact: 'Defines the primary mission statement of the prompt.'
      },
      {
        id: 'available_context',
        label: 'What background facts, data, or notes do you have?',
        technicalTerm: 'Supplied Context & Prior Art',
        eli5: 'Share any notes, constraints, numbers, or rules that the AI must follow.',
        example: 'Invoice #1042 was sent 30 days ago, total is $4,200, contract says 1.5% late fee per month after 14 days overdue',
        type: 'textarea',
        step: 'start',
        required: false,
        placeholder: 'e.g., We have a PostgreSQL database with 200k users, team has 4 engineers, budget is under $500/month...',
        promptImpact: 'Provides the factual bedrock so the AI does not have to invent details.'
      },
      {
        id: 'desired_output',
        label: 'What should the finished output look like?',
        technicalTerm: 'Deliverable Specification & Structure',
        eli5: 'An email draft, a bulleted comparison table, code snippets with comments, or a checklist?',
        example: 'A ready-to-send professional email with two alternative subject lines and a clear call to action',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Specifies the structure, formatting, and sections of the response.',
        options: [
          { label: 'Step-by-step action plan or checklist', value: 'checklist', isDefault: true },
          { label: 'Ready-to-use text / email / memo draft', value: 'text_draft' },
          { label: 'Side-by-side comparison table with trade-offs', value: 'comparison_table' },
          { label: 'Detailed technical specification or code outline', value: 'technical_spec' },
          { label: 'Socratic explanation for beginners with analogies', value: 'socratic_explainer' }
        ]
      },
      {
        id: 'constraints_rules',
        label: 'Are there things the AI should avoid or strictly follow?',
        technicalTerm: 'Negative Constraints & Style Rules',
        eli5: 'Word count limits, tone restrictions, things to avoid, or privacy guidelines.',
        example: 'Keep under 150 words, do not sound aggressive or threatening, maintain cordial relationship for future work',
        type: 'text',
        step: 'fit',
        required: false,
        placeholder: 'e.g., Keep under 300 words, no corporate jargon, do not invent statistics',
        promptImpact: 'Creates negative boundaries and style constraints.'
      },
      {
        id: 'tone_voice',
        label: 'What tone should the response have?',
        technicalTerm: 'Voice & Register',
        eli5: 'Professional and crisp, casual and friendly, or academic and objective?',
        example: 'Direct, polite, and confident',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Shapes diction, phrasing, and communication tone.',
        options: [
          { label: 'Crisp & Professional (Business standard)', value: 'professional', isDefault: true },
          { label: 'Warm & Approachable (Friendly, conversational)', value: 'friendly' },
          { label: 'Rigorous & Objective (Academic, analytical)', value: 'academic' },
          { label: 'Concise & Bullet-heavy (Executive summary style)', value: 'executive_bullet' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'business_startup_prd', title: 'Startup Idea Validation & PRD', description: 'Explore structured business workflows.' },
      { type: 'companion', workflowId: 'computing_qa_testing', title: 'Software QA & Test Automation Strategy', description: 'Explore software testing.' }
    ],
    verificationChecks: [
      { id: 'vc_goal', title: 'Clear Goal Statement', description: 'Ensure the goal statement is specific and measurable before copying.', category: 'evidence' },
      { id: 'vc_privacy', title: 'No Private Secrets', description: 'Double check that personal passwords, credit card numbers, or internal credentials were not pasted.', category: 'limitations' }
    ]
  }
];
