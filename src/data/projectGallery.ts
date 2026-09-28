export interface GalleryCategoryDef {
  key: string;
  label: string;
  filterLabel: string;
  folder: string;
  description: string;
  discipline: string;
}

export interface ProjectGalleryItem {
  id: string;
  src: string;
  category: string;
  categoryKey: string;
  title: string;
  caption: string;
  alt: string;
  featured: boolean;
  sortOrder: number;
}

// The 11 authoritative category definitions (matching uploaded project folders with corrected display typography)
export const GALLERY_CATEGORIES: GalleryCategoryDef[] = [
  {
    key: 'basement-excavation',
    label: 'BASEMENT EXCAVATION',
    filterLabel: 'BASEMENT EXCAVATION',
    folder: 'BASEMENT EXCAVATION',
    description: 'Selected documentation of deep earth excavation, soil retention, and sub-grade preparation carried out by the Solugans & Associates Engineering team.',
    discipline: 'Civil & Geotechnical Engineering'
  },
  {
    key: 'buildings-under-construction',
    label: 'BUILDINGS UNDER CONSTRUCTION',
    filterLabel: 'BUILDINGS UNDER CONSTRUCTION',
    folder: 'BUILDINGS UNDER CONDTRUCTION',
    description: 'Active site construction documentation detailing formwork staging, reinforced superstructure erection, and multi-level floor execution.',
    discipline: 'Building Construction'
  },
  {
    key: 'commercial-buildings',
    label: 'COMMERCIAL BUILDINGS',
    filterLabel: 'COMMERCIAL BUILDINGS',
    folder: 'COMMERCIAL BUILDING',
    description: 'Selected documentation of multi-level commercial retail plazas, supermarket developments, and corporate complexes engineered by Solugans & Associates.',
    discipline: 'Commercial Architecture & Construction'
  },
  {
    key: 'earthing-work',
    label: 'EARTHING WORK ON REINFORCEMENT',
    filterLabel: 'EARTHING WORK',
    folder: 'EARTHING WORK ON REINFORCEMENT',
    description: 'Sub-surface electrical earthing tape, copper bonding, and foundation lightning protection integrated directly into structural reinforcement cages.',
    discipline: 'Electrical & MEP Engineering'
  },
  {
    key: 'reinforcement-works',
    label: 'REINFORCEMENT WORKS',
    filterLabel: 'REINFORCEMENT WORKS',
    folder: 'REINFORCEMENT WORKS',
    description: 'High-yield steel rebar fabrication, mat placement, and structural tensile reinforcement for heavy foundation slabs and structural members.',
    discipline: 'Structural Engineering'
  },
  {
    key: 'columns-beams',
    label: 'REINFORCEMENT OF COLUMNS & BEAMS',
    filterLabel: 'COLUMNS & BEAMS',
    folder: 'REINFOREMENT OF COLUMNS AND BEAMS',
    description: 'On-site fabrication and rigging of heavy reinforced concrete column cages, stirrup link spacing, and continuous beam junctions.',
    discipline: 'Structural Engineering'
  },
  {
    key: 'residential-buildings',
    label: 'RESIDENTIAL BUILDINGS',
    filterLabel: 'RESIDENTIAL BUILDINGS',
    folder: 'RESIDENTIAL BUILDING',
    description: 'Documentation of residential construction activities, private country homes, and estate residences constructed by Solugans & Associates Engineering Ltd.',
    discipline: 'Residential Construction'
  },
  {
    key: 'retaining-wall-work',
    label: 'RETAINING WALL WORK',
    filterLabel: 'RETAINING WALL WORK',
    folder: 'RETAINING WALL WORK',
    description: 'Engineering and construction of reinforced concrete retaining wall structures for lateral earth containment and terrain slope stabilization.',
    discipline: 'Civil & Structural Engineering'
  },
  {
    key: 'staircase-construction',
    label: 'STAIRCASE CONSTRUCTION',
    filterLabel: 'STAIRCASE CONSTRUCTION',
    folder: 'STAIRCASE CONSTRUCTION',
    description: 'Reinforced concrete cantilever, helical, and dog-leg staircase engineering, shuttering, and precision structural casting.',
    discipline: 'Structural Engineering'
  },
  {
    key: 'sub-structural-foundation',
    label: 'SUB-STRUCTURAL WORKS — FOUNDATION',
    filterLabel: 'SUB-STRUCTURAL / FOUNDATION',
    folder: 'SUB-STRUCTURAL WORKS (FOUNDATION WORK)',
    description: 'Selected documentation of foundation and sub-structural construction activities carried out by the Solugans & Associates Engineering team.',
    discipline: 'Foundation & Civil Engineering'
  },
  {
    key: 'tubular-steel-works',
    label: 'TUBULAR STEEL WORKS',
    filterLabel: 'TUBULAR STEEL WORKS',
    folder: 'TUBULAR STEEL WORKS',
    description: 'Precision welding, fabrication, and structural hoisting of circular and hollow tubular steel trusses and wide-span space frames.',
    discipline: 'Structural Steel Engineering'
  }
];

