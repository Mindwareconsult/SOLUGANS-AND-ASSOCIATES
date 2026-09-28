import React from 'react';
import { ArrowUpRight, MapPin, FileCheck } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  viewMode?: 'grid' | 'editorial';
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  viewMode = 'grid',
  onClick,
}) => {
  const folioNum = index !== undefined ? (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`) : null;

  if (viewMode === 'editorial') {
    return (
      <article
        onClick={onClick}
        className="group relative bg-neutral-900/40 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer p-4 sm:p-6 lg:p-7 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
      >
        {/* Left Media (7 cols) */}
        <div className="lg:col-span-7 relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-neutral-950">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />
            </>
          ) : (
            <div className="w-full h-full bg-neutral-900/95 border border-neutral-800 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-blueprint-grid-dense">
              <FileCheck className="w-10 h-10 text-orange-500 mb-2" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                Verified Contract Record
              </span>
              <span className="text-[11px] font-mono text-neutral-400 mt-1">
                {project.pdfReference}
              </span>
              <span className="mt-3 text-[10px] font-mono text-neutral-400">
                Audit Verified · Archival Entry
              </span>
            </div>
          )}

          {/* Clean Unboxed Folio Number */}
          {folioNum && (
            <div className="absolute top-3 left-3 font-mono text-[11px] text-neutral-300 font-bold bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-neutral-800">
              FOLIO {folioNum}
            </div>
          )}

          {/* Clean Bottom Metadata Line with Typographic Separator */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-200 bg-neutral-950/80 backdrop-blur-md px-2 py-1 rounded-sm border border-neutral-800">
              <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
              <span className="truncate max-w-[140px] sm:max-w-none">{project.location}</span>
            </span>

            <span className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-2 py-1 rounded-sm border border-neutral-800">
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{project.status}</span>
            </span>
          </div>
        </div>

        {/* Right Narrative (5 cols) */}
        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between h-full py-1 sm:py-2">
          <div className="space-y-2.5 sm:space-y-3">
            {/* Category and Subtext Kicker */}
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[11px] uppercase tracking-wider text-orange-500 font-semibold">
                {project.categoryLabel}
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-[11px] text-neutral-400 truncate max-w-[160px] sm:max-w-none">
                {project.technicalDetails[0]?.value || 'Engineering Specification'}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors font-display leading-snug">
              {project.title}
            </h3>

            {project.client && (
              <div className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <span className="text-neutral-500">Client:</span>
                <span className="text-neutral-200 font-medium">{project.client}</span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-3 font-sans">
              {project.summary}
            </p>

            {/* Key Features preview */}
            <div className="pt-1 space-y-1.5">
              {project.keyFeatures.slice(0, 2).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white">
            <span className="group-hover:text-orange-400 transition-colors">Inspect Technical Case Study</span>
            <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-200 transform group-hover:translate-x-1">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Grid Mode (3-column layout)
  return (
    <article
      onClick={onClick}
      className="group relative bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800/80 hover:border-neutral-700 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Media Frame */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-75 group-hover:opacity-45 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full bg-neutral-900/95 border border-neutral-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden bg-blueprint-grid-dense">
              <FileCheck className="w-8 h-8 text-orange-500 mb-1" />
              <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
                Verified Contract Record
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 line-clamp-1">
                {project.pdfReference}
              </span>
            </div>
          )}

          {/* Top Folio & Status */}
          <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between text-xs">
            {folioNum ? (
              <span className="font-mono text-[10px] sm:text-[11px] font-bold text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-neutral-800">
                0{folioNum}
              </span>
            ) : <span />}

            <span className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-neutral-200 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-neutral-800">
              <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
              <span>{project.status}</span>
            </span>
          </div>

          {/* Bottom Location & Category */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 flex items-center justify-between text-xs text-neutral-300">
            <span className="flex items-center gap-1.5 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-sm text-[10px] sm:text-[11px] font-mono text-neutral-200 border border-neutral-800">
              <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
              <span className="truncate max-w-[130px] sm:max-w-none">{project.location}</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded-sm border border-neutral-800">
              {project.category}
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-4 sm:p-6 space-y-2.5 sm:space-y-3">
          <div className="text-[11px] uppercase tracking-wider text-orange-500 font-semibold font-mono">
            {project.categoryLabel}
          </div>

          <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-orange-400 transition-colors font-display line-clamp-1 leading-snug">
            {project.title}
          </h3>

          {project.client && (
            <div className="text-xs font-mono text-neutral-400 line-clamp-1">
              <span className="text-neutral-500">Client:</span> <span className="text-neutral-200 font-medium">{project.client}</span>
            </div>
          )}

          <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed font-sans">
            {project.summary}
          </p>

          {/* Subtle Key Spec Footer Line */}
          <div className="pt-1.5 text-[10px] sm:text-[11px] text-neutral-500 font-mono truncate">
            {project.technicalDetails[0]?.label}: <span className="text-neutral-300">{project.technicalDetails[0]?.value}</span>
          </div>
        </div>
      </div>

      {/* Footer with Arrow CTA */}
      <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
        <span className="group-hover:text-orange-400 transition-colors">Inspect Case Study</span>
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-200 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
      </div>
    </article>
  );
};
