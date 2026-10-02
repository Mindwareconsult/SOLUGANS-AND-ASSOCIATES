import React, { useState, useMemo } from 'react';
import { ProjectItem, PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { 
  ArrowLeft, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  ShieldCheck, 
  Maximize2,
  MessageSquare,
  Phone,
  FileCheck,
  Building2,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ProjectDetailPageProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (route: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onSelectProject,
  onNavigate
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentIndex = PROJECTS_DATA.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS_DATA[(currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length];
  const nextProject = PROJECTS_DATA[(currentIndex + 1) % PROJECTS_DATA.length];

  // Related projects matching category first
  const relatedProjects = useMemo(() => {
    const sameCategory = PROJECTS_DATA.filter(p => p.id !== project.id && p.category === project.category);
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3);
    }
    const otherProjects = PROJECTS_DATA.filter(p => p.id !== project.id && p.category !== project.category);
    return [...sameCategory, ...otherProjects].slice(0, 3);
  }, [project.id, project.category]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Lightbox Modal */}
      <GalleryLightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % project.gallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
      />

      {/* Top Breadcrumb & Next/Prev Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-orange-500 shrink-0" />
          <span className="hidden sm:inline">Back to Projects Archive</span>
          <span className="sm:hidden">Projects Archive</span>
        </button>

        <div className="flex items-center gap-2.5 sm:gap-4 text-xs font-mono">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            title={`Previous: ${prevProject.title}`}
          >
            <span>← Prev</span>
          </button>
          <span className="text-neutral-700">|</span>
          <button
            onClick={() => onSelectProject(nextProject)}
            className="text-neutral-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
            title={`Next: ${nextProject.title}`}
          >
            <span>Next →</span>
          </button>
        </div>
      </div>

      {/* Project Hero Header (Clean Unboxed Metadata) */}
      <section className="border-b border-neutral-900 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs font-mono text-neutral-400">
              <span className="font-bold uppercase tracking-wider text-orange-500">
                {project.categoryLabel}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-neutral-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>{project.location}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-neutral-300">
                <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                <span>Status: {project.status}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed font-sans max-w-3xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Full-Bleed Featured Cover Media or Technical Specification Banner */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {project.coverImage ? (
          <button 
            type="button"
            onClick={() => project.gallery.length > 0 && openLightbox(0)}
            aria-label={project.gallery.length > 0 ? `Click to expand photo gallery for ${project.title}` : project.title}
            className={`relative aspect-[4/3] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl text-left ${
              project.gallery.length > 0 ? 'group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500' : 'cursor-default'
            }`}
          >
            <img
              src={project.coverImage}
              alt={project.title}
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

            {/* Enlarge Trigger */}
            {project.gallery.length > 0 && (
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-xs font-medium text-white group-hover:bg-orange-600 transition-colors shadow-lg">
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Click to Expand Gallery ({project.gallery.length} Images)</span>
                <span className="sm:hidden">Expand ({project.gallery.length} Photos)</span>
              </div>
            )}
          </button>
        ) : (
          <div className="w-full rounded-xl border border-neutral-800 bg-neutral-900/60 p-8 sm:p-12 relative overflow-hidden text-center space-y-4 shadow-xl bg-blueprint-grid">
            <div className="w-16 h-16 rounded-full bg-neutral-800/80 border border-neutral-700 flex items-center justify-center mx-auto text-orange-400">
              <FileCheck className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-xl mx-auto">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-400">
                Verified Contract Record · Audit Compliant
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                Official Corporate Register Entry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                {project.photoNote || 'In accordance with strict image audit standards, photographic plates are not speculative. Contract scope, engineering deliverables, and client details are verified from company archives.'}
              </p>
            </div>
            {project.generalCategorySlug && (
              <div className="pt-2">
                <button
                  onClick={() => {
                    const catProject = PROJECTS_DATA.find(p => p.slug === project.generalCategorySlug);
                    if (catProject) onSelectProject(catProject);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer border border-neutral-700"
                >
                  <span>Inspect General {project.category} Showcase Gallery</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Narrative & Technical Case Study Content */}
      <section className="py-12 lg:py-16 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Narrative Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* 1. The Brief */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  01. Project Foundation
                </div>
                <h2 className="text-2xl font-bold text-white font-display">
                  The Client Brief &amp; Program Requirements
                </h2>
                <div className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-neutral-900/40 border border-neutral-800/80 p-6 sm:p-7 rounded-xl font-sans">
                  {project.theBrief}
                </div>
              </div>

              {/* 2. The Approach */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  02. Strategic Delivery
                </div>
                <h2 className="text-2xl font-bold text-white font-display">
                  Our Engineering &amp; Architectural Approach
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {project.theApproach}
                </p>
              </div>

              {/* 3. Design & Engineering Details */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  03. Technical Execution
                </div>
                <h2 className="text-2xl font-bold text-white font-display">
                  Design Calculations &amp; Structural Solutions
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {project.designEngineering}
                </p>
              </div>

              {/* 4. On-Site Construction & Supervision */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  04. Site Operations
                </div>
                <h2 className="text-2xl font-bold text-white font-display">
                  Construction Management &amp; Quality Control
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  {project.execution}
                </p>
              </div>

              {/* Key Features Grid */}
              <div className="space-y-4 pt-4">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Engineering Distinctives
                </div>
                <h2 className="text-xl font-bold text-white font-display">
                  Key Specifications &amp; Structural Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-xl flex items-start gap-3 hover:border-neutral-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Image Gallery Grid or Audit Notice */}
              {project.gallery.length > 0 ? (
                <div className="space-y-4 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold mb-1">
                        Archival Plates
                      </div>
                      <h2 className="text-xl font-bold text-white font-display">
                        Verified Project Gallery
                      </h2>
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">
                      {project.gallery.length} Verified Photos
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {project.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => openLightbox(idx)}
                        aria-label={`View full photo: ${img.caption}`}
                        className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900 cursor-pointer shadow-md text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                      >
                        <img
                          src={img.url}
                          alt={img.caption}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <Maximize2 className="w-5 h-5 text-orange-400" aria-hidden="true" />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-400 space-y-3 font-sans">
                  <div className="font-bold text-white flex items-center gap-2 font-mono uppercase tracking-wider text-orange-400">
                    <FileCheck className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Project Photography Archive Notice</span>
                  </div>
                  <p className="leading-relaxed">
                    {project.photoNote || 'In accordance with strict image audit standards, individual site photography is unassigned to avoid speculative association. All structural engineering and construction activities are documented in the company registers (RC 1207219).'}
                  </p>
                  {project.generalCategorySlug && (
                    <button
                      onClick={() => {
                        const catProject = PROJECTS_DATA.find(p => p.slug === project.generalCategorySlug);
                        if (catProject) onSelectProject(catProject);
                      }}
                      className="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore General {project.category} Portfolio Plates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}

              {/* Project Result / Outcome */}
              <div className="p-6 sm:p-7 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-emerald-500/30 rounded-xl space-y-2 shadow-xl shadow-emerald-950/10">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-2 font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Documented Outcome</span>
                </div>
                <p className="text-sm sm:text-base text-neutral-200 font-medium font-sans leading-relaxed">
                  {project.result}
                </p>
              </div>
            </div>

            {/* Right Technical Sidebar */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 self-start">
              {/* Technical Specifications Table */}
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 space-y-5 shadow-2xl backdrop-blur-md">
                <h3 className="text-base font-bold text-white uppercase tracking-wider font-display border-b border-neutral-800 pb-3">
                  Technical Project Data
                </h3>

                <div className="space-y-3.5 text-xs font-mono">
                  {project.client && (
                    <div className="flex flex-col space-y-1 pb-3 border-b border-neutral-800/80">
                      <span className="text-orange-400 uppercase tracking-wider text-[11px] font-bold">
                        Client / Commissioning Sponsor
                      </span>
                      <span className="text-white font-semibold text-xs font-sans">
                        {project.client}
                      </span>
                    </div>
                  )}

                  {project.technicalDetails.map((detail, idx) => (
                    <div key={idx} className="flex flex-col space-y-1">
                      <span className="text-neutral-500 uppercase tracking-wider text-[10px]">
                        {detail.label}
                      </span>
                      <span className="text-neutral-200 font-medium text-xs font-sans">
                        {detail.value}
                      </span>
                    </div>
                  ))}

                  {project.pdfReference && (
                    <div className="pt-3 border-t border-neutral-800/80">
                      <span className="text-neutral-500 uppercase tracking-wider text-[10px] block mb-1">
                        Corporate Archive Source:
                      </span>
                      <span className="text-neutral-300 text-[11px] bg-neutral-950 px-2.5 py-1.5 rounded border border-neutral-800 block">
                        {project.pdfReference}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  <span className="text-neutral-400 uppercase tracking-wider text-[11px] font-mono block">
                    Disciplines Provided
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.servicesProvided.map((svc, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-sans bg-neutral-950 border border-neutral-800 text-neutral-300 px-2.5 py-1 rounded"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Enquiry Box */}
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 space-y-4">
                <h4 className="text-base font-bold text-white font-display">
                  Discuss a Project Like This
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Our engineering team can evaluate your site drawings, draft feasibility reports, or prepare an itemized Bill of Quantities for your site.
                </p>
                
                <div className="space-y-2.5 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors shadow-lg shadow-orange-950/40 cursor-pointer"
                  >
                    Request Project Quotation
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Solugans & Associates, I am interested in discussing a project similar to "${project.title}".`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 bg-neutral-950 hover:bg-neutral-800 border border-emerald-500/30 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Related Precedents
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Explore More Built Works
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 hover:text-orange-300 self-start sm:self-auto cursor-pointer"
            >
              <span>View Full Projects Register</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((p, idx) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={idx}
                onClick={() => onSelectProject(p)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
