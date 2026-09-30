import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Ruler, 
  Cpu, 
  Building, 
  Layers, 
  Clock, 
  Users,
  Quote,
  Phone,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface SectionProps {
  onNavigate: (route: string) => void;
}

// 1. Introduction / Brand Statement Section
export const IntroBrandSection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative overflow-hidden">
      {/* Blueprint grid accent */}
      <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-0.5 bg-orange-500" />
              <span>Solugans &amp; Associates Engineering Ltd</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] font-display">
              Bridging Architectural Vision &amp; Structural Fortitude.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed font-sans">
              <p>
                Headquartered at Aroma Junction in Awka, Anambra State, Solugans &amp; Associates Engineering Ltd is a Corporate Affairs Commission registered engineering and construction firm (RC 1207219) providing integrated built-environment solutions.
              </p>
              <p className="text-sm sm:text-base text-neutral-400">
                We bridge the gap between imaginative architectural concepts and rigorous structural engineering execution. Whether executing bespoke private residences, high-yield commercial plazas, or heavy structural steel installations, our certified engineers and project managers ensure technical precision, verifiable material quality, and dependable delivery.
              </p>
            </div>

            {/* Qualitative Capability Pillars (Clean unboxed typography) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800/80">
              <div className="space-y-1">
                <div className="text-sm font-bold text-white font-display">Full-Phase Delivery</div>
                <div className="text-xs text-neutral-400 font-sans">Concept to Key Handover</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white font-display">CAC Registered</div>
                <div className="text-xs text-neutral-400 font-mono">RC 1207219 Verified</div>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white font-display">Awka Head Office</div>
                <div className="text-xs text-neutral-400 font-sans">Secretariat Road, Aroma</div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>About Solugans &amp; Leadership</span>
                <ArrowRight className="w-4 h-4 text-orange-500" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-4 py-3.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Explore Full Disciplines</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </button>
            </div>
          </div>

          {/* Architectural Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-neutral-800/90 shadow-2xl bg-neutral-900 aspect-[4/5] group">
              <img
                src="/assets/images/BUILDINGS UNDER CONDTRUCTION/residential country home at AMEZE VILLAGE AGULERI.jpg"
                alt="Solugans Construction Project at Ameze Village, Aguleri"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />
              
              {/* Clean Bottom Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg bg-neutral-950/85 backdrop-blur-md border border-neutral-800 space-y-1">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Quality Assured Delivery</span>
                </div>
                <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                  Architectural design, structural calculations, and site construction managed under unified engineering oversight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. Why Work With Solugans Section
export const WhyWorkWithUsSection: React.FC = () => {
  const blocks = [
    {
      title: 'Technical Precision',
      desc: 'Rigorous structural calculations, soil bearing investigations, and adherence to strict engineering standards without shortcuts.',
      icon: Ruler
    },
    {
      title: 'Integrated Project Delivery',
      desc: 'Architects and engineers working in unison from schematic design through to construction and turnkey handover.',
      icon: Layers
    },
    {
      title: 'Rigorous Quality Control',
      desc: 'Empirical on-site testing—including slump tests, rebar tensile checks, and concrete compressive cube crushing.',
      icon: ShieldCheck
    },
    {
      title: 'Client-Focused Execution',
      desc: 'Transparent financial accounting via standardized Bills of Quantities (BOQ), milestone reporting, and zero hidden costs.',
      icon: Users
    },
    {
      title: 'Professional Project Management',
      desc: 'Structured construction scheduling, proactive material supply procurement, and certified safety management on site.',
      icon: Clock
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
            Engineered For Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
            Built Around Precision, Quality &amp; Accountability.
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-sans leading-relaxed">
            Construction in Nigeria demands technical foresight, geological awareness, and disciplined execution. Here is how Solugans &amp; Associates safeguards your capital and structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="bg-neutral-900/50 border border-neutral-800/80 hover:border-neutral-700 p-7 rounded-xl transition-all hover:bg-neutral-900/80 space-y-3.5 group"
              >
                <div className="w-11 h-11 rounded-lg bg-neutral-800/90 border border-neutral-700/60 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {b.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                  {b.desc}
                </p>
              </div>
            );
          })}

          {/* Quick Consultation Highlight Card */}
          <div className="bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-950 border border-orange-500/30 p-7 rounded-xl flex flex-col justify-between shadow-xl shadow-orange-950/20">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                Direct Consultation
              </div>
              <h3 className="text-xl font-bold text-white font-display">
                Have an Upcoming Site in Anambra State?
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Consult with our engineering and architectural directors for preliminary site reviews, soil evaluation, and feasibility costing.
              </p>
            </div>
            <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between">
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +234 803 227 4204</span>
              </a>
              <span className="text-[11px] font-mono text-neutral-500">Awka Office</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Process Timeline Section