// Curated Project Image Registry built exclusively from real company project photography
export const PROJECT_GALLERY_DATA: ProjectGalleryItem[] = [
  // 1. BASEMENT EXCAVATION (3 items)
  {
    id: 'base-exc-01',
    src: '/src/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
    category: 'BASEMENT EXCAVATION',
    categoryKey: 'basement-excavation',
    title: 'Deep Basement Excavation & Site Formation',
    caption: 'Basement Excavation',
    alt: 'Deep basement earth excavation and sub-grade preparation by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 1
  },
  {
    id: 'base-exc-02',
    src: '/src/assets/images/BASEMENT EXCAVATION/IMG_2754.JPG',
    category: 'BASEMENT EXCAVATION',
    categoryKey: 'basement-excavation',
    title: 'Earthworks & Perimeter Retention Cut',
    caption: 'Basement Excavation',
    alt: 'Mechanical earthmoving and perimeter trench formation for basement substructure by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 2
  },
  {
    id: 'base-exc-03',
    src: '/src/assets/images/BASEMENT EXCAVATION/IMG_2767.JPG',
    category: 'BASEMENT EXCAVATION',
    categoryKey: 'basement-excavation',
    title: 'Sub-Grade Excavation Leveling',
    caption: 'Basement Excavation',
    alt: 'Deep excavation pit leveling and drainage sump preparation by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 3
  },

  // 2. BUILDINGS UNDER CONSTRUCTION (6 items deduplicated)
  {
    id: 'buc-01-aguleri',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Residential Country Home at Ameze Village, Aguleri',
    caption: 'Residential Country Home at Ameze Village, Aguleri (Mr. Primus Odili)',
    alt: 'Ongoing construction of Residential Country Home at Ameze Village, Aguleri by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 4
  },
  {
    id: 'buc-02',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3717.JPG',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Reinforced Concrete Superstructure Decking',
    caption: 'Buildings Under Construction',
    alt: 'Multi-level building superstructure under construction with propping and formwork by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 5
  },
  {
    id: 'buc-03',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3718.JPG',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Slab Soffit Formwork & Shoring Inspection',
    caption: 'Buildings Under Construction',
    alt: 'Structural timber propping and steel jack shoring for suspended slab pour by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 6
  },
  {
    id: 'buc-04',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3747.JPG',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Multi-Storey Blockwork & Structural Envelope',
    caption: 'Buildings Under Construction',
    alt: 'Masonry partition infill and structural frame alignment on active site by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 7
  },
  {
    id: 'buc-05',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3760.JPG',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Facade Elevation & Scaffolding Staging',
    caption: 'Buildings Under Construction',
    alt: 'Perimeter scaffolding access and wall rendering during building construction by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 8
  },
  {
    id: 'buc-06',
    src: '/src/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3773.JPG',
    category: 'BUILDINGS UNDER CONSTRUCTION',
    categoryKey: 'buildings-under-construction',
    title: 'Roof Deck Level Structural Frame',
    caption: 'Buildings Under Construction',
    alt: 'Upper-level reinforced concrete beams and parapet frame execution by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 9
  },

  // 3. COMMERCIAL BUILDINGS (3 items)
  {
    id: 'com-01-radopin',
    src: '/src/assets/images/COMMERCIAL BUILDING/commercial_plaza_radopin.jpg',
    category: 'COMMERCIAL BUILDINGS',
    categoryKey: 'commercial-buildings',
    title: 'Radopin Supermarket Plaza & Commercial Complex',
    caption: 'Commercial Buildings — Radopin Supermarket Plaza, Awka',
    alt: 'Commercial retail supermarket plaza with geometric facade and glass curtain wall by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 10
  },
  {
    id: 'com-02-cichotel',
    src: '/src/assets/images/COMMERCIAL BUILDING/commercial_office_cichotel.jpg',
    category: 'COMMERCIAL BUILDINGS',
    categoryKey: 'commercial-buildings',
    title: 'Cichotel Classique Commercial Extension',
    caption: 'Commercial Buildings — Cichotel Classique Extension, Awka',
    alt: 'Multi-storey commercial hospitality complex with solar glazing and external glass elevator by Solugans & Associates.',
    featured: true,
    sortOrder: 11
  },
  {
    id: 'com-03-retail',
    src: '/src/assets/images/COMMERCIAL BUILDING/commercial_retail_complex.jpg',
    category: 'COMMERCIAL BUILDINGS',
    categoryKey: 'commercial-buildings',
    title: 'Commercial Retail Plaza & Office Bays',
    caption: 'Commercial Buildings — Retail & Showroom Complex',
    alt: 'Commercial shopping plaza exterior with wide-span storefronts by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 11.5
  },

  // 4. EARTHING WORK ON REINFORCEMENT (2 items)
  {
    id: 'earth-01',
    src: '/src/assets/images/EARTHING WORK ON REINFORCEMENT/IMG_20170819_114918.jpg',
    category: 'EARTHING WORK ON REINFORCEMENT',
    categoryKey: 'earthing-work',
    title: 'Foundation Earthing Tape Bonding',
    caption: 'Earthing Work on Reinforcement',
    alt: 'Pure copper earthing tape installation and mechanical clamping on structural reinforcement by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 12
  },
  {
    id: 'earth-02',
    src: '/src/assets/images/EARTHING WORK ON REINFORCEMENT/IMG_20180604_225902_298.jpg',
    category: 'EARTHING WORK ON REINFORCEMENT',
    categoryKey: 'earthing-work',
    title: 'Structural Lightning Protection Integration',
    caption: 'Earthing Work on Reinforcement',
    alt: 'Foundation earthing system linked to steel reinforcement mesh prior to concrete casting by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 13
  },

  // 5. REINFORCEMENT WORKS (3 items)
  {
    id: 'reinf-01',
    src: '/src/assets/images/REINFORCEMENT WORKS/IMG_6470.JPG',
    category: 'REINFORCEMENT WORKS',
    categoryKey: 'reinforcement-works',
    title: 'Heavy Foundation Rebar Grid Assembly',
    caption: 'Reinforcement Works',
    alt: 'High-tensile ribbed steel rebar fabrication for heavy foundation slab by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 14
  },
  {
    id: 'reinf-02',
    src: '/src/assets/images/REINFORCEMENT WORKS/IMG_6475.JPG',
    category: 'REINFORCEMENT WORKS',
    categoryKey: 'reinforcement-works',
    title: 'Tensile Mat Steel Binding & Spacer Blocks',
    caption: 'Reinforcement Works',
    alt: 'Reinforced concrete foundation mat rebar tying with cover spacer blocks by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 15
  },
  {
    id: 'reinf-03',
    src: '/src/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
    category: 'REINFORCEMENT WORKS',
    categoryKey: 'reinforcement-works',
    title: 'Suspended Slab Rebar Mat Rigging',
    caption: 'Reinforcement Works',
    alt: 'Upper deck suspended slab steel reinforcement grid prior to casting by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 16
  },

  // 6. REINFORCEMENT OF COLUMNS & BEAMS (12 items)
  {
    id: 'col-01',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6567.JPG',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Multi-Floor Column Starter Rebar Cages',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Vertical column rebar starter bars with stirrup links on active site by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 17
  },
  {
    id: 'col-02',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6568.JPG',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Beam-Column Moment Junction Rigging',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Rigid beam-column intersection rebar anchorage and confinement stirrups by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 18
  },
  {
    id: 'col-03',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_1453.JPG',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Deep Transfer Beam Reinforcement',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Heavy transfer girder rebar cage fabrication with top and bottom tensile steel by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 19
  },
  {
    id: 'col-04',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6899.JPG',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Cantilever & Edge Beam Shuttering and Steel',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Perimeter spandrel beam rebar reinforcement and shuttering by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 20
  },
  {
    id: 'col-05',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170614_074320.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Vertical Column Alignment & Link Spacing',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Close-up of vertical column reinforcement links and plumb alignment by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 21
  },
  {
    id: 'col-06',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170727_094432.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Continuous Floor Beam Longitudinal Bars',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Continuous floor beam rebar tying and lap length detailing by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 22
  },
  {
    id: 'col-07',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170807_112153.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Column Formwork Box Preparation',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Column rebar cage ready for timber formwork box enclosure by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 23
  },
  {
    id: 'col-08',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170811_172534.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Spandrel Beam Longitudinal Tying',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Spandrel beam steel layout with top negative moment reinforcement by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 24
  },
  {
    id: 'col-09',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170812_103244.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Main Grid Column Assembly',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Main structural grid column rebar cage fabrication on site by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 25
  },
  {
    id: 'col-10',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20170812_103254.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Corner Column Link Confinement Detailing',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Seismic and shear confinement links on structural corner columns by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 26
  },
  {
    id: 'col-11',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20180327_090416.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Intermediate Floor Beam Reinforcement',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Reinforced concrete intermediate floor beam rebar arrangement by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 27
  },
  {
    id: 'col-12',
    src: '/src/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/20180327_090437.jpg',
    category: 'REINFORCEMENT OF COLUMNS & BEAMS',
    categoryKey: 'columns-beams',
    title: 'Beam Reinforcement & Embedment Inspection',
    caption: 'Reinforcement of Columns & Beams',
    alt: 'Inspection of rebar spacing and concrete cover before slab casting by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 28
  },

  // 7. RESIDENTIAL BUILDINGS (8 items)
  {
    id: 'res-01',
    src: '/src/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Executive Residential Country Villa',
    caption: 'Residential Buildings',
    alt: 'Substantial residential country villa constructed by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 29
  },
  {
    id: 'res-02',
    src: '/src/assets/images/RESIDENTIAL BUILDING/residential building a.jpg',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Stately Residential Villa with Classical Portico',
    caption: 'Residential Buildings',
    alt: 'Classical residential mansion featuring monumental entrance columns by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 30
  },
  {
    id: 'res-03',
    src: '/src/assets/images/RESIDENTIAL BUILDING/residential building construction.jpg',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Luxury Duplex Structural Envelope',
    caption: 'Residential Buildings',
    alt: 'Multi-storey luxury residential duplex construction by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 31
  },
  {
    id: 'res-04',
    src: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6637.JPG',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Residential Superstructure & Upper Level Parapet',
    caption: 'Residential Buildings',
    alt: 'Upper floor masonry and reinforced concrete roof beams on residential project by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 32
  },
  {
    id: 'res-05',
    src: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6916.JPG',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Residential Estate Building Execution',
    caption: 'Residential Buildings',
    alt: 'Ongoing structural work on executive residential building by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 33
  },
  {
    id: 'res-06',
    src: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6952.JPG',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Residential Blockwork & Window Openings',
    caption: 'Residential Buildings',
    alt: 'Precision blockwork laying and lintel casting on residential construction site by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 34
  },
  {
    id: 'res-07',
    src: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6959.JPG',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Perimeter Wall & Entrance Arch Staging',
    caption: 'Residential Buildings',
    alt: 'Residential perimeter fencing and entrance gate structure by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 35
  },
  {
    id: 'res-08',
    src: '/src/assets/images/RESIDENTIAL BUILDING/IMG_6961.JPG',
    category: 'RESIDENTIAL BUILDINGS',
    categoryKey: 'residential-buildings',
    title: 'Residential Compound Hardscaping Preparation',
    caption: 'Residential Buildings',
    alt: 'Site leveling and compound drainage preparation around new residence by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 36
  },

  // 8. RETAINING WALL WORK (1 item)
  {
    id: 'ret-01',
    src: '/src/assets/images/RETAINING WALL WORK/team work.JPG',
    category: 'RETAINING WALL WORK',
    categoryKey: 'retaining-wall-work',
    title: 'Engineering Team on Retaining Wall Construction',
    caption: 'Retaining Wall Work',
    alt: 'Solugans engineering site team collaborating on reinforced retaining wall construction.',
    featured: true,
    sortOrder: 37
  },

  // 9. STAIRCASE CONSTRUCTION (2 items)
  {
    id: 'stair-01',
    src: '/src/assets/images/STAIRCASE CONSTRUCTION/staircase_cantilever_foyer.jpg',
    category: 'STAIRCASE CONSTRUCTION',
    categoryKey: 'staircase-construction',
    title: 'Sculptural Cantilever Helical Concrete Staircase',
    caption: 'Staircase Construction',
    alt: 'Curved cantilever helical reinforced concrete staircase with smooth underside soffit by Solugans & Associates.',
    featured: true,
    sortOrder: 37.5
  },
  {
    id: 'stair-02',
    src: '/src/assets/images/STAIRCASE CONSTRUCTION/staircase_helical_formwork.jpg',
    category: 'STAIRCASE CONSTRUCTION',
    categoryKey: 'staircase-construction',
    title: 'Helical Staircase Curved Formwork & Rebar',
    caption: 'Staircase Construction',
    alt: 'Curved timber shuttering formwork and rebar placement for architectural staircase by Solugans & Associates.',
    featured: false,
    sortOrder: 37.8
  },

  // 10. SUB-STRUCTURAL WORKS (FOUNDATION WORK) (3 items)
  {
    id: 'sub-01',
    src: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3123.JPG',
    category: 'SUB-STRUCTURAL WORKS — FOUNDATION',
    categoryKey: 'sub-structural-foundation',
    title: 'Raft Foundation Excavation & Blinding Preparation',
    caption: 'Sub-Structural Works — Foundation',
    alt: 'Deep foundation pit excavation and sub-structural formation by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 38
  },
  {
    id: 'sub-02',
    src: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3124.JPG',
    category: 'SUB-STRUCTURAL WORKS — FOUNDATION',
    categoryKey: 'sub-structural-foundation',
    title: 'Foundation Grade Beam Trenching',
    caption: 'Sub-Structural Works — Foundation',
    alt: 'Sub-structural ground beam trench excavation and soil stabilization by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 39
  },
  {
    id: 'sub-03',
    src: '/src/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
    category: 'SUB-STRUCTURAL WORKS — FOUNDATION',
    categoryKey: 'sub-structural-foundation',
    title: 'Sub-Structure Rebar Placement & Blinding Concrete',
    caption: 'Sub-Structural Works — Foundation',
    alt: 'Sub-structural foundation blinding layer and footing reinforcement alignment by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 40
  },

  // 10. TUBULAR STEEL WORKS (8 items)
  {
    id: 'steel-01',
    src: '/src/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Tubular Steel Space Frame Fabrication',
    caption: 'Tubular Steel Works',
    alt: 'Circular hollow tubular steel member welding and truss assembly by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 41
  },
  {
    id: 'steel-02',
    src: '/src/assets/images/TUBULAR STEEL WORKS/20180717_101441.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Roof Truss Hoisting & Bearing Plates',
    caption: 'Tubular Steel Works',
    alt: 'Tubular steel truss erection and anchorage to reinforced concrete ring beams by Solugans & Associates Engineering Ltd.',
    featured: true,
    sortOrder: 42
  },
  {
    id: 'steel-03',
    src: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180413_174309 (2).jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Wide-Span Steel Truss Node Detailing',
    caption: 'Tubular Steel Works',
    alt: 'Precision tubular steel gusset plate welded nodes for wide-span canopy by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 43
  },
  {
    id: 'steel-04',
    src: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180413_174313.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Space Frame Lattice Alignment',
    caption: 'Tubular Steel Works',
    alt: 'Diagonal web bracing and chord alignment of tubular steel truss by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 44
  },
  {
    id: 'steel-05',
    src: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180719_000502_882.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Overhead Canopy Steel Framing',
    caption: 'Tubular Steel Works',
    alt: 'Structural steel canopy skeleton erected on reinforced columns by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 45
  },
  {
    id: 'steel-06',
    src: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20180719_000555_989.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Tubular Steel Purlin Reticulation',
    caption: 'Tubular Steel Works',
    alt: 'Roof purlin and anti-corrosive primer coating on steel framing by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 46
  },
  {
    id: 'steel-07',
    src: '/src/assets/images/TUBULAR STEEL WORKS/IMG_20190213_005154_898.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'High-Level Steel Trusses In Situ',
    caption: 'Tubular Steel Works',
    alt: 'Long-span structural steel roof trusses erected over multi-storey hall by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 47
  },
  {
    id: 'steel-08',
    src: '/src/assets/images/TUBULAR STEEL WORKS/steel 1.jpg',
    category: 'TUBULAR STEEL WORKS',
    categoryKey: 'tubular-steel-works',
    title: 'Tubular Steel Structural Erection',
    caption: 'Tubular Steel Works',
    alt: 'Completed tubular steel space truss ready for roofing sheets by Solugans & Associates Engineering Ltd.',
    featured: false,
    sortOrder: 48
  }
];

