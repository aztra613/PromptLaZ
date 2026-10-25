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
    recipes: [
      {
        id: 'highway_subgrade_98',
        title: '🛣️ Highway Subgrade 98% Modified Proctor',
        description: 'High-energy compaction check for highway pavement subgrade under ASTM D1557.',
        badge: 'Highway & Pavement',
        presetAnswers: {
          task_focus: 'proctor_compaction',
          test_type: 'modified_proctor',
          soil_description: 'gw_crushed_base',
          unit_system: 'si_metric',
          measured_values: 'mdd_high_density',
          compaction_spec: '98_percent_heavy',
          groundwater_context: 'deep_dry_table',
          required_deliverable: 'formal_memo'
        }
      },
      {
        id: 'clay_settlement_consolidation',
        title: '📉 Stiff Clay 1D Consolidation Settlement',
        description: 'Estimate long-term primary consolidation settlement under structural footing.',
        badge: 'Foundation Settlement',
        presetAnswers: {
          task_focus: 'consolidation_settlement',
          test_type: 'oedometer_consolidation',
          soil_description: 'ch_fat_clay',
          unit_system: 'si_metric',
          measured_values: 'mdd_expansive_clay',
          compaction_spec: '95_percent_std',
          groundwater_context: 'shallow_submerged',
          required_deliverable: 'calculation_brief'
        }
      },
      {
        id: 'footing_bearing_silty_sand',
        title: '🧱 Shallow Footing Bearing Capacity on Silty Sand',
        description: 'Bearing capacity verification and allowable stress check for building foundation.',
        badge: 'Building Footing',
        presetAnswers: {
          task_focus: 'bearing_capacity',
          test_type: 'shear_testing',
          soil_description: 'sm_silty_sand',
          unit_system: 'si_metric',
          measured_values: 'mdd_standard_lab',
          compaction_spec: '95_percent_std',
          groundwater_context: 'seasonal_fluctuation',
          required_deliverable: 'formal_memo'
        }
      }
    ],
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
        example: 'Lean Clay with sand (CL - medium plasticity, typical cohesive fill)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Provides the physical soil matrix characteristics for parameter sanity checking.',
        options: [
          { label: 'Lean Clay with sand (CL — medium plasticity, standard cohesive fill)', value: 'cl_lean_clay', isDefault: true },
          { label: 'Fat / High-Plasticity Clay (CH — expansive soil prone to swelling & shrinkage)', value: 'ch_fat_clay' },
          { label: 'Well-Graded Sand with gravel (SW — excellent free-draining granular structural fill)', value: 'sw_well_graded_sand' },
          { label: 'Silty Sand / Sandy Silt (SM/ML — moisture-sensitive road subgrade)', value: 'sm_silty_sand' },
          { label: 'Crushed Base Aggregate (GW/GP — high bearing capacity road base)', value: 'gw_crushed_base' },
          { label: 'Organic Silt / Peat (OL/OH/Pt — highly compressible, unsuitable for structural fill)', value: 'pt_organic_peat' }
        ]
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
        technicalTerm: 'Empirical Laboratory Data Points Profile',
        eli5: 'Pick standard test point benchmarks or enter custom lab measurements.',
        example: 'Standard Lab Results: MDD = 18.4 kN/m³, OMC = 13.5%, In-situ dry density = 17.6 kN/m³, Field moisture = 14.2%',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Injected directly into the input data section. If omitted, triggers missing-data safeguards.',
        options: [
          { label: 'Standard Cohesive Fill: MDD = 18.4 kN/m³, OMC = 13.5%, In-situ dry density = 17.6 kN/m³, Field moisture = 14.2%', value: 'mdd_standard_lab', isDefault: true },
          { label: 'High-Density Crushed Base: MDD = 21.2 kN/m³, OMC = 8.5%, In-situ = 20.8 kN/m³, Field moisture = 8.8%', value: 'mdd_high_density' },
          { label: 'Expansive Fat Clay: MDD = 15.8 kN/m³, OMC = 21.0%, LL = 62%, PL = 28%, in-situ moisture = 22.4%', value: 'mdd_expansive_clay' },
          { label: 'I do not have test numbers yet (Generate borehole sampling & lab test plan)', value: 'mdd_untested_plan' }
        ]
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
        example: 'Deep water table (> 5m depth, completely dry excavation)',
        type: 'select',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        promptImpact: 'Inserts buoyancy, effective stress, and dewatering considerations.',
        options: [
          { label: 'Deep water table (> 5m depth — completely dry excavation)', value: 'deep_dry_table', isDefault: true },
          { label: 'Shallow water table (Near foundation base — buoyant uplift active)', value: 'shallow_submerged' },
          { label: 'Seasonal fluctuating table (Capillary rise & softening risk)', value: 'seasonal_fluctuation' },
          { label: 'Perched water lens / seepage requiring active sump dewatering', value: 'perched_seepage' }
        ]
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
    recipes: [
      {
        id: 'rc_beam_continuous',
        title: '🏢 6m Commercial Continuous RC Beam Check (ACI 318)',
        description: 'Standard commercial building floor beam capacity and bar spacing check.',
        badge: 'Beam Flexure & Shear',
        presetAnswers: {
          member_type: 'rc_beam',
          governing_code: 'aci_318_19',
          material_specification: 'c25_30_fe500',
          geometry_spans: 'beam_300_600_6m',
          applied_loads: 'office_commercial_loads',
          detailing_concerns: 'standard_sls_deflection'
        }
      },
      {
        id: 'rc_column_highrise',
        title: '🏗️ High-Rise Transfer Column Biaxial Bending (Eurocode 2)',
        description: 'Axial compression and moment interaction check under EN 1992-1-1.',
        badge: 'Column Compression',
        presetAnswers: {
          member_type: 'rc_column',
          governing_code: 'eurocode_2',
          material_specification: 'c30_37_fe500',
          geometry_spans: 'column_400_400_3m6',
          applied_loads: 'heavy_retail_loads',
          detailing_concerns: 'seismic_ductile_detailing'
        }
      },
      {
        id: 'steel_portal_rafter',
        title: '🏭 Industrial Portal Frame Steel Member (AISC 360)',
        description: 'Lateral torsional buckling and slenderness evaluation under AISC 360-22.',
        badge: 'Steel Framing',
        presetAnswers: {
          member_type: 'steel_column',
          governing_code: 'aisc_360_22',
          material_specification: 'steel_s355_a572',
          geometry_spans: 'steel_w14_90_4m',
          applied_loads: 'roof_wind_loads',
          detailing_concerns: 'slender_buckling_pdelta'
        }
      }
    ],
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
        example: 'C25/30 Concrete + Fe 500 Rebar (Standard building construction)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Provides baseline constitutive material constants for capacity calculations.',
        options: [
          { label: 'C25/30 Concrete + Fe 500 / Gr 60 Rebar (Standard commercial & residential)', value: 'c25_30_fe500', isDefault: true },
          { label: 'C30/37 Concrete + Fe 500 / Gr 60 Rebar (High-rise columns & transfer slabs)', value: 'c30_37_fe500' },
          { label: 'C20/25 Concrete + Fe 415 Rebar (Low-rise residential / light loads)', value: 'c20_25_fe415' },
          { label: 'C40/50 High-Strength Concrete + Fe 550D Rebar (Seismic & marine infrastructure)', value: 'c40_50_fe550' },
          { label: 'Structural Steel S355 / ASTM A572 Gr 50 (Standard structural steel framing)', value: 'steel_s355_a572' },
          { label: 'Structural Steel S275 / ASTM A36 (Light commercial steel)', value: 'steel_s275_a36' }
        ]
      },
      {
        id: 'geometry_spans',
        label: 'What are the member geometry and span lengths?',
        technicalTerm: 'Cross-section Dimensions & Boundary Conditions Profile',
        eli5: 'Choose standard architectural dimensions or custom cross-section spans.',
        example: 'Standard Beam: b = 300 mm, h = 600 mm, clear span L = 6.0 m, simply supported',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets geometric stiffness and effective depth in moment calculations.',
        options: [
          { label: 'Standard Floor Beam: b = 300 mm, h = 600 mm, clear span L = 6.0 m, simply supported', value: 'beam_300_600_6m', isDefault: true },
          { label: 'Heavy Transfer Girder: b = 450 mm, h = 900 mm, clear span L = 8.5 m, continuous supports', value: 'beam_450_900_8m5' },
          { label: 'Square RC Column: 400 mm x 400 mm, unsupported height H = 3.6 m, braced frame', value: 'column_400_400_3m6' },
          { label: 'Two-Way Flat Slab: Thickness h = 200 mm, panel 6.5 m x 6.5 m, continuous', value: 'slab_200_6m5' },
          { label: 'Structural Steel Column: W14x90 (HEB 360), unsupported length L = 4.2 m, pinned base', value: 'steel_w14_90_4m' }
        ]
      },
      {
        id: 'applied_loads',
        label: 'What are the dead, live, and environmental loads?',
        technicalTerm: 'Unfactored Service Actions & Combinations Profile',
        eli5: 'Choose standard occupancy load combinations or specify custom service loads.',
        example: 'Commercial Office: Superimposed DL = 2.5 kPa, Live Load = 3.0 kPa, tributary width = 4.0 m',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Calculates factored ultimate moment (Mu) and factored shear (Vu).',
        options: [
          { label: 'Commercial Office: Superimposed DL = 2.5 kPa, Live Load = 3.0 kPa, tributary width = 4.0 m', value: 'office_commercial_loads', isDefault: true },
          { label: 'Heavy Storage / Retail: Superimposed DL = 3.5 kPa, Live Load = 5.0 kPa, tributary width = 5.0 m', value: 'heavy_retail_loads' },
          { label: 'Residential Apartment: Superimposed DL = 1.5 kPa, Live Load = 2.0 kPa, tributary width = 3.5 m', value: 'residential_loads' },
          { label: 'Roof Terrace with Wind: DL = 2.0 kPa, Live Load = 1.5 kPa, Wind uplift = 1.8 kPa', value: 'roof_wind_loads' }
        ]
      },
      {
        id: 'detailing_concerns',
        label: 'Are there specific detailing or serviceability checks needed?',
        technicalTerm: 'Serviceability Limit States (SLS) & Detailing Rules',
        eli5: 'Check minimum cover for durability, crack width limit (e.g. 0.3 mm), or long-term creep deflection.',
        example: 'Standard SLS: Deflection L/250, crack width ≤ 0.3mm, 25mm nominal cover',
        type: 'select',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        promptImpact: 'Adds explicit serviceability limit state requirements to the verification.',
        options: [
          { label: 'Standard SLS: Deflection limit L/250, crack width ≤ 0.3 mm, 25 mm cover', value: 'standard_sls_deflection', isDefault: true },
          { label: 'Severe Marine Exposure: 50 mm cover, crack width ≤ 0.2 mm, sulfate resistance', value: 'severe_marine_cover' },
          { label: 'High Seismic Ductility: Special moment frame confinement, d/4 stirrup spacing', value: 'seismic_ductile_detailing' },
          { label: '2-Hour Fire Rating: Minimum 35 mm cover and minimum 200 mm web thickness', value: 'fire_rating_2hr' },
          { label: 'Slender Member Buckling: Second-order (P-Delta) slenderness effects', value: 'slender_buckling_pdelta' }
        ]
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
    reviewerRole: 'Lead SRE / Platform Architect',
    lastReviewedDate: '2026-03-12',
    missingInputRules: {
      criticalFields: ['k8s_scenario', 'target_environment', 'workload_type'],
      fallbackGuidance: 'If specific log traces or image details are missing, the prompt instructs the AI to generate a diagnostic isolation tree rather than inventing dummy infrastructure.'
    },
    recipes: [
      {
        id: 'k8s_prod_microservice',
        title: '🚀 Production Microservice (REST + Ingress + TLS)',
        description: 'Production-ready Deployment, ClusterIP Service, Nginx Ingress, and resource guarantees.',
        badge: 'Production Manifest',
        presetAnswers: {
          k8s_scenario: 'new_deployment',
          target_environment: 'aws_eks',
          workload_type: 'stateless_microservice',
          resource_limits: 'std_microservice_limits',
          health_probes: 'http_get_standard',
          ingress_networking: 'nginx_certmanager',
          secrets_management: 'external_secrets',
          incident_symptoms: 'no_incident'
        }
      },
      {
        id: 'k8s_pod_crash_oom',
        title: '🚨 CrashLoopBackOff & OOMKilled Triage (Exit 137)',
        description: 'Step-by-step diagnostic runbook to isolate memory leaks and probe failure murders.',
        badge: 'Incident Runbook',
        presetAnswers: {
          k8s_scenario: 'pod_incident',
          target_environment: 'aws_eks',
          workload_type: 'stateless_microservice',
          resource_limits: 'burst_limits',
          health_probes: 'startup_and_liveness',
          ingress_networking: 'internal_clusterip',
          secrets_management: 'k8s_secret',
          incident_symptoms: 'oomkilled_137'
        }
      },
      {
        id: 'k8s_zerotrust_tunnel',
        title: '🔒 Zero-Trust Cloudflare Tunnel API Worker',
        description: 'Private origin service without public IP exposures or incoming firewall openings.',
        badge: 'Zero-Trust Network',
        presetAnswers: {
          k8s_scenario: 'new_deployment',
          target_environment: 'self_hosted',
          workload_type: 'event_worker_queue',
          resource_limits: 'light_api_limits',
          health_probes: 'tcp_socket_probe',
          ingress_networking: 'cloudflare_tunnel',
          secrets_management: 'external_secrets',
          incident_symptoms: 'no_incident'
        }
      }
    ],
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
        technicalTerm: 'Application Architecture & Workload Pattern',
        eli5: 'Stateless web apps use Deployments; background processors or databases need StatefulSets or Jobs.',
        example: 'Stateless REST / GraphQL Microservice API (Node.js, Go, Python)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Determines replica count, graceful termination period, and port exposures.',
        options: [
          { label: 'Stateless REST / GraphQL Microservice (Node.js, Go, Python, Spring Boot)', value: 'stateless_microservice', isDefault: true },
          { label: 'Async Event Worker / Queue Consumer (Kafka, RabbitMQ, Celery, SQS)', value: 'event_worker_queue' },
          { label: 'Next.js / React SSR Full-Stack Web Frontend', value: 'nextjs_ssr_frontend' },
          { label: 'StatefulSet Database / Cache Cluster (PostgreSQL, Redis, RabbitMQ)', value: 'statefulset_db_cache' },
          { label: 'CronJob Batch Processing Task (Scheduled ETL / Nightly cleanups)', value: 'cronjob_batch_etl' }
        ]
      },
      {
        id: 'resource_limits',
        label: 'Do you have CPU/Memory requests and limits defined?',
        technicalTerm: 'Cgroup Resource Requests & Limits Profile',
        eli5: 'Requests guarantee scheduling on nodes; limits prevent a runaway pod from taking down neighbors (OOMKilled).',
        example: 'Standard Microservice: requests 250m CPU / 512Mi RAM, limits 1000m CPU / 1Gi RAM',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Adds security-compliant resources blocks preventing cluster noisy-neighbor issues.',
        options: [
          { label: 'Standard Microservice: requests 250m CPU / 512Mi RAM, limits 1000m CPU / 1Gi RAM', value: 'std_microservice_limits', isDefault: true },
          { label: 'Lightweight Web/API: requests 100m CPU / 256Mi RAM, limits 500m CPU / 512Mi RAM', value: 'light_api_limits' },
          { label: 'Heavy JVM / Data Service: requests 1000m CPU / 2Gi RAM, limits 2000m CPU / 4Gi RAM', value: 'heavy_jvm_limits' },
          { label: 'GPU / AI Inference Workload: 2 vCPU, 8Gi RAM, 1x NVIDIA GPU', value: 'gpu_ai_limits' },
          { label: 'Conservative Burst: low requests 50m / 128Mi, high limits 1000m / 1Gi', value: 'burst_limits' }
        ]
      },
      {
        id: 'health_probes',
        label: 'How should Kubernetes test if your app is alive and ready?',
        technicalTerm: 'Liveness, Readiness & Startup Probes Configuration',
        eli5: 'Readiness prevents traffic before DB connection is ready; liveness restarts frozen containers.',
        example: 'HTTP GET /healthz (Readiness & Liveness with 15s initial delay & 10s period)',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Generates robust readinessProbe and livenessProbe blocks with appropriate timeout margins.',
        options: [
          { label: 'HTTP GET /healthz (Readiness & Liveness with 15s initial delay & 10s period)', value: 'http_get_standard', isDefault: true },
          { label: 'Startup Probe (slow booting JVM/Next.js) + HTTP Liveness (Prevents premature restart)', value: 'startup_and_liveness' },
          { label: 'TCP Socket Probe on container port (For non-HTTP services / workers)', value: 'tcp_socket_probe' },
          { label: 'Exec command probe (Container internal script exit code check)', value: 'exec_command_probe' }
        ]
      },
      {
        id: 'ingress_networking',
        label: 'How should external web traffic reach this service?',
        technicalTerm: 'Ingress Controller & TLS Termination',
        eli5: 'Choose how users or APIs connect: standard Nginx ingress with free SSL, AWS ALB, or zero-trust Cloudflare.',
        example: 'Nginx Ingress Controller with cert-manager automated Let\'s Encrypt TLS',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Generates valid networking.k8s.io/v1 Ingress and TLS annotation blocks.',
        options: [
          { label: 'Nginx Ingress Controller with cert-manager automated Let\'s Encrypt TLS', value: 'nginx_certmanager', isDefault: true },
          { label: 'AWS ALB Ingress Controller (Internet-facing with ACM Certificate)', value: 'aws_alb_ingress' },
          { label: 'Cloudflare Tunnel Zero-Trust (No public IP / Direct secure origin)', value: 'cloudflare_tunnel' },
          { label: 'Internal ClusterIP only (Internal service-to-service communication within VPC)', value: 'internal_clusterip' }
        ]
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
        label: 'If troubleshooting: what error symptom or exit code was observed?',
        technicalTerm: 'Kubectl Describe / Logs Diagnostic Signature',
        eli5: 'Select the observed pod failure state or pick greenfield if starting fresh.',
        example: 'Exit Code 137 (OOMKilled): Container killed due to memory limit breach under load',
        type: 'select',
        step: 'finetune',
        required: false,
        isAdvanced: true,
        promptImpact: 'Triggers targeted diagnostic root-cause hypothesis generation in the incident response section.',
        options: [
          { label: 'Exit Code 137 (OOMKilled): Container killed due to memory limit breach under load', value: 'oomkilled_137', isDefault: true },
          { label: 'CrashLoopBackOff Exit Code 1: Application failed startup probe or unhandled exception', value: 'crashloop_1' },
          { label: 'ImagePullBackOff / ErrImagePull: 401 Unauthorized or container registry tag missing', value: 'imagepull_err' },
          { label: 'Pending Pod: 0/12 nodes available (Insufficient CPU or Memory on cluster)', value: 'pending_resources' },
          { label: 'Readiness Probe Failed: HTTP 500 returned on /healthz endpoint', value: 'probe_500_err' },
          { label: 'No incident (Greenfield architecture & deployment)', value: 'no_incident' }
        ]
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
    recipes: [
      {
        id: 'qa_stripe_payments',
        title: '💳 Stripe Webhook & Payment Idempotency Suite',
        description: 'E2E checkout test cases with network retry idempotency and webhook verification.',
        badge: 'Payments QA',
        presetAnswers: {
          system_under_test: 'backend_api',
          test_levels: 'integration_only',
          test_framework: 'playwright_ts',
          feature_pattern_preset: 'checkout_payments',
          mocking_strategy: 'mock_msw_wiremock',
          core_functionality: 'payment_checkout_flow',
          edge_case_focus: 'network_jitter_idempotency'
        }
      },
      {
        id: 'qa_jwt_auth_refresh',
        title: '🔐 OAuth2 & JWT Token Expiration & Refresh Flow',
        description: 'Integration and unit tests verifying seamless silent token refresh without logout.',
        badge: 'Auth & Security',
        presetAnswers: {
          system_under_test: 'backend_api',
          test_levels: 'all_pyramid',
          test_framework: 'vitest_ts',
          feature_pattern_preset: 'auth_jwt_session',
          mocking_strategy: 'testcontainers_docker',
          core_functionality: 'auth_registration_jwt',
          edge_case_focus: 'auth_session_expiry'
        }
      },
      {
        id: 'qa_concurrent_race',
        title: '⚡ High-Concurrency Click Storm & Race Condition Suite',
        description: 'Stress test for double-submits, inventory stock over-allocations, and race conditions.',
        badge: 'Concurrency QA',
        presetAnswers: {
          system_under_test: 'fullstack_e2e',
          test_levels: 'e2e_only',
          test_framework: 'playwright_ts',
          feature_pattern_preset: 'crud_data_table',
          mocking_strategy: 'zero_mocks_staging',
          core_functionality: 'crud_data_grid',
          edge_case_focus: 'concurrency_race_conditions'
        }
      }
    ],
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
        id: 'feature_pattern_preset',
        label: 'What common software feature pattern are you testing?',
        technicalTerm: 'Feature Archetype & Acceptance Specification',
        eli5: 'Choose the standard pattern or describe a custom flow in the next field.',
        example: 'User Authentication & Session Management (OAuth 2.0, JWT, 2FA, session refresh)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Seeds industry-standard happy paths, error boundaries, and state transitions.',
        options: [
          { label: 'User Authentication & Auth Session (OAuth 2.0, JWT, 2FA, session refresh)', value: 'auth_jwt_session', isDefault: true },
          { label: 'E-Commerce Checkout & Payment Flow (Stripe, inventory lock, webhooks)', value: 'checkout_payments' },
          { label: 'CRUD Data Grid with Filter, Pagination, Search & Bulk Export', value: 'crud_data_table' },
          { label: 'File Upload & Document Processing (Multipart, S3 pre-signed, MIME checks)', value: 'file_upload_s3' },
          { label: 'Real-time WebSockets / Push Notifications (Chat, presence, event sync)', value: 'websockets_realtime' },
          { label: 'Custom User Story (Described in detail below)', value: 'custom_story' }
        ]
      },
      {
        id: 'mocking_strategy',
        label: 'How should downstream dependencies and external APIs be handled?',
        technicalTerm: 'Test Isolation & Mocking Strategy',
        eli5: 'Do you want to mock external credit card and email APIs, use real test databases in Docker, or test against staging?',
        example: 'Mock external 3rd-party HTTP APIs with MSW (Mock Service Worker) / WireMock',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Defines test fixture setup, network interception, and isolation guarantees.',
        options: [
          { label: 'Mock external 3rd-party APIs with MSW (Mock Service Worker) / WireMock', value: 'mock_msw_wiremock', isDefault: true },
          { label: 'In-memory test containers (Real ephemeral Postgres / Redis in Docker)', value: 'testcontainers_docker' },
          { label: 'Zero mocks: Run against live staging test environment', value: 'zero_mocks_staging' },
          { label: 'Unit mocks: Mock all database and HTTP network clients', value: 'unit_mocks_in_memory' }
        ]
      },
      {
        id: 'core_functionality',
        label: 'What are the user stories and acceptance criteria?',
        technicalTerm: 'User Story & Acceptance Criteria Specification',
        eli5: 'Choose a standard test specification or describe custom acceptance criteria.',
        example: 'User Registration & Auth: Submit email & password, validate complexity, return JWT on 201, return 409 Conflict if email exists',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Serves as the primary source of truth for generating positive, negative, and equivalence boundary tests.',
        options: [
          { label: 'User Registration & Auth: Submit email & password, validate complexity, return JWT on 201, return 409 Conflict if email exists', value: 'auth_registration_jwt', isDefault: true },
          { label: 'Payment Checkout: Lock cart inventory, submit tokenized payment to Stripe, handle webhook async confirmation, refund on failure', value: 'payment_checkout_flow' },
          { label: 'Data Grid Filter & Export: Server-side pagination, multi-column sort, filter by date range, export 10k rows to CSV stream', value: 'crud_data_grid' },
          { label: 'File Upload: Validate MIME type (PDF/PNG only), request pre-signed S3 URL, upload with progress bar, trigger async thumbnailer', value: 'file_upload_s3_flow' }
        ]
      },
      {
        id: 'edge_case_focus',
        label: 'What specific failure scenarios or security concerns worry you?',
        technicalTerm: 'Non-Functional & Boundary Test Vectors',
        eli5: 'Do you need concurrency checks, rate limiting tests, null/empty edge cases, or network failure recovery?',
        example: 'Comprehensive Resilience: Concurrency, Token Expiry, and Injection attacks',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Generates specialized negative test cases targeting these specific hazards.',
        options: [
          { label: 'Comprehensive Resilience: Concurrency, Token Expiry, and Injection attacks', value: 'comprehensive_resilience', isDefault: true },
          { label: 'Concurrency & Race Conditions: Double-clicks, rapid clicks, parallel transactions', value: 'concurrency_race_conditions' },
          { label: 'Authentication & Session Expiry: Token expiration during active form fill', value: 'auth_session_expiry' },
          { label: 'Input Boundary & Security: SQLi, XSS, unicode emoji, payload size limits', value: 'security_input_boundary' },
          { label: 'Network Jitter & Idempotency: 504 timeouts, retry duplicate submission prevention', value: 'network_jitter_idempotency' }
        ]
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
    recipes: [
      {
        id: 'photo_ceramic_dripper',
        title: '☕ Matte Ceramic Coffee Dripper Catalog',
        description: 'Clean commercial softbox catalog shot on honed travertine pedestal.',
        badge: 'Commercial Catalog',
        presetAnswers: {
          execution_mode: 'ai_render',
          product_subject: 'matte_ceramic_dripper',
          scene_setting: 'travertine_pedestal',
          camera_gear: 'medium_format',
          lens_focal_length: '85mm_prime',
          aperture_depth: 'f2_8_studio',
          focus_placement: 'focus_label',
          lighting_style: 'studio_softbox',
          composition_angle: 'eye_level',
          aspect_ratio: '4_5',
          avoid_elements: 'no_text_no_watermarks'
        }
      },
      {
        id: 'photo_luxury_perfume',
        title: '🌸 Golden Hour Luxury Perfume Bottle',
        description: 'Warm natural sunset light, creamy f/1.4 bokeh blur, and fine glass reflections.',
        badge: 'Luxury Editorial',
        presetAnswers: {
          execution_mode: 'ai_render',
          product_subject: 'amber_perfume_bottle',
          scene_setting: 'warm_oak_counter',
          camera_gear: '35mm_fullframe',
          lens_focal_length: '85mm_prime',
          aperture_depth: 'f1_4_bokeh',
          focus_placement: 'focus_label',
          lighting_style: 'natural_daylight',
          composition_angle: 'tabletop_45',
          aspect_ratio: '4_5',
          avoid_elements: 'no_harsh_reflections'
        }
      },
      {
        id: 'photo_cyberpunk_keyboard',
        title: '⌨️ Neon Cyberpunk Mechanical Keyboard',
        description: 'High-contrast bi-color rim lighting, dramatic dark atmosphere, and crisp switches.',
        badge: 'Tech / Gaming',
        presetAnswers: {
          execution_mode: 'ai_render',
          product_subject: 'cyberpunk_keyboard',
          scene_setting: 'dark_matte_desk',
          camera_gear: 'medium_format',
          lens_focal_length: '50mm_standard',
          aperture_depth: 'f2_8_studio',
          focus_placement: 'focus_front_edge',
          lighting_style: 'neon_gel',
          composition_angle: 'low_angle_hero',
          aspect_ratio: '16_9',
          avoid_elements: 'no_plastic_glare'
        }
      }
    ],
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
        eli5: 'Pick a high-end commercial hero subject or enter custom details.',
        example: 'Minimalist matte terracotta ceramic coffee dripper on raw brass stand',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Forms the anchor hero subject in the prompt text.',
        options: [
          { label: 'Minimalist matte terracotta ceramic coffee dripper on raw brass stand', value: 'matte_ceramic_dripper', isDefault: true },
          { label: 'Frosted amber glass luxury perfume bottle with brushed gold magnetic cap', value: 'amber_perfume_bottle' },
          { label: 'Anodized midnight-blue mechanical keyboard with glowing RGB underglow', value: 'cyberpunk_keyboard' },
          { label: 'Solitaire platinum diamond ring resting on dark velvet jeweler block', value: 'platinum_diamond_ring' },
          { label: 'Organic botanical skincare serum dropper bottle with fresh water droplets', value: 'skincare_serum_bottle' }
        ]
      },
      {
        id: 'scene_setting',
        label: 'Where is the product placed and what is the surface?',
        technicalTerm: 'Environment, Backdrop & Prop Context',
        eli5: 'A clean travertine stone slab, warm oak countertop, or seamless colored backdrop?',
        example: 'Honed light beige travertine stone slab with a few raw linen folds nearby',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the foreground, tabletop, and surrounding spatial environment.',
        options: [
          { label: 'Honed light beige travertine stone slab with a few raw linen folds nearby', value: 'travertine_pedestal', isDefault: true },
          { label: 'Warm natural Scandinavian oak countertop with soft morning greenery blur', value: 'warm_oak_counter' },
          { label: 'Dark matte graphite tabletop with subtle architectural shadow lines', value: 'dark_matte_desk' },
          { label: 'Seamless pure white studio infinity cove with soft ground shadow reflection', value: 'seamless_white_cove' }
        ]
      },
      {
        id: 'camera_gear',
        label: 'What camera gear or sensor format do you want to simulate?',
        technicalTerm: 'Camera Body & Sensor Format',
        eli5: 'Medium format gives maximum commercial detail; 35mm full-frame is standard commercial; analog film adds warmth and grain.',
        example: 'Medium Format Hasselblad H6D-100c for ultra-detailed commercial look',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Simulates camera sensor characteristics, dynamic range, and resolution fidelity.',
        options: [
          { label: 'Medium Format Commercial Camera (Hasselblad / Phase One - Ultra-clean, extreme resolution)', value: 'medium_format', isDefault: true },
          { label: '35mm Full-Frame Professional (Sony A7R V / Canon R5 - Sharp, modern realism)', value: '35mm_fullframe' },
          { label: 'Vintage 35mm Analog Film (Kodak Portra 400 - Warm tones, organic grain, subtle nostalgia)', value: 'kodak_portra' },
          { label: 'Cinematic Cinema Camera (ARRI Alexa 65 - Rich shadows, organic highlight roll-off)', value: 'arri_alexa' }
        ]
      },
      {
        id: 'lens_focal_length',
        label: 'What lens focal length should frame the shot?',
        technicalTerm: 'Lens Focal Length & Optical Compression',
        eli5: '85mm compresses backgrounds and flatters products; 50mm feels natural to the eye; 100mm macro reveals tiny textures.',
        example: '85mm f/1.4 prime lens for elegant compression',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets perspective compression, field of view, and optical perspective distortion.',
        options: [
          { label: '85mm Prime (Flattering portrait & product compression, creamiest background blur)', value: '85mm_prime', isDefault: true },
          { label: '50mm Standard (Natural human eye perspective, classic product realism)', value: '50mm_standard' },
          { label: '100mm Macro (Extreme micro-texture detail on jewelry, liquids, textures)', value: '100mm_macro' },
          { label: '35mm Wide-Standard (Environmental lifestyle context, shows surroundings)', value: '35mm_editorial' },
          { label: '24mm Wide Angle (Spacious table architecture, dramatic perspective)', value: '24mm_wide' }
        ]
      },
      {
        id: 'aperture_depth',
        label: 'What aperture (f-stop) and depth of field should be set?',
        technicalTerm: 'Aperture (f-stop) & Depth of Field (DoF)',
        eli5: 'A wide aperture like f/1.4 produces creamy background blur (bokeh) that isolates the subject; f/8 keeps the whole scene in crisp focus.',
        example: 'f/2.0 aperture for soft commercial subject isolation',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Controls physical circle of confusion, bokeh quality, and depth of field.',
        options: [
          { label: 'f/1.4 – f/1.8 (Ultra shallow DoF, creamy bokeh blur, strong subject pop)', value: 'f1_4_bokeh', isDefault: true },
          { label: 'f/2.8 – f/4.0 (Balanced commercial studio soft blur, readable backdrop)', value: 'f2_8_studio' },
          { label: 'f/5.6 – f/8.0 (Moderate sharpness, environment clearly visible)', value: 'f8_moderate' },
          { label: 'f/11 – f/16 (Deep focus, razor-sharp from foreground to background)', value: 'f11_deep' }
        ]
      },
      {
        id: 'focus_placement',
        label: 'Where should the camera focus be locked?',
        technicalTerm: 'Focal Plane & Critical Sharpness Target',
        eli5: 'Pinpoint focus draws the viewer’s eye directly to the brand name, product edge, or face.',
        example: 'Critical razor sharpness on the central brand logo on the front face',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Instructs the model on where critical optical sharpness must be concentrated.',
        options: [
          { label: 'Pin-sharp on hero product label / logo (surroundings softly fall off)', value: 'focus_label', isDefault: true },
          { label: 'Pin-sharp on product front leading edge / texture', value: 'focus_front_edge' },
          { label: 'Full infinity focus (entire scene and backdrop simultaneously sharp)', value: 'focus_infinity' },
          { label: 'Selective focus on liquid pour / dynamic droplet splash', value: 'focus_droplets' }
        ]
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
          { label: 'Soft 3-Point Studio Softbox (Clean, even, commercial catalog lighting)', value: 'studio_softbox', isDefault: true },
          { label: 'Warm Golden Hour Window Light (Morning sunlight with gentle natural diffusion)', value: 'natural_daylight' },
          { label: 'Dramatic Dark & Moody Chiaroscuro (Rim light, deep contrast, luxury aesthetic)', value: 'dramatic_rim' },
          { label: 'Crisp Direct Overhead Sunlight (Hard architectural graphic shadows)', value: 'direct_sun' },
          { label: 'Neon Cyberpunk / Bi-Color Rim (Vibrant contrasting gels, modern tech look)', value: 'neon_gel' }
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
          { label: 'Eye-level commercial hero shot (Product straight on at eye level)', value: 'eye_level', isDefault: true },
          { label: 'Slight high-angle (30 to 45 degree tabletop perspective)', value: 'tabletop_45' },
          { label: 'Flat-lay / Top-down 90 degree bird-eye view', value: 'flat_lay' },
          { label: 'Low-angle looking up (Heroic, grand, imposing presence)', value: 'low_angle_hero' },
          { label: 'Macro close-up detail shot (Focus on texture & finish)', value: 'macro_detail' }
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
        technicalTerm: 'Negative Prompt & Exclusion Cues Profile',
        eli5: 'Choose a standard professional negative prompt preset to keep out artifacts.',
        example: 'No text, no brand logos, no watermarks, no distorted human hands, no plastic glare',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Formatted into negative prompting and exclusion constraints.',
        options: [
          { label: 'Clean Studio: No text, no logos, no watermarks, no human hands, no plastic glare', value: 'no_text_no_watermarks', isDefault: true },
          { label: 'Natural Look: No artificial neon glare, no oversaturated colors, no plastic props', value: 'no_harsh_reflections' },
          { label: 'Minimalist: No cluttered props, no harsh unsoftened shadows, no blown-out highlights', value: 'no_plastic_glare' }
        ]
      }
    ],
    relatedWorkflows: [
      { type: 'companion', workflowId: 'creative_image_edit', title: 'Reference-Preserving Photo Retouching', description: 'Replace background or adjust lighting while preserving product shape.' },
      { type: 'next_step', workflowId: 'business_startup_prd', title: 'E-commerce Landing Page Spec', description: 'Integrate product imagery into high-converting storefront layout.' }
    ],
    verificationChecks: [
      { id: 'vc_boundary', title: 'Execution Boundary Notice', description: 'PromptLaz creates the visual direction prompt; execution occurs in your designated image model or studio setup.', category: 'limitations' },
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
      fallbackGuidance: 'If either the change list or preserve list is empty, PromptLaz requires clarifying boundaries to prevent accidental destruction of the reference image.'
    },
    recipes: [
      {
        id: 'edit_studio_swap',
        title: '🛍️ Minimalist E-Commerce Studio Background Swap',
        description: 'Replace amateur backdrop with clean off-white studio and matching ground shadow.',
        badge: 'Catalog Retouch',
        presetAnswers: {
          edit_goal_preset: 'replace_bg_keep_subject',
          background_preset: 'studio_neutral',
          camera_depth_match: 'bokeh_blur',
          what_to_preserve: 'preserve_product_100',
          what_to_change: 'replace_bg_only',
          change_intensity: 'bg_replace',
          lighting_blend: 'diffuse_wrap_light'
        }
      },
      {
        id: 'edit_lifestyle_relight',
        title: '🏛️ Luxury Travertine Pedestal & Warm Relighting',
        description: 'Elevate a product photo onto a stone plinth with directional golden sunlight.',
        badge: 'Luxury Branding',
        presetAnswers: {
          edit_goal_preset: 'change_lighting',
          background_preset: 'travertine_stone',
          camera_depth_match: 'bokeh_blur',
          what_to_preserve: 'preserve_product_100',
          what_to_change: 'relight_golden_sun',
          change_intensity: 'bg_replace',
          lighting_blend: 'warm_rim_light'
        }
      },
      {
        id: 'edit_portrait_nature',
        title: '🌳 Lush Outdoor Nature Bokeh Background',
        description: 'Preserve person face and expression 100% while swapping background to soft foliage.',
        badge: 'Portrait Retouch',
        presetAnswers: {
          edit_goal_preset: 'replace_bg_keep_subject',
          background_preset: 'outdoor_nature',
          camera_depth_match: 'bokeh_blur',
          what_to_preserve: 'preserve_face_identity',
          what_to_change: 'replace_bg_only',
          change_intensity: 'bg_replace',
          lighting_blend: 'warm_rim_light'
        }
      }
    ],
    fields: [
      {
        id: 'edit_goal_preset',
        label: 'What is your primary editing goal for this photo?',
        technicalTerm: 'Transformation Intent Preset',
        eli5: 'Choose what you want the AI to do with your uploaded reference photo.',
        example: 'Replace background only while keeping person/product 100% identical',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Establishes the primary transformation rule in the image prompt.',
        options: [
          { label: 'Replace background only (Keep subject / person 100% identical)', value: 'replace_bg_keep_subject', isDefault: true },
          { label: 'Change lighting & mood (Golden hour sunset, moody studio, or soft daylight)', value: 'change_lighting' },
          { label: 'Clean up & remove unwanted background objects / clutter', value: 'remove_objects' },
          { label: 'Color correction & styling (Clothing color, product finish)', value: 'color_restyling' },
          { label: 'Upscale & enhance micro-details without shifting facial geometry', value: 'enhance_clarity' }
        ]
      },
      {
        id: 'background_preset',
        label: 'What should the new background look like?',
        technicalTerm: 'Target Backdrop & Environmental Context',
        eli5: 'Select a professional studio backdrop or realistic lifestyle setting for your subject.',
        example: 'Clean high-end neutral studio with soft natural light and subtle gradient',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the replacement environmental setting.',
        options: [
          { label: 'Minimalist Studio Backdrop (Clean off-white / light grey with soft gradient)', value: 'studio_neutral', isDefault: true },
          { label: 'Honed Travertine / Marble Pedestal (Warm architectural stone surface)', value: 'travertine_stone' },
          { label: 'Modern Luxury Interior (Warm Scandinavian oak countertop & soft greenery)', value: 'scandinavian_interior' },
          { label: 'Lush Outdoor Nature (Soft green foliage with warm golden hour bokeh)', value: 'outdoor_nature' },
          { label: 'Vibrant Urban Cityscape (Blurred architectural evening lights)', value: 'urban_city' }
        ]
      },
      {
        id: 'camera_depth_match',
        label: 'How should the camera focus and background blur look?',
        technicalTerm: 'Depth of Field & Lens Aperture Match',
        eli5: 'Blurring the new background makes your original subject pop as if shot with an f/1.8 portrait lens.',
        example: 'Soft f/2.0 portrait blur behind the subject',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Instructs the image generator on depth map layering and bokeh fall-off.',
        options: [
          { label: 'Soft blurred bokeh (f/1.8 - f/2.8 lens look, high subject separation)', value: 'bokeh_blur', isDefault: true },
          { label: 'Match original photo focus depth exactly', value: 'match_original' },
          { label: 'Sharp front-to-back (both subject and new background in crisp focus)', value: 'sharp_throughout' }
        ]
      },
      {
        id: 'what_to_preserve',
        label: 'What MUST STAY EXACTLY AS IT IS?',
        technicalTerm: 'Identity & Geometric Preservation Invariants',
        eli5: 'Specify elements that must not shift: person face features, product logo, garment shape, hand position.',
        example: 'Preserve exact product geometry, brand labels, lettering, proportions and material texture with zero distortion',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Forms the mandatory preservation constraints section.',
        options: [
          { label: 'Preserve exact product geometry, brand labels, lettering, proportions and material texture with zero distortion', value: 'preserve_product_100', isDefault: true },
          { label: 'Preserve exact person face geometry, skin tone, hairstyle, facial expressions, and natural smile with 100% fidelity', value: 'preserve_face_identity' },
          { label: 'Preserve garment shape, fabric fold geometry, button positions, and seam alignment', value: 'preserve_clothing_shape' }
        ]
      },
      {
        id: 'what_to_change',
        label: 'What is the exact transformation to execute?',
        technicalTerm: 'Modification Delta Scope',
        eli5: 'Choose the exact modification instruction for the generative model.',
        example: 'Replace background only with selected studio setting; cast matching subtle contact shadow on ground',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Forms the core instruction delta in the modification prompt.',
        options: [
          { label: 'Replace background only with selected studio setting; cast matching subtle contact shadow on ground', value: 'replace_bg_only', isDefault: true },
          { label: 'Relight scene with warm golden hour sunlight entering from upper left; preserve subject identity', value: 'relight_golden_sun' },
          { label: 'Remove background clutter, cables, and passersby; reconstruct clean seamless surface', value: 'remove_clutter_cleanup' }
        ]
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
        example: 'Clean diffuse high-key catalog wrap-around light with zero harsh color fringing',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Applies photorealistic rim lighting and ambient occlusion instructions.',
        options: [
          { label: 'Clean diffuse high-key catalog wrap-around light with zero harsh color fringing', value: 'diffuse_wrap_light', isDefault: true },
          { label: 'Warm rim light on silhouette edges matching sunset angle; seamless natural exposure balance', value: 'warm_rim_light' },
          { label: 'Match color temperature and cast realistic soft directional shadow on ground plane', value: 'ground_shadow_match' }
        ]
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
    recipes: [
      {
        id: 'startup_b2b_saas',
        title: '🚀 B2B Micro-SaaS for Freelancers (Tiered Subscriptions)',
        description: 'Targeted workflow tool replacing messy email threads with single-link approval portals.',
        badge: 'B2B Micro-SaaS',
        presetAnswers: {
          business_stage: 'mvp_prd',
          target_audience_segment: 'b2b_smb',
          monetization_model: 'tiered_saas',
          target_user: 'Solo freelance web designers and consultants',
          customer_problem: 'freelancer_invoice_chasing',
          proposed_solution: 'single_link_portal',
          mvp_scoping_rule: 'ruthless_4_week',
          out_of_scope_cuts: 'no_native_mobile_v1',
          primary_metric: 'task_completion_rate'
        }
      },
      {
        id: 'startup_marketplace_mvp',
        title: '🛒 Two-Sided Local Service Marketplace MVP',
        description: 'High-conversion booking engine with take-rate transaction model.',
        badge: 'Marketplace',
        presetAnswers: {
          business_stage: 'mvp_prd',
          target_audience_segment: 'b2c_consumers',
          monetization_model: 'marketplace_take_rate',
          target_user: 'Local residential homeowners & vetted independent tradespeople',
          customer_problem: 'contractor_slow_quotes',
          proposed_solution: 'instant_checkout_widget',
          mvp_scoping_rule: 'balanced_8_week',
          out_of_scope_cuts: 'no_crm_integration',
          primary_metric: 'time_to_value'
        }
      },
      {
        id: 'startup_dev_tools',
        title: '🛠️ Developer Tools API-First Platform',
        description: 'CLI & SDK platform with usage-based token metering for cloud engineering teams.',
        badge: 'DevTools & API',
        presetAnswers: {
          business_stage: 'mvp_prd',
          target_audience_segment: 'developers_tech',
          monetization_model: 'usage_metering',
          target_user: 'DevOps & Platform SRE engineers managing multi-cluster Kubernetes',
          customer_problem: 'devops_yaml_boilerplate',
          proposed_solution: 'cli_automated_linting',
          mvp_scoping_rule: 'ruthless_4_week',
          out_of_scope_cuts: 'no_team_workspaces',
          primary_metric: 'retention_30d'
        }
      }
    ],
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
        id: 'target_audience_segment',
        label: 'What is your primary customer segment & buyer profile?',
        technicalTerm: 'Ideal Customer Profile (ICP) Segment',
        eli5: 'Choose whether you are selling to large companies, small businesses, everyday consumers, or developers.',
        example: 'B2B SMB / Self-Employed (Fast self-serve sign-up, ROI under 30 days)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Grounds value proposition and sales cycle assumptions in the PRD.',
        options: [
          { label: 'B2B SMB / Self-Employed (Fast self-serve sign-up, ROI under 30 days)', value: 'b2b_smb', isDefault: true },
          { label: 'B2B Enterprise Decision Makers (VP / Director, security & compliance review)', value: 'b2b_enterprise' },
          { label: 'B2C Everyday Consumers (Frictionless mobile UI, viral referral loops)', value: 'b2c_consumers' },
          { label: 'Technical Developers / SRE Teams (API-first, CLI/SDK, docs-driven)', value: 'developers_tech' }
        ]
      },
      {
        id: 'monetization_model',
        label: 'How will this product generate revenue?',
        technicalTerm: 'Business & Pricing Model Archetype',
        eli5: 'Choose how customers pay: subscription, usage metering, transaction fee, or free trial.',
        example: 'B2B SaaS Tiered Monthly / Annual Subscription',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines billing logic, paywall boundaries, and customer lifetime value framing.',
        options: [
          { label: 'B2B SaaS Tiered Monthly / Annual Subscription ($29 - $199/mo)', value: 'tiered_saas', isDefault: true },
          { label: 'Usage-Based Metering (Pay per API credit, token, or GB processed)', value: 'usage_metering' },
          { label: 'Two-Sided Marketplace (Take-rate percentage on transactions)', value: 'marketplace_take_rate' },
          { label: 'Freemium Self-Serve with Premium Paywall', value: 'freemium_paywall' }
        ]
      },
      {
        id: 'target_user',
        label: 'Who is the specific target user or customer persona?',
        technicalTerm: 'Customer Persona & Role Context',
        eli5: 'Name their specific role, daily routine, or immediate workplace context.',
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
        example: 'Freelancers waste 6+ hours weekly chasing invoice payments and client feedback across messy email threads',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Forms the Problem Statement and Why Now rationale in the PRD.',
        options: [
          { label: 'Freelancers waste 6+ hours weekly chasing invoice payments and feedback across messy email threads', value: 'freelancer_invoice_chasing', isDefault: true },
          { label: 'DevOps teams spend hours manually writing boilerplate Kubernetes YAML and debugging typos', value: 'devops_yaml_boilerplate' },
          { label: 'Local service contractors struggle to quote jobs quickly and lose 40% of leads to faster competitors', value: 'contractor_slow_quotes' },
          { label: 'Online shoppers abandon carts because checkout requires unnecessary account creation and multiple steps', value: 'checkout_abandonment' }
        ]
      },
      {
        id: 'proposed_solution',
        label: 'What is your proposed solution or core feature?',
        technicalTerm: 'Value Proposition & Solution Hypothesis',
        eli5: 'In 1-2 sentences, what does the software or service actually do to solve that pain?',
        example: 'A single-link client approval portal where clients review and approve deliverables with zero sign-up',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Defines the solution overview and core user journeys.',
        options: [
          { label: 'A single-link client approval portal where clients review and approve deliverables with zero sign-up', value: 'single_link_portal', isDefault: true },
          { label: 'A lightweight browser workspace with 1-click domain presets, guided dropdowns, and instant validation', value: 'guided_browser_builder' },
          { label: 'An automated CLI integration that lints and validates manifests directly against cluster APIs', value: 'cli_automated_linting' },
          { label: 'A 1-click checkout widget with instant Apple Pay / Google Pay and automatic guest receipt generation', value: 'instant_checkout_widget' }
        ]
      },
      {
        id: 'mvp_scoping_rule',
        label: 'What is your MVP scoping rule for launch?',
        technicalTerm: 'MVP Boundary & Feature Prioritization Rule',
        eli5: 'Ruthless 4-week scope ensures you launch and learn before burning cash on unnecessary features.',
        example: 'Ruthless 4-Week Core Loop (Single killer feature, no auxiliary fluff)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Enforces non-negotiable scope cuts in the engineering sprint plan.',
        options: [
          { label: 'Ruthless 4-Week Core Loop (Single killer feature, no auxiliary fluff)', value: 'ruthless_4_week', isDefault: true },
          { label: 'Balanced 8-Week MVP (Core workflow + basic auth + export / share)', value: 'balanced_8_week' },
          { label: 'Concierge / Manual MVP (Human-in-the-loop validation before coding)', value: 'concierge_manual' }
        ]
      },
      {
        id: 'out_of_scope_cuts',
        label: 'What is strictly OUT OF SCOPE for v1 (to avoid bloat)?',
        technicalTerm: 'Non-Goals & MVP Feature Boundary Profile',
        eli5: 'Good PRDs declare what will NOT be built for launch (e.g. no mobile app, no custom billing, no team roles).',
        example: 'No native iOS/Android mobile apps (web only), no custom multi-tenancy roles, no AI chatbot in v1',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Creates an explicit Non-Goals section preventing engineering scope creep.',
        options: [
          { label: 'No native mobile apps (web only), no multi-tenancy roles, no AI chatbot in v1', value: 'no_native_mobile_v1', isDefault: true },
          { label: 'No self-serve billing in v1 (manual invoicing only), no custom domains, no team workspaces', value: 'no_team_workspaces' },
          { label: 'No real-time WebSockets in v1 (polling only), no dark mode, no integrations with 3rd-party CRMs', value: 'no_crm_integration' }
        ]
      },
      {
        id: 'primary_metric',
        label: 'What single metric proves this product is working?',
        technicalTerm: 'North Star Metric & Acceptance Threshold',
        eli5: 'Is it task completion, user retention, or time-to-value acceleration?',
        example: 'Task Completion Conversion Rate (User finishes the main action > 60%)',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Sets the quantifiable success criteria in the executive summary.',
        options: [
          { label: 'Task Completion Conversion Rate (User finishes the main action > 60%)', value: 'task_completion_rate', isDefault: true },
          { label: 'Time-to-Value Acceleration (User achieves initial "aha" moment under 5 minutes)', value: 'time_to_value' },
          { label: '30-Day Retention / Repeat Usage (User returns within 4 weeks > 40%)', value: 'retention_30d' },
          { label: 'CAC Payback Period (Customer Acquisition Cost recovered under 6 months)', value: 'cac_payback' }
        ]
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
    governingStandards: ['CFA Institute Standards', 'GAAP / IFRS Accounting', 'US SEC Regulation G (Non-GAAP Guidance)'],
    reviewerRole: 'CFA Charterholder / Senior Equity Research Analyst',
    lastReviewedDate: '2026-03-09',
    missingInputRules: {
      criticalFields: ['ticker_company', 'research_objective'],
      fallbackGuidance: 'If specific financial statement numbers are unavailable, the prompt focuses on educational methodology and sensitivity ranges without inventing earnings figures.'
    },
    recipes: [
      {
        id: 'finance_saas_dcf',
        title: '📊 High-Growth B2B SaaS DCF',
        description: 'Intrinsic DCF model with 25% revenue CAGR, 10% WACC, and Rule of 40 cash flow reinvestment.',
        badge: 'Enterprise SaaS',
        presetAnswers: {
          research_objective: 'dcf_model',
          ticker_company: 'msft_tech',
          company_lifecycle_profile: 'high_growth_saas',
          valuation_horizon: '5_year_terminal',
          wacc_discount_rate: 'wacc_9_11',
          terminal_value_method: 'gordon_growth_2_5',
          key_assumptions: 'high_growth_25_margin_30',
          downside_risks: 'margin_compression'
        }
      },
      {
        id: 'finance_mature_brand',
        title: '🏢 Blue-Chip Consumer Goods (EV/EBITDA)',
        description: 'Defensive cash-cow with 12x EV/EBITDA exit multiple check and 8.0% hurdle rate.',
        badge: 'Blue-Chip Consumer',
        presetAnswers: {
          research_objective: 'comps_benchmarking',
          ticker_company: 'aapl_consumer',
          company_lifecycle_profile: 'mature_cash_cow',
          valuation_horizon: '5_year_terminal',
          wacc_discount_rate: 'wacc_8_9',
          terminal_value_method: 'exit_multiple_12x',
          key_assumptions: 'baseline_growth_8_margin_25',
          downside_risks: 'regulatory_scrutiny'
        }
      },
      {
        id: 'finance_cyclical_margin',
        title: '🏭 Industrial / Capital Goods Stress Test',
        description: 'Cyclical stress test with -5% contraction in early years and supply chain tariff shock.',
        badge: 'Industrial Cyclical',
        presetAnswers: {
          research_objective: 'dcf_model',
          ticker_company: 'siemens_industrial',
          company_lifecycle_profile: 'cyclical_industrial',
          valuation_horizon: '10_year_terminal',
          wacc_discount_rate: 'wacc_9_11',
          terminal_value_method: 'dual_terminal_check',
          key_assumptions: 'stress_negative_5_compress',
          downside_risks: 'supply_chain_tariffs'
        }
      }
    ],
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
        label: 'What is the company name, ticker, and sector benchmark?',
        technicalTerm: 'Entity Ticker & Primary Listing Benchmark',
        eli5: 'Pick a standard global benchmark stock or custom entity to set up financial statements.',
        example: 'Microsoft Corp (MSFT: NASDAQ) — Enterprise Cloud & Software',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Identifies the business entity and primary reporting currency.',
        options: [
          { label: 'Microsoft Corp (MSFT: NASDAQ) — Cloud, Enterprise & AI Platforms', value: 'msft_tech', isDefault: true },
          { label: 'Apple Inc (AAPL: NASDAQ) — Consumer Hardware, Ecosystem & Services', value: 'aapl_consumer' },
          { label: 'Siemens AG (SIE: ETR) — Industrial Automation, Rail & Energy Infrastructure', value: 'siemens_industrial' },
          { label: 'ASML Holding (ASML: NASDAQ) — High-NA EUV Semiconductor Equipment Monopoly', value: 'asml_semiconductor' },
          { label: 'HDFC Bank (HDFCBANK: NSE) — Retail & Corporate Commercial Banking', value: 'hdfc_banking' },
          { label: 'Custom Global Ticker / Mid-Cap Business (Describe or model by ratios)', value: 'custom_ticker' }
        ]
      },
      {
        id: 'company_lifecycle_profile',
        label: 'What is the company profile and lifecycle stage?',
        technicalTerm: 'Corporate Maturity & Cash Flow Profile',
        eli5: 'Mature companies are valued on stable free cash flow; high-growth startups are valued on market share & gross margins.',
        example: 'Mature Cash-Cow Enterprise (Steady single-digit revenue growth, strong predictable free cash flow)',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Configures appropriate margin expansion trajectories and terminal reinvestment assumptions.',
        options: [
          { label: 'Mature Cash-Cow Enterprise (Steady single-digit growth, predictable free cash flow)', value: 'mature_cash_cow', isDefault: true },
          { label: 'High-Growth Tech / SaaS (20%+ revenue CAGR, reinvesting cash flow, Rule of 40)', value: 'high_growth_saas' },
          { label: 'Cyclical Industrial / Commodity (Peaks & troughs, normalized mid-cycle earnings)', value: 'cyclical_industrial' },
          { label: 'Financial Institution / Bank (P/B and ROE focus, dividend discount model)', value: 'bank_financial' }
        ]
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
        id: 'wacc_discount_rate',
        label: 'What discount rate (WACC / Hurdle Rate) should be used?',
        technicalTerm: 'Weighted Average Cost of Capital (WACC)',
        eli5: 'The return demanded by investors: higher risk companies require a higher discount rate.',
        example: '8.0% - 9.0% (Standard US Large-Cap Equity Hurdle Rate)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Forms the baseline discount factor for cash flow present value calculation.',
        options: [
          { label: '8.0% - 9.0% (Standard US Large-Cap Equity Hurdle Rate)', value: 'wacc_8_9', isDefault: true },
          { label: '9.5% - 11.0% (Mid-Cap / Moderate Risk Tech & Growth)', value: 'wacc_9_11' },
          { label: '12.0% - 15.0% (Emerging Market or High-Risk Speculative Equity)', value: 'wacc_12_15' },
          { label: '6.5% - 7.5% (Regulated Utility / Infrastructure Safe Haven)', value: 'wacc_6_7' }
        ]
      },
      {
        id: 'terminal_value_method',
        label: 'How should Terminal Value at the end of the projection be calculated?',
        technicalTerm: 'Terminal Value Formulation (Gordon Growth vs Exit Multiple)',
        eli5: 'Most of a company\'s value comes after year 5. Use conservative perpetual GDP growth or peer exit multiple.',
        example: 'Gordon Growth Model (2.5% perpetual inflation rate)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Applies Gordon Growth or Exit Multiple equations in the terminal year.',
        options: [
          { label: 'Gordon Growth Model (2.5% perpetual inflation rate)', value: 'gordon_growth_2_5', isDefault: true },
          { label: 'Exit Multiple (12x EV/EBITDA peer exit benchmark)', value: 'exit_multiple_12x' },
          { label: 'Dual Method (Cross-check Gordon Growth vs Exit Multiple side-by-side)', value: 'dual_terminal_check' }
        ]
      },
      {
        id: 'key_assumptions',
        label: 'What revenue growth & operating margin trajectory should be modeled?',
        technicalTerm: 'Revenue CAGR and Operating Margin Guidance',
        eli5: 'Select a standard financial forecast scenario or conservative baseline.',
        example: 'Baseline Growth: 8% Revenue CAGR, 25% Operating Margin, 8.5% WACC',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Injected into the financial calculation assumptions table.',
        options: [
          { label: 'Baseline Growth: 8% Revenue CAGR, 25% Operating Margin, 8.5% WACC, 2.5% Terminal Growth', value: 'baseline_growth_8_margin_25', isDefault: true },
          { label: 'High-Growth Expansion: 25% Revenue CAGR, Operating Margin scaling from 18% to 30%, 10% WACC', value: 'high_growth_25_margin_30' },
          { label: 'Defensive Value: 3% Revenue CAGR, 18% Operating Margin, 7.5% WACC, 2.0% Terminal Growth', value: 'defensive_3_margin_18' },
          { label: 'Stress-Test Bear Case: -5% Revenue contraction in Years 1-2, 400bps margin compression, 11% WACC', value: 'stress_negative_5_compress' }
        ]
      },
      {
        id: 'downside_risks',
        label: 'What specific business or macro risks should be stress-tested?',
        technicalTerm: 'Downside Stress-Testing Scenarios',
        eli5: 'What could break the investment thesis? Competitor pricing pressure, tariffs, rate hikes, or regulation?',
        example: 'Margin Compression & Pricing Pressure (Competitors, input cost inflation)',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Requires a dedicated Bear-case downside stress test section in the report.',
        options: [
          { label: 'Margin Compression & Pricing Pressure (Competitors, input cost inflation)', value: 'margin_compression', isDefault: true },
          { label: 'Regulatory & Antitrust Scrutiny (Platform take-rate, compliance mandates)', value: 'regulatory_scrutiny' },
          { label: 'Supply Chain & Geopolitical Disruption (Overseas fabrication, tariffs)', value: 'supply_chain_tariffs' },
          { label: 'Macro Interest Rate Shock (Higher debt refinancing costs & lower multiples)', value: 'rate_shock' }
        ]
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
    governingStandards: ['Bloom\'s Taxonomy', 'Cognitive Load Theory (Sweller)', 'Spaced Retrieval Practice (Roediger & Karpicke)'],
    reviewerRole: 'Master Educator & Curriculum Specialist',
    lastReviewedDate: '2026-03-15',
    missingInputRules: {
      criticalFields: ['study_mode', 'exam_level'],
      fallbackGuidance: 'If the syllabus or difficulty is unspecified, the tutor begins with a 3-question diagnostic baseline quiz.'
    },
    recipes: [
      {
        id: 'tutor_physics_mechanics',
        title: '⚛️ Classical Mechanics & Newton\'s Laws',
        description: 'University sophomore-level physics with Socratic derivations and free-body diagram traps.',
        badge: 'Physics & Dynamics',
        presetAnswers: {
          study_mode: 'socratic_quiz',
          exam_level: 'undergrad_univ',
          hardest_concept: 'boundary_conditions',
          question_frequency_mode: 'trap_questions',
          tone_style: 'rigorous'
        }
      },
      {
        id: 'tutor_org_chem',
        title: '🧪 Organic Chemistry SN1 vs SN2',
        description: 'Mechanism walkthroughs with carbocation stability, polar protic vs aprotic solvent traps.',
        badge: 'Chemistry Mechanisms',
        presetAnswers: {
          study_mode: 'worked_example',
          exam_level: 'undergrad_univ',
          hardest_concept: 'stereochem_solvents',
          question_frequency_mode: 'derivation_breakdown',
          tone_style: 'patient_analogy'
        }
      },
      {
        id: 'tutor_fe_exam',
        title: '🏗️ FE / PE Engineering Licensure Prep',
        description: 'High-yield exam questions targeting common trick questions in the NCEES reference handbook.',
        badge: 'FE Licensure Drill',
        presetAnswers: {
          study_mode: 'socratic_quiz',
          exam_level: 'professional_cert',
          hardest_concept: 'trap_distractors',
          question_frequency_mode: 'high_yield_patterns',
          tone_style: 'exam_cram'
        }
      }
    ],
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
        label: 'What subject and specific topic are you studying? (Optional)',
        technicalTerm: 'Curricular Subject & Specific Topic Focus',
        eli5: 'Choose your domain and subject from the guided hierarchy, or enter custom topics at any level.',
        example: 'Knowledge & science → Physical sciences → Applied Physics & Mechanics → Worked physics derivation',
        type: 'subject_picker',
        step: 'start',
        required: false,
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
        label: 'What is the hardest conceptual stumbling block for you?',
        technicalTerm: 'Student Pain Point & Diagnostic Hurdle',
        eli5: 'Choose the hurdle that usually trips you up so the tutor creates targeted diagnostic traps.',
        example: 'Setting up boundary conditions and coordinate frames without signs errors',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Tells the AI to generate targeted diagnostic traps addressing this specific hurdle.',
        options: [
          { label: 'Equation Selection: Deciding which governing formula or theorem applies to the problem', value: 'identifying_equations', isDefault: true },
          { label: 'Coordinate & Boundary Conditions: Setting up signs, free-body frames, and initial constraints', value: 'boundary_conditions' },
          { label: 'Mechanism & Solvent Traps: Distinguishing reaction pathways based on solvent polarity & stereochemistry', value: 'stereochem_solvents' },
          { label: 'Deceptive Multiple-Choice Distractors: Spotting traps designed to catch quick calculations', value: 'trap_distractors' },
          { label: 'Intuitive Conceptual Insight: Understanding physical meaning beyond rote formula memorization', value: 'intuitive_conceptual' }
        ]
      },
      {
        id: 'question_frequency_mode',
        label: 'What format of learning drill do you want?',
        technicalTerm: 'Assessment Diagnostic Modality',
        eli5: 'Choose whether you want trap questions to test misconceptions, rapid flashcards, or step-by-step problem derivations.',
        example: 'Socratic Trap Questions (Uncover subtle conceptual misconceptions)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Formats question presentation and sets cognitive challenge depth.',
        options: [
          { label: 'Socratic Trap Questions (Uncover subtle conceptual misconceptions)', value: 'trap_questions', isDefault: true },
          { label: 'Spaced Retrieval Drill (10 rapid-fire active recall questions)', value: 'spaced_retrieval' },
          { label: 'Step-by-Step Derivation Breakdown (Guided formula application)', value: 'derivation_breakdown' },
          { label: 'High-Yield Exam Strategy (Pattern recognition for repeated test questions)', value: 'high_yield_patterns' }
        ]
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
    governingStandards: ['ISO/IEC 25010 Quality Model', 'Clear Writing & Plain Language Guidelines', 'Zero Hallucination AI Guardrails'],
    reviewerRole: 'PromptLaz Core Systems Architect',
    lastReviewedDate: '2026-03-15',
    missingInputRules: {
      criticalFields: ['user_goal', 'desired_output'],
      fallbackGuidance: 'If the goal is brief, PromptLaz structures the prompt to ask clarifying questions before completing work.'
    },
    recipes: [
      {
        id: 'universal_invoice_demand',
        title: '✉️ Firm Overdue Invoice Follow-Up Letter',
        description: 'Professional, assertive email for a 30-day overdue invoice maintaining client relationship.',
        badge: 'Business Finance',
        presetAnswers: {
          common_task_archetype: 'business_correspondence',
          user_goal: 'overdue_invoice',
          available_context: 'invoice_30d_late',
          desired_output: 'text_draft',
          constraints_rules: 'under_150_words_polite',
          tone_voice: 'professional'
        }
      },
      {
        id: 'universal_tech_matrix',
        title: '⚖️ PostgreSQL vs MongoDB Trade-Off Matrix',
        description: 'Comprehensive decision matrix comparing relational ACID vs document stores for high-throughput app.',
        badge: 'Architecture Review',
        presetAnswers: {
          common_task_archetype: 'decision_matrix',
          user_goal: 'database_tradeoffs',
          available_context: 'saas_scale_200k',
          desired_output: 'comparison_table',
          constraints_rules: 'tabular_pros_cons',
          tone_voice: 'academic'
        }
      },
      {
        id: 'universal_onboarding_plan',
        title: '📋 30-60-90 Day Engineering Onboarding Plan',
        description: 'Structured onboarding milestone guide for a Senior Fullstack Engineer joining an agile team.',
        badge: 'Engineering Management',
        presetAnswers: {
          common_task_archetype: 'tech_architecture_review',
          user_goal: 'onboarding_roadmap',
          available_context: 'senior_ic_hire',
          desired_output: 'checklist',
          constraints_rules: 'weekly_measurable',
          tone_voice: 'professional'
        }
      },
      {
        id: 'universal_incident_rca',
        title: '🚨 Production Outage 5-Whys Post-Mortem',
        description: 'Blameless root cause analysis for an unexpected database connection exhaustion incident.',
        badge: 'DevOps & SRE',
        presetAnswers: {
          common_task_archetype: 'troubleshooting_rca',
          user_goal: 'outage_rca',
          available_context: 'db_connection_spike',
          desired_output: 'technical_spec',
          constraints_rules: 'blameless_action_items',
          tone_voice: 'executive_bullet'
        }
      }
    ],
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
        id: 'common_task_archetype',
        label: 'What kind of task are you starting?',
        technicalTerm: 'Task Archetype & Analytical Framing',
        eli5: 'Pick an archetype to get pre-framed structure, or select custom to write your own.',
        example: 'Decision Matrix & Trade-Off Comparison',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Tunes the reasoning strategy, tone, and framing of the assembled prompt.',
        options: [
          { label: 'General / Custom Purpose (Describe below in your own words)', value: 'custom_goal', isDefault: true },
          { label: 'Decision Matrix & Trade-Off Comparison (Pros, cons, criteria)', value: 'decision_matrix' },
          { label: 'Professional Business Correspondence / Sensitive Email', value: 'business_correspondence' },
          { label: 'Technical Architecture & Code Review Checklist', value: 'tech_architecture_review' },
          { label: 'Step-by-Step Educational Tutorial with Real-World Analogies', value: 'educational_tutorial' },
          { label: 'Incident Troubleshooting & Diagnostic Root-Cause Tree', value: 'troubleshooting_rca' }
        ]
      },
      {
        id: 'user_goal',
        label: 'In plain language, what are you trying to accomplish?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'Select what you need done, or pick custom to describe your own task.',
        example: 'Draft an assertive yet polite overdue payment reminder email to a client',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the primary mission statement of the prompt.',
        options: [
          { label: 'Draft an assertive yet polite overdue payment reminder email to a client', value: 'overdue_invoice', isDefault: true },
          { label: 'Compare PostgreSQL vs MongoDB trade-offs for high-throughput event logging', value: 'database_tradeoffs' },
          { label: 'Create a structured 30-60-90 day engineering leadership onboarding roadmap', value: 'onboarding_roadmap' },
          { label: 'Perform a blameless 5-Whys root cause analysis for an unexpected database outage', value: 'outage_rca' },
          { label: 'Custom Task / General Inquiry (Provide custom instructions)', value: 'custom_goal_entry' }
        ]
      },
      {
        id: 'available_context',
        label: 'What background facts, data, or notes do you have?',
        technicalTerm: 'Supplied Context & Prior Art',
        eli5: 'Select your situation background so the AI bases answers on realistic context.',
        example: 'Invoice #1042 was sent 30 days ago, total is $4,500, contract says 1.5% late fee after 14 days',
        type: 'select',
        step: 'start',
        required: false,
        promptImpact: 'Provides the factual bedrock so the AI does not have to invent details.',
        options: [
          { label: 'Invoice #1042 sent 30 days ago ($4,500 total, 1.5% monthly late fee terms, friendly prior client)', value: 'invoice_30d_late', isDefault: true },
          { label: 'SaaS app: 200k daily active users, 10M events/day, 4 engineers, $500/month cloud budget', value: 'saas_scale_200k' },
          { label: 'Senior Fullstack Engineer joining an agile fintech startup using TypeScript, Node, and AWS', value: 'senior_ic_hire' },
          { label: 'Primary DB connection pool exhausted at 9:00 AM spike, causing 504 errors for 18 minutes', value: 'db_connection_spike' },
          { label: 'General standard industry baseline facts and standard assumptions', value: 'general_context' }
        ]
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
        eli5: 'Word count limits, tone restrictions, or strict guidelines.',
        example: 'Keep under 150 words, do not sound aggressive, maintain cordial relationship for future work',
        type: 'select',
        step: 'fit',
        required: false,
        promptImpact: 'Creates negative boundaries and style constraints.',
        options: [
          { label: 'Keep under 150 words, maintain cordial relationship, direct call to action', value: 'under_150_words_polite', isDefault: true },
          { label: 'Present side-by-side comparison table with cost, scalability, complexity, and operational overhead', value: 'tabular_pros_cons' },
          { label: 'Break down into weekly deliverables with clear measurable definition of done', value: 'weekly_measurable' },
          { label: 'Strictly blameless language focusing on automation, monitoring, and runbook improvements', value: 'blameless_action_items' },
          { label: 'No corporate jargon, avoid clichés, format with clear bullet points and action items', value: 'no_jargon_bullets' }
        ]
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
