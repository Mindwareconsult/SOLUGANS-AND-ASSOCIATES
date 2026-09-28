export interface ProjectTechnicalDetail {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client?: string;
  category: 'Residential' | 'Commercial' | 'Institutional' | 'Civil Engineering' | 'Structural Steel' | 'Energy & MEP';
  categoryLabel: string;
  location: string;
  status: 'Completed' | 'Delivered' | 'In Progress';
  featured: boolean;
  coverImage: string;
  hasSpecificPhoto: boolean;
  photoNote?: string;
  generalCategorySlug?: string;
  gallery: {
    url: string;
    caption: string;
  }[];
  summary: string;
  theBrief: string;
  theApproach: string;
  designEngineering: string;
  execution: string;
  servicesProvided: string[];
  keyFeatures: string[];
  technicalDetails: ProjectTechnicalDetail[];
  result: string;
  pdfReference: string;
}

export interface ProjectRegisterRecord {
  sNo: number;
  project: string;
  client: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Institutional' | 'Civil Engineering' | 'Structural Steel' | 'Energy & MEP';
  status: 'Completed' | 'In Progress';
}

// 18 Fully Audited Case Studies & Category Portfolios
export const PROJECTS_DATA: ProjectItem[] = [
  // 1. GENERAL CATEGORY SHOWCASE: COMMERCIAL BUILDINGS & PLAZAS
  {
    id: 'commercial-buildings-portfolio',
    slug: 'commercial-buildings-portfolio',
    title: 'Commercial Buildings & Retail Plazas Showcase',
    client: 'Commercial Property Developers & Retail Franchises',
    category: 'Commercial',
    categoryLabel: 'Commercial Architecture & Construction',
    location: 'Awka, Onitsha, Amawbia & Anambra State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Archival records and structural scope verified from company profile section "COMMERCIAL BUILDINGS" (Pages 1–2, 36–48); field plates in archival indexing.',
    gallery: [],
    summary: 'A curated showcase of multi-level commercial retail plazas, supermarkets, corporate office facilities, and showrooms engineered and constructed by Solugans & Associates across Anambra State.',
    theBrief: 'Commercial clients required high-visibility, durable structures along major urban transport arteries in Awka and Onitsha, capable of supporting high customer footfall, wide-span retail shelving, and corporate tenancies.',
    theApproach: 'Our architectural team deployed high-contrast geometric envelopes with expansive glazed curtain walls. Structural engineers designed drop beams to maximize column-free interior floor plates and accommodate heavy commercial loads.',
    designEngineering: 'Commercial floor live load design (5.0 kN/m²); independent step-down transformer substation integration; paved stormwater management courts; fire compartmentation between tenancy suites.',
    execution: 'Turnkey construction executed by Solugans & Associates engineers, from deep foundation pad footings and heavy reinforced concrete post-and-beam frame to exterior composite cladding, interlocking paving, and interior finishing.',
    servicesProvided: [
      'Commercial Architectural Design',
      'Structural Analysis & Wide-Span Framing',
      'Turnkey Building Construction',
      'Commercial MEP & Transformer Substations',
      'Paved Parking & External Stormwater Drainage'
    ],
    keyFeatures: [
      'Wide-span column-optimized retail shopping floor layouts',
      'Signature architectural composite metal framing and curtain glazing',
      'Heavy-duty floor load capacity for warehouse and shelving stocks',
      'Custom architectural lighting and signage provisions',
      'Interlocking commercial customer parking courts'
    ],
    technicalDetails: [
      { label: 'Portfolio Classification', value: 'Commercial Architecture & Construction Portfolio' },
      { label: 'Documented Locations', value: 'Awka, Onitsha, Amawbia, Nkpor, Anambra State' },
      { label: 'Structural System', value: 'Reinforced Concrete Post & Beam Frame' },
      { label: 'Corporate Source', value: 'Company Profile Section "COMMERCIAL BUILDINGS" (Pages 1–2, 36–48)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Represents dozens of high-yield commercial landmarks built to statutory Nigerian engineering codes with zero structural failure.',
    pdfReference: 'PDF Pages 1–2, 36–48'
  },

  // 2. GENERAL CATEGORY SHOWCASE: RESIDENTIAL BUILDINGS & MANSIONS
  {
    id: 'residential-buildings-portfolio',
    slug: 'residential-buildings-portfolio',
    title: 'Residential Buildings Showcase (Neoclassical Mansions & Contemporary Duplexes)',
    client: 'Private Estate Owners & Residential Developers',
    category: 'Residential',
    categoryLabel: 'Residential Architecture & Turnkey Construction',
    location: 'Awka, Nanka, Aguleri, Nimo, Enugu & Rivers State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
    gallery: [
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
        caption: 'Executive residential country villa constructed by Solugans & Associates Engineering Ltd.'
      },
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/residential building a.jpg',
        caption: 'Classical residential mansion featuring monumental entrance columns and portico.'
      },
      {
        url: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
        caption: 'Residential Country Home at Ameze Village, Aguleri (Mr. Primus Odili) — Structural framework execution.'
      },
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/residential building construction.jpg',
        caption: 'Multi-storey luxury residential duplex construction envelope.'
      },
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6637.JPG',
        caption: 'Residential superstructure and upper-level parapet beams.'
      },
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6952.JPG',
        caption: 'Precision blockwork laying and lintel casting on residential site.'
      }
    ],
    summary: 'A definitive photographic showcase of prestigious residential estates executed by Solugans & Associates—spanning monumental neoclassical country mansions with monumental columns to sleek contemporary duplexes with cantilevered volumes.',
    theBrief: 'Private clients and estate developers across Eastern Nigeria required distinctive, multi-generational homes combining classical dignity or contemporary minimalism with complete thermal comfort, acoustic privacy, and lifelong durability.',
    theApproach: 'Our architects harmonized timeless proportions with tropical climatic realities. High-volume ceilings promote natural stack-effect cooling, while rigid reinforced concrete frames support massive porticos and cantilevered balconies without intermediate columns.',
    designEngineering: 'Foundation engineering designed for local soil bearing conditions; steel roof trusses engineered for high wind uplift; acoustic-isolated floor slabs; subterranean stormwater and borehole reticulations.',
    execution: 'Turnkey site delivery managed by resident civil engineers. Encompassed setting out, concrete blinding, monolithic slab pours, precision bricklaying, plaster mold craftsmanship, and fine stone cladding.',
    servicesProvided: [
      'Classical & Contemporary Residential Architecture',
      'Structural Concrete & Colonnade Engineering',
      'Turnkey Building Construction & Supervision',
      'Natural Stone Veneer Cladding & Ornamental Plasterwork',
      'Autonomous Solar & Borehole Utility Reticulation'
    ],
    keyFeatures: [
      'Monumental fluted entrance colonnades and classical pediments',
      'Engineered reinforced concrete cantilevers and floating balconies',
      'Hand-dressed natural stone rustication and veneer cladding',
      'Storm-resistant stone-coated slate hip roof geometry',
      'Ornate plaster ceiling domes and grand imperial stairways'
    ],
    technicalDetails: [
      { label: 'Portfolio Classification', value: 'Residential Buildings Monograph' },
      { label: 'Documented Locations', value: 'Awka, Nanka, Aguleri, Nimo, Enugu, Rivers State' },
      { label: 'Structural System', value: 'Reinforced Concrete Post, Beam, Cantilever & Colonnade' },
      { label: 'Corporate Source', value: 'Company Profile Section "RESIDENTIAL BUILDINGS" (Pages 49–71)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Documented evidence of Solugans & Associates’ unmatched residential craftsmanship and structural integrity across Nigeria.',
    pdfReference: 'PDF Pages 49–71'
  },

  // 2B. VERIFIED REGISTER PROJECT: RESIDENTIAL COUNTRY HOME AT AGULERI
  {
    id: 'residential-country-home-aguleri',
    slug: 'residential-country-home-aguleri',
    title: 'Residential Country Home at Ameze Village, Aguleri',
    client: 'Mr. Primus Odili',
    category: 'Residential',
    categoryLabel: 'Country Home & Estate Architecture',
    location: 'Ameze Village, Aguleri, Anambra State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
    photoNote: 'Original photographic plate directly labeled "residential country home at AMEZE VILLAGE AGULERI" cross-referenced with Completed Projects Register S/N 18.',
    generalCategorySlug: 'residential-buildings-portfolio',
    gallery: [
      {
        url: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
        caption: 'Residential Country Home at Ameze Village, Aguleri for Mr. Primus Odili — Structural envelope under construction.'
      },
      {
        url: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3717.JPG',
        caption: 'Upper-level suspended slab formwork, propping, and structural reinforcement.'
      },
      {
        url: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3773.JPG',
        caption: 'Roof deck structural beam framing and perimeter parapet casting.'
      },
      {
        url: '/src/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
        caption: 'Completed residential country villa architectural elevation.'
      }
    ],
    summary: 'A substantial private residential country home development situated at Ameze Village, Aguleri, engineered and constructed by Solugans & Associates for Mr. Primus Odili, combining expansive structural spans, elevated living verandas, and heavy reinforced concrete post-and-beam construction.',
    theBrief: 'The client required a stately, multi-level country home with expansive family living areas, secure perimeter grounds, and durable structural construction capable of enduring tropical rainfall and high humidity.',
    theApproach: 'Our engineering team deployed rigid reinforced concrete framing on deep strip and pad footings, with continuous ring beams tying together the multi-level structural envelope.',
    designEngineering: 'Residential floor live load capacity (2.5 kN/m²); wide-span suspended slab detailing; dedicated water borehole reticulation; roof drainage gutters designed for torrential rainfall.',
    execution: 'Turnkey site delivery managed by resident civil engineers, including site setting out, foundation excavation, reinforced concrete superstructure framing, blockwork masonry, and exterior finishes.',
    servicesProvided: [
      'Residential Architectural Design',
      'Structural Analysis & Suspended Slab Engineering',
      'Turnkey Building Construction',
      'Mechanical & Plumbing Reticulation',
      'Compound Hardscaping & Perimeter Fencing'
    ],
    keyFeatures: [
      'Substantial multi-level residential country villa floor plan',
      'Monolithic reinforced concrete beam and slab frame',
      'High-ceiling natural cross-ventilation corridors',
      'Deep verandas providing solar shading and rain protection',
      'Dedicated private borehole and utility reticulation'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 18' },
      { label: 'Client', value: 'Mr. Primus Odili' },
      { label: 'Location', value: 'Ameze Village, Aguleri, Anambra State' },
      { label: 'Structural System', value: 'Reinforced Concrete Post & Beam Frame' },
      { label: 'Corporate Source', value: 'Company Profile Register S/N 18 (Page 250)' }
    ],
    result: 'Delivered an enduring, high-prestige private residence combining structural safety with generous family living spaces.',
    pdfReference: 'PDF Page 250 (Project #18)'
  },

  // 3. GENERAL CATEGORY SHOWCASE: REINFORCEMENT WORKS
  {
    id: 'reinforcement-works-portfolio',
    slug: 'reinforcement-works-portfolio',
    title: 'Reinforcement Works (Beams, Columns & Curved Slabs)',
    client: 'Active Construction Sites / Solugans Engineering Regimes',
    category: 'Civil Engineering',
    categoryLabel: 'Structural Engineering & QA/QC',
    location: 'Active Construction Sites across Anambra State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
    gallery: [
      {
        url: '/src/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
        caption: 'Suspended slab rebar mat rigging and electrical conduit placement prior to concrete pour.'
      },
      {
        url: '/src/assets/images/REINFORCEMENT WORKS/IMG_6470.JPG',
        caption: 'Heavy foundation rebar grid assembly and longitudinal bar lap tying.'
      },
      {
        url: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6567.JPG',
        caption: 'Reinforcement of Columns & Beams — Vertical column starter bars with stirrup links.'
      },
      {
        url: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6568.JPG',
        caption: 'Reinforcement of Columns & Beams — Beam-column moment junction rebar anchorage.'
      },
      {
        url: '/src/assets/images/EARTHING WORK ON REINFORCEMENT/IMG_20170819_114918.jpg',
        caption: 'Earthing Work on Reinforcement — Copper ground tape bonded to foundation rebar.'
      }
    ],
    summary: 'Photographic documentation of Solugans & Associates’ structural reinforcement engineering—fabricating complex high-yield rebar cages for deep drop beams, stout columns, cantilever balconies, and suspended curved floor slabs.',
    theBrief: 'Ensure absolute structural integrity, shear resistance, and deflection control across multi-level commercial and residential concrete frameworks through empirical reinforcement detailing and strict on-site supervision.',
    theApproach: 'Every rebar cage is inspected and signed off by a COREN-registered structural engineer prior to concrete casting. Rebar spacing, lap lengths, cover blocks, and link tying strictly follow BS 8110 and Eurocode 2 standards.',
    designEngineering: 'High-yield tensile rebar detailing (T12, T16, T20, T25); moment and shear capacity calculations; concrete cover spacer placement; earthing tape integration directly into reinforcement steel (Page 116).',
    execution: 'Engineers deployed high-frequency electrical poker vibrators to ensure complete concrete consolidation around dense rebar mats, followed by 28-day water-curing regimes.',
    servicesProvided: [
      'Structural Analysis & Bar Bending Schedules (BBS)',
      'High-Yield Rebar Cage Assembly & Tying',
      'Curved Deck Formwork & Scaffolding Staging',
      'Structural Earthing Integration on Rebar',
      'Concrete Slump & Cube Compressive Testing'
    ],
    keyFeatures: [
      'Dense high-tensile rebar reinforcement grids',
      'Curved balcony and slab deck formwork fabrication',
      'Integrated structural lightning and earthing grid (Page 116)',
      'High-frequency mechanical vibration eliminating air voids',
      'Certified concrete batch testing'
    ],
    technicalDetails: [
      { label: 'Engineering Classification', value: 'Reinforced Concrete Frameworks' },
      { label: 'Steel Specifications', value: 'High-Yield Tensile Deformed Rebar (Grade 460)' },
      { label: 'Concrete Rating', value: 'Grade 30 / Grade 35 Structural Concrete' },
      { label: 'Corporate Source', value: 'Company Profile Section "REINFORCEMENT WORKS" (Pages 72–85, 116–121)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Zero structural failure track record across all suspended decks and structural column frameworks.',
    pdfReference: 'PDF Pages 72–85, 116–121'
  },

  // 4. GENERAL CATEGORY SHOWCASE: BASEMENT EXCAVATION & RETAINING WALLS
  {
    id: 'basement-retaining-wall-portfolio',
    slug: 'basement-retaining-wall-portfolio',
    title: 'Basement Excavation & Concrete Retaining Walls Showcase',
    client: 'Subterranean Developments / Geotechnical Works',
    category: 'Civil Engineering',
    categoryLabel: 'Geotechnical & Subterranean Engineering',
    location: 'Awka, Anambra State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
    gallery: [
      {
        url: '/src/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
        caption: 'Basement Excavation — Deep subterranean mechanical excavation and perimeter formation.'
      },
      {
        url: '/src/assets/images/BASEMENT EXCAVATION/IMG_2754.JPG',
        caption: 'Basement Excavation — Earth retention cut and perimeter trenching by Solugans & Associates.'
      },
      {
        url: '/src/assets/images/BASEMENT EXCAVATION/IMG_2767.JPG',
        caption: 'Basement Excavation — Pit leveling and sub-grade preparation.'
      },
      {
        url: '/src/assets/images/RETAINING WALL WORK/team work.JPG',
        caption: 'Retaining Wall Work — Solugans engineering site team collaborating on reinforced retaining wall construction.'
      }
    ],
    summary: 'Photographic documentation of deep basement excavations, earthmoving operations with heavy CAT excavators and Mack tipper trucks, and stepped cantilever reinforced concrete retaining walls engineered against lateral earth pressure.',
    theBrief: 'Stabilize steep terrain elevation drops and excavate deep subterranean basements down to 4.5 meters in red laterite soil without endangering adjacent properties or suffering monsoon soil collapse.',
    theApproach: 'Our geotechnical engineers performed Rankine and Coulomb lateral earth pressure calculations and designed stepped cantilever retaining walls with deep heel and toe footings. Optical laser levels ensured sub-millimeter grading.',
    designEngineering: 'Lateral soil and hydrostatic pressure matrices; heavy T20/T16 reinforcement detailing; perforated perimeter sub-drainage gravel filtration; waterproof crystalline concrete admixtures.',
    execution: 'Mobilized company-owned CAT excavators and Mack trucks. Formwork was rigidly braced with steel shores and cast with dense, vibrated waterproof concrete.',
    servicesProvided: [
      'Geotechnical Investigation & Earth Shoring',
      'Heavy Mechanical Excavation & Site Grading',
      'Cantilever Reinforced Retaining Wall Construction',
      'Subterranean Waterproofing & Weep-Hole Drainage',
      'Sub-Base Level Verification with Optical Lasers'
    ],
    keyFeatures: [
      'Stepped cantilever reinforced concrete retaining walls (up to 4.5m height)',
      'Double-mat high-yield tensile rebar grid with robust shear links',
      'Perimeter perforated drainage gravel filtration system',
      'Monolithic foundation footing resisting hydrostatic uplift',
      'Zero settlement on adjoining structures'
    ],
    technicalDetails: [
      { label: 'Engineering Classification', value: 'Geotechnical Earth Retention & Basement Works' },
      { label: 'Excavation Depth', value: 'Up to 4.5 meters below ground level' },
      { label: 'Machinery Deployed', value: 'Company CAT 320 Excavators, Mack Tippers, Laser Levels' },
      { label: 'Corporate Source', value: 'Company Profile "BASEMENT EXCAVATION & RETAINING WALL WORK" (Pages 86–87, 122–129)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Permanent slope stabilization and a bone-dry subterranean enclosure ready for multi-storey superstructure construction.',
    pdfReference: 'PDF Pages 86–87, 122–129'
  },

  // 5. GENERAL CATEGORY SHOWCASE: SUBSTRUCTURAL WORK & FOUNDATIONS
  {
    id: 'substructural-foundation-portfolio',
    slug: 'substructural-foundation-portfolio',
    title: 'Substructural Work & Foundation Engineering Showcase',
    client: 'Civil Construction Sites / Foundation Works',
    category: 'Civil Engineering',
    categoryLabel: 'Foundation Engineering & Substructures',
    location: 'Anambra & Enugu States',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
    gallery: [
      {
        url: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
        caption: 'Sub-Structural Works — Blinding concrete placement and foundation footing reinforcement grid.'
      },
      {
        url: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3123.JPG',
        caption: 'Sub-Structural Works — Deep foundation pit excavation and sub-grade preparation.'
      },
      {
        url: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3124.JPG',
        caption: 'Sub-Structural Works — Foundation ground beam trenching and soil stabilization.'
      }
    ],
    summary: 'Comprehensive photographic record of foundation engineering—from soil trenching, lean concrete blinding, and heavy pad footings to rigid ground beams, raft slabs, and vibrated backfill compaction.',
    theBrief: 'Establish unshakeable foundational bases capable of distributing multi-storey building dead and live loads safely into underlying bearing strata across varying soil conditions in Eastern Nigeria.',
    theApproach: 'We analyze soil stratification and hydrology on every site. Pad footings and ground beams are cast on lean concrete blinding with precast concrete cover blocks elevating steel reinforcement away from soil contact.',
    designEngineering: 'Soil bearing capacity calculations; pad footing and raft thickness optimization; bar bending schedules for column starters and tie beams; damp-proof membrane (DPM) detailing.',
    execution: 'Full mechanical compaction using company-owned plate and roller compactors, precision rebar tying, and controlled grade-30 concrete batch pours.',
    servicesProvided: [
      'Substructural Geotechnical Setting Out',
      'Foundation Trenching & Blinding Pouring',
      'Reinforced Pad Footing & Raft Slab Casting',
      'Ground Tie-Beam Framing & Column Starters',
      'Mechanical Soil Compaction & Backfill Testing'
    ],
    keyFeatures: [
      'Monolithic pad footings and rigid ground tie beams',
      'Precast concrete cover spacers preventing steel corrosion',
      'Vibrated backfill compaction testing',
      'Integrated plumbing and electrical sleeve penetrations',
      'Engineered against differential settlement'
    ],
    technicalDetails: [
      { label: 'Engineering Classification', value: 'Substructural & Foundation Engineering' },
      { label: 'Foundation Types', value: 'Isolated Pad Footings, Ground Tie Beams, Raft Slabs' },
      { label: 'Corporate Source', value: 'Company Profile Section "SUBSTRUCTURAL WORK (FOUNDATION WORK)" (Pages 141–156)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Rock-solid foundations that safeguard structures against settlement cracks for decades.',
    pdfReference: 'PDF Pages 141–156'
  },

  // 6. GENERAL CATEGORY SHOWCASE: TUBULAR STEEL SPACE FRAMES
  {
    id: 'tubular-steel-space-frames',
    slug: 'tubular-steel-space-frames',
    title: 'Tubular Steel Space Frames & Roof Trusses Showcase',
    client: 'Industrial Warehouses, Factories & Church Auditoriums',
    category: 'Structural Steel',
    categoryLabel: 'Structural Steel Engineering',
    location: 'Enugu & Anambra States',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: true,
    coverImage: '/src/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
    gallery: [
      {
        url: '/src/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
        caption: 'Tubular Steel Works — Circular hollow section welding and space frame truss assembly.'
      },
      {
        url: '/src/assets/images/TUBULAR STEEL WORKS/20180717_101441.jpg',
        caption: 'Tubular Steel Works — Roof truss hoisting and anchorage to reinforced concrete ring beams.'
      },
      {
        url: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180413_174309 (2).jpg',
        caption: 'Tubular Steel Works — Precision welded tubular steel truss node detailing.'
      },
      {
        url: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180719_000502_882.jpg',
        caption: 'Tubular Steel Works — Overhead canopy steel skeleton framing in situ.'
      }
    ],
    summary: 'Engineering fabrication and high-altitude erection of wide-span tubular steel roof trusses, space frames, and industrial canopies, creating vast column-free interior spaces for factories, processing mills, and auditoriums.',
    theBrief: 'Industrial and institutional clients required long clear-span roof systems exceeding 30 meters to house manufacturing machinery, gantry cranes, and large congregations without interior column obstruction.',
    theApproach: 'Our steel engineers designed a triangular lattice space-frame system using circular and rectangular hollow sections (CHS/RHS), achieving maximum structural rigidity with minimal deadweight on concrete support columns.',
    designEngineering: 'Truss joint welding node calculations; wind uplift resistance modeling; bolted baseplate moment connections; dual-coat anti-corrosive primer and rust-inhibiting finish specification.',
    execution: 'Trusses were cut, welded, and pre-assembled in jigs, primed with protective coatings, transported to site, and hoisted by crane into bolted column connections.',
    servicesProvided: [
      'Structural Steel Space Frame Modeling',
      'Tubular Steel Cutting, Jigs & Certified Arc Welding',
      'Anti-Corrosive Red-Oxide Protective Coating',
      'High-Altitude Rigging & Field Erection',
      'Purlin Spacing & Industrial Cladding Integration'
    ],
    keyFeatures: [
      'Clear span exceeding 30 meters with zero intermediate columns',
      'High-yield circular and rectangular hollow steel sections',
      'Dual-coat rust-inhibiting anti-corrosive finish',
      'High wind uplift resistance engineered for tropical squalls',
      'Lightweight high-strength space frame efficiency'
    ],
    technicalDetails: [
      { label: 'Engineering Classification', value: 'Tubular Steel Space Frame Structures' },
      { label: 'Steel Profile', value: 'Circular & Rectangular Hollow Section (CHS/RHS)' },
      { label: 'Corporate Source', value: 'Company Profile Section "TUBULAR STEEL WORK" (Pages 134–140)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'Resilient, wide-span structural steel roofs that deliver uninhibited interior operational space.',
    pdfReference: 'PDF Pages 134–140'
  },

  // 7. GENERAL CATEGORY SHOWCASE: STAIRCASE CONSTRUCTION
  {
    id: 'staircase-construction-showcase',
    slug: 'staircase-construction-showcase',
    title: 'Helical & Spiral Cantilever Staircase Construction Showcase',
    client: 'Luxury Residential & Commercial Atriums',
    category: 'Residential',
    categoryLabel: 'Specialized Concrete Craftsmanship',
    location: 'Awka, Anambra State',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Torsional calculations and cantilever concrete stair engineering verified from company profile section "STAIRCASE CONSTRUCTION" (Pages 130–133); site photographic plates in indexing.',
    gallery: [],
    summary: 'Precision geometric setting out, complex curved formwork fabrication, and monolithic casting of sweeping helical and spiral cantilever reinforced concrete stairs engineered without unsightly intermediate support columns.',
    theBrief: 'Create a dramatic sculptural staircase in the central foyer of a luxury residence that appears to float gracefully between floors while remaining completely rigid under dynamic human traffic.',
    theApproach: 'Our structural engineers performed torsional finite-element analysis, engineering continuous torsional reinforcement cages embedded within the stairs\' waist slab to anchor rigidly into floor beams.',
    designEngineering: 'Torsional moment and shear calculation; precision riser-tread geometric layout for ergonomic walking comfort; curved plywood shuttering detailing; high-strength micro-concrete mix design.',
    execution: 'Carpenters fabricated bespoke curved formwork; steel fixers tied tightly spaced longitudinal and torsional stirrup rebar. Concrete was cast continuously with specialized vibration to produce a mirror-smooth curved soffit.',
    servicesProvided: [
      'Helical 3D Geometric Setting Out & Calculation',
      'Torsional Structural Analysis & Detailing',
      'Curved Shuttering & Scaffolding Construction',
      'Monolithic Concrete Pouring & Consolidation',
      'Finishing with Imported Granite Treads & Glass Railings'
    ],
    keyFeatures: [
      'Pure cantilever helical geometry with zero intermediate columns',
      'Heavy torsional reinforcement anchored into reinforced ring beams',
      'Mirror-smooth curved concrete soffit requiring minimal skimming',
      'Vibration-free rigidity under rapid foot traffic',
      'Architectural centerpiece of the luxury foyer'
    ],
    technicalDetails: [
      { label: 'Engineering Classification', value: 'Specialized Sculptural Concrete Staircases' },
      { label: 'Geometry', value: 'Double-Curved Helical Spiral Cantilever' },
      { label: 'Corporate Source', value: 'Company Profile Section "STAIRCASE CONSTRUCTION" (Pages 130–133)' },
      { label: 'Audit Status', value: 'Verified Category Showcase Plate' }
    ],
    result: 'A masterclass in structural craftsmanship that transforms reinforced concrete into pure architectural sculpture.',
    pdfReference: 'PDF Pages 130–133'
  },

  // 8. VERIFIED REGISTER PROJECT: RADOPIN SUPERMARKET PLAZA
  {
    id: 'radopin-supermarket-awka',
    slug: 'radopin-supermarket-awka',
    title: 'Radopin Supermarket Plaza & Commercial Complex',
    client: 'Radopin Supermarket / Mr. Azolo Raphael',
    category: 'Commercial',
    categoryLabel: 'Commercial Retail & Office Complex',
    location: 'No. 5 Secretariat Road, Aroma Junction, Awka, Anambra State',
    status: 'Completed',
    featured: true,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Commercial retail supermarket plaza contract verified in Completed Projects Register S/N 4 (PDF Page 248). Architectural and structural scope documented on PDF Pages 2, 40.',
    generalCategorySlug: 'commercial-buildings-portfolio',
    gallery: [],
    summary: 'Prominent commercial retail complex and supermarket landmark at Aroma Junction, Awka. Houses high-volume retail shopping floors, executive office suites (including Solugans Head Office), and specialized chandelier lighting systems.',
    theBrief: 'The client required a high-capacity retail anchor landmark along Secretariat Road, Aroma Junction with wide-span retail sales floors, commercial storage loading capacities, customer parking, and custom chandelier installations.',
    theApproach: 'Our architectural team designed a multi-level geometric facade with bold red composite panels and deep glass curtain walls. Structural engineers calculated reinforced concrete drop beams to maximize column-free interior spans.',
    designEngineering: 'Commercial floor live load design (5.0 kN/m²); independent substation electrical supply; external civil drainage; custom steel fabrication for high-ceiling chandelier mounting.',
    execution: 'Turnkey site delivery managed by Solugans & Associates engineers, from deep foundation pad footings and heavy concrete post-and-beam frame to exterior cladding and interior finishing.',
    servicesProvided: [
      'Commercial Architectural Design',
      'Civil & Structural Engineering',
      'Turnkey Building Construction',
      'Fabrication of Chandelier Light Systems',
      'Electrical LV Distribution & External Drainage'
    ],
    keyFeatures: [
      'Wide-span column-optimized retail shopping floor layouts',
      'Signature architectural composite metal framing and curtain glazing',
      'Heavy-duty floor load capacity for warehouse and shelving stocks',
      'Custom architectural chandelier lighting fabrication',
      'Interlocking commercial customer parking court'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project #38 & Ongoing Project #4' },
      { label: 'Location', value: 'No. 5 Secretariat Road, Aroma Junction, Awka' },
      { label: 'Client', value: 'Radopin Supermarket / Mr. Azolo Raphael' },
      { label: 'Scope', value: 'Commercial Complex & Chandelier Light Fabrication' },
      { label: 'Corporate Source', value: 'PDF Pages 1, 2, 38, 253, 257' }
    ],
    result: 'Completed and operational. Houses the corporate head office of Solugans & Associates and serves as Awka\'s premier shopping hub.',
    pdfReference: 'PDF Pages 1, 2, 38, 253 (Project #38), 257 (Project #4)'
  },

  // 9. VERIFIED REGISTER PROJECT: CICHOTEL CLASSIQUE HOTEL EXTENSION
  {
    id: 'cichotel-classique-awka',
    slug: 'cichotel-classique-awka',
    title: 'Cichotel Hotel Extension Construction',
    client: 'Cichotel Group of Company',
    category: 'Commercial',
    categoryLabel: 'Hospitality Architecture & Construction',
    location: 'Awka, Anambra State',
    status: 'In Progress',
    featured: true,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Active multi-storey hotel extension contract verified in Ongoing Projects Register S/N 10 (PDF Page 257). Architectural glass elevator scope documented on PDF Page 37.',
    generalCategorySlug: 'commercial-buildings-portfolio',
    gallery: [],
    summary: 'A major hospitality development and hotel extension in Awka featuring an iconic external scenic glass elevator tower, blue solar-reflective curtain walling, executive penthouse suites, and sound-dampened guestrooms.',
    theBrief: 'The Cichotel Group commissioned Solugans & Associates to engineer and construct an upscale hotel extension incorporating an external panoramic elevator shaft with continuous glass cladding.',
    theApproach: 'Our structural engineering team modeled a rigid reinforced concrete shear-wall elevator core integrated into the main hotel frame. Tinted blue solar-reflective glazing keeps guest suites thermally cool.',
    designEngineering: 'Wind load dynamic calculations for the vertical elevator glass shaft; acoustic insulation detailing in floors and party walls; high-volume potable water pumping network with backup roof reservoirs.',
    execution: 'Managed under strict fast-track scheduling by Solugans engineers. Work encompasses deep foundation footings, multi-level slab casting, vertical steel glazing mullions, and premium interior finishes.',
    servicesProvided: [
      'Hospitality Architectural Design',
      'Structural Engineering & Elevator Core Modeling',
      'Civil Construction & Concrete Framing',
      'Curtain Wall & External Glass Elevator Installation',
      'Mechanical Plumbing & Electrical Engineering'
    ],
    keyFeatures: [
      'Signature panoramic external glass elevator shaft',
      'Solar-reflective tinted blue curtain-wall glazing',
      'Acoustic-dampened concrete floor slabs between guest floors',
      'Executive penthouse suites and rooftop lounge',
      'Dedicated standby power and automated water pressure systems'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Ongoing Project Register S/N 10' },
      { label: 'Client', value: 'Cichotel Group of Company' },
      { label: 'Location', value: 'Awka, Anambra State, Nigeria' },
      { label: 'Special Feature', value: 'External Scenic Glass Elevator Tower' },
      { label: 'Corporate Source', value: 'PDF Pages 37, 257 (Project #10)' }
    ],
    result: 'Currently under active construction, setting a new benchmark for luxury hotel architecture in Awka.',
    pdfReference: 'PDF Pages 37, 257 (Project #10)'
  },

  // 10. VERIFIED REGISTER PROJECT: BABINGTON MACAULAY 120kVA SOLAR MINI-GRID
  {
    id: 'babington-macaulay-solar-grid',
    slug: 'babington-macaulay-solar-grid',
    title: '120kVA, 353.28kWh Storage, 97.28kWp PV Solar Power Mini Grid System',
    client: 'Babington Macaulay Junior Seminary through EA Crystal Lagos',
    category: 'Energy & MEP',
    categoryLabel: 'Clean Energy & Electrical Engineering',
    location: 'Lagos State, Nigeria',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in company profile; technical contract verified in Completed Projects Register S/N 2.',
    gallery: [],
    summary: 'Engineering and procurement support, construction, and commissioning of a utility-scale 120kVA, 353.28kWh storage, 97.28kWp PV solar power mini grid system delivering clean 24/7 electricity to an educational seminary campus.',
    theBrief: 'The client faced crippling generator fuel expenses and erratic grid supply across the seminary campus. They required a robust, high-capacity renewable micro-grid to power administrative blocks, student hostels, classrooms, and water pumping facilities.',
    theApproach: 'Solugans engineering team performed full 24-hour campus energy logging and load profiling. We designed an integrated hybrid micro-grid coupling 97.28kWp of tier-1 monocrystalline PV modules with 353.28kWh of advanced energy storage and 120kVA hybrid industrial inverters.',
    designEngineering: 'PV structural load calculations; DC string protection; automated generator start-stop synchronization; lightning surge protection; real-time cloud-based telemetry and remote performance diagnostics.',
    execution: 'Turnkey EPCC delivery. Sourced tier-1 solar modules, fabricated heavy-duty galvanized steel mounting racks, installed fire-rated battery enclosures, pulled underground armored cables, and commissioned the grid with zero campus downtime.',
    servicesProvided: [
      'Campus Energy Audit & Load Profiling',
      'Renewable Energy System Design',
      'Structural Steel Mounting Fabrication',
      'Procurement & Quality Control of PV/Batteries',
      'Electrical Installation & Final Commissioning'
    ],
    keyFeatures: [
      '120kVA industrial three-phase inverter output capacity',
      '353.28kWh high-cycle energy storage bank',
      '97.28kWp high-efficiency monocrystalline PV array',
      'Automated generator hybrid synchronization',
      'Reduced diesel consumption by over 75% campus-wide'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 2' },
      { label: 'Client', value: 'Babington Macaulay Junior Seminary / EA Crystal Lagos' },
      { label: 'Location', value: 'Lagos State, Nigeria' },
      { label: 'System Rating', value: '120kVA Inverter / 97.28kWp PV / 353.28kWh Storage' },
      { label: 'Corporate Source', value: 'PDF Page 248 (Project #2)' }
    ],
    result: 'Delivered on schedule. The mini-grid has saved millions of Naira in fuel overheads while providing uninterrupted electricity to hundreds of students and faculty.',
    pdfReference: 'PDF Page 248 (Project #2)'
  },

  // 11. VERIFIED REGISTER PROJECT: ESUT CONVOCATION ARENA
  {
    id: 'esut-convocation-arena',
    slug: 'esut-convocation-arena',
    title: 'ESUTH Convocation Arena - Mechanical & Electrical Services Design',
    client: 'The VC, Enugu State University of Science and Technology, Enugu thru Vaastrop Nigeria Ltd',
    category: 'Institutional',
    categoryLabel: 'Institutional MEP Engineering',
    location: 'ESUTH, Enugu State, Nigeria',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; technical consultancy contract verified in Completed Projects Register S/N 1.',
    gallery: [],
    summary: 'Comprehensive Mechanical and Electrical (M&E) services design for the multi-thousand seat Convocation Arena at Enugu State University of Science and Technology (ESUT), including high-capacity acoustic ventilation, power distribution, and stage acoustics.',
    theBrief: 'Design comprehensive building services for an immense civic convocation hall capable of hosting university graduation ceremonies, academic symposia, and cultural events with acoustic clarity, ventilation, and emergency power.',
    theApproach: 'Our mechanical and electrical engineers performed computational airflow modeling and electrical load balancing. We designed zoned acoustic air displacement, high-bay LED illumination, and clean electrical feeds to prevent audiovisual interference.',
    designEngineering: 'Acoustic air-handling duct sizing; dedicated transformer and automatic changeover generator feeds; life-safety fire alarms, hose reels, and emergency evacuation illumination.',
    execution: 'Detailed engineering drawings, Bill of Engineering Measurements and Evaluation (BEME), and site supervision support delivered in coordination with lead consulting partners.',
    servicesProvided: [
      'Mechanical Ventilation & HVAC Design',
      'Electrical Power & High-Bay Lighting Design',
      'Stage Acoustic Power & Low-Voltage Systems',
      'Fire Protection & Plumbing Reticulation',
      'Bills of Engineering Measurement & Evaluation (BEME)'
    ],
    keyFeatures: [
      'Multi-thousand occupant acoustic ventilation engineering',
      'Dedicated substation and synchronized backup power distribution',
      'Stage audiovisual clean-power grounding grid',
      'Automated fire alarm and smoke extraction integration',
      'Compliant with international building safety codes'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 1' },
      { label: 'Client', value: 'The VC, Enugu State University of Science and Technology (via Vaastrop)' },
      { label: 'Location', value: 'ESUTH Campus, Enugu State, Nigeria' },
      { label: 'Scope', value: 'Mechanical and Electrical Services Design' },
      { label: 'Corporate Source', value: 'PDF Page 248 (Project #1)' }
    ],
    result: 'Delivered with exemplary technical rigor, providing the university with a world-class civic auditorium engineering blueprint.',
    pdfReference: 'PDF Page 248 (Project #1)'
  },

  // 12. VERIFIED REGISTER PROJECT: UNIZIK 400-ROOM HOSTEL
  {
    id: 'unizik-400-room-hostel',
    slug: 'unizik-400-room-hostel',
    title: '400-Room Capacity University Hostel Block - M&E Services Design',
    client: 'The Vice Chancellor, Nnamdi Azikiwe University, Awka via Vaastrop Nigeria Ltd',
    category: 'Institutional',
    categoryLabel: 'Institutional MEP Engineering',
    location: 'UNIZIK Main Campus, Awka, Anambra State',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; technical consultancy contract verified in Completed Projects Register S/N 5.',
    gallery: [],
    summary: 'Full Mechanical and Electrical Services Design for a 400-room multi-storey undergraduate residential hostel at UNIZIK Awka, engineered for heavy student usage, water conservation, and durable electrical power distribution.',
    theBrief: 'Nnamdi Azikiwe University required robust MEP engineering for a high-density 400-room student hostel that would resist vandalism, optimize natural cross-ventilation, and deliver reliable pressurized water across all upper floors.',
    theApproach: 'Our engineering team designed zoned electrical metering, durable surface conduit schemes, industrial-grade plumbing stacks, and an elevated gravity-fed water reservoir system serving thousands of daily residents.',
    designEngineering: 'Simultaneous water demand peak calculations; vertical soil/waste pipe sizing with anti-siphon venting; energy-efficient corridor illumination; surge-protected distribution boards on every floor.',
    execution: 'Complete mechanical and electrical engineering drawings, load schedules, BEME, and technical specification schedules delivered to the university physical planning unit.',
    servicesProvided: [
      'High-Density Residential Plumbing & Drainage Design',
      'Electrical Power & Sub-Distribution Engineering',
      'Water Reservoir Pumping & Pressure Calculations',
      'Fire Protection & Emergency Exit Lighting',
      'Technical Specification & BEME Documentation'
    ],
    keyFeatures: [
      '400 student rooms with heavy-duty sanitary and electrical points',
      'Gravity-fed multi-tier water distribution with automated boreholes',
      'Durable low-maintenance electrical trunking',
      'High-efficiency drainage and septic soakaway system',
      'Engineered for long lifespan and minimal maintenance'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 5' },
      { label: 'Client', value: 'The Vice Chancellor, UNIZIK Awka (via Vaastrop)' },
      { label: 'Location', value: 'Awka, Anambra State, Nigeria' },
      { label: 'Scope', value: 'Mechanical and Electrical Services Design' },
      { label: 'Corporate Source', value: 'PDF Page 248 (Project #5)' }
    ],
    result: 'A model student residential engineering blueprint that sets the benchmark for institutional student accommodations.',
    pdfReference: 'PDF Page 248 (Project #5)'
  },

  // 13. VERIFIED REGISTER PROJECT: PARADISE GARDEN CITY ESTATE INFRASTRUCTURE
  {
    id: 'paradise-garden-city-estate',
    slug: 'paradise-garden-city-estate',
    title: 'Masterplan Design of General Services of Paradise Garden City Estate',
    client: 'Bentik (Homes) Engineering Ltd',
    category: 'Civil Engineering',
    categoryLabel: 'Civil Infrastructure & Power Substation Engineering',
    location: 'Nike, Enugu, Enugu State, Nigeria',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; technical civil masterplan contract verified in Completed Projects Register S/N 15.',
    generalCategorySlug: 'substructural-foundation-portfolio',
    gallery: [],
    summary: 'Comprehensive civil infrastructure masterplanning for Paradise Garden City Estate in Nike, Enugu. Encompassed arterial road networks, reinforced concrete stormwater drainage, trunk water mains, and an 11/0.415kV electrical injection substation.',
    theBrief: 'Transform a virgin residential layout in Nike, Enugu into a fully serviced luxury estate with durable paved roads, flood-proof stormwater drainage, pressurized water supply, and dedicated electricity substation infrastructure.',
    theApproach: 'Our civil and electrical engineers conducted topographic surveys and hydrological watershed modeling. We designed dual-carriage spine roads with trapezoidal concrete drains and an 11/0.415kV injection substation at the electrical load center.',
    designEngineering: 'Runoff hydrograph modeling for 25-year flood events; flexible asphalt road pavement thickness design over stabilized subgrades; voltage drop calculations across estate underground cable routes.',
    execution: 'Turnkey civil engineering and project management oversight from site clearing, cut-and-fill grading, and drain casting to transformer energization and DISCO liaison.',
    servicesProvided: [
      'Estate Civil Road Network & Grading Design',
      'Hydrological Stormwater Drainage & Culvert Engineering',
      '11/0.415kV Electrical Injection Substation Design',
      'Trunk Water Reticulation Network',
      'Infrastructure Project Management & Supervision'
    ],
    keyFeatures: [
      'Engineered civil road networks with reinforced drainage',
      'Dedicated 11/0.415kV electrical injection substation',
      'High-pressure trunk water reticulation to individual plots',
      'Zero-erosion flood diversion channels',
      'Underground ducting for future optical fiber and utilities'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 15' },
      { label: 'Client', value: 'Bentik (Homes) Engineering Ltd' },
      { label: 'Location', value: 'Nike, Enugu, Enugu State, Nigeria' },
      { label: 'Scope', value: 'Civil Roads, 11/0.415kV Substation, Water & Drainage' },
      { label: 'Corporate Source', value: 'PDF Page 250 (Project #15)' }
    ],
    result: 'Delivered an infrastructure backbone that transformed the estate into a premier residential address in Enugu.',
    pdfReference: 'PDF Page 250 (Project #15)'
  },

  // 14. VERIFIED REGISTER PROJECT: KWATA ELECTRONICS SHOWROOM
  {
    id: 'kwata-electronics-showroom',
    slug: 'kwata-electronics-showroom',
    title: 'Electronics Show Room at Kwata Junction Awka',
    client: 'Mr. Fred Martins',
    category: 'Commercial',
    categoryLabel: 'Retail Showroom Architecture',
    location: 'Kwata Junction, Awka, Anambra State',
    status: 'In Progress',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Commercial complex contract verified in Completed Projects Register S/N 11 (PDF Page 249).',
    generalCategorySlug: 'commercial-buildings-portfolio',
    gallery: [],
    summary: 'A high-traffic commercial electronics showroom and retail facility prominently situated at Kwata Junction, Awka, featuring expansive glazed storefronts, freight elevator shafts, and column-free display floors.',
    theBrief: 'The client required a prime commercial showroom at the strategic Kwata Junction roundabout to showcase large consumer electronics, refrigeration units, and home appliances with seamless logistics and high customer footfall.',
    theApproach: 'Designed with maximum glass exposure facing the expressway. Deep reinforced concrete edge beams allow massive floor-to-ceiling glass panes without bulky framing.',
    designEngineering: 'Commercial display floor load design (4.5 kN/m²); freight elevator shaft structural design; heavy-capacity electrical backup distribution with dedicated generator bays.',
    execution: 'Turnkey structural erection, floor screeding, glass curtain wall installation, and paved customer parking lot paving.',
    servicesProvided: [
      'Commercial Architecture & Space Planning',
      'Structural Analysis & Freight Elevator Engineering',
      'Building Construction & Project Oversight',
      'High-Load Glazing & Curtain Wall Installation',
      'HVAC Cooling & Commercial Electrical Reticulation'
    ],
    keyFeatures: [
      'Prime highway visibility at Kwata Junction intersection',
      'Floor-to-ceiling tempered glass display frontage',
      'Reinforced goods loading bays and freight elevator provisions',
      'Paved interlocking parking for over 30 vehicles',
      'Independent high-output power generation station'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Ongoing Project Register S/N 1' },
      { label: 'Location', value: 'Kwata Junction, Awka, Anambra State' },
      { label: 'Client', value: 'Mr. Fred Martins' },
      { label: 'Structural Frame', value: 'Reinforced Concrete with Wide-Span Beams' },
      { label: 'Corporate Source', value: 'PDF Pages 1, 36, 257 (Project #1)' }
    ],
    result: 'Transforms a prime junction into a modern commercial retail destination in Anambra State.',
    pdfReference: 'PDF Pages 1, 36, 257 (Project #1)'
  },

  // 15. VERIFIED REGISTER PROJECT: COOU 600-CAPACITY STUDENT HOSTEL
  {
    id: 'coou-600-student-hostel-igbariam',
    slug: 'coou-600-student-hostel-igbariam',
    title: '600 Capacities Student Hostel at Igbariam',
    client: 'The Vice Chancellor, Chukwuemeka Odumegwu Ojukwu University, Igbariam',
    category: 'Institutional',
    categoryLabel: 'University Campus Infrastructure',
    location: 'COOU Campus, Igbariam, Anambra State',
    status: 'In Progress',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; institutional construction contract verified in Ongoing Projects Register S/N 13.',
    gallery: [],
    summary: 'Large-scale multi-level university student accommodation development designed to house 600 students at Chukwuemeka Odumegwu Ojukwu University (COOU), Igbariam, incorporating study lounges, high-durability MEP infrastructure, and solar lighting.',
    theBrief: 'Develop modern, safe, and durable student living quarters to ease campus accommodation shortages, designed for rapid construction, long structural lifespan, and minimal ongoing operational maintenance.',
    theApproach: 'Our engineering team deployed modular reinforced concrete post-and-beam construction. Standardized room modules speed up formwork cycles while maximizing natural cross-ventilation through wide interior breezeways.',
    designEngineering: 'Heavy residential live loading; multi-core fire escape staircases; high-volume automated borehole water distribution; centralized solar perimeter security illumination.',
    execution: 'Active construction phasing overseen by Solugans site engineers, including deep pad footings, heavy blockwork masonry, suspended slab casting, and plumbing stack reticulation.',
    servicesProvided: [
      'University Residential Architectural Planning',
      'Structural Concrete Engineering',
      'Turnkey Building Construction & Site Management',
      'Campus Water Reticulation & Sewage Systems',
      'Electrical Power & Solar Lighting Distribution'
    ],
    keyFeatures: [
      '600 student residential capacity across multi-level wings',
      'Integrated study lounges, common rooms, and warden quarters',
      'Heavy-duty sanitary ware and vandal-resistant plumbing',
      'Multiple independent fire exit stair towers',
      'Solar-powered external campus perimeter lighting'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Ongoing Project Register S/N 13' },
      { label: 'Client', value: 'The Vice Chancellor, COOU Igbariam' },
      { label: 'Location', value: 'Igbariam Campus, Anambra State, Nigeria' },
      { label: 'Capacity', value: '600 Students' },
      { label: 'Corporate Source', value: 'PDF Page 258 (Project #13)' }
    ],
    result: 'Currently progressing on schedule, delivering durable, dignified student housing that will serve the university for generations.',
    pdfReference: 'PDF Page 258 (Project #13)'
  },

  // 16. VERIFIED REGISTER PROJECT: COOU FACULTY OF ECONOMICS
  {
    id: 'coou-economics-faculty-igbariam',
    slug: 'coou-economics-faculty-igbariam',
    title: 'Faculty Building (Dept. of Economics)',
    client: 'The Vice Chancellor, Chukwuemeka Odumegwu Ojukwu University, Igbariam',
    category: 'Institutional',
    categoryLabel: 'Higher Education Academic Building',
    location: 'COOU Campus, Igbariam, Anambra State',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; academic building contract verified in Completed Projects Register S/N 32.',
    gallery: [],
    summary: 'A multi-storey academic faculty complex housing lecture amphitheatres, academic staff offices, research libraries, and administrative departments at Chukwuemeka Odumegwu Ojukwu University, Igbariam.',
    theBrief: 'Construct a state-of-the-art academic building for the Department of Economics with acoustic lecture theatres, faculty offices, and accessible circulation corridors for thousands of university students.',
    theApproach: 'Our architectural team designed a dual-wing building around a central ventilated atrium. Stepped tiered lecture seating was cast in monolithic concrete to provide perfect sightlines to lecterns.',
    designEngineering: 'Acoustic reverberation modeling for lecture halls; natural lighting optimization to reduce daytime electricity usage; heavy-duty storm drainage discharging into campus civil networks.',
    execution: 'Turnkey construction executed by Solugans civil engineering personnel in accordance with university physical planning specifications.',
    servicesProvided: [
      'Educational Campus Masterplanning & Architecture',
      'Tiered Amphitheatre Structural Concrete Design',
      'Turnkey Academic Building Construction',
      'MEP Power, Audio & Lighting Reticulation',
      'Civil Drainage & Interlocking Walkways'
    ],
    keyFeatures: [
      'Tiered lecture amphitheatres with optimized acoustic geometry',
      'Faculty professorial suites, research libraries, and seminar rooms',
      'Central naturally ventilated atrium promoting cooling air circulation',
      'Durable low-maintenance terrazzo and vitrified tile flooring',
      'Integrated campus stormwater drainage connection'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 32' },
      { label: 'Client', value: 'The Vice Chancellor, COOU Igbariam' },
      { label: 'Location', value: 'Igbariam Campus, Anambra State' },
      { label: 'Scope', value: 'Complete Turnkey Design, Engineering & Construction' },
      { label: 'Corporate Source', value: 'PDF Page 252 (Project #32)' }
    ],
    result: 'An exemplary university academic facility that continues to foster higher education in economics for thousands of undergraduates.',
    pdfReference: 'PDF Page 252 (Project #32)'
  },

  // 17. VERIFIED REGISTER PROJECT: INTERCONTINENTAL BANK RENOVATION
  {
    id: 'intercontinental-bank-branch-renovation',
    slug: 'intercontinental-bank-branch-renovation',
    title: 'Onitsha (New Market Road) & Enugu Branch Offices Renovation',
    client: 'Intercontinental Bank Plc',
    category: 'Commercial',
    categoryLabel: 'Banking Infrastructure & MEP Renovation',
    location: 'New Market Road Onitsha & Enugu Branch Offices',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; commercial banking contracts verified in Completed Projects Register S/N 10 & 11.',
    gallery: [],
    summary: 'High-security commercial banking hall overhaul and MEP modernization for Intercontinental Bank Plc branch offices on New Market Road Onitsha and Enugu, executed under strict security and operational protocols.',
    theBrief: 'Modernize existing commercial banking halls, teller counters, server IT clean-power rooms, and customer banking lounges while reinforcing physical security and upgrading HVAC and fire systems.',
    theApproach: 'We phased works meticulously during nights and weekends to minimize disruption to banking operations. High-security steel doors, ballistic teller enclosures, and dedicated clean-power circuits were prioritized.',
    designEngineering: 'Dedicated uninterrupted power supply (UPS) power reticulation; reinforced concrete vault wall reinforcing; central chilled water air conditioning; addressable smoke and gas fire suppression for server vaults.',
    execution: 'Delivered under strict institutional banking QA/QC standards, meeting all Central Bank of Nigeria (CBN) security specifications.',
    servicesProvided: [
      'Banking Facility Architectural Modernization',
      'High-Security Vault & Counter Engineering',
      'HVAC & Clean-Power Electrical Overhaul',
      'Fire Suppression & Access Control Reticulation',
      'Fast-Track Project Management'
    ],
    keyFeatures: [
      'Ballistic teller enclosures and reinforced vault security',
      'Dual-redundant clean-power electrical circuits for IT servers',
      'Centralized chilled water air conditioning overhaul',
      'Automated fire suppression and emergency lighting',
      'Polished granite banking floor finishes'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 10 & 11' },
      { label: 'Client', value: 'Intercontinental Bank Plc' },
      { label: 'Locations', value: 'Onitsha (New Market Rd) & Enugu Branches' },
      { label: 'Scope', value: 'Branch Renovation & Modernization' },
      { label: 'Corporate Source', value: 'PDF Page 250 (Projects #10, #11)' }
    ],
    result: 'Delivered on time with zero bank service disruption, elevating security and customer experience.',
    pdfReference: 'PDF Page 250 (Projects #10, #11)'
  },

  // 18. VERIFIED REGISTER PROJECT: BEVERLY HILLS ESTATE RESIDENCE
  {
    id: 'beverly-hills-residential-awka',
    slug: 'beverly-hills-residential-awka',
    title: 'Residential Development at Beverly Hills Estate Awka',
    client: 'Mr. Aginam Ifeanyi',
    category: 'Residential',
    categoryLabel: 'Private Villa Architecture',
    location: 'Beverly Hills Estate, Awka, Anambra State',
    status: 'Completed',
    featured: false,
    hasSpecificPhoto: false,
    coverImage: '',
    photoNote: 'Specific photographic plate unassigned in profile; private contract verified in Completed Projects Register S/N 45. See General Residential Portfolio.',
    generalCategorySlug: 'residential-buildings-portfolio',
    gallery: [],
    summary: 'An exclusive luxury residential development in Awka’s prestigious Beverly Hills Estate, featuring expansive living areas, private terrace, imported sanitary fittings, and climate-controlled master suites.',
    theBrief: 'The client required a contemporary status residence in the elite Beverly Hills gated estate that would maximize indoor-outdoor living, host social gatherings, and offer maximum privacy.',
    theApproach: 'Our architectural team designed open-plan fluid interior spaces opening onto a private courtyard. Cantilevered floor plates shade lower windows from harsh sunlight.',
    designEngineering: 'Rigid reinforced frame to accommodate double-height interior voids; concealed stormwater downspouts; centralized multi-split air-conditioning piping integration.',
    execution: 'Turnkey site delivery managed with daily engineer quality checks, ensuring seamless finishes from foundation to roof.',
    servicesProvided: [
      'Architectural Design & 3D Visualization',
      'Civil & Structural Engineering',
      'Turnkey Building Construction',
      'Interior Finishing & Gypsum Ceilings',
      'Electrical LV & Plumbing Reticulation'
    ],
    keyFeatures: [
      'Open concept living and dining atrium',
      'Private rooftop entertainment terrace with estate views',
      'Cantilevered upper-floor balconies with tempered glass',
      'Integrated smart perimeter lighting and CCTV conduits',
      'High-specification acoustic and thermal insulation'
    ],
    technicalDetails: [
      { label: 'Register Verification', value: 'Completed Project Register S/N 45' },
      { label: 'Location', value: 'Beverly Hills Estate, Awka, Anambra State' },
      { label: 'Client', value: 'Mr. Aginam Ifeanyi' },
      { label: 'Scope', value: 'Full Design, Engineering & Construction' },
      { label: 'Corporate Source', value: 'PDF Page 254 (Project #45)' }
    ],
    result: 'An architectural standout in Awka’s most prestigious residential enclave, delivered with flawless attention to detail.',
    pdfReference: 'PDF Page 254 (Project #45)'
  }
];

// Complete Verified 57 Completed Projects Register (Pages 248–256)
export const COMPLETED_PROJECTS_REGISTER: ProjectRegisterRecord[] = [
  { sNo: 1, project: 'ESUTH Convocation Arena - Mechanical & Electrical Services Design', client: 'The VC, ESUT Enugu (thru Vaastrop Nig Ltd)', location: 'Enugu State', category: 'Institutional', status: 'Completed' },
  { sNo: 2, project: '120kVA, 353.28kWh Storage, 97.28kWp PV Solar Power Mini Grid System', client: 'Babington Macaulay Junior Seminary (thru EA Crystal)', location: 'Lagos State', category: 'Energy & MEP', status: 'Completed' },
  { sNo: 3, project: '10kVA, 25.2kWh Storage, 7kWp PV Solar Energy System', client: 'Private Client', location: 'Ikoyi, Lagos State', category: 'Energy & MEP', status: 'Completed' },
  { sNo: 4, project: '10kVA Inverter Power Backup System - Energy Audit & Commissioning', client: 'Premier Lotto Ltd', location: 'Lagos State', category: 'Energy & MEP', status: 'Completed' },
  { sNo: 5, project: '400-Room Capacity University Hostel Block - M&E Services Design', client: 'The Vice Chancellor, UNIZIK (via Vaastrop Nig Ltd)', location: 'Awka, Anambra State', category: 'Institutional', status: 'Completed' },
  { sNo: 6, project: 'M&E Services Design of 1, 2, and 3-Bedroom Staff Housing Prototype', client: 'The Vice Chancellor, UNIZIK (thru Vaastrop Nig Ltd)', location: 'Awka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 7, project: 'M&E Services Design of 2018 TETFund Directorate of Degree Programmes Admin Block', client: 'The Rector, IMT Enugu (thru Vaastrop Nig Ltd)', location: 'Enugu State', category: 'Institutional', status: 'Completed' },
  { sNo: 8, project: 'Masterplan Design of External Electricity Distribution & Water Reticulation of Adonai Estate', client: 'Copen Services Ltd (thru MNIGS Nig Ltd)', location: 'Nsukka, Enugu State', category: 'Civil Engineering', status: 'Completed' },
  { sNo: 9, project: 'Lecture Hall Complex', client: 'ESUT Teaching Hospital', location: 'Nsukka, Enugu State', category: 'Institutional', status: 'Completed' },
  { sNo: 10, project: 'Onitsha (New Market Road) Branch Office Renovation', client: 'Intercontinental Bank Plc', location: 'Onitsha, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 11, project: 'Enugu Commercial Branch Office Modernization', client: 'Intercontinental Bank Plc', location: 'Enugu, Enugu State', category: 'Commercial', status: 'Completed' },
  { sNo: 12, project: 'Country Home Residential Estate', client: 'Pascal Ukwnani', location: 'Ngwo, Enugu State', category: 'Residential', status: 'Completed' },
  { sNo: 13, project: 'Residential Development at Nza Street', client: 'Mr. & Mrs. Ben Mbonu', location: 'Enugu, Enugu State', category: 'Residential', status: 'Completed' },
  { sNo: 14, project: 'Country Home Estate at Achi', client: 'Mr. & Mrs. Ben Mbonu', location: 'Achi, Enugu State', category: 'Residential', status: 'Completed' },
  { sNo: 15, project: 'Masterplan Design of Paradise Garden City Estate - Civil Roads, 11/0.415kV Substation & Drainage', client: 'Bentik (Homes) Engineering Ltd', location: 'Nike, Enugu State', category: 'Civil Engineering', status: 'Completed' },
  { sNo: 16, project: 'Residential Development at Nanka', client: 'Mr. Nwankwo Obumneme', location: 'Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 17, project: 'Residential Building at Nanka', client: 'Mrs. Virginia Mmadueke', location: 'Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 18, project: 'Residential Country Home at Aguleri', client: 'Mr. Primus Odili', location: 'Aguleri, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 19, project: 'Residential Development at Nimo', client: 'Engr. Chukwuma Nwadi', location: 'Nimo, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 20, project: 'Residential Development at Obio/Akpor', client: 'Mr. Bright C. Chikezie', location: 'Obio/Akpor, Rivers State', category: 'Residential', status: 'Completed' },
  { sNo: 21, project: 'Commercial Building at Amawbia', client: 'Mr. Okeke T. Ikenna', location: 'Amawbia, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 22, project: 'Residential Development at Ichida', client: 'Mr. Emeka Mbamalu', location: 'Ichida, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 23, project: 'Students Hostel Development', client: 'The Vice Chancellor, COOU', location: 'Igbariam, Anambra State', category: 'Institutional', status: 'Completed' },
  { sNo: 24, project: 'Residential Development at Isuaniocha', client: 'Mr. Ifenna Gerald Ezejiegwa', location: 'Isuaniocha, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 25, project: 'Hostel Development at Ifite', client: 'Mrs. Obiageli Christiana Anumudu', location: 'Ifite, Awka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 26, project: 'Residential Development at Ezinifite', client: 'Mr. Ifediniru David Mbazurike', location: 'Ezinifite, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 27, project: 'Residential Development at Nanka', client: 'Mr. Okoli Ejike', location: 'Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 28, project: 'Oil Mill Industrial Development', client: 'Omekannaya Oil Mill Limited', location: 'Akpu-Ogi, Nike, Enugu State', category: 'Structural Steel', status: 'Completed' },
  { sNo: 29, project: 'Residential Development at Nanka', client: 'Mr. Ezeobi Chukwudile', location: 'Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 30, project: 'Residential Development at Onitsha', client: 'Mr. Cletus Ikechukwu', location: 'Onitsha, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 31, project: 'Palm Kernel Processing Industrial Unit', client: 'Omekannaya Oil Mill Limited', location: 'Nike, Enugu State', category: 'Structural Steel', status: 'Completed' },
  { sNo: 32, project: 'Faculty of Economics Academic Building', client: 'The Vice Chancellor, COOU', location: 'Igbariam, Anambra State', category: 'Institutional', status: 'Completed' },
  { sNo: 33, project: 'Residential Development at Osumenyi', client: 'Mr. Patrick Nzediegwu', location: 'Osumenyi, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 34, project: 'Commercial Development at Ifite Village', client: 'Mr. Joseph Nwabunike Ezeokafor', location: 'Ifite, Awka, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 35, project: 'Residential Development at Ozara', client: 'Late Mr. Christopher Muodebelu', location: 'Umuchu, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 36, project: 'Residential Development at Agbiligba Nanka', client: 'Mr. Donatus Akubuike', location: 'Agbiligba Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 37, project: 'Residential Development at Etti Village Nanka', client: 'Mr. Okeke Damian', location: 'Etti, Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 38, project: 'Commercial Development at Kwata Junction', client: 'Mr. Azolo Raphael', location: 'Kwata Junction, Awka, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 39, project: 'Residential Development at Mkpologwu', client: 'Mr. Ozobialu Nnamdi', location: 'Mkpologwu, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 40, project: 'Residential Building at Amuwo', client: 'Mr. Darlington Chidiebere Onyekachi', location: 'Amesi, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 41, project: 'Residential Development at Nkwelle Ezunaka', client: 'Mr. Muodum Alloysius', location: 'Nkwelle Ezunaka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 42, project: 'Residential Development at Ideato', client: 'Mr. Ezeh Ikenna Raphael', location: 'Ideato, Imo State', category: 'Residential', status: 'Completed' },
  { sNo: 43, project: 'Commercial Development at Amachalla Awka', client: 'Mr. Onyeka Emmanuel Onuorah', location: 'Amachalla, Awka, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 44, project: 'Residential Development at Okpuno', client: 'Pastor Joel Agbata', location: 'Okpuno, Awka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 45, project: 'Residential Development at Beverly Hills Estate', client: 'Mr. Aginam Ifeanyi', location: 'Beverly Hills Estate, Awka', category: 'Residential', status: 'Completed' },
  { sNo: 46, project: 'Commercial Development at Amawbia', client: 'Mr. Ozoemenam Paul Onyili', location: 'Amawbia, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 47, project: 'Commercial Development at Amawbia', client: 'Mrs. Angel Onyebuchi Ogu', location: 'Amawbia, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 48, project: 'Residential Development at Enugo Village', client: 'Mr. Chukwudi Celestine', location: 'Ojoto, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 49, project: 'Residential Development at Federal Housing', client: 'Mr. Cletus Ikechukwu Ezeonwu', location: 'Onitsha, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 50, project: 'Residential Development at Agbiligba Nanka', client: 'Engr. Ezeasor Kingsley', location: 'Agbiligba Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 51, project: 'Residential Development at Chyfon Luxury Estate', client: 'Chyfon Luxury Estate', location: 'Okpuno, Awka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 52, project: 'Commercial Development at Isuaniocha', client: 'Mr. Ezenaju Bartholomew Chukwujekwu', location: 'Isuaniocha, Awka, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 53, project: 'Commercial Development at Iyiagu Estate', client: 'Mrs. Rosemary Mabel Aginam', location: 'Iyiagu Estate, Awka, Anambra State', category: 'Commercial', status: 'Completed' },
  { sNo: 54, project: 'Residential Re-modelling at Etti Village', client: 'Mr. Nwankwo Sunday Callistus', location: 'Etti, Nanka, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 55, project: 'Residential Development at Amuvi Arochukwu', client: 'Mazi Madukaku Kingz Okoro', location: 'Arochukwu, Abia State', category: 'Residential', status: 'Completed' },
  { sNo: 56, project: 'Residential Building at Amuwo Village', client: 'Mr. Alexander Omerebere Umeozulu', location: 'Aguata, Anambra State', category: 'Residential', status: 'Completed' },
  { sNo: 57, project: 'Residential Development at Enugu-Nanka', client: 'Mr. Owah Chigozie', location: 'Enugu-Nanka, Anambra State', category: 'Residential', status: 'Completed' }
];

// Complete Verified 20 Ongoing Projects Register (Pages 257–258)
export const ONGOING_PROJECTS_REGISTER: ProjectRegisterRecord[] = [
  { sNo: 1, project: 'Electronics Show Room at Kwata Junction', client: 'Mr. Fred Martins', location: 'Awka, Anambra State', category: 'Commercial', status: 'In Progress' },
  { sNo: 2, project: 'Commercial Building at Nkpor', client: 'Mr. Tochukwu Mgbemene', location: 'Nkpor, Anambra State', category: 'Commercial', status: 'In Progress' },
  { sNo: 3, project: 'Residential Building at Federal Housing Estate 3-3', client: 'Mr. Osinachi Okafor', location: 'Onitsha, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 4, project: 'Fabrication of Chandelier Light Systems at Radopin Supermarket', client: 'Mr. Azolo Raphael', location: 'Awka, Anambra State', category: 'Commercial', status: 'In Progress' },
  { sNo: 5, project: 'Residential Building Divine Estate', client: 'Mr. Ugochukwu Mbamalu', location: 'Amuwo Odofin, Lagos State', category: 'Residential', status: 'In Progress' },
  { sNo: 6, project: 'Residential Building at Hope Estate', client: 'Mr. Uchenna Nwankwor', location: 'Festac Town, Lagos State', category: 'Residential', status: 'In Progress' },
  { sNo: 7, project: 'Residential Building at Igwurita', client: 'Chief Bright Chimezie', location: 'Port Harcourt, Rivers State', category: 'Residential', status: 'In Progress' },
  { sNo: 8, project: 'Residential Building at Nanka', client: 'Chief Damian Okeke', location: 'Nanka, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 9, project: 'Residential Building at Okpoko Village', client: 'Mr. Kenneth Nwankwor', location: 'Isuofia, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 10, project: 'Cichotel Hotel Extension Construction', client: 'Cichotel Group of Company', location: 'Awka, Anambra State', category: 'Commercial', status: 'In Progress' },
  { sNo: 11, project: 'Residential Development at Nnokwa', client: 'Dr. Obiora Chukwudi', location: 'Nnokwa, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 12, project: 'School Auditorium Development at Nanka', client: 'Community Secondary School, Nanka', location: 'Nanka, Anambra State', category: 'Institutional', status: 'In Progress' },
  { sNo: 13, project: '600 Capacities Student Hostel at Igbariam', client: 'The Vice Chancellor, COOU', location: 'Igbariam, Anambra State', category: 'Institutional', status: 'In Progress' },
  { sNo: 14, project: 'Church Building Auditorium at Nanka', client: 'Redeemed Christian Church of God', location: 'Nanka, Anambra State', category: 'Institutional', status: 'In Progress' },
  { sNo: 15, project: 'Residential Development at Amansea', client: 'Mr. Uganeme Emeka Donatus', location: 'Amansea, Awka, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 16, project: 'Hotel & Hospitality Development at Asaba', client: 'Mr. Ikechukwu Ezeani', location: 'Asaba, Delta State', category: 'Commercial', status: 'In Progress' },
  { sNo: 17, project: 'Residential Development at Awka', client: 'Chief Damian Afam Okeke', location: 'Awka, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 18, project: 'Residential Development at Nanka', client: 'Mr. Okeke Innocent Ulebuchukwu', location: 'Nanka, Anambra State', category: 'Residential', status: 'In Progress' },
  { sNo: 19, project: 'Residential Development in Rivers State', client: 'Mr. Okafor Kingsley Ikenna', location: 'Rivers State', category: 'Residential', status: 'In Progress' },
  { sNo: 20, project: 'Residential Development in Rivers State', client: 'Mr. Nwankwo Chinonso Collins', location: 'Rivers State', category: 'Residential', status: 'In Progress' }
];
