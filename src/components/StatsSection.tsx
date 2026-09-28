import React, { useState, useEffect, useRef } from 'react';
import { 
  Building2, 
  CalendarClock, 
  Users, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';

interface StatItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  highlightText?: string;
}

const STATS_DATA: StatItem[] = [
  {
    id: 'projects-completed',
    value: 57,
    suffix: '+',
    label: 'Verified Completed Works',
    sublabel: 'Commercial plazas, institutional auditoriums, luxury duplexes & civil masterplans.',
    icon: Building2,
    highlightText: '57 Documented Projects'
  },
  {
    id: 'ongoing-projects',
    value: 20,
    suffix: '+',
    label: 'Ongoing Active Sites',
    sublabel: 'University student hostels, commercial showrooms, and country estates under active construction.',
    icon: CalendarClock,
    highlightText: 'Active Field Oversight'
  },
  {
    id: 'clients-served',
    value: 77,
    suffix: '+',
    label: 'Institutional & Private Clients',
    sublabel: 'Universities (UNIZIK, ESUT, COOU), commercial banks, industrial mills, and private developers.',
    icon: Users,
    highlightText: 'Across 5 Nigerian States'
  },
  {
    id: 'qa-qc-safety',
    value: 100,
    suffix: '%',
    label: 'Structural QA/QC Record',
    sublabel: 'COREN & ARCON certified engineering leadership with zero structural failure record.',
    icon: ShieldCheck,
    highlightText: 'RC 1207219 Certified'
  }
];

// Single Animated Counter using requestAnimationFrame with cubic ease-out
const AnimatedNumber: React.FC<{ target: number; suffix?: string; prefix?: string; isVisible: boolean }> = ({
  target,
  suffix = '',
  prefix = '',
  isVisible
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000; // 2 seconds duration
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutExpo calculation
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.floor(ease * target);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, isVisible]);

  return (
    <span className="tabular-nums">
      {prefix}{isVisible ? displayValue : 0}{suffix}
    </span>
  );
};

interface StatsSectionProps {
  onExploreProjects?: () => void;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ onExploreProjects }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Use IntersectionObserver to trigger animation when the stats section scrolls into view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of section is visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-neutral-950 border-b border-neutral-900 overflow-hidden"
      aria-label="Solugans & Associates Key Performance Metrics"
    >
      {/* Subtle Background Architectural Blueprint Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Atmospheric Ambient Glow behind numbers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-48 bg-orange-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-0.5 bg-orange-500" />
              <span>Verifiable Track Record</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
              Quantifiable Precision. Proven Delivery.
            </h2>
            
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
              Our multidisciplinary engineering practice combines technical accuracy with on-ground execution experience across private, commercial, and institutional developments.
            </p>
          </div>

          {onExploreProjects && (
            <button
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors self-start md:self-auto cursor-pointer group"
            >
              <span>Inspect Built Portfolio</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          )}
        </div>

        {/* 4-Column Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-neutral-900/60 hover:bg-neutral-900 border border-neutral-800 hover:border-orange-500/40 rounded-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-950/20 flex flex-col justify-between"
              >
                {/* Top Bar with Icon & Counter Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-orange-400 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-neutral-600 group-hover:text-neutral-400 transition-colors">
                    0{index + 1}
                  </span>
                </div>

                {/* Animated Metric Number */}
                <div className="space-y-2">
                  <div className="text-4xl sm:text-5xl lg:text-5xl font-black text-white font-display tracking-tight group-hover:text-orange-400 transition-colors">
                    <AnimatedNumber
                      target={item.value}
                      prefix={item.prefix}
                      suffix={item.suffix}
                      isVisible={hasAnimated}
                    />
                  </div>

                  {/* Stat Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-100 font-display">
                    {item.label}
                  </h3>

                  {/* Explanatory Sublabel */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans pt-1">
                    {item.sublabel}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                {item.highlightText && (
                  <div className="mt-5 pt-4 border-t border-neutral-800/70 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>{item.highlightText}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Kicker */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-neutral-800/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-neutral-400">RC 1207219 · Corporate Affairs Commission Certified Practice</span>
          </div>
          <div className="text-neutral-500">
            Awka Head Office · Anambra State, Nigeria
          </div>
        </div>
      </div>
    </section>
  );
};
