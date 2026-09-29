import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ShieldCheck, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand & CAC Verification */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => onNavigate('home')}
              className="text-left focus:outline-none"
            >
              <BrandLogo size="md" variant="color" />
            </button>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Integrated engineering consultancy, architectural design, building construction, quantity surveying, and procurement services in Awka, Anambra State, Nigeria.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>CAC Registered · RC {COMPANY_INFO.rcNumber}</span>
            </div>

            <div className="text-xs uppercase tracking-widest text-orange-500 font-bold">
              {COMPANY_INFO.tagline}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about/leadership')}
                  className="hover:text-white transition-colors text-orange-400/90 font-medium"
                >
                  Executive Leadership (MD)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors"
                >
                  Selected Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors"
                >
                  Engineering Insights
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact &amp; Quotations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('careers')}
                  className="hover:text-white transition-colors"
                >
                  Careers &amp; Manpower
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Disciplines */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Disciplines
            </div>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => onNavigate('service-architectural-design')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Architectural Designs &amp; 3D Modeling
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-building-construction')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Turnkey Building Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-substructural-foundation-engineering')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Substructural &amp; Foundation Engineering
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-tubular-steel-space-frames')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Tubular Steel Space Frames
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-solar-energy-mini-grids')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Solar Mini-Grids &amp; Power Systems
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('service-quantity-surveying-cost-engineering')}
                  className="hover:text-orange-400 transition-colors text-left"
                >
                  Quantity Surveying &amp; Cost Control
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contacts & Location */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Awka Head Office
            </div>

            <div className="space-y-3 text-xs text-neutral-300 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>
                  No. 5 Secretariat Road, Aroma Junction, Office No. 2, First Floor, Radopin Supermarket, Awka, Anambra State.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`} className="block hover:text-white">
                    {COMPANY_INFO.contacts.primaryPhone}
                  </a>
                  <a href={`tel:${COMPANY_INFO.contacts.secondaryPhone.replace(/\s+/g, '')}`} className="block hover:text-white">
                    {COMPANY_INFO.contacts.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; 2026 Solugans &amp; Associates Engineering Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Corporate Affairs Commission: {COMPANY_INFO.rcNumber}</span>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-neutral-400 transition-colors"
            >
              Consultation Desk
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
