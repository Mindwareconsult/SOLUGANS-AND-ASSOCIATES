import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { 
  IntroBrandSection, 
  WhyWorkWithUsSection, 
  ProcessTimelineSection, 
  ArchitectureEngineeringSplit, 
  TestimonialsSection, 
  FinalCTASection 
} from '../components/HomepageSections';
import { StatsSection } from '../components/StatsSection';
import { ProjectCard } from '../components/ProjectCard';
import { ServiceCard } from '../components/ServiceCard';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { SERVICES_DATA, ServiceDetail } from '../data/services';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onSelectProject: (project: ProjectItem) => void;
  onSelectService: (service: ServiceDetail) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onSelectService
}) => {
  // Top featured projects representing varied disciplines
  const featuredProjects = PROJECTS_DATA.filter(p => p.featured).slice(0, 6);
  
  // Highlighted services across verified disciplines
  const highlightedServices = [
    SERVICES_DATA.find(s => s.slug === 'architectural-design'),
    SERVICES_DATA.find(s => s.slug === 'building-construction'),
    SERVICES_DATA.find(s => s.slug === 'substructural-foundation-engineering'),
    SERVICES_DATA.find(s => s.slug === 'tubular-steel-space-frames'),
    SERVICES_DATA.find(s => s.slug === 'solar-energy-mini-grids'),
    SERVICES_DATA.find(s => s.slug === 'quantity-surveying-cost-engineering')
  ].filter(Boolean) as ServiceDetail[];

  return (
    <div className="w-full">
      {/* 1. Cinematic Hero Carousel */}
      <HeroSlider
        onGetQuote={() => onNavigate('contact')}
        onExploreProjects={() => onNavigate('projects')}
        onExploreServices={() => onNavigate('services')}
        onSelectProject={onSelectProject}
      />

      {/* 2. Introduction & Brand Statement */}
      <IntroBrandSection onNavigate={onNavigate} />

      {/* 3. Key Project Metrics & Performance Stats */}
      <StatsSection onExploreProjects={() => onNavigate('projects')} />

      {/* 4. Featured Built Projects */}
      <section className="py-20 lg:py-28 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-500">
                Selected Works
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Featured Built Projects
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                A selection of contemporary residential residences, commercial plazas, and engineering supervisions executed in Awka and Anambra State.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => onSelectProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4B. Real Field Photography & Site Evidence Showcase */}
      <section className="py-16 lg:py-20 bg-neutral-950 border-b border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-900">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                <span className="w-2 h-0.5 bg-orange-500" />
                <span>On-Site Photographic Evidence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
                Authentic Engineering &amp; Site Execution
              </h2>
              <p className="text-sm text-neutral-300 font-sans">
                Real documentation captured across active construction sites—including deep basement excavations, foundation raft slabs, column rebar cages, and tubular steel space frames.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-orange-600 hover:bg-orange-500 text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer self-start md:self-auto shadow-lg shadow-orange-950/50"
            >
              <span>Explore Real Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Real Construction Photos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              {
                src: '/assets/images/BASEMENT EXCAVATION/IMG_2744.JPG',
                category: 'BASEMENT EXCAVATION',
                caption: 'Excavation & site formation'
              },
              {
                src: '/assets/images/SUB-STRUCTURAL WORKS (FOUNDATION WORK)/IMG_3129.JPG',
                category: 'SUB-STRUCTURAL WORKS',
                caption: 'Foundation blinding concrete'
              },
              {
                src: '/assets/images/REINFORCEMENT WORKS/IMG_6566.JPG',
                category: 'REINFORCEMENT WORKS',
                caption: 'Suspended slab rebar mat'
              },
              {
                src: '/assets/images/REINFOREMENT OF COLUMNS AND BEAMS/IMG_6567.JPG',
                category: 'COLUMNS & BEAMS',
                caption: 'Column starter rebar cages'
              },
              {
                src: '/assets/images/RETAINING WALL WORK/team work.JPG',
                category: 'RETAINING WALL WORK',
                caption: 'Engineers on retaining wall'
              },
              {
                src: '/assets/images/TUBULAR STEEL WORKS/20180706_110913.jpg',
                category: 'TUBULAR STEEL WORKS',
                caption: 'Space frame truss welding'
              }
            ].map((photo, pIdx) => (
              <div
                key={pIdx}
                onClick={() => onNavigate('projects')}
                className="group relative rounded-xl overflow-hidden border border-neutral-800/90 aspect-[4/3] bg-neutral-900 cursor-pointer shadow-md hover:border-neutral-700 transition-all duration-300"
              >
                <img
                  src={photo.src}
                  alt={`${photo.category} by Solugans & Associates`}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-2 left-2 right-2 text-left">
                  <div className="text-[9px] font-mono font-bold text-orange-400 uppercase tracking-wider truncate">
                    {photo.category}
                  </div>
                  <div className="text-[10px] text-neutral-300 font-sans truncate">
                    {photo.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Integrated Capabilities & Services */}
      <section className="py-20 lg:py-28 bg-neutral-900/30 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-500">
                Comprehensive Disciplines
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
                Integrated Expertise. One Project Vision.
              </h2>
              <p className="text-sm sm:text-base text-neutral-400">
                From architectural design and quantity surveying to civil construction and precision mechanical fabrication, our multidisciplined practice covers the entire built environment lifecycle.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-semibold uppercase tracking-wider text-white transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore All Disciplines</span>
              <ArrowRight className="w-4 h-4 text-orange-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlightedServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClick={() => onSelectService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Work With Solugans */}
      <WhyWorkWithUsSection />

      {/* 6. Systematic Process Timeline */}
      <ProcessTimelineSection />

      {/* 7. Architecture + Engineering Split */}
      <ArchitectureEngineeringSplit onNavigate={onNavigate} />

      {/* 8. Verified Testimonials */}
      <TestimonialsSection />

      {/* 9. Final CTA */}
      <FinalCTASection onNavigate={onNavigate} />
    </div>
  );
};
