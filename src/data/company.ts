export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  role: string;
  qualification: string;
  institution?: string;
  experienceYears?: number;
  regNumber?: string;
  professionalBodies?: string[];
  bio: string;
  image?: string;
}

export interface MachineryItem {
  name: string;
  quantity: string | number;
  description: string;
}

export const COMPANY_INFO = {
  // Official Corporate Identifiers (from Certificate of Incorporation, Mem & Art, Tax & Trademark)
  name: 'Solugans and Associates Engineering Services Nigeria Ltd',
  shortName: 'Solugans & Associates',
  tradeMark: 'SU & DEVICE (Registered under Trade Marks Act, Federal Ministry of Trade & Investment)',
  rcNumber: 'RC 1207219',
  incorporationDate: 'July 31, 2014',
  incorporation: 'Incorporated in the Federal Republic of Nigeria under the Companies and Allied Matters Act 1990 (RC 1207219)',
  registrationType: 'Private Limited Liability Company (CAC Verified)',
  
  // Tax & Statutory Compliance
  tin: '20518075-0001',
  firsId: '2201110036985',
  firsOffice: 'Awka Micro and Small Tax Office, No. 10 Hon. Pete Ibiza Street, Glass House, Awka',
  asinNumber: '2047330779', // Anambra State Internal Revenue Service E-Tax Verification ASIN
  airsCertificate: 'AIRS-TCC-2024-1022794 (Valid Anambra State E-Tax Clearance)',
  vatRegistered: true,

  tagline: 'WE PLAN. WE DESIGN. WE BUILD.',
  supportingStatement: 'Engineering, Architecture & Construction Delivered With Precision.',
  summary: 'Solugans & Associates is a pioneering engineering and construction company in Eastern Nigeria, providing full-lifecycle built environment services. As documented in our Corporate Affairs Commission registration (RC 1207219), our multidisciplinary practice delivers civil and structural engineering, architectural design, building construction, landscaping, quantity surveying, interior decoration, furniture making, concrete interlocking, and plant hire.',

  // Exact Corporate Vision from Company Profile (Page 32)
  vision: 'Providing a tradition of excellent engineering services, architectural designs, building construction, landscaping design and quantity survey services exceeding our clients\' expectations and recognized locally and abroad through: building strong client loyalty, adopting the best possible engineering methodologies in compliance with the latest design/construction codes, and empowering effective corporate communication.',

  // Exact Corporate Mission from Company Profile (Page 33)
  mission: 'Solugans & Associates Engineering Services aspires for a leading global market position by delivering the highest value to each relationship developed and expanding our market presence to become one of the most recognized companies in architecture, engineering, and construction. We combine highly-skilled team members with proven methodology, leveraging advanced technology for efficiency, accuracy, and progressive growth.',

  // Exact 5 Core Values from Company Profile (Page 34)
  values: [
    {
      title: 'Excellence & Quality Assurance',
      description: 'Providing professional and technical excellence to our clients is at the root of what we do. We are committed to a policy of quality assurance and ensure this policy is understood, implemented, and maintained throughout all site operations.'
    },
    {
      title: 'Ethics & Moral Accountability',
      description: 'An enduring commitment to professional ethical standards is deeply ingrained in every conduct and business action. Decision-making processes embrace strict adherence to universally accepted ethical values and local/international statutes.'
    },
    {
      title: 'Mutual Respect & Teamwork',
      description: 'Transparency, teamwork, and trust are the main constituents of our roadmap to outstanding performance. Our greatest asset is a corporate culture that cultivates a diversity of technical backgrounds, experience, and views.'
    },
    {
      title: 'Sustainability',
      description: 'A committed resolution to promote the short- and long-term future welfare of our company, our clients, and the built environment we impact, acting as the force empowering our continued growth and regional expansion.'
    },
    {
      title: 'Environmental Stewardship',
      description: 'Striking the delicate balance between conserving natural resources and serving demanding engineering needs constitutes our operating philosophy, deploying energy-efficient systems that respect the natural environment.'
    }
  ],

  // Audited Financial Track Record (Audited by B.C. Nwankwo & Co. Chartered Accountants, 2020-2023)
  financialHighlights: [
    { year: '2023', revenue: '₦208,035,420.00', grossProfit: '₦14,562,479.40', netProfit: '₦3,732,188.28' },
    { year: '2022', revenue: '₦183,143,650.35', grossProfit: '₦11,565,122.15', netProfit: '₦2,368,539.91' },
    { year: '2021', revenue: '₦140,208,642.00', grossProfit: '₦8,853,870.00', netProfit: '₦2,027,900.18' },
    { year: '2020', revenue: '₦116,021,358.55', grossProfit: '₦4,756,348.69', netProfit: '₦1,254,591.01' }
  ],

  // Plants & Machineries Inventory (Documented on Page 195 of Company Profile)
  machineries: [
    { name: 'Heavy Tipper / Haulage Trucks (Mack & CAT)', quantity: 4, description: 'Heavy earthmoving and site material logistics haulage' },
    { name: 'Concrete Mixers', quantity: 5, description: 'Heavy-duty site concrete mixing units for controlled grade batches' },
    { name: 'Electrical Poker Vibrating Machines', quantity: 10, description: 'High-frequency concrete compaction for air-void elimination' },
    { name: 'Heavy Jack Hammers', quantity: 7, description: 'Substructural rock breaking and excavation tools' },
    { name: 'Steel & Masonry Cutting Machines', quantity: 5, description: 'High-precision rebar cutting and stone shaping' },
    { name: 'Optical Laser Alignment Levels', quantity: 3, description: 'Millimeter-accurate elevation and vertical column alignment' },
    { name: 'Compacting Machines', quantity: 2, description: 'Plate and roller soil sub-base compaction' },
    { name: 'Heavy-Duty Asphalt Cutters', quantity: 2, description: 'Road cutting, drainage trenching, and asphalt re-sheeting' },
    { name: 'Vacuum Blower Machines', quantity: 2, description: 'Surface preparation for deck casting and waterproofing' },
    { name: 'Deep Drilling Machines', quantity: 2, description: 'Substructural exploration and anchoring installation' },
    { name: 'Industrial Circular Saws & G. Saws', quantity: 'Multiple', description: 'Formwork carpentry and roof truss joinery fabrication' }
  ],

  // Verified Management & Key Technical Personnel (from Pages 35 & 157-194 of Profile)
  managementTeam: [
    {
      name: 'Arc. Uganeme Emeka Donatus',
      title: 'Managing Director / Chairman',
      role: 'Principal Architect & Executive Lead',
      qualification: 'HND (Upper Credit) Architecture',
      institution: 'Federal Polytechnic Oko',
      experienceYears: 15,
      image: '/src/assets/images/headshot_arc_uganeme_emeka_ceo.jpg',
      professionalBodies: ['Architect Graduates Association (Financial Secretary)'],
      bio: 'Visionary architect and founder of Solugans & Associates. Holds an Upper Credit Higher National Diploma in Architecture from Federal Polytechnic Oko (2010), completed NYSC service (2011–2012), and has steered the delivery of over 70 residential, commercial, and institutional projects across Nigeria.'
    },
    {
      name: 'Engr. Okafor Peter Okechukwu',
      title: 'Senior Civil Engineer',
      role: 'Head of Civil & Structural Engineering',
      qualification: 'B.Eng (Civil Engineering)',
      institution: 'Nnamdi Azikiwe University, Awka (2004)',
      experienceYears: 20,
      image: '/src/assets/images/headshot_okafor_peter_1790565597832.jpg',
      regNumber: 'COREN R. 20,232 · MNSE 23,221',
      professionalBodies: ['Council for the Regulation of Engineering in Nigeria (COREN)', 'Nigerian Society of Engineers (MNSE)'],
      bio: 'Chartered civil and structural engineer with over two decades of practice in multi-storey structural framing, deep basement retaining structures, bridge approach engineering, and institutional buildings across Lagos, Enugu, and Anambra State.'
    },
    {
      name: 'Arc. Nwankwo Anthony Okudo',
      title: 'Principal Consultant Architect',
      role: 'Masterplanning & Architectural Advisory',
      qualification: 'B.Arch (Upper Division)',
      institution: 'University of Nigeria, Nsukka (1980)',
      experienceYears: 40,
      image: '/src/assets/images/headshot_nwankwo_anthony_1790565609031.jpg',
      regNumber: 'ARCON F/1650 · MNIA M/1754',
      professionalBodies: ['Architects Registration Council of Nigeria (ARCON)', 'Nigerian Institute of Architects (MNIA)'],
      bio: 'Distinguished architect registered with ARCON since 1999. Brings four decades of architectural experience in state ministries of works, university campuses, and civic landmark buildings.'
    },
    {
      name: 'Engr. Collins Anigbogu Chukwunonso',
      title: 'Lead Electrical Engineer',
      role: 'Electrical & Power Systems Engineering',
      qualification: 'B.Eng (Electrical & Electronic Engineering)',
      institution: 'Nnamdi Azikiwe University, Awka (2017)',
      experienceYears: 8,
      image: '/src/assets/images/headshot_anigbogu_collins_1790565619526.jpg',
      regNumber: 'COREN R. 64,074 · MNSE',
      professionalBodies: ['Council for the Regulation of Engineering in Nigeria (COREN)', 'Nigerian Society of Engineers (MNSE)'],
      bio: 'Registered electrical engineer specializing in high-voltage substations, 33kV/0.415kV distribution networks, solar mini-grids, earthing integration into structural rebar, and commercial MEP reticulation.'
    },
    {
      name: 'Engr. Ohakanu Chukwudum Samuel',
      title: 'Mechanical Engineer',
      role: 'Building Services & HVAC Engineering',
      qualification: 'B.Eng (Mechanical Engineering)',
      institution: 'University of Nigeria, Nsukka (2005)',
      experienceYears: 18,
      image: '/src/assets/images/headshot_ohakanu_samuel_1790565669763.jpg',
      regNumber: 'COREN R. 26,082 · MNSE 27,455',
      professionalBodies: ['COREN Registered Engineer', 'Nigerian Society of Engineers (MNSE)'],
      bio: 'Registered mechanical engineer overseeing building mechanical services, HVAC air handling systems, water supply and drainage networks, and commercial fire suppression installations.'
    },
    {
      name: 'Akigwe Michael Ifeanyichukwu',
      title: 'Director',
      role: 'Corporate Governance & Procurement',
      qualification: 'Business Administration',
      image: '/src/assets/images/headshot_akigwe_michael_1790565679922.jpg',
      bio: 'Executive Director of Solugans & Associates, overseeing corporate procurement partnerships, statutory compliance, and strategic client alliances.'
    }
  ] as TeamMember[],

  // Key Site & Field Engineering Team (Pages 35 & 188-194)
  fieldEngineeringTeam: [
    {
      name: 'Anigbogu Uche Benjamin',
      role: 'Site Engineer',
      qualification: 'Civil Engineering (Federal Polytechnic Oko, 2016/2017)',
      experienceYears: 10,
      image: '/src/assets/images/headshot_anigbogu_uche_1790565690897.jpg',
      bio: 'A seasoned civil site engineer with a decade of field experience managing concrete pours, rebar placement, and precision foundation alignments.'
    },
    {
      name: 'Ebubechukwu Ifeanyi',
      role: 'Structural Engineer',
      qualification: 'Civil Engineering (Federal Polytechnic Oko, 2020/2021)',
      experienceYears: 5,
      image: '/src/assets/images/headshot_ebubechukwu_ifeanyi_1790565702858.jpg',
      bio: 'Specialist in structural detailing, beam-and-column load capacity analysis, and reinforcement inspection.'
    },
    {
      name: 'Egbum Praise Sopuruchukwu',
      role: 'Project Architect',
      qualification: 'Architecture (Nnamdi Azikiwe University, Awka, 2018)',
      experienceYears: 5,
      bio: 'Architectural coordinator ensuring 3D schematic designs and interior working drawings are executed accurately on site.'
    },
    {
      name: 'Ezeokoli Ifeanyichukwu',
      role: 'Site Engineer',
      qualification: 'Building Technology (Federal Polytechnic Oko, 2019/2020)',
      experienceYears: 4,
      bio: 'Building technologist managing site material quality assurance, mortar batching, and masonry finishes.'
    },
    {
      name: 'Nnalikwu Somtochukwu Bartholomew',
      role: 'Site Manager',
      qualification: 'Architecture (University of Nigeria, Nsukka, 2018)',
      experienceYears: 4,
      bio: 'Comprehensive site manager coordinating daily trades, logistical deliveries, and structural safety protocols.'
    },
    {
      name: 'Maureen Ezondu',
      role: 'Quantity Surveyor',
      qualification: 'Quantity Surveying (Federal Polytechnic Oko, 2020)',
      experienceYears: 4,
      image: '/src/assets/images/headshot_maureen_ezondu_1790565630188.jpg',
      bio: 'Cost engineer preparing detailed Bills of Quantities (BOQ), material schedules, and interim valuation audits.'
    },
    {
      name: 'Ugwu Goodluck Chinedu',
      role: 'Site Engineer',
      qualification: 'Civil Engineering (Federal Polytechnic Oko, 2018)',
      experienceYears: 5,
      bio: 'Civil engineer supervising deep foundation works, earthmoving compaction, and concrete curing regimes.'
    },
    {
      name: 'Iyiola John Akinropo',
      role: 'Site Engineer',
      qualification: 'Civil Engineering (Osun State Polytechnic, Iree, 2021)',
      experienceYears: 3,
      bio: 'Civil site engineer handling daily setting out, level verification, and tubular steel erection supervision.'
    },
    {
      name: 'Uganeme Ujunwa Catherine',
      role: 'Site Secretary',
      qualification: 'Computer Science (Federal Polytechnic Oko, 2019)',
      experienceYears: 10,
      bio: 'Directs on-site administrative records, material delivery manifests, daily field logs, and contractor communications.'
    },
    {
      name: 'Chukwujeme Chidimma Somto',
      role: 'Office Secretary',
      qualification: 'Psychology (Nnamdi Azikiwe University, Awka, 2022/2023)',
      experienceYears: 3,
      bio: 'Coordinates central Awka office operations, client correspondence, statutory filing, and front-desk consulting.'
    }
  ] as TeamMember[],

  clientSectors: [
    'Property Developers & Private Residential Estate Owners',
    'Commercial Plazas, Supermarkets & Retail Showrooms',
    'Universities, Polytechs & Educational Institutions (UNIZIK, ESUT, COOU, IMT)',
    'Banking Facilities & Commercial Corporate Offices',
    'Hotel & Hospitality Developments (Cichotel Classique, etc.)',
    'Agricultural & Industrial Processing Mills (Omekannaya Oil Mills)',
    'Religious & Civic Community Facilities (Church Auditoriums, Secondary Schools)'
  ],

  supportAvailability: '24/7 Technical Project Consultation Desk',

  address: {
    line1: 'No. 5 Secretariat Road, Aroma Junction',
    line2: 'Office No. 2, First Floor, Radopin Supermarket',
    city: 'Awka',
    state: 'Anambra State',
    country: 'Nigeria',
    fullFormatted: 'No. 5 Secretariat Road, Aroma Junction (First Floor Radopin Supermarket), Awka, Anambra State, Nigeria',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=5+Secretariat+Road+Aroma+Junction+Awka+Anambra+State+Nigeria'
  },

  contacts: {
    email: 'info@solugans.com',
    secondaryEmail: 'eugans@yahoo.com',
    primaryPhone: '+234 803 227 4204',
    secondaryPhone: '+234 808 366 2835',
    additionalPhone: '+234 909 358 8544',
    whatsappNumber: '2348032274204',
    whatsappPrefilledMessage: 'Hello Solugans & Associates, I would like to discuss a construction/engineering project.'
  },

  testimonials: [
    {
      quote: 'Solugans & Associates demonstrated exceptional technical proficiency during the engineering and execution of our multi-storey commercial facility in Awka. Their engineering team ensured structural integrity while delivering on schedule and within budget.',
      name: 'Valentine Okoye',
      role: 'Commercial Property Investor',
      location: 'Awka, Anambra State'
    },
    {
      quote: 'The level of coordination between their architectural design team and construction engineers on site was remarkable. Clear communication, meticulous attention to detail, and genuine engineering accountability.',
      name: 'Chief Damian Afam Okeke',
      role: 'Estate Developer',
      location: 'Anambra State'
    },
    {
      quote: 'Working with Solugans on our residential mansion gave us complete peace of mind. Their supervision standards, foundation rebar inspections, and material quality control protocols are second to none.',
      name: 'Engr. Kingsley Ezeasor',
      role: 'Private Residence Owner',
      location: 'Nanka, Anambra State'
    }
  ],

  processSteps: [
    {
      step: '01',
      title: 'Consultation & Discovery',
      description: 'Comprehensive evaluation of client vision, project requirements, budget framework, and programmatic objectives.'
    },
    {
      step: '02',
      title: 'Site & Geotechnical Assessment',
      description: 'Topographic surveys, soil characterization, site accessibility analysis, and environmental assessment.'
    },
    {
      step: '03',
      title: 'Architectural & Engineering Design',
      description: 'Schematic drawings, structural modeling, MEP detailing, Bill of Quantities (BOQ), and regulatory approvals.'
    },
    {
      step: '04',
      title: 'Costing & Strategic Procurement',
      description: 'Materials sourcing, vendor vetting, construction scheduling, and proactive risk mitigation strategies.'
    },
    {
      step: '05',
      title: 'Construction & Field Supervision',
      description: 'Mobilization of certified personnel, precision structural execution, daily engineering oversight, and quality audits.'
    },
    {
      step: '06',
      title: 'Quality Testing & Project Delivery',
      description: 'Comprehensive systems commissioning, non-destructive testing, punch-list clearance, and formal client handover.'
    }
  ]
};
