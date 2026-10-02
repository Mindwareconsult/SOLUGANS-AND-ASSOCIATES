import React from 'react';
import { 
  Compass, 
  Trees, 
  Palette, 
  Building2, 
  Building,
  Route, 
  Wrench, 
  Layers, 
  Cpu, 
  Zap, 
  Calculator, 
  ShieldCheck, 
  ShieldAlert,
  Truck,
  ArrowRight,
  Maximize2,
  LayoutGrid,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { ServiceDetail } from '../data/services';

interface ServiceCardProps {
  service: ServiceDetail;
  onClick: () => void;
}

const iconMap: Record<string, React.ElementType> = {
  Compass,
  Trees,
  Palette,
  Building2,
  Building,
  Route,
  Wrench,
  Layers,
  Cpu,
  Zap,
  Calculator,
  ShieldCheck,
  ShieldAlert,
  Truck,
  Maximize2,
  LayoutGrid,
  CheckCircle2,
  Activity
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const IconComponent = iconMap[service.iconName] || Compass;

  return (
    <article
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${service.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="group relative bg-neutral-900/50 hover:bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between cursor-pointer overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
    >
      <div>
        {/* Optional Project Image Banner */}
        {service.thumbnailImage && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 border-b border-neutral-800/80">
            <img
              src={service.thumbnailImage}
              alt={service.thumbnailAlt || service.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
            <div className="absolute top-3 right-3 text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-neutral-950/80 text-orange-400 border border-neutral-800 backdrop-blur-sm uppercase">
              {service.category}
            </div>
          </div>
        )}

        <div className="p-6 sm:p-7">
          {/* Header with Icon and Category (if no image banner) */}
          {!service.thumbnailImage && (
            <div className="flex items-center justify-between mb-5">
              <div className="w-12 h-12 rounded-lg bg-neutral-800/90 border border-neutral-700/70 flex items-center justify-center text-orange-500 group-hover:text-white group-hover:bg-orange-600 transition-colors duration-200">
                <IconComponent className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono tracking-wider text-orange-500/90 uppercase font-semibold">
                {service.category}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2.5 font-display leading-snug">
            {service.title}
          </h3>

          {/* Short Summary */}
          <p className="text-sm text-neutral-400 leading-relaxed mb-5 line-clamp-3 font-sans">
            {service.shortSummary}
          </p>

          {/* Highlighted Capabilities */}
          <ul className="space-y-2 mb-2 text-xs text-neutral-300 font-sans">
            {service.capabilities.slice(0, 3).map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
                <span className="line-clamp-1 leading-snug">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action link */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">
        <span className="group-hover:text-orange-400 transition-colors">Explore Scope &amp; Specifications</span>
        <div className="w-7 h-7 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all duration-200 transform group-hover:translate-x-1">
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </article>
  );
};
