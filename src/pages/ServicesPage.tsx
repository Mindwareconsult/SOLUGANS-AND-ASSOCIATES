import React, { useState } from 'react';
import { SERVICES_DATA, ServiceDetail } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ArrowRight, Layers, CheckCircle2, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface ServicesPageProps {
  onSelectService: (service: ServiceDetail) => void;
  onNavigate: (route: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onSelectService, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Architecture & Design',
    'Civil & Construction',
    'Structural Steel',
    'MEP & Energy',
    'Surveying & Plant Hire'
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceCount = (cat: string) => {
    if (cat === 'All') return SERVICES_DATA.length;
    return SERVICES_DATA.filter((s) => s.category === cat).length;
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Services Hero */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-0.5 bg-orange-500" />
              <span>Comprehensive Engineering Disciplines</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
              Integrated Capabilities. Single-Point Accountability.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed font-sans max-w-3xl">
              We provide comprehensive engineering, architectural design, structural fabrication, quantity surveying, and procurement services tailored to Nigerian environmental and commercial realities.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Segmented Controls) */}
          <div className="mt-8 sm:mt-12 flex items-center gap-1.5 overflow-x-auto pb-1.5 sm:pb-0 scrollbar-none sm:flex-wrap p-1 sm:p-1.5 bg-neutral-900/80 border border-neutral-800 rounded-lg max-w-full sm:max-w-fit">
            {categories.map((cat) => {
              const count = getServiceCount(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-orange-600 text-white font-semibold shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isActive ? 'bg-orange-700/80 text-white' : 'bg-neutral-800 text-neutral-400'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onClick={() => onSelectService(service)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-neutral-900/30 border border-neutral-800 rounded-xl space-y-4">
              <p className="text-neutral-400 text-sm">No services found in this category.</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="px-5 py-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reset to All Services
              </button>
            </div>
          )}
        </div>
      </section>

      {/* The Integrated Advantage (Natural Editorial Numbering) */}
      <section className="py-16 lg:py-24 bg-neutral-900/30 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              Collaborative Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Why Solugans’ Multidisciplinary Model Delivers Better Value
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-sans leading-relaxed">
              When all technical stakeholders collaborate under one engineering governance structure, friction drops and quality rises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-950 border border-neutral-800/80 p-7 rounded-xl space-y-3.5 hover:border-neutral-700 transition-colors">
              <div className="text-orange-500 font-bold font-mono text-xs tracking-wider">01. COORDINATION</div>
              <h3 className="text-lg font-bold text-white font-display">Zero Design-Build Clashes</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Architectural drawings are vetted for structural loads and MEP routing from day one, eliminating costly on-site demolition and revisions.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800/80 p-7 rounded-xl space-y-3.5 hover:border-neutral-700 transition-colors">
              <div className="text-orange-500 font-bold font-mono text-xs tracking-wider">02. FISCAL DISCIPLINE</div>
              <h3 className="text-lg font-bold text-white font-display">Accurate Cost Modeling</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Our certified quantity surveyors benchmark real-time material prices in Nigeria, generating realistic BOQs without hidden variations.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800/80 p-7 rounded-xl space-y-3.5 hover:border-neutral-700 transition-colors">
              <div className="text-orange-500 font-bold font-mono text-xs tracking-wider">03. ACCOUNTABILITY</div>
              <h3 className="text-lg font-bold text-white font-display">Single Point of Contact</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                No finger-pointing between architects, engineers, and site foremen. Solugans &amp; Associates assumes total ownership of delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display">
            Need a Customized Engineering or Architectural Scope?
          </h3>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            Discuss your requirements with our technical team in Awka. We provide itemized quotations and preliminary site reviews across Anambra State.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors shadow-lg shadow-orange-950/40 cursor-pointer"
            >
              Request A Detailed Scope Quotation
            </button>
            <a
              href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-neutral-700/80 rounded-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call +234 803 227 4204</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
