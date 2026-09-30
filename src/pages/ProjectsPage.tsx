import React, { useState, useMemo, useRef } from 'react';
import { 
  GALLERY_CATEGORIES, 
  PROJECT_GALLERY_DATA, 
  ProjectGalleryItem, 
  getCategoryCounts,
  getGalleryImagesByCategory,
  GalleryCategoryDef
} from '../data/projectGallery';
import { 
  PROJECTS_DATA, 
  ProjectItem, 
  COMPLETED_PROJECTS_REGISTER, 
  ONGOING_PROJECTS_REGISTER 
} from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { GalleryLightbox, LightboxImageItem } from '../components/GalleryLightbox';
import { 
  Building2, 
  LayoutGrid, 
  List, 
  Search, 
  MapPin, 
  ShieldCheck, 
  ArrowRight,
  Maximize2,
  X,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  Sparkles,
  Camera,
  Layers,
  ChevronDown
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (route: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject, onNavigate }) => {
  // Gallery state
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>('all');
  const [displayCount, setDisplayCount] = useState<number>(18);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxImages, setLightboxImages] = useState<LightboxImageItem[]>([]);

  // Page section view: 'gallery' | 'case-studies' | 'completed-register' | 'ongoing-register'
  const [activeSection, setActiveSection] = useState<'gallery' | 'case-studies' | 'completed-register' | 'ongoing-register'>('gallery');

  // Case Studies filter & search
  const [caseStudyCategory, setCaseStudyCategory] = useState<string>('All');
  const [caseStudySearch, setCaseStudySearch] = useState<string>('');
  const [caseStudyStatus, setCaseStudyStatus] = useState<'All' | 'Completed' | 'In Progress'>('All');
  const [caseStudyViewMode, setCaseStudyViewMode] = useState<'grid' | 'editorial'>('grid');

  // Register filter & search
  const [registerSearch, setRegisterSearch] = useState<string>('');
  const [registerCategoryFilter, setRegisterCategoryFilter] = useState<string>('All');

  const galleryRef = useRef<HTMLDivElement>(null);

  // Dynamic category counts calculated directly from uploaded assets
  const categoryCounts = useMemo(() => getCategoryCounts(), []);

  // Filter gallery images using curated interleaving for all, and category filter for others
  const filteredGalleryImages = useMemo(() => {
    return getGalleryImagesByCategory(selectedGalleryCategory);
  }, [selectedGalleryCategory]);

  // Sliced images for progressive loading in 'all' view
  const visibleGalleryImages = useMemo(() => {
    if (selectedGalleryCategory === 'all') {
      return filteredGalleryImages.slice(0, displayCount);
    }
    return filteredGalleryImages;
  }, [filteredGalleryImages, selectedGalleryCategory, displayCount]);

  // Featured documentation selection (6 visually diverse photos)
  const featuredWorks = useMemo(() => {
    const featuredIds = ['buc-01-aguleri', 'sub-03', 'reinf-03', 'col-01', 'steel-01', 'ret-01'];
    const items = PROJECT_GALLERY_DATA.filter(img => featuredIds.includes(img.id));
    if (items.length < 6) {
      return PROJECT_GALLERY_DATA.filter(img => img.featured).slice(0, 6);
    }
    return items;
  }, []);

  // Open Lightbox handler
  const handleOpenLightbox = (images: ProjectGalleryItem[], index: number) => {
    const items: LightboxImageItem[] = images.map(img => ({
      src: img.src,
      category: img.category,
      title: img.title,
      caption: img.caption,
      alt: img.alt
    }));
    setLightboxImages(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Switch gallery filter smoothly
  const handleSelectFilter = (categoryKey: string) => {
    setSelectedGalleryCategory(categoryKey);
    setDisplayCount(18);
  };

  // Case study categories
  const caseStudyCategories = [
    'All',
    'Residential',
    'Commercial',
    'Institutional',
    'Civil Engineering',
    'Structural Steel',
    'Energy & MEP'
  ];

  // Filtered case studies
  const filteredCaseStudies = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const categoryMatch = caseStudyCategory === 'All' ? true : project.category === caseStudyCategory;
      const statusMatch = caseStudyStatus === 'All' ? true : project.status === caseStudyStatus;
      const searchLower = caseStudySearch.toLowerCase().trim();
      const searchMatch = 
        !searchLower ||
        project.title.toLowerCase().includes(searchLower) ||
        project.location.toLowerCase().includes(searchLower) ||
        project.summary.toLowerCase().includes(searchLower) ||
        (project.client && project.client.toLowerCase().includes(searchLower)) ||
        project.servicesProvided.some(s => s.toLowerCase().includes(searchLower));

      return categoryMatch && statusMatch && searchMatch;
    });
  }, [caseStudyCategory, caseStudyStatus, caseStudySearch]);

  // Current register
  const currentRegisterList = activeSection === 'completed-register' ? COMPLETED_PROJECTS_REGISTER : ONGOING_PROJECTS_REGISTER;
  const filteredRegister = useMemo(() => {
    return currentRegisterList.filter((item) => {
      const catMatch = registerCategoryFilter === 'All' ? true : item.category === registerCategoryFilter;
      const searchLower = registerSearch.toLowerCase().trim();
      const textMatch = 
        !searchLower ||
        item.project.toLowerCase().includes(searchLower) ||
        item.client.toLowerCase().includes(searchLower) ||
        item.location.toLowerCase().includes(searchLower);
      return catMatch && textMatch;
    });
  }, [currentRegisterList, registerCategoryFilter, registerSearch]);

  const activeCategoryDef = useMemo(() => {
    return GALLERY_CATEGORIES.find(c => c.key === selectedGalleryCategory);
  }, [selectedGalleryCategory]);

  return (
    <div className="w-full pt-28 pb-20">
      {/* ================================================== */}
      {/* 1. PORTFOLIO HERO SECTION */}
      {/* ================================================== */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Hero Typography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                <span className="w-2 h-0.5 bg-orange-500" />
                <span>Field Documentation &amp; Built Works Portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.06] font-display">
                BUILT WITH PRECISION.<br />
                <span className="text-neutral-400">DELIVERED WITH PURPOSE.</span>
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl font-sans">
                Explore selected construction, engineering and structural works delivered by Solugans &amp; Associates Engineering Ltd across residential development, commercial facilities, deep foundations, and structural steelworks.
              </p>

              {/* Key Trust Metrics */}
              <div className="pt-4 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400 font-mono border-t border-neutral-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span className="text-white font-semibold">11 Primary Disciplines</span>
                </div>
                <span className="hidden sm:inline text-neutral-700">·</span>
                <div className="flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-white font-semibold">57 Completed Works</span>
                </div>
                <span className="hidden sm:inline text-neutral-700">·</span>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-orange-400" />
                  <span className="text-white font-semibold">20 Active Sites</span>
                </div>
                <span className="hidden sm:inline text-neutral-700">·</span>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>CAC RC: 1207219</span>
                </div>
              </div>

              {/* Page Section Navigation Switcher */}
              <div className="pt-2 flex flex-col sm:flex-row sm:flex-wrap gap-2">
                <button
                  onClick={() => {
                    setActiveSection('gallery');
                    galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 min-h-[44px] ${
                    activeSection === 'gallery'
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <Camera className="w-4 h-4 shrink-0" />
                  <span>Real Photo Gallery ({PROJECT_GALLERY_DATA.length})</span>
                </button>

                <button
                  onClick={() => setActiveSection('case-studies')}
                  className={`w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 min-h-[44px] ${
                    activeSection === 'case-studies'
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 shrink-0" />
                  <span>Documented Case Studies ({PROJECTS_DATA.length})</span>
                </button>

                <button
                  onClick={() => setActiveSection('completed-register')}
                  className={`w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 min-h-[44px] ${
                    activeSection === 'completed-register'
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Completed Projects Register (57)</span>
                </button>

                <button
                  onClick={() => setActiveSection('ongoing-register')}
                  className={`w-full sm:w-auto px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center sm:justify-start gap-2 min-h-[44px] ${
                    activeSection === 'ongoing-register'
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-950/60'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Active Ongoing Register (20)</span>
                </button>
              </div>
            </div>

            {/* Right Hero Image Column: Real Solugans Project Photograph */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => {
                  const idx = PROJECT_GALLERY_DATA.findIndex(i => i.id === 'buc-01-aguleri');
                  handleOpenLightbox(PROJECT_GALLERY_DATA, idx >= 0 ? idx : 0);
                }}
                className="relative rounded-2xl overflow-hidden border border-neutral-800/90 shadow-2xl bg-neutral-900 aspect-[4/3] sm:aspect-[16/11] group cursor-pointer"
              >
                <img
                  src="/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg"
                  alt="Residential Country Home at Ameze Village, Aguleri under construction by Solugans & Associates Engineering Ltd."
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent opacity-85" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-950/90 border border-neutral-800 text-[11px] font-mono text-orange-400 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Real Project Photographic Documentation</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-orange-400 font-bold uppercase">BUILDINGS UNDER CONSTRUCTION</span>
                    <span className="text-neutral-400 flex items-center gap-1 group-hover:text-white transition-colors">
                      <span>Click to Enlarge</span>
                      <Maximize2 className="w-3 h-3" />
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white font-display">
                    Residential Country Home at Ameze Village, Aguleri
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans line-clamp-1">
                    Multi-level concrete frame and masonry construction for Mr. Primus Odili (Completed Register S/N 18).
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 2. FEATURED WORKS SHOWCASE ("Selected Works") */}
      {/* ================================================== */}
      {activeSection === 'gallery' && (
        <section className="py-16 lg:py-20 border-b border-neutral-900 bg-neutral-950/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Selected Works</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tracking-tight">
                  Featured Project Documentation
                </h2>
                <p className="text-sm text-neutral-400 font-sans mt-1 max-w-2xl">
                  Curated field photographs showing direct evidence of sub-structural excavations, reinforced concrete frames, and tubular steel erections.
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-500">
                Click any tile to open high-resolution fullscreen viewer
              </div>
            </div>

            {/* Featured Grid (6 curated items) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredWorks.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(featuredWorks, idx)}
                  className="group relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/3] cursor-pointer shadow-lg hover:border-neutral-700 transition-all duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-950/85 text-orange-400 border border-neutral-800 backdrop-blur-sm uppercase">
                    {item.category}
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-neutral-950/80 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-all">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Caption & Title */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80">
                    <div className="text-xs font-bold text-white font-display line-clamp-1">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 font-sans mt-0.5 line-clamp-1">
                      {item.caption}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================================================== */}
      {/* 3. FILTERABLE PROJECT GALLERY (THE VISUAL CENTERPIECE) */}
      {/* ================================================== */}
      {activeSection === 'gallery' && (
        <section ref={galleryRef} className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Gallery Intro & Filter Controls */}
            <div className="space-y-6">
              <div className="max-w-3xl space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                  <span className="w-2 h-0.5 bg-orange-500" />
                  <span>Comprehensive Photographic Archive</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                  Work Categories &amp; Field Records
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                  Browse verified field photographs classified by engineering discipline and site activity. Every photograph documents authentic construction work carried out by Solugans &amp; Associates Engineering Ltd.
                </p>
              </div>

              {/* Mobile Category Dropdown Selector (Clean Alternative on Small Viewports) */}
              <div className="sm:hidden">
                <label htmlFor="gallery-category-select" className="sr-only">Select Project Work Category</label>
                <div className="relative">
                  <select
                    id="gallery-category-select"
                    value={selectedGalleryCategory}
                    onChange={(e) => handleSelectFilter(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-white px-4 py-3 rounded-lg appearance-none outline-none focus:border-orange-500 cursor-pointer shadow-md"
                  >
                    <option value="all">ALL PROJECTS / ALL WORKS ({categoryCounts['all']})</option>
                    {GALLERY_CATEGORIES.map((cat) => (
                      <option key={cat.key} value={cat.key}>
                        {cat.filterLabel} ({categoryCounts[cat.key] || 0})
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-neutral-400">
                    <ChevronDown className="w-4 h-4 text-orange-400" />
                  </div>
                </div>
              </div>

              {/* Sophisticated Filter System (All 11 Categories + ALL) */}
              <div className="relative border border-neutral-800 bg-neutral-900/70 rounded-xl p-2 sm:p-2.5">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none flex-nowrap">
                  {/* ALL Filter */}
                  <button
                    onClick={() => handleSelectFilter('all')}
                    className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-2 shrink-0 ${
                      selectedGalleryCategory === 'all'
                        ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-950/50'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800 bg-neutral-950/40 border border-neutral-800/80'
                    }`}
                  >
                    <span>ALL PROJECTS / ALL WORKS</span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      selectedGalleryCategory === 'all' ? 'bg-orange-700 text-white' : 'bg-neutral-800 text-neutral-400'
                    }`}>
                      {categoryCounts['all']}
                    </span>
                  </button>

                  {/* 11 Category Filters */}
                  {GALLERY_CATEGORIES.map((cat) => {
                    const count = categoryCounts[cat.key] || 0;
                    const isActive = selectedGalleryCategory === cat.key;
                    return (
                      <button
                        key={cat.key}
                        onClick={() => handleSelectFilter(cat.key)}
                        className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                          isActive
                            ? 'bg-orange-600 text-white font-semibold shadow-md shadow-orange-950/50'
                            : 'text-neutral-400 hover:text-white hover:bg-neutral-800 bg-neutral-950/40 border border-neutral-800/80'
                        }`}
                      >
                        <span>{cat.filterLabel}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                          isActive ? 'bg-orange-700 text-white' : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Category Header Presentation (Section 8) */}
              <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-3xl">
                  <div className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
                    {selectedGalleryCategory === 'all' ? 'CURATED COMPREHENSIVE ARCHIVE' : activeCategoryDef?.label}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {selectedGalleryCategory === 'all' ? 'All Documented Works & Sites' : activeCategoryDef?.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {selectedGalleryCategory === 'all'
                      ? 'Selected photographic documentation across all 11 project work categories executed by the Solugans & Associates Engineering team.'
                      : activeCategoryDef?.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-xs font-mono text-neutral-400 bg-neutral-950/80 border border-neutral-800 px-3.5 py-2 rounded-lg">
                    Showing <span className="text-white font-bold">{visibleGalleryImages.length}</span> of {filteredGalleryImages.length} photographs
                  </div>
                  {selectedGalleryCategory !== 'all' && (
                    <button
                      onClick={() => handleSelectFilter('all')}
                      className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>View All Works</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Image Grid (Section 9: Editorial Layout) */}
            {filteredGalleryImages.length > 0 ? (
              <div className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                  {visibleGalleryImages.map((image, idx) => {
                    const isFeatureLarge = selectedGalleryCategory === 'all' && (idx === 0 || idx === 7);
                    return (
                      <div
                        key={image.id}
                        onClick={() => handleOpenLightbox(filteredGalleryImages, idx)}
                        className={`group relative rounded-xl overflow-hidden border border-neutral-800/90 bg-neutral-900 cursor-pointer shadow-lg hover:border-neutral-700 transition-all duration-300 ${
                          isFeatureLarge ? 'sm:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                        }`}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-103"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Subtle Dark Overlay Scrim (Section 10) */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                        {/* Top Category Label */}
                        <div className="absolute top-3 left-3 text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded bg-neutral-950/85 text-orange-400 border border-neutral-800 backdrop-blur-sm uppercase">
                          {image.category}
                        </div>

                        {/* Hover View Image Affordance */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-neutral-950/80 border border-neutral-800 text-[11px] font-mono text-neutral-300 group-hover:text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-all flex items-center gap-1.5 opacity-0 group-hover:opacity-100 sm:transition-opacity">
                          <span>View Image</span>
                          <Maximize2 className="w-3 h-3" />
                        </div>

                        {/* Clean Caption Bottom Strip (Section 12) */}
                        <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800/80 space-y-0.5">
                          <div className="text-xs font-bold text-white font-display line-clamp-1">
                            {image.title}
                          </div>
                          <div className="text-[11px] text-neutral-400 font-sans line-clamp-1">
                            {image.caption}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progressive Loading / Load More for "All" */}
                {selectedGalleryCategory === 'all' && displayCount < filteredGalleryImages.length && (
                  <div className="text-center pt-4">
                    <button
                      onClick={() => setDisplayCount(prev => Math.min(prev + 18, filteredGalleryImages.length))}
                      className="px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 rounded-lg transition-colors cursor-pointer shadow-lg inline-flex items-center gap-2"
                    >
                      <span>Load More Project Works (+{filteredGalleryImages.length - displayCount} Remaining)</span>
                      <ChevronDown className="w-4 h-4 text-orange-500" />
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Informative Empty State for Categories without uploaded images */
              <div className="py-20 text-center space-y-4 border border-dashed border-neutral-800 rounded-2xl bg-neutral-900/30 p-8 max-w-2xl mx-auto">
                <Layers className="w-12 h-12 text-neutral-600 mx-auto" />
                <h4 className="text-lg font-bold text-white font-display">
                  {activeCategoryDef?.label} Documentation in Archive
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                  Field photographic plates for {activeCategoryDef?.label.toLowerCase()} are currently being indexed and verified from company site archives. Full engineering calculations and specifications can be reviewed in the Case Studies section below.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
                  <button
                    onClick={() => handleSelectFilter('all')}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-lg transition-colors cursor-pointer"
                  >
                    View All Available Works
                  </button>
                  <button
                    onClick={() => setActiveSection('case-studies')}
                    className="px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Review Case Studies
                  </button>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ================================================== */}
      {/* 4. VERIFIED CASE STUDIES SECTION */}
      {/* ================================================== */}
      {activeSection === 'case-studies' && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-neutral-900">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Technical Case Studies</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white font-display">
                  Documented Project Case Studies
                </h2>
                <p className="text-sm text-neutral-400 font-sans max-w-2xl">
                  Comprehensive engineering monographs detailing architectural briefs, structural approaches, bar bending regimes, and project outcomes.
                </p>
              </div>

              <button
                onClick={() => setActiveSection('gallery')}
                className="text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
              >
                <span>Switch to Real Photo Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-neutral-900/60 border border-neutral-800 rounded-xl">
              {/* Category buttons */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 lg:pb-0 scrollbar-none">
                {caseStudyCategories.map((cat) => {
                  const count = cat === 'All' ? PROJECTS_DATA.length : PROJECTS_DATA.filter(p => p.category === cat).length;
                  const isActive = caseStudyCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setCaseStudyCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                        isActive
                          ? 'bg-orange-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white bg-neutral-950/60 border border-neutral-800'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-orange-700 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search & Layout */}
              <div className="flex items-center gap-3">
                <div className="relative flex-1 sm:w-64">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={caseStudySearch}
                    onChange={(e) => setCaseStudySearch(e.target.value)}
                    placeholder="Search projects, client, location..."
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-xs text-white pl-9 pr-8 py-2 rounded-md outline-none"
                  />
                  {caseStudySearch && (
                    <button
                      onClick={() => setCaseStudySearch('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1 p-1 bg-neutral-950 border border-neutral-800 rounded-md">
                  <button
                    onClick={() => setCaseStudyViewMode('grid')}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      caseStudyViewMode === 'grid' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setCaseStudyViewMode('editorial')}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${
                      caseStudyViewMode === 'editorial' ? 'bg-orange-600 text-white' : 'text-neutral-400 hover:text-white'
                    }`}
                    aria-label="Editorial list view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Case Studies Cards */}
            {filteredCaseStudies.length > 0 ? (
              caseStudyViewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {filteredCaseStudies.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => onSelectProject(project)}
                      index={idx}
                      viewMode="grid"
                    />
                  ))}
                </div>
              ) : (
                <div className="space-y-8 lg:space-y-12">
                  {filteredCaseStudies.map((project, idx) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => onSelectProject(project)}
                      index={idx}
                      viewMode="editorial"
                    />
                  ))}
                </div>
              )
            ) : (
              <div className="py-20 text-center space-y-4 border border-dashed border-neutral-800 rounded-xl bg-neutral-900/30">
                <Building2 className="w-12 h-12 text-neutral-600 mx-auto" />
                <div className="text-lg font-bold text-white font-display">No matching case studies found</div>
                <p className="text-sm text-neutral-400 max-w-md mx-auto">
                  Try adjusting your category filter, status toggle, or search query.
                </p>
                <button
                  onClick={() => {
                    setCaseStudyCategory('All');
                    setCaseStudySearch('');
                    setCaseStudyStatus('All');
                  }}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ================================================== */}
      {/* 5. VERIFIED REGISTERS (57 Completed / 20 Ongoing) */}
      {/* ================================================== */}
      {(activeSection === 'completed-register' || activeSection === 'ongoing-register') && (
        <section className="py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Register Header */}
            <div className="p-6 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 uppercase tracking-widest font-bold">
                  <FileSpreadsheet className="w-4 h-4 text-orange-500" />
                  <span>
                    {activeSection === 'completed-register' 
                      ? 'Official Record: 57 Completed Projects (Pages 248–256)' 
                      : 'Official Record: 20 Ongoing Active Sites (Pages 257–258)'}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {activeSection === 'completed-register' ? 'Verified Completed Works Register' : 'Active Ongoing Projects Register'}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans max-w-2xl">
                  Transcribed directly from the corporate profile of Solugans and Associates Engineering Services Nigeria Ltd (RC 1207219).
                </p>
              </div>

              {/* Register Search and Filter */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={registerSearch}
                    onChange={(e) => setRegisterSearch(e.target.value)}
                    placeholder="Search client or project..."
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 text-xs text-white pl-9 pr-4 py-2 rounded-md outline-none"
                  />
                </div>

                <select
                  value={registerCategoryFilter}
                  onChange={(e) => setRegisterCategoryFilter(e.target.value)}
                  className="bg-neutral-950 border border-neutral-800 text-xs text-neutral-300 py-2 px-3 rounded-md outline-none cursor-pointer"
                >
                  <option value="All">All Categories</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Institutional">Institutional</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Structural Steel">Structural Steel</option>
                  <option value="Energy & MEP">Energy &amp; MEP</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-sans">
                  <thead>
                    <tr className="bg-neutral-900 border-b border-neutral-800 text-neutral-400 font-mono">
                      <th className="py-3.5 px-4 w-16 text-center">S/NO</th>
                      <th className="py-3.5 px-4">PROJECT DESCRIPTION &amp; SCOPE</th>
                      <th className="py-3.5 px-4">CLIENT / SPONSOR</th>
                      <th className="py-3.5 px-4">LOCATION</th>
                      <th className="py-3.5 px-4">CATEGORY</th>
                      <th className="py-3.5 px-4 text-center">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900 text-neutral-300">
                    {filteredRegister.map((item) => (
                      <tr key={item.sNo} className="hover:bg-neutral-900/50 transition-colors">
                        <td className="py-3.5 px-4 text-center font-mono font-bold text-orange-400">
                          {item.sNo}
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-white max-w-md">
                          {item.project}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-300 max-w-xs">
                          {item.client}
                        </td>
                        <td className="py-3.5 px-4 text-neutral-400 font-mono whitespace-nowrap">
                          {item.location}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-[11px] text-orange-400 whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                            item.status === 'Completed'
                              ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/80'
                              : 'bg-amber-950/80 text-amber-400 border border-amber-800/80'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${item.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="p-4 bg-neutral-900/80 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                <div>
                  Showing {filteredRegister.length} of {currentRegisterList.length} verified projects from corporate register
                </div>
                <div>
                  Corporate Affairs Commission: RC 1207219
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ================================================== */}
      {/* 6. CTA SECTION */}
      {/* ================================================== */}
      <section className="py-16 lg:py-24 border-t border-neutral-900 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
            <span>Engineering Proposals &amp; Consultation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Plan Your Construction With Proven Engineering Precision
          </h2>

          <p className="text-base text-neutral-300 font-sans leading-relaxed">
            From initial site survey and architectural drafting to turnkey structural execution and MEP reticulation, Solugans &amp; Associates Engineering Ltd brings empirical discipline to every site.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors shadow-xl shadow-orange-950/60 cursor-pointer"
            >
              Request a Project Proposal
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-800 rounded-md transition-colors cursor-pointer"
            >
              Review All Engineering Services
            </button>
          </div>
        </div>
      </section>

      {/* Fullscreen Image Lightbox Modal */}
      <GalleryLightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex(prev => (prev + 1) % lightboxImages.length)}
        onPrev={() => setLightboxIndex(prev => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
      />
    </div>
  );
};
