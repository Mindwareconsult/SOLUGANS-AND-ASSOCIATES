export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  category: 'Architecture & Design' | 'Civil & Construction' | 'Structural Steel' | 'MEP & Energy' | 'Surveying & Plant Hire';
  shortSummary: string;
  overview: string;
  capabilities: string[];
  deliverables: string[];
  approach: string;
  whyItMatters: string;
  iconName: string;
  thumbnailImage?: string;
  thumbnailAlt?: string;
}

export interface ServiceCategory {
  name: string;
  description: string;
  services: ServiceDetail[];
}

export const SERVICES_DATA: ServiceDetail[] = [
  // 1. Architecture & Design
  {
    id: 'architectural-design',
    slug: 'architectural-design',
    category: 'Architecture & Design',
    title: 'Architectural Designs & 3D Modeling',
    thumbnailImage: '/src/assets/images/RESIDENTIAL BUILDING/residential building a.jpg',
    thumbnailAlt: 'Architectural Design and Residential Construction by Solugans & Associates',
    shortSummary: 'Bioclimatic residential, commercial, and institutional building design balancing artistic grandeur with practical engineering.',
    overview: 'Our architectural practice translates client visions into functional, visually striking, and structurally sound built environments. As documented across dozens of built works in our corporate portfolio, we combine 3D spatial modeling, tropical climate-responsive design principles, and meticulous space planning to deliver spaces that elevate living, education, and commerce.',
    capabilities: [
      'Conceptual design, photorealistic 3D rendering, and spatial modeling',
      'Stately neoclassical and contemporary luxury duplex architecture',
      'Commercial plazas, shopping malls, supermarkets, and hotel layouts',
      'University lecture auditoriums, student hostels, and educational masterplans',
      'Regulatory compliance, statutory drawings, and council approval packages'
    ],
    deliverables: [
      'Comprehensive architectural working drawing sets',
      'High-resolution 3D perspectives, elevation studies, and walkthroughs',
      'Door/window schedules, finish schedules, and joinery details',
      'Statutory council approval documentation'
    ],
    approach: 'We commence with in-depth client dialogue and micro-climate site analysis. Our designs blend contextual aesthetics with structural feasibility, ensuring that every artistic line is buildable, structurally sound, and cost-efficient.',
    whyItMatters: 'Intelligent architectural planning prevents costly structural retrofits, optimizes natural ventilation, and enhances asset value over the entire building lifecycle.',
    iconName: 'Compass'
  },
  {
    id: 'landscape-design',
    slug: 'landscape-design',
    category: 'Architecture & Design',
    title: 'Landscaping & External Civil Reticulation',
    shortSummary: 'Integrated external environment planning, perimeter walls, grand entrance arches, paved courtyard hardscaping, and erosion control.',
    overview: 'We craft harmonious outdoor environments that integrate seamlessly with the main architecture. From luxury estate driveways and grand ornamental entrance gates to commercial parking courts and civic corridors, we optimize terrain, drainage, and greenery.',
    capabilities: [
      'Topographic terrain modeling and grade elevation planning',
      'Pavement, curb, and ornamental hardscape design',
      'Integrated outdoor security lighting and perimeter ambiance',
      'Stormwater collection, culverts, and erosion control integration',
      'Grand ornamental estate gates and perimeter security fences'
    ],
    deliverables: [
      'Hardscape layout and material schedules',
      'Perimeter wall and gate structural details',
      'Exterior illumination and civil drainage layouts'
    ],
    approach: 'We study site rainfall patterns and natural slope dynamics to design outdoor spaces that are visually stunning, safe, and low-maintenance.',
    whyItMatters: 'Proper landscaping protects foundational soil from erosion while providing thermal cooling and elevating overall property curb appeal.',
    iconName: 'Trees'
  },
  {
    id: 'interior-decoration-furniture',
    slug: 'interior-decoration-furniture',
    category: 'Architecture & Design',
    title: 'Interior Decoration & Furniture Making',
    shortSummary: 'Bespoke interior spatial planning, plaster cornices, ornamental ceiling domes, luxury tiling, and custom cabinetry fabrication.',
    overview: 'As officially outlined in our corporate profile, Solugans & Associates operates a dedicated interior decoration and custom furniture making division. We design and install high-end plasterwork, coffered ceilings, ornamental dome medallions, chandelier lighting fixtures, and custom joinery.',
    capabilities: [
      'Cast-in-place ornamental plaster domes and classical ceiling medallions',
      'Luxury granite, marble, and polished vitrified tile floor installations',
      'Custom woodwork, kitchen cabinetry, and boardroom furniture fabrication',
      'Acoustic ceiling paneling and architectural cove lighting design',
      'Turnkey executive office, commercial showroom, and hotel suite furnishing'
    ],
    deliverables: [
      'Reflected ceiling plans (RCP) and lighting layout drawings',
      'Custom millwork and furniture shop fabrication drawings',
      'Material sample boards, sanitary and hardware schedules'
    ],
    approach: 'We harmonize ergonomics, lighting warmth, and premium tactile materials to build interiors that exude luxury, permanence, and functional utility.',
    whyItMatters: 'Thoughtful interiors boost spatial productivity, optimize acoustic comfort, and provide immediate sensory distinction for occupants.',
    iconName: 'Palette'
  },

  // 2. Civil & Building Construction
  {
    id: 'building-construction',
    slug: 'building-construction',
    category: 'Civil & Construction',
    title: 'Building Construction & Turnkey Execution',
    thumbnailImage: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
    thumbnailAlt: 'Building Construction and Turnkey Execution by Solugans & Associates Engineering Ltd.',
    shortSummary: 'End-to-end building construction of residential mansions, commercial plazas, hotels, and university hostels with certified engineering oversight.',
    overview: 'Solugans & Associates has successfully executed dozens of landmark, mega-scale projects across Nigeria. We provide turnkey building construction encompassing mobilization, site setting out, structural concrete framing, masonry blockwork, roofing, plastering, fenestration, and premium finishes.',
    capabilities: [
      'Luxury residential duplexes, stately villas, and multi-family country homes',
      'Multi-storey commercial complexes, supermarkets, and shopping plazas',
      'Hotels and hospitality developments with modern external glass elevator shafts',
      'University student hostels (400-room to 600-capacity blocks) and lecture halls',
      'Comprehensive on-site project management, schedule tracking, and safety compliance'
    ],
    deliverables: [
      'Turnkey physical building delivered to approved engineering drawings',
      'As-built structural and MEP drawings',
      'Material quality testing certificates (concrete cubes, steel tensile tests)',
      'Formal client handover manual and warranty documentation'
    ],
    approach: 'We assign dedicated COREN-registered civil engineers and experienced site managers to oversee every daily activity, enforcing strict quality control protocols from ground-breaking to handover.',
    whyItMatters: 'Turnkey construction under a single accountable engineering firm eliminates finger-pointing between separate designers and builders, ensuring budget predictability and structural longevity.',
    iconName: 'Building'
  },
  {
    id: 'substructural-foundation-engineering',
    slug: 'substructural-foundation-engineering',
    category: 'Civil & Construction',
    title: 'Substructural Work & Foundation Engineering',
    thumbnailImage: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
    thumbnailAlt: 'Sub-Structural Foundation Work and Blinding by Solugans & Associates Engineering Ltd.',
    shortSummary: 'Soil bearing investigations, deep pad footings, heavy reinforced raft foundations, and vibrated backfill for long-term stability.',
    overview: 'As extensively showcased in our company profile (Pages 141-156), foundation integrity is our primary specialty. We analyze local soil hydrology and bearing capacities to engineer rock-solid substructures—from isolated pad footings to monolithic raft foundations and ground beams.',
    capabilities: [
      'Geotechnical evaluation, trenching, and soil compaction verification',
      'Monolithic reinforced concrete raft foundations for expansive clay or weak soils',
      'Deep reinforced pad footings tied with rigid grade beams',
      'Vibrated backfilling, compaction testing, and damp-proof membrane (DPM) installation',
      'Subterranean plumbing and drainage sleeve integration prior to casting'
    ],
    deliverables: [
      'Substructure structural calculation reports and reinforcement bar bending schedules',
      'Soil compaction test logs and grade-30 concrete batch pour certificates',
      'Finished foundation slab ready for superstructure framing'
    ],
    approach: 'We inspect soil stratification thoroughly before pouring lean concrete blinding. Steel rebar cages are elevated with precast concrete cover blocks to ensure zero corrosion risks from groundwater.',
    whyItMatters: 'Over 80% of building cracks and structural failures in Nigeria stem from defective foundations. Rigorous substructural engineering guarantees zero differential settlement.',
    iconName: 'Layers'
  },
  {
    id: 'basement-excavation-retaining-walls',
    slug: 'basement-excavation-retaining-walls',
    category: 'Civil & Construction',
    title: 'Basement Excavation & Concrete Retaining Walls',
    thumbnailImage: '/src/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
    thumbnailAlt: 'Basement Excavation and Concrete Retaining Wall Works by Solugans & Associates Engineering Ltd.',
    shortSummary: 'Heavy mechanical excavation, stepped cantilever reinforced retaining walls, and waterproof subterranean structures.',
    overview: 'Documented extensively in our portfolio (Pages 86-87, 122-129), Solugans & Associates possesses the specialized equipment and engineering expertise required for deep basement excavation, earth retention, and stepped reinforced concrete retaining walls on steep or sloped terrains.',
    capabilities: [
      'Deep mechanical earth excavation using company-owned CAT excavators and Mack haulage tippers',
      'Stepped cantilever reinforced concrete retaining walls engineered against hydrostatic lateral pressure',
      'Subterranean perimeter drainage channels and weep-hole gravel filtration systems',
      'Waterproof concrete admixtures, bitumen tanking, and subterranean damp barriers',
      'Basement parking ramps, perimeter shoring, and load-bearing retaining columns'
    ],
    deliverables: [
      'Earth retention calculations and lateral soil pressure analysis',
      'Retaining wall structural drawings with double-mat reinforcement detailing',
      'Certified waterproof basement enclosure ready for multi-level superstructure'
    ],
    approach: 'We utilize optical laser levels and specialized excavation techniques to excavate precisely to invert levels. Retaining walls are reinforced with heavy double-layer rebar and cast with dense, vibrated waterproof concrete.',
    whyItMatters: 'Improperly engineered retaining walls can collapse catastrophically under monsoon rainfall. Our empirical engineering ensures permanent slope stability and dry, usable basements.',
    iconName: 'ShieldAlert'
  },
  {
    id: 'reinforcement-beams-columns-slabs',
    slug: 'reinforcement-beams-columns-slabs',
    category: 'Civil & Construction',
    title: 'Reinforcement of Beams, Columns & Curved Slabs',
    thumbnailImage: '/src/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
    thumbnailAlt: 'Structural Reinforcement of Beams, Columns and Slabs by Solugans & Associates Engineering Ltd.',
    shortSummary: 'High-yield tensile rebar cage assembly, suspended curved slab formwork, drop beams, and precision concrete deck casting.',
    overview: 'Reinforced concrete framing represents the structural skeleton of our buildings (Pages 72-85, 117-121). We fabricate complex high-yield rebar cages for deep drop beams, stout columns, cantilever balconies, and suspended curved floor slabs.',
    capabilities: [
      'High-yield tensile rebar detailing (T12, T16, T20, T25) in compliance with BS 8110 / Eurocode 2',
      'Custom curved formwork and scaffolding support systems for architectural sweeping decks',
      'Rigid column starter rebar tying with precision stirrup/link spacing to resist shear stresses',
      'High-frequency electrical poker vibration to eliminate honeycomb defects',
      'Controlled water-curing regimes lasting 28 days for maximum compressive strength'
    ],
    deliverables: [
      'Bar Bending Schedules (BBS) and structural reinforcement blueprints',
      'Pre-pour structural engineer inspection checklists',
      'Concrete cube compressive strength testing results (7-day and 28-day crushing)'
    ],
    approach: 'Every rebar cage is inspected and signed off by a COREN-registered engineer before concrete casting. We maintain strict water-cement ratios and deploy poker vibrators throughout the pour.',
    whyItMatters: 'Flawless rebar placement and complete concrete consolidation are the ultimate defense against structural deflections and premature concrete degradation.',
    iconName: 'Cpu'
  },
  {
    id: 'staircase-engineering-helical',
    slug: 'staircase-engineering-helical',
    category: 'Civil & Construction',
    title: 'Helical & Spiral Cantilever Staircase Construction',
    shortSummary: 'Sculptural curved and cantilever reinforced concrete stairs engineered without unsightly intermediate columns.',
    overview: 'Showcased as an engineering hallmark in our company profile (Pages 130-133), Solugans specializes in complex staircase engineering—including graceful helical, spiral, and grand imperial cantilever stairways that serve as architectural centerpieces.',
    capabilities: [
      'Geometric 3D setting out of sweeping helical risers, treads, and soffit curves',
      'Specialized curved timber and steel formwork construction',
      'Intricate longitudinal and shear reinforcement detailing for torsional stresses',
      'Smooth monolithic concrete casting and vibration on steep inclines',
      'Precision granite, marble, and custom wrought-iron/glass balustrade fitting'
    ],
    deliverables: [
      'Staircase geometric layout drawings and riser-tread calculation schedules',
      'Torsional structural analysis reports and reinforcement details',
      'Completed architectural feature staircase with mirror-smooth finishes'
    ],
    approach: 'Helical stairs undergo severe torsional forces. Our structural engineers compute torsional resistance matrices to ensure that the floating staircase feels exceptionally solid and vibration-free under foot.',
    whyItMatters: 'A masterfully constructed helical staircase elevates an ordinary foyer into a breath-taking architectural statement while delivering absolute safety.',
    iconName: 'Maximize2'
  },
  {
    id: 'concrete-tiles-interlocking',
    slug: 'concrete-tiles-interlocking',
    category: 'Civil & Construction',
    title: 'Concrete Tiles Interlocking & Pavement Works',
    shortSummary: 'Heavy-duty industrial paving stones, vibrated interlocking blocks, and paved vehicular driveways for luxury compounds and commercial plazas.',
    overview: 'Documented on Page 31 of our profile, we manufacture and install high-density concrete interlocking paving stones and kerbs, creating durable, elegant driveways, parking lots, and walkways built to withstand heavy vehicular axle loads.',
    capabilities: [
      'High-density hydraulic-pressed interlocking paving stones in diverse geometric patterns',
      'Sub-base preparation, crushed stone grading, and heavy plate vibratory compaction',
      'Concrete edge kerbs and integrated rainwater drainage gutters',
      'Paved commercial parking plazas capable of supporting delivery trucks and customer traffic',
      'Permeable pavement design for eco-friendly stormwater infiltration'
    ],
    deliverables: [
      'Pavement layout and drainage slope drawings',
      'High-durability paved surface guaranteed against sinking or rutting'
    ],
    approach: 'Longevity in interlocking paving depends entirely on sub-base compaction. We excavate weak topsoil, lay well-graded crushed stone, and compact systematically before screeding sharp sand and laying pavers.',
    whyItMatters: 'Proper interlocking paving prevents muddy compounds, eliminates water puddling, and maintains pristine aesthetics for decades.',
    iconName: 'LayoutGrid'
  },

  // 3. Structural Steel
  {
    id: 'tubular-steel-space-frames',
    slug: 'tubular-steel-space-frames',
    category: 'Structural Steel',
    title: 'Tubular Steel Space Frames & Roof Trusses',
    thumbnailImage: '/src/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
    thumbnailAlt: 'Tubular Steel Space Frame and Roof Truss Fabrication by Solugans & Associates',
    shortSummary: 'Wide-span tubular steel trusses, industrial warehouse frameworks, church auditoriums, and rust-inhibited space frames.',
    overview: 'As prominently documented in our profile (Pages 134-140), Solugans & Associates operates a specialized structural steel engineering team. We fabricate and erect long-span tubular steel roof trusses, architectural space frames, canopy frames, and industrial warehouse skeletons.',
    capabilities: [
      'Structural steel truss modeling for clear-spans exceeding 30 to 50 meters',
      'Tubular circular and rectangular hollow section (CHS/RHS) steel welding and node assembly',
      'Industrial warehouse frameworks, factories, market halls, and church auditoriums',
      'Heavy-duty anti-corrosive primer coating and red-oxide rust-inhibiting treatments',
      'Rigid column-to-truss baseplate bolted connections and high-altitude crane erection'
    ],
    deliverables: [
      'Steel structural calculation reports and joint connection details',
      'Shop fabrication blueprints and welding inspection logs',
      'Fully erected, wind-resistant tubular steel roof structure ready for cladding'
    ],
    approach: 'Steel sections are cut, welded, and pre-assembled in our fabrication yard under strict alignment jigs. Welds are inspected for penetration, and all members are primed prior to field hoisting and bolting.',
    whyItMatters: 'Tubular steel space frames offer unparalleled strength-to-weight ratios, enabling massive column-free interior spaces while reducing total foundation loads.',
    iconName: 'Wrench'
  },

  // 4. MEP & Energy
  {
    id: 'solar-energy-mini-grids',
    slug: 'solar-energy-mini-grids',
    category: 'MEP & Energy',
    title: 'Solar Power Mini-Grids & Clean Energy Systems',
    shortSummary: 'Engineering, procurement, construction, and commissioning (EPCC) of commercial and institutional solar mini-grids (10kVA to 120kVA+).',
    overview: 'As documented in our completed projects register (Page 248), Solugans has engineered and commissioned major clean energy systems—including a flagship 120kVA, 353.28kWh storage, 97.28kWp PV solar mini-grid for Babington Macaulay Junior Seminary, and commercial inverter backup systems.',
    capabilities: [
      'Solar energy system design: PV array sizing, lithium storage banks, and hybrid inverter coupling',
      'Engineering, Procurement, Construction and Commissioning (EPCC) of institutional mini-grids',
      'High-capacity solar power systems for corporate headquarters, schools, and private estates',
      'Energy auditing, load profiling, and power consumption optimization',
      'Remote monitoring systems, surge protection, and lightning dissipation'
    ],
    deliverables: [
      'Comprehensive solar PV simulation and generation forecast reports',
      'Electrical single-line diagrams (SLD) and protection coordination schedules',
      'Commissioned solar energy system with operational training and warranty'
    ],
    approach: 'We perform comprehensive 24-hour energy logging before sizing components, selecting premium tier-1 solar panels, industrial-grade hybrid inverters, and long-life lithium iron phosphate (LiFePO4) storage.',
    whyItMatters: 'Dependable solar power slashes reliance on costly diesel generators by over 70%, dramatically lowering operational overhead and providing silent, uninterrupted electricity.',
    iconName: 'Zap'
  },
  {
    id: 'mechanical-electrical-services-design',
    slug: 'mechanical-electrical-services-design',
    category: 'MEP & Energy',
    title: 'Mechanical & Electrical (MEP) Services Design',
    shortSummary: 'Full-spectrum MEP design: university hostels, convocation arenas, banking halls, and commercial office complexes.',
    overview: 'Verified in our completed project archives (e.g. ESUT Convocation Arena, UNIZIK 400-room hostel, TETFund IMT degree admin block), our MEP engineering division prepares detailed mechanical and electrical designs for massive public and private facilities.',
    capabilities: [
      'Electrical power reticulation, lighting calculations, and cable tray trunking schemes',
      'Medium/Low Voltage (MV/LV) distribution, generator synchronization, and ATS panels',
      'Commercial HVAC air conditioning, central chilled water, and mechanical ventilation',
      'Potable water plumbing, overhead reservoir pumping, and foul/stormwater drainage',
      'Active fire protection: automatic sprinkler systems, fire hose reels, and hydrants'
    ],
    deliverables: [
      'Comprehensive MEP engineering drawing sets and load calculations',
      'Equipment specifications schedules and Bills of Engineering Measurements and Evaluation (BEME)',
      'As-built drawings and regulatory electrical compliance certificates'
    ],
    approach: 'We coordinate electrical and mechanical services using 3D clash-detection workflows, ensuring pipes, ducts, and cable trays run through designated structural sleeves without weakening beams.',
    whyItMatters: 'Flawless MEP engineering ensures that buildings are safe, hygienic, well-lit, thermally comfortable, and easy to maintain over decades of operation.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'substation-power-reticulation',
    slug: 'substation-power-reticulation',
    category: 'MEP & Energy',
    title: 'Electrical Substations & Estate Water Reticulation',
    thumbnailImage: '/src/assets/images/EARTHING WORK ON REINFORCEMENT/IMG_20170819_114918.jpg',
    thumbnailAlt: 'Earthing and Electrical Reticulation by Solugans & Associates',
    shortSummary: 'Masterplan engineering of 11/0.415kV injection substations, overhead distribution, and estate water networks.',
    overview: 'As verified in our completed projects register (Page 249-250, Paradise Garden City Estate Nike Enugu, Adonai Estate Nsukka), we design and manage general civil services including 11/0.415kV electrical injection substations, transformer installations, and trunk water reticulations.',
    capabilities: [
      'Masterplan design of external electricity distribution networks',
      '11kV and 33kV step-down transformer substation installation and commissioning',
      'Underground cable laying, overhead aluminum conductor stringing, and feeder pillars',
      'Trunk water distribution mains, pressure boosting stations, and hydrants',
      'Structural earthing networks integrated directly into reinforcement cages (Page 116)'
    ],
    deliverables: [
      'Estate infrastructure masterplans and electrical distribution networks',
      'Transformer substation installation approvals and testing certificates',
      'Water pressure network hydraulic calculation reports'
    ],
    approach: 'We coordinate with electricity distribution companies (DISCOs) to ensure all substations adhere strictly to national grid codes and safety standards.',
    whyItMatters: 'A well-engineered utility network prevents dangerous power surges, minimizes distribution line losses, and delivers reliable pressurized water to every plot.',
    iconName: 'Activity'
  },

  // 5. Surveying & Plant Hire
  {
    id: 'quantity-surveying-cost-engineering',
    slug: 'quantity-surveying-cost-engineering',
    category: 'Surveying & Plant Hire',
    title: 'Quantity Surveying & Cost Engineering',
    shortSummary: 'Standardized Bills of Quantities (BOQ), material takeoff, financial auditing, and value engineering to prevent budget overruns.',
    overview: 'Documented on Page 31 of our profile, our in-house quantity surveying and cost management team ensures financial discipline. Led by qualified quantity surveyors, we prepare comprehensive BOQs and manage cost control from inception to final account.',
    capabilities: [
      'Preparation of detailed Bills of Quantities (BOQ) using standardized SMM7/CESMM codes',
      'Pre-construction cost planning, feasibility budgets, and value engineering',
      'Interim valuation certificates, contractor claim audits, and variation tracking',
      'Material requisition forecasting and bulk procurement cost optimization',
      'Final project accounting and financial reconciliation'
    ],
    deliverables: [
      'Priced and unpriced Bills of Quantities',
      'Monthly financial progress and cost-to-complete reports',
      'Final accounts audit certificate'
    ],
    approach: 'We price every item based on real-time market material surveys and verified labor outputs, eliminating the common pitfall of under-budgeting or runaway contractor variations.',
    whyItMatters: 'Accurate quantity surveying guarantees that project owners know their exact financial commitments before breaking ground, preventing stalled or abandoned buildings.',
    iconName: 'Calculator'
  },
  {
    id: 'machinery-plant-hire',
    slug: 'machinery-plant-hire',
    category: 'Surveying & Plant Hire',
    title: 'Renting of Construction Plants & Machineries',
    shortSummary: 'Leasing of company-owned heavy tipper trucks, concrete mixers, poker vibrators, jack hammers, and optical laser levels.',
    overview: 'As officially listed on Page 31 and Page 195 of our corporate profile, Solugans & Associates maintains an extensive fleet of modern construction plants and equipment available for internal project deployment and external commercial rental.',
    capabilities: [
      'Heavy haulage tipper trucks (Mack & CAT) for site clearing, sand, and stone transport',
      'Diesel and electric heavy-duty concrete mixing machines',
      'High-frequency electrical poker vibrating machines and needle units',
      'Pneumatic and electric heavy jack hammers for rock breaking and demolition',
      'Plate and roller compacting machines for subgrade soil consolidation',
      'Optical laser alignment systems, asphalt cutters, and deep drilling machines'
    ],
    deliverables: [
      'Inspected, job-ready heavy construction machinery delivered to site',
      'Certified equipment operators and field maintenance support',
      'Flexible daily, weekly, or monthly plant hire contracts'
    ],
    approach: 'All company plant and machinery are maintained on a strict preventative schedule by experienced mechanics to guarantee zero breakdown delays on active project sites.',
    whyItMatters: 'Direct ownership and deployment of heavy machinery eliminates third-party rental bottlenecks, speeding up construction timelines and reducing client costs.',
    iconName: 'Truck'
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Architecture & Design',
    description: 'Bioclimatic architectural concepts, 3D photorealistic modeling, landscaping, and bespoke interior decoration.',
    services: SERVICES_DATA.filter(s => s.category === 'Architecture & Design')
  },
  {
    name: 'Civil & Construction',
    description: 'Turnkey building construction, deep foundations, concrete retaining walls, reinforcement, helical stairs, and interlocking.',
    services: SERVICES_DATA.filter(s => s.category === 'Civil & Construction')
  },
  {
    name: 'Structural Steel',
    description: 'Long-span tubular steel space frames, industrial warehouse trusses, and anti-corrosive metal structures.',
    services: SERVICES_DATA.filter(s => s.category === 'Structural Steel')
  },
  {
    name: 'MEP & Energy',
    description: 'Mechanical & electrical engineering, 120kVA+ solar mini-grids, 11/0.415kV substations, and earthing works.',
    services: SERVICES_DATA.filter(s => s.category === 'MEP & Energy')
  },
  {
    name: 'Surveying & Plant Hire',
    description: 'Professional quantity surveying, Bills of Quantities, and commercial leasing of heavy construction plants & trucks.',
    services: SERVICES_DATA.filter(s => s.category === 'Surveying & Plant Hire')
  }
];
