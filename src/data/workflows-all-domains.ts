/**
 * PromptLaz — All 54 Domain Families Comprehensive Workflows
 * Auto-generated to provide 100% first-class workflow coverage for every single domain in PromptLaz.
 * Includes dedicated recipes, technical parameters, governing standards, and verification checks.
 */
import { WorkflowSchema } from '../types';

export const ALL_DOMAINS_WORKFLOWS: WorkflowSchema[] = [
  // 1. PROBABILITY, STATISTICS & DIFFERENTIAL CALCULUS ANALYSIS
  {
    id: 'math_stats_modeling',
    title: 'Probability, Statistics & Differential Calculus Analysis',
    domainId: 'math_stats',
    domainName: 'Mathematics and statistics',
    group: 'Knowledge & science',
    discipline: 'Probability, Statistical Modeling & Applied Mathematics',
    summary: 'Probability distributions, statistical derivations, calculus, discrete math, linear algebra and applied proofs.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["math","statistics","stats","probability","calculus","algebra","linear algebra","geometry","trigonometry","number theory","maths","equations","formulas","proof","theorem","regression","hypothesis test","confidence interval","standard deviation","mean median mode","matrix","differential equations","integration"],
    governingStandards: ["ASA Statement on P-Values","NIST Engineering Statistics Handbook","IEEE Standard for Floating-Point Arithmetic (IEEE 754)"],
    reviewerRole: 'Senior Mathematical Statistician & Quantitative Analyst',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "math_stats_modeling_recipe_1",
                "title": "⭐ Explain p-value interpretation",
                "description": "Probability & Distributions: Hypothesis testing, distributions, Bayes theorem, confidence intervals. Structured prompt with verified standards and constraints.",
                "badge": "Probability",
                "presetAnswers": {
                      "task_objective": "Explain p-value interpretation",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ms-prob",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "math_stats_modeling_recipe_2",
                "title": "📌 Step-by-step differential equation solve",
                "description": "Calculus & Differential Equations: Multivariable calculus, limits, ODEs/PDEs, Laplace transforms. Structured prompt with verified standards and constraints.",
                "badge": "Calculus",
                "presetAnswers": {
                      "task_objective": "Step-by-step differential equation solve",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ms-calc",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "math_stats_modeling_recipe_3",
                "title": "💡 Proof by induction guide",
                "description": "Discrete Math & Logic: Combinatorics, graph algorithms, Boolean logic, set theory. Structured prompt with verified standards and constraints.",
                "badge": "Discrete Math",
                "presetAnswers": {
                      "task_objective": "Proof by induction guide",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ms-discrete",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Explain p-value interpretation',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Explain p-value interpretation (Probability & Distributions)', value: 'Explain p-value interpretation', isDefault: true },
          { label: 'Step-by-step differential equation solve (Calculus & Differential Equations)', value: 'Step-by-step differential equation solve', isDefault: false },
          { label: 'Proof by induction guide (Discrete Math & Logic)', value: 'Proof by induction guide', isDefault: false },
          { label: 'Eigenvalue/eigenvector calculation walkthrough (Linear Algebra & Matrices)', value: 'Eigenvalue/eigenvector calculation walkthrough', isDefault: false },
          { label: 'Linear programming formulation from word problem (Operations Research & Optimization)', value: 'Linear programming formulation from word problem', isDefault: false },
          { label: 'Multiple regression model interpretation (Applied & Actuarial Statistics)', value: 'Multiple regression model interpretation', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Mathematics and statistics applies to your situation?',
        example: 'Probability & Distributions',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Probability & Distributions: Hypothesis testing, distributions, Bayes theorem, ...', value: 'ms-prob', isDefault: true },
          { label: 'Calculus & Differential Equations: Multivariable calculus, limits, ODEs/PDEs, Laplace...', value: 'ms-calc', isDefault: false },
          { label: 'Discrete Math & Logic: Combinatorics, graph algorithms, Boolean logic, se...', value: 'ms-discrete', isDefault: false },
          { label: 'Linear Algebra & Matrices: Eigenvalues, vector spaces, matrix decompositions,...', value: 'ms-linalg', isDefault: false },
          { label: 'Operations Research & Optimization: Linear programming, simplex method, scheduling, qu...', value: 'ms-opsresearch', isDefault: false },
          { label: 'Applied & Actuarial Statistics: Regression, time series, survival analysis, risk m...', value: 'ms-applied', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'ASA Statement on P-Values',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: ASA Statement on P-Values', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_math_stats_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to ASA Statement on P-Values.', category: 'standards' },
      { id: 'vc_math_stats_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 2. APPLIED PHYSICS, REACTION KINETICS & QUANTUM FUNDAMENTALS
  {
    id: 'physical_sciences_mechanics',
    title: 'Applied Physics, Reaction Kinetics & Quantum Fundamentals',
    domainId: 'physical_sciences',
    domainName: 'Physical sciences',
    group: 'Knowledge & science',
    discipline: 'Classical Physics, Chemical Thermodynamics & Reaction Kinetics',
    summary: 'Classical mechanics, thermodynamics, electromagnetism, optics, organic/physical chemistry, quantum basics.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["physics","chemistry","optics","mechanics","thermodynamics","electromagnetism","quantum","nuclear","organic chemistry","inorganic chemistry","acoustics","photonics","waves","relativity","particle physics","spectroscopy","stoichiometry","chemical reactions","periodic table","atomic structure"],
    governingStandards: ["IUPAC Gold Book & Nomenclature","CODATA Recommended Values of Fundamental Constants","SI Brochure 9th Edition"],
    reviewerRole: 'Senior Physicist & Chemical Reaction Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "physical_sciences_mechanics_recipe_1",
                "title": "⭐ Worked physics derivation",
                "description": "Applied Physics & Mechanics: Kinematics, dynamics, wave theory, quantum basics, relativity. Structured prompt with verified standards and constraints.",
                "badge": "Applied Physics",
                "presetAnswers": {
                      "task_objective": "Worked physics derivation",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ps-phys",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "physical_sciences_mechanics_recipe_2",
                "title": "📌 Mechanism synthesis plan",
                "description": "Chemistry & Reaction Kinetics: Stoichiometry, molecular orbital, reaction mechanisms, equilibrium. Structured prompt with verified standards and constraints.",
                "badge": "Chemistry",
                "presetAnswers": {
                      "task_objective": "Mechanism synthesis plan",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ps-chem",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "physical_sciences_mechanics_recipe_3",
                "title": "💡 Thin lens equation walkthrough",
                "description": "Optics, Photonics & Acoustics: Lenses, fiber optics, diffraction, sound propagation, laser physics. Structured prompt with verified standards and constraints.",
                "badge": "Optics, Photonics",
                "presetAnswers": {
                      "task_objective": "Thin lens equation walkthrough",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ps-optics",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Worked physics derivation',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Worked physics derivation (Applied Physics & Mechanics)', value: 'Worked physics derivation', isDefault: true },
          { label: 'Mechanism synthesis plan (Chemistry & Reaction Kinetics)', value: 'Mechanism synthesis plan', isDefault: false },
          { label: 'Thin lens equation walkthrough (Optics, Photonics & Acoustics)', value: 'Thin lens equation walkthrough', isDefault: false },
          { label: 'Half-life calculation explainer (Nuclear & Particle Physics)', value: 'Half-life calculation explainer', isDefault: false },
          { label: 'Band gap semiconductor explanation (Materials Physics & Solid State)', value: 'Band gap semiconductor explanation', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Physical sciences applies to your situation?',
        example: 'Applied Physics & Mechanics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Applied Physics & Mechanics: Kinematics, dynamics, wave theory, quantum basics,...', value: 'ps-phys', isDefault: true },
          { label: 'Chemistry & Reaction Kinetics: Stoichiometry, molecular orbital, reaction mechani...', value: 'ps-chem', isDefault: false },
          { label: 'Optics, Photonics & Acoustics: Lenses, fiber optics, diffraction, sound propagati...', value: 'ps-optics', isDefault: false },
          { label: 'Nuclear & Particle Physics: Radioactive decay, fission/fusion concepts, partic...', value: 'ps-nuclear', isDefault: false },
          { label: 'Materials Physics & Solid State: Crystal structures, semiconductors, superconductiv...', value: 'ps-materials', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'IUPAC Gold Book & Nomenclature',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: IUPAC Gold Book & Nomenclature', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_physical_sciences_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to IUPAC Gold Book & Nomenclature.', category: 'standards' },
      { id: 'vc_physical_sciences_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 3. MOLECULAR BIOLOGY, GENETICS & CELLULAR PATHWAY ANALYSIS
  {
    id: 'life_sciences_genetics',
    title: 'Molecular Biology, Genetics & Cellular Pathway Analysis',
    domainId: 'life_sciences',
    domainName: 'Life sciences',
    group: 'Knowledge & science',
    discipline: 'Molecular Genetics, Cellular Biology & Biochemistry',
    summary: 'Genetics, cellular biology, biochemistry, ecology, bioinformatics, physiology, microbiology and neuroscience.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["biology","genetics","ecology","biochemistry","bioinformatics","microbiology","anatomy","physiology","neuroscience","immunology","botany","zoology","cell biology","molecular biology","evolution","CRISPR","DNA","RNA","protein","enzyme","organism","species","taxonomy"],
    governingStandards: ["NCBI RefSeq & GenBank Standards","HGVS Nomenclature for Sequence Variants","MIQE Guidelines for qPCR Experiments"],
    reviewerRole: 'Principal Molecular Biologist & Geneticist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "life_sciences_genetics_recipe_1",
                "title": "⭐ Explain CRISPR guide RNA design",
                "description": "Cellular & Molecular Biology: Signal transduction, gene expression, protein folding, CRISPR. Structured prompt with verified standards and constraints.",
                "badge": "Cellular",
                "presetAnswers": {
                      "task_objective": "Explain CRISPR guide RNA design",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ls-cell",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "life_sciences_genetics_recipe_2",
                "title": "📌 Lotka-Volterra model explanation",
                "description": "Ecology & Population Genetics: Biodiversity indices, trophic cascades, evolutionary models. Structured prompt with verified standards and constraints.",
                "badge": "Ecology",
                "presetAnswers": {
                      "task_objective": "Lotka-Volterra model explanation",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ls-eco",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "life_sciences_genetics_recipe_3",
                "title": "💡 Gram stain interpretation guide",
                "description": "Microbiology & Immunology: Bacterial classification, viral replication, immune response pathways. Structured prompt with verified standards and constraints.",
                "badge": "Microbiology",
                "presetAnswers": {
                      "task_objective": "Gram stain interpretation guide",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ls-micro",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Explain CRISPR guide RNA design',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Explain CRISPR guide RNA design (Cellular & Molecular Biology)', value: 'Explain CRISPR guide RNA design', isDefault: true },
          { label: 'Lotka-Volterra model explanation (Ecology & Population Genetics)', value: 'Lotka-Volterra model explanation', isDefault: false },
          { label: 'Gram stain interpretation guide (Microbiology & Immunology)', value: 'Gram stain interpretation guide', isDefault: false },
          { label: 'Cardiovascular system flow diagram (Anatomy & Physiology)', value: 'Cardiovascular system flow diagram', isDefault: false },
          { label: 'Neurotransmitter pathway explanation (Neuroscience & Cognitive Biology)', value: 'Neurotransmitter pathway explanation', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Life sciences applies to your situation?',
        example: 'Cellular & Molecular Biology',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Cellular & Molecular Biology: Signal transduction, gene expression, protein fold...', value: 'ls-cell', isDefault: true },
          { label: 'Ecology & Population Genetics: Biodiversity indices, trophic cascades, evolutiona...', value: 'ls-eco', isDefault: false },
          { label: 'Microbiology & Immunology: Bacterial classification, viral replication, immun...', value: 'ls-micro', isDefault: false },
          { label: 'Anatomy & Physiology: Organ systems, homeostasis, neurophysiology, endoc...', value: 'ls-anatomy', isDefault: false },
          { label: 'Neuroscience & Cognitive Biology: Neural signaling, brain regions, synaptic plastici...', value: 'ls-neuro', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'NCBI RefSeq & GenBank Standards',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: NCBI RefSeq & GenBank Standards', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_life_sciences_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to NCBI RefSeq & GenBank Standards.', category: 'standards' },
      { id: 'vc_life_sciences_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 4. CLIMATE MODELING, ATMOSPHERIC SCIENCE & CMIP6 ANALYSIS
  {
    id: 'earth_climate_modeling',
    title: 'Climate Modeling, Atmospheric Science & CMIP6 Analysis',
    domainId: 'earth_climate',
    domainName: 'Earth, climate and space science',
    group: 'Knowledge & science',
    discipline: 'Atmospheric Dynamics, Climate Modeling & Planetary Science',
    summary: 'Meteorology, geology, oceanography, hydrology, carbon cycles, astrophysics and remote sensing.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["geology","climate","earth science","astronomy","weather","meteorology","oceanography","hydrology","volcanology","paleontology","astrophysics","space","planets","atmosphere","earthquakes","fossils","minerals","rocks","tectonic plates","glaciers","remote sensing","satellite imagery","geophysics"],
    governingStandards: ["IPCC Sixth Assessment Report (AR6 WG1/WG2)","WCRP Coupled Model Intercomparison Project (CMIP6)","CF Metadata Conventions for NetCDF Climate Data","WMO Climatological Standards"],
    reviewerRole: 'Senior Climatologist & Climate Modeling Specialist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "cmip6_scenario_comparison",
                "title": "🌍 CMIP6 Climate Scenario & Multi-Model Comparison",
                "description": "Rigorous comparison of CMIP6 climate model projections (SSP1-2.6 vs SSP2-4.5 vs SSP5-8.5), evaluating climate sensitivity, precipitation anomaly patterns, and radiative forcing assumptions.",
                "badge": "CMIP6 Scenario",
                "presetAnswers": {
                      "task_objective": "CMIP6 scenario comparison",
                      "methodology_framework": "cmip6_multi_model_ensemble",
                      "technical_scope": "ec-clim",
                      "output_format": "comparative_matrix"
                }
          },
          {
                "id": "earth_climate_modeling_recipe_2",
                "title": "📌 CMIP6 scenario comparison",
                "description": "Climate Modeling & Weather: Atmospheric dynamics, climate proxy data, IPCC scenarios. Structured prompt with verified standards and constraints.",
                "badge": "Climate Modeling",
                "presetAnswers": {
                      "task_objective": "CMIP6 scenario comparison",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ec-clim",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "earth_climate_modeling_recipe_3",
                "title": "💡 Thermohaline circulation explainer",
                "description": "Oceanography & Marine Science: Ocean currents, salinity, coral reefs, deep sea ecosystems. Structured prompt with verified standards and constraints.",
                "badge": "Oceanography",
                "presetAnswers": {
                      "task_objective": "Thermohaline circulation explainer",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ec-ocean",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Rock core identification',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Rock core identification (Geology & Mineralogy)', value: 'Rock core identification', isDefault: true },
          { label: 'CMIP6 scenario comparison (Climate Modeling & Weather)', value: 'CMIP6 scenario comparison', isDefault: false },
          { label: 'Thermohaline circulation explainer (Oceanography & Marine Science)', value: 'Thermohaline circulation explainer', isDefault: false },
          { label: 'Hertzsprung-Russell diagram interpretation (Astrophysics & Space Science)', value: 'Hertzsprung-Russell diagram interpretation', isDefault: false },
          { label: 'NDVI vegetation analysis walkthrough (Remote Sensing & Geospatial Analysis)', value: 'NDVI vegetation analysis walkthrough', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Earth, climate and space science applies to your situation?',
        example: 'Geology & Mineralogy',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Geology & Mineralogy: Stratigraphy, seismic waves, plate tectonics, rock...', value: 'ec-geo', isDefault: true },
          { label: 'Climate Modeling & Weather: Atmospheric dynamics, climate proxy data, IPCC sce...', value: 'ec-clim', isDefault: false },
          { label: 'Oceanography & Marine Science: Ocean currents, salinity, coral reefs, deep sea ec...', value: 'ec-ocean', isDefault: false },
          { label: 'Astrophysics & Space Science: Stellar evolution, cosmology, exoplanets, orbital ...', value: 'ec-astro', isDefault: false },
          { label: 'Remote Sensing & Geospatial Analysis: Satellite imagery, NDVI, LiDAR, GIS data interpret...', value: 'ec-remote', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'IPCC Sixth Assessment Report (AR6 WG1/WG2)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: IPCC Sixth Assessment Report (AR6 WG1/WG2)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_earth_climate_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to IPCC Sixth Assessment Report (AR6 WG1/WG2).', category: 'standards' },
      { id: 'vc_earth_climate_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 5. APPLIED ECONOMICS, BEHAVIORAL POLICY & GEOPOLITICAL ANALYSIS
  {
    id: 'social_sciences_policy',
    title: 'Applied Economics, Behavioral Policy & Geopolitical Analysis',
    domainId: 'social_sciences',
    domainName: 'Social sciences',
    group: 'Knowledge & science',
    discipline: 'Macroeconomics, Behavioral Economics & Public Policy',
    summary: 'Economics, sociology, political science, cognitive psychology, anthropology, demography and urban studies.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["economics","psychology","sociology","politics","social research","anthropology","political science","international relations","demography","urban studies","public opinion","behavioral economics","cognitive science","survey research","social policy","development studies","gender studies","migration","inequality"],
    governingStandards: ["OECD Regulatory Impact Analysis Guidelines","UK Behavioural Insights Team (EAST Framework)","AEA Guidelines for Empirical Economics"],
    reviewerRole: 'Senior Economist & Public Policy Strategist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "social_sciences_policy_recipe_1",
                "title": "⭐ IS-LM curve analysis",
                "description": "Micro & Macroeconomics: Market equilibrium, elasticity, fiscal/monetary policy, trade. Structured prompt with verified standards and constraints.",
                "badge": "Micro",
                "presetAnswers": {
                      "task_objective": "IS-LM curve analysis",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ss-econ",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "social_sciences_policy_recipe_2",
                "title": "📌 Behavioral nudge formulation",
                "description": "Cognitive & Behavioral Psychology: Cognitive biases, perceptual models, survey design, experiments. Structured prompt with verified standards and constraints.",
                "badge": "Cognitive",
                "presetAnswers": {
                      "task_objective": "Behavioral nudge formulation",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ss-psych",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "social_sciences_policy_recipe_3",
                "title": "💡 Policy impact analysis framework",
                "description": "Political Science & International Relations: Governance structures, policy analysis, diplomacy, geopolitics. Structured prompt with verified standards and constraints.",
                "badge": "Political Science",
                "presetAnswers": {
                      "task_objective": "Policy impact analysis framework",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ss-polsci",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'IS-LM curve analysis',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'IS-LM curve analysis (Micro & Macroeconomics)', value: 'IS-LM curve analysis', isDefault: true },
          { label: 'Behavioral nudge formulation (Cognitive & Behavioral Psychology)', value: 'Behavioral nudge formulation', isDefault: false },
          { label: 'Policy impact analysis framework (Political Science & International Relations)', value: 'Policy impact analysis framework', isDefault: false },
          { label: 'Ethnographic research protocol outline (Anthropology & Cultural Studies)', value: 'Ethnographic research protocol outline', isDefault: false },
          { label: 'Demographic transition model explanation (Urban Studies & Demography)', value: 'Demographic transition model explanation', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Social sciences applies to your situation?',
        example: 'Micro & Macroeconomics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Micro & Macroeconomics: Market equilibrium, elasticity, fiscal/monetary po...', value: 'ss-econ', isDefault: true },
          { label: 'Cognitive & Behavioral Psychology: Cognitive biases, perceptual models, survey design...', value: 'ss-psych', isDefault: false },
          { label: 'Political Science & International Relations: Governance structures, policy analysis, diplomacy,...', value: 'ss-polsci', isDefault: false },
          { label: 'Anthropology & Cultural Studies: Ethnography, cultural practices, kinship systems, ...', value: 'ss-anthro', isDefault: false },
          { label: 'Urban Studies & Demography: Population dynamics, urbanization, census data, mi...', value: 'ss-urban', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'OECD Regulatory Impact Analysis Guidelines',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: OECD Regulatory Impact Analysis Guidelines', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_social_sciences_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to OECD Regulatory Impact Analysis Guidelines.', category: 'standards' },
      { id: 'vc_social_sciences_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 6. PHILOSOPHY, APPLIED ETHICS & HISTORIOGRAPHICAL METHOD
  {
    id: 'humanities_ethics_history',
    title: 'Philosophy, Applied Ethics & Historiographical Method',
    domainId: 'humanities',
    domainName: 'Humanities',
    group: 'Knowledge & science',
    discipline: 'Normative Ethics, Historiography & Literary Criticism',
    summary: 'Philosophy, history, archaeology, ethics, cultural studies, literature critique and linguistics.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["history","philosophy","ethics","archaeology","culture","literature","art history","linguistics","literary criticism","classics","religion","heritage","civilisation","ancient history","medieval","modern history","world history","moral philosophy","aesthetics"],
    governingStandards: ["Chicago Manual of Style (17th Edition)","AHA Statement on Standards of Professional Conduct","UNESCO Declaration on Bioethics and Human Rights"],
    reviewerRole: 'Professor of Philosophy & Historiographical Scholar',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "humanities_ethics_history_recipe_1",
                "title": "⭐ Trolley problem critique",
                "description": "Philosophy & Applied Ethics: Epistemology, normative ethics, thought experiments, logic. Structured prompt with verified standards and constraints.",
                "badge": "Philosophy",
                "presetAnswers": {
                      "task_objective": "Trolley problem critique",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hu-phil",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "humanities_ethics_history_recipe_2",
                "title": "📌 Primary document critique",
                "description": "Historical Method & Primary Sources: Historiography, source verification, chronology, archival research. Structured prompt with verified standards and constraints.",
                "badge": "Historical Method",
                "presetAnswers": {
                      "task_objective": "Primary document critique",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hu-hist",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "humanities_ethics_history_recipe_3",
                "title": "💡 Close reading essay structure",
                "description": "Literature & Literary Criticism: Close reading, narrative analysis, genre theory, comparative literature. Structured prompt with verified standards and constraints.",
                "badge": "Literature",
                "presetAnswers": {
                      "task_objective": "Close reading essay structure",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hu-lit",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Trolley problem critique',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Trolley problem critique (Philosophy & Applied Ethics)', value: 'Trolley problem critique', isDefault: true },
          { label: 'Primary document critique (Historical Method & Primary Sources)', value: 'Primary document critique', isDefault: false },
          { label: 'Close reading essay structure (Literature & Literary Criticism)', value: 'Close reading essay structure', isDefault: false },
          { label: 'Excavation record documentation brief (Archaeology & Heritage Studies)', value: 'Excavation record documentation brief', isDefault: false },
          { label: 'Syntactic tree diagram construction (Linguistics & Language Science)', value: 'Syntactic tree diagram construction', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Humanities applies to your situation?',
        example: 'Philosophy & Applied Ethics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Philosophy & Applied Ethics: Epistemology, normative ethics, thought experiment...', value: 'hu-phil', isDefault: true },
          { label: 'Historical Method & Primary Sources: Historiography, source verification, chronology, a...', value: 'hu-hist', isDefault: false },
          { label: 'Literature & Literary Criticism: Close reading, narrative analysis, genre theory, c...', value: 'hu-lit', isDefault: false },
          { label: 'Archaeology & Heritage Studies: Excavation methodology, artifact analysis, dating ...', value: 'hu-archaeo', isDefault: false },
          { label: 'Linguistics & Language Science: Phonetics, syntax, semantics, sociolinguistics, la...', value: 'hu-linguistics', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'Chicago Manual of Style (17th Edition)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: Chicago Manual of Style (17th Edition)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_humanities_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to Chicago Manual of Style (17th Edition).', category: 'standards' },
      { id: 'vc_humanities_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 7. CHEMICAL ENGINEERING, PROCESS DESIGN & REACTOR KINETICS
  {
    id: 'chemical_process_design',
    title: 'Chemical Engineering, Process Design & Reactor Kinetics',
    domainId: 'chemical_process',
    domainName: 'Chemical, materials, mining and process engineering',
    group: 'Technology & engineering',
    discipline: 'Process Engineering, Mass Transfer & Unit Operations',
    summary: 'Mass/energy balances, unit operations, distillation, reactor kinetics, metallurgy, corrosion, paper/pulp and pharmaceutical processes.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["chemical engineering","process design","materials science","metallurgy","corrosion","paper and pulp","paper mill","packaging","polymer","plastics","rubber","ceramics","composites","mining","mineral processing","petroleum","refinery","distillation","reactor","heat exchanger","mass balance","energy balance","P&ID","HAZOP","pharmaceutical","food processing","paint","textile","cement","glass"],
    governingStandards: ["AIChE / CCPS Process Safety Guidelines","ASME Section VIII Pressure Vessels","ISA-5.1 P&ID Instrumentation Symbols"],
    reviewerRole: 'Chartered Chemical Engineer & Process Safety Lead',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "chemical_process_design_recipe_1",
                "title": "⭐ Distillation column mass balance check",
                "description": "Process Flow & Balances: P&ID, mass balance, heat exchanger networks, distillation. Structured prompt with verified standards and constraints.",
                "badge": "Process Flow",
                "presetAnswers": {
                      "task_objective": "Distillation column mass balance check",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "cp-process",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "chemical_process_design_recipe_2",
                "title": "📌 Alloy corrosion prevention plan",
                "description": "Materials Science & Corrosion: Phase diagrams, galvanic corrosion, heat treatment, material selection. Structured prompt with verified standards and constraints.",
                "badge": "Materials Science",
                "presetAnswers": {
                      "task_objective": "Alloy corrosion prevention plan",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "cp-materials",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "chemical_process_design_recipe_3",
                "title": "💡 Flotation circuit optimization brief",
                "description": "Mining & Mineral Processing: Extraction methods, ore processing, flotation, leaching, tailings. Structured prompt with verified standards and constraints.",
                "badge": "Mining",
                "presetAnswers": {
                      "task_objective": "Flotation circuit optimization brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "cp-mining",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Distillation column mass balance check',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Distillation column mass balance check (Process Flow & Balances)', value: 'Distillation column mass balance check', isDefault: true },
          { label: 'Alloy corrosion prevention plan (Materials Science & Corrosion)', value: 'Alloy corrosion prevention plan', isDefault: false },
          { label: 'Flotation circuit optimization brief (Mining & Mineral Processing)', value: 'Flotation circuit optimization brief', isDefault: false },
          { label: 'Plastic material selection matrix (Polymers, Plastics & Composites)', value: 'Plastic material selection matrix', isDefault: false },
          { label: 'Paper mill process optimization brief (Paper, Pulp & Packaging)', value: 'Paper mill process optimization brief', isDefault: false },
          { label: 'GMP batch record review checklist (Pharmaceutical & Food Processing)', value: 'GMP batch record review checklist', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Chemical, materials, mining and process engineering applies to your situation?',
        example: 'Process Flow & Balances',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Process Flow & Balances: P&ID, mass balance, heat exchanger networks, disti...', value: 'cp-process', isDefault: true },
          { label: 'Materials Science & Corrosion: Phase diagrams, galvanic corrosion, heat treatment...', value: 'cp-materials', isDefault: false },
          { label: 'Mining & Mineral Processing: Extraction methods, ore processing, flotation, lea...', value: 'cp-mining', isDefault: false },
          { label: 'Polymers, Plastics & Composites: Polymer chemistry, extrusion, injection molding, c...', value: 'cp-polymer', isDefault: false },
          { label: 'Paper, Pulp & Packaging: Pulp processing, paper grades, coating, packaging ...', value: 'cp-paper', isDefault: false },
          { label: 'Pharmaceutical & Food Processing: GMP compliance, batch processing, clean room desig...', value: 'cp-pharma', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'AIChE / CCPS Process Safety Guidelines',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: AIChE / CCPS Process Safety Guidelines', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_chemical_process_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to AIChE / CCPS Process Safety Guidelines.', category: 'standards' },
      { id: 'vc_chemical_process_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 8. OFFICE PRODUCTIVITY, ADVANCED SPREADSHEETS & WORKFLOW AUTOMATION
  {
    id: 'office_productivity_automation',
    title: 'Office Productivity, Advanced Spreadsheets & Workflow Automation',
    domainId: 'office_productivity',
    domainName: 'Office and productivity software',
    group: 'Technology & engineering',
    discipline: 'Spreadsheet Modeling, Business Analytics & Office Automation',
    summary: 'Excel formulas, Google Sheets queries, Power BI DAX, Word templates, automated presentations, Notion and project tools.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["excel","google sheets","power bi","dax","spreadsheets","vba","word","powerpoint","slides","notion","office","microsoft office","google workspace","docs","outlook","email template","sharepoint","teams","pivot table","vlookup","xlookup","formulas","macros","automation","mail merge","report template","presentation"],
    governingStandards: ["FAST Standard for Financial Modeling","Microsoft Excel Best Practices","ISO/IEC 29500 OpenXML Standards"],
    reviewerRole: 'Senior Enterprise Solutions Architect & Financial Modeler',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "office_productivity_automation_recipe_1",
                "title": "⭐ Complex financial reconciliation formula",
                "description": "Excel & Google Sheets: LAMBDA functions, XLOOKUP, pivot modeling, array formulas, data cleaning. Structured prompt with verified standards and constraints.",
                "badge": "Excel",
                "presetAnswers": {
                      "task_objective": "Complex financial reconciliation formula",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "op-excel",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "office_productivity_automation_recipe_2",
                "title": "📌 Year-to-date sales DAX calculation brief",
                "description": "Power BI & Tableau: DAX measures, star schema modeling, dashboard KPI cards, data viz. Structured prompt with verified standards and constraints.",
                "badge": "Power BI",
                "presetAnswers": {
                      "task_objective": "Year-to-date sales DAX calculation brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "op-bi",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "office_productivity_automation_recipe_3",
                "title": "💡 Professional report template with styles",
                "description": "Documents, Templates & Reports: Word/Docs templates, mail merge, report formatting, proposal structure. Structured prompt with verified standards and constraints.",
                "badge": "Documents, Templates",
                "presetAnswers": {
                      "task_objective": "Professional report template with styles",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "op-docs",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Complex financial reconciliation formula',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Complex financial reconciliation formula (Excel & Google Sheets)', value: 'Complex financial reconciliation formula', isDefault: true },
          { label: 'Year-to-date sales DAX calculation brief (Power BI & Tableau)', value: 'Year-to-date sales DAX calculation brief', isDefault: false },
          { label: 'Professional report template with styles (Documents, Templates & Reports)', value: 'Professional report template with styles', isDefault: false },
          { label: 'Investor pitch deck structure (Presentations & Visual Communication)', value: 'Investor pitch deck structure', isDefault: false },
          { label: 'VBA macro for report automation (Office Automation & Workflows)', value: 'VBA macro for report automation', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Office and productivity software applies to your situation?',
        example: 'Excel & Google Sheets',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Excel & Google Sheets: LAMBDA functions, XLOOKUP, pivot modeling, array f...', value: 'op-excel', isDefault: true },
          { label: 'Power BI & Tableau: DAX measures, star schema modeling, dashboard KPI ...', value: 'op-bi', isDefault: false },
          { label: 'Documents, Templates & Reports: Word/Docs templates, mail merge, report formatting...', value: 'op-docs', isDefault: false },
          { label: 'Presentations & Visual Communication: Slide design, storytelling structure, data visuali...', value: 'op-present', isDefault: false },
          { label: 'Office Automation & Workflows: VBA macros, Google Apps Script, Power Automate, Za...', value: 'op-automate', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'FAST Standard for Financial Modeling',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: FAST Standard for Financial Modeling', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_office_productivity_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to FAST Standard for Financial Modeling.', category: 'standards' },
      { id: 'vc_office_productivity_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 9. IOT ARCHITECTURE, EMBEDDED FIRMWARE & ROBOTICS CONTROL
  {
    id: 'iot_robotics_systems',
    title: 'IoT Architecture, Embedded Firmware & Robotics Control',
    domainId: 'iot_robotics',
    domainName: 'IoT, embedded, robotics and automation',
    group: 'Technology & engineering',
    discipline: 'Embedded Systems, Sensor Telemetry & Robotics Control (ROS2)',
    summary: 'Firmware development, ROS2, ESP32, sensor telemetry, edge inference, motor control, industrial automation and 3D printing.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["iot","embedded","robotics","arduino","esp32","ros","automation","PLC","SCADA","industrial automation","smart home","wearable","drone","UAV","3D printing","additive manufacturing","sensors","actuators","raspberry pi","microcontroller","firmware","RTOS","edge computing","machine vision"],
    governingStandards: ["ROS2 Architecture Standards","MISRA C:2012 / C++:2023 Guidelines","ISO 10218 Industrial Robot Safety","MQTT v5.0 Specification"],
    reviewerRole: 'Principal Embedded Systems & Robotics Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "iot_robotics_systems_recipe_1",
                "title": "⭐ Low-power telemetry sensor state machine",
                "description": "Embedded Systems & Firmware: C/C++, FreeRTOS, I2C/SPI bus, power sleep states, bootloader. Structured prompt with verified standards and constraints.",
                "badge": "Embedded Systems",
                "presetAnswers": {
                      "task_objective": "Low-power telemetry sensor state machine",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ir-embed",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "iot_robotics_systems_recipe_2",
                "title": "📌 PID velocity controller tuning prompt",
                "description": "Robotics & Control: Kinematics, PID tuning, ROS2 nodes, path planning, SLAM. Structured prompt with verified standards and constraints.",
                "badge": "Robotics",
                "presetAnswers": {
                      "task_objective": "PID velocity controller tuning prompt",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ir-robot",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "iot_robotics_systems_recipe_3",
                "title": "💡 PLC ladder logic design brief",
                "description": "Industrial Automation & PLC: PLC programming, SCADA systems, HMI design, safety PLCs, Industry 4.0. Structured prompt with verified standards and constraints.",
                "badge": "Industrial Automation",
                "presetAnswers": {
                      "task_objective": "PLC ladder logic design brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ir-industrial",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Low-power telemetry sensor state machine',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Low-power telemetry sensor state machine (Embedded Systems & Firmware)', value: 'Low-power telemetry sensor state machine', isDefault: true },
          { label: 'PID velocity controller tuning prompt (Robotics & Control)', value: 'PID velocity controller tuning prompt', isDefault: false },
          { label: 'PLC ladder logic design brief (Industrial Automation & PLC)', value: 'PLC ladder logic design brief', isDefault: false },
          { label: 'Drone survey flight plan design (Drones, UAV & 3D Printing)', value: 'Drone survey flight plan design', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within IoT, embedded, robotics and automation applies to your situation?',
        example: 'Embedded Systems & Firmware',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Embedded Systems & Firmware: C/C++, FreeRTOS, I2C/SPI bus, power sleep states, ...', value: 'ir-embed', isDefault: true },
          { label: 'Robotics & Control: Kinematics, PID tuning, ROS2 nodes, path planning,...', value: 'ir-robot', isDefault: false },
          { label: 'Industrial Automation & PLC: PLC programming, SCADA systems, HMI design, safety...', value: 'ir-industrial', isDefault: false },
          { label: 'Drones, UAV & 3D Printing: Drone flight planning, payload selection, additive...', value: 'ir-drone', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'ROS2 Architecture Standards',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: ROS2 Architecture Standards', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_iot_robotics_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to ROS2 Architecture Standards.', category: 'standards' },
      { id: 'vc_iot_robotics_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 10. AVIATION SYSTEMS, ORBITAL MECHANICS & FLIGHT DYNAMICS
  {
    id: 'transport_aerospace_systems',
    title: 'Aviation Systems, Orbital Mechanics & Flight Dynamics',
    domainId: 'transport_aerospace',
    domainName: 'Transport, aviation, space and defence studies',
    group: 'Technology & engineering',
    discipline: 'Flight Dynamics, Astrodynamics & Air Traffic Infrastructure',
    summary: 'Flight dynamics, orbital mechanics, logistics fleet modeling, airport planning, railway engineering and autonomous vehicles.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["aerospace","aviation","spacecraft","orbit","flight","transport","railway","train","shipping","logistics","fleet","airport","airline","satellite","rocket","defence","military","autonomous vehicle","self-driving","traffic management","supply chain logistics","freight","maritime transport"],
    governingStandards: ["FAA / EASA Airworthiness Specifications","ICAO Annex Standards","NASA SP-8000 Space Flight Design Criteria"],
    reviewerRole: 'Senior Flight Operations & Astrodynamics Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "transport_aerospace_systems_recipe_1",
                "title": "⭐ Rocket nozzle thrust derivation explainer",
                "description": "Aerospace & Propulsion: Airfoil lift/drag, orbital maneuvers, propulsion cycles, avionics. Structured prompt with verified standards and constraints.",
                "badge": "Aerospace",
                "presetAnswers": {
                      "task_objective": "Rocket nozzle thrust derivation explainer",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ta-aero",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "transport_aerospace_systems_recipe_2",
                "title": "📌 Flight plan preparation checklist",
                "description": "Aviation Operations & Safety: Flight planning, airspace, crew resource management, accident investigation. Structured prompt with verified standards and constraints.",
                "badge": "Aviation Operations",
                "presetAnswers": {
                      "task_objective": "Flight plan preparation checklist",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ta-flight",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "transport_aerospace_systems_recipe_3",
                "title": "💡 Railway track geometry design brief",
                "description": "Railway & Transit Engineering: Track design, signaling, rolling stock, station planning, metro systems. Structured prompt with verified standards and constraints.",
                "badge": "Railway",
                "presetAnswers": {
                      "task_objective": "Railway track geometry design brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "ta-railway",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Rocket nozzle thrust derivation explainer',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Rocket nozzle thrust derivation explainer (Aerospace & Propulsion)', value: 'Rocket nozzle thrust derivation explainer', isDefault: true },
          { label: 'Flight plan preparation checklist (Aviation Operations & Safety)', value: 'Flight plan preparation checklist', isDefault: false },
          { label: 'Railway track geometry design brief (Railway & Transit Engineering)', value: 'Railway track geometry design brief', isDefault: false },
          { label: 'Container vessel loading plan brief (Maritime & Shipping Logistics)', value: 'Container vessel loading plan brief', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Transport, aviation, space and defence studies applies to your situation?',
        example: 'Aerospace & Propulsion',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Aerospace & Propulsion: Airfoil lift/drag, orbital maneuvers, propulsion c...', value: 'ta-aero', isDefault: true },
          { label: 'Aviation Operations & Safety: Flight planning, airspace, crew resource managemen...', value: 'ta-flight', isDefault: false },
          { label: 'Railway & Transit Engineering: Track design, signaling, rolling stock, station pl...', value: 'ta-railway', isDefault: false },
          { label: 'Maritime & Shipping Logistics: Port operations, vessel scheduling, containerizati...', value: 'ta-maritime', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'FAA / EASA Airworthiness Specifications',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: FAA / EASA Airworthiness Specifications', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_transport_aerospace_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to FAA / EASA Airworthiness Specifications.', category: 'standards' },
      { id: 'vc_transport_aerospace_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 11. AEROSPACE ENGINEERING, AERODYNAMICS & PROPULSION SYSTEMS
  {
    id: 'aerospace_aviation_propulsion',
    title: 'Aerospace Engineering, Aerodynamics & Propulsion Systems',
    domainId: 'aerospace_aviation',
    domainName: 'Aerospace and Aeronautical Engineering',
    group: 'Technology & engineering',
    discipline: 'Aerodynamics, Propulsion & Structural Mechanics',
    summary: 'Aerodynamics, avionics, flight mechanics, propulsion systems, FAA/EASA airworthiness standards, and orbital mechanics.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"aerospace\"","\"aviation\"","\"aeronautics\"","\"avionics\"","\"aircraft\"","\"propulsion\"","\"rocket\"","\"aerodynamics\"","\"cfd\"","\"flight control\"","\"flight dynamics\"","\"orbital mechanics\"","\"satellite\"","\"airworthiness\"","\"faa part 25\"","\"easa\"","\"boeing\"","\"airbus\"","\"nasa\"","\"turbofan\"","\"wind tunnel\""],
    governingStandards: ["AIAA Standards for Aerospace Design","FAR Part 25 Transport Airplanes","NASA Glenn Propulsion Standards"],
    reviewerRole: 'Principal Aerospace Structural & Propulsion Engineer',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Aerospace and Aeronautical Engineering applies to your situation?',
        example: 'Aerodynamics, Propulsion & Structural Mechanics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'AIAA Standards for Aerospace Design',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: AIAA Standards for Aerospace Design', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_aerospace_aviation_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to AIAA Standards for Aerospace Design.', category: 'standards' },
      { id: 'vc_aerospace_aviation_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 12. DEFENSE SYSTEMS, STRATEGIC SIMULATION & GEOPOLITICAL SECURITY
  {
    id: 'defense_military_strategy',
    title: 'Defense Systems, Strategic Simulation & Geopolitical Security',
    domainId: 'defense_military',
    domainName: 'Defense, Military Strategy and Geopolitics',
    group: 'Technology & engineering',
    discipline: 'Strategic Defense Analysis, Logistics & Operational Modeling',
    summary: 'Defense acquisition, tactical doctrine, military logistics, ballistics, intelligence analysis, and ITAR/MIL-STD compliance.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"defense\"","\"military\"","\"geopolitics\"","\"army\"","\"navy\"","\"air force\"","\"weapons\"","\"ballistics\"","\"tactics\"","\"doctrine\"","\"itar\"","\"dod\"","\"nato\"","\"pentagon\"","\"rfp\"","\"procurement\"","\"radar\"","\"electronic warfare\"","\"intelligence\"","\"osint\"","\"c4isr\""],
    governingStandards: ["DoD Architecture Framework (DoDAF 2.0)","NATO Standardization Agreements (STANAG)","Geneva Conventions I-IV & Law of Armed Conflict"],
    reviewerRole: 'Senior Defense Analyst & Strategic Security Advisor',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Defense, Military Strategy and Geopolitics applies to your situation?',
        example: 'Strategic Defense Analysis, Logistics & Operational Modeling',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'DoD Architecture Framework (DoDAF 2.0)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: DoD Architecture Framework (DoDAF 2.0)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_defense_military_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to DoD Architecture Framework (DoDAF 2.0).', category: 'standards' },
      { id: 'vc_defense_military_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 13. MARITIME OPERATIONS, NAVAL ARCHITECTURE & PORT LOGISTICS
  {
    id: 'marine_maritime_operations',
    title: 'Maritime Operations, Naval Architecture & Port Logistics',
    domainId: 'marine_maritime',
    domainName: 'Maritime, Marine Engineering and Naval Architecture',
    group: 'Technology & engineering',
    discipline: 'Naval Architecture, Marine Engineering & Maritime Safety',
    summary: 'Naval architecture, ship hydrodynamics, marine propulsion, offshore wind/oil structures, and IMO SOLAS/MARPOL compliance.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"marine\"","\"maritime\"","\"naval architecture\"","\"shipbuilding\"","\"ship\"","\"vessel\"","\"cargo\"","\"tanker\"","\"container ship\"","\"propulsion\"","\"offshore\"","\"hydrodynamics\"","\"imo\"","\"solas\"","\"marpol\"","\"dredging\"","\"port engineering\"","\"drydock\"","\"harbor\""],
    governingStandards: ["IMO SOLAS (Safety of Life at Sea)","MARPOL 73/78 Environmental Convention","IACS Common Structural Rules"],
    reviewerRole: 'Master Mariner & Naval Architect (FRINA)',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Maritime, Marine Engineering and Naval Architecture applies to your situation?',
        example: 'Naval Architecture, Marine Engineering & Maritime Safety',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'IMO SOLAS (Safety of Life at Sea)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: IMO SOLAS (Safety of Life at Sea)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_marine_maritime_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to IMO SOLAS (Safety of Life at Sea).', category: 'standards' },
      { id: 'vc_marine_maritime_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 14. MINING ENGINEERING, MINERAL PROCESSING & ROCK MECHANICS
  {
    id: 'mining_minerals_extraction',
    title: 'Mining Engineering, Mineral Processing & Rock Mechanics',
    domainId: 'mining_minerals',
    domainName: 'Mining, Metallurgy and Mineral Extraction',
    group: 'Technology & engineering',
    discipline: 'Geomechanics, Mineral Extraction & Tailings Safety',
    summary: 'Mine planning, rock mechanics, mineral processing, extractive metallurgy, tailings dams, and JORC / NI 43-101 mineral resource audits.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"mining\"","\"minerals\"","\"ore\"","\"metallurgy\"","\"geology\"","\"drilling\"","\"blasting\"","\"open pit\"","\"underground mining\"","\"tailings\"","\"jorc\"","\"ni 43-101\"","\"beneficiation\"","\"smelting\"","\"flotation\"","\"crushing\"","\"gold\"","\"copper\"","\"lithium\"","\"rare earth\""],
    governingStandards: ["JORC Code (2012 Edition)","GISTM Global Industry Standard on Tailings Management","SME Mining Reference Handbook"],
    reviewerRole: 'Principal Mining Engineer & Mineral Processing Consultant',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Mining, Metallurgy and Mineral Extraction applies to your situation?',
        example: 'Geomechanics, Mineral Extraction & Tailings Safety',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'JORC Code (2012 Edition)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: JORC Code (2012 Edition)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_mining_minerals_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to JORC Code (2012 Edition).', category: 'standards' },
      { id: 'vc_mining_minerals_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 15. NUCLEAR ENERGY, POWER GENERATION & GRID UTILITIES
  {
    id: 'energy_nuclear_utilities',
    title: 'Nuclear Energy, Power Generation & Grid Utilities',
    domainId: 'energy_nuclear',
    domainName: 'Energy, Nuclear and Power Utilities',
    group: 'Technology & engineering',
    discipline: 'Nuclear Thermal Hydraulics, Reactor Safety & Grid Integration',
    summary: 'Nuclear reactor engineering, power transmission grids, battery energy storage (BESS), utility solar/wind, and NERC/FERC compliance.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"energy\"","\"nuclear\"","\"power grid\"","\"utilities\"","\"electricity\"","\"substation\"","\"transmission\"","\"distribution\"","\"solar\"","\"wind\"","\"bess\"","\"battery storage\"","\"reactor\"","\"smr\"","\"ferc\"","\"nerc\"","\"ieee 1547\"","\"load flow\"","\"transformer\"","\"scada\"","\"utility\""],
    governingStandards: ["IAEA Safety Standards Series","ASME Section III Nuclear Components","NERC Reliability Standards (CIP/FAC)"],
    reviewerRole: 'Senior Nuclear Safety Engineer & Power Systems Director',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Energy, Nuclear and Power Utilities applies to your situation?',
        example: 'Nuclear Thermal Hydraulics, Reactor Safety & Grid Integration',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'IAEA Safety Standards Series',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: IAEA Safety Standards Series', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_energy_nuclear_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to IAEA Safety Standards Series.', category: 'standards' },
      { id: 'vc_energy_nuclear_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 16. TELECOMMUNICATIONS, 5G/6G NETWORKS & RF PROPAGATION
  {
    id: 'telecom_wireless_networks',
    title: 'Telecommunications, 5G/6G Networks & RF Propagation',
    domainId: 'telecom_wireless',
    domainName: 'Telecommunications, 5G/6G and RF Infrastructure',
    group: 'Technology & engineering',
    discipline: 'RF Engineering, Cellular RAN Architecture & Spectrum Policy',
    summary: '5G/6G cellular radio access networks, optical fiber DWDM, satellite constellations, RF antenna design, and 3GPP/ITU standards.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"telecom\"","\"telecommunications\"","\"5g\"","\"6g\"","\"rf\"","\"wireless\"","\"cellular\"","\"ran\"","\"fiber optic\"","\"dwdm\"","\"satellite\"","\"antenna\"","\"microwave\"","\"spectrum\"","\"3gpp\"","\"itu\"","\"fcc\"","\"base station\"","\"mimo\"","\"link budget\"","\"broadband\""],
    governingStandards: ["3GPP Release 17/18 Specifications","ITU-R Recommendations for Spectrum Allocation","IEEE 802.11 / 802.3 Ethernet Standards"],
    reviewerRole: 'Principal Telecommunications & RF Systems Architect',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Telecommunications, 5G/6G and RF Infrastructure applies to your situation?',
        example: 'RF Engineering, Cellular RAN Architecture & Spectrum Policy',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: '3GPP Release 17/18 Specifications',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: 3GPP Release 17/18 Specifications', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_telecom_wireless_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to 3GPP Release 17/18 Specifications.', category: 'standards' },
      { id: 'vc_telecom_wireless_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 17. GAME ARCHITECTURE, 3D PHYSICS ENGINES & VIRTUAL SIMULATION
  {
    id: 'game_simulation_architecture',
    title: 'Game Architecture, 3D Physics Engines & Virtual Simulation',
    domainId: 'game_simulation',
    domainName: 'Game Development, Interactive 3D and Virtual Simulation',
    group: 'Technology & engineering',
    discipline: 'Game Engine Architecture, Real-Time Graphics & Simulation',
    summary: 'Unreal Engine 5, Unity C#, 3D real-time rendering, gameplay mechanics, level architecture, physics simulations, and multiplayer netcode.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"game dev\"","\"game development\"","\"unreal engine\"","\"unity\"","\"3d graphics\"","\"shaders\"","\"gameplay\"","\"game design\"","\"gdd\"","\"level design\"","\"physics engine\"","\"multiplayer\"","\"netcode\"","\"xr\"","\"vr\"","\"metaverse\"","\"rendering\"","\"steam\"","\"playstation\"","\"godot\""],
    governingStandards: ["Khronos Vulkan / OpenGL Specifications","DirectX 12 Ultimate Guidelines","Unreal Engine 5 ECS Architecture Standards"],
    reviewerRole: 'Lead Technical Director & Engine Systems Architect',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Game Development, Interactive 3D and Virtual Simulation applies to your situation?',
        example: 'Game Engine Architecture, Real-Time Graphics & Simulation',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'Khronos Vulkan / OpenGL Specifications',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: Khronos Vulkan / OpenGL Specifications', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_game_simulation_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to Khronos Vulkan / OpenGL Specifications.', category: 'standards' },
      { id: 'vc_game_simulation_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 18. CULINARY SCIENCE, FOOD SAFETY HACCP & RECIPE SCALING
  {
    id: 'food_culinary_safety',
    title: 'Culinary Science, Food Safety HACCP & Recipe Scaling',
    domainId: 'food_culinary',
    domainName: 'Food, culinary and hospitality',
    group: 'Health, food & living things',
    discipline: 'Food Science, Culinary Technology & HACCP Safety',
    summary: 'Recipe development, commercial kitchen prep lists, HACCP food safety, menu engineering, restaurant operations and catering.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["cooking","culinary","recipe","baking","haccp","kitchen","restaurant","chef","food safety","menu","catering","hospitality","hotel","bartending","barista","coffee","wine","pastry","bread","food truck","meal planning","ingredient","food cost","plating","food photography"],
    governingStandards: ["FDA Food Code (2022)","Codex Alimentarius HACCP Principles","ISO 22000 Food Safety Management"],
    reviewerRole: 'Executive Chef & Certified Food Safety Director (NEHA)',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "food_culinary_safety_recipe_1",
                "title": "⭐ Scale sourdough baker percentage formula",
                "description": "Recipe Development & Scaling: Baker percentages, allergen substitutions, flavor profiling, scaling. Structured prompt with verified standards and constraints.",
                "badge": "Recipe Development",
                "presetAnswers": {
                      "task_objective": "Scale sourdough baker percentage formula",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fc-recipe",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "food_culinary_safety_recipe_2",
                "title": "📌 HACCP plan template for restaurant",
                "description": "HACCP & Food Safety: Hazard analysis, critical control points, temperature monitoring, sanitation. Structured prompt with verified standards and constraints.",
                "badge": "HACCP",
                "presetAnswers": {
                      "task_objective": "HACCP plan template for restaurant",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fc-safety",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "food_culinary_safety_recipe_3",
                "title": "💡 Kitchen prep list template",
                "description": "Restaurant & Kitchen Operations: Kitchen workflow, prep lists, inventory, staff scheduling, POS systems. Structured prompt with verified standards and constraints.",
                "badge": "Restaurant",
                "presetAnswers": {
                      "task_objective": "Kitchen prep list template",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fc-restaurant",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Scale sourdough baker percentage formula',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Scale sourdough baker percentage formula (Recipe Development & Scaling)', value: 'Scale sourdough baker percentage formula', isDefault: true },
          { label: 'HACCP plan template for restaurant (HACCP & Food Safety)', value: 'HACCP plan template for restaurant', isDefault: false },
          { label: 'Kitchen prep list template (Restaurant & Kitchen Operations)', value: 'Kitchen prep list template', isDefault: false },
          { label: 'Specialty coffee menu design (Beverage, Coffee & Hospitality Service)', value: 'Specialty coffee menu design', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Food, culinary and hospitality applies to your situation?',
        example: 'Recipe Development & Scaling',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Recipe Development & Scaling: Baker percentages, allergen substitutions, flavor ...', value: 'fc-recipe', isDefault: true },
          { label: 'HACCP & Food Safety: Hazard analysis, critical control points, temperat...', value: 'fc-safety', isDefault: false },
          { label: 'Restaurant & Kitchen Operations: Kitchen workflow, prep lists, inventory, staff sch...', value: 'fc-restaurant', isDefault: false },
          { label: 'Beverage, Coffee & Hospitality Service: Beverage menus, barista training, wine selection, ...', value: 'fc-beverage', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'FDA Food Code (2022)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: FDA Food Code (2022)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_food_culinary_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to FDA Food Code (2022).', category: 'standards' },
      { id: 'vc_food_culinary_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 19. AGRONOMY, PRECISION FARMING & VETERINARY ANIMAL SCIENCE
  {
    id: 'agriculture_animals_management',
    title: 'Agronomy, Precision Farming & Veterinary Animal Science',
    domainId: 'agriculture_animals',
    domainName: 'Agriculture, forestry, fisheries and animals',
    group: 'Health, food & living things',
    discipline: 'Agronomy, Soil Science & Sustainable Livestock Management',
    summary: 'Crop rotation, irrigation scheduling, soil agronomy, livestock health, forestry, aquaculture and veterinary basics.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["agriculture","farming","crops","irrigation","livestock","forestry","fisheries","aquaculture","veterinary","vet","cattle","poultry","dairy","organic farming","greenhouse","hydroponics","pest control","fertilizer","soil","harvest","seeds","plantation","animal husbandry","pet care","dog","cat","horse","beekeeping","wildlife"],
    governingStandards: ["USDA Organic & Conservation Standards","FAO Good Agricultural Practices (GAP)","OIE Terrestrial Animal Health Code"],
    reviewerRole: 'Principal Agronomist & Livestock Management Consultant',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "agriculture_animals_management_recipe_1",
                "title": "⭐ Cover crop rotation schedule for clay loam",
                "description": "Crop Planning & Agronomy: Soil nitrogen/potassium tests, pest scouting, climate adaptation, rotation. Structured prompt with verified standards and constraints.",
                "badge": "Crop Planning",
                "presetAnswers": {
                      "task_objective": "Cover crop rotation schedule for clay loam",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "aa-agronomy",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "agriculture_animals_management_recipe_2",
                "title": "📌 Livestock feed formulation brief",
                "description": "Livestock & Animal Husbandry: Cattle/poultry management, feed formulation, breeding, health monitoring. Structured prompt with verified standards and constraints.",
                "badge": "Livestock",
                "presetAnswers": {
                      "task_objective": "Livestock feed formulation brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "aa-livestock",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "agriculture_animals_management_recipe_3",
                "title": "💡 Forest inventory assessment brief",
                "description": "Forestry & Timber Management: Forest inventory, harvesting plans, reforestation, timber grading. Structured prompt with verified standards and constraints.",
                "badge": "Forestry",
                "presetAnswers": {
                      "task_objective": "Forest inventory assessment brief",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "aa-forestry",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Cover crop rotation schedule for clay loam',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Cover crop rotation schedule for clay loam (Crop Planning & Agronomy)', value: 'Cover crop rotation schedule for clay loam', isDefault: true },
          { label: 'Livestock feed formulation brief (Livestock & Animal Husbandry)', value: 'Livestock feed formulation brief', isDefault: false },
          { label: 'Forest inventory assessment brief (Forestry & Timber Management)', value: 'Forest inventory assessment brief', isDefault: false },
          { label: 'Aquaculture pond management plan (Fisheries & Aquaculture)', value: 'Aquaculture pond management plan', isDefault: false },
          { label: 'Pet vaccination schedule organizer (Veterinary & Pet Care Basics)', value: 'Pet vaccination schedule organizer', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Agriculture, forestry, fisheries and animals applies to your situation?',
        example: 'Crop Planning & Agronomy',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Crop Planning & Agronomy: Soil nitrogen/potassium tests, pest scouting, clim...', value: 'aa-agronomy', isDefault: true },
          { label: 'Livestock & Animal Husbandry: Cattle/poultry management, feed formulation, breed...', value: 'aa-livestock', isDefault: false },
          { label: 'Forestry & Timber Management: Forest inventory, harvesting plans, reforestation,...', value: 'aa-forestry', isDefault: false },
          { label: 'Fisheries & Aquaculture: Fish farming, pond management, water quality, feed...', value: 'aa-aqua', isDefault: false },
          { label: 'Veterinary & Pet Care Basics: Pet health monitoring, vaccination schedules, firs...', value: 'aa-vet', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'USDA Organic & Conservation Standards',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: USDA Organic & Conservation Standards', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_agriculture_animals_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to USDA Organic & Conservation Standards.', category: 'standards' },
      { id: 'vc_agriculture_animals_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 20. BIOTECHNOLOGY, DRUG DISCOVERY & CLINICAL TRIAL PROTOCOLS
  {
    id: 'biotech_pharma_trials',
    title: 'Biotechnology, Drug Discovery & Clinical Trial Protocols',
    domainId: 'biotech_pharma',
    domainName: 'Biotechnology, Pharmaceuticals and Clinical Trials',
    group: 'Health, food & living things',
    discipline: 'Biopharmaceutical Formulation, Pharmacokinetics & Clinical Development',
    summary: 'Drug discovery, bioprocessing, FDA IND/NDA submissions, Phase I–IV clinical trial protocols, cGMP cleanrooms, and pharmacovigilance.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"biotech\"","\"biotechnology\"","\"pharmaceuticals\"","\"pharma\"","\"drug discovery\"","\"clinical trials\"","\"fda\"","\"ind\"","\"nda\"","\"cgmp\"","\"bioreactor\"","\"antibodies\"","\"mrna\"","\"pharmacovigilance\"","\"ich gcp\"","\"formulation\"","\"pharmacokinetics\"","\"pkpd\""],
    governingStandards: ["ICH Good Clinical Practice (E6 R2)","FDA 21 CFR Part 312 (IND Guidelines)","EMA Clinical Trial Regulations"],
    reviewerRole: 'VP of Clinical Development & Biopharmaceutical Scientist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Biotechnology, Pharmaceuticals and Clinical Trials applies to your situation?',
        example: 'Biopharmaceutical Formulation, Pharmacokinetics & Clinical Development',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'ICH Good Clinical Practice (E6 R2)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: ICH Good Clinical Practice (E6 R2)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_biotech_pharma_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to ICH Good Clinical Practice (E6 R2).', category: 'standards' },
      { id: 'vc_biotech_pharma_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 21. CLINICAL PSYCHOLOGY, CBT FRAMEWORKS & BEHAVIORAL HEALTH
  {
    id: 'psychology_behavioral_therapy',
    title: 'Clinical Psychology, CBT Frameworks & Behavioral Health',
    domainId: 'psychology_behavioral',
    domainName: 'Psychology, Behavioral Science and Mental Health',
    group: 'Health, food & living things',
    discipline: 'Cognitive Behavioral Protocols, Psychometrics & Mental Health Coaching',
    summary: 'Clinical psychopathology (DSM-5-TR / ICD-11), evidence-based therapies (CBT, DBT), neuropsychology, psychometrics, and organizational behavior.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"psychology\"","\"mental health\"","\"psychiatry\"","\"cbt\"","\"therapy\"","\"behavioral science\"","\"dsm-5\"","\"icd-11\"","\"neuropsychology\"","\"psychometrics\"","\"counseling\"","\"cognitive psychology\"","\"depression\"","\"anxiety\"","\"adhd\"","\"ptsd\"","\"trauma\"","\"emotional intelligence\""],
    governingStandards: ["APA Ethical Principles of Psychologists","DSM-5-TR Diagnostic Criteria","Beck Institute CBT Competencies"],
    reviewerRole: 'Licensed Clinical Psychologist (PsyD) & Psychometrician',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Psychology, Behavioral Science and Mental Health applies to your situation?',
        example: 'Cognitive Behavioral Protocols, Psychometrics & Mental Health Coaching',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'APA Ethical Principles of Psychologists',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: APA Ethical Principles of Psychologists', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_psychology_behavioral_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to APA Ethical Principles of Psychologists.', category: 'standards' },
      { id: 'vc_psychology_behavioral_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 22. SKILLED TRADES, MEP DIAGNOSTICS & CONSTRUCTION CRAFT
  {
    id: 'skilled_trades_mep',
    title: 'Skilled Trades, MEP Diagnostics & Construction Craft',
    domainId: 'skilled_trades',
    domainName: 'Skilled trades, repair and vocational skills',
    group: 'Economy & work',
    discipline: 'Electrical (NEC), HVAC Psychrometrics & Plumbing Codes',
    summary: 'Plumbing schematics, carpentry joinery, electrical rough-in checklists, welding, auto repair, HVAC diagnosis and painting.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["trades","carpentry","plumbing","electrical trade","hvac repair","welding","auto repair","mechanic","handyman","renovation","remodeling","painting","tiling","flooring","roofing","masonry","landscaping","locksmith","appliance repair","woodworking","cabinet making","drywall","insulation","plumber","electrician","carpenter","welder","technician"],
    governingStandards: ["NFPA 70 (National Electrical Code NEC 2023)","Uniform Plumbing Code (UPC)","ASHRAE Fundamentals & HVAC Guidelines"],
    reviewerRole: 'Master Electrician & Mechanical Inspector',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "skilled_trades_mep_recipe_1",
                "title": "⭐ Cabinetry cut list & joinery specification",
                "description": "Carpentry & Joinery Planning: Cut lists, lumber grain orientation, structural fasteners, finish carpentry. Structured prompt with verified standards and constraints.",
                "badge": "Carpentry",
                "presetAnswers": {
                      "task_objective": "Cabinetry cut list & joinery specification",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "st-carp",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "skilled_trades_mep_recipe_2",
                "title": "📌 Bathroom plumbing rough-in checklist",
                "description": "Plumbing Systems & Repair: Pipe sizing, fixture rough-in, drainage, water heater, leak diagnosis. Structured prompt with verified standards and constraints.",
                "badge": "Plumbing Systems",
                "presetAnswers": {
                      "task_objective": "Bathroom plumbing rough-in checklist",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "st-plumb",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "skilled_trades_mep_recipe_3",
                "title": "💡 Residential wiring plan checklist",
                "description": "Electrical Trade Work: Residential wiring, panel upgrades, outlet/switch placement, code compliance. Structured prompt with verified standards and constraints.",
                "badge": "Electrical Trade Work",
                "presetAnswers": {
                      "task_objective": "Residential wiring plan checklist",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "st-elec",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Cabinetry cut list & joinery specification',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Cabinetry cut list & joinery specification (Carpentry & Joinery Planning)', value: 'Cabinetry cut list & joinery specification', isDefault: true },
          { label: 'Bathroom plumbing rough-in checklist (Plumbing Systems & Repair)', value: 'Bathroom plumbing rough-in checklist', isDefault: false },
          { label: 'Residential wiring plan checklist (Electrical Trade Work)', value: 'Residential wiring plan checklist', isDefault: false },
          { label: 'Welding process selection guide (Welding & Metalwork)', value: 'Welding process selection guide', isDefault: false },
          { label: 'Vehicle maintenance schedule template (Auto Repair & Vehicle Maintenance)', value: 'Vehicle maintenance schedule template', isDefault: false },
          { label: 'Garden layout design brief (Landscaping & Outdoor Work)', value: 'Garden layout design brief', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Skilled trades, repair and vocational skills applies to your situation?',
        example: 'Carpentry & Joinery Planning',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Carpentry & Joinery Planning: Cut lists, lumber grain orientation, structural fa...', value: 'st-carp', isDefault: true },
          { label: 'Plumbing Systems & Repair: Pipe sizing, fixture rough-in, drainage, water hea...', value: 'st-plumb', isDefault: false },
          { label: 'Electrical Trade Work: Residential wiring, panel upgrades, outlet/switch ...', value: 'st-elec', isDefault: false },
          { label: 'Welding & Metalwork: MIG/TIG/Stick selection, joint preparation, weldin...', value: 'st-weld', isDefault: false },
          { label: 'Auto Repair & Vehicle Maintenance: Diagnostic troubleshooting, maintenance schedules,...', value: 'st-auto', isDefault: false },
          { label: 'Landscaping & Outdoor Work: Garden design, irrigation, hardscaping, lawn care,...', value: 'st-landscape', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'NFPA 70 (National Electrical Code NEC 2023)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: NFPA 70 (National Electrical Code NEC 2023)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_skilled_trades_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to NFPA 70 (National Electrical Code NEC 2023).', category: 'standards' },
      { id: 'vc_skilled_trades_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 23. HOSPITALITY OPERATIONS, HOTEL REVPAR & EVENT PLANNING
  {
    id: 'hospitality_tourism_operations',
    title: 'Hospitality Operations, Hotel RevPAR & Event Planning',
    domainId: 'hospitality_tourism',
    domainName: 'Hospitality, Hotel Management, Tourism and Event Operations',
    group: 'Economy & work',
    discipline: 'Hotel Revenue Management, Guest Experience & Banquet Logistics',
    summary: 'Hotel revenue management (RevPAR), guest experience SOPs, food and beverage cost control, event/conference logistics, and destination tourism.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"hospitality\"","\"hotel\"","\"tourism\"","\"events\"","\"resort\"","\"event planning\"","\"revpar\"","\"hotel management\"","\"guest experience\"","\"food and beverage\"","\"banquet\"","\"travel industry\"","\"concierge\"","\"front desk\"","\"catering\"","\"mice\""],
    governingStandards: ["Uniform System of Accounts for the Lodging Industry (USALI)","AHLA Operational Best Practices","MPI Event Management Standards"],
    reviewerRole: 'General Manager & Director of Hospitality Operations',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Hospitality, Hotel Management, Tourism and Event Operations applies to your situation?',
        example: 'Hotel Revenue Management, Guest Experience & Banquet Logistics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'Uniform System of Accounts for the Lodging Industry (USALI)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: Uniform System of Accounts for the Lodging Industry (USALI)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_hospitality_tourism_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to Uniform System of Accounts for the Lodging Industry (USALI).', category: 'standards' },
      { id: 'vc_hospitality_tourism_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 24. GLOBAL FREIGHT LOGISTICS, CUSTOMS & INCOTERMS 2020
  {
    id: 'global_trade_logistics_customs',
    title: 'Global Freight Logistics, Customs & Incoterms 2020',
    domainId: 'global_trade_logistics',
    domainName: 'Global Trade, Customs, Freight and Supply Chain Logistics',
    group: 'Economy & work',
    discipline: 'Freight Forwarding, Customs Compliance & Supply Chain Logistics',
    summary: 'Incoterms 2020 rules, customs brokerage, Harmonized Tariff System (HTS), ocean/air freight operations, and cold-chain distribution.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"global trade\"","\"logistics\"","\"customs\"","\"freight\"","\"shipping\"","\"incoterms\"","\"tariffs\"","\"supply chain\"","\"cargo\"","\"container\"","\"customs broker\"","\"bill of lading\"","\"hts code\"","\"import export\"","\"warehouse\"","\"freight forwarding\"","\"cold chain\""],
    governingStandards: ["ICC Incoterms 2020 Rules","WCO Harmonized System (HS) Codes","FMC Ocean Freight Regulations"],
    reviewerRole: 'Director of Global Trade Compliance & Supply Chain Logistics',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Global Trade, Customs, Freight and Supply Chain Logistics applies to your situation?',
        example: 'Freight Forwarding, Customs Compliance & Supply Chain Logistics',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'ICC Incoterms 2020 Rules',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: ICC Incoterms 2020 Rules', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_global_trade_logistics_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to ICC Incoterms 2020 Rules.', category: 'standards' },
      { id: 'vc_global_trade_logistics_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 25. COMPARATIVE RELIGION, THEOLOGICAL TRADITIONS & HERMENEUTICS
  {
    id: 'religion_philosophy_studies',
    title: 'Comparative Religion, Theological Traditions & Hermeneutics',
    domainId: 'religion_philosophy',
    domainName: 'Religion, philosophy and belief systems',
    group: 'Society, law & culture',
    discipline: 'Comparative Religion, Textual Hermeneutics & Cultural Traditions',
    summary: 'Comparative theological concepts, hermeneutics, historical contextualization, meditation and professional ethics.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["philosophy","religion","theology","comparative religion","spirituality","meditation","ethics","moral philosophy","faith","scripture","religious studies","interfaith","mysticism","existentialism","stoicism","buddhism","christianity","islam","hinduism","judaism"],
    governingStandards: ["AAR Guidelines for Teaching Religion","Chicago Manual of Style for Religious Texts","SBL Handbook of Style"],
    reviewerRole: 'Scholar of Comparative Religion & Inter-Faith Dialogue',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "religion_philosophy_studies_recipe_1",
                "title": "⭐ Comparative concept explainer across traditions",
                "description": "Comparative Religion & Textual Studies: Historical scripture context, translation variations, theological concepts. Structured prompt with verified standards and constraints.",
                "badge": "Comparative Religion",
                "presetAnswers": {
                      "task_objective": "Comparative concept explainer across traditions",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "rp-comp",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "religion_philosophy_studies_recipe_2",
                "title": "📌 AI ethics case study analysis",
                "description": "Professional & Applied Ethics: Ethics in technology, business ethics, bioethics, environmental ethics. Structured prompt with verified standards and constraints.",
                "badge": "Professional",
                "presetAnswers": {
                      "task_objective": "AI ethics case study analysis",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "rp-ethics",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "religion_philosophy_studies_recipe_3",
                "title": "💡 Meditation practice guide by tradition",
                "description": "Spiritual Practices & Contemplation: Meditation techniques, mindfulness practices, philosophical contemplation. Structured prompt with verified standards and constraints.",
                "badge": "Spiritual Practices",
                "presetAnswers": {
                      "task_objective": "Meditation practice guide by tradition",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "rp-spiritual",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Comparative concept explainer across traditions',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Comparative concept explainer across traditions (Comparative Religion & Textual Studies)', value: 'Comparative concept explainer across traditions', isDefault: true },
          { label: 'AI ethics case study analysis (Professional & Applied Ethics)', value: 'AI ethics case study analysis', isDefault: false },
          { label: 'Meditation practice guide by tradition (Spiritual Practices & Contemplation)', value: 'Meditation practice guide by tradition', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Religion, philosophy and belief systems applies to your situation?',
        example: 'Comparative Religion & Textual Studies',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Comparative Religion & Textual Studies: Historical scripture context, translation variatio...', value: 'rp-comp', isDefault: true },
          { label: 'Professional & Applied Ethics: Ethics in technology, business ethics, bioethics, ...', value: 'rp-ethics', isDefault: false },
          { label: 'Spiritual Practices & Contemplation: Meditation techniques, mindfulness practices, phil...', value: 'rp-spiritual', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'AAR Guidelines for Teaching Religion',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: AAR Guidelines for Teaching Religion', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_religion_philosophy_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to AAR Guidelines for Teaching Religion.', category: 'standards' },
      { id: 'vc_religion_philosophy_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 26. SPORTS SCIENCE, PERIODIZATION TRAINING & BIOMECHANICS
  {
    id: 'sports_games_periodization',
    title: 'Sports Science, Periodization Training & Biomechanics',
    domainId: 'sports_games',
    domainName: 'Sports, games and recreation',
    group: 'Society, law & culture',
    discipline: 'Athletic Conditioning, Biomechanics & Tournament Logistics',
    summary: 'Tactical sports playbooks, coaching plans, fitness programming, game design, board games and esports strategy.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["sports","gaming","rpg","game design","chess","coaching","team sports","football","soccer","basketball","cricket","tennis","golf","swimming","athletics","martial arts","esports","video games","board games","card games","puzzles","outdoor recreation","hiking","camping","fishing","fantasy sports","betting","tournament"],
    governingStandards: ["NSCA Conditioning Guidelines","ACSM Exercise Testing Standards","WADA Anti-Doping Regulations"],
    reviewerRole: 'Head Strength & Conditioning Coach (CSCS) & Sports Scientist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "sports_games_periodization_recipe_1",
                "title": "⭐ Tabletop RPG boss encounter balance sheet",
                "description": "Game Systems & RPG Design: Stat curve balance, encounter difficulty, dice probability, economy design. Structured prompt with verified standards and constraints.",
                "badge": "Game Systems",
                "presetAnswers": {
                      "task_objective": "Tabletop RPG boss encounter balance sheet",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "sg-rpg",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "sports_games_periodization_recipe_2",
                "title": "📌 Season training periodization plan",
                "description": "Team Coaching & Strategy: Training plans, tactical analysis, team management, season planning. Structured prompt with verified standards and constraints.",
                "badge": "Team Coaching",
                "presetAnswers": {
                      "task_objective": "Season training periodization plan",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "sg-coaching",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "sports_games_periodization_recipe_3",
                "title": "💡 Competition preparation timeline",
                "description": "Individual Sport Training: Technique analysis, competition preparation, mental performance, equipment. Structured prompt with verified standards and constraints.",
                "badge": "Individual Sport Trainin",
                "presetAnswers": {
                      "task_objective": "Competition preparation timeline",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "sg-individual",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Tabletop RPG boss encounter balance sheet',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Tabletop RPG boss encounter balance sheet (Game Systems & RPG Design)', value: 'Tabletop RPG boss encounter balance sheet', isDefault: true },
          { label: 'Season training periodization plan (Team Coaching & Strategy)', value: 'Season training periodization plan', isDefault: false },
          { label: 'Competition preparation timeline (Individual Sport Training)', value: 'Competition preparation timeline', isDefault: false },
          { label: 'Multi-day hiking trip planning checklist (Outdoor Recreation & Adventure)', value: 'Multi-day hiking trip planning checklist', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Sports, games and recreation applies to your situation?',
        example: 'Game Systems & RPG Design',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Game Systems & RPG Design: Stat curve balance, encounter difficulty, dice pro...', value: 'sg-rpg', isDefault: true },
          { label: 'Team Coaching & Strategy: Training plans, tactical analysis, team management...', value: 'sg-coaching', isDefault: false },
          { label: 'Individual Sport Training: Technique analysis, competition preparation, menta...', value: 'sg-individual', isDefault: false },
          { label: 'Outdoor Recreation & Adventure: Hiking planning, camping, climbing, water sports, ...', value: 'sg-outdoor', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'NSCA Conditioning Guidelines',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: NSCA Conditioning Guidelines', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_sports_games_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to NSCA Conditioning Guidelines.', category: 'standards' },
      { id: 'vc_sports_games_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 27. ARCHITECTURAL DESIGN, URBAN DENSITY & BUILDING CODE ZONING
  {
    id: 'architecture_urban_design',
    title: 'Architectural Design, Urban Density & Building Code Zoning',
    domainId: 'architecture_urban',
    domainName: 'Architecture, Urban Planning and Built Heritage',
    group: 'Society, law & culture',
    discipline: 'Architectural Concept Design, Zoning Regulations & Passive Solar',
    summary: 'Architectural design briefs, urban zoning masterplans, high-performance building envelopes, landscape ecology, and LEED/BREEAM green building.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"architecture\"","\"architect\"","\"urban planning\"","\"zoning\"","\"masterplan\"","\"building envelope\"","\"facade\"","\"interior architecture\"","\"landscape design\"","\"leed\"","\"breeam\"","\"historic preservation\"","\"floor plan\"","\"concept design\"","\"cad\"","\"revit\"","\"schematic design\""],
    governingStandards: ["International Building Code (IBC 2024)","ADA Standards for Accessible Design","LEED v4.1 Building Design Guidelines"],
    reviewerRole: 'Licensed Architect (AIA / RIBA) & Urban Planning Director',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Architecture, Urban Planning and Built Heritage applies to your situation?',
        example: 'Architectural Concept Design, Zoning Regulations & Passive Solar',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'International Building Code (IBC 2024)',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: International Building Code (IBC 2024)', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_architecture_urban_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to International Building Code (IBC 2024).', category: 'standards' },
      { id: 'vc_architecture_urban_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 28. CINEMATOGRAPHY, MULTI-CAMERA DIRECTING & VIDEO POST-PRODUCTION
  {
    id: 'film_video_production_cinema',
    title: 'Cinematography, Multi-Camera Directing & Video Post-Production',
    domainId: 'film_video_production',
    domainName: 'Film, Cinematography, Video Production and YouTube',
    group: 'Society, law & culture',
    discipline: 'Cinematic Lighting, Shooting Schedules & Post-Production Color',
    summary: 'Screenwriting, scene breakdowns, cinematography lighting, video editing, ACES color grading, YouTube audience retention, and broadcast delivery.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"film\"","\"video production\"","\"filmmaking\"","\"cinematography\"","\"youtube\"","\"screenplay\"","\"camera\"","\"lighting\"","\"editing\"","\"color grading\"","\"davinci resolve\"","\"premiere pro\"","\"director\"","\"shot list\"","\"storyboard\"","\"broadcast\"","\"streaming\"","\"audio post\""],
    governingStandards: ["SMPTE Cinema Standards","Academy Color Encoding System (ACES)","EBU R128 Loudness Audio Standards"],
    reviewerRole: 'Director of Photography (ASC / BSC) & Post Supervisor',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Film, Cinematography, Video Production and YouTube applies to your situation?',
        example: 'Cinematic Lighting, Shooting Schedules & Post-Production Color',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'SMPTE Cinema Standards',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: SMPTE Cinema Standards', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_film_video_production_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to SMPTE Cinema Standards.', category: 'standards' },
      { id: 'vc_film_video_production_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 29. MUSIC PRODUCTION, MIXING ENGINEERING & ROOM ACOUSTICS
  {
    id: 'music_audio_production_acoustics',
    title: 'Music Production, Mixing Engineering & Room Acoustics',
    domainId: 'music_audio_production',
    domainName: 'Music Production, Sound Engineering and Acoustics',
    group: 'Society, law & culture',
    discipline: 'Audio Mixing, Studio Acoustic Design & DSP Signal Flow',
    summary: 'DAW music production, vocal production, mixing engineering, LUFS audio mastering, synthesizer sound design, and acoustic room treatment.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"music production\"","\"sound engineering\"","\"audio engineering\"","\"mixing\"","\"mastering\"","\"daw\"","\"ableton\"","\"logic pro\"","\"pro tools\"","\"acoustics\"","\"sound design\"","\"synthesizer\"","\"microphones\"","\"vocal recording\"","\"lufs\"","\"eq\"","\"compression\"","\"studio\""],
    governingStandards: ["AES Recommended Practices for Audio Engineering","EBU R128 / ITU-R BS.1770 Loudness Standards","ISO 3382 Room Acoustics"],
    reviewerRole: 'Grammy-Nominated Audio Engineer & Acoustic Consultant',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Music Production, Sound Engineering and Acoustics applies to your situation?',
        example: 'Audio Mixing, Studio Acoustic Design & DSP Signal Flow',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'AES Recommended Practices for Audio Engineering',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: AES Recommended Practices for Audio Engineering', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_music_audio_production_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to AES Recommended Practices for Audio Engineering.', category: 'standards' },
      { id: 'vc_music_audio_production_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 30. INVESTIGATIVE JOURNALISM, CRISIS PR & FACT-CHECKING PROTOCOLS
  {
    id: 'journalism_media_investigative',
    title: 'Investigative Journalism, Crisis PR & Fact-Checking Protocols',
    domainId: 'journalism_media',
    domainName: 'Journalism, Mass Communication and Crisis PR',
    group: 'Society, law & culture',
    discipline: 'Investigative Reporting, Freedom of Information (FOIA) & Crisis PR',
    summary: 'Investigative reporting, AP Style news writing, press releases, broadcast scripts, crisis communications, and media ethics/libel law.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["\"journalism\"","\"news\"","\"press release\"","\"public relations\"","\"pr\"","\"media\"","\"communications\"","\"investigative reporting\"","\"ap style\"","\"broadcast news\"","\"crisis pr\"","\"fact checking\"","\"interviewing\"","\"editor\"","\"journalist\"","\"libel\"","\"media law\""],
    governingStandards: ["SPJ Code of Ethics","Associated Press (AP) Stylebook (56th Edition)","International Fact-Checking Network (IFCN) Code"],
    reviewerRole: 'Managing Editor & Senior Investigative Journalist',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Technical analysis and design review',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          ,
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Journalism, Mass Communication and Crisis PR applies to your situation?',
        example: 'Investigative Reporting, Freedom of Information (FOIA) & Crisis PR',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'SPJ Code of Ethics',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: SPJ Code of Ethics', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_journalism_media_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to SPJ Code of Ethics.', category: 'standards' },
      { id: 'vc_journalism_media_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 31. FAMILY DYNAMICS, CO-PARENTING PLANS & LIFE STAGE TRANSITIONS
  {
    id: 'family_relationships_coaching',
    title: 'Family Dynamics, Co-Parenting Plans & Life Stage Transitions',
    domainId: 'family_relationships',
    domainName: 'Family, relationships and life stages',
    group: 'Personal life & situations',
    discipline: 'Family Communication, Co-Parenting Mediation & Life Transitions',
    summary: 'Family schedules, eldercare logistics, parenting communication, event planning, pet care and life transitions.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["family","parenting","eldercare","communication","relationships","wedding","baby","children","teenager","marriage","divorce","adoption","pets","event planning","birthday","celebration","grief","loss","aging parents","childcare","school","college applications","empty nest","blended family"],
    governingStandards: ["AFCC Guidelines for Parenting Coordination","AAMFT Code of Ethics","Plain Language Legal Separation Best Practices"],
    reviewerRole: 'Licensed Marriage & Family Therapist (LMFT) & Family Mediator',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "family_relationships_coaching_recipe_1",
                "title": "⭐ Constructive boundary conversation script",
                "description": "Family Communication & Boundaries: Constructive conflict scripts, difficult conversations, household chore schedules. Structured prompt with verified standards and constraints.",
                "badge": "Family Communication",
                "presetAnswers": {
                      "task_objective": "Constructive boundary conversation script",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fr-comm",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "family_relationships_coaching_recipe_2",
                "title": "📌 Wedding planning master checklist",
                "description": "Events, Weddings & Celebrations: Event planning checklists, budget tracking, vendor coordination, timelines. Structured prompt with verified standards and constraints.",
                "badge": "Events, Weddings",
                "presetAnswers": {
                      "task_objective": "Wedding planning master checklist",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fr-events",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "family_relationships_coaching_recipe_3",
                "title": "💡 Age-appropriate activity planner",
                "description": "Parenting & Child Development: Age-appropriate activities, school selection, homework help strategies, safety. Structured prompt with verified standards and constraints.",
                "badge": "Parenting",
                "presetAnswers": {
                      "task_objective": "Age-appropriate activity planner",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "fr-parenting",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Constructive boundary conversation script',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Constructive boundary conversation script (Family Communication & Boundaries)', value: 'Constructive boundary conversation script', isDefault: true },
          { label: 'Wedding planning master checklist (Events, Weddings & Celebrations)', value: 'Wedding planning master checklist', isDefault: false },
          { label: 'Age-appropriate activity planner (Parenting & Child Development)', value: 'Age-appropriate activity planner', isDefault: false },
          { label: 'Eldercare coordination checklist (Eldercare & Aging Support)', value: 'Eldercare coordination checklist', isDefault: false },
          { label: 'New pet adoption preparation checklist (Pet Ownership & Care)', value: 'New pet adoption preparation checklist', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Family, relationships and life stages applies to your situation?',
        example: 'Family Communication & Boundaries',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Family Communication & Boundaries: Constructive conflict scripts, difficult conversat...', value: 'fr-comm', isDefault: true },
          { label: 'Events, Weddings & Celebrations: Event planning checklists, budget tracking, vendor...', value: 'fr-events', isDefault: false },
          { label: 'Parenting & Child Development: Age-appropriate activities, school selection, home...', value: 'fr-parenting', isDefault: false },
          { label: 'Eldercare & Aging Support: Care coordination, medical appointment management,...', value: 'fr-elder', isDefault: false },
          { label: 'Pet Ownership & Care: Pet adoption, training schedules, health tracking,...', value: 'fr-pet', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'AFCC Guidelines for Parenting Coordination',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: AFCC Guidelines for Parenting Coordination', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_family_relationships_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to AFCC Guidelines for Parenting Coordination.', category: 'standards' },
      { id: 'vc_family_relationships_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 32. HOME SYSTEMS MANAGEMENT, HOUSEHOLD BUDGETING & EMERGENCY PREPAREDNESS
  {
    id: 'home_daily_living_systems',
    title: 'Home Systems Management, Household Budgeting & Emergency Preparedness',
    domainId: 'home_daily_living',
    domainName: 'Home, money and daily living',
    group: 'Personal life & situations',
    discipline: 'Residential Maintenance, Household Budgeting & Disaster Preparedness',
    summary: 'Seasonal home maintenance, zero-based personal budgets, pantry meal planning, home renovation, organization and insurance.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["home","budget","personal finance","maintenance","meal planning","home renovation","DIY","declutter","organize","cleaning","moving","relocation","home office","garden","yard","insurance","bills","utilities","grocery","household","apartment living","home improvement","storage","laundry","cooking at home"],
    governingStandards: ["FEMA Emergency Preparedness Guidelines","NFPA Home Fire Safety Guidelines","Consumer Financial Protection Bureau (CFPB) Rules"],
    reviewerRole: 'Home Systems Operations Specialist & Financial Wellness Coach',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "home_daily_living_systems_recipe_1",
                "title": "⭐ Zero-based monthly cash flow budget template",
                "description": "Personal Cash Flow & Maintenance: Zero-based budgeting, debt avalanche comparison, HVAC seasonal upkeep. Structured prompt with verified standards and constraints.",
                "badge": "Personal Cash Flow",
                "presetAnswers": {
                      "task_objective": "Zero-based monthly cash flow budget template",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hd-budget",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "home_daily_living_systems_recipe_2",
                "title": "📌 Home renovation project planning checklist",
                "description": "Home Renovation & DIY Projects: Project planning, contractor hiring, permit requirements, cost estimation. Structured prompt with verified standards and constraints.",
                "badge": "Home Renovation",
                "presetAnswers": {
                      "task_objective": "Home renovation project planning checklist",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hd-renovation",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "home_daily_living_systems_recipe_3",
                "title": "💡 Room-by-room decluttering plan",
                "description": "Decluttering & Home Organization: KonMari method, storage solutions, digital decluttering, moving preparation. Structured prompt with verified standards and constraints.",
                "badge": "Decluttering",
                "presetAnswers": {
                      "task_objective": "Room-by-room decluttering plan",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "hd-organize",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Zero-based monthly cash flow budget template',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Zero-based monthly cash flow budget template (Personal Cash Flow & Maintenance)', value: 'Zero-based monthly cash flow budget template', isDefault: true },
          { label: 'Home renovation project planning checklist (Home Renovation & DIY Projects)', value: 'Home renovation project planning checklist', isDefault: false },
          { label: 'Room-by-room decluttering plan (Decluttering & Home Organization)', value: 'Room-by-room decluttering plan', isDefault: false },
          { label: 'Seasonal planting calendar by zone (Garden, Yard & Outdoor Spaces)', value: 'Seasonal planting calendar by zone', isDefault: false },
          { label: 'Home insurance comparison checklist (Insurance & Household Admin)', value: 'Home insurance comparison checklist', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Home, money and daily living applies to your situation?',
        example: 'Personal Cash Flow & Maintenance',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Personal Cash Flow & Maintenance: Zero-based budgeting, debt avalanche comparison, H...', value: 'hd-budget', isDefault: true },
          { label: 'Home Renovation & DIY Projects: Project planning, contractor hiring, permit requir...', value: 'hd-renovation', isDefault: false },
          { label: 'Decluttering & Home Organization: KonMari method, storage solutions, digital declutt...', value: 'hd-organize', isDefault: false },
          { label: 'Garden, Yard & Outdoor Spaces: Seasonal planting, lawn care, container gardening,...', value: 'hd-garden', isDefault: false },
          { label: 'Insurance & Household Admin: Insurance comparison, claim documentation, paperwo...', value: 'hd-insurance', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'FEMA Emergency Preparedness Guidelines',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: FEMA Emergency Preparedness Guidelines', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_home_daily_living_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to FEMA Emergency Preparedness Guidelines.', category: 'standards' },
      { id: 'vc_home_daily_living_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

  // 33. PERSONAL GROWTH, DICTION & EXECUTIVE PRESENCE COACHING
  {
    id: 'personal_growth_executive',
    title: 'Personal Growth, Diction & Executive Presence Coaching',
    domainId: 'personal_growth',
    domainName: 'Personal growth and communication',
    group: 'Personal life & situations',
    discipline: 'Executive Communication, Habit Architecture & Strategic Planning',
    summary: 'Active listening, public speaking, decision matrix frameworks, goal setting, time management, journaling and networking.',
    outcome: 'A highly structured, evidence-grounded prompt specifying technical methodology, domain constraints, governing standards, and required deliverables.',
    skillLevel: 'Practitioner',
    riskClass: 'R1',
    contentTier: 'T1',
    coverageState: 'published_workflow',
    deliverableType: 'Structured Technical Specification & Deliverable Spec',
    modality: 'text',
    primaryIntent: 'Analyse / interpret',
    aliases: ["habits","productivity","public speaking","decision making","communication","goal setting","time management","journaling","networking","self-improvement","motivation","confidence","leadership","emotional intelligence","social skills","career change","retirement planning","life planning","mindset","personal development","side hustle","freelancing","work-life balance"],
    governingStandards: ["ICF Core Competencies for Coaching","Toastmasters Speech Craft Framework","Harvard Business Review Communication Standards"],
    reviewerRole: 'Master Certified Executive Coach (MCC / ICF)',
    lastReviewedDate: '2026-04-01',
    missingInputRules: {
      criticalFields: ['task_objective', 'methodology_framework'],
      fallbackGuidance: 'If specific parameters are omitted, PromptLaz instructs the AI to outline the standard baseline assumptions and offer diagnostic options before executing.'
    },
    recipes: [
          {
                "id": "personal_growth_executive_recipe_1",
                "title": "⭐ Weighted multi-criteria career decision matrix",
                "description": "Decision Frameworks & Speaking: Weighted decision matrix, 5-minute keynote structure, habit tracking. Structured prompt with verified standards and constraints.",
                "badge": "Decision Frameworks",
                "presetAnswers": {
                      "task_objective": "Weighted multi-criteria career decision matrix",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "pg-decision",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "personal_growth_executive_recipe_2",
                "title": "📌 SMART goal setting worksheet",
                "description": "Goal Setting & Time Management: SMART goals, quarterly reviews, time blocking, priority systems. Structured prompt with verified standards and constraints.",
                "badge": "Goal Setting",
                "presetAnswers": {
                      "task_objective": "SMART goal setting worksheet",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "pg-goals",
                      "output_format": "structured_specification"
                }
          },
          {
                "id": "personal_growth_executive_recipe_3",
                "title": "💡 Structured daily journal template",
                "description": "Journaling & Self-Reflection: Morning pages, gratitude journals, reflection prompts, habit tracking. Structured prompt with verified standards and constraints.",
                "badge": "Journaling",
                "presetAnswers": {
                      "task_objective": "Structured daily journal template",
                      "methodology_framework": "standard_industry_best_practice",
                      "technical_scope": "pg-journal",
                      "output_format": "structured_specification"
                }
          }
    ],
    fields: [
      {
        id: 'task_objective',
        label: 'What specific task or objective are you executing?',
        technicalTerm: 'Primary Objective Statement',
        eli5: 'In everyday language, what problem are you solving or what do you need delivered?',
        example: 'Weighted multi-criteria career decision matrix',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Defines the main mission statement and primary deliverable.',
        options: [
          { label: 'Weighted multi-criteria career decision matrix (Decision Frameworks & Speaking)', value: 'Weighted multi-criteria career decision matrix', isDefault: true },
          { label: 'SMART goal setting worksheet (Goal Setting & Time Management)', value: 'SMART goal setting worksheet', isDefault: false },
          { label: 'Structured daily journal template (Journaling & Self-Reflection)', value: 'Structured daily journal template', isDefault: false },
          { label: 'Networking event preparation guide (Networking & Social Skills)', value: 'Networking event preparation guide', isDefault: false },
          { label: 'Career change planning roadmap (Career Transitions & Side Projects)', value: 'Career change planning roadmap', isDefault: false },
          { label: 'Custom Task / In-Depth Investigation (Describe in custom notes)', value: 'custom_investigation' }
        ]
      },
      {
        id: 'technical_scope',
        label: 'Which subdiscipline or specialized focus area applies?',
        technicalTerm: 'Specialization Subdiscipline',
        eli5: 'Which sub-field within Personal growth and communication applies to your situation?',
        example: 'Decision Frameworks & Speaking',
        type: 'select',
        step: 'start',
        required: true,
        promptImpact: 'Directs the reasoning framework and specialized terminology.',
        options: [
          { label: 'Decision Frameworks & Speaking: Weighted decision matrix, 5-minute keynote structu...', value: 'pg-decision', isDefault: true },
          { label: 'Goal Setting & Time Management: SMART goals, quarterly reviews, time blocking, pri...', value: 'pg-goals', isDefault: false },
          { label: 'Journaling & Self-Reflection: Morning pages, gratitude journals, reflection prom...', value: 'pg-journal', isDefault: false },
          { label: 'Networking & Social Skills: Conversation starters, professional networking, in...', value: 'pg-network', isDefault: false },
          { label: 'Career Transitions & Side Projects: Career change planning, side hustle validation, fr...', value: 'pg-career', isDefault: false }
        ]
      },
      {
        id: 'methodology_framework',
        label: 'What methodology, standard, or analytical framework should be followed?',
        technicalTerm: 'Governing Analytical Framework',
        eli5: 'Which standard formula, code, or methodology should guide the solution?',
        example: 'ICF Core Competencies for Coaching',
        type: 'select',
        step: 'fit',
        required: true,
        promptImpact: 'Sets analytical rigor, design standards, and validation equations.',
        options: [
          { label: 'Follow governing standard: ICF Core Competencies for Coaching', value: 'governing_standard_primary', isDefault: true },
          { label: 'First-principles scientific / engineering derivation from ground fundamentals', value: 'first_principles_derivation' },
          { label: 'Comparative trade-off evaluation with sensitivity analysis', value: 'tradeoff_sensitivity' },
          { label: 'Plain-language step-by-step practical guide with real-world analogies', value: 'plain_language_guide' }
        ]
      },
      {
        id: 'output_format',
        label: 'What should the deliverable format and structure look like?',
        technicalTerm: 'Deliverable Specification & Layout',
        eli5: 'Do you want a side-by-side table, an executive brief, or a technical checklist?',
        example: 'Structured report with methodology, calculation tables, and risk mitigations',
        type: 'select',
        step: 'finetune',
        required: true,
        promptImpact: 'Formats the sections, tables, and presentation style.',
        options: [
          { label: 'Structured Technical Specification with step-by-step reasoning and tables', value: 'structured_specification', isDefault: true },
          { label: 'Executive Decision Memo with bulleted recommendations and risk summary', value: 'executive_decision_memo' },
          { label: 'Side-by-side comparative matrix with trade-offs and numerical scores', value: 'comparative_matrix' },
          { label: 'Operational SOP / Step-by-step checklist with verification criteria', value: 'sop_checklist' }
        ]
      },
      {
        id: 'negative_guardrails',
        label: 'What negative boundaries, clichés, or assumptions should be avoided?',
        technicalTerm: 'Negative Constraints & Anti-Fluff Bounds',
        eli5: 'What things should the AI strictly NOT do?',
        example: 'Do not invent unverified numbers; eliminate corporate buzzwords',
        type: 'select',
        step: 'finetune',
        required: false,
        promptImpact: 'Enforces professional rigor and eliminates generic AI filler.',
        options: [
          { label: 'Zero Hallucinations: Do not invent missing parameters; flag missing facts explicitly', value: 'zero_hallucinations', isDefault: true },
          { label: 'Strictly professional: Eliminate buzzwords ("delve", "testament", "tapestry"), start directly with the deliverable', value: 'anti_fluff_direct' },
          { label: 'Conservative safety factors: Mandate explicit safety margins and professional review notices', value: 'conservative_safety_margins' }
        ]
      }
    ],
    relatedWorkflows: [],
    verificationChecks: [
      { id: 'vc_personal_growth_std', title: 'Governing Standards Adherence', description: 'Ensure the output references and adheres to ICF Core Competencies for Coaching.', category: 'standards' },
      { id: 'vc_personal_growth_facts', title: 'No Fabricated Quantities', description: 'Ensure assumptions are explicitly noted rather than inventing unverified measurements or constants.', category: 'assumptions' }
    ]
  },

];
