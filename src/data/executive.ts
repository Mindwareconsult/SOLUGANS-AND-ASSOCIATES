export interface CareerTimelineItem {
  period: string;
  role: string;
  organization: string;
  location?: string;
  type: 'architectural' | 'consultancy' | 'management' | 'enterprise';
  description?: string;
}

export interface EducationItem {
  institution: string;
  qualification: string;
  period?: string;
  details?: string;
}

export interface LeadershipRoleItem {
  role: string;
  organization: string;
  period?: string;
  category: 'professional' | 'faith' | 'community' | 'youth';
}

export interface CommunityInitiativeItem {
  title: string;
  year: string;
  role: string;
  description: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  date?: string;
  category: string;
}

export interface PhilosophyPillar {
  title: string;
  summary: string;
}

export const EXECUTIVE_DATA = {
  fullName: 'Arc. Uganeme Emeka John Donatus',
  formalTitle: 'Managing Director / CEO',
  professionalDesignations: 'Architect | Entrepreneur | Community Leader | Youth Advocate',
  company: 'Solugans & Associates Engineering Ltd.',
  image: '/SCEO.jpg',
  altImage: '/src/assets/images/headshot_arc_uganeme_emeka_ceo.jpg',
  motto: 'Tested by Service, Trusted by the People.',
  
  summary: 'An architect, entrepreneur and community leader whose professional journey reflects a sustained commitment to design excellence, construction, responsible leadership and community development.',
  
  coreIntro: [
    'Arc. Uganeme Emeka John Donatus is an architect, entrepreneur, community leader and youth advocate whose career reflects a sustained commitment to professional excellence, responsible leadership, community development and service to society.',
    'With professional experience spanning architecture, construction management, project supervision, property development and business leadership, Arc. Uganeme has built a career at the intersection of design, engineering, construction and enterprise. His professional journey is complemented by extensive involvement in youth development, faith-based service and grassroots community leadership.',
    'His approach to leadership is grounded in a simple conviction: leadership is fundamentally about service, integrity, accountability and creating opportunities for others to thrive.'
  ],

  aboutPreview: {
    heading: 'MEET OUR MANAGING DIRECTOR',
    eyebrow: 'EXECUTIVE LEADERSHIP',
    supportingQuote: 'Leadership grounded in professional excellence, responsible service and a commitment to building lasting value.',
    shortBioPara1: 'Arc. Uganeme Emeka John Donatus is an architect, entrepreneur, community leader and youth advocate whose career spans architecture, construction, project supervision, entrepreneurship and community development.',
    shortBioPara2: 'With over a decade and a half of practical and strategic leadership, he guides Solugans & Associates Engineering Ltd. at the confluence of design quality, engineering rigor, and client value across landmark residential, commercial, and civil infrastructure developments in Nigeria.'
  },

  professionalJourney: {
    overview: 'Arc. Uganeme began developing practical experience in the built environment early in his career, serving as a Site Manager at Omega Engineering Services, Enugu, where he gained hands-on exposure to construction supervision and project execution.',
    evolution: 'His professional career subsequently evolved through architectural practice and consultancy, taking on progressively significant responsibilities with notable practices and commercial entities.',
    affiliations: [
      { role: 'Assistant Drafting Architect', org: 'Mendive Associates Ltd., Port Harcourt' },
      { role: 'Assistant Drafting Architect', org: 'The late Arc. J. C. Maduka' },
      { role: 'Associate Architect', org: 'Greenlife Pharmaceuticals Ltd.' },
      { role: 'Chief Architect', org: 'Radopin Supermarket Ltd., Awka' },
      { role: 'Consultant Architect', org: 'Fred Martins Furniture and Electronics Ltd.' },
      { role: 'Consultant Architect', org: 'Easylife Electronics Furniture Ltd.' }
    ],
    contribution: 'These experiences have contributed to his practical understanding of architectural design, construction processes, project coordination and the relationship between design quality and successful project delivery.',
    corporateLeadership: 'As Managing Director of Solugans & Associates Engineering Services Nigeria Limited, Arc. Uganeme provides strategic leadership to an organization operating across architecture, engineering, construction and related professional services. He also provides entrepreneurial leadership through E.D Eugans Global Limited and Style Creations Interiors and Ornamentals, reflecting his broader interest in design, enterprise development and the built environment.'
  },

  education: [
    {
      institution: 'Federal Polytechnic Oko',
      qualification: 'Higher National Diploma (HND) in Architectural Technology',
      period: '2005 – 2010',
      details: 'Studied architectural technology, design fundamentals, structural drafting, and construction methodology.'
    },
    {
      institution: 'National Youth Service Corps (NYSC)',
      qualification: 'NYSC National Service Certificate',
      period: '2011 – 2012',
      details: 'Completed the mandatory national service programme, contributing to national development and community construction initiatives.'
    },
    {
      institution: 'Federal Science and Technical College, Awka',
      qualification: 'Secondary & Technical Education',
      period: 'Secondary Education',
      details: 'Technical and scientific foundation in engineering graphics, technical drawing, and general sciences.'
    },
    {
      institution: 'Government Technical College, Awka',
      qualification: 'Technical Studies',
      period: 'Early Secondary',
      details: 'Foundational craft and technical skills development.'
    },
    {
      institution: 'Community High School, Nanka',
      qualification: 'Secondary Studies',
      period: 'Secondary Education',
      details: 'Academic secondary schooling in Nanka, Anambra State.'
    },
    {
      institution: 'Isigwunwagu Central School, Nanka',
      qualification: 'Primary Education',
      period: 'Primary',
      details: 'Foundational elementary education in Nanka.'
    }
  ] as EducationItem[],

  careerTimeline: [
    {
      period: '2003 – 2004',
      role: 'Site Manager',
      organization: 'Omega Engineering Services',
      location: 'Enugu',
      type: 'management',
      description: 'Hands-on exposure to construction supervision, earthworks, masonry alignments, and site-level project execution.'
    },
    {
      period: '2008 – 2017',
      role: 'Assistant Drafting Architect',
      organization: 'Late Arc. J. C. Maduka',
      type: 'architectural',
      description: 'Architectural drafting, detailed construction drawings, detailing of civic and residential projects under senior mentorship.'
    },
    {
      period: '2009 – 2013',
      role: 'Assistant Drafting Architect',
      organization: 'Mendive Associates Ltd.',
      location: 'Port Harcourt',
      type: 'architectural',
      description: 'Architectural schematics, structural coordination, and technical drafting for corporate and commercial briefs.'
    },
    {
      period: '2009 – Present',
      role: 'Associate Architect',
      organization: 'Greenlife Pharmaceuticals Ltd.',
      type: 'consultancy',
      description: 'Architectural advisory, pharmaceutical retail design standards, and commercial facility layout planning.'
    },
    {
      period: '2012 – Present',
      role: 'Chief Architect',
      organization: 'Radopin Supermarket Ltd.',
      location: 'Awka',
      type: 'consultancy',
      description: 'Lead architect for retail supermarkets, multi-storey commercial retail plazas, and corporate headquarter interiors.'
    },
    {
      period: '2014 – Present',
      role: 'Managing Director / CEO',
      organization: 'Solugans & Associates Engineering Services Nigeria Limited',
      location: 'Awka, Anambra State',
      type: 'enterprise',
      description: 'Executive leadership, corporate strategy, architectural direction, and turnkey construction oversight across residential, commercial, and institutional portfolios.'
    },
    {
      period: 'Entrepreneurial Venture',
      role: 'Managing Director',
      organization: 'E.D Eugans Global Limited',
      type: 'enterprise',
      description: 'Corporate governance and enterprise development across broader commercial services.'
    },
    {
      period: 'Entrepreneurial Venture',
      role: 'Chief Executive Officer',
      organization: 'Style Creations Interiors and Ornamentals',
      type: 'enterprise',
      description: 'Interior architecture, bespoke ornamental plaster moldings, decorative concrete finishing, and luxury space styling.'
    },
    {
      period: '2020 – Present',
      role: 'Consultant Architect',
      organization: 'Fred Martins Furniture and Electronics Ltd.',
      type: 'consultancy',
      description: 'Commercial showroom space planning, facade design, and display engineering.'
    },
    {
      period: '2023 – 2025',
      role: 'Consultant Architect',
      organization: 'Easylife Electronics Furniture Ltd.',
      type: 'consultancy',
      description: 'Architectural consultancy for modern consumer electronics and furniture retail showrooms.'
    }
  ] as CareerTimelineItem[],

  leadershipRoles: [
    {
      role: 'Financial Secretary',
      organization: 'National Association of Architecture Students, Federal Polytechnic Oko',
      period: '2009 – 2010',
      category: 'professional'
    },
    {
      role: 'Financial Secretary',
      organization: "Architects' Graduates of Federal Polytechnic Oko",
      category: 'professional'
    },
    {
      role: 'Financial Secretary',
      organization: 'Laity Council, Catholic Diocese of Awka',
      category: 'faith'
    },
    {
      role: 'Member, Building Committee',
      organization: 'Catholic Diocese of Ekwulobia',
      category: 'faith'
    },
    {
      role: 'President',
      organization: "Catholic Youth Organization of Nigeria (CYON), St. Jude's Catholic Church, Umudala Village, Nanka",
      category: 'faith'
    },
    {
      role: 'Igwe Ezedioranma II',
      organization: 'Awka Diocesan CYON',
      category: 'faith'
    },
    {
      role: 'Chairman',
      organization: 'Umudala Village, Nanka',
      category: 'community'
    },
    {
      role: 'Secretary General',
      organization: 'Nanka Youth Association',
      period: '2022 – 2025',
      category: 'youth'
    },
    {
      role: 'National Leader',
      organization: 'Igbo Bụ Ofu Progressive Association of Nigeria',
      category: 'community'
    }
  ] as LeadershipRoleItem[],

  grassrootsInitiatives: [
    {
      title: 'Nanka Road Safety Summit',
      year: '2022',
      role: 'Convener & Organizer',
      description: 'A community-focused civic initiative addressing transport corridor safety, road-use sensitization, and pedestrian awareness across Nanka and surrounding communities.'
    },
    {
      title: 'Nanka Teen Summit',
      year: '2023 & 2024',
      role: 'Convener & Youth Mentor',
      description: 'An annual youth development platform providing direct mentorship, career path guidance, personal development workshops, and ethical leadership discussions for young people.'
    },
    {
      title: 'Nanka Women Summit',
      year: '2024',
      role: 'Convener & Facilitator',
      description: 'A dedicated social development forum focused on women’s community participation, micro-entrepreneurship, leadership development, and collective socio-economic empowerment.'
    },
    {
      title: 'Umudala Village Administration',
      year: 'Community Stewardship',
      role: 'Village Chairman',
      description: 'Fostered grassroots community cooperation, dispute resolution, peaceful co-existence, infrastructure maintenance, and inclusive town union participation.'
    },
    {
      title: 'Nanka Youth Association Secretariat',
      year: '2022 – 2025',
      role: 'Secretary General',
      description: 'Steered youth-led community development initiatives, civic mobilization, youth advocacy, and educational empowerment drives.'
    }
  ] as CommunityInitiativeItem[],

  leadershipPhilosophy: {
    title: 'LEADERSHIP BUILT ON SERVICE',
    coreBelief: 'At the heart of this philosophy is his belief that leaders are called to serve, not to be served.',
    definition: 'For Arc. Uganeme, leadership is not defined simply by position or title. It is defined by responsibility, integrity, empathy and measurable service to people and communities.',
    pillars: [
      {
        title: 'Youth Empowerment',
        summary: 'Creating opportunities for young people to develop the confidence, skills and leadership capacity required to contribute meaningfully to society.'
      },
      {
        title: 'Community Development',
        summary: 'Supporting initiatives that address practical community needs and encourage people to participate in their own development.'
      },
      {
        title: 'Integrity & Accountability',
        summary: 'Promoting responsible leadership, transparency and ethical conduct in professional and community engagements.'
      },
      {
        title: 'Infrastructure & Urban Development',
        summary: 'Using professional knowledge of architecture, construction and the built environment to contribute to sustainable physical development.'
      },
      {
        title: 'Unity & Social Progress',
        summary: 'Encouraging cooperation across social, religious and community lines in pursuit of shared development objectives.'
      }
    ] as PhilosophyPillar[]
  },

  multidisciplinaryApproach: {
    title: 'A Multidisciplinary Approach to Development',
    narrative: [
      "One of Arc. Uganeme's distinguishing characteristics is the intersection of his professional and entrepreneurial interests.",
      'His experience across architecture, construction, engineering-related project environments, interiors, property development and business management gives him a broad perspective on the built environment.',
      'This multidisciplinary outlook informs his leadership at Solugans & Associates Engineering Ltd., where professional expertise is brought together with practical project experience and an understanding of clients’ development needs.',
      'His objective is not simply to deliver structures, but to contribute to projects that combine functionality, quality, thoughtful design, durability and value.'
    ]
  },

  awards: [
    {
      title: 'Award of Recognition',
      organization: 'Department of Human Physiology, College of Health Sciences, Nnamdi Azikiwe University, Nnewi Campus',
      date: '15 September 2023',
      category: 'Academic & Professional Recognition'
    },
    {
      title: 'Special Ambassador of Youth Award',
      organization: 'Catholic Diocese of Awka / Catholic Youth Organization of Nigeria (CYON), Awka II Deanery',
      date: '25 September 2016',
      category: 'Faith & Youth Leadership'
    },
    {
      title: 'Platinum Award for Humanitarian Services',
      organization: 'Rotaract Club of Nanka',
      date: '27 April 2024',
      category: 'Humanitarian Service'
    },
    {
      title: 'Humanitarian Service Award',
      organization: 'Rotaract Club of Amawbia',
      date: '3 December 2023',
      category: 'Humanitarian Service'
    },
    {
      title: 'Outstanding Architect of the Year',
      organization: 'Anambra Media/Movie Excellence Award',
      date: '25 September 2022',
      category: 'Professional Excellence'
    },
    {
      title: 'Distinguished Award of Appreciation',
      organization: 'Nanka Students Union',
      date: 'Documented Civic Honor',
      category: 'Student & Youth Mentorship'
    },
    {
      title: 'Man of Excellence – Great Son of Nanka',
      organization: 'N.P.U. Women Wing, Nanka',
      date: 'Documented Community Honor',
      category: 'Community Leadership'
    },
    {
      title: 'Award of Honour',
      organization: 'Catholic Diocese of Awka / CYON',
      date: 'Documented Diocesan Honor',
      category: 'Faith & Community Service'
    }
  ] as AwardItem[],

  legacyOfService: {
    title: 'Legacy of Service',
    paragraphs: [
      'Arc. Uganeme Emeka John Donatus continues to combine professional practice with entrepreneurship, youth development and community service.',
      'His career reflects a belief that professional success carries a responsibility to contribute positively to the communities in which one operates.',
      'Through architecture and construction, he contributes to the physical development of the built environment.',
      'Through entrepreneurship, he creates opportunities for enterprise and employment.',
      'Through youth engagement, he supports mentorship and leadership development.',
      'Through community service, he contributes to initiatives focused on unity, development and social progress.',
      'His journey is therefore defined by the convergence of professional expertise, enterprise, leadership and service.'
    ],
    closingQuote: 'Tested by Service, Trusted by the People.'
  }
};
