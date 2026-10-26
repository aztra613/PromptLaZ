const fs = require('fs');

const newDomainsByGroup = {
  'Technology & engineering': [
    {
      id: 'aerospace_aviation',
      name: 'Aerospace and Aeronautical Engineering',
      group: 'Technology & engineering',
      summary: 'Aerodynamics, avionics, flight mechanics, propulsion systems, FAA/EASA airworthiness standards, and orbital mechanics.',
      coverageState: 'starter_ready',
      aliases: ['aerospace', 'aviation', 'aeronautics', 'avionics', 'aircraft', 'propulsion', 'rocket', 'aerodynamics', 'cfd', 'flight control', 'flight dynamics', 'orbital mechanics', 'satellite', 'airworthiness', 'faa part 25', 'easa', 'boeing', 'airbus', 'nasa', 'turbofan', 'wind tunnel'],
      iconName: 'Plane',
      subdisciplines: [
        { id: 'aero-aerodynamics', name: 'Aerodynamics & Wing CFD Analysis', summary: 'Transonic flow, boundary layer transition, lift-to-drag optimization, high-lift devices, NACA airfoils', sampleTasks: ['Transonic wing sweep & Mach tuck analysis', 'High-lift flap slot aerodynamic optimization', 'Boundary layer separation CFD grid refinement', 'Supersonic wave drag reduction memo'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'aero-avionics', name: 'Avionics & Fly-by-Wire Flight Control', summary: 'DO-178C / DO-254 compliance, triple-redundant flight control laws, ARINC 429/664 bus architecture, TCAS/ADS-B', sampleTasks: ['DO-178C Level A flight software safety verification', 'Triple-modular redundant actuator voting logic design', 'ARINC 429 bus latency & bandwidth budget', 'TCAS II collision avoidance maneuver logic brief'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'aero-propulsion', name: 'Propulsion, Gas Turbines & Jet Engines', summary: 'Bypass ratio optimization, turbofan thermodynamic cycle, combustor emissions, thrust specific fuel consumption', sampleTasks: ['High-bypass turbofan Brayton cycle design calculation', 'Turbine blade film-cooling heat transfer analysis', 'Combustor NOx emissions reduction trade study', 'Compressor surge margin & stall flutter check'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'aero-spacecraft', name: 'Spacecraft Systems & Orbital Mechanics', summary: 'Delta-v budgets, Hohmann transfer orbits, cubesat power/thermal sizing, attitude determination & control ADCS', sampleTasks: ['Low Earth Orbit to Geostationary Hohmann transfer delta-v budget', '3U CubeSat solar array power & battery sizing', 'Reaction wheel desaturation torque & momentum dump calc', 'Thermal vacuum chamber bakeout test matrix'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'aero-cert', name: 'FAA & EASA Airworthiness Certification', summary: 'FAA 14 CFR Part 23/25, structural damage tolerance, bird strike testing, flight test campaign matrices', sampleTasks: ['14 CFR Part 25.571 structural fatigue damage tolerance plan', 'Bird strike leading-edge compliance documentation', 'Flight flutter test envelope expansion protocol', 'Minimum Equipment List (MEL) dispatch relief audit'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'aero-uav', name: 'UAV, Drone & eVTOL Urban Air Mobility', summary: 'VTOL transition dynamics, battery-electric powertrain sizing, autonomous sense-and-avoid, BVLOS FAA Part 107/108', sampleTasks: ['Lift+cruise eVTOL transition tilt-rotor thrust analysis', 'Lithium battery pack thermal runaway safety barrier', 'Beyond Visual Line of Sight (BVLOS) risk assessment SORA', 'Optical & acoustic sense-and-avoid sensor fusion spec'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'defense_military',
      name: 'Defense, Military Strategy and Geopolitics',
      group: 'Technology & engineering',
      summary: 'Defense acquisition, tactical doctrine, military logistics, ballistics, intelligence analysis, and ITAR/MIL-STD compliance.',
      coverageState: 'starter_ready',
      aliases: ['defense', 'military', 'geopolitics', 'army', 'navy', 'air force', 'weapons', 'ballistics', 'tactics', 'doctrine', 'itar', 'dod', 'nato', 'pentagon', 'rfp', 'procurement', 'radar', 'electronic warfare', 'intelligence', 'osint', 'c4isr'],
      iconName: 'Shield',
      subdisciplines: [
        { id: 'def-procurement', name: 'Defense Acquisition & Government RFP Analysis', summary: 'DoD 5000 series, FAR/DFARS compliance, fixed-price vs cost-plus defense contracts, capability gap analysis', sampleTasks: ['FAR/DFARS compliant Statement of Work (SOW) review', 'Life-cycle cost estimate for major defense acquisition program', 'Earned Value Management (EVM) variance analysis for prime contract', 'Past performance evaluation matrix for defense bid'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'def-tactical', name: 'Tactical Doctrine & Operational Planning', summary: 'Military Decision-Making Process MDMP, joint operations planning, counter-UAS defensive bubbles, mission command', sampleTasks: ['Military Decision-Making Process (MDMP) course of action analysis', 'Air-ground integration tactical air control party brief', 'Counter-UAS layered perimeter defense architecture', 'Combat search and rescue (CSAR) operational risk matrix'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'def-ballistics', name: 'Ballistics, Guidance & Precision Strike', summary: 'Internal/external ballistics trajectory modeling, radar/optical terminal seekers, inertial navigation GPS-denied', sampleTasks: ['6-DOF external ballistics trajectory calculation with Coriolis effect', 'Semi-active laser seeker terminal guidance error budget', 'INS/optical flow navigation integration for GPS-denied strike', 'Warhead fragmentation lethal radius & CEP statistical estimate'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'def-logistics', name: 'Military Logistics & Expeditionary Sustainment', summary: 'Operational supply chain, ammunition prepositioning, battlefield medical evacuation MEDEVAC, MIL-STD-129', sampleTasks: ['Forward Operating Base (FOB) 30-day class I-IX supply burn rate model', 'Strategic sealift ammunition load plan & port throughput audit', 'Tactical casualty evacuation (CASEVAC) timeline optimization', 'MIL-STD-129 military shipping label and RFID tagging protocol'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'def-intel', name: 'Geopolitics, OSINT & Threat Intelligence', summary: 'Geopolitical war-gaming, open-source intelligence OSINT satellite verification, adversary order-of-battle', sampleTasks: ['Taiwan Strait naval blockade scenario war-game memo', 'Commercial satellite imagery synthetic aperture radar (SAR) runway analysis', 'Adversary integrated air defense system (IADS) node mapping', 'Critical infrastructure geopolitical chokepoint threat audit'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'def-c4isr', name: 'Electronic Warfare, Radar & C4ISR', summary: 'AESA radar cross-section RCS reduction, frequency jamming countermeasures, encrypted datalinks Link 16', sampleTasks: ['Active Electronically Scanned Array (AESA) radar budget & range calc', 'DRFM radar jammer burn-through distance calculation', 'Link 16 tactical datalink network time slot allocation', 'Radar Cross Section (RCS) physical optics edge diffraction review'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'marine_maritime',
      name: 'Maritime, Marine Engineering and Naval Architecture',
      group: 'Technology & engineering',
      summary: 'Naval architecture, ship hydrodynamics, marine propulsion, offshore wind/oil structures, and IMO SOLAS/MARPOL compliance.',
      coverageState: 'starter_ready',
      aliases: ['marine', 'maritime', 'naval architecture', 'shipbuilding', 'ship', 'vessel', 'cargo', 'tanker', 'container ship', 'propulsion', 'offshore', 'hydrodynamics', 'imo', 'solas', 'marpol', 'dredging', 'port engineering', 'drydock', 'harbor'],
      iconName: 'Anchor',
      subdisciplines: [
        { id: 'mar-navalarch', name: 'Naval Architecture & Hydrodynamics', summary: 'Hull lines optimization, metacentric height GM stability calculations, wave resistance, sea-keeping tests', sampleTasks: ['Intact and damage stability calculation under IMO 2008 IS Code', 'Bulbous bow wave resistance CFD optimization', 'Container ship parametric roll resonance damping evaluation', 'Cross-curves of stability and GZ curve generation'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mar-propulsion', name: 'Marine Propulsion & Auxiliary Machinery', summary: 'Low-speed two-stroke diesel, LNG dual-fuel, shaft alignment, ballast water management systems BWMS', sampleTasks: ['Shaft line whirling and torsional vibration analysis (TVC)', 'LNG fuel gas supply system (FGSS) boil-off gas balance', 'Ballast water treatment system (BWTS) USCG/IMO type approval review', 'Controllable pitch propeller (CPP) blade cavitation check'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mar-offshore', name: 'Offshore Structures & Floating Wind', summary: 'Semi-submersible platforms, jacket piles, mooring line catenary analysis, DNV-GL offshore standards', sampleTasks: ['15MW floating offshore wind turbine semi-submersible mooring design', 'Offshore jacket platform wave slamming fatigue analysis (DNV-RP-C203)', 'Dynamic positioning DP2 capability plot and thruster sizing', 'Subsea umbilical, riser, and flowline (SURF) catenary tension audit'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mar-imo', name: 'IMO Regulations, SOLAS & MARPOL Compliance', summary: 'Energy Efficiency Existing Ship Index EEXI, Carbon Intensity Indicator CII, fire safety codes', sampleTasks: ['Ship Energy Efficiency Management Plan (SEEMP Part III) CII reduction trajectory', 'MARPOL Annex VI NOx Tier III SCR catalyst operational protocol', 'SOLAS Chapter II-2 structural fire protection division class A-60 audit', 'Polar Code operations manual and ice-class structural scantling check'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mar-port', name: 'Port Terminal & Harbor Engineering', summary: 'Berth occupancy simulation, quay crane dredging depth, breakwater wave diffraction, bollard pull design', sampleTasks: ['Post-Panamax container terminal berth throughput and queueing model', 'Rubble-mound breakwater armor stone stability (Hudson & Van der Meer formula)', 'Quay wall tied-back sheet pile retaining calculation', 'Harbor turning basin diameter and navigation channel dredging spec'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'mining_minerals',
      name: 'Mining, Metallurgy and Mineral Extraction',
      group: 'Technology & engineering',
      summary: 'Mine planning, rock mechanics, mineral processing, extractive metallurgy, tailings dams, and JORC / NI 43-101 mineral resource audits.',
      coverageState: 'starter_ready',
      aliases: ['mining', 'minerals', 'ore', 'metallurgy', 'geology', 'drilling', 'blasting', 'open pit', 'underground mining', 'tailings', 'jorc', 'ni 43-101', 'beneficiation', 'smelting', 'flotation', 'crushing', 'gold', 'copper', 'lithium', 'rare earth'],
      iconName: 'Pickaxe',
      subdisciplines: [
        { id: 'min-planning', name: 'Open-Pit & Underground Mine Planning', summary: 'Pit limit optimization Lerchs-Grossmann, cut-off grade strategy, block model kriging, haul truck dispatch', sampleTasks: ['Lerchs-Grossmann nested pit shell optimization & pushback design', 'Sublevel stoping underground stope stability empirical Mathews method', 'Block model ordinary kriging grade estimation & variogram validation', 'Haul road rolling resistance & truck fleet cycle time optimization'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'min-drilling', name: 'Drilling & Blast Engineering', summary: 'Burden and spacing calculation, powder factor optimization, blast vibration PPV control, electronic detonator delays', sampleTasks: ['Production bench blast pattern burden, spacing & sub-drill calculation', 'Peak Particle Velocity (PPV) ground vibration attenuation model', 'Electronic detonator millisecond inter-hole timing design for fragmentation', 'Presplit buffer blast design for open pit wall damage control'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'min-processing', name: 'Mineral Processing & Beneficiation', summary: 'Comminution circuit design SAG/ball mills, froth flotation kinetics, hydrocyclone classification, leach pads', sampleTasks: ['Bond Work Index comminution power calculation for SAG/ball mill circuit', 'Copper-molybdenum differential froth flotation circuit mass balance', 'Hydrocyclone cut-size d50 and circulating load optimization', 'Gold heap leaching cyanide percolation rate & recovery curve model'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'min-metallurgy', name: 'Extractive Metallurgy & Refining', summary: 'Pyrometallurgy smelting mass balance, hydrometallurgy solvent extraction SX-EW, cyanide recovery', sampleTasks: ['Flash furnace copper smelting enthalpy and oxygen enrichment balance', 'Solvent Extraction and Electrowinning (SX-EW) copper cathode purity design', 'Lithium spodumene roasting, acid leaching & precipitation mass balance', 'Refractory gold ore pressure oxidation (POX) autoclave kinetic review'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'min-tailings', name: 'Tailings Dam Engineering & Environmental Safety', summary: 'GISTM global tailings standards, upstream/downstream embankment stability, acid mine drainage mitigation', sampleTasks: ['Global Industry Standard on Tailings Management (GISTM) compliance audit', 'Tailings embankment liquefaction flow failure trigger analysis', 'Acid Rock Drainage (ARD) acid-base accounting and lime neutralization plan', 'Dry-stack filtered tailings geotechnical dewatering facility design'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'min-reserve', name: 'JORC & NI 43-101 Mineral Reserve Audits', summary: 'Qualified Person QP technical reports, QA/QC assay validation, measured/indicated/inferred resource classification', sampleTasks: ['NI 43-101 compliant technical report Chapter 14 mineral resource estimate', 'QA/QC duplicate, blank, and certified reference standard assay validation', 'Drill hole composite spacing and resource classification boundary logic', 'Cut-off grade calculation incorporating metallurgical recovery and smelter deductions'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'energy_nuclear',
      name: 'Energy, Nuclear and Power Utilities',
      group: 'Technology & engineering',
      summary: 'Nuclear reactor engineering, power transmission grids, battery energy storage (BESS), utility solar/wind, and NERC/FERC compliance.',
      coverageState: 'starter_ready',
      aliases: ['energy', 'nuclear', 'power grid', 'utilities', 'electricity', 'substation', 'transmission', 'distribution', 'solar', 'wind', 'bess', 'battery storage', 'reactor', 'smr', 'ferc', 'nerc', 'ieee 1547', 'load flow', 'transformer', 'scada', 'utility'],
      iconName: 'Zap',
      subdisciplines: [
        { id: 'nuc-reactors', name: 'Nuclear Reactor Physics & Plant Safety', summary: 'Neutron kinetics, Pressurized Water Reactor PWR thermal-hydraulics, SMR designs, IAEA safety fundamentals', sampleTasks: ['PWR six-factor formula core reactivity & xenon poisoning calculation', 'Small Modular Reactor (SMR) passive decay heat removal natural circulation model', 'Loss of Coolant Accident (LOCA) peak cladding temperature (PCT) safety limit check', 'Nuclear fuel rod burnup & spent fuel pool criticality analysis'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'ene-grid', name: 'Power Grid Transmission & Load Flow', summary: 'AC/DC power flow, Newton-Raphson load studies, transient stability analysis, IEEE 39-bus modeling', sampleTasks: ['Newton-Raphson AC power flow and voltage collapse bifurcation check', 'Transient rotor angle stability simulation under 3-phase fault', 'High-Voltage Direct Current (HVDC) converter station active/reactive power control', 'Transmission line thermal ampacity dynamic rating calculation (IEEE 738)'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'ene-substation', name: 'High-Voltage Substation & Relay Protection', summary: 'Distance relay zones, differential transformer protection IEEE C37.91, breaker-and-a-half topology', sampleTasks: ['Line distance protection mho relay zone 1/2/3 reach and coordination', 'Power transformer current transformer (CT) saturation & differential restraint curve', 'Gas-Insulated Switchgear (GIS) substation insulation coordination (IEC 60071)', 'Substation grounding grid mesh and step/touch voltage calculation (IEEE 80)'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'ene-storage', name: 'Battery Energy Storage Systems (BESS)', summary: 'Utility-scale megawatt-hour sizing, lithium iron phosphate LFP thermal runaway suppression, capacity degradation', sampleTasks: ['100MW/400MWh utility BESS duration sizing & revenue stacking model', 'NFPA 855 and UL 9540A thermal runaway propagation barrier analysis', 'Battery cell degradation cycling model (DoD, C-rate, calendar aging)', 'BESS inverter virtual synchronous machine (VSM) grid-forming control spec'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'ene-renewables', name: 'Utility Solar & Wind Farm Design', summary: 'Solar PV single-axis tracker layout, wake loss modeling for wind arrays, curtailment and interconnect studies', sampleTasks: ['200MW solar PV DC/AC inverter loading ratio (ILR) optimization', 'Wind turbine array Jensen wake deficit and wake-loss efficiency model', 'Point of Interconnection (POI) IEEE 1547 ride-through compliance review', 'Battery-plus-solar co-located hybrid plant capacity factor calculation'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'ene-regulatory', name: 'FERC, NERC & Grid Code Compliance', summary: 'NERC CIP cybersecurity standards, interconnection study queue (PJM/CAISO/ERCOT), ancillary service market bidding', sampleTasks: ['NERC CIP-005/007 electronic security perimeter audit memo', 'FERC Order 2023 cluster interconnection study risk mitigation plan', 'Frequency regulation ancillary service day-ahead market bidding strategy', 'Distribution system hosting capacity analysis for distributed solar'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'telecom_wireless',
      name: 'Telecommunications, 5G/6G and RF Infrastructure',
      group: 'Technology & engineering',
      summary: '5G/6G cellular radio access networks, optical fiber DWDM, satellite constellations, RF antenna design, and 3GPP/ITU standards.',
      coverageState: 'starter_ready',
      aliases: ['telecom', 'telecommunications', '5g', '6g', 'rf', 'wireless', 'cellular', 'ran', 'fiber optic', 'dwdm', 'satellite', 'antenna', 'microwave', 'spectrum', '3gpp', 'itu', 'fcc', 'base station', 'mimo', 'link budget', 'broadband'],
      iconName: 'Radio',
      subdisciplines: [
        { id: 'tel-ran', name: '5G/6G Cellular & Radio Access Network (RAN)', summary: 'Massive MIMO beamforming, Open RAN architecture, gNodeB link budgets, 3GPP Release 17/18 specs', sampleTasks: ['5G NR mid-band (3.5 GHz) link budget & cell coverage radius calculation', 'Massive MIMO 64T64R digital beamforming spectral efficiency model', 'O-RAN split 7.2x fronthaul bandwidth & eCPRI latency budget', 'User Equipment (UE) handover hysteresis & ping-pong mitigation config'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'tel-optical', name: 'Optical Fiber & DWDM Transmission', summary: 'Dense Wavelength Division Multiplexing, dispersion compensation, optical amplifier EDFA cascade, OTDR testing', sampleTasks: ['100-channel 400G DWDM optical link OSNR and chromatic dispersion budget', 'Erbium-Doped Fiber Amplifier (EDFA) gain ripple & noise figure cascade', 'Optical Time-Domain Reflectometer (OTDR) fiber fault trace interpretation', 'Passive Optical Network (GPON/XGS-PON) split ratio optical power budget'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'tel-satellite', name: 'Satellite Communications & Space Link Budgets', summary: 'LEO constellation gateway design, Ku/Ka-band Doppler shift correction, earth station antenna tracking', sampleTasks: ['LEO satellite ground terminal Ka-band uplink/downlink link budget (C/N0)', 'Rain attenuation prediction (ITU-R P.618) for satellite gateway design', 'Phase-steered flat panel phased-array antenna tracking algorithm', 'Inter-satellite optical laser cross-link pointing error budget'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'tel-rf', name: 'RF Antenna & Microwave Engineering', summary: 'Microstrip patch antenna arrays, VSWR and S-parameter optimization, Smith chart impedance matching', sampleTasks: ['Microstrip patch antenna design with resonant frequency & return loss optimization', 'Smith chart quarter-wave stub impedance matching network design', 'Cavity bandpass filter insertion loss and out-of-band rejection synthesis', 'Microwave point-to-point line-of-sight Fresnel zone clearance analysis'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'tel-spectrum', name: 'Spectrum Allocation & FCC/ITU Regulatory', summary: 'Frequency interference coordination, spectral mask compliance, private CBRS LTE/5G network licensing', sampleTasks: ['FCC Part 96 Citizens Broadband Radio Service (CBRS) SAS coordination review', 'Adjacent-channel interference ratio (ACIR) co-existence study', 'ITU World Radiocommunication Conference (WRC) frequency band allocation memo', 'Specific Absorption Rate (SAR) human RF exposure compliance report'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'game_simulation',
      name: 'Game Development, Interactive 3D and Virtual Simulation',
      group: 'Technology & engineering',
      summary: 'Unreal Engine 5, Unity C#, 3D real-time rendering, gameplay mechanics, level architecture, physics simulations, and multiplayer netcode.',
      coverageState: 'starter_ready',
      aliases: ['game dev', 'game development', 'unreal engine', 'unity', '3d graphics', 'shaders', 'gameplay', 'game design', 'gdd', 'level design', 'physics engine', 'multiplayer', 'netcode', 'xr', 'vr', 'metaverse', 'rendering', 'steam', 'playstation', 'godot'],
      iconName: 'Gamepad2',
      subdisciplines: [
        { id: 'gam-unreal', name: 'Unreal Engine 5 & Blueprints Architecture', summary: 'Nanite geometry streaming, Lumen global illumination, gameplay ability system GAS, Niagara VFX', sampleTasks: ['Gameplay Ability System (GAS) attribute set and gameplay effect pipeline', 'Nanite virtualized geometry performance profiling & draw call budget', 'Lumen dynamic global illumination bounce lighting optimization', 'Mass Entity ECS crowd simulation and movement pathfinding architecture'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'gam-unity', name: 'Unity & C# Systems Programming', summary: 'Data-Oriented Technology Stack DOTS, Job System and Burst Compiler, Addressables memory management', sampleTasks: ['Unity DOTS Entities 1.0 component system & chunk iteration performance', 'C# Job System multithreaded procedural mesh generation script', 'Addressables asset bundle dependency tracking and memory unloading plan', 'Custom render pipeline (URP) pass for stylized toon outlines'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'gam-shaders', name: '3D Shaders & Real-Time Rendering', summary: 'HLSL/GLSL compute shaders, ray tracing acceleration structures, PBR materials, post-processing pipelines', sampleTasks: ['HLSL ray marching volumetric cloud rendering compute shader', 'PBR metallic-roughness material energy conservation verification', 'Screen-Space Ambient Occlusion (SSAO) depth/normal buffer pass', 'Mesh LOD cross-fade dither shader implementation'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'gam-design', name: 'Game Design Documents (GDD) & Mechanics', summary: 'Core gameplay loops, combat balance math, progression economics, difficulty curves', sampleTasks: ['Complete Game Design Document (GDD) core loop & retention milestones', 'Action RPG combat damage scaling formula & armor mitigation math', 'In-game soft/hard currency sink-and-source economic equilibrium sheet', 'Player onboarding tutorial design with non-intrusive environmental teaching'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'gam-level', name: 'Level Design & Environmental Storytelling', summary: 'Greybox spatial prototyping, sightline pacing, environmental landmarking, modular kit architecture', sampleTasks: ['Multiplayer competitive arena 3-lane sightline & cover distribution audit', 'Single-player linear mission spatial beat chart & combat arena pacing', 'Modular architectural kit snapping grid and texture budget layout', 'Environmental storytelling vignette placement for narrative discovery'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'gam-netcode', name: 'Multiplayer Netcode & Server Architecture', summary: 'Client-side prediction and server reconciliation, tick-rate optimization, UDP packet compression', sampleTasks: ['Client-side prediction and server reconciliation algorithm for fast shooter', 'Lag compensation history buffer and rewind hit registration audit', 'UDP delta packet compression and bit-packing serializer protocol', 'Dedicated game server autoscaling and matchmaking latency orchestration'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    }
  ],

  'Health, food & living things': [
    {
      id: 'biotech_pharma',
      name: 'Biotechnology, Pharmaceuticals and Clinical Trials',
      group: 'Health, food & living things',
      summary: 'Drug discovery, bioprocessing, FDA IND/NDA submissions, Phase I–IV clinical trial protocols, cGMP cleanrooms, and pharmacovigilance.',
      coverageState: 'starter_ready',
      aliases: ['biotech', 'biotechnology', 'pharmaceuticals', 'pharma', 'drug discovery', 'clinical trials', 'fda', 'ind', 'nda', 'cgmp', 'bioreactor', 'antibodies', 'mrna', 'pharmacovigilance', 'ich gcp', 'formulation', 'pharmacokinetics', 'pkpd'],
      iconName: 'Pill',
      subdisciplines: [
        { id: 'bio-discovery', name: 'Drug Discovery & Medicinal Chemistry', summary: 'Structure-activity relationship SAR, target affinity IC50 screening, lead molecule ADME profiling', sampleTasks: ['Small-molecule structure-activity relationship (SAR) lead optimization memo', 'High-throughput screening (HTS) assay Z-factor quality validation', 'In vitro ADME microsomal stability and cytochrome P450 inhibition review', 'Lipinski rule of five oral bioavailability chemical property filter'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'bio-bioprocess', name: 'Bioprocess Fermentation & Downstream Purification', summary: 'CHO cell culture bioreactor scale-up, chromatography resin purification, viral filtration', sampleTasks: ['2000L fed-batch CHO cell monoclonal antibody bioreactor scale-up model', 'Protein A affinity chromatography loading capacity and elution optimization', 'Tangential flow filtration (TFF) ultrafiltration flux rate calculation', 'Viral clearance validation and log-reduction value (LRV) protocol'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'bio-regulatory', name: 'FDA Regulatory Strategy (IND, NDA & BLA)', summary: '21 CFR Part 312/314, Common Technical Document CTD Module 2-5, Breakthrough Therapy Designation', sampleTasks: ['Investigational New Drug (IND) Module 2.4 nonclinical summary outline', 'FDA Type B pre-IND meeting briefing package and question strategy', 'Breakthrough Therapy / Fast Track designation justification dossier', '21 CFR 314 NDA chemistry, manufacturing, and controls (CMC) audit'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'bio-trials', name: 'Clinical Trial Protocols (Phase I–IV)', summary: 'Sample size statistical powering, inclusion/exclusion criteria, ICH GCP E6(R2) compliance, endpoint selection', sampleTasks: ['Phase II randomized double-blind trial sample size power calculation', 'ICH GCP E6(R2) compliant Clinical Study Protocol (CSP) drafting', 'Adaptive dose-escalation 3+3 vs CRM design evaluation memo', 'Data Safety Monitoring Board (DSMB) charter and stopping boundary rules'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'bio-cgmp', name: 'cGMP Cleanroom Validation & Manufacturing', summary: 'Cleanroom ISO 14644 classification, automated aseptic filling, Cleaning Validation CIP/SIP, batch records', sampleTasks: ['Cleanroom Grade A/B HVAC airflow velocity & particulate validation plan', 'Automated aseptic vial filling media fill qualification protocol', 'CIP/SIP cleaning validation residual swab limit calculation (0.1% dose / 10 ppm)', 'Master Batch Production Record (MBR) review for commercial release'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'bio-pharmacovigilance', name: 'Pharmacovigilance & Post-Market Surveillance', summary: 'MedDRA adverse event coding, Periodic Safety Update Reports PSUR, Risk Evaluation and Mitigation REMS', sampleTasks: ['Individual Case Safety Report (ICSR) MedDRA coding and causality assessment', 'Periodic Benefit-Risk Evaluation Report (PBRER/PSUR) safety signal review', 'FDA Risk Evaluation and Mitigation Strategy (REMS) program design', 'Disproportionality analysis (PRR / ROR) for spontaneous reporting databases'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'psychology_behavioral',
      name: 'Psychology, Behavioral Science and Mental Health',
      group: 'Health, food & living things',
      summary: 'Clinical psychopathology (DSM-5-TR / ICD-11), evidence-based therapies (CBT, DBT), neuropsychology, psychometrics, and organizational behavior.',
      coverageState: 'starter_ready',
      aliases: ['psychology', 'mental health', 'psychiatry', 'cbt', 'therapy', 'behavioral science', 'dsm-5', 'icd-11', 'neuropsychology', 'psychometrics', 'counseling', 'cognitive psychology', 'depression', 'anxiety', 'adhd', 'ptsd', 'trauma', 'emotional intelligence'],
      iconName: 'Brain',
      subdisciplines: [
        { id: 'psy-clinical', name: 'Clinical Assessment & Diagnostics (DSM-5 / ICD-11)', summary: 'Differential diagnosis criteria, psychiatric intake history, suicide risk stratification', sampleTasks: ['DSM-5-TR differential diagnosis between Major Depression and Bipolar II', 'Structured clinical interview intake questionnaire for adult ADHD', 'Columbia-Suicide Severity Rating Scale (C-SSRS) risk triage protocol', 'PTSD trauma symptom severity and comorbidity assessment synthesis'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'psy-cbt', name: 'Cognitive Behavioral & Evidence-Based Therapies', summary: 'CBT thought restructuring records, exposure therapy hierarchies, DBT emotion regulation skills', sampleTasks: ['CBT cognitive distortion thought record template and reframing guide', 'Graded exposure therapy hierarchy for panic disorder and agoraphobia', 'DBT distress tolerance TIPP skills patient psychoeducation handout', 'Behavioral activation weekly schedule for unipolar major depressive episode'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'psy-neuro', name: 'Neuropsychology & Cognitive Profiling', summary: 'Executive function battery interpretation, memory deficit localization, traumatic brain injury assessments', sampleTasks: ['WAIS-IV / WMS-IV neuropsychological score profile discrepancy analysis', 'Mild Cognitive Impairment (MCI) vs early Alzheimer disease differentiation', 'Post-concussion cognitive fatigue and executive dysfunction return-to-work plan', 'Frontal lobe syndrome behavioral disinhibition clinical summary'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'psy-psychometrics', name: 'Psychometric Scale Design & Standardization', summary: 'Cronbach alpha reliability, exploratory factor analysis EFA, construct validity testing', sampleTasks: ['Likert scale item pool creation and construct domain definition brief', 'Exploratory Factor Analysis (EFA) scree plot and factor loading matrix', 'Test-retest reliability and convergent/discriminant validity testing plan', 'Item Response Theory (IRT) difficulty and discrimination parameter curve check'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'psy-child', name: 'Developmental & Child Psychology', summary: 'Pediatric milestone tracking, ADHD/autism spectrum diagnostic evaluation, family systems therapy', sampleTasks: ['Autism Spectrum Disorder (ASD) developmental milestone history and observation rubric', 'Parent-Child Interaction Therapy (PCIT) behavioral compliance protocol', 'School IEP accommodation plan for dyscalculia and sensory processing sensitivity', 'Adolescent emotional dysregulation family communication contract'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'psy-org', name: 'Industrial-Organizational (I-O) Psychology', summary: 'Job performance appraisal bias reduction, employee motivation models, psychological safety indices', sampleTasks: ['Behaviorally Anchored Rating Scales (BARS) performance evaluation rubric', 'Amy Edmondson psychological safety survey deployment and diagnostic report', 'Job burnout Maslach Burnout Inventory (MBI) organizational intervention strategy', 'Structured competency-based behavioral interview rubric with scoring keys'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    }
  ],

  'Society, law & culture': [
    {
      id: 'architecture_urban',
      name: 'Architecture, Urban Planning and Built Heritage',
      group: 'Society, law & culture',
      summary: 'Architectural design briefs, urban zoning masterplans, high-performance building envelopes, landscape ecology, and LEED/BREEAM green building.',
      coverageState: 'starter_ready',
      aliases: ['architecture', 'architect', 'urban planning', 'zoning', 'masterplan', 'building envelope', 'facade', 'interior architecture', 'landscape design', 'leed', 'breeam', 'historic preservation', 'floor plan', 'concept design', 'cad', 'revit', 'schematic design'],
      iconName: 'Landmark',
      subdisciplines: [
        { id: 'arch-schematic', name: 'Architectural Design Briefs & Space Programming', summary: 'Functional adjacency matrices, net-to-gross area programming, client vision translation', sampleTasks: ['Mixed-use commercial/residential architectural program & adjacency matrix', 'Schematic concept narrative translating client brand into spatial form', 'Circulation efficiency and egress corridor capacity calculation', 'Daylight study massing orientation comparison report'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'arch-urban', name: 'Urban Planning, Zoning & Transit-Oriented Design', summary: 'Floor Area Ratio FAR optimization, set-back zoning bylaws, complete streets pedestrian flows', sampleTasks: ['Floor Area Ratio (FAR) and height setback zoning entitlement study', 'Transit-Oriented Development (TOD) 10-minute pedestrian walkshed audit', 'Urban microclimate wind canyon and solar access shadow analysis', 'Form-based code architectural design guidelines for civic streetscapes'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'arch-envelope', name: 'Building Envelope & Facade Engineering', summary: 'Thermal bridging WUFI moisture analysis, double-glazed curtain wall U-factors, solar shading louvers', sampleTasks: ['Curtain wall unitized glazing thermal U-factor & condensation risk check', 'WUFI hygrothermal moisture accumulation simulation across wall assembly', 'Rainscreen facade pressure-equalized cavity ventilation design', 'Parametric solar shading louver angle optimization for summer sun cutoff'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'arch-sustainable', name: 'LEED, BREEAM & Net-Zero Architecture', summary: 'Daylighting autonomy simulation, embodied carbon lifecycle assessment LCA, passive solar orientation', sampleTasks: ['LEED v4.1 BD+C scorecard gap analysis and credit documentation plan', 'Whole-building embodied carbon Life Cycle Assessment (LCA) reduction study', 'Spatial Daylight Autonomy (sDA) and Annual Sunlight Exposure (ASE) model', 'Passive House (Passivhaus) envelope airtightness 0.6 ACH50 detailing review'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'arch-interior', name: 'Interior Architecture & Ergonomic Planning', summary: 'Commercial workplace wayfinding, acoustic ceiling baffles, lighting fixture Lux schedules', sampleTasks: ['Activity-based workplace interior layout with quiet focus and collaboration zones', 'Acoustic Reverberation Time (RT60) ceiling baffle sizing for open offices', 'Artificial lighting Lux schedule compliant with EN 12464-1 workspace standards', 'Universal design and ADA accessibility clearance verification for public restrooms'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'arch-heritage', name: 'Historic Preservation & Adaptive Reuse', summary: 'Secretary of Interior preservation standards, masonry stabilization, historic fabric documentation', sampleTasks: ['Secretary of the Interior Standards for Rehabilitation compliance report', 'Historic unreinforced brick masonry repointing and mortar analysis specification', 'Adaptive reuse structural load conversion memo for 19th-century warehouse', 'Historic American Buildings Survey (HABS) architectural documentation guide'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'film_video_production',
      name: 'Film, Cinematography, Video Production and YouTube',
      group: 'Society, law & culture',
      summary: 'Screenwriting, scene breakdowns, cinematography lighting, video editing, ACES color grading, YouTube audience retention, and broadcast delivery.',
      coverageState: 'starter_ready',
      aliases: ['film', 'video production', 'filmmaking', 'cinematography', 'youtube', 'screenplay', 'camera', 'lighting', 'editing', 'color grading', 'davinci resolve', 'premiere pro', 'director', 'shot list', 'storyboard', 'broadcast', 'streaming', 'audio post'],
      iconName: 'Video',
      subdisciplines: [
        { id: 'flm-screenplay', name: 'Screenwriting & Production Scene Breakdown', summary: 'Three-act narrative structure, dialogue subtext, script breakdown sheets, line-item scheduling', sampleTasks: ['Feature film three-act narrative beat sheet with midpoint reversal', 'Script breakdown sheet cataloging cast, stunts, props, and special FX', 'Dialogue subtext polish transforming expository lines into tension', 'Scene slugline and pacing timeline for 10-minute short drama'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'flm-cinematography', name: 'Cinematography, Lenses & Lighting Design', summary: 'Three-point lighting ratios, anamorphic lens focal lengths, camera movement blocking, false color exposure', sampleTasks: ['High-contrast dramatic lighting diagram (key, fill, backlight, practicals)', 'Anamorphic lens focal length and depth-of-field shot list design', 'False color exposure mapping for skin-toneIRE consistency across setups', 'Camera movement blocking (dolly, Steadicam, gimbal) for continuous take'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'flm-editing', name: 'Video Editing & Post-Production Workflow', summary: 'J-cut/L-cut narrative pacing, multi-cam synchronization, proxy workflows, EDL/XML conform', sampleTasks: ['Documentary dialogue editing rhythm with J-cut and L-cut transitions', '4K RAW proxy workflow setup for Premiere Pro / DaVinci Resolve', 'Multi-camera concert shoot synchronization and angle cutting pacing', 'Post-production turnover guide for sound design, VFX, and color conform'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'flm-color', name: 'Color Grading & Color Science (ACES/DaVinci)', summary: 'Log-to-Rec.709 transforms, skin-tone vector tracking, LUT generation, HDR10 mastering', sampleTasks: ['ACEScc color management pipeline setup from ARRI/RED RAW to P3-D65', 'Skin-tone line vectorscope calibration and qualifier isolation node tree', 'Split-toning contrast curve look creation for neo-noir thriller aesthetic', 'HDR10 1000-nit PQ mastering with MaxFALL/MaxCLL metadata generation'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'flm-youtube', name: 'YouTube Strategy, Packaging & Audience Retention', summary: 'First 30-second retention hooks, CTR thumbnail/title A/B matrix, viewer re-engagement pacing', sampleTasks: ['First 30-second retention hook script eliminating viewer drop-off', 'High-CTR YouTube thumbnail visual hierarchy and title pairing matrix', 'Mid-roll viewer re-engagement pacing markers for 15-minute video essay', 'YouTube Analytics retention dip diagnosis and editorial pacing fixes'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'flm-delivery', name: 'Broadcast Delivery & Video Standards (SMPTE/Netflix)', summary: 'Audio loudness EBU R128 compliance, ProRes 4444 delivery specs, IMF packaging', sampleTasks: ['Netflix delivery specification compliance audit for 4K UHD Master', 'EBU R128 / ATSC A/85 audio loudness normalization (-24 LKFS/LUFS)', 'Interoperable Master Format (IMF) package metadata verification', 'Closed-captioning SCC/SRT synchronization and readability standards review'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'music_audio_production',
      name: 'Music Production, Sound Engineering and Acoustics',
      group: 'Society, law & culture',
      summary: 'DAW music production, vocal production, mixing engineering, LUFS audio mastering, synthesizer sound design, and acoustic room treatment.',
      coverageState: 'starter_ready',
      aliases: ['music production', 'sound engineering', 'audio engineering', 'mixing', 'mastering', 'daw', 'ableton', 'logic pro', 'pro tools', 'acoustics', 'sound design', 'synthesizer', 'microphones', 'vocal recording', 'lufs', 'eq', 'compression', 'studio'],
      iconName: 'Music',
      subdisciplines: [
        { id: 'mus-daw', name: 'DAW Songwriting & Beat Architecture', summary: 'Chord progression voice leading, MIDI drum humanization, arrangement tension and release curves', sampleTasks: ['Neo-soul 7th/9th chord progression MIDI voice leading blueprint', 'Drum groove velocity humanization and pocket swing timing adjustment', 'Pop track arrangement tension and release energy automation map', 'Layered analog/digital bass patch harmonization without phase cancellation'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mus-vocal', name: 'Vocal Tracking, Comping & Tuning', summary: 'Microphone polar pattern selection, vocal chain preamp/compressor, subtle formant pitch correction', sampleTasks: ['Vocal tracking chain setup: mic choice, 1073 preamp, 1176 fast peak taming', 'Multi-take lead vocal comping selection rubric for emotional delivery', 'Melodyne surgical pitch and formant adjustment preserving natural vibrato', 'Sibilance de-essing and harsh resonance dynamic notch EQ chain'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mus-mixing', name: 'Mixing Engineering & Stems Delivery', summary: 'Frequency carving dynamic EQ, sidechain compression, stereo spatial imaging, gain staging', sampleTasks: ['Kick and sub-bass low-end frequency carving and sidechain routing', 'Lead vocal spatial depth chain: stereo plate, slap delay, widening chorus', 'Mix bus compression glue setup (SSL G-Comp 2-bus settings)', 'Broadcast and streaming multi-track stems delivery naming convention and zero-crossing check'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mus-mastering', name: 'Audio Mastering & Loudness Standards (LUFS)', summary: 'Limiter ceiling settings, true-peak inter-sample clipping prevention, Spotify/Apple Music loudness target', sampleTasks: ['Mastering limiter ceiling and true-peak inter-sample clip prevention (-1.0 dBTP)', 'Integrated -14 LUFS (streaming) vs -9 LUFS (club) loudness targeting memo', 'Mid-Side (M/S) EQ low-end mono-maker and high-shelf air boost', 'Dither bit-depth reduction (24-bit to 16-bit TPDF) audio export checklist'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mus-sounddesign', name: 'Synthesizer Sound Design & Foley', summary: 'Subtractive/wavetable synthesis modulation routings, ADSR envelope shaping, cinematic impact foley', sampleTasks: ['Serum/Vital wavetable synth patch: custom oscillator morphing & LFO routings', 'Punchy 808 sub-bass pitch drop envelope shaping and harmonic saturation', 'Cinematic trailer braam impact layer design combining brass and distorted sub', 'Foley footsteps and cloth pass recording and sync replacement guide'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'mus-acoustics', name: 'Studio Acoustics & Room Mode Treatment', summary: 'Bass trap reverberation RT60 targets, standing wave modal flutter echo, reflection-free zone design', sampleTasks: ['Room dimension axial, tangential, and oblique standing wave mode calculation', 'Bass trap porous absorber depth and air cavity thickness optimization', 'Reflection-Free Zone (RFZ) acoustic panel mirror-point placement diagram', 'Room impulse response RT60 reverberation decay measurement and targeted EQ curve'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'journalism_media',
      name: 'Journalism, Mass Communication and Crisis PR',
      group: 'Society, law & culture',
      summary: 'Investigative reporting, AP Style news writing, press releases, broadcast scripts, crisis communications, and media ethics/libel law.',
      coverageState: 'starter_ready',
      aliases: ['journalism', 'news', 'press release', 'public relations', 'pr', 'media', 'communications', 'investigative reporting', 'ap style', 'broadcast news', 'crisis pr', 'fact checking', 'interviewing', 'editor', 'journalist', 'libel', 'media law'],
      iconName: 'Newspaper',
      subdisciplines: [
        { id: 'jrn-investigative', name: 'Investigative Reporting & Document Analysis', summary: 'Freedom of information FOIA requests, offshore registry paper trails, whistleblower source protection', sampleTasks: ['Federal Freedom of Information Act (FOIA) targeted record request letter', 'Corporate registry and beneficial ownership paper-trail tracing methodology', 'Whistleblower encrypted communication and digital security protocol', 'Investigative reporting timeline reconstruction from conflicting depositions'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'jrn-apstyle', name: 'News Writing & AP Style Headline Crafting', summary: 'Inverted pyramid narrative structure, verified attribution rules, punchy SEO-friendly headlines', sampleTasks: ['Breaking news story in inverted pyramid style following latest AP Stylebook', 'High-impact news headline crafting with secondary SEO meta-headline', 'Attribution and direct quotation ethical verification guidelines', 'Feature profile story opening narrative lead with sensory scene setting'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'jrn-pressrelease', name: 'Press Release Drafting & Media Pitching', summary: 'Newsworthy embargoed press releases, media kit one-pagers, targeted journalist outreach pitches', sampleTasks: ['Standard commercial product launch embargoed press release with boilerplate', 'Personalized email pitch to tier-one tech journalists avoiding spam buzzwords', 'Media advisory one-pager for press conference with photogenic photo-op angles', 'Executive quote polishing for corporate quarterly earnings announcement'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'jrn-crisis', name: 'Crisis Communication & Reputation Defense', summary: 'First-hour response holding statements, stakeholder impact matrices, executive media apology briefs', sampleTasks: ['First-hour response holding statement for cybersecurity data breach', 'Crisis communication stakeholder message matrix (employees, press, regulators)', 'Executive on-camera media training response sheet with pivot phrases', 'Post-crisis reputational repair roadmap and trust-building timeline'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'jrn-broadcast', name: 'Broadcast & Podcast Scripting', summary: 'Writing for the ear, teleprompter phonetic scripts, interview question flow with timed bridges', sampleTasks: ['Broadcast television news voice-over (VO/SOT) script with anchor cues', 'Investigative narrative podcast episode cold-open script with audio cues', 'Long-form podcast interview prep sheet with progressive challenge questions', 'Radio soundbite transcription and 30-second news package edit guide'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'jrn-ethics', name: 'Media Law, Ethics & Fact-Checking Protocols', summary: 'Defamation/libel risk avoidance, fair use copyright compliance, two-source corroboration standards', sampleTasks: ['Pre-publication libel and defamation legal risk evaluation memo', 'Fair use doctrine 4-factor analysis for documentary archival footage use', 'Two-source verification standard checklist for anonymous allegations', 'Society of Professional Journalists (SPJ) Code of Ethics compliance audit'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    }
  ],

  'Economy & work': [
    {
      id: 'hospitality_tourism',
      name: 'Hospitality, Hotel Management, Tourism and Event Operations',
      group: 'Economy & work',
      summary: 'Hotel revenue management (RevPAR), guest experience SOPs, food and beverage cost control, event/conference logistics, and destination tourism.',
      coverageState: 'starter_ready',
      aliases: ['hospitality', 'hotel', 'tourism', 'events', 'resort', 'event planning', 'revpar', 'hotel management', 'guest experience', 'food and beverage', 'banquet', 'travel industry', 'concierge', 'front desk', 'catering', 'mice'],
      iconName: 'Hotel',
      subdisciplines: [
        { id: 'hos-revenue', name: 'Hotel Revenue Management & RevPAR Optimization', summary: 'Dynamic yield pricing algorithms, OTA channel commission management, demand compression forecasting', sampleTasks: ['Hotel RevPAR, ADR, and occupancy rate dynamic pricing forecast model', 'Online Travel Agency (OTA) commission cost vs direct booking incentive audit', 'Group block room displacement analysis for high-demand event dates', 'Length-of-Stay (LOS) restriction rules during holiday compression periods'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'hos-operations', name: 'Front Office & Housekeeping Operations SOPs', summary: 'Check-in cycle time reduction, room inspection quality audits, guest escalation resolution scripts', sampleTasks: ['Front desk guest check-in SOP and PMS keycard issuance workflow', 'Housekeeping 15-minute room turnover inspection checklist with scoring keys', 'Guest complaint de-escalation framework with service recovery authorization limits', 'VIP guest welcome protocol and bespoke amenities staging standard'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'hos-fb', name: 'Food & Beverage (F&B) Cost Engineering', summary: 'Plate cost yield calculations, beverage markup tiering, banquet kitchen prep scheduling', sampleTasks: ['Restaurant menu engineering matrix: Stars, Plowhorses, Puzzles, and Dogs', 'Recipe cost card with portion yield factor and target 28% food cost margin', 'Banquet beverage bar package pricing and per-guest consumption estimate', 'Commercial kitchen prep schedule and HACCP food holding temperature log'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'hos-events', name: 'Conference, Banquet & Event Logistics', summary: 'BEO Banquet Event Order authoring, audiovisual run-of-show schedules, VIP seating floorplans', sampleTasks: ['Banquet Event Order (BEO) authoring for 500-guest corporate gala dinner', 'Audiovisual run-of-show timeline with presenter cues and lighting changes', 'Conference breakout room floorplan with ADA aisle widths and fire exit buffers', 'Vendor load-in/load-out freight elevator schedule for trade show convention'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'hos-tourism', name: 'Destination Tourism Strategy & Ecotourism', summary: 'Visitor carrying capacity modeling, tourism economic multiplier calculations, heritage trail design', sampleTasks: ['National park environmental carrying capacity and trail quota model', 'Destination Marketing Organization (DMO) regional campaign ROI plan', 'Ecotourism sustainable lodge certification audit (Global Sustainable Tourism Council)', 'Cultural heritage walking tour interpretive signage and audio guide script'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    },
    {
      id: 'global_trade_logistics',
      name: 'Global Trade, Customs, Freight and Supply Chain Logistics',
      group: 'Economy & work',
      summary: 'Incoterms 2020 rules, customs brokerage, Harmonized Tariff System (HTS), ocean/air freight operations, and cold-chain distribution.',
      coverageState: 'starter_ready',
      aliases: ['global trade', 'logistics', 'customs', 'freight', 'shipping', 'incoterms', 'tariffs', 'supply chain', 'cargo', 'container', 'customs broker', 'bill of lading', 'hts code', 'import export', 'warehouse', 'freight forwarding', 'cold chain'],
      iconName: 'Truck',
      subdisciplines: [
        { id: 'trd-incoterms', name: 'Incoterms 2020 & International Sales Contracts', summary: 'FOB vs CIF vs DDP liability transfer points, freight risk allocation, marine insurance claims', sampleTasks: ['Incoterms 2020 clause selection trade-off memo (FOB vs CIF vs DDP)', 'International commercial sales contract risk allocation and force majeure clause', 'Marine cargo insurance Institute Cargo Clauses (A) claim documentation', 'Commercial invoice and packing list alignment audit for Letter of Credit (LC)'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'trd-customs', name: 'Customs Brokerage, HTS Codes & Compliance', summary: 'Harmonized Tariff Schedule classification, Rules of Origin duty drawbacks, anti-dumping audits', sampleTasks: ['Harmonized Tariff Schedule (HTS) 10-digit code classification rationale', 'Free Trade Agreement (USMCA/EU) Rules of Origin regional value content test', 'Customs valuation deductive value calculation for imported components', 'Anti-Dumping and Countervailing Duty (AD/CVD) exposure assessment'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'trd-ocean', name: 'Ocean Container Freight & Port Drayage', summary: 'Twenty-foot equivalent TEU stowage plans, demurrage and detention minimization, ocean Bill of Lading verification', sampleTasks: ['40ft high-cube ocean container cubic volume and payload weight stowage plan', 'Port demurrage and container yard detention cost mitigation protocol', 'Ocean Bill of Lading (Clean on Board) discrepancy verification checklist', 'Intermodal drayage rail-to-truck transfer scheduling and empty container return plan'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'trd-air', name: 'Air Cargo Logistics & Dangerous Goods (IATA)', summary: 'Volumetric charge weight calculations, IATA dangerous goods DGR labeling, air waybill AWB execution', sampleTasks: ['Air cargo chargeable volumetric weight calculation (1:6000 ratio)', 'IATA Dangerous Goods Regulations (DGR) lithium battery packaging compliance', 'Master Air Waybill (MAWB) and House Air Waybill (HAWB) consolidation manifest', 'Charter freighter payload-range payload limitation study for oversize cargo'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'trd-coldchain', name: 'Cold Chain Logistics & Pharma Distribution', summary: 'Temperature datalogger validation GDP, refrigerated reefer container monitoring, dry-ice replenishments', sampleTasks: ['Good Distribution Practice (GDP) 2-8°C pharmaceutical cold chain audit', 'Passive insulated shipper thermal qualification pack-out standard (ISTA 7D)', 'Reefer container set-point and automated temperature datalogger deviation SOP', 'Dry-ice sublimation rate calculation for international air biological shipment'], coverageState: 'starter_ready', workflowsCount: 3 },
        { id: 'trd-multiechelon', name: 'Multi-Echelon Inventory & Supply Network Optimization', summary: 'Safety stock under lead-time variance, cross-docking hub design, supplier disruption war-gaming', sampleTasks: ['Multi-echelon safety stock calculation under stochastic supplier lead times', 'Cross-docking distribution center inbound/outbound door assignment plan', 'Dual-sourcing supplier disruption resilience simulation and inventory buffer policy', 'Total Landed Cost (TLC) comparative model for nearshoring vs offshore manufacturing'], coverageState: 'starter_ready', workflowsCount: 3 }
      ]
    }
  ]
};

function formatDomain(d) {
  let out = '  {\n';
  out += '    id: \'' + d.id + '\',\n';
  out += '    name: \'' + d.name + '\',\n';
  out += '    group: \'' + d.group + '\',\n';
  out += '    summary: \'' + d.summary.replace(/'/g, "\\'") + '\',\n';
  out += '    coverageState: \'' + d.coverageState + '\',\n';
  out += '    aliases: ' + JSON.stringify(d.aliases) + ',\n';
  out += '    iconName: \'' + d.iconName + '\',\n';
  out += '    subdisciplines: [\n';
  d.subdisciplines.forEach((s, idx) => {
    out += '      {\n';
    out += '        id: \'' + s.id + '\',\n';
    out += '        name: \'' + s.name + '\',\n';
    out += '        summary: \'' + s.summary.replace(/'/g, "\\'") + '\',\n';
    out += '        sampleTasks: ' + JSON.stringify(s.sampleTasks) + ',\n';
    out += '        coverageState: \'' + s.coverageState + '\',\n';
    out += '        workflowsCount: ' + s.workflowsCount + '\n';
    out += '      }' + (idx < d.subdisciplines.length - 1 ? ',' : '') + '\n';
  });
  out += '    ]\n';
  out += '  }';
  return out;
}

const taxPath = 'src/data/taxonomy.ts';
let taxLines = fs.readFileSync(taxPath, 'utf8').split(/\r?\n/);

function insertBeforePattern(lines, pattern, textToInsert) {
  const idx = lines.findIndex(l => pattern.test(l));
  if (idx === -1) {
    console.error('Failed to find pattern:', pattern);
    return lines;
  }
  const insertIdx = (idx > 0 && lines[idx - 1].includes('═══')) ? idx - 1 : idx;
  const newLines = textToInsert.split('\n');
  lines.splice(insertIdx, 0, ...newLines);
  console.log('Inserted before index ' + insertIdx);
  return lines;
}

const group2Str = newDomainsByGroup['Technology & engineering'].map(formatDomain).join(',\n') + ',\n';
const group3Str = newDomainsByGroup['Health, food & living things'].map(formatDomain).join(',\n') + ',\n';
const group4Str = newDomainsByGroup['Economy & work'].map(formatDomain).join(',\n') + ',\n';
const group5Str = newDomainsByGroup['Society, law & culture'].map(formatDomain).join(',\n') + ',\n';

taxLines = insertBeforePattern(taxLines, /GROUP 3: HEALTH, FOOD/, group2Str);
taxLines = insertBeforePattern(taxLines, /GROUP 4: ECONOMY & WORK/, group3Str);
taxLines = insertBeforePattern(taxLines, /GROUP 5: SOCIETY, LAW & CULTURE/, group4Str);
taxLines = insertBeforePattern(taxLines, /GROUP 6: PERSONAL LIFE/, group5Str);

let newContent = taxLines.join('\n');
newContent = newContent.replace('// GROUP 2: TECHNOLOGY & ENGINEERING (10 domains)', '// GROUP 2: TECHNOLOGY & ENGINEERING (17 domains)');
newContent = newContent.replace('// GROUP 3: HEALTH, FOOD & LIVING THINGS (5 domains)', '// GROUP 3: HEALTH, FOOD & LIVING THINGS (7 domains)');
newContent = newContent.replace('// GROUP 4: ECONOMY & WORK (7 domains)', '// GROUP 4: ECONOMY & WORK (9 domains)');
newContent = newContent.replace('// GROUP 5: SOCIETY, LAW & CULTURE (7 domains)', '// GROUP 5: SOCIETY, LAW & CULTURE (11 domains)');

fs.writeFileSync(taxPath, newContent, 'utf8');
console.log('Successfully updated taxonomy.ts with line array splicing!');
