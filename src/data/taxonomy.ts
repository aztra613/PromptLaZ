import { DomainFamily } from '../types';

export const DOMAIN_FAMILIES: DomainFamily[] = [
  // ═══════════════════════════════════════════════════════════════
  // GROUP 1: KNOWLEDGE & SCIENCE (7 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'math_stats',
    name: 'Mathematics and statistics',
    group: 'Knowledge & science',
    summary: 'Probability distributions, statistical derivations, calculus, discrete math, linear algebra and applied proofs.',
    coverageState: 'starter_ready',
    aliases: ['math', 'statistics', 'stats', 'probability', 'calculus', 'algebra', 'linear algebra', 'geometry', 'trigonometry', 'number theory', 'maths', 'equations', 'formulas', 'proof', 'theorem', 'regression', 'hypothesis test', 'confidence interval', 'standard deviation', 'mean median mode', 'matrix', 'differential equations', 'integration'],
    iconName: 'Sigma',
    subdisciplines: [
      { id: 'ms-prob', name: 'Probability & Distributions', summary: 'Hypothesis testing, distributions, Bayes theorem, confidence intervals', sampleTasks: ['Explain p-value interpretation', 'Derive normal distribution CDF', 'Design A/B test sample size calculation', 'Bayesian prior selection guidance'], coverageState: 'starter_ready', workflowsCount: 3 },
      { id: 'ms-calc', name: 'Calculus & Differential Equations', summary: 'Multivariable calculus, limits, ODEs/PDEs, Laplace transforms', sampleTasks: ['Step-by-step differential equation solve', 'Explain gradient descent calculus', 'Integration by parts walkthrough', 'Fourier series expansion brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ms-discrete', name: 'Discrete Math & Logic', summary: 'Combinatorics, graph algorithms, Boolean logic, set theory', sampleTasks: ['Proof by induction guide', 'Graph isomorphism check', 'Combinatorics counting problem walkthrough'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ms-linalg', name: 'Linear Algebra & Matrices', summary: 'Eigenvalues, vector spaces, matrix decompositions, transformations', sampleTasks: ['Eigenvalue/eigenvector calculation walkthrough', 'SVD decomposition explanation', 'Linear transformation visual explainer'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ms-opsresearch', name: 'Operations Research & Optimization', summary: 'Linear programming, simplex method, scheduling, queuing theory', sampleTasks: ['Linear programming formulation from word problem', 'Transportation problem solver setup', 'Queue model M/M/1 analysis brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ms-applied', name: 'Applied & Actuarial Statistics', summary: 'Regression, time series, survival analysis, risk modeling', sampleTasks: ['Multiple regression model interpretation', 'Time series ARIMA model selection', 'Survival analysis Kaplan-Meier brief'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'physical_sciences',
    name: 'Physical sciences',
    group: 'Knowledge & science',
    summary: 'Classical mechanics, thermodynamics, electromagnetism, optics, organic/physical chemistry, quantum basics.',
    coverageState: 'starter_ready',
    aliases: ['physics', 'chemistry', 'optics', 'mechanics', 'thermodynamics', 'electromagnetism', 'quantum', 'nuclear', 'organic chemistry', 'inorganic chemistry', 'acoustics', 'photonics', 'waves', 'relativity', 'particle physics', 'spectroscopy', 'stoichiometry', 'chemical reactions', 'periodic table', 'atomic structure'],
    iconName: 'Atom',
    subdisciplines: [
      { id: 'ps-phys', name: 'Applied Physics & Mechanics', summary: 'Kinematics, dynamics, wave theory, quantum basics, relativity', sampleTasks: ['Worked physics derivation', 'Explain wave-particle duality', 'Free body diagram analysis', 'Projectile motion calculation'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ps-chem', name: 'Chemistry & Reaction Kinetics', summary: 'Stoichiometry, molecular orbital, reaction mechanisms, equilibrium', sampleTasks: ['Mechanism synthesis plan', 'Thermodynamic equilibrium brief', 'Acid-base titration walkthrough', 'Redox reaction balancing'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ps-optics', name: 'Optics, Photonics & Acoustics', summary: 'Lenses, fiber optics, diffraction, sound propagation, laser physics', sampleTasks: ['Thin lens equation walkthrough', 'Fiber optic signal loss calculation', 'Room acoustics design brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ps-nuclear', name: 'Nuclear & Particle Physics', summary: 'Radioactive decay, fission/fusion concepts, particle interactions', sampleTasks: ['Half-life calculation explainer', 'Nuclear reaction energy balance', 'Standard Model overview brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ps-materials', name: 'Materials Physics & Solid State', summary: 'Crystal structures, semiconductors, superconductivity, nanomaterials', sampleTasks: ['Band gap semiconductor explanation', 'Crystal lattice structure identification', 'Nanoparticle property comparison'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'life_sciences',
    name: 'Life sciences',
    group: 'Knowledge & science',
    summary: 'Genetics, cellular biology, biochemistry, ecology, bioinformatics, physiology, microbiology and neuroscience.',
    coverageState: 'explainer_ready',
    aliases: ['biology', 'genetics', 'ecology', 'biochemistry', 'bioinformatics', 'microbiology', 'anatomy', 'physiology', 'neuroscience', 'immunology', 'botany', 'zoology', 'cell biology', 'molecular biology', 'evolution', 'CRISPR', 'DNA', 'RNA', 'protein', 'enzyme', 'organism', 'species', 'taxonomy'],
    iconName: 'Dna',
    subdisciplines: [
      { id: 'ls-cell', name: 'Cellular & Molecular Biology', summary: 'Signal transduction, gene expression, protein folding, CRISPR', sampleTasks: ['Explain CRISPR guide RNA design', 'Protein pathway synthesis', 'Gene expression regulation overview'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ls-eco', name: 'Ecology & Population Genetics', summary: 'Biodiversity indices, trophic cascades, evolutionary models', sampleTasks: ['Lotka-Volterra model explanation', 'Species diversity index check', 'Hardy-Weinberg equilibrium analysis'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ls-micro', name: 'Microbiology & Immunology', summary: 'Bacterial classification, viral replication, immune response pathways', sampleTasks: ['Gram stain interpretation guide', 'Antibiotic resistance mechanism explainer', 'Vaccine immune response overview'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ls-anatomy', name: 'Anatomy & Physiology', summary: 'Organ systems, homeostasis, neurophysiology, endocrine function', sampleTasks: ['Cardiovascular system flow diagram', 'Endocrine hormone cascade explanation', 'Muscle contraction mechanism walkthrough'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ls-neuro', name: 'Neuroscience & Cognitive Biology', summary: 'Neural signaling, brain regions, synaptic plasticity, learning', sampleTasks: ['Neurotransmitter pathway explanation', 'Action potential propagation walkthrough', 'Memory formation mechanism brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'earth_climate',
    name: 'Earth, climate and space science',
    group: 'Knowledge & science',
    summary: 'Meteorology, geology, oceanography, hydrology, carbon cycles, astrophysics and remote sensing.',
    coverageState: 'explainer_ready',
    aliases: ['geology', 'climate', 'earth science', 'astronomy', 'weather', 'meteorology', 'oceanography', 'hydrology', 'volcanology', 'paleontology', 'astrophysics', 'space', 'planets', 'atmosphere', 'earthquakes', 'fossils', 'minerals', 'rocks', 'tectonic plates', 'glaciers', 'remote sensing', 'satellite imagery', 'geophysics'],
    iconName: 'Globe',
    subdisciplines: [
      { id: 'ec-geo', name: 'Geology & Mineralogy', summary: 'Stratigraphy, seismic waves, plate tectonics, rock classification', sampleTasks: ['Rock core identification', 'Fault mechanism explainer', 'Mineral identification flowchart'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ec-clim', name: 'Climate Modeling & Weather', summary: 'Atmospheric dynamics, climate proxy data, IPCC scenarios', sampleTasks: ['CMIP6 scenario comparison', 'Urban heat island audit', 'Weather pattern prediction analysis'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ec-ocean', name: 'Oceanography & Marine Science', summary: 'Ocean currents, salinity, coral reefs, deep sea ecosystems', sampleTasks: ['Thermohaline circulation explainer', 'Coral bleaching risk assessment brief', 'Tidal pattern analysis'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ec-astro', name: 'Astrophysics & Space Science', summary: 'Stellar evolution, cosmology, exoplanets, orbital mechanics', sampleTasks: ['Hertzsprung-Russell diagram interpretation', 'Orbital mechanics calculation brief', 'Exoplanet habitability assessment'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ec-remote', name: 'Remote Sensing & Geospatial Analysis', summary: 'Satellite imagery, NDVI, LiDAR, GIS data interpretation', sampleTasks: ['NDVI vegetation analysis walkthrough', 'LiDAR elevation model interpretation', 'Land use change detection brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'social_sciences',
    name: 'Social sciences',
    group: 'Knowledge & science',
    summary: 'Economics, sociology, political science, cognitive psychology, anthropology, demography and urban studies.',
    coverageState: 'explainer_ready',
    aliases: ['economics', 'psychology', 'sociology', 'politics', 'social research', 'anthropology', 'political science', 'international relations', 'demography', 'urban studies', 'public opinion', 'behavioral economics', 'cognitive science', 'survey research', 'social policy', 'development studies', 'gender studies', 'migration', 'inequality'],
    iconName: 'Users',
    subdisciplines: [
      { id: 'ss-econ', name: 'Micro & Macroeconomics', summary: 'Market equilibrium, elasticity, fiscal/monetary policy, trade', sampleTasks: ['IS-LM curve analysis', 'Game theory payoff matrix', 'Supply-demand equilibrium calculation'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ss-psych', name: 'Cognitive & Behavioral Psychology', summary: 'Cognitive biases, perceptual models, survey design, experiments', sampleTasks: ['Behavioral nudge formulation', 'Survey bias identification', 'Cognitive load experiment design'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ss-polsci', name: 'Political Science & International Relations', summary: 'Governance structures, policy analysis, diplomacy, geopolitics', sampleTasks: ['Policy impact analysis framework', 'Comparative government system brief', 'Geopolitical risk assessment outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ss-anthro', name: 'Anthropology & Cultural Studies', summary: 'Ethnography, cultural practices, kinship systems, material culture', sampleTasks: ['Ethnographic research protocol outline', 'Cultural practice comparison framework', 'Material culture analysis brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ss-urban', name: 'Urban Studies & Demography', summary: 'Population dynamics, urbanization, census data, migration patterns', sampleTasks: ['Demographic transition model explanation', 'Urban sprawl impact analysis', 'Migration pattern data interpretation'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'humanities',
    name: 'Humanities',
    group: 'Knowledge & science',
    summary: 'Philosophy, history, archaeology, ethics, cultural studies, literature critique and linguistics.',
    coverageState: 'explainer_ready',
    aliases: ['history', 'philosophy', 'ethics', 'archaeology', 'culture', 'literature', 'art history', 'linguistics', 'literary criticism', 'classics', 'religion', 'heritage', 'civilisation', 'ancient history', 'medieval', 'modern history', 'world history', 'moral philosophy', 'aesthetics'],
    iconName: 'BookOpen',
    subdisciplines: [
      { id: 'hu-phil', name: 'Philosophy & Applied Ethics', summary: 'Epistemology, normative ethics, thought experiments, logic', sampleTasks: ['Trolley problem critique', 'Deontological vs consequentialist review', 'Logical fallacy identification exercise'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'hu-hist', name: 'Historical Method & Primary Sources', summary: 'Historiography, source verification, chronology, archival research', sampleTasks: ['Primary document critique', 'Comparative historical analysis', 'Timeline construction from sources'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'hu-lit', name: 'Literature & Literary Criticism', summary: 'Close reading, narrative analysis, genre theory, comparative literature', sampleTasks: ['Close reading essay structure', 'Thematic comparison across works', 'Literary device identification guide'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'hu-archaeo', name: 'Archaeology & Heritage Studies', summary: 'Excavation methodology, artifact analysis, dating techniques', sampleTasks: ['Excavation record documentation brief', 'Artifact classification methodology', 'Stratigraphic layer interpretation'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'hu-linguistics', name: 'Linguistics & Language Science', summary: 'Phonetics, syntax, semantics, sociolinguistics, language typology', sampleTasks: ['Syntactic tree diagram construction', 'Phonemic transcription exercise', 'Sociolinguistic variation analysis'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'research_methods',
    name: 'Research and knowledge work',
    group: 'Knowledge & science',
    summary: 'Systematic literature reviews, research protocols, citation checks, qualitative coding, grant writing and thesis planning.',
    coverageState: 'starter_ready',
    aliases: ['literature review', 'academic research', 'thesis', 'methodology', 'paper writing', 'grant writing', 'dissertation', 'research proposal', 'peer review', 'citation', 'bibliography', 'qualitative research', 'quantitative research', 'mixed methods', 'meta-analysis', 'PhD', 'publishing', 'journal', 'academic writing', 'research design'],
    iconName: 'Search',
    subdisciplines: [
      { id: 'rm-lit', name: 'Systematic Literature Review', summary: 'PRISMA protocols, screening criteria, synthesis matrix', sampleTasks: ['Draft systematic review protocol', 'Synthesize competing evidence', 'PRISMA flow diagram construction'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'rm-quant', name: 'Experimental & Quantitative Design', summary: 'Sample sizing, control groups, confounder mitigation', sampleTasks: ['Power analysis calculation request', 'Confounder sensitivity checklist', 'Randomized controlled trial design brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'rm-qual', name: 'Qualitative Research Methods', summary: 'Interviews, focus groups, thematic analysis, grounded theory', sampleTasks: ['Interview protocol design', 'Thematic coding framework setup', 'Focus group facilitation guide'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rm-grant', name: 'Grant Writing & Research Proposals', summary: 'Funding agency requirements, specific aims, budget justification', sampleTasks: ['NIH-style specific aims page draft', 'Research budget justification template', 'Significance and innovation section outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rm-thesis', name: 'Thesis, Dissertation & Publication', summary: 'Chapter structure, committee management, peer review, journal submission', sampleTasks: ['Dissertation chapter outline generator', 'Journal submission cover letter draft', 'Peer review response letter template'], coverageState: 'starter_ready', workflowsCount: 1 }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROUP 2: TECHNOLOGY & ENGINEERING (17 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'civil_built',
    name: 'Civil and built environment',
    group: 'Technology & engineering',
    summary: 'Geotechnical, structural, reinforced concrete, steel, pavements, water resources, surveying, BIM and construction management.',
    coverageState: 'published_workflow',
    aliases: ['civil engineering', 'geotechnical', 'soil mechanics', 'structural', 'construction', 'concrete', 'foundation', 'earthworks', 'reinforced concrete', 'steel structures', 'bridges', 'tunnels', 'dams', 'pavements', 'highways', 'water resources', 'hydraulics', 'surveying', 'BIM', 'quantity surveying', 'BOQ', 'site engineer', 'construction management', 'project controls', 'pile foundation', 'retaining wall', 'slope stability', 'settlement', 'bearing capacity', 'compaction', 'SPT', 'CPT', 'triaxial test'],
    iconName: 'Building2',
    subdisciplines: [
      { id: 'ce-geotech', name: 'Geotechnical & Soil Mechanics', summary: 'Compaction, consolidation, settlement, bearing capacity, Atterberg limits, triaxial tests', sampleTasks: ['Standard/Modified Proctor test interpretation', 'Consolidation settlement calculation brief', 'Borehole log interpretation', 'Bearing capacity assessment'], coverageState: 'published_workflow', workflowsCount: 4 },
      { id: 'ce-struct', name: 'Structural Engineering & Analysis', summary: 'Load paths, RC design, steel members, lateral stability, codes (ACI 318, Eurocode, IS)', sampleTasks: ['RC beam flexure/shear review', 'Steel frame connection review checklist', 'Structural design basis report', 'Load combination verification'], coverageState: 'published_workflow', workflowsCount: 4 },
      { id: 'ce-materials', name: 'Concrete & Materials QA', summary: 'Mix design, compressive strength testing, non-destructive testing (UPV, rebound hammer)', sampleTasks: ['28-day cylinder strength outlier analysis', 'Concrete mix ratio trial brief', 'NDT results interpretation'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-steel', name: 'Steel Structures & Connections', summary: 'Steel grades, bolted/welded joints, buckling, fire protection, fabrication QC', sampleTasks: ['Steel column buckling check brief', 'Bolted connection design review', 'Weld inspection NDT documentation', 'Fire protection schedule'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-trans', name: 'Transportation & Pavements', summary: 'Flexible/rigid pavement design, CBR tests, traffic counts, geometric design', sampleTasks: ['Pavement layer thickness evaluation', 'Road safety audit checklist', 'Traffic impact assessment brief', 'Intersection design review'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-water', name: 'Water Resources & Hydraulics', summary: 'Open channel flow, pipe networks, catchment hydrology, flood frequency', sampleTasks: ['Stormwater runoff pipe sizing brief', 'Manning equation flow review', 'Flood frequency analysis', 'Water distribution network check'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-env', name: 'Environmental Engineering', summary: 'Wastewater treatment, air quality, noise assessment, EIA documentation', sampleTasks: ['Environmental impact assessment structure', 'Wastewater treatment process selection', 'Noise barrier design brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ce-bim', name: 'Surveying, GIS & BIM', summary: 'Coordinate systems, total station traverses, clash detection, LOD specifications', sampleTasks: ['BIM clash triage checklist', 'Topographic survey control check', 'GIS spatial analysis brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-mgmt', name: 'Construction Management & BOQ', summary: 'Quantity take-offs, rate analysis, WBS, delay claims, method statements', sampleTasks: ['BOQ quantity take-off brief', 'Concrete pour method statement outline', 'Delay claim evidence organization', 'Procurement schedule template'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ce-bridge', name: 'Bridges, Tunnels & Special Structures', summary: 'Bridge types, tunnel methods, dam design concepts, coastal/port engineering', sampleTasks: ['Bridge load rating assessment brief', 'Tunnel excavation method comparison', 'Dam safety inspection checklist'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'electrical_energy',
    name: 'Electrical, electronics and energy',
    group: 'Technology & engineering',
    summary: 'Power distribution, protection coordination, motors, transformers, PCB design, solar PV, telecommunications and instrumentation.',
    coverageState: 'starter_ready',
    aliases: ['electrical', 'electronics', 'power systems', 'pcb', 'circuits', 'solar pv', 'embedded', 'electrical engineering', 'power distribution', 'protection', 'transformers', 'motors', 'generators', 'switchgear', 'cable sizing', 'earthing', 'grounding', 'voltage', 'current', 'resistance', 'capacitor', 'inductor', 'telecommunications', 'RF', 'antenna', 'fiber optics', 'signal processing', '5G', 'microwave', 'radio', 'wireless', 'communication systems', 'instrumentation', 'PLC', 'control systems', 'SCADA', 'sensors', 'measurement'],
    iconName: 'Zap',
    subdisciplines: [
      { id: 'ee-power', name: 'Power Systems & Distribution', summary: 'Fault analysis, voltage drop, cable sizing, earthing, load flow', sampleTasks: ['Substation protection coordination brief', 'Feeder cable voltage drop check', 'Short circuit analysis setup', 'Load flow study interpretation'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ee-circuits', name: 'Analog & Digital Circuits', summary: 'Op-amps, signal integrity, filters, microcontroller circuits, PCB design', sampleTasks: ['Active low-pass filter design brief', 'ADC input buffer impedance matching', 'PCB layout review checklist', 'FPGA design specification'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ee-solar', name: 'Renewables & Energy Storage', summary: 'Solar PV string sizing, inverter clipping, battery energy storage, wind', sampleTasks: ['Commercial rooftop solar sizing brief', 'BESS degradation calculation check', 'Wind turbine capacity factor analysis'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ee-telecom', name: 'Telecommunications & RF Engineering', summary: 'RF propagation, antenna design, fiber optics, 4G/5G networks, microwave links', sampleTasks: ['RF link budget calculation', 'Fiber optic network design brief', '5G coverage planning checklist', 'Antenna gain pattern analysis'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ee-machines', name: 'Electrical Machines & Drives', summary: 'Motors, generators, transformers, VFDs, protection schemes', sampleTasks: ['Motor sizing and selection brief', 'Transformer efficiency calculation', 'VFD parameter configuration checklist', 'Generator excitation system review'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ee-control', name: 'Control Systems & Instrumentation', summary: 'PID controllers, SCADA, PLCs, process instrumentation, calibration', sampleTasks: ['PID loop tuning guidance', 'Instrument calibration schedule', 'PLC ladder logic review brief', 'Control valve sizing calculation'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ee-install', name: 'Electrical Installations & Safety', summary: 'Wiring standards, panel design, lighting, earthing, code compliance', sampleTasks: ['Electrical installation inspection checklist', 'Lighting design calculation brief', 'Earthing system design review', 'Electrical safety audit framework'], coverageState: 'starter_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'mechanical_automotive',
    name: 'Mechanical, automotive and marine engineering',
    group: 'Technology & engineering',
    summary: 'Machine design, stress analysis, FEA/CFD boundaries, HVAC, fluid mechanics, manufacturing, EV powertrains and marine systems.',
    coverageState: 'starter_ready',
    aliases: ['mechanical', 'hvac', 'automotive', 'fea', 'cfd', 'thermodynamics', 'fluid mechanics', 'machine design', 'vibration', 'manufacturing', 'CAD', 'CAE', 'bearings', 'gears', 'shafts', 'pumps', 'turbines', 'engines', 'heat transfer', 'refrigeration', 'air conditioning', 'piping', 'pressure vessel', 'marine', 'naval architecture', 'automotive engineering', 'EV', 'electric vehicle', 'powertrain', 'maintenance', 'reliability', 'tribology', 'welding', 'casting', 'forging', 'CNC', '3D printing'],
    iconName: 'Cog',
    subdisciplines: [
      { id: 'me-mach', name: 'Machine Design & Stress Analysis', summary: 'Fatigue life, shaft sizing, bearings, bolt pretension, FEA interpretation', sampleTasks: ['Shaft torsional fatigue calculation brief', 'Bolted flange stress review', 'Gear train design selection', 'FEA boundary condition review'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'me-hvac', name: 'HVAC & Thermal Systems', summary: 'Psychrometrics, cooling load, duct sizing, heat exchangers, refrigeration', sampleTasks: ['Cleanroom cooling load calculation brief', 'Heat exchanger NTU analysis', 'Duct sizing calculation', 'Chiller plant efficiency audit'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'me-fluids', name: 'Fluid Mechanics & Hydraulics', summary: 'Pipe flow, pressure loss, pump selection, open channel flow, CFD basics', sampleTasks: ['Pipe pressure loss calculation brief', 'Pump selection and system curve analysis', 'CFD simulation setup checklist', 'Bernoulli equation application walkthrough'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'me-manufacturing', name: 'Manufacturing Processes & CNC', summary: 'Machining, welding, casting, forging, 3D printing, quality control', sampleTasks: ['CNC program review checklist', 'Welding procedure specification brief', 'Casting defect analysis guide', '3D printing material selection matrix'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'me-auto', name: 'Automotive & EV Powertrain', summary: 'Engine performance, EV battery systems, chassis dynamics, ADAS', sampleTasks: ['EV battery pack sizing brief', 'Engine performance curve analysis', 'Suspension geometry review', 'Brake system design verification'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'me-marine', name: 'Marine & Naval Architecture', summary: 'Hull design, stability, propulsion, offshore structures, classification', sampleTasks: ['Ship stability calculation brief', 'Hull resistance estimation', 'Marine propulsion system selection', 'Offshore structure fatigue assessment'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'me-maintenance', name: 'Maintenance & Reliability Engineering', summary: 'RCM, FMEA, predictive maintenance, vibration analysis, life cycle cost', sampleTasks: ['FMEA worksheet creation', 'Vibration analysis interpretation', 'Preventive maintenance schedule design', 'Reliability centered maintenance plan'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'chemical_process',
    name: 'Chemical, materials, mining and process engineering',
    group: 'Technology & engineering',
    summary: 'Mass/energy balances, unit operations, distillation, reactor kinetics, metallurgy, corrosion, paper/pulp and pharmaceutical processes.',
    coverageState: 'explainer_ready',
    aliases: ['chemical engineering', 'process design', 'materials science', 'metallurgy', 'corrosion', 'paper and pulp', 'paper mill', 'packaging', 'polymer', 'plastics', 'rubber', 'ceramics', 'composites', 'mining', 'mineral processing', 'petroleum', 'refinery', 'distillation', 'reactor', 'heat exchanger', 'mass balance', 'energy balance', 'P&ID', 'HAZOP', 'pharmaceutical', 'food processing', 'paint', 'textile', 'cement', 'glass'],
    iconName: 'FlaskConical',
    subdisciplines: [
      { id: 'cp-process', name: 'Process Flow & Balances', summary: 'P&ID, mass balance, heat exchanger networks, distillation', sampleTasks: ['Distillation column mass balance check', 'HAZOP node deviation prompt', 'Heat exchanger network optimization', 'P&ID review checklist'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'cp-materials', name: 'Materials Science & Corrosion', summary: 'Phase diagrams, galvanic corrosion, heat treatment, material selection', sampleTasks: ['Alloy corrosion prevention plan', 'Steel tempering temperature selection', 'Material compatibility check for process fluids'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cp-mining', name: 'Mining & Mineral Processing', summary: 'Extraction methods, ore processing, flotation, leaching, tailings', sampleTasks: ['Flotation circuit optimization brief', 'Mine ventilation design review', 'Tailings management plan outline'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'cp-polymer', name: 'Polymers, Plastics & Composites', summary: 'Polymer chemistry, extrusion, injection molding, composite layup', sampleTasks: ['Plastic material selection matrix', 'Injection molding defect troubleshooting', 'Composite layup specification review'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'cp-paper', name: 'Paper, Pulp & Packaging', summary: 'Pulp processing, paper grades, coating, packaging design, recycling', sampleTasks: ['Paper mill process optimization brief', 'Packaging material specification review', 'Pulp quality parameter analysis', 'Corrugated board design brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'cp-pharma', name: 'Pharmaceutical & Food Processing', summary: 'GMP compliance, batch processing, clean room design, food safety systems', sampleTasks: ['GMP batch record review checklist', 'Clean room classification brief', 'Food safety HACCP plan outline', 'Pharmaceutical validation protocol'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'computing_software',
    name: 'Computing and software',
    group: 'Technology & engineering',
    summary: 'Full-stack software engineering, system architecture, DevOps, SRE, QA testing, databases, APIs, networking and IT management.',
    coverageState: 'published_workflow',
    aliases: ['software engineering', 'devops', 'kubernetes', 'sre', 'qa', 'testing', 'cloud', 'architecture', 'api', 'code', 'programming', 'web development', 'frontend', 'backend', 'full stack', 'react', 'node', 'python', 'java', 'javascript', 'typescript', 'docker', 'AWS', 'Azure', 'GCP', 'CI/CD', 'git', 'microservices', 'database', 'SQL', 'NoSQL', 'networking', 'sysadmin', 'linux', 'windows server', 'IT support', 'helpdesk', 'mobile app', 'iOS', 'android', 'flutter', 'game development', 'unity', 'unreal', 'REST API', 'GraphQL', 'website', 'app', 'bug', 'debug', 'deploy'],
    iconName: 'Code',
    subdisciplines: [
      { id: 'cs-devops', name: 'DevOps, SRE & Cloud Native', summary: 'Kubernetes manifests, CI/CD pipelines, Docker, incident runbooks, zero-downtime deploy', sampleTasks: ['Production Kubernetes deployment manifest generator', 'Incident root-cause analysis runbook', 'Terraform AWS VPC brief', 'CI/CD pipeline design'], coverageState: 'published_workflow', workflowsCount: 4 },
      { id: 'cs-qa', name: 'QA & Test Engineering', summary: 'Test automation strategies, API contract tests, Playwright/Cypress, defect triage', sampleTasks: ['Comprehensive API test strategy & test cases', 'Flaky end-to-end test debugging brief', 'Test plan for new feature release', 'Performance test design'], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'cs-sysdesign', name: 'System Design & Architecture', summary: 'Scalability, microservices, event-driven queues, caching, ADRs', sampleTasks: ['High-throughput message queue architecture review', 'Database shard migration plan', 'Architecture decision record template', 'System design interview practice'], coverageState: 'starter_ready', workflowsCount: 3 },
      { id: 'cs-frontend', name: 'Frontend & UI Engineering', summary: 'React, TypeScript, state management, accessibility WCAG, responsive web', sampleTasks: ['Accessible multi-step form architecture', 'State hydration optimization brief', 'Design system component specification', 'Performance audit checklist'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cs-backend', name: 'Backend & API Engineering', summary: 'REST, GraphQL, authentication, database transactions, idempotency', sampleTasks: ['Idempotent payment webhook handler design', 'PostgreSQL indexing plan', 'API versioning strategy brief', 'Rate limiting implementation design'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cs-cloud', name: 'Cloud Architecture & Infrastructure', summary: 'AWS/Azure/GCP, IaC, networking, security, cost optimization, multi-account', sampleTasks: ['Cloud migration assessment checklist', 'AWS Well-Architected review brief', 'Cost optimization audit framework', 'Multi-region disaster recovery plan'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cs-networking', name: 'Networking & Systems Administration', summary: 'IP/subnetting, DNS, firewalls, VPN, Linux/Windows admin, troubleshooting', sampleTasks: ['Network subnet design and VLAN plan', 'DNS troubleshooting diagnostic guide', 'Linux server hardening checklist', 'VPN tunnel configuration review'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'cs-mobile', name: 'Mobile & Cross-Platform Development', summary: 'iOS/Android, Flutter, React Native, offline-first, app store deployment', sampleTasks: ['Mobile app architecture decision brief', 'Offline sync strategy design', 'App store submission checklist', 'Push notification implementation plan'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cs-gamedev', name: 'Game Development & Graphics', summary: 'Unity, Unreal, game loop, rendering, physics, multiplayer, shader programming', sampleTasks: ['Game design document template', 'Unity performance optimization checklist', 'Multiplayer networking architecture brief', 'Shader optimization guide'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'cs-itsm', name: 'IT Service & Project Management', summary: 'ITIL, service desk, SLA/SLO, change management, release planning', sampleTasks: ['ITIL incident management process design', 'SLA definition template', 'Change advisory board checklist', 'Release notes template and process'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'office_productivity',
    name: 'Office and productivity software',
    group: 'Technology & engineering',
    summary: 'Excel formulas, Google Sheets queries, Power BI DAX, Word templates, automated presentations, Notion and project tools.',
    coverageState: 'starter_ready',
    aliases: ['excel', 'google sheets', 'power bi', 'dax', 'spreadsheets', 'vba', 'word', 'powerpoint', 'slides', 'notion', 'office', 'microsoft office', 'google workspace', 'docs', 'outlook', 'email template', 'sharepoint', 'teams', 'pivot table', 'vlookup', 'xlookup', 'formulas', 'macros', 'automation', 'mail merge', 'report template', 'presentation'],
    iconName: 'FileSpreadsheet',
    subdisciplines: [
      { id: 'op-excel', name: 'Excel & Google Sheets', summary: 'LAMBDA functions, XLOOKUP, pivot modeling, array formulas, data cleaning', sampleTasks: ['Complex financial reconciliation formula', 'Automated data cleaning sheet script', 'Dynamic dashboard with pivot tables', 'XLOOKUP vs INDEX/MATCH comparison'], coverageState: 'starter_ready', workflowsCount: 3 },
      { id: 'op-bi', name: 'Power BI & Tableau', summary: 'DAX measures, star schema modeling, dashboard KPI cards, data viz', sampleTasks: ['Year-to-date sales DAX calculation brief', 'Dashboard drill-through UX outline', 'Star schema data model design', 'KPI card design specifications'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'op-docs', name: 'Documents, Templates & Reports', summary: 'Word/Docs templates, mail merge, report formatting, proposal structure', sampleTasks: ['Professional report template with styles', 'Mail merge setup for bulk letters', 'Proposal document structure outline', 'Meeting minutes template'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'op-present', name: 'Presentations & Visual Communication', summary: 'Slide design, storytelling structure, data visualization, pitch decks', sampleTasks: ['Investor pitch deck structure', 'Data-driven slide design brief', 'Executive summary presentation outline', 'Conference talk slide framework'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'op-automate', name: 'Office Automation & Workflows', summary: 'VBA macros, Google Apps Script, Power Automate, Zapier, Notion databases', sampleTasks: ['VBA macro for report automation', 'Google Apps Script for form processing', 'Power Automate approval workflow', 'Notion database and formula setup'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'ai_data_analytics',
    name: 'AI, data science and analytics',
    group: 'Technology & engineering',
    summary: 'LLM prompt engineering, RAG pipelines, ETL pipelines, SQL analytics, predictive modeling, MLOps and data governance.',
    coverageState: 'starter_ready',
    aliases: ['ai', 'machine learning', 'data science', 'rag', 'data engineering', 'sql', 'analytics', 'deep learning', 'neural network', 'NLP', 'computer vision', 'recommendation system', 'classification', 'regression', 'clustering', 'time series', 'prediction', 'forecasting', 'big data', 'spark', 'hadoop', 'data warehouse', 'data lake', 'ETL', 'dbt', 'snowflake', 'bigquery', 'pandas', 'scikit-learn', 'tensorflow', 'pytorch', 'LLM', 'GPT', 'fine-tuning', 'embeddings', 'vector database'],
    iconName: 'Sparkles',
    subdisciplines: [
      { id: 'ad-rag', name: 'LLM & RAG Engineering', summary: 'Chunking strategies, vector embeddings, reranking, hallucination evaluation', sampleTasks: ['Enterprise RAG chunking & retrieval evaluation prompt', 'Few-shot prompt calibration plan', 'LLM evaluation framework design', 'Agent workflow architecture brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ad-dataeng', name: 'Data Engineering & ETL', summary: 'dbt models, Snowflake/BigQuery schemas, streaming pipelines, data quality', sampleTasks: ['Dimensional data warehouse star schema', 'dbt incremental model refactor', 'Data pipeline monitoring checklist', 'Data quality rules specification'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ad-ml', name: 'Classical ML & Predictive Modeling', summary: 'Classification, regression, clustering, feature engineering, model evaluation', sampleTasks: ['Feature engineering strategy brief', 'Model selection and evaluation framework', 'A/B test statistical analysis plan', 'Churn prediction model design'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ad-nlp', name: 'NLP & Computer Vision', summary: 'Text classification, named entity recognition, image classification, object detection', sampleTasks: ['Text classification pipeline design', 'Named entity recognition training plan', 'Image classification model evaluation', 'OCR pipeline architecture brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ad-governance', name: 'Data Governance & Privacy', summary: 'Data catalogs, lineage, access control, GDPR compliance, data retention', sampleTasks: ['Data governance policy framework', 'Data classification scheme design', 'GDPR data mapping exercise', 'Data retention policy template'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'iot_robotics',
    name: 'IoT, embedded, robotics and automation',
    group: 'Technology & engineering',
    summary: 'Firmware development, ROS2, ESP32, sensor telemetry, edge inference, motor control, industrial automation and 3D printing.',
    coverageState: 'explainer_ready',
    aliases: ['iot', 'embedded', 'robotics', 'arduino', 'esp32', 'ros', 'automation', 'PLC', 'SCADA', 'industrial automation', 'smart home', 'wearable', 'drone', 'UAV', '3D printing', 'additive manufacturing', 'sensors', 'actuators', 'raspberry pi', 'microcontroller', 'firmware', 'RTOS', 'edge computing', 'machine vision'],
    iconName: 'Cpu',
    subdisciplines: [
      { id: 'ir-embed', name: 'Embedded Systems & Firmware', summary: 'C/C++, FreeRTOS, I2C/SPI bus, power sleep states, bootloader', sampleTasks: ['Low-power telemetry sensor state machine', 'I2C communication error recovery', 'Bootloader update procedure brief', 'Memory-constrained firmware optimization'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ir-robot', name: 'Robotics & Control', summary: 'Kinematics, PID tuning, ROS2 nodes, path planning, SLAM', sampleTasks: ['PID velocity controller tuning prompt', 'ROS2 subscriber lifecycle node brief', 'Path planning algorithm comparison', 'Robot arm kinematics calculation'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ir-industrial', name: 'Industrial Automation & PLC', summary: 'PLC programming, SCADA systems, HMI design, safety PLCs, Industry 4.0', sampleTasks: ['PLC ladder logic design brief', 'SCADA alarm management plan', 'HMI screen design checklist', 'Industrial safety system review'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ir-drone', name: 'Drones, UAV & 3D Printing', summary: 'Drone flight planning, payload selection, additive manufacturing, material selection', sampleTasks: ['Drone survey flight plan design', '3D printing material and process selection', 'UAV maintenance checklist', 'Additive manufacturing cost comparison'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'cybersecurity_privacy',
    name: 'Cybersecurity and privacy',
    group: 'Technology & engineering',
    summary: 'Defensive threat modeling, IAM least-privilege, vulnerability remediation, SOC2 compliance, incident response and AppSec.',
    coverageState: 'starter_ready',
    aliases: ['security', 'cybersecurity', 'infosec', 'threat modeling', 'iam', 'soc2', 'privacy', 'penetration testing', 'pentest', 'vulnerability', 'firewall', 'encryption', 'GDPR', 'compliance', 'ISO 27001', 'NIST', 'zero trust', 'incident response', 'forensics', 'malware analysis', 'phishing', 'security audit', 'data breach', 'access control', 'authentication', 'authorization', 'certificate', 'PKI'],
    iconName: 'ShieldCheck',
    subdisciplines: [
      { id: 'cp-defensive', name: 'Threat Modeling & Defensive Hardening', summary: 'STRIDE modeling, attack surface reduction, least privilege, zero trust', sampleTasks: ['STRIDE threat model for cloud authentication service', 'Kubernetes cluster CIS hardening audit', 'Zero trust architecture design brief', 'Attack surface analysis checklist'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cp-audit', name: 'Security Audit & Compliance', summary: 'SOC2 Type II evidence, ISO 27001 checklists, GDPR mapping, NIST framework', sampleTasks: ['SOC2 access review procedure checklist', 'Data retention policy audit framework', 'ISO 27001 gap analysis brief', 'NIST CSF assessment template'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cp-incident', name: 'Incident Response & Forensics', summary: 'IR playbooks, containment, evidence preservation, post-incident review', sampleTasks: ['Incident response playbook template', 'Evidence preservation procedure', 'Post-incident review framework', 'Breach notification checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cp-appsec', name: 'Application Security & DevSecOps', summary: 'SAST/DAST, dependency scanning, secure coding, container security', sampleTasks: ['Secure code review checklist', 'DevSecOps pipeline design brief', 'OWASP Top 10 remediation plan', 'Container image security scanning setup'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cp-identity', name: 'Identity & Access Management', summary: 'SSO, MFA, RBAC, OAuth/OIDC, privileged access, directory services', sampleTasks: ['IAM role design and least privilege review', 'MFA implementation plan', 'OAuth2 flow selection guide', 'Privileged access management brief'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'transport_aerospace',
    name: 'Transport, aviation, space and defence studies',
    group: 'Technology & engineering',
    summary: 'Flight dynamics, orbital mechanics, logistics fleet modeling, airport planning, railway engineering and autonomous vehicles.',
    coverageState: 'taxonomy_seed',
    aliases: ['aerospace', 'aviation', 'spacecraft', 'orbit', 'flight', 'transport', 'railway', 'train', 'shipping', 'logistics', 'fleet', 'airport', 'airline', 'satellite', 'rocket', 'defence', 'military', 'autonomous vehicle', 'self-driving', 'traffic management', 'supply chain logistics', 'freight', 'maritime transport'],
    iconName: 'Plane',
    subdisciplines: [
      { id: 'ta-aero', name: 'Aerospace & Propulsion', summary: 'Airfoil lift/drag, orbital maneuvers, propulsion cycles, avionics', sampleTasks: ['Rocket nozzle thrust derivation explainer', 'Orbital Hohmann transfer calculation brief', 'Aircraft performance envelope analysis'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ta-flight', name: 'Aviation Operations & Safety', summary: 'Flight planning, airspace, crew resource management, accident investigation', sampleTasks: ['Flight plan preparation checklist', 'Aviation safety incident analysis brief', 'Airport capacity assessment framework'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ta-railway', name: 'Railway & Transit Engineering', summary: 'Track design, signaling, rolling stock, station planning, metro systems', sampleTasks: ['Railway track geometry design brief', 'Signal system specification review', 'Transit station capacity analysis'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'ta-maritime', name: 'Maritime & Shipping Logistics', summary: 'Port operations, vessel scheduling, containerization, maritime regulations', sampleTasks: ['Container vessel loading plan brief', 'Port operations efficiency audit', 'Maritime regulatory compliance checklist'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },

  {
    id: 'aerospace_aviation',
    name: 'Aerospace and Aeronautical Engineering',
    group: 'Technology & engineering',
    summary: 'Aerodynamics, avionics, flight mechanics, propulsion systems, FAA/EASA airworthiness standards, and orbital mechanics.',
    coverageState: 'starter_ready',
    aliases: ["aerospace","aviation","aeronautics","avionics","aircraft","propulsion","rocket","aerodynamics","cfd","flight control","flight dynamics","orbital mechanics","satellite","airworthiness","faa part 25","easa","boeing","airbus","nasa","turbofan","wind tunnel"],
    iconName: 'Plane',
    subdisciplines: [
      {
        id: 'aero-aerodynamics',
        name: 'Aerodynamics & Wing CFD Analysis',
        summary: 'Transonic flow, boundary layer transition, lift-to-drag optimization, high-lift devices, NACA airfoils',
        sampleTasks: ["Transonic wing sweep & Mach tuck analysis","High-lift flap slot aerodynamic optimization","Boundary layer separation CFD grid refinement","Supersonic wave drag reduction memo"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'aero-avionics',
        name: 'Avionics & Fly-by-Wire Flight Control',
        summary: 'DO-178C / DO-254 compliance, triple-redundant flight control laws, ARINC 429/664 bus architecture, TCAS/ADS-B',
        sampleTasks: ["DO-178C Level A flight software safety verification","Triple-modular redundant actuator voting logic design","ARINC 429 bus latency & bandwidth budget","TCAS II collision avoidance maneuver logic brief"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'aero-propulsion',
        name: 'Propulsion, Gas Turbines & Jet Engines',
        summary: 'Bypass ratio optimization, turbofan thermodynamic cycle, combustor emissions, thrust specific fuel consumption',
        sampleTasks: ["High-bypass turbofan Brayton cycle design calculation","Turbine blade film-cooling heat transfer analysis","Combustor NOx emissions reduction trade study","Compressor surge margin & stall flutter check"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'aero-spacecraft',
        name: 'Spacecraft Systems & Orbital Mechanics',
        summary: 'Delta-v budgets, Hohmann transfer orbits, cubesat power/thermal sizing, attitude determination & control ADCS',
        sampleTasks: ["Low Earth Orbit to Geostationary Hohmann transfer delta-v budget","3U CubeSat solar array power & battery sizing","Reaction wheel desaturation torque & momentum dump calc","Thermal vacuum chamber bakeout test matrix"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'aero-cert',
        name: 'FAA & EASA Airworthiness Certification',
        summary: 'FAA 14 CFR Part 23/25, structural damage tolerance, bird strike testing, flight test campaign matrices',
        sampleTasks: ["14 CFR Part 25.571 structural fatigue damage tolerance plan","Bird strike leading-edge compliance documentation","Flight flutter test envelope expansion protocol","Minimum Equipment List (MEL) dispatch relief audit"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'aero-uav',
        name: 'UAV, Drone & eVTOL Urban Air Mobility',
        summary: 'VTOL transition dynamics, battery-electric powertrain sizing, autonomous sense-and-avoid, BVLOS FAA Part 107/108',
        sampleTasks: ["Lift+cruise eVTOL transition tilt-rotor thrust analysis","Lithium battery pack thermal runaway safety barrier","Beyond Visual Line of Sight (BVLOS) risk assessment SORA","Optical & acoustic sense-and-avoid sensor fusion spec"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'defense_military',
    name: 'Defense, Military Strategy and Geopolitics',
    group: 'Technology & engineering',
    summary: 'Defense acquisition, tactical doctrine, military logistics, ballistics, intelligence analysis, and ITAR/MIL-STD compliance.',
    coverageState: 'starter_ready',
    aliases: ["defense","military","geopolitics","army","navy","air force","weapons","ballistics","tactics","doctrine","itar","dod","nato","pentagon","rfp","procurement","radar","electronic warfare","intelligence","osint","c4isr"],
    iconName: 'Shield',
    subdisciplines: [
      {
        id: 'def-procurement',
        name: 'Defense Acquisition & Government RFP Analysis',
        summary: 'DoD 5000 series, FAR/DFARS compliance, fixed-price vs cost-plus defense contracts, capability gap analysis',
        sampleTasks: ["FAR/DFARS compliant Statement of Work (SOW) review","Life-cycle cost estimate for major defense acquisition program","Earned Value Management (EVM) variance analysis for prime contract","Past performance evaluation matrix for defense bid"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'def-tactical',
        name: 'Tactical Doctrine & Operational Planning',
        summary: 'Military Decision-Making Process MDMP, joint operations planning, counter-UAS defensive bubbles, mission command',
        sampleTasks: ["Military Decision-Making Process (MDMP) course of action analysis","Air-ground integration tactical air control party brief","Counter-UAS layered perimeter defense architecture","Combat search and rescue (CSAR) operational risk matrix"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'def-ballistics',
        name: 'Ballistics, Guidance & Precision Strike',
        summary: 'Internal/external ballistics trajectory modeling, radar/optical terminal seekers, inertial navigation GPS-denied',
        sampleTasks: ["6-DOF external ballistics trajectory calculation with Coriolis effect","Semi-active laser seeker terminal guidance error budget","INS/optical flow navigation integration for GPS-denied strike","Warhead fragmentation lethal radius & CEP statistical estimate"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'def-logistics',
        name: 'Military Logistics & Expeditionary Sustainment',
        summary: 'Operational supply chain, ammunition prepositioning, battlefield medical evacuation MEDEVAC, MIL-STD-129',
        sampleTasks: ["Forward Operating Base (FOB) 30-day class I-IX supply burn rate model","Strategic sealift ammunition load plan & port throughput audit","Tactical casualty evacuation (CASEVAC) timeline optimization","MIL-STD-129 military shipping label and RFID tagging protocol"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'def-intel',
        name: 'Geopolitics, OSINT & Threat Intelligence',
        summary: 'Geopolitical war-gaming, open-source intelligence OSINT satellite verification, adversary order-of-battle',
        sampleTasks: ["Taiwan Strait naval blockade scenario war-game memo","Commercial satellite imagery synthetic aperture radar (SAR) runway analysis","Adversary integrated air defense system (IADS) node mapping","Critical infrastructure geopolitical chokepoint threat audit"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'def-c4isr',
        name: 'Electronic Warfare, Radar & C4ISR',
        summary: 'AESA radar cross-section RCS reduction, frequency jamming countermeasures, encrypted datalinks Link 16',
        sampleTasks: ["Active Electronically Scanned Array (AESA) radar budget & range calc","DRFM radar jammer burn-through distance calculation","Link 16 tactical datalink network time slot allocation","Radar Cross Section (RCS) physical optics edge diffraction review"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'marine_maritime',
    name: 'Maritime, Marine Engineering and Naval Architecture',
    group: 'Technology & engineering',
    summary: 'Naval architecture, ship hydrodynamics, marine propulsion, offshore wind/oil structures, and IMO SOLAS/MARPOL compliance.',
    coverageState: 'starter_ready',
    aliases: ["marine","maritime","naval architecture","shipbuilding","ship","vessel","cargo","tanker","container ship","propulsion","offshore","hydrodynamics","imo","solas","marpol","dredging","port engineering","drydock","harbor"],
    iconName: 'Anchor',
    subdisciplines: [
      {
        id: 'mar-navalarch',
        name: 'Naval Architecture & Hydrodynamics',
        summary: 'Hull lines optimization, metacentric height GM stability calculations, wave resistance, sea-keeping tests',
        sampleTasks: ["Intact and damage stability calculation under IMO 2008 IS Code","Bulbous bow wave resistance CFD optimization","Container ship parametric roll resonance damping evaluation","Cross-curves of stability and GZ curve generation"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mar-propulsion',
        name: 'Marine Propulsion & Auxiliary Machinery',
        summary: 'Low-speed two-stroke diesel, LNG dual-fuel, shaft alignment, ballast water management systems BWMS',
        sampleTasks: ["Shaft line whirling and torsional vibration analysis (TVC)","LNG fuel gas supply system (FGSS) boil-off gas balance","Ballast water treatment system (BWTS) USCG/IMO type approval review","Controllable pitch propeller (CPP) blade cavitation check"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mar-offshore',
        name: 'Offshore Structures & Floating Wind',
        summary: 'Semi-submersible platforms, jacket piles, mooring line catenary analysis, DNV-GL offshore standards',
        sampleTasks: ["15MW floating offshore wind turbine semi-submersible mooring design","Offshore jacket platform wave slamming fatigue analysis (DNV-RP-C203)","Dynamic positioning DP2 capability plot and thruster sizing","Subsea umbilical, riser, and flowline (SURF) catenary tension audit"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mar-imo',
        name: 'IMO Regulations, SOLAS & MARPOL Compliance',
        summary: 'Energy Efficiency Existing Ship Index EEXI, Carbon Intensity Indicator CII, fire safety codes',
        sampleTasks: ["Ship Energy Efficiency Management Plan (SEEMP Part III) CII reduction trajectory","MARPOL Annex VI NOx Tier III SCR catalyst operational protocol","SOLAS Chapter II-2 structural fire protection division class A-60 audit","Polar Code operations manual and ice-class structural scantling check"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mar-port',
        name: 'Port Terminal & Harbor Engineering',
        summary: 'Berth occupancy simulation, quay crane dredging depth, breakwater wave diffraction, bollard pull design',
        sampleTasks: ["Post-Panamax container terminal berth throughput and queueing model","Rubble-mound breakwater armor stone stability (Hudson & Van der Meer formula)","Quay wall tied-back sheet pile retaining calculation","Harbor turning basin diameter and navigation channel dredging spec"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'mining_minerals',
    name: 'Mining, Metallurgy and Mineral Extraction',
    group: 'Technology & engineering',
    summary: 'Mine planning, rock mechanics, mineral processing, extractive metallurgy, tailings dams, and JORC / NI 43-101 mineral resource audits.',
    coverageState: 'starter_ready',
    aliases: ["mining","minerals","ore","metallurgy","geology","drilling","blasting","open pit","underground mining","tailings","jorc","ni 43-101","beneficiation","smelting","flotation","crushing","gold","copper","lithium","rare earth"],
    iconName: 'Pickaxe',
    subdisciplines: [
      {
        id: 'min-planning',
        name: 'Open-Pit & Underground Mine Planning',
        summary: 'Pit limit optimization Lerchs-Grossmann, cut-off grade strategy, block model kriging, haul truck dispatch',
        sampleTasks: ["Lerchs-Grossmann nested pit shell optimization & pushback design","Sublevel stoping underground stope stability empirical Mathews method","Block model ordinary kriging grade estimation & variogram validation","Haul road rolling resistance & truck fleet cycle time optimization"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'min-drilling',
        name: 'Drilling & Blast Engineering',
        summary: 'Burden and spacing calculation, powder factor optimization, blast vibration PPV control, electronic detonator delays',
        sampleTasks: ["Production bench blast pattern burden, spacing & sub-drill calculation","Peak Particle Velocity (PPV) ground vibration attenuation model","Electronic detonator millisecond inter-hole timing design for fragmentation","Presplit buffer blast design for open pit wall damage control"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'min-processing',
        name: 'Mineral Processing & Beneficiation',
        summary: 'Comminution circuit design SAG/ball mills, froth flotation kinetics, hydrocyclone classification, leach pads',
        sampleTasks: ["Bond Work Index comminution power calculation for SAG/ball mill circuit","Copper-molybdenum differential froth flotation circuit mass balance","Hydrocyclone cut-size d50 and circulating load optimization","Gold heap leaching cyanide percolation rate & recovery curve model"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'min-metallurgy',
        name: 'Extractive Metallurgy & Refining',
        summary: 'Pyrometallurgy smelting mass balance, hydrometallurgy solvent extraction SX-EW, cyanide recovery',
        sampleTasks: ["Flash furnace copper smelting enthalpy and oxygen enrichment balance","Solvent Extraction and Electrowinning (SX-EW) copper cathode purity design","Lithium spodumene roasting, acid leaching & precipitation mass balance","Refractory gold ore pressure oxidation (POX) autoclave kinetic review"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'min-tailings',
        name: 'Tailings Dam Engineering & Environmental Safety',
        summary: 'GISTM global tailings standards, upstream/downstream embankment stability, acid mine drainage mitigation',
        sampleTasks: ["Global Industry Standard on Tailings Management (GISTM) compliance audit","Tailings embankment liquefaction flow failure trigger analysis","Acid Rock Drainage (ARD) acid-base accounting and lime neutralization plan","Dry-stack filtered tailings geotechnical dewatering facility design"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'min-reserve',
        name: 'JORC & NI 43-101 Mineral Reserve Audits',
        summary: 'Qualified Person QP technical reports, QA/QC assay validation, measured/indicated/inferred resource classification',
        sampleTasks: ["NI 43-101 compliant technical report Chapter 14 mineral resource estimate","QA/QC duplicate, blank, and certified reference standard assay validation","Drill hole composite spacing and resource classification boundary logic","Cut-off grade calculation incorporating metallurgical recovery and smelter deductions"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'energy_nuclear',
    name: 'Energy, Nuclear and Power Utilities',
    group: 'Technology & engineering',
    summary: 'Nuclear reactor engineering, power transmission grids, battery energy storage (BESS), utility solar/wind, and NERC/FERC compliance.',
    coverageState: 'starter_ready',
    aliases: ["energy","nuclear","power grid","utilities","electricity","substation","transmission","distribution","solar","wind","bess","battery storage","reactor","smr","ferc","nerc","ieee 1547","load flow","transformer","scada","utility"],
    iconName: 'Zap',
    subdisciplines: [
      {
        id: 'nuc-reactors',
        name: 'Nuclear Reactor Physics & Plant Safety',
        summary: 'Neutron kinetics, Pressurized Water Reactor PWR thermal-hydraulics, SMR designs, IAEA safety fundamentals',
        sampleTasks: ["PWR six-factor formula core reactivity & xenon poisoning calculation","Small Modular Reactor (SMR) passive decay heat removal natural circulation model","Loss of Coolant Accident (LOCA) peak cladding temperature (PCT) safety limit check","Nuclear fuel rod burnup & spent fuel pool criticality analysis"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'ene-grid',
        name: 'Power Grid Transmission & Load Flow',
        summary: 'AC/DC power flow, Newton-Raphson load studies, transient stability analysis, IEEE 39-bus modeling',
        sampleTasks: ["Newton-Raphson AC power flow and voltage collapse bifurcation check","Transient rotor angle stability simulation under 3-phase fault","High-Voltage Direct Current (HVDC) converter station active/reactive power control","Transmission line thermal ampacity dynamic rating calculation (IEEE 738)"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'ene-substation',
        name: 'High-Voltage Substation & Relay Protection',
        summary: 'Distance relay zones, differential transformer protection IEEE C37.91, breaker-and-a-half topology',
        sampleTasks: ["Line distance protection mho relay zone 1/2/3 reach and coordination","Power transformer current transformer (CT) saturation & differential restraint curve","Gas-Insulated Switchgear (GIS) substation insulation coordination (IEC 60071)","Substation grounding grid mesh and step/touch voltage calculation (IEEE 80)"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'ene-storage',
        name: 'Battery Energy Storage Systems (BESS)',
        summary: 'Utility-scale megawatt-hour sizing, lithium iron phosphate LFP thermal runaway suppression, capacity degradation',
        sampleTasks: ["100MW/400MWh utility BESS duration sizing & revenue stacking model","NFPA 855 and UL 9540A thermal runaway propagation barrier analysis","Battery cell degradation cycling model (DoD, C-rate, calendar aging)","BESS inverter virtual synchronous machine (VSM) grid-forming control spec"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'ene-renewables',
        name: 'Utility Solar & Wind Farm Design',
        summary: 'Solar PV single-axis tracker layout, wake loss modeling for wind arrays, curtailment and interconnect studies',
        sampleTasks: ["200MW solar PV DC/AC inverter loading ratio (ILR) optimization","Wind turbine array Jensen wake deficit and wake-loss efficiency model","Point of Interconnection (POI) IEEE 1547 ride-through compliance review","Battery-plus-solar co-located hybrid plant capacity factor calculation"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'ene-regulatory',
        name: 'FERC, NERC & Grid Code Compliance',
        summary: 'NERC CIP cybersecurity standards, interconnection study queue (PJM/CAISO/ERCOT), ancillary service market bidding',
        sampleTasks: ["NERC CIP-005/007 electronic security perimeter audit memo","FERC Order 2023 cluster interconnection study risk mitigation plan","Frequency regulation ancillary service day-ahead market bidding strategy","Distribution system hosting capacity analysis for distributed solar"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'telecom_wireless',
    name: 'Telecommunications, 5G/6G and RF Infrastructure',
    group: 'Technology & engineering',
    summary: '5G/6G cellular radio access networks, optical fiber DWDM, satellite constellations, RF antenna design, and 3GPP/ITU standards.',
    coverageState: 'starter_ready',
    aliases: ["telecom","telecommunications","5g","6g","rf","wireless","cellular","ran","fiber optic","dwdm","satellite","antenna","microwave","spectrum","3gpp","itu","fcc","base station","mimo","link budget","broadband"],
    iconName: 'Radio',
    subdisciplines: [
      {
        id: 'tel-ran',
        name: '5G/6G Cellular & Radio Access Network (RAN)',
        summary: 'Massive MIMO beamforming, Open RAN architecture, gNodeB link budgets, 3GPP Release 17/18 specs',
        sampleTasks: ["5G NR mid-band (3.5 GHz) link budget & cell coverage radius calculation","Massive MIMO 64T64R digital beamforming spectral efficiency model","O-RAN split 7.2x fronthaul bandwidth & eCPRI latency budget","User Equipment (UE) handover hysteresis & ping-pong mitigation config"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'tel-optical',
        name: 'Optical Fiber & DWDM Transmission',
        summary: 'Dense Wavelength Division Multiplexing, dispersion compensation, optical amplifier EDFA cascade, OTDR testing',
        sampleTasks: ["100-channel 400G DWDM optical link OSNR and chromatic dispersion budget","Erbium-Doped Fiber Amplifier (EDFA) gain ripple & noise figure cascade","Optical Time-Domain Reflectometer (OTDR) fiber fault trace interpretation","Passive Optical Network (GPON/XGS-PON) split ratio optical power budget"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'tel-satellite',
        name: 'Satellite Communications & Space Link Budgets',
        summary: 'LEO constellation gateway design, Ku/Ka-band Doppler shift correction, earth station antenna tracking',
        sampleTasks: ["LEO satellite ground terminal Ka-band uplink/downlink link budget (C/N0)","Rain attenuation prediction (ITU-R P.618) for satellite gateway design","Phase-steered flat panel phased-array antenna tracking algorithm","Inter-satellite optical laser cross-link pointing error budget"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'tel-rf',
        name: 'RF Antenna & Microwave Engineering',
        summary: 'Microstrip patch antenna arrays, VSWR and S-parameter optimization, Smith chart impedance matching',
        sampleTasks: ["Microstrip patch antenna design with resonant frequency & return loss optimization","Smith chart quarter-wave stub impedance matching network design","Cavity bandpass filter insertion loss and out-of-band rejection synthesis","Microwave point-to-point line-of-sight Fresnel zone clearance analysis"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'tel-spectrum',
        name: 'Spectrum Allocation & FCC/ITU Regulatory',
        summary: 'Frequency interference coordination, spectral mask compliance, private CBRS LTE/5G network licensing',
        sampleTasks: ["FCC Part 96 Citizens Broadband Radio Service (CBRS) SAS coordination review","Adjacent-channel interference ratio (ACIR) co-existence study","ITU World Radiocommunication Conference (WRC) frequency band allocation memo","Specific Absorption Rate (SAR) human RF exposure compliance report"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'game_simulation',
    name: 'Game Development, Interactive 3D and Virtual Simulation',
    group: 'Technology & engineering',
    summary: 'Unreal Engine 5, Unity C#, 3D real-time rendering, gameplay mechanics, level architecture, physics simulations, and multiplayer netcode.',
    coverageState: 'starter_ready',
    aliases: ["game dev","game development","unreal engine","unity","3d graphics","shaders","gameplay","game design","gdd","level design","physics engine","multiplayer","netcode","xr","vr","metaverse","rendering","steam","playstation","godot"],
    iconName: 'Gamepad2',
    subdisciplines: [
      {
        id: 'gam-unreal',
        name: 'Unreal Engine 5 & Blueprints Architecture',
        summary: 'Nanite geometry streaming, Lumen global illumination, gameplay ability system GAS, Niagara VFX',
        sampleTasks: ["Gameplay Ability System (GAS) attribute set and gameplay effect pipeline","Nanite virtualized geometry performance profiling & draw call budget","Lumen dynamic global illumination bounce lighting optimization","Mass Entity ECS crowd simulation and movement pathfinding architecture"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'gam-unity',
        name: 'Unity & C# Systems Programming',
        summary: 'Data-Oriented Technology Stack DOTS, Job System and Burst Compiler, Addressables memory management',
        sampleTasks: ["Unity DOTS Entities 1.0 component system & chunk iteration performance","C# Job System multithreaded procedural mesh generation script","Addressables asset bundle dependency tracking and memory unloading plan","Custom render pipeline (URP) pass for stylized toon outlines"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'gam-shaders',
        name: '3D Shaders & Real-Time Rendering',
        summary: 'HLSL/GLSL compute shaders, ray tracing acceleration structures, PBR materials, post-processing pipelines',
        sampleTasks: ["HLSL ray marching volumetric cloud rendering compute shader","PBR metallic-roughness material energy conservation verification","Screen-Space Ambient Occlusion (SSAO) depth/normal buffer pass","Mesh LOD cross-fade dither shader implementation"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'gam-design',
        name: 'Game Design Documents (GDD) & Mechanics',
        summary: 'Core gameplay loops, combat balance math, progression economics, difficulty curves',
        sampleTasks: ["Complete Game Design Document (GDD) core loop & retention milestones","Action RPG combat damage scaling formula & armor mitigation math","In-game soft/hard currency sink-and-source economic equilibrium sheet","Player onboarding tutorial design with non-intrusive environmental teaching"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'gam-level',
        name: 'Level Design & Environmental Storytelling',
        summary: 'Greybox spatial prototyping, sightline pacing, environmental landmarking, modular kit architecture',
        sampleTasks: ["Multiplayer competitive arena 3-lane sightline & cover distribution audit","Single-player linear mission spatial beat chart & combat arena pacing","Modular architectural kit snapping grid and texture budget layout","Environmental storytelling vignette placement for narrative discovery"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'gam-netcode',
        name: 'Multiplayer Netcode & Server Architecture',
        summary: 'Client-side prediction and server reconciliation, tick-rate optimization, UDP packet compression',
        sampleTasks: ["Client-side prediction and server reconciliation algorithm for fast shooter","Lag compensation history buffer and rewind hit registration audit","UDP delta packet compression and bit-packing serializer protocol","Dedicated game server autoscaling and matchmaking latency orchestration"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROUP 3: HEALTH, FOOD & LIVING THINGS (7 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'medicine_health',
    name: 'Medicine and health-professions education',
    group: 'Health, food & living things',
    summary: 'Medical physiology, pharmacology concepts, doctor appointment prep, public health, nursing and allied health education. Strictly educational.',
    coverageState: 'starter_ready',
    aliases: ['medicine', 'medical', 'pharmacology', 'pathology', 'appointment prep', 'doctor', 'hospital', 'nursing', 'pharmacy', 'surgery', 'diagnosis', 'symptoms', 'disease', 'treatment', 'public health', 'epidemiology', 'first aid', 'CPR', 'dental', 'mental health', 'psychiatry', 'radiology', 'lab results', 'blood test', 'health education', 'patient', 'clinical', 'anatomy'],
    iconName: 'Stethoscope',
    subdisciplines: [
      { id: 'mh-prep', name: 'Patient Education & Appointment Prep', summary: 'Organising symptoms for discussion, questions for physician (No diagnosis!)', sampleTasks: ['Organize symptom history for specialist visit', 'Translate lab test panel terms to plain English', 'Prepare questions for doctor appointment', 'Medication interaction question list'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'mh-edu', name: 'Medical Education & Pharmacology Concepts', summary: 'Drug mechanism of action, receptor kinetics for students, clinical case studies', sampleTasks: ['ACE inhibitor pharmacodynamics study guide', 'Cardiovascular cycle review questions', 'Clinical case study analysis framework', 'Drug interaction learning exercise'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'mh-public', name: 'Public Health & Epidemiology', summary: 'Disease surveillance, health promotion, epidemiological study design, outbreak investigation', sampleTasks: ['Epidemiological study design brief', 'Health promotion campaign outline', 'Disease outbreak investigation framework', 'Public health data interpretation guide'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'mh-nursing', name: 'Nursing & Allied Health Education', summary: 'Care plans, clinical skills, patient assessment frameworks, medication administration', sampleTasks: ['Nursing care plan template', 'Patient assessment documentation guide', 'Clinical skills competency checklist', 'Handoff communication SBAR template'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'mh-firstaid', name: 'First Aid & Emergency Response', summary: 'Basic life support concepts, wound care, emergency preparedness (always call emergency services)', sampleTasks: ['First aid kit checklist for workplace', 'Emergency response plan outline', 'CPR/AED awareness guide', 'Injury documentation template'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'fitness_nutrition',
    name: 'Fitness, nutrition and wellbeing',
    group: 'Health, food & living things',
    summary: 'Strength training periodisation, macro-nutrient calculations, endurance pacing, recovery, yoga, mindfulness and sleep science.',
    coverageState: 'starter_ready',
    aliases: ['fitness', 'workout', 'nutrition', 'macros', 'diet', 'gym', 'exercise', 'weight loss', 'muscle building', 'running', 'yoga', 'pilates', 'stretching', 'sports nutrition', 'meal prep', 'protein', 'calories', 'BMI', 'body composition', 'sleep', 'recovery', 'mindfulness', 'meditation', 'mental wellness', 'stress management', 'wellbeing', 'health goals'],
    iconName: 'Activity',
    subdisciplines: [
      { id: 'fn-period', name: 'Exercise Periodisation & Strength', summary: 'Progressive overload, RPE, powerlifting/hypertrophy splits, form cues', sampleTasks: ['12-week hypertrophy progression plan', 'Mobility warmup routine for desk workers', 'Powerlifting peaking program brief', 'Home workout program design'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fn-macro', name: 'Nutrition & Meal Architecture', summary: 'Basal metabolic rate, protein targets, hydration guidelines, meal timing', sampleTasks: ['Endurance marathon fueling strategy outline', 'High-protein vegetarian meal prep framework', 'Macro calculation and tracking setup', 'Sports nutrition timing guide'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fn-endurance', name: 'Endurance & Sports Performance', summary: 'Running plans, cycling periodisation, VO2max, race preparation, pacing', sampleTasks: ['Marathon training plan with progressive distance', 'Cycling FTP improvement program', 'Race day nutrition and pacing strategy', 'Triathlon training schedule outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fn-mind', name: 'Mindfulness, Sleep & Recovery', summary: 'Meditation practices, sleep hygiene, stress management, recovery protocols', sampleTasks: ['Sleep hygiene improvement protocol', 'Beginner meditation program outline', 'Stress management techniques guide', 'Active recovery day planning'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'food_culinary',
    name: 'Food, culinary and hospitality',
    group: 'Health, food & living things',
    summary: 'Recipe development, commercial kitchen prep lists, HACCP food safety, menu engineering, restaurant operations and catering.',
    coverageState: 'starter_ready',
    aliases: ['cooking', 'culinary', 'recipe', 'baking', 'haccp', 'kitchen', 'restaurant', 'chef', 'food safety', 'menu', 'catering', 'hospitality', 'hotel', 'bartending', 'barista', 'coffee', 'wine', 'pastry', 'bread', 'food truck', 'meal planning', 'ingredient', 'food cost', 'plating', 'food photography'],
    iconName: 'Utensils',
    subdisciplines: [
      { id: 'fc-recipe', name: 'Recipe Development & Scaling', summary: 'Baker percentages, allergen substitutions, flavor profiling, scaling', sampleTasks: ['Scale sourdough baker percentage formula', 'Menu food cost calculation matrix', 'Allergen substitution guide', 'Flavor pairing suggestion brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fc-safety', name: 'HACCP & Food Safety', summary: 'Hazard analysis, critical control points, temperature monitoring, sanitation', sampleTasks: ['HACCP plan template for restaurant', 'Food safety audit checklist', 'Temperature monitoring log design', 'Allergen management procedure'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'fc-restaurant', name: 'Restaurant & Kitchen Operations', summary: 'Kitchen workflow, prep lists, inventory, staff scheduling, POS systems', sampleTasks: ['Kitchen prep list template', 'Restaurant opening/closing checklist', 'Inventory management system design', 'Staff scheduling optimization brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fc-beverage', name: 'Beverage, Coffee & Hospitality Service', summary: 'Beverage menus, barista training, wine selection, cocktail development', sampleTasks: ['Specialty coffee menu design', 'Wine pairing guide by cuisine', 'Cocktail recipe development brief', 'Hotel guest service training outline'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'agriculture_animals',
    name: 'Agriculture, forestry, fisheries and animals',
    group: 'Health, food & living things',
    summary: 'Crop rotation, irrigation scheduling, soil agronomy, livestock health, forestry, aquaculture and veterinary basics.',
    coverageState: 'starter_ready',
    aliases: ['agriculture', 'farming', 'crops', 'irrigation', 'livestock', 'forestry', 'fisheries', 'aquaculture', 'veterinary', 'vet', 'cattle', 'poultry', 'dairy', 'organic farming', 'greenhouse', 'hydroponics', 'pest control', 'fertilizer', 'soil', 'harvest', 'seeds', 'plantation', 'animal husbandry', 'pet care', 'dog', 'cat', 'horse', 'beekeeping', 'wildlife'],
    iconName: 'Trees',
    subdisciplines: [
      { id: 'aa-agronomy', name: 'Crop Planning & Agronomy', summary: 'Soil nitrogen/potassium tests, pest scouting, climate adaptation, rotation', sampleTasks: ['Cover crop rotation schedule for clay loam', 'Drip irrigation calculation plan', 'Pest management integrated approach', 'Soil amendment recommendation brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'aa-livestock', name: 'Livestock & Animal Husbandry', summary: 'Cattle/poultry management, feed formulation, breeding, health monitoring', sampleTasks: ['Livestock feed formulation brief', 'Cattle health monitoring checklist', 'Poultry house ventilation design', 'Breeding program planning outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'aa-forestry', name: 'Forestry & Timber Management', summary: 'Forest inventory, harvesting plans, reforestation, timber grading', sampleTasks: ['Forest inventory assessment brief', 'Timber harvesting plan outline', 'Reforestation site preparation guide', 'Wood quality grading reference'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'aa-aqua', name: 'Fisheries & Aquaculture', summary: 'Fish farming, pond management, water quality, feed management, stocking', sampleTasks: ['Aquaculture pond management plan', 'Fish stocking density calculation', 'Water quality monitoring protocol', 'Aquaculture feed schedule design'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'aa-vet', name: 'Veterinary & Pet Care Basics', summary: 'Pet health monitoring, vaccination schedules, first aid, nutrition (educational only)', sampleTasks: ['Pet vaccination schedule organizer', 'Pet first aid kit checklist', 'Pet nutrition guideline comparison', 'Vet visit question preparation'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'environment_sustainability',
    name: 'Environment, climate and sustainability',
    group: 'Health, food & living things',
    summary: 'Life cycle analysis (LCA), corporate GHG accounting, zero-waste audits, renewable energy policy, green building and conservation.',
    coverageState: 'starter_ready',
    aliases: ['sustainability', 'esg', 'ghg accounting', 'carbon footprint', 'lca', 'environment', 'green', 'renewable', 'recycling', 'waste management', 'water treatment', 'pollution', 'conservation', 'biodiversity', 'climate action', 'net zero', 'LEED', 'BREEAM', 'green building', 'circular economy', 'sustainable development', 'SDGs', 'environmental impact'],
    iconName: 'Leaf',
    subdisciplines: [
      { id: 'es-ghg', name: 'Carbon Accounting & ESG', summary: 'GHG Protocol calculations, emission factors, sustainability reports, net zero targets', sampleTasks: ['Scope 3 business travel emission audit brief', 'Packaging life-cycle assessment comparison', 'ESG report framework outline', 'Net zero roadmap planning brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'es-waste', name: 'Waste Management & Circular Economy', summary: 'Waste audits, recycling programs, composting, zero-waste strategies', sampleTasks: ['Waste audit procedure and report template', 'Office recycling program design', 'Circular economy business model brief', 'Construction waste management plan'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'es-water', name: 'Water Treatment & Conservation', summary: 'Water quality testing, treatment processes, rainwater harvesting, reuse', sampleTasks: ['Water quality test interpretation guide', 'Rainwater harvesting system design brief', 'Water conservation audit checklist', 'Wastewater treatment process selection'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'es-green', name: 'Green Building & Sustainable Design', summary: 'LEED/BREEAM certification, passive design, energy modeling, materials', sampleTasks: ['LEED certification checklist', 'Passive solar design principles brief', 'Energy audit and retrofit recommendations', 'Sustainable material selection matrix'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },

  {
    id: 'biotech_pharma',
    name: 'Biotechnology, Pharmaceuticals and Clinical Trials',
    group: 'Health, food & living things',
    summary: 'Drug discovery, bioprocessing, FDA IND/NDA submissions, Phase I–IV clinical trial protocols, cGMP cleanrooms, and pharmacovigilance.',
    coverageState: 'starter_ready',
    aliases: ["biotech","biotechnology","pharmaceuticals","pharma","drug discovery","clinical trials","fda","ind","nda","cgmp","bioreactor","antibodies","mrna","pharmacovigilance","ich gcp","formulation","pharmacokinetics","pkpd"],
    iconName: 'Pill',
    subdisciplines: [
      {
        id: 'bio-discovery',
        name: 'Drug Discovery & Medicinal Chemistry',
        summary: 'Structure-activity relationship SAR, target affinity IC50 screening, lead molecule ADME profiling',
        sampleTasks: ["Small-molecule structure-activity relationship (SAR) lead optimization memo","High-throughput screening (HTS) assay Z-factor quality validation","In vitro ADME microsomal stability and cytochrome P450 inhibition review","Lipinski rule of five oral bioavailability chemical property filter"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'bio-bioprocess',
        name: 'Bioprocess Fermentation & Downstream Purification',
        summary: 'CHO cell culture bioreactor scale-up, chromatography resin purification, viral filtration',
        sampleTasks: ["2000L fed-batch CHO cell monoclonal antibody bioreactor scale-up model","Protein A affinity chromatography loading capacity and elution optimization","Tangential flow filtration (TFF) ultrafiltration flux rate calculation","Viral clearance validation and log-reduction value (LRV) protocol"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'bio-regulatory',
        name: 'FDA Regulatory Strategy (IND, NDA & BLA)',
        summary: '21 CFR Part 312/314, Common Technical Document CTD Module 2-5, Breakthrough Therapy Designation',
        sampleTasks: ["Investigational New Drug (IND) Module 2.4 nonclinical summary outline","FDA Type B pre-IND meeting briefing package and question strategy","Breakthrough Therapy / Fast Track designation justification dossier","21 CFR 314 NDA chemistry, manufacturing, and controls (CMC) audit"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'bio-trials',
        name: 'Clinical Trial Protocols (Phase I–IV)',
        summary: 'Sample size statistical powering, inclusion/exclusion criteria, ICH GCP E6(R2) compliance, endpoint selection',
        sampleTasks: ["Phase II randomized double-blind trial sample size power calculation","ICH GCP E6(R2) compliant Clinical Study Protocol (CSP) drafting","Adaptive dose-escalation 3+3 vs CRM design evaluation memo","Data Safety Monitoring Board (DSMB) charter and stopping boundary rules"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'bio-cgmp',
        name: 'cGMP Cleanroom Validation & Manufacturing',
        summary: 'Cleanroom ISO 14644 classification, automated aseptic filling, Cleaning Validation CIP/SIP, batch records',
        sampleTasks: ["Cleanroom Grade A/B HVAC airflow velocity & particulate validation plan","Automated aseptic vial filling media fill qualification protocol","CIP/SIP cleaning validation residual swab limit calculation (0.1% dose / 10 ppm)","Master Batch Production Record (MBR) review for commercial release"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'bio-pharmacovigilance',
        name: 'Pharmacovigilance & Post-Market Surveillance',
        summary: 'MedDRA adverse event coding, Periodic Safety Update Reports PSUR, Risk Evaluation and Mitigation REMS',
        sampleTasks: ["Individual Case Safety Report (ICSR) MedDRA coding and causality assessment","Periodic Benefit-Risk Evaluation Report (PBRER/PSUR) safety signal review","FDA Risk Evaluation and Mitigation Strategy (REMS) program design","Disproportionality analysis (PRR / ROR) for spontaneous reporting databases"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'psychology_behavioral',
    name: 'Psychology, Behavioral Science and Mental Health',
    group: 'Health, food & living things',
    summary: 'Clinical psychopathology (DSM-5-TR / ICD-11), evidence-based therapies (CBT, DBT), neuropsychology, psychometrics, and organizational behavior.',
    coverageState: 'starter_ready',
    aliases: ["psychology","mental health","psychiatry","cbt","therapy","behavioral science","dsm-5","icd-11","neuropsychology","psychometrics","counseling","cognitive psychology","depression","anxiety","adhd","ptsd","trauma","emotional intelligence"],
    iconName: 'Brain',
    subdisciplines: [
      {
        id: 'psy-clinical',
        name: 'Clinical Assessment & Diagnostics (DSM-5 / ICD-11)',
        summary: 'Differential diagnosis criteria, psychiatric intake history, suicide risk stratification',
        sampleTasks: ["DSM-5-TR differential diagnosis between Major Depression and Bipolar II","Structured clinical interview intake questionnaire for adult ADHD","Columbia-Suicide Severity Rating Scale (C-SSRS) risk triage protocol","PTSD trauma symptom severity and comorbidity assessment synthesis"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'psy-cbt',
        name: 'Cognitive Behavioral & Evidence-Based Therapies',
        summary: 'CBT thought restructuring records, exposure therapy hierarchies, DBT emotion regulation skills',
        sampleTasks: ["CBT cognitive distortion thought record template and reframing guide","Graded exposure therapy hierarchy for panic disorder and agoraphobia","DBT distress tolerance TIPP skills patient psychoeducation handout","Behavioral activation weekly schedule for unipolar major depressive episode"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'psy-neuro',
        name: 'Neuropsychology & Cognitive Profiling',
        summary: 'Executive function battery interpretation, memory deficit localization, traumatic brain injury assessments',
        sampleTasks: ["WAIS-IV / WMS-IV neuropsychological score profile discrepancy analysis","Mild Cognitive Impairment (MCI) vs early Alzheimer disease differentiation","Post-concussion cognitive fatigue and executive dysfunction return-to-work plan","Frontal lobe syndrome behavioral disinhibition clinical summary"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'psy-psychometrics',
        name: 'Psychometric Scale Design & Standardization',
        summary: 'Cronbach alpha reliability, exploratory factor analysis EFA, construct validity testing',
        sampleTasks: ["Likert scale item pool creation and construct domain definition brief","Exploratory Factor Analysis (EFA) scree plot and factor loading matrix","Test-retest reliability and convergent/discriminant validity testing plan","Item Response Theory (IRT) difficulty and discrimination parameter curve check"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'psy-child',
        name: 'Developmental & Child Psychology',
        summary: 'Pediatric milestone tracking, ADHD/autism spectrum diagnostic evaluation, family systems therapy',
        sampleTasks: ["Autism Spectrum Disorder (ASD) developmental milestone history and observation rubric","Parent-Child Interaction Therapy (PCIT) behavioral compliance protocol","School IEP accommodation plan for dyscalculia and sensory processing sensitivity","Adolescent emotional dysregulation family communication contract"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'psy-org',
        name: 'Industrial-Organizational (I-O) Psychology',
        summary: 'Job performance appraisal bias reduction, employee motivation models, psychological safety indices',
        sampleTasks: ["Behaviorally Anchored Rating Scales (BARS) performance evaluation rubric","Amy Edmondson psychological safety survey deployment and diagnostic report","Job burnout Maslach Burnout Inventory (MBI) organizational intervention strategy","Structured competency-based behavioral interview rubric with scoring keys"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROUP 4: ECONOMY & WORK (9 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'business_entrepreneurship',
    name: 'Business, management and entrepreneurship',
    group: 'Economy & work',
    summary: 'Customer problem discovery, PRD drafting, business model canvas, unit economics, go-to-market, franchise, small business admin.',
    coverageState: 'published_workflow',
    aliases: ['business', 'startup', 'founder', 'prd', 'product requirements', 'pricing', 'mvp', 'business model', 'entrepreneur', 'small business', 'franchise', 'business plan', 'pitch deck', 'investor', 'venture capital', 'go-to-market', 'strategy', 'management', 'leadership', 'operations', 'partnerships', 'B2B', 'B2C', 'SaaS', 'company', 'organization'],
    iconName: 'Briefcase',
    subdisciplines: [
      { id: 'be-validate', name: 'Idea Validation & Customer Discovery', summary: 'The Mom Test interview guides, willingness-to-pay tests, problem framing', sampleTasks: ['Customer problem discovery interview protocol', 'B2B pilot customer interview script', 'Market opportunity sizing brief', 'Competitive landscape analysis'], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'be-prd', name: 'Product Requirements (PRD) & MVP Scope', summary: 'Feature trade-offs, user stories, acceptance criteria, non-functional requirements', sampleTasks: ['Production-ready MVP PRD specification prompt', 'Feature cut & phased roadmap brief', 'User story mapping exercise', 'Acceptance criteria writing guide'], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'be-econ', name: 'Unit Economics & Pricing Strategy', summary: 'CAC, LTV, payback period, tiered SaaS pricing models, margin analysis', sampleTasks: ['SaaS tiered pricing model experiment', 'Break-even unit contribution margin check', 'Customer acquisition cost analysis', 'Revenue model comparison brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'be-gtm', name: 'Go-to-Market & Growth Strategy', summary: 'Launch planning, channel strategy, partnerships, growth loops, referrals', sampleTasks: ['Go-to-market launch plan template', 'Channel strategy comparison matrix', 'Partnership outreach brief', 'Growth loop design exercise'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'be-small', name: 'Small Business & Franchise Operations', summary: 'Business registration, licensing, franchise evaluation, daily operations', sampleTasks: ['Business registration checklist by entity type', 'Franchise evaluation criteria matrix', 'Small business operations manual outline', 'Cash flow management for small business'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'finance_markets',
    name: 'Finance, accounting, banking and insurance',
    group: 'Economy & work',
    summary: 'Corporate valuation (DCF), stock research, bookkeeping, banking operations, insurance, tax preparation and personal finance.',
    coverageState: 'published_workflow',
    aliases: ['finance', 'accounting', 'investing', 'stocks', 'valuation', 'dcf', 'bookkeeping', 'options', 'banking', 'insurance', 'tax', 'taxation', 'GST', 'VAT', 'audit', 'financial statements', 'balance sheet', 'income statement', 'cash flow', 'budget', 'payroll', 'invoice', 'accounts payable', 'accounts receivable', 'reconciliation', 'treasury', 'forex', 'mutual fund', 'ETF', 'bonds', 'credit', 'loan', 'mortgage', 'premium', 'claims', 'underwriting', 'personal finance', 'savings', 'retirement', 'pension'],
    iconName: 'TrendingUp',
    subdisciplines: [
      { id: 'fm-valuation', name: 'Equity Research & Valuation', summary: 'DCF assumptions, trading comps, margin of safety, 10-K analysis', sampleTasks: [
        'Discounted Cash Flow (DCF) intrinsic value model with 3-scenario sensitivity table',
        'Competitor multiple benchmarking checklist (EV/EBITDA, P/E, P/S, EV/FCF)',
        'Annual 10-K / Annual report forensic accounting audit & footnotes scrutiny',
        'Sector valuation comparison brief across US, European & Indian peer stocks',
        'Mergers & Acquisitions (M&A) accretion / dilution & synergy valuation brief',
        'Leveraged Buyout (LBO) debt schedule and hurdle rate return analysis',
        'Sum-of-the-Parts (SOTP) conglomerate valuation for multi-segment firms',
        'Working Capital & Cash Conversion Cycle (CCC) optimization framework',
        'Earnings call transcript sentiment analysis & guidance variance breakdown',
        'Credit rating & debt covenant stress testing under macro recession shocks',
        'Cap table waterfall & dilution analysis for Seed to Series C venture rounds',
        'Dividend Discount Model (DDM) for commercial banks & regulated utilities'
      ], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'fm-options', name: 'Options & Derivatives Education', summary: 'Greeks (Delta, Theta), payoff diagrams, risk boundaries (No trade execution)', sampleTasks: ['Covered call payoff diagram educational brief', 'Implied volatility skew explainer', 'Options strategy comparison for hedging', 'Greeks sensitivity analysis exercise'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fm-accounting', name: 'Accounting & Bookkeeping Review', summary: 'Balance sheet reconciliation, double entry, cash flow statements, journal entries', sampleTasks: ['Monthly accrual vs cash reconciliation brief', 'Cost center allocation framework', 'Journal entry verification checklist', 'Financial statement preparation guide'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fm-banking', name: 'Banking Operations & Treasury', summary: 'Cash management, credit analysis, loan processing, trade finance, KYC/AML', sampleTasks: ['Credit analysis assessment framework', 'KYC document verification checklist', 'Cash management optimization brief', 'Trade finance letter of credit guide'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fm-insurance', name: 'Insurance & Claims Management', summary: 'Policy comparison, claims processing, underwriting basics, risk assessment', sampleTasks: ['Insurance policy comparison matrix', 'Claims documentation checklist', 'Risk assessment questionnaire design', 'Insurance coverage gap analysis brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fm-tax', name: 'Tax Preparation & Compliance', summary: 'Tax document organization, deduction identification, filing preparation (not advice)', sampleTasks: ['Tax document organizer checklist', 'Business expense categorization guide', 'Tax filing preparation timeline', 'Deduction eligibility self-assessment'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'fm-personal', name: 'Personal Finance & Investing Basics', summary: 'Emergency fund planning, investment allocation education, retirement planning concepts', sampleTasks: ['Emergency fund calculation and plan', 'Investment portfolio education brief', 'Retirement savings goal calculator setup', 'Debt repayment strategy comparison'], coverageState: 'starter_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'marketing_sales',
    name: 'Marketing, sales and e-commerce',
    group: 'Economy & work',
    summary: 'Positioning statements, landing page copy, email sequences, SEO, paid campaigns, social media, CRM and market research.',
    coverageState: 'starter_ready',
    aliases: ['marketing', 'sales', 'seo', 'copywriting', 'ads', 'landing page', 'email', 'digital marketing', 'social media', 'content marketing', 'PPC', 'Google Ads', 'Facebook Ads', 'Instagram', 'LinkedIn', 'influencer', 'brand', 'advertising', 'ecommerce', 'shopify', 'amazon', 'affiliate', 'CRM', 'lead generation', 'conversion', 'funnel', 'campaign', 'market research', 'survey', 'customer', 'branding', 'PR', 'public relations', 'media buying'],
    iconName: 'Megaphone',
    subdisciplines: [
      { id: 'ms-landing', name: 'Conversion Copy & Landing Pages', summary: 'Hero messaging, objection handling, social proof structure, A/B testing', sampleTasks: ['SaaS landing page copy brief with objection counters', 'High-converting product description', 'Landing page A/B test hypothesis', 'Call-to-action optimization brief'], coverageState: 'starter_ready', workflowsCount: 3 },
      { id: 'ms-seo', name: 'SEO & Search Strategy', summary: 'Search intent mapping, outline architecture, internal linking, technical SEO', sampleTasks: ['Technical SEO content outline with schema markup', 'Competitor keyword gap analysis brief', 'Internal linking strategy plan', 'SEO audit checklist'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ms-ppc', name: 'Paid Advertising & PPC', summary: 'Google Ads, Meta Ads, campaign structure, budget allocation, conversion tracking', sampleTasks: ['Google Ads campaign structure brief', 'Facebook/Meta ad creative brief', 'PPC budget allocation framework', 'Conversion tracking implementation checklist'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ms-social', name: 'Social Media & Content Marketing', summary: 'Content calendars, platform strategy, community management, video content', sampleTasks: ['Monthly content calendar template', 'Social media platform strategy comparison', 'Video content script outline', 'Community engagement playbook'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ms-email', name: 'Email Marketing & Automation', summary: 'Email sequences, segmentation, deliverability, drip campaigns, newsletters', sampleTasks: ['Welcome email sequence design', 'Email segmentation strategy brief', 'Newsletter content framework', 'Cart abandonment email flow design'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'ms-research', name: 'Market Research & Customer Insights', summary: 'Survey design, competitor analysis, user personas, pricing research', sampleTasks: ['Customer survey questionnaire design', 'Competitive analysis framework', 'User persona creation brief', 'Price sensitivity research plan'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'careers_workplace',
    name: 'Careers, HR and workplace',
    group: 'Economy & work',
    summary: 'Resume tailoring, interview preparation (STAR), recruitment, performance reviews, onboarding, workplace policy and training.',
    coverageState: 'starter_ready',
    aliases: ['career', 'resume', 'cv', 'interview', 'hr', 'job search', 'hiring', 'recruitment', 'job description', 'salary', 'compensation', 'benefits', 'onboarding', 'performance review', 'feedback', 'promotion', 'work-life balance', 'remote work', 'diversity', 'inclusion', 'training', 'learning and development', 'talent management', 'employee engagement', 'workplace culture', 'termination', 'severance', 'labor law', 'discrimination', 'harassment'],
    iconName: 'UserCheck',
    subdisciplines: [
      { id: 'cw-interview', name: 'Interview Preparation (STAR method)', summary: 'Behavioural questions, executive presence, compensation negotiation scripts', sampleTasks: ['STAR method answer framing for senior role', 'Executive compensation negotiation plan', 'Technical interview preparation guide', 'Panel interview strategy brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cw-resume', name: 'Resume, CV & Cover Letter', summary: 'ATS-friendly formatting, achievement-based bullet points, cover letter customization', sampleTasks: ['ATS-optimized resume rewrite brief', 'Achievement bullet point generator', 'Cover letter tailoring for specific role', 'LinkedIn profile optimization checklist'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'cw-recruit', name: 'Recruitment & Hiring', summary: 'Job descriptions, screening criteria, interview scorecards, offer letters', sampleTasks: ['Inclusive job description template', 'Interview scorecard design', 'Candidate screening criteria matrix', 'Offer letter template with key clauses'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cw-performance', name: 'Performance Reviews & Feedback', summary: '360 review frameworks, goal setting (OKR), constructive feedback scripts', sampleTasks: ['360 feedback review template', 'OKR goal setting framework', 'Constructive feedback conversation script', 'Performance improvement plan outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cw-onboard', name: 'Onboarding & Training Programs', summary: 'New hire checklists, training curriculum, buddy programs, 30-60-90 plans', sampleTasks: ['30-60-90 day onboarding plan', 'Training curriculum design brief', 'New hire orientation checklist', 'Mentorship program framework'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'cw-policy', name: 'Workplace Policy & Employee Relations', summary: 'Remote work policies, code of conduct, grievance procedures, D&I initiatives', sampleTasks: ['Remote work policy template', 'Code of conduct framework', 'Grievance procedure outline', 'Diversity and inclusion program brief'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'operations_supplychain',
    name: 'Operations, manufacturing and supply chain',
    group: 'Economy & work',
    summary: 'Standard Operating Procedures (SOP), inventory safety stock, supplier scorecards, logistics, lean manufacturing and procurement.',
    coverageState: 'starter_ready',
    aliases: ['operations', 'supply chain', 'sop', 'logistics', 'inventory', 'manufacturing', 'warehouse', 'procurement', 'purchasing', 'vendor', 'supplier', 'quality control', 'lean', 'six sigma', 'kaizen', '5S', 'production planning', 'MRP', 'ERP', 'shipping', 'freight', 'distribution', 'fleet management', 'import', 'export', 'customs', 'factory', 'assembly line', 'packaging'],
    iconName: 'Truck',
    subdisciplines: [
      { id: 'os-sop', name: 'SOPs & Process Engineering', summary: 'Step-by-step procedures, failure point isolation, quality gates, documentation', sampleTasks: ['Warehouse fulfillment SOP with quality check points', 'Safety stock calculation model brief', 'Process improvement documentation', 'Standard work instruction template'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'os-logistics', name: 'Warehouse & Logistics Operations', summary: 'Warehouse layout, picking strategies, shipping optimization, WMS setup', sampleTasks: ['Warehouse layout optimization brief', 'Order picking strategy comparison', 'Last-mile delivery optimization plan', 'Shipping cost analysis framework'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'os-procurement', name: 'Procurement & Vendor Management', summary: 'RFP/RFQ process, supplier evaluation, contract negotiation, spend analysis', sampleTasks: ['RFP template and evaluation criteria', 'Supplier scorecard design', 'Procurement cost savings analysis', 'Vendor onboarding checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'os-lean', name: 'Lean Manufacturing & Six Sigma', summary: 'Value stream mapping, 5S audits, DMAIC projects, waste elimination', sampleTasks: ['Value stream map creation guide', '5S workplace audit checklist', 'DMAIC project charter template', 'Root cause analysis (5 Why) facilitator guide'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'os-production', name: 'Production Planning & Scheduling', summary: 'MRP/ERP, capacity planning, batch scheduling, OEE tracking', sampleTasks: ['Production schedule template', 'Capacity planning calculation brief', 'OEE improvement action plan', 'Batch scheduling optimization guide'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'skilled_trades',
    name: 'Skilled trades, repair and vocational skills',
    group: 'Economy & work',
    summary: 'Plumbing schematics, carpentry joinery, electrical rough-in checklists, welding, auto repair, HVAC diagnosis and painting.',
    coverageState: 'explainer_ready',
    aliases: ['trades', 'carpentry', 'plumbing', 'electrical trade', 'hvac repair', 'welding', 'auto repair', 'mechanic', 'handyman', 'renovation', 'remodeling', 'painting', 'tiling', 'flooring', 'roofing', 'masonry', 'landscaping', 'locksmith', 'appliance repair', 'woodworking', 'cabinet making', 'drywall', 'insulation', 'plumber', 'electrician', 'carpenter', 'welder', 'technician'],
    iconName: 'Wrench',
    subdisciplines: [
      { id: 'st-carp', name: 'Carpentry & Joinery Planning', summary: 'Cut lists, lumber grain orientation, structural fasteners, finish carpentry', sampleTasks: ['Cabinetry cut list & joinery specification', 'Deck ledger board fastener schedule', 'Built-in bookshelf design brief', 'Trim installation measurement checklist'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'st-plumb', name: 'Plumbing Systems & Repair', summary: 'Pipe sizing, fixture rough-in, drainage, water heater, leak diagnosis', sampleTasks: ['Bathroom plumbing rough-in checklist', 'Water heater selection comparison', 'Leak diagnosis troubleshooting guide', 'Pipe material selection matrix'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'st-elec', name: 'Electrical Trade Work', summary: 'Residential wiring, panel upgrades, outlet/switch placement, code compliance', sampleTasks: ['Residential wiring plan checklist', 'Electrical panel upgrade assessment', 'Outlet and switch placement guide', 'Electrical code compliance review brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'st-weld', name: 'Welding & Metalwork', summary: 'MIG/TIG/Stick selection, joint preparation, welding procedure specifications', sampleTasks: ['Welding process selection guide', 'Joint preparation checklist', 'Welding defect identification brief', 'Welding procedure specification template'], coverageState: 'taxonomy_seed', workflowsCount: 0 },
      { id: 'st-auto', name: 'Auto Repair & Vehicle Maintenance', summary: 'Diagnostic troubleshooting, maintenance schedules, brake/suspension, fluid systems', sampleTasks: ['Vehicle maintenance schedule template', 'Brake inspection checklist', 'Engine diagnostic troubleshooting guide', 'Fluid system inspection checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'st-landscape', name: 'Landscaping & Outdoor Work', summary: 'Garden design, irrigation, hardscaping, lawn care, tree management', sampleTasks: ['Garden layout design brief', 'Irrigation system planning guide', 'Lawn care seasonal schedule', 'Hardscape material selection matrix'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'realestate_housing',
    name: 'Real estate, housing and home',
    group: 'Economy & work',
    summary: 'Property valuation (Cap Rate), lease clause reviews, property management, development, home inspection and real estate photography.',
    coverageState: 'starter_ready',
    aliases: ['real estate', 'property', 'mortgage', 'cap rate', 'lease', 'home buying', 'property management', 'tenant', 'landlord', 'rental', 'rent', 'apartment', 'house', 'commercial property', 'property development', 'construction development', 'home inspection', 'home staging', 'real estate agent', 'broker', 'property valuation', 'appraisal', 'zoning', 'building permit', 'HOA', 'condo', 'land', 'plot'],
    iconName: 'Home',
    subdisciplines: [
      { id: 'rh-invest', name: 'Real Estate Analysis & Due Diligence', summary: 'Cap rates, NOI, cash-on-cash, tenant screening criteria, market analysis', sampleTasks: ['Multifamily rental property investment pro-forma', 'Homebuyer pre-inspection checklist', 'Market comparable analysis brief', 'Due diligence document checklist'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'rh-manage', name: 'Property Management & Tenants', summary: 'Tenant communication, maintenance coordination, rent collection, complaint handling', sampleTasks: ['Tenant complaint response protocol', 'Property maintenance schedule', 'Rent collection procedure outline', 'Tenant screening criteria checklist', 'Lease renewal negotiation brief'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'rh-develop', name: 'Property Development & Construction', summary: 'Feasibility studies, zoning analysis, project timelines, contractor management', sampleTasks: ['Development feasibility analysis brief', 'Zoning and permit checklist', 'Construction project timeline template', 'Contractor selection evaluation matrix'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rh-commercial', name: 'Commercial Real Estate & Leasing', summary: 'Office/retail/industrial leasing, NNN leases, tenant improvements, REIT analysis', sampleTasks: ['Commercial lease comparison matrix', 'Tenant improvement negotiation brief', 'Office space requirement analysis', 'Retail site selection criteria'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rh-home', name: 'Home Buying, Selling & Staging', summary: 'Purchase process, home staging, open house preparation, negotiation', sampleTasks: ['Home buying process checklist', 'Home staging checklist by room', 'Offer negotiation strategy brief', 'Home selling preparation timeline'], coverageState: 'starter_ready', workflowsCount: 1 }
    ]
  },

  {
    id: 'hospitality_tourism',
    name: 'Hospitality, Hotel Management, Tourism and Event Operations',
    group: 'Economy & work',
    summary: 'Hotel revenue management (RevPAR), guest experience SOPs, food and beverage cost control, event/conference logistics, and destination tourism.',
    coverageState: 'starter_ready',
    aliases: ["hospitality","hotel","tourism","events","resort","event planning","revpar","hotel management","guest experience","food and beverage","banquet","travel industry","concierge","front desk","catering","mice"],
    iconName: 'Hotel',
    subdisciplines: [
      {
        id: 'hos-revenue',
        name: 'Hotel Revenue Management & RevPAR Optimization',
        summary: 'Dynamic yield pricing algorithms, OTA channel commission management, demand compression forecasting',
        sampleTasks: ["Hotel RevPAR, ADR, and occupancy rate dynamic pricing forecast model","Online Travel Agency (OTA) commission cost vs direct booking incentive audit","Group block room displacement analysis for high-demand event dates","Length-of-Stay (LOS) restriction rules during holiday compression periods"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'hos-operations',
        name: 'Front Office & Housekeeping Operations SOPs',
        summary: 'Check-in cycle time reduction, room inspection quality audits, guest escalation resolution scripts',
        sampleTasks: ["Front desk guest check-in SOP and PMS keycard issuance workflow","Housekeeping 15-minute room turnover inspection checklist with scoring keys","Guest complaint de-escalation framework with service recovery authorization limits","VIP guest welcome protocol and bespoke amenities staging standard"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'hos-fb',
        name: 'Food & Beverage (F&B) Cost Engineering',
        summary: 'Plate cost yield calculations, beverage markup tiering, banquet kitchen prep scheduling',
        sampleTasks: ["Restaurant menu engineering matrix: Stars, Plowhorses, Puzzles, and Dogs","Recipe cost card with portion yield factor and target 28% food cost margin","Banquet beverage bar package pricing and per-guest consumption estimate","Commercial kitchen prep schedule and HACCP food holding temperature log"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'hos-events',
        name: 'Conference, Banquet & Event Logistics',
        summary: 'BEO Banquet Event Order authoring, audiovisual run-of-show schedules, VIP seating floorplans',
        sampleTasks: ["Banquet Event Order (BEO) authoring for 500-guest corporate gala dinner","Audiovisual run-of-show timeline with presenter cues and lighting changes","Conference breakout room floorplan with ADA aisle widths and fire exit buffers","Vendor load-in/load-out freight elevator schedule for trade show convention"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'hos-tourism',
        name: 'Destination Tourism Strategy & Ecotourism',
        summary: 'Visitor carrying capacity modeling, tourism economic multiplier calculations, heritage trail design',
        sampleTasks: ["National park environmental carrying capacity and trail quota model","Destination Marketing Organization (DMO) regional campaign ROI plan","Ecotourism sustainable lodge certification audit (Global Sustainable Tourism Council)","Cultural heritage walking tour interpretive signage and audio guide script"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'global_trade_logistics',
    name: 'Global Trade, Customs, Freight and Supply Chain Logistics',
    group: 'Economy & work',
    summary: 'Incoterms 2020 rules, customs brokerage, Harmonized Tariff System (HTS), ocean/air freight operations, and cold-chain distribution.',
    coverageState: 'starter_ready',
    aliases: ["global trade","logistics","customs","freight","shipping","incoterms","tariffs","supply chain","cargo","container","customs broker","bill of lading","hts code","import export","warehouse","freight forwarding","cold chain"],
    iconName: 'Truck',
    subdisciplines: [
      {
        id: 'trd-incoterms',
        name: 'Incoterms 2020 & International Sales Contracts',
        summary: 'FOB vs CIF vs DDP liability transfer points, freight risk allocation, marine insurance claims',
        sampleTasks: ["Incoterms 2020 clause selection trade-off memo (FOB vs CIF vs DDP)","International commercial sales contract risk allocation and force majeure clause","Marine cargo insurance Institute Cargo Clauses (A) claim documentation","Commercial invoice and packing list alignment audit for Letter of Credit (LC)"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'trd-customs',
        name: 'Customs Brokerage, HTS Codes & Compliance',
        summary: 'Harmonized Tariff Schedule classification, Rules of Origin duty drawbacks, anti-dumping audits',
        sampleTasks: ["Harmonized Tariff Schedule (HTS) 10-digit code classification rationale","Free Trade Agreement (USMCA/EU) Rules of Origin regional value content test","Customs valuation deductive value calculation for imported components","Anti-Dumping and Countervailing Duty (AD/CVD) exposure assessment"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'trd-ocean',
        name: 'Ocean Container Freight & Port Drayage',
        summary: 'Twenty-foot equivalent TEU stowage plans, demurrage and detention minimization, ocean Bill of Lading verification',
        sampleTasks: ["40ft high-cube ocean container cubic volume and payload weight stowage plan","Port demurrage and container yard detention cost mitigation protocol","Ocean Bill of Lading (Clean on Board) discrepancy verification checklist","Intermodal drayage rail-to-truck transfer scheduling and empty container return plan"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'trd-air',
        name: 'Air Cargo Logistics & Dangerous Goods (IATA)',
        summary: 'Volumetric charge weight calculations, IATA dangerous goods DGR labeling, air waybill AWB execution',
        sampleTasks: ["Air cargo chargeable volumetric weight calculation (1:6000 ratio)","IATA Dangerous Goods Regulations (DGR) lithium battery packaging compliance","Master Air Waybill (MAWB) and House Air Waybill (HAWB) consolidation manifest","Charter freighter payload-range payload limitation study for oversize cargo"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'trd-coldchain',
        name: 'Cold Chain Logistics & Pharma Distribution',
        summary: 'Temperature datalogger validation GDP, refrigerated reefer container monitoring, dry-ice replenishments',
        sampleTasks: ["Good Distribution Practice (GDP) 2-8°C pharmaceutical cold chain audit","Passive insulated shipper thermal qualification pack-out standard (ISTA 7D)","Reefer container set-point and automated temperature datalogger deviation SOP","Dry-ice sublimation rate calculation for international air biological shipment"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'trd-multiechelon',
        name: 'Multi-Echelon Inventory & Supply Network Optimization',
        summary: 'Safety stock under lead-time variance, cross-docking hub design, supplier disruption war-gaming',
        sampleTasks: ["Multi-echelon safety stock calculation under stochastic supplier lead times","Cross-docking distribution center inbound/outbound door assignment plan","Dual-sourcing supplier disruption resilience simulation and inventory buffer policy","Total Landed Cost (TLC) comparative model for nearshoring vs offshore manufacturing"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROUP 5: SOCIETY, LAW & CULTURE (11 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'law_governance',
    name: 'Law, governance and public policy',
    group: 'Society, law & culture',
    summary: 'Contract clause breakdown, regulatory compliance, employment law info, IP basics, questions for legal counsel. Not legal advice.',
    coverageState: 'starter_ready',
    aliases: ['law', 'legal', 'contracts', 'compliance', 'regulations', 'governance', 'employment law', 'intellectual property', 'patent', 'trademark', 'copyright', 'tax law', 'criminal law', 'civil law', 'immigration', 'corporate law', 'litigation', 'arbitration', 'mediation', 'NDA', 'terms of service', 'privacy policy', 'GDPR', 'data protection', 'regulatory'],
    iconName: 'Scale',
    subdisciplines: [
      { id: 'lg-contract', name: 'Contract Review & Issue Spotting', summary: 'Indemnity clauses, limitation of liability, termination provisions', sampleTasks: ['Software NDA clause risk identification matrix', 'Questions to ask legal counsel regarding SaaS terms', 'Contract clause comparison checklist', 'Termination provision analysis brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'lg-compliance', name: 'Policy & Regulatory Tracking', summary: 'Statutory changes, jurisdiction-specific compliance checklists', sampleTasks: ['State privacy regulation compliance inventory', 'Corporate whistleblower policy framework', 'Regulatory change impact assessment', 'Compliance calendar template'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'lg-employment', name: 'Employment Law Information', summary: 'Workplace rights, termination, discrimination, health/safety, leave entitlements', sampleTasks: ['Employment termination checklist (not advice)', 'Workplace policy compliance review brief', 'Leave entitlement comparison by jurisdiction', 'Employee handbook review checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'lg-ip', name: 'Intellectual Property Basics', summary: 'Patent/trademark/copyright fundamentals, trade secrets, licensing concepts', sampleTasks: ['IP protection strategy overview', 'Trademark search preparation checklist', 'Copyright registration information guide', 'Licensing agreement clause checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'lg-public', name: 'Public Policy & Government', summary: 'Policy analysis, public administration, regulatory impact, civic engagement', sampleTasks: ['Policy impact analysis framework', 'Public consultation response template', 'Regulatory impact assessment outline', 'Civic engagement action plan'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'education_exams',
    name: 'Education, teaching and exam preparation',
    group: 'Society, law & culture',
    summary: 'Active recall flashcards, diagnostic quizzes, Socratic tutoring, curriculum design, lesson plans and assessment rubrics.',
    coverageState: 'published_workflow',
    aliases: ['education', 'exam', 'quiz', 'study', 'tutor', 'teacher', 'lesson plan', 'revision', 'school', 'university', 'college', 'curriculum', 'syllabus', 'assessment', 'rubric', 'homework', 'assignment', 'flashcard', 'online learning', 'e-learning', 'training', 'workshop', 'seminar', 'lecture', 'student', 'professor', 'K-12', 'higher education', 'special education', 'homeschool'],
    iconName: 'GraduationCap',
    subdisciplines: [
      { id: 'ee-tutor', name: 'Socratic Tutor & Active Recall', summary: 'Misconception probing, step-by-step diagnostic questioning, flashcards', sampleTasks: ['Active recall diagnostic exam prep tutor', 'Feynman technique concept explainer with analogies', 'Spaced repetition flashcard creation', 'Misconception identification quiz'], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'ee-lesson', name: 'Lesson Planning & Rubrics', summary: 'Bloom taxonomy objectives, formative assessments, grading rubrics', sampleTasks: ['Secondary STEM inquiry-based lesson plan', 'Analytical writing rubric with criteria tiers', 'Project-based learning unit design', 'Differentiated instruction plan'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'ee-curriculum', name: 'Curriculum Design & Standards', summary: 'Scope and sequence, learning objectives, backward design, standards alignment', sampleTasks: ['Curriculum scope and sequence outline', 'Backward design unit plan', 'Standards alignment mapping', 'Course learning outcomes specification'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ee-special', name: 'Special Education & Accessibility', summary: 'IEP goals, accommodations, assistive technology, universal design for learning', sampleTasks: ['IEP goal writing guide', 'Classroom accommodation checklist', 'Universal design for learning framework', 'Assistive technology selection guide'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'ee-online', name: 'Online Teaching & E-Learning', summary: 'Course structure, engagement strategies, LMS setup, video lessons, assessment', sampleTasks: ['Online course module structure', 'Student engagement strategy for remote class', 'LMS course setup checklist', 'Video lesson scripting template'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'languages_writing',
    name: 'Languages, writing and translation',
    group: 'Society, law & culture',
    summary: 'Tone transposition, manuscript critique, creative writing, technical writing, localization, journalism and speech writing.',
    coverageState: 'starter_ready',
    aliases: ['writing', 'translation', 'languages', 'editing', 'grammar', 'copyediting', 'creative writing', 'fiction', 'novel', 'screenplay', 'script', 'blog', 'article', 'content writing', 'technical writing', 'documentation', 'journalism', 'speech writing', 'proofreading', 'localization', 'language learning', 'ESL', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Hindi', 'Arabic', 'translation services', 'subtitles'],
    iconName: 'Languages',
    subdisciplines: [
      { id: 'lw-tone', name: 'Style & Tone Adaptation', summary: 'Formal executive to conversational, active voice conversion, brand voice', sampleTasks: ['Executive summary tone translation prompt', 'Fiction dialogue naturalness critique', 'Brand voice guidelines document', 'Casual to formal rewrite brief'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'lw-creative', name: 'Creative Writing & Fiction', summary: 'Plot structure, character development, dialogue, world-building, poetry', sampleTasks: ['Novel chapter outline with story beats', 'Character development worksheet', 'Dialogue naturalness review', 'World-building consistency checklist'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'lw-technical', name: 'Technical Writing & Documentation', summary: 'API docs, user manuals, knowledge bases, release notes, SOPs', sampleTasks: ['API documentation template', 'User manual structure and style guide', 'Knowledge base article template', 'Release notes writing guide'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'lw-journalism', name: 'Journalism & Reporting', summary: 'News writing, investigative reporting, fact-checking, editorial opinion', sampleTasks: ['News article structure brief', 'Investigative story outline', 'Fact-checking protocol checklist', 'Interview preparation for journalist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'lw-speech', name: 'Speech Writing & Presentations', summary: 'Keynotes, toasts, eulogies, TED-style talks, debate preparation', sampleTasks: ['Keynote speech storytelling outline', 'Wedding toast writing guide', 'TED-style talk structure brief', 'Debate preparation framework'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'lw-translate', name: 'Translation & Localization', summary: 'Cultural adaptation, terminology management, localization testing, style guides', sampleTasks: ['Translation brief with cultural context', 'Localization testing checklist', 'Terminology glossary template', 'Multilingual content strategy brief'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'arts_design_media',
    name: 'Arts, design, media and entertainment',
    group: 'Society, law & culture',
    summary: 'Editorial photography, image editing, video production, music, UI/UX design, interior design, animation and illustration.',
    coverageState: 'published_workflow',
    aliases: ['photography', 'image creation', 'photo editing', 'graphic design', 'filmmaking', 'lighting', 'video production', 'music', 'audio', 'animation', 'motion graphics', 'UI design', 'UX design', 'interior design', 'fashion', 'illustration', 'drawing', 'painting', 'sculpture', 'architecture design', 'typography', 'branding', 'logo', 'poster', 'magazine', 'film', 'cinema', 'podcast', 'streaming', 'YouTube', 'TikTok', 'Photoshop', 'Figma', 'Blender'],
    iconName: 'Camera',
    subdisciplines: [
      { id: 'adm-photo', name: 'Photography & Camera Planning', summary: 'Aperture, lighting setups, focal lengths, composition, real-camera vs AI render', sampleTasks: ['Commercial product photography shot list & lighting brief', 'Editorial portrait lighting and lens setup', 'Event photography planning checklist', 'Food photography styling guide'], coverageState: 'published_workflow', workflowsCount: 4 },
      { id: 'adm-edit', name: 'Reference-Preserving Image Edit', summary: 'Explicit change list vs preserve list, face/product preservation, background swap', sampleTasks: ['Product background replacement with preserved branding', 'Editorial wardrobe color grade & relight', 'Portrait retouching brief with preservation notes', 'Batch editing consistency checklist'], coverageState: 'published_workflow', workflowsCount: 3 },
      { id: 'adm-brand', name: 'Visual Identity & Design Systems', summary: 'Color harmony, typographic hierarchy, responsive layout rules, logo design', sampleTasks: ['Accessible design system color palette generator', 'Brand guidelines voice and visual direction', 'Logo design brief with specifications', 'Typography system selection guide'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'adm-video', name: 'Video Production & Filmmaking', summary: 'Shot lists, storyboards, editing workflow, color grading, sound design', sampleTasks: ['Video production shot list template', 'Storyboard creation guide', 'Video editing workflow checklist', 'Documentary interview preparation brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'adm-music', name: 'Music Production & Audio', summary: 'Composition, mixing, mastering, sound design, podcast production', sampleTasks: ['Podcast production workflow checklist', 'Music arrangement brief by genre', 'Audio mixing reference guide', 'Sound design specification template'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'adm-uiux', name: 'UI/UX & Product Design', summary: 'User research, wireframes, prototyping, usability testing, design handoff', sampleTasks: ['User research plan template', 'Wireframe specification brief', 'Usability test protocol design', 'Design-to-development handoff checklist'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'adm-interior', name: 'Interior Design & Architecture Viz', summary: 'Space planning, material selection, lighting design, rendering briefs', sampleTasks: ['Room layout and space planning brief', 'Interior material and finish selection', 'Lighting design mood specification', 'Architectural visualization rendering brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'adm-animation', name: 'Animation & Motion Graphics', summary: '2D/3D animation, character animation, motion design, VFX concepts', sampleTasks: ['Motion graphics project brief', 'Character animation specification', 'Explainer video storyboard template', 'Visual effects breakdown checklist'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'religion_philosophy',
    name: 'Religion, philosophy and belief systems',
    group: 'Society, law & culture',
    summary: 'Comparative theological concepts, hermeneutics, historical contextualization, meditation and professional ethics.',
    coverageState: 'explainer_ready',
    aliases: ['philosophy', 'religion', 'theology', 'comparative religion', 'spirituality', 'meditation', 'ethics', 'moral philosophy', 'faith', 'scripture', 'religious studies', 'interfaith', 'mysticism', 'existentialism', 'stoicism', 'buddhism', 'christianity', 'islam', 'hinduism', 'judaism'],
    iconName: 'Compass',
    subdisciplines: [
      { id: 'rp-comp', name: 'Comparative Religion & Textual Studies', summary: 'Historical scripture context, translation variations, theological concepts', sampleTasks: ['Comparative concept explainer across traditions', 'Historical hermeneutic context outline', 'Sacred text translation comparison', 'Theological term glossary creation'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rp-ethics', name: 'Professional & Applied Ethics', summary: 'Ethics in technology, business ethics, bioethics, environmental ethics', sampleTasks: ['AI ethics case study analysis', 'Business ethics dilemma framework', 'Bioethics decision framework', 'Environmental ethics argument outline'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'rp-spiritual', name: 'Spiritual Practices & Contemplation', summary: 'Meditation techniques, mindfulness practices, philosophical contemplation', sampleTasks: ['Meditation practice guide by tradition', 'Stoic daily practice routine', 'Contemplative journaling prompts', 'Philosophical inquiry discussion guide'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'sports_games',
    name: 'Sports, games and recreation',
    group: 'Society, law & culture',
    summary: 'Tactical sports playbooks, coaching plans, fitness programming, game design, board games and esports strategy.',
    coverageState: 'starter_ready',
    aliases: ['sports', 'gaming', 'rpg', 'game design', 'chess', 'coaching', 'team sports', 'football', 'soccer', 'basketball', 'cricket', 'tennis', 'golf', 'swimming', 'athletics', 'martial arts', 'esports', 'video games', 'board games', 'card games', 'puzzles', 'outdoor recreation', 'hiking', 'camping', 'fishing', 'fantasy sports', 'betting', 'tournament'],
    iconName: 'Trophy',
    subdisciplines: [
      { id: 'sg-rpg', name: 'Game Systems & RPG Design', summary: 'Stat curve balance, encounter difficulty, dice probability, economy design', sampleTasks: ['Tabletop RPG boss encounter balance sheet', 'Game currency sink/faucet economic model', 'Game mechanic prototype specification', 'Board game rule clarity review'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'sg-coaching', name: 'Team Coaching & Strategy', summary: 'Training plans, tactical analysis, team management, season planning', sampleTasks: ['Season training periodization plan', 'Match tactical analysis framework', 'Team selection criteria matrix', 'Youth development pathway design'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'sg-individual', name: 'Individual Sport Training', summary: 'Technique analysis, competition preparation, mental performance, equipment', sampleTasks: ['Competition preparation timeline', 'Technique improvement drill sequence', 'Mental performance routine design', 'Equipment selection guide by sport'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'sg-outdoor', name: 'Outdoor Recreation & Adventure', summary: 'Hiking planning, camping, climbing, water sports, safety protocols', sampleTasks: ['Multi-day hiking trip planning checklist', 'Camping gear and meal planning guide', 'Adventure activity risk assessment', 'Outdoor navigation and safety brief'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },
  {
    id: 'travel_places',
    name: 'Travel, places and cultures',
    group: 'Society, law & culture',
    summary: 'Logistics itinerary optimization, cultural etiquette, transit planning, visa logistics, expat living and business travel.',
    coverageState: 'starter_ready',
    aliases: ['travel', 'itinerary', 'tourism', 'cultural etiquette', 'transit', 'vacation', 'holiday', 'trip planning', 'flight', 'hotel', 'booking', 'visa', 'passport', 'immigration', 'expat', 'business travel', 'backpacking', 'adventure travel', 'cruise', 'road trip', 'city guide', 'cultural immersion', 'heritage', 'tour guide', 'travel budget'],
    iconName: 'Compass',
    subdisciplines: [
      { id: 'tp-itin', name: 'Logistics & Travel Planning', summary: 'Geographic clustering, transit connections, pacing schedules, budgeting', sampleTasks: ['Multi-city transit-optimized travel itinerary', 'Cultural business etiquette briefing', 'Travel budget planning spreadsheet setup', 'Day-by-day trip itinerary template'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'tp-visa', name: 'Visa, Immigration & Documents', summary: 'Visa requirement research, document checklists, application preparation', sampleTasks: ['Visa application document checklist', 'Immigration timeline planning guide', 'Travel document organization checklist', 'Work permit requirement research brief'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'tp-business', name: 'Business Travel & Expat Living', summary: 'Corporate travel policy, relocation planning, cost of living, cultural adjustment', sampleTasks: ['Business travel expense policy template', 'Relocation planning checklist', 'Cost of living comparison framework', 'Cultural adjustment guide for expats'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'tp-culture', name: 'Cultural Immersion & Heritage', summary: 'Local customs, food culture, heritage sites, responsible tourism', sampleTasks: ['Cultural etiquette guide by country', 'Heritage site visit planning brief', 'Responsible tourism checklist', 'Local food culture exploration guide'], coverageState: 'taxonomy_seed', workflowsCount: 0 }
    ]
  },

  {
    id: 'architecture_urban',
    name: 'Architecture, Urban Planning and Built Heritage',
    group: 'Society, law & culture',
    summary: 'Architectural design briefs, urban zoning masterplans, high-performance building envelopes, landscape ecology, and LEED/BREEAM green building.',
    coverageState: 'starter_ready',
    aliases: ["architecture","architect","urban planning","zoning","masterplan","building envelope","facade","interior architecture","landscape design","leed","breeam","historic preservation","floor plan","concept design","cad","revit","schematic design"],
    iconName: 'Landmark',
    subdisciplines: [
      {
        id: 'arch-schematic',
        name: 'Architectural Design Briefs & Space Programming',
        summary: 'Functional adjacency matrices, net-to-gross area programming, client vision translation',
        sampleTasks: ["Mixed-use commercial/residential architectural program & adjacency matrix","Schematic concept narrative translating client brand into spatial form","Circulation efficiency and egress corridor capacity calculation","Daylight study massing orientation comparison report"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'arch-urban',
        name: 'Urban Planning, Zoning & Transit-Oriented Design',
        summary: 'Floor Area Ratio FAR optimization, set-back zoning bylaws, complete streets pedestrian flows',
        sampleTasks: ["Floor Area Ratio (FAR) and height setback zoning entitlement study","Transit-Oriented Development (TOD) 10-minute pedestrian walkshed audit","Urban microclimate wind canyon and solar access shadow analysis","Form-based code architectural design guidelines for civic streetscapes"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'arch-envelope',
        name: 'Building Envelope & Facade Engineering',
        summary: 'Thermal bridging WUFI moisture analysis, double-glazed curtain wall U-factors, solar shading louvers',
        sampleTasks: ["Curtain wall unitized glazing thermal U-factor & condensation risk check","WUFI hygrothermal moisture accumulation simulation across wall assembly","Rainscreen facade pressure-equalized cavity ventilation design","Parametric solar shading louver angle optimization for summer sun cutoff"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'arch-sustainable',
        name: 'LEED, BREEAM & Net-Zero Architecture',
        summary: 'Daylighting autonomy simulation, embodied carbon lifecycle assessment LCA, passive solar orientation',
        sampleTasks: ["LEED v4.1 BD+C scorecard gap analysis and credit documentation plan","Whole-building embodied carbon Life Cycle Assessment (LCA) reduction study","Spatial Daylight Autonomy (sDA) and Annual Sunlight Exposure (ASE) model","Passive House (Passivhaus) envelope airtightness 0.6 ACH50 detailing review"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'arch-interior',
        name: 'Interior Architecture & Ergonomic Planning',
        summary: 'Commercial workplace wayfinding, acoustic ceiling baffles, lighting fixture Lux schedules',
        sampleTasks: ["Activity-based workplace interior layout with quiet focus and collaboration zones","Acoustic Reverberation Time (RT60) ceiling baffle sizing for open offices","Artificial lighting Lux schedule compliant with EN 12464-1 workspace standards","Universal design and ADA accessibility clearance verification for public restrooms"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'arch-heritage',
        name: 'Historic Preservation & Adaptive Reuse',
        summary: 'Secretary of Interior preservation standards, masonry stabilization, historic fabric documentation',
        sampleTasks: ["Secretary of the Interior Standards for Rehabilitation compliance report","Historic unreinforced brick masonry repointing and mortar analysis specification","Adaptive reuse structural load conversion memo for 19th-century warehouse","Historic American Buildings Survey (HABS) architectural documentation guide"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'film_video_production',
    name: 'Film, Cinematography, Video Production and YouTube',
    group: 'Society, law & culture',
    summary: 'Screenwriting, scene breakdowns, cinematography lighting, video editing, ACES color grading, YouTube audience retention, and broadcast delivery.',
    coverageState: 'starter_ready',
    aliases: ["film","video production","filmmaking","cinematography","youtube","screenplay","camera","lighting","editing","color grading","davinci resolve","premiere pro","director","shot list","storyboard","broadcast","streaming","audio post"],
    iconName: 'Video',
    subdisciplines: [
      {
        id: 'flm-screenplay',
        name: 'Screenwriting & Production Scene Breakdown',
        summary: 'Three-act narrative structure, dialogue subtext, script breakdown sheets, line-item scheduling',
        sampleTasks: ["Feature film three-act narrative beat sheet with midpoint reversal","Script breakdown sheet cataloging cast, stunts, props, and special FX","Dialogue subtext polish transforming expository lines into tension","Scene slugline and pacing timeline for 10-minute short drama"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'flm-cinematography',
        name: 'Cinematography, Lenses & Lighting Design',
        summary: 'Three-point lighting ratios, anamorphic lens focal lengths, camera movement blocking, false color exposure',
        sampleTasks: ["High-contrast dramatic lighting diagram (key, fill, backlight, practicals)","Anamorphic lens focal length and depth-of-field shot list design","False color exposure mapping for skin-toneIRE consistency across setups","Camera movement blocking (dolly, Steadicam, gimbal) for continuous take"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'flm-editing',
        name: 'Video Editing & Post-Production Workflow',
        summary: 'J-cut/L-cut narrative pacing, multi-cam synchronization, proxy workflows, EDL/XML conform',
        sampleTasks: ["Documentary dialogue editing rhythm with J-cut and L-cut transitions","4K RAW proxy workflow setup for Premiere Pro / DaVinci Resolve","Multi-camera concert shoot synchronization and angle cutting pacing","Post-production turnover guide for sound design, VFX, and color conform"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'flm-color',
        name: 'Color Grading & Color Science (ACES/DaVinci)',
        summary: 'Log-to-Rec.709 transforms, skin-tone vector tracking, LUT generation, HDR10 mastering',
        sampleTasks: ["ACEScc color management pipeline setup from ARRI/RED RAW to P3-D65","Skin-tone line vectorscope calibration and qualifier isolation node tree","Split-toning contrast curve look creation for neo-noir thriller aesthetic","HDR10 1000-nit PQ mastering with MaxFALL/MaxCLL metadata generation"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'flm-youtube',
        name: 'YouTube Strategy, Packaging & Audience Retention',
        summary: 'First 30-second retention hooks, CTR thumbnail/title A/B matrix, viewer re-engagement pacing',
        sampleTasks: ["First 30-second retention hook script eliminating viewer drop-off","High-CTR YouTube thumbnail visual hierarchy and title pairing matrix","Mid-roll viewer re-engagement pacing markers for 15-minute video essay","YouTube Analytics retention dip diagnosis and editorial pacing fixes"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'flm-delivery',
        name: 'Broadcast Delivery & Video Standards (SMPTE/Netflix)',
        summary: 'Audio loudness EBU R128 compliance, ProRes 4444 delivery specs, IMF packaging',
        sampleTasks: ["Netflix delivery specification compliance audit for 4K UHD Master","EBU R128 / ATSC A/85 audio loudness normalization (-24 LKFS/LUFS)","Interoperable Master Format (IMF) package metadata verification","Closed-captioning SCC/SRT synchronization and readability standards review"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'music_audio_production',
    name: 'Music Production, Sound Engineering and Acoustics',
    group: 'Society, law & culture',
    summary: 'DAW music production, vocal production, mixing engineering, LUFS audio mastering, synthesizer sound design, and acoustic room treatment.',
    coverageState: 'starter_ready',
    aliases: ["music production","sound engineering","audio engineering","mixing","mastering","daw","ableton","logic pro","pro tools","acoustics","sound design","synthesizer","microphones","vocal recording","lufs","eq","compression","studio"],
    iconName: 'Music',
    subdisciplines: [
      {
        id: 'mus-daw',
        name: 'DAW Songwriting & Beat Architecture',
        summary: 'Chord progression voice leading, MIDI drum humanization, arrangement tension and release curves',
        sampleTasks: ["Neo-soul 7th/9th chord progression MIDI voice leading blueprint","Drum groove velocity humanization and pocket swing timing adjustment","Pop track arrangement tension and release energy automation map","Layered analog/digital bass patch harmonization without phase cancellation"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mus-vocal',
        name: 'Vocal Tracking, Comping & Tuning',
        summary: 'Microphone polar pattern selection, vocal chain preamp/compressor, subtle formant pitch correction',
        sampleTasks: ["Vocal tracking chain setup: mic choice, 1073 preamp, 1176 fast peak taming","Multi-take lead vocal comping selection rubric for emotional delivery","Melodyne surgical pitch and formant adjustment preserving natural vibrato","Sibilance de-essing and harsh resonance dynamic notch EQ chain"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mus-mixing',
        name: 'Mixing Engineering & Stems Delivery',
        summary: 'Frequency carving dynamic EQ, sidechain compression, stereo spatial imaging, gain staging',
        sampleTasks: ["Kick and sub-bass low-end frequency carving and sidechain routing","Lead vocal spatial depth chain: stereo plate, slap delay, widening chorus","Mix bus compression glue setup (SSL G-Comp 2-bus settings)","Broadcast and streaming multi-track stems delivery naming convention and zero-crossing check"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mus-mastering',
        name: 'Audio Mastering & Loudness Standards (LUFS)',
        summary: 'Limiter ceiling settings, true-peak inter-sample clipping prevention, Spotify/Apple Music loudness target',
        sampleTasks: ["Mastering limiter ceiling and true-peak inter-sample clip prevention (-1.0 dBTP)","Integrated -14 LUFS (streaming) vs -9 LUFS (club) loudness targeting memo","Mid-Side (M/S) EQ low-end mono-maker and high-shelf air boost","Dither bit-depth reduction (24-bit to 16-bit TPDF) audio export checklist"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mus-sounddesign',
        name: 'Synthesizer Sound Design & Foley',
        summary: 'Subtractive/wavetable synthesis modulation routings, ADSR envelope shaping, cinematic impact foley',
        sampleTasks: ["Serum/Vital wavetable synth patch: custom oscillator morphing & LFO routings","Punchy 808 sub-bass pitch drop envelope shaping and harmonic saturation","Cinematic trailer braam impact layer design combining brass and distorted sub","Foley footsteps and cloth pass recording and sync replacement guide"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'mus-acoustics',
        name: 'Studio Acoustics & Room Mode Treatment',
        summary: 'Bass trap reverberation RT60 targets, standing wave modal flutter echo, reflection-free zone design',
        sampleTasks: ["Room dimension axial, tangential, and oblique standing wave mode calculation","Bass trap porous absorber depth and air cavity thickness optimization","Reflection-Free Zone (RFZ) acoustic panel mirror-point placement diagram","Room impulse response RT60 reverberation decay measurement and targeted EQ curve"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },
  {
    id: 'journalism_media',
    name: 'Journalism, Mass Communication and Crisis PR',
    group: 'Society, law & culture',
    summary: 'Investigative reporting, AP Style news writing, press releases, broadcast scripts, crisis communications, and media ethics/libel law.',
    coverageState: 'starter_ready',
    aliases: ["journalism","news","press release","public relations","pr","media","communications","investigative reporting","ap style","broadcast news","crisis pr","fact checking","interviewing","editor","journalist","libel","media law"],
    iconName: 'Newspaper',
    subdisciplines: [
      {
        id: 'jrn-investigative',
        name: 'Investigative Reporting & Document Analysis',
        summary: 'Freedom of information FOIA requests, offshore registry paper trails, whistleblower source protection',
        sampleTasks: ["Federal Freedom of Information Act (FOIA) targeted record request letter","Corporate registry and beneficial ownership paper-trail tracing methodology","Whistleblower encrypted communication and digital security protocol","Investigative reporting timeline reconstruction from conflicting depositions"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'jrn-apstyle',
        name: 'News Writing & AP Style Headline Crafting',
        summary: 'Inverted pyramid narrative structure, verified attribution rules, punchy SEO-friendly headlines',
        sampleTasks: ["Breaking news story in inverted pyramid style following latest AP Stylebook","High-impact news headline crafting with secondary SEO meta-headline","Attribution and direct quotation ethical verification guidelines","Feature profile story opening narrative lead with sensory scene setting"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'jrn-pressrelease',
        name: 'Press Release Drafting & Media Pitching',
        summary: 'Newsworthy embargoed press releases, media kit one-pagers, targeted journalist outreach pitches',
        sampleTasks: ["Standard commercial product launch embargoed press release with boilerplate","Personalized email pitch to tier-one tech journalists avoiding spam buzzwords","Media advisory one-pager for press conference with photogenic photo-op angles","Executive quote polishing for corporate quarterly earnings announcement"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'jrn-crisis',
        name: 'Crisis Communication & Reputation Defense',
        summary: 'First-hour response holding statements, stakeholder impact matrices, executive media apology briefs',
        sampleTasks: ["First-hour response holding statement for cybersecurity data breach","Crisis communication stakeholder message matrix (employees, press, regulators)","Executive on-camera media training response sheet with pivot phrases","Post-crisis reputational repair roadmap and trust-building timeline"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'jrn-broadcast',
        name: 'Broadcast & Podcast Scripting',
        summary: 'Writing for the ear, teleprompter phonetic scripts, interview question flow with timed bridges',
        sampleTasks: ["Broadcast television news voice-over (VO/SOT) script with anchor cues","Investigative narrative podcast episode cold-open script with audio cues","Long-form podcast interview prep sheet with progressive challenge questions","Radio soundbite transcription and 30-second news package edit guide"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      },
      {
        id: 'jrn-ethics',
        name: 'Media Law, Ethics & Fact-Checking Protocols',
        summary: 'Defamation/libel risk avoidance, fair use copyright compliance, two-source corroboration standards',
        sampleTasks: ["Pre-publication libel and defamation legal risk evaluation memo","Fair use doctrine 4-factor analysis for documentary archival footage use","Two-source verification standard checklist for anonymous allegations","Society of Professional Journalists (SPJ) Code of Ethics compliance audit"],
        coverageState: 'starter_ready',
        workflowsCount: 3
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════════
  // GROUP 6: PERSONAL LIFE & SITUATIONS (3 domains)
  // ═══════════════════════════════════════════════════════════════
  {
    id: 'family_relationships',
    name: 'Family, relationships and life stages',
    group: 'Personal life & situations',
    summary: 'Family schedules, eldercare logistics, parenting communication, event planning, pet care and life transitions.',
    coverageState: 'starter_ready',
    aliases: ['family', 'parenting', 'eldercare', 'communication', 'relationships', 'wedding', 'baby', 'children', 'teenager', 'marriage', 'divorce', 'adoption', 'pets', 'event planning', 'birthday', 'celebration', 'grief', 'loss', 'aging parents', 'childcare', 'school', 'college applications', 'empty nest', 'blended family'],
    iconName: 'HeartHandshake',
    subdisciplines: [
      { id: 'fr-comm', name: 'Family Communication & Boundaries', summary: 'Constructive conflict scripts, difficult conversations, household chore schedules', sampleTasks: ['Constructive boundary conversation script', 'Shared family responsibility checklist', 'Difficult conversation preparation guide', 'Family meeting agenda template'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'fr-events', name: 'Events, Weddings & Celebrations', summary: 'Event planning checklists, budget tracking, vendor coordination, timelines', sampleTasks: ['Wedding planning master checklist', 'Event budget tracker template', 'Birthday party planning guide', 'Vendor comparison and selection matrix'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'fr-parenting', name: 'Parenting & Child Development', summary: 'Age-appropriate activities, school selection, homework help strategies, safety', sampleTasks: ['Age-appropriate activity planner', 'School selection comparison criteria', 'Homework routine establishment guide', 'Child screen time management plan'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fr-elder', name: 'Eldercare & Aging Support', summary: 'Care coordination, medical appointment management, living arrangement options', sampleTasks: ['Eldercare coordination checklist', 'Medical appointment tracking system', 'Aging parent conversation guide', 'Care facility evaluation criteria'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'fr-pet', name: 'Pet Ownership & Care', summary: 'Pet adoption, training schedules, health tracking, travel with pets', sampleTasks: ['New pet adoption preparation checklist', 'Pet training schedule template', 'Pet health tracking log design', 'Traveling with pets planning guide'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'home_daily_living',
    name: 'Home, money and daily living',
    group: 'Personal life & situations',
    summary: 'Seasonal home maintenance, zero-based personal budgets, pantry meal planning, home renovation, organization and insurance.',
    coverageState: 'starter_ready',
    aliases: ['home', 'budget', 'personal finance', 'maintenance', 'meal planning', 'home renovation', 'DIY', 'declutter', 'organize', 'cleaning', 'moving', 'relocation', 'home office', 'garden', 'yard', 'insurance', 'bills', 'utilities', 'grocery', 'household', 'apartment living', 'home improvement', 'storage', 'laundry', 'cooking at home'],
    iconName: 'Home',
    subdisciplines: [
      { id: 'hd-budget', name: 'Personal Cash Flow & Maintenance', summary: 'Zero-based budgeting, debt avalanche comparison, HVAC seasonal upkeep', sampleTasks: ['Zero-based monthly cash flow budget template', 'Annual home preventative maintenance schedule', 'Bill payment automation checklist', 'Emergency fund calculation plan'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'hd-renovation', name: 'Home Renovation & DIY Projects', summary: 'Project planning, contractor hiring, permit requirements, cost estimation', sampleTasks: ['Home renovation project planning checklist', 'Contractor selection and interview guide', 'Room remodel budget estimation template', 'DIY project safety checklist'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'hd-organize', name: 'Decluttering & Home Organization', summary: 'KonMari method, storage solutions, digital decluttering, moving preparation', sampleTasks: ['Room-by-room decluttering plan', 'Moving preparation checklist and timeline', 'Home office organization guide', 'Digital decluttering and backup plan'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'hd-garden', name: 'Garden, Yard & Outdoor Spaces', summary: 'Seasonal planting, lawn care, container gardening, composting, pest control', sampleTasks: ['Seasonal planting calendar by zone', 'Container garden design brief', 'Lawn care annual schedule', 'Composting setup guide for beginners'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'hd-insurance', name: 'Insurance & Household Admin', summary: 'Insurance comparison, claim documentation, paperwork organization, utilities', sampleTasks: ['Home insurance comparison checklist', 'Insurance claim documentation guide', 'Household paperwork filing system', 'Utility cost reduction analysis'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  },
  {
    id: 'personal_growth',
    name: 'Personal growth and communication',
    group: 'Personal life & situations',
    summary: 'Active listening, public speaking, decision matrix frameworks, goal setting, time management, journaling and networking.',
    coverageState: 'starter_ready',
    aliases: ['habits', 'productivity', 'public speaking', 'decision making', 'communication', 'goal setting', 'time management', 'journaling', 'networking', 'self-improvement', 'motivation', 'confidence', 'leadership', 'emotional intelligence', 'social skills', 'career change', 'retirement planning', 'life planning', 'mindset', 'personal development', 'side hustle', 'freelancing', 'work-life balance'],
    iconName: 'Sparkle',
    subdisciplines: [
      { id: 'pg-decision', name: 'Decision Frameworks & Speaking', summary: 'Weighted decision matrix, 5-minute keynote structure, habit tracking', sampleTasks: ['Weighted multi-criteria career decision matrix', 'Keynote speech storytelling outline', 'Decision journal template', 'Pro/con analysis framework'], coverageState: 'starter_ready', workflowsCount: 2 },
      { id: 'pg-goals', name: 'Goal Setting & Time Management', summary: 'SMART goals, quarterly reviews, time blocking, priority systems', sampleTasks: ['SMART goal setting worksheet', 'Quarterly personal review template', 'Time blocking schedule design', 'Eisenhower matrix prioritization exercise'], coverageState: 'starter_ready', workflowsCount: 1 },
      { id: 'pg-journal', name: 'Journaling & Self-Reflection', summary: 'Morning pages, gratitude journals, reflection prompts, habit tracking', sampleTasks: ['Structured daily journal template', 'Gratitude journaling practice guide', 'Weekly reflection prompt set', 'Habit tracker design and review template'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'pg-network', name: 'Networking & Social Skills', summary: 'Conversation starters, professional networking, introvert strategies, follow-up', sampleTasks: ['Networking event preparation guide', 'Follow-up message templates by context', 'Introvert networking strategy brief', 'Professional relationship maintenance plan'], coverageState: 'explainer_ready', workflowsCount: 1 },
      { id: 'pg-career', name: 'Career Transitions & Side Projects', summary: 'Career change planning, side hustle validation, freelancing, portfolio building', sampleTasks: ['Career change planning roadmap', 'Side project validation checklist', 'Freelance business setup guide', 'Portfolio building strategy brief'], coverageState: 'explainer_ready', workflowsCount: 1 }
    ]
  }
];
