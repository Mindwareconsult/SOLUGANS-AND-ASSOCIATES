export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  coverImage: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  keyTakeaways: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'key-considerations-building-project-nigeria',
    slug: 'key-considerations-before-starting-building-project-nigeria',
    title: 'Key Considerations Before Starting a Building Project in Nigeria',
    category: 'Construction',
    readTime: '6 min read',
    publishedDate: 'September 2026',
    author: {
      name: 'Engr. Team Lead',
      role: 'Principal Engineer, Solugans & Associates'
    },
    coverImage: '/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
    excerpt: 'Embarking on a residential or commercial construction development in Nigeria requires strategic planning beyond simple architectural aesthetics. Here are the core technical, regulatory, and geological factors to assess before breaking ground.',
    keyTakeaways: [
      'Never skip a professional geotechnical soil test prior to foundation design.',
      'Always secure statutory planning approvals to avoid costly demolition notices.',
      'Prepare a detailed, indexed Bill of Quantities (BOQ) based on real local market prices.',
      'Hire a single integrated design-and-build firm to prevent blame-shifting between architects and contractors.'
    ],
    content: [
      {
        heading: '1. Geotechnical Investigation & Soil Bearing Capacity',
        paragraphs: [
          'The longevity of any structure is dictated by the soil strata beneath its foundation. In parts of Anambra and southeastern Nigeria, soil profiles vary dramatically within short distances—from firm laterite to loose alluvial silt and high water tables.',
          'Relying on generic foundation depths without a geotechnical soil test is the number one cause of structural cracking, uneven differential settlement, and premature building distress. A standard soil test determines the exact soil bearing capacity, advising whether a raft, strip, or pile foundation is required.'
        ]
      },
      {
        heading: '2. Statutory Approvals and Title Perfection',
        paragraphs: [
          'Before moving heavy equipment to site, ensure title documentation (such as Certificate of Occupancy, Deed of Assignment, or Governor’s Consent) is verified, and architectural drawing sets are vetted and stamped by statutory town planning authorities.',
          'Building without verified approvals leaves the property vulnerable to stop-work notices, fiscal fines, and potential demolition. Solugans & Associates assists clients with end-to-end statutory documentation to safeguard legal ownership.'
        ]
      },
      {
        heading: '3. Transparent Cost Modeling via a Professional BOQ',
        paragraphs: [
          'A frequent cause of abandoned construction projects in Nigeria is optimistic, unscientific budgeting. Material inflation, fuel costs, and labor rates fluctuate.',
          'Engaging a certified Quantity Surveyor to prepare an itemized Bill of Quantities (BOQ) provides a precise financial roadmap. A comprehensive BOQ allows you to procure critical raw materials (such as high-yield rebars and cement) in bulk during favorable market dips.'
        ]
      },
      {
        heading: '4. The Integrated Design & Build Advantage',
        paragraphs: [
          'When architectural design, structural engineering, and site execution are fragmented among disconnected subcontractors, conflicts inevitably arise when drawings clash with practical site realities.',
          'An integrated firm like Solugans & Associates provides single-point accountability: our architects design with our structural engineers and construction teams seated at the same table, eliminating disputes and unnecessary change orders.'
        ]
      }
    ]
  },
  {
    id: 'how-architectural-design-influences-costs',
    slug: 'how-architectural-design-influences-construction-costs',
    title: 'How Architectural Design Influences Construction Costs',
    category: 'Architecture',
    readTime: '5 min read',
    publishedDate: 'August 2026',
    author: {
      name: 'Architectural Design Team',
      role: 'Design Directorate, Solugans & Associates'
    },
    coverImage: '/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
    excerpt: 'Up to 70% of a building’s total construction and lifecycle operating costs are locked in during the initial architectural schematic phase. Understanding this dynamic helps owners maximize luxury without inflating budgets.',
    keyTakeaways: [
      'Building geometry dictates structural complexity; complex multi-angle envelopes increase formwork and steel costs.',
      'Climate-responsive window orientation drastically reduces lifelong electrical air-conditioning bills.',
      'Standardized structural column grids lower concrete and rebar wastage significantly.',
      'Value engineering should occur at the drawing board, not during active on-site pouring.'
    ],
    content: [
      {
        heading: 'The Geometry Factor in Structural Costing',
        paragraphs: [
          'Every bend, irregular projection, and non-orthogonal wall in a floor plan demands custom carpentry, specialized rebar bending, and additional joint waterproofing. While expressive architecture gives a building character, disciplined geometry achieves equal visual prestige with lower construction overhead.',
          'By aligning structural gridlines while introducing expressive elements strategically on facades through cantilevered balconies and texture contrasts, we deliver breathtaking buildings without wasteful structural gymnastics.'
        ]
      },
      {
        heading: 'Passive Climate Adaptation and Lifecycle Savings',
        paragraphs: [
          'In tropical climates, orientation relative to the solar path and prevailing breeze is critical. Buildings with expansive unshaded west-facing glazing absorb punishing afternoon solar heat, driving generator fuel costs and electrical bills sky-high.',
          'Through intelligent louver placement, cantilevered roof eaves, and cross-ventilation corridors, our designs naturally cool interior spaces, ensuring your building remains comfortable even during power outages.'
        ]
      }
    ]
  },
  {
    id: 'why-quality-control-matters-in-construction',
    slug: 'why-quality-control-matters-in-construction',
    title: 'Why Quality Control Matters in Construction',
    category: 'Engineering',
    readTime: '7 min read',
    publishedDate: 'July 2026',
    author: {
      name: 'QA/QC Division',
      role: 'Quality Assurance, Solugans & Associates'
    },
    coverImage: '/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
    excerpt: 'A deep examination into structural testing protocols, rebar tensile standards, concrete water-cement ratios, and why professional engineering oversight is non-negotiable for lasting structures.',
    keyTakeaways: [
      'Substandard concrete batching and unverified steel rebars represent dangerous structural risks.',
      'Continuous on-site testing (slump tests, cube compressive tests) provides verifiable empirical proof.',
      'Quality control is an investment that safeguards life, property value, and peace of mind.'
    ],
    content: [
      {
        heading: 'The Hidden Danger of Unverified Materials',
        paragraphs: [
          'On a construction site, not all steel rebars or sand aggregates are created equal. Impurities in fine aggregates (such as silt or organic matter) weaken concrete bonds, while low-grade rebar lacks the required tensile strength to withstand seismic and structural loads.',
          'At Solugans & Associates, our Quality Control team inspects and tests every incoming batch of materials before they enter our supply chain.'
        ]
      },
      {
        heading: 'Empirical Testing on the Ground',
        paragraphs: [
          'Before any concrete is poured into columns or suspended beams, our resident engineers perform standard slump tests to verify workability and water-cement ratios. Test cubes are sampled, cured in water baths, and subjected to hydraulic crush testing at 7, 14, and 28 days.',
          'This empirical rigor produces a documented Quality Dossier for every completed building, certifying that the structure fulfills all engineering invariants.'
        ]
      }
    ]
  },
  {
    id: 'planning-commercial-construction-anambra',
    slug: 'planning-commercial-construction-anambra-state',
    title: 'Planning a Commercial Construction Project in Anambra State',
    category: 'Project Management',
    readTime: '5 min read',
    publishedDate: 'June 2026',
    author: {
      name: 'Project Advisory Team',
      role: 'Solugans & Associates'
    },
    coverImage: '/assets/images/BUILDINGS UNDER CONDTRUCTION/IMG_3747.JPG',
    excerpt: 'Commercial developments in bustling urban centres like Awka, Onitsha, and Nnewi require dedicated planning around customer vehicular circulation, power redundancy, and high-visibility facade design.',
    keyTakeaways: [
      'Sufficient parking and off-street delivery bays are critical to tenant retention.',
      'Commercial floor plates should feature open spans to accommodate tenant customizations.',
      'Power redundancy and integrated water storage are fundamental to commercial viability.'
    ],
    content: [
      {
        heading: 'Strategic Commercial Positioning',
        paragraphs: [
          'Commercial developments in high-growth corridors must stand out from vehicular traffic while providing intuitive ingress and egress. Congested access roads repel retail customers and reduce rental yields.',
          'We engineer generous setbacks, heavy-duty interlocking paved courts, and distinct delivery loading zones to ensure continuous commercial vibrancy.'
        ]
      },
      {
        heading: 'Flexible Structural Spans for Future Adaptability',
        paragraphs: [
          'The needs of commercial tenants evolve. A space that houses a banking branch today may become a medical diagnostics center or a fashion showroom tomorrow.',
          'We engineer moment-resisting concrete frames with wide column spacing, allowing interior partition drywall configurations to be altered without affecting structural load-bearing members.'
        ]
      }
    ]
  },
  {
    id: 'synergy-architecture-structural-engineering',
    slug: 'understanding-synergy-between-architectural-design-and-structural-engineering',
    title: 'Understanding the Synergy Between Architectural Design and Structural Engineering',
    category: 'Engineering',
    readTime: '6 min read',
    publishedDate: 'May 2026',
    author: {
      name: 'Design & Structural Directorate',
      role: 'Solugans & Associates'
    },
    coverImage: '/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
    excerpt: 'Great architecture is impossible without fearless engineering, and disciplined engineering achieves its highest purpose through inspiring architecture. How Solugans integrates both under one roof.',
    keyTakeaways: [
      'Architecture creates the spatial experience; structural engineering gives it strength and durability.',
      'Early collaboration prevents clashing between mechanical ducts, plumbing stacks, and load-bearing columns.',
      'Unified teams deliver projects faster with lower friction and zero blame-shifting.'
    ],
    content: [
      {
        heading: 'The False Divide Between Art and Science',
        paragraphs: [
          'In many traditional practices, architects conceptualize buildings in isolation and later hand blueprints over to structural engineers to "make it stand up." This disjointed workflow leads to awkward column placements in living rooms, dropped ceiling compromises, and inflated reinforcement costs.',
          'At Solugans & Associates, we reject this division. Our architects understand load paths, while our structural engineers appreciate the sanctity of daylight and volumetric proportion.'
        ]
      },
      {
        heading: 'Coordinated Building Systems (MEP & Structure)',
        paragraphs: [
          'When architectural drafts, structural calculations, and mechanical, electrical, and plumbing (MEP) designs are synthesized digitally from inception, penetrations through slabs and beams are pre-engineered.',
          'This eliminates the destructive practice of chipping into freshly cast concrete on site, preserving the structural life of the building and yielding a pristine architectural finish.'
        ]
      }
    ]
  }
];
