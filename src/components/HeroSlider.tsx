import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Play, 
  Pause, 
  Phone, 
  ArrowUpRight, 
  Compass, 
  Building2, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';

interface HeroSliderProps {
  onGetQuote: () => void;
  onExploreProjects: () => void;
  onExploreServices: () => void;
  onSelectProject?: (project: ProjectItem) => void;
}

interface SlideItem {
  id: number;
  projectSlug: string;
  image: string;
  discipline: string;
  tagline: string;
  headlineMain: string;
  headlineAccent: string;
  subtext: string;
  projectTitle: string;
  location: string;
  specs: string;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onGetQuote,
  onExploreProjects,
  onExploreServices,
  onSelectProject
}) => {
  const slides: SlideItem[] = [
    {
      id: 1,
      projectSlug: 'residential-buildings-portfolio',
      image: '/assets/images/RESIDENTIAL BUILDING/residential building 1.jpg',
      discipline: 'ARCHITECTURAL DESIGN & CIVIL EXECUTION',
      tagline: 'WE PLAN · WE DESIGN · WE BUILD',
      headlineMain: 'Engineering Ideas',
      headlineAccent: 'Into Built Reality.',
      subtext: 'From bespoke architectural design and structural engineering to turnkey construction and material procurement, Solugans & Associates provides integrated built-environment solutions anchored in technical precision.',
      projectTitle: 'Executive Residential Country Villa',
      location: 'Awka & Anambra State',
      specs: 'Reinforced Concrete Frame · Monumental Volumes · Turnkey Delivery'
    },
    {
      id: 2,
      projectSlug: 'radopin-supermarket-awka',
      image: '/assets/images/COMMERCIAL BUILDING/commercial_plaza_radopin.jpg',
      discipline: 'COMMERCIAL ARCHITECTURE & RETAIL PLAZAS',
      tagline: 'HIGH-VISIBILITY COMMERCIAL LANDMARKS',
      headlineMain: 'Commercial Retail &',
      headlineAccent: 'Urban Plazas.',
      subtext: 'High-capacity retail shopping centers, corporate headquarters, and commercial complexes engineered for maximum footfall, structural longevity, and bold architectural presence along major transport corridors.',
      projectTitle: 'Radopin Supermarket Plaza & Commercial Complex',
      location: 'Aroma Junction, Awka',
      specs: 'Wide-Span Concrete Frame · Composite Facade · Completed Register S/N 38'
    },
    {
      id: 3,
      projectSlug: 'tubular-steel-space-frames',
      image: '/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
      discipline: 'STRUCTURAL STEEL & SPACE FRAMES',
      tagline: 'WIDE-SPAN STRUCTURAL FABRICATION',
      headlineMain: 'Tubular Steel Space Frames',
      headlineAccent: 'Engineered for Scale.',
      subtext: 'Precision welding, shop fabrication, and high-altitude erection of wide-span tubular steel trusses, industrial space frames, and roof superstructures by Solugans & Associates.',
      projectTitle: 'Tubular Steel Space Frame Roof Superstructure',
      location: 'Awka & Anambra State',
      specs: 'Circular Hollow Sections (CHS) · Welded Truss Nodes · High-Strength Bolting'
    },
    {
      id: 4,
      projectSlug: 'residential-country-home-aguleri',
      image: '/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg',
      discipline: 'SUPERSTRUCTURE & BUILDING CONSTRUCTION',
      tagline: 'MULTI-LEVEL STRUCTURAL EXECUTION',
      headlineMain: 'Structural Integrity',
      headlineAccent: 'From Foundation to Roof.',
      subtext: 'Ongoing multi-storey country residence for Mr. Primus Odili at Ameze Village, Aguleri. Engineered with cast reinforced concrete frame, propped deck formwork, and heavy masonry envelope.',
      projectTitle: 'Residential Country Home at Ameze Village, Aguleri',
      location: 'Ameze Village, Aguleri, Anambra State',
      specs: 'Reinforced Concrete Superstructure · Suspended Decks · Completed Register S/N 18'
    },
    {
      id: 5,
      projectSlug: 'basement-retaining-wall-portfolio',
      image: '/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
      discipline: 'CIVIL & STRUCTURAL ENGINEERING QA/QC',
      tagline: 'RIGOROUS RESIDENT SUPERVISION',
      headlineMain: 'Empirical Engineering &',
      headlineAccent: 'Quality Control on Site.',
      subtext: 'COREN-registered civil and structural engineers supervising every rebar placement, concrete pour, and laboratory crush test to ensure 100% compliance with statutory building codes.',
      projectTitle: 'Deep Basement Excavation & Reinforced Concrete Retaining Walls',
      location: 'Awka, Anambra State',
      specs: 'Grade 30/35 Concrete · Tensile Mill Rebar Checks · Digital Inspection Logs'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const duration = 7000; // 7 seconds per slide for premium editorial pacing
  const progressIntervalRef = useRef<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartXRef.current = null;
  };

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const intervalStep = 50;
    const stepIncrement = (intervalStep / duration) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, currentIndex]);

  const currentSlide = slides[currentIndex];

  const handleInspectProject = (slug: string) => {
    const match = PROJECTS_DATA.find((p) => p.slug === slug);
    if (match && onSelectProject) {
      onSelectProject(match);
    } else {
      onExploreProjects();
    }
  };

  return (
    <section 
      className="relative w-full min-h-[95vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950 select-none"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Solugans Architectural & Engineering Highlights"
    >
      {/* 1. Cinematic Background Layer with Ken Burns Motion & Asymmetric Scrim */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            {/* Architectural Photography with subtle focal zoom */}
            <img
              src={slide.image}
              alt={slide.projectTitle}
              className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                isActive ? 'scale-105 brightness-95' : 'scale-100'
              }`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Asymmetric Dual-Layer Architectural Scrim */}
            {/* Deep left scrim protects typography with 100% WCAG AA contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent w-full lg:w-[70%]" />
            {/* Vertical top-to-bottom atmospheric scrim for header & bottom telemetry */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/60" />
            <div className="absolute inset-0 bg-neutral-950/25" />
          </div>
        );
      })}

      {/* 2. Architectural Blueprint Grid & Subtle Coordinate Crosshairs */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" 
      />

      {/* Architectural Corner Alignment Markers */}
      <div className="hidden lg:block absolute top-24 left-8 z-20 text-[10px] font-mono text-neutral-500 tracking-widest uppercase pointer-events-none">
        <span className="text-orange-500">+</span> LAT 6°13'N · LON 7°04'E · AWKA
      </div>
      <div className="hidden lg:block absolute top-24 right-8 z-20 text-[10px] font-mono text-neutral-500 tracking-widest uppercase pointer-events-none">
        CAC REG: {COMPANY_INFO.rcNumber} <span className="text-orange-500">+</span>
      </div>

      {/* 3. Main Hero Frame */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-32 flex flex-col justify-between min-h-[92vh] lg:min-h-screen">
        
        {/* Top Spacer / Coordinates Anchor */}
        <div className="w-full flex items-center justify-between text-xs text-neutral-400 pb-4">
          <div className="flex items-center gap-2 max-w-[280px] sm:max-w-none">
            <span className="w-2 h-2 bg-orange-500 rounded-xs shrink-0" />
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider sm:tracking-widest text-neutral-300 truncate">
              Solugans &amp; Associates Engineering Ltd
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 font-mono text-[11px] text-neutral-400">
            <span>Corporate Head Office</span>
            <span>·</span>
            <span>Aroma Junction, Awka</span>
          </div>
        </div>

        {/* Center Editorial Core (Grid Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
          {/* Left Narrative Column */}
          <div className="lg:col-span-8 space-y-5 lg:space-y-8">
            {/* Folio & Discipline Kicker */}
            <div className="flex items-center gap-2.5 sm:gap-3 text-xs tracking-wider">
              <span className="font-mono text-orange-400 font-bold shrink-0">
                0{currentIndex + 1} / 0{slides.length}
              </span>
              <span className="h-3 w-px bg-neutral-700 shrink-0" />
              <span className="font-mono uppercase text-neutral-300 tracking-wider text-[10px] sm:text-[11px] font-medium line-clamp-1">
                {currentSlide.discipline}
              </span>
            </div>

            {/* Architectural Display Headline */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.12] sm:leading-[1.08] text-white">
                <span className="block text-neutral-100">
                  {currentSlide.headlineMain}
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-300">
                  {currentSlide.headlineAccent}
                </span>
              </h1>
            </div>

            {/* Measured Architectural Narrative */}
            <p className="text-xs sm:text-base lg:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl font-sans">
              {currentSlide.subtext}
            </p>

            {/* Primary & Secondary CTA Hierarchy */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full">
              {/* Primary High-Intent Button */}
              <button
                onClick={onGetQuote}
                className="w-full sm:w-auto px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-all shadow-xl shadow-orange-950/60 hover:shadow-orange-600/30 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400 min-h-[44px]"
              >
                <span>Request Project Proposal</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary Case-Study Button */}
              <button
                onClick={() => handleInspectProject(currentSlide.projectSlug)}
                className="w-full sm:w-auto px-5 py-3.5 sm:py-4 text-xs sm:text-sm font-medium tracking-wide text-neutral-200 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700/80 rounded-md backdrop-blur-sm transition-colors flex items-center justify-center gap-2 cursor-pointer group min-h-[44px]"
              >
                <span>Inspect This Case Study</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              {/* Direct Telephone Line Access */}
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="hidden xl:inline-flex items-center gap-2 px-4 py-4 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
                title="Direct Corporate Line"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>+234 803 227 4204</span>
              </a>
            </div>

            {/* Architectural Trust Telemetry */}
            <div className="pt-5 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CAC RC: {COMPANY_INFO.rcNumber}</span>
              </div>
              <span className="hidden sm:inline text-neutral-700">|</span>
              <div className="flex items-center gap-1.5 text-neutral-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>24/7 Consultation Desk</span>
              </div>
              <span className="hidden sm:inline text-neutral-700">|</span>
              <div>Awka · Anambra State</div>
            </div>
          </div>

          {/* Right Column: Architectural Project Showcase Inspector (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 space-y-4">
            <div className="bg-neutral-950/85 border border-neutral-800 backdrop-blur-md rounded-xl p-5 shadow-2xl space-y-4 transition-all hover:border-neutral-700">
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Featured Case Study
                </span>
                <span className="text-[11px] font-mono text-neutral-500">
                  REF {currentIndex + 1} OF {slides.length}
                </span>
              </div>

              {/* Project Mini Thumbnail Frame */}
              <div 
                onClick={() => handleInspectProject(currentSlide.projectSlug)}
                className="group relative aspect-[16/9] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.projectTitle}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-neutral-950/80 border border-neutral-700 text-[10px] font-medium text-white flex items-center gap-1">
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3 h-3 text-orange-400" />
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white font-display line-clamp-1">
                  {currentSlide.projectTitle}
                </h3>
                <p className="text-xs text-neutral-400 flex items-center gap-1">
                  <span>Location:</span>
                  <span className="text-neutral-200 font-medium">{currentSlide.location}</span>
                </p>
                <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed pt-1">
                  {currentSlide.specs}
                </p>
              </div>

              {/* Interactive Quick-Jump Index of all 5 projects */}
              <div className="pt-3 border-t border-neutral-800/80 space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                  Select Architectural Precedent:
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {slides.map((s, idx) => (
                    <button
                      key={s.id}
                      onClick={() => goToSlide(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentIndex
                          ? 'bg-orange-500 shadow-sm shadow-orange-500/50'
                          : 'bg-neutral-800 hover:bg-neutral-600'
                      }`}
                      aria-label={`Jump to ${s.projectTitle}`}
                      title={s.projectTitle}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Bottom Navigation & Progress Strip */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 border-t border-neutral-800/60">
          {/* Controls: Next / Prev / Play & Progress */}
          <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-1 bg-neutral-900/90 backdrop-blur-md p-1 rounded-md border border-neutral-800 shrink-0">
              <button
                onClick={prevSlide}
                className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={nextSlide}
                className="p-1.5 sm:p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Slide Index Counter */}
            <div className="text-xs font-mono tracking-wider sm:tracking-widest text-neutral-300 shrink-0">
              <span className="text-orange-400 font-bold">0{currentIndex + 1}</span>
              <span className="text-neutral-600 mx-1 sm:mx-1.5">/</span>
              <span className="text-neutral-400">0{slides.length}</span>
            </div>

            {/* Progress Gauge */}
            <div className="flex-1 sm:flex-initial w-auto sm:w-40 h-1 bg-neutral-800/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-orange-500 transition-all duration-75 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Quick Category Indicator for Mobile / Desktop */}
          <div className="text-[11px] sm:text-xs text-neutral-400 flex items-center gap-1.5 self-start sm:self-auto w-full sm:w-auto">
            <span className="text-neutral-500 shrink-0">Featuring:</span>
            <span className="font-semibold text-white truncate max-w-[260px] sm:max-w-xs">
              {currentSlide.projectTitle}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
