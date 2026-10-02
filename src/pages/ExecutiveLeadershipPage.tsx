import React, { useEffect, useState } from 'react';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Users, 
  HeartHandshake, 
  Compass, 
  Building2, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Phone, 
  Quote, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { EXECUTIVE_DATA } from '../data/executive';
import { COMPANY_INFO } from '../data/company';

interface ExecutiveLeadershipPageProps {
  onNavigate: (route: string) => void;
}

export const ExecutiveLeadershipPage: React.FC<ExecutiveLeadershipPageProps> = ({ onNavigate }) => {
  const [selectedTimelineCategory, setSelectedTimelineCategory] = useState<'all' | 'architectural' | 'enterprise'>('all');

  // Dedicated SEO Title & Meta Description update
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Arc. Uganeme Emeka John Donatus | Managing Director | Solugans & Associates';

    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Learn about Arc. Uganeme Emeka John Donatus, Managing Director of Solugans & Associates Engineering Ltd., his professional experience, leadership journey, community service and architectural background.'
      );
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  const filteredTimeline = EXECUTIVE_DATA.careerTimeline.filter(item => {
    if (selectedTimelineCategory === 'all') return true;
    if (selectedTimelineCategory === 'architectural') return item.type === 'architectural' || item.type === 'consultancy';
    if (selectedTimelineCategory === 'enterprise') return item.type === 'enterprise' || item.type === 'management';
    return true;
  });

  return (
    <div className="w-full pt-28 pb-20 bg-neutral-950 text-neutral-100">
      {/* ================================================== */}
      {/* 1. BREADCRUMBS & NAVIGATION RETURN */}
      {/* ================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <nav aria-label="Breadcrumb" className="flex items-center justify-between py-2 border-b border-neutral-900">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-orange-500" />
              <span>ABOUT</span>
            </button>
            <span className="text-neutral-700">/</span>
            <span className="text-orange-400 font-semibold uppercase tracking-wider">
              EXECUTIVE LEADERSHIP
            </span>
          </div>

          <button
            onClick={() => onNavigate('about')}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Return to Company Profile</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </nav>
      </div>

      {/* ================================================== */}
      {/* 2. EXECUTIVE HERO: PORTRAIT & CREDENTIALS */}
      {/* ================================================== */}
      <section className="relative overflow-hidden pb-16 lg:pb-24 border-b border-neutral-900">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left: Authentic Executive Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group">
                <img
                  src={EXECUTIVE_DATA.image}
                  alt={EXECUTIVE_DATA.fullName}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-102"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to alt image if needed
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + EXECUTIVE_DATA.altImage) {
                      target.src = EXECUTIVE_DATA.altImage;
                    }
                  }}
                />
                
                {/* Asymmetric Scrim for Elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-75" />

                {/* Corner Status Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-950/90 border border-neutral-800 text-[11px] font-mono text-neutral-200 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  <span>Verified Executive Portrait</span>
                </div>

                {/* Bottom Overlay Motto Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                    Executive Ethos
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white font-display italic">
                    "{EXECUTIVE_DATA.motto}"
                  </p>
                </div>
              </div>

              {/* Sub-card: Statutory Corporate Accreditation */}
              <div className="mt-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>CAC RC: {COMPANY_INFO.rcNumber}</span>
                </div>
                <span className="text-neutral-700">·</span>
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>Awka Head Office</span>
                </div>
              </div>
            </div>

            {/* Right: Executive Identity & Narrative Kicker */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                  <span className="w-2 h-0.5 bg-orange-500" />
                  <span>Executive Leadership Profile</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] font-display">
                  {EXECUTIVE_DATA.fullName}
                </h1>

                <div className="space-y-1 pt-1">
                  <div className="text-lg sm:text-xl font-bold text-orange-400 font-display">
                    {EXECUTIVE_DATA.formalTitle}
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-neutral-300 tracking-wide">
                    {EXECUTIVE_DATA.professionalDesignations}
                  </div>
                </div>
              </div>

              {/* Introductory Lead Statement */}
              <div className="p-5 sm:p-6 rounded-xl bg-neutral-900/70 border border-neutral-800/90 relative">
                <Quote className="w-6 h-6 text-orange-500/40 mb-2" />
                <p className="text-base sm:text-lg text-neutral-200 font-normal leading-relaxed font-sans">
                  "{EXECUTIVE_DATA.summary}"
                </p>
              </div>

              {/* Editorial Narrative Excerpt */}
              <div className="space-y-3.5 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed font-sans">
                {EXECUTIVE_DATA.coreIntro.map((para, pIdx) => (
                  <p key={pIdx} className="text-neutral-300">
                    {para}
                  </p>
                ))}
              </div>

              {/* Fast Jump Anchor Strip */}
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-400 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
                <span className="text-neutral-500 shrink-0">Jump To:</span>
                <a href="#journey" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  01 Journey
                </a>
                <a href="#education" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  02 Education
                </a>
                <a href="#timeline" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  03 Career
                </a>
                <a href="#leadership" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  04 Leadership
                </a>
                <a href="#grassroots" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  05 Grassroots
                </a>
                <a href="#philosophy" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  06 Philosophy
                </a>
                <a href="#awards" className="px-3 py-1.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors shrink-0 min-h-[34px] flex items-center">
                  08 Awards
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 01. PROFESSIONAL JOURNEY */}
      {/* ================================================== */}
      <section id="journey" className="py-16 lg:py-24 border-b border-neutral-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              01 · Trajectory &amp; Evolution
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Professional Journey
            </h2>
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              From early on-site project management in Enugu to architectural consultancy and enterprise leadership across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
              <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3">
                <div className="text-xs font-mono uppercase text-orange-400 font-bold">
                  Early Foundation: Hands-on Built Environment Practice
                </div>
                <p>
                  {EXECUTIVE_DATA.professionalJourney.overview}
                </p>
                <p className="text-neutral-400 text-sm">
                  {EXECUTIVE_DATA.professionalJourney.evolution}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-neutral-900/50 border border-neutral-800 space-y-3">
                <div className="text-xs font-mono uppercase text-orange-400 font-bold">
                  Corporate Governance &amp; Multidisciplinary Enterprise
                </div>
                <p>
                  {EXECUTIVE_DATA.professionalJourney.corporateLeadership}
                </p>
                <p className="text-neutral-400 text-sm">
                  {EXECUTIVE_DATA.professionalJourney.contribution}
                </p>
              </div>
            </div>

            {/* Right: Key Architectural Affiliations */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                    Key Architectural &amp; Consultancy Tenures
                  </span>
                  <Compass className="w-4 h-4 text-orange-500" />
                </div>

                <div className="space-y-3">
                  {EXECUTIVE_DATA.professionalJourney.affiliations.map((aff, aIdx) => (
                    <div key={aIdx} className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white font-display">
                          {aff.role}
                        </div>
                        <div className="text-xs text-neutral-400 font-sans mt-0.5">
                          {aff.org}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 02. EDUCATION & PROFESSIONAL DEVELOPMENT */}
      {/* ================================================== */}
      <section id="education" className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              02 · Academic &amp; Technical Foundation
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Education &amp; Professional Development
            </h2>
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              Documented educational milestones from foundational technical and secondary studies in Nanka and Awka to professional architectural training at Federal Polytechnic Oko and mandatory National Service.
            </p>
          </div>

          {/* Vertical Education Timeline */}
          <div className="relative pl-6 sm:pl-8 border-l border-neutral-800 max-w-4xl space-y-8">
            {EXECUTIVE_DATA.education.map((edu, eIdx) => (
              <div key={eIdx} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-orange-500 group-hover:scale-125 transition-transform" />

                <div className="p-5 sm:p-6 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-neutral-700 transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="text-orange-400 font-bold uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <span className="text-[11px] text-neutral-500">
                      Step 0{eIdx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {edu.institution}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-neutral-300 font-sans">
                    {edu.qualification}
                  </div>

                  {edu.details && (
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans pt-1">
                      {edu.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 text-xs text-neutral-400 font-mono flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Followed by sustained practical experience in architecture, construction, project supervision, consultancy, and corporate entrepreneurship.
            </span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 03. CAREER TIMELINE */}
      {/* ================================================== */}
      <section id="timeline" className="py-16 lg:py-24 border-b border-neutral-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                03 · Verified Appointments &amp; Corporate Directorships
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Career Timeline
              </h2>
              <p className="text-base text-neutral-400 font-sans leading-relaxed">
                Documented professional appointments, architectural consultancies, and executive directorships.
              </p>
            </div>

            {/* Timeline Filter Switcher */}
            <div className="flex flex-wrap sm:inline-flex p-1 bg-neutral-900 border border-neutral-800 rounded-lg self-start md:self-auto text-xs font-mono gap-1">
              <button
                onClick={() => setSelectedTimelineCategory('all')}
                className={`px-3 py-2 rounded-md transition-colors cursor-pointer min-h-[38px] flex items-center ${
                  selectedTimelineCategory === 'all'
                    ? 'bg-orange-600 text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                All Milestones ({EXECUTIVE_DATA.careerTimeline.length})
              </button>
              <button
                onClick={() => setSelectedTimelineCategory('architectural')}
                className={`px-3 py-2 rounded-md transition-colors cursor-pointer min-h-[38px] flex items-center ${
                  selectedTimelineCategory === 'architectural'
                    ? 'bg-orange-600 text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Architectural
              </button>
              <button
                onClick={() => setSelectedTimelineCategory('enterprise')}
                className={`px-3 py-2 rounded-md transition-colors cursor-pointer min-h-[38px] flex items-center ${
                  selectedTimelineCategory === 'enterprise'
                    ? 'bg-orange-600 text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Directorships
              </button>
            </div>
          </div>

          {/* Structured Career Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTimeline.map((item, tIdx) => (
              <div
                key={tIdx}
                className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-orange-400 font-bold px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                      {item.period}
                    </span>
                    <span className="text-[10px] uppercase text-neutral-500 font-mono tracking-wider">
                      {item.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-xs text-neutral-300 font-medium font-sans mt-0.5">
                      {item.organization}
                    </div>
                    {item.location && (
                      <div className="text-[11px] font-mono text-neutral-500 mt-0.5">
                        {item.location}
                      </div>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Verified Profile Entry</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 04. LEADERSHIP & COMMUNITY SERVICE */}
      {/* ================================================== */}
      <section id="leadership" className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              04 · Civic, Faith &amp; Institutional Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Leadership &amp; Community Service
            </h2>
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              Beyond professional practice, Arc. Uganeme has devoted extensive time to student governance, diocesan committees, youth leadership, and town administration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_DATA.leadershipRoles.map((role, rIdx) => (
              <div
                key={rIdx}
                className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 flex flex-col justify-between space-y-4 transition-all"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-orange-500">
                    <span>{role.category} Governance</span>
                    {role.period && <span className="text-neutral-400">{role.period}</span>}
                  </div>

                  <h3 className="text-base font-bold text-white font-display">
                    {role.role}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    {role.organization}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500">
                  Service &amp; Organizational Stewardship
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 05. GRASSROOTS DEVELOPMENT & YOUTH EMPOWERMENT */}
      {/* ================================================== */}
      <section id="grassroots" className="py-16 lg:py-24 border-b border-neutral-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              05 · Civic Summits &amp; Community Platforms
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Grassroots Development &amp; Youth Empowerment
            </h2>
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              Documented community initiatives organized to foster road safety awareness, youth mentoring, women's empowerment, and town union development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_DATA.grassrootsInitiatives.map((init, iIdx) => (
              <div
                key={iIdx}
                className="p-6 sm:p-7 rounded-xl bg-neutral-950 border border-neutral-800/90 hover:border-neutral-700 flex flex-col justify-between space-y-4 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-orange-400 font-bold px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800">
                      {init.year}
                    </span>
                    <span className="text-neutral-500 text-[11px] font-mono">
                      {init.role}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                    {init.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                    {init.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Community Service Initiative</span>
                  <HeartHandshake className="w-4 h-4 text-orange-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 06. LEADERSHIP PHILOSOPHY (LEADERSHIP BUILT ON SERVICE) */}
      {/* ================================================== */}
      <section id="philosophy" className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4 mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              06 · Core Principles &amp; Convictions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              {EXECUTIVE_DATA.leadershipPhilosophy.title}
            </h2>
            <p className="text-base text-neutral-300 font-sans leading-relaxed">
              {EXECUTIVE_DATA.leadershipPhilosophy.definition}
            </p>
            <div className="p-4 rounded-lg bg-orange-950/20 border border-orange-500/30 text-xs sm:text-sm font-mono text-orange-300">
              {EXECUTIVE_DATA.leadershipPhilosophy.coreBelief}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_DATA.leadershipPhilosophy.pillars.map((pil, pIdx) => (
              <div
                key={pIdx}
                className="p-6 sm:p-7 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 space-y-3 flex flex-col justify-between transition-colors"
              >
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-wider">
                    Pillar 0{pIdx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {pil.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                    {pil.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                  <span>Guiding Tenet</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            ))}

            {/* Final Motto Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-orange-500/40 space-y-3 flex flex-col justify-between shadow-xl">
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                  Guiding Motto
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  "Tested by Service, Trusted by the People."
                </h3>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  A commitment to practical development, accountability, and leaving an enduring positive imprint on people and communities.
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-orange-400">
                Solugans Executive Philosophy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 07. MULTIDISCIPLINARY APPROACH TO DEVELOPMENT */}
      {/* ================================================== */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                07 · Integrated Built Environment Vision
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
                {EXECUTIVE_DATA.multidisciplinaryApproach.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                {EXECUTIVE_DATA.multidisciplinaryApproach.narrative.map((par, idx) => (
                  <p key={idx}>
                    {par}
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-center">
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-mono">
                  <span className="text-orange-400 font-bold block">Functionality</span>
                  <span className="text-[10px] text-neutral-500">Practical utility</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-mono">
                  <span className="text-orange-400 font-bold block">Quality</span>
                  <span className="text-[10px] text-neutral-500">Empirical QA/QC</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-mono">
                  <span className="text-orange-400 font-bold block">Thoughtful Design</span>
                  <span className="text-[10px] text-neutral-500">Tropical bioclimatic</span>
                </div>
                <div className="p-3 rounded-lg bg-neutral-900/60 border border-neutral-800 text-xs font-mono">
                  <span className="text-orange-400 font-bold block">Durability &amp; Value</span>
                  <span className="text-[10px] text-neutral-500">Generational life</span>
                </div>
              </div>
            </div>

            {/* Right: Architectural Evidence Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-neutral-800 aspect-[4/3] bg-neutral-900 shadow-2xl relative">
                <img
                  src="/assets/images/COMMERCIAL BUILDING/commercial_plaza_radopin.jpg"
                  alt="Radopin Supermarket Plaza Awka"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/85 backdrop-blur-md border border-neutral-800 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-orange-400 font-bold">
                    Built Commercial Landmark
                  </div>
                  <div className="text-xs font-bold text-white font-display">
                    Radopin Supermarket Plaza, Awka
                  </div>
                  <p className="text-[11px] text-neutral-400 font-sans line-clamp-1">
                    Architectural design and turnkey execution spearheaded under Arc. Uganeme's leadership.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 08. RECOGNITION & AWARDS */}
      {/* ================================================== */}
      <section id="awards" className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3 mb-12">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              08 · Verified Accolades &amp; Honors
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
              Recognition &amp; Awards
            </h2>
            <p className="text-base text-neutral-400 font-sans leading-relaxed">
              Arc. Uganeme’s professional, humanitarian, and community contributions have received formal recognition across academic institutions, diocesan bodies, media organizations, and civic associations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_DATA.awards.map((aw, aIdx) => (
              <div
                key={aIdx}
                className="p-6 rounded-xl bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 flex flex-col justify-between space-y-4 transition-all duration-300 hover:shadow-xl group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Award className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-display leading-snug group-hover:text-orange-400 transition-colors">
                      {aw.title}
                    </h3>
                    <div className="text-xs text-neutral-300 font-sans mt-1">
                      {aw.organization}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 space-y-1 text-xs font-mono">
                  {aw.date && (
                    <div className="text-orange-400 font-semibold">
                      {aw.date}
                    </div>
                  )}
                  <div className="text-[11px] text-neutral-500">
                    {aw.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs font-mono text-neutral-500">
            All listed awards represent authentic honors documented in the official profile.
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 09. LEGACY OF SERVICE */}
      {/* ================================================== */}
      <section className="py-16 lg:py-20 border-b border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
            <span className="w-2 h-0.5 bg-orange-500" />
            <span>09 · The Continuing Commitment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
            {EXECUTIVE_DATA.legacyOfService.title}
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-neutral-300 leading-relaxed font-sans text-left sm:text-center">
            {EXECUTIVE_DATA.legacyOfService.paragraphs.map((p, idx) => (
              <p key={idx}>
                {p}
              </p>
            ))}
          </div>

          <div className="pt-4">
            <span className="inline-block font-display text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 italic">
              "{EXECUTIVE_DATA.legacyOfService.closingQuote}"
            </span>
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* 10. CROSS-PAGE NAVIGATION & COMPANY CTAs */}
      {/* ================================================== */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-neutral-950 via-neutral-950 to-[#080f1d] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-12 rounded-2xl bg-neutral-900/60 border border-neutral-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-orange-400 font-bold">
                Solugans &amp; Associates Engineering Ltd.
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                BUILDING WITH EXPERIENCE. LEADING WITH PURPOSE.
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                Discover the professional capabilities, services and project experience of Solugans &amp; Associates Engineering Ltd.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 rounded-lg bg-orange-600 hover:bg-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer shadow-lg shadow-orange-950/50 flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-neutral-700 transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>View Our Projects</span>
              </button>
            </div>
          </div>

          {/* Clean Return to About button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-orange-500" />
              <span>Return to About Solugans</span>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