export const ProcessTimelineSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-900/30 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
            Systematic Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            The Solugans Project Delivery Process
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            A structured six-stage progression ensuring every structural, aesthetic, and financial detail is accounted for before and during execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {COMPANY_INFO.processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-neutral-950 border border-neutral-800/80 p-6 sm:p-7 rounded-xl space-y-3.5 hover:border-orange-500/50 transition-all duration-200 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-orange-500 tracking-wider">
                    PHASE 0{idx + 1}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-800/70 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                <span>Verified Milestones</span>
                <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 group-hover:text-orange-500 transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Architecture + Engineering Split Section
export const ArchitectureEngineeringSplit: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              Integrated Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.12]">
              Where Design Meets Engineering.
            </h2>
            <p className="text-base text-neutral-300 leading-relaxed font-sans">
              In traditional construction setups, architects conceptualize in isolation while engineers calculate separately—frequently resulting in clashing MEP ducts, awkward interior columns, and costly site revisions.
            </p>
            <p className="text-sm text-neutral-400 leading-relaxed font-sans">
              At Solugans &amp; Associates, design and engineering are harmonized under one roof. Our architects understand load vectors and cantilever deflections; our civil engineers appreciate volumetric light and acoustic purity. The result is buildable architecture that looks majestic and performs effortlessly.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 font-sans">
                  Pre-engineered service penetration corridors through slabs and beams
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 font-sans">
                  Precise structural modeling eliminating column obstruction in open floor plans
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-300 font-sans">
                  Bioclimatic shading strategies reducing lifelong generator fuel &amp; cooling bills
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('projects')}
                className="px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors cursor-pointer shadow-lg shadow-orange-950/40"
              >
                View Built Case Studies
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/5] bg-neutral-900 shadow-xl">
                <img
                  src="/assets/images/RESIDENTIAL BUILDING/residential building a.jpg"
                  alt="Classical Residential Villa with Monumental Portico by Solugans & Associates"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-xl text-xs text-neutral-400 font-sans">
                <span className="font-semibold text-white block mb-0.5 font-display">Architectural Character</span>
                Monumental porticos &amp; classical proportions
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 bg-neutral-900/60 border border-neutral-800/80 rounded-xl text-xs text-neutral-400 font-sans">
                <span className="font-semibold text-white block mb-0.5 font-display">Structural Fortitude</span>
                Certified concrete framing &amp; load safety factors
              </div>
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/5] bg-neutral-900 shadow-xl">
                <img
                  src="/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6567.JPG"
                  alt="On-site Structural Reinforcement and Column Alignment by Solugans Engineers"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Testimonials Section (Publicly verified names only)
export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
            Client Perspectives
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Endorsements of Technical Competence
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
            Real feedback from clients who have partnered with Solugans &amp; Associates for their residential and commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMPANY_INFO.testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 p-7 rounded-xl flex flex-col justify-between space-y-6 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-orange-500/40 mb-4" />
                <p className="text-sm sm:text-base text-neutral-300 italic leading-relaxed font-sans">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800/80">
                <div className="font-bold text-white text-sm font-display">{t.name}</div>
                <div className="text-xs text-orange-400 font-mono mt-0.5">{t.role}</div>
                {t.location && (
                  <div className="text-[11px] text-neutral-500 font-mono mt-0.5">{t.location}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Large Final CTA Section
export const FinalCTASection: React.FC<SectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-neutral-950 via-neutral-950 to-[#080f1d] border-b border-neutral-900 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          <span>Ready To Start Your Next Project?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display max-w-3xl mx-auto leading-tight">
          Let’s Discuss the Architecture, Engineering &amp; Delivery of Your Vision.
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed font-sans">
          Whether you are acquiring land, drafting architectural schematics, or preparing for full civil construction, our engineering team is ready to evaluate your requirements.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-all shadow-xl shadow-orange-950/60 cursor-pointer"
          >
            Get A Project Quote
          </button>

          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(COMPANY_INFO.contacts.whatsappPrefilledMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-neutral-900 hover:bg-neutral-800 border border-emerald-500/30 rounded-md transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
            className="px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/60 hover:bg-neutral-800 border border-neutral-800 rounded-md transition-colors flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-orange-400" />
            <span>+234 803 227 4204</span>
          </a>
        </div>

        <p className="text-xs text-neutral-500 pt-4 font-mono">
          Head Office: No. 5 Secretariat Road, Aroma Junction, Awka, Anambra State, Nigeria
        </p>
      </div>
    </section>
  );
};