// Curated priority order for the 'ALL' view to provide an editorial mixture from all categories on first screen
const CURATED_ALL_ORDER: string[] = [
  'buc-01-aguleri',    // BUILDINGS UNDER CONSTRUCTION - Ameze Village Aguleri
  'sub-03',            // SUB-STRUCTURAL / FOUNDATION - Blinding concrete & rebar
  'reinf-03',          // REINFORCEMENT WORKS - Suspended slab rebar mat
  'steel-01',          // TUBULAR STEEL WORKS - Space frame fabrication
  'res-01',            // RESIDENTIAL BUILDINGS - Executive country villa
  'col-01',            // COLUMNS & BEAMS - Column starter rebar cages
  'base-exc-01',       // BASEMENT EXCAVATION - Deep basement excavation
  'ret-01',            // RETAINING WALL WORK - Site engineering team
  'com-01-radopin',    // COMMERCIAL BUILDINGS - Radopin Supermarket Plaza
  'earth-01',          // EARTHING WORK - Foundation earthing tape bonding
  'stair-01',          // STAIRCASE CONSTRUCTION - Helical cantilever stairs
  'col-02',            // COLUMNS & BEAMS - Beam-column moment junction
  'steel-02',          // TUBULAR STEEL WORKS - Roof truss hoisting
  'res-02',            // RESIDENTIAL BUILDINGS - Classical stately villa with portico
  'com-02-cichotel',   // COMMERCIAL BUILDINGS - Cichotel Classique extension
  'buc-02',            // BUILDINGS UNDER CONSTRUCTION - Superstructure decking
  'sub-01',            // SUB-STRUCTURAL / FOUNDATION - Raft foundation excavation
  'reinf-01',          // REINFORCEMENT WORKS - Heavy foundation rebar grid
  'base-exc-02',       // BASEMENT EXCAVATION - Earthworks & perimeter retention
  'earth-02',          // EARTHING WORK - Structural lightning protection
  'steel-03',          // TUBULAR STEEL WORKS - Wide-span steel truss node
  'res-03',            // RESIDENTIAL BUILDINGS - Luxury duplex envelope
  'col-03',            // COLUMNS & BEAMS - Deep transfer beam reinforcement
  'buc-03',            // BUILDINGS UNDER CONSTRUCTION - Slab soffit formwork
  'sub-02',            // SUB-STRUCTURAL / FOUNDATION - Grade beam trenching
  'reinf-02',          // REINFORCEMENT WORKS - Tensile mat rebar tying
  'base-exc-03',       // BASEMENT EXCAVATION - Sub-grade excavation leveling
  'steel-04',          // TUBULAR STEEL WORKS - Space frame lattice alignment
  'col-04',            // COLUMNS & BEAMS - Cantilever & edge beam
  'res-04',            // RESIDENTIAL BUILDINGS - Parapet beams
  'buc-04'             // BUILDINGS UNDER CONSTRUCTION - Blockwork & frame
];

