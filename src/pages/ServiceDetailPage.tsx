import React, { useMemo } from 'react';
import { ServiceDetail } from '../data/services';
import { ProjectItem, PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Phone,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onBack: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onNavigate: (route: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onBack,
  onSelectProject,
  onNavigate
}) => {
  // Related projects intelligently matched by discipline
  const relatedProjects = useMemo(() => {
    let matched: ProjectItem[] = [];

    if (service.category === 'Architecture & Design') {
      matched = PROJECTS_DATA.filter(p => p.category === 'Residential' || p.category === 'Commercial');
    } else if (service.category === 'Civil & Construction') {
      matched = PROJECTS_DATA.filter(p => p.category === 'Civil Engineering' || p.category === 'Residential' || p.category === 'Institutional');
    } else if (service.category === 'Structural Steel') {
      matched = PROJECTS_DATA.filter(p => p.category === 'Structural Steel' || p.category === 'Commercial');
    } else if (service.category === 'MEP & Energy') {
      matched = PROJECTS_DATA.filter(p => p.category === 'Energy & MEP' || p.category === 'Institutional' || p.category === 'Commercial');
    } else {
      matched = PROJECTS_DATA.filter(p => p.category === 'Civil Engineering' || p.category === 'Commercial');
    }

    if (matched.length < 3) {
      const rest = PROJECTS_DATA.filter(p => !matched.some(m => m.id === p.id));
      matched = [...matched, ...rest];
    }

    return matched.slice(0, 3);
  }, [service.category]);

  return (
    <div className="w-full pt-28 pb-20">
      {/* Top Breadcrumb & Back Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-orange-500" />
          <span>Back to All Disciplines</span>
        </button>
      </div>

      {/* Hero */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-0.5 bg-orange-500" />
              <span>{service.category}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
              {service.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed font-sans max-w-3xl">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-12">
              {/* Capabilities & What We Do */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500">
                  Engineering Scope
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Core Capabilities &amp; Technical Coverage
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-neutral-900/50 border border-neutral-800/80 rounded-xl flex items-start gap-3 hover:border-neutral-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Approach */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500">
                  Methodology
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Our Engineering &amp; Operational Approach
                </h2>
                <div className="text-sm sm:text-base text-neutral-300 leading-relaxed bg-neutral-900/40 border border-neutral-800/80 p-6 sm:p-7 rounded-xl font-sans">
                  {service.approach}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="space-y-4">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-orange-500">
                  Outputs &amp; Documentation
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Key Technical Deliverables
                </h2>
                <ul className="space-y-2.5">
                  {service.deliverables.map((deliv, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 p-3.5 bg-neutral-950 border border-neutral-800/80 rounded-lg font-sans"
                    >
                      <FileText className="w-4 h-4 text-orange-500 shrink-0" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why This Matters */}
              <div className="space-y-4 p-7 bg-gradient-to-r from-neutral-900 to-neutral-950 border border-orange-500/20 rounded-xl shadow-xl shadow-orange-950/10">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                  <span>Why This Matters For Your Project</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                  {service.whyItMatters}
                </p>
              </div>
            </div>

            {/* Right Sidebar: Quick Contact & Quote Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-neutral-900/80 border border-neutral-800 rounded-xl p-6 sm:p-7 space-y-5 sticky top-28 backdrop-blur-md shadow-2xl">
                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                    Technical Consultation
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    Engage Our Lead Engineer
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                    Have specific project drawings or technical requirements for <strong className="text-neutral-200">{service.title}</strong>? Request a professional review or itemized quotation.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-all shadow-lg shadow-orange-950/40 cursor-pointer"
                  >
                    Request Service Quotation
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Solugans & Associates, I would like to inquire about your ${service.title} services for an upcoming site.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-emerald-400 hover:text-emerald-300 bg-neutral-950 hover:bg-neutral-800 border border-emerald-500/30 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

                <div className="pt-4 border-t border-neutral-800 text-xs text-neutral-400 space-y-2 font-mono">
                  <div className="text-neutral-300">
                    Aroma Junction, Radopin 1st Floor, Awka
                  </div>
                  <div>
                    <a href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`} className="text-orange-400 hover:underline">
                      +234 803 227 4204
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Built Precedents
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Projects Employing Related Disciplines
              </h2>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-orange-400 hover:text-orange-300 self-start sm:self-auto cursor-pointer"
            >
              <span>View All 57 Projects</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                onClick={() => onSelectProject(project)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