export const getCuratedAllGalleryImages = (): ProjectGalleryItem[] => {
  const itemMap = new Map(PROJECT_GALLERY_DATA.map(item => [item.id, item]));
  const result: ProjectGalleryItem[] = [];
  const addedIds = new Set<string>();

  // Add in curated order
  for (const id of CURATED_ALL_ORDER) {
    const item = itemMap.get(id);
    if (item && !addedIds.has(id)) {
      result.push(item);
      addedIds.add(id);
    }
  }

  // Append remaining items not in curated order
  for (const item of PROJECT_GALLERY_DATA) {
    if (!addedIds.has(item.id)) {
      result.push(item);
      addedIds.add(item.id);
    }
  }

  return result;
};

// Helper functions
export const getGalleryCategory = (key: string): GalleryCategoryDef | undefined => {
  return GALLERY_CATEGORIES.find(c => c.key === key);
};

export const getGalleryImagesByCategory = (categoryKey: string): ProjectGalleryItem[] => {
  if (categoryKey === 'all') {
    return getCuratedAllGalleryImages();
  }
  return PROJECT_GALLERY_DATA.filter(item => item.categoryKey === categoryKey);
};

export const getFeaturedGalleryImages = (): ProjectGalleryItem[] => {
  return PROJECT_GALLERY_DATA.filter(item => item.featured);
};

export const getCategoryCounts = (): Record<string, number> => {
  const counts: Record<string, number> = {
    all: PROJECT_GALLERY_DATA.length
  };
  GALLERY_CATEGORIES.forEach(cat => {
    counts[cat.key] = PROJECT_GALLERY_DATA.filter(item => item.categoryKey === cat.key).length;
  });
  return counts;
};
