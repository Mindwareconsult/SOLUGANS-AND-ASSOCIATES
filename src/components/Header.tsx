import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  ArrowUpRight,
  ShieldCheck,
  Compass,
  Building2,
  Layers,
  Zap,
  Calculator,
  Truck
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setCompanyDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const serviceCategories = [
    { name: 'Architectural Designs & 3D Modeling', slug: 'architectural-design', icon: Compass, desc: 'Bespoke planning & 3D visualization' },
    { name: 'Turnkey Building Construction', slug: 'building-construction', icon: Building2, desc: 'Commercial plazas, mansions & hostels' },
    { name: 'Substructure & Deep Foundations', slug: 'substructural-foundation-engineering', icon: Layers, desc: 'Raft foundations & retaining walls' },
    { name: 'Tubular Steel Space Frames', slug: 'tubular-steel-space-frames', icon: Layers, desc: 'Wide-span trusses & industrial frameworks' },
    { name: 'Solar Mini-Grids & Clean Energy', slug: 'solar-energy-mini-grids', icon: Zap, desc: '10kVA to 120kVA+ institutional EPCC' },
    { name: 'Quantity Surveying & BOQ', slug: 'quantity-surveying-cost-engineering', icon: Calculator, desc: 'Cost engineering & material takeoff' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl shadow-black/30'
            : 'bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark / Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-sm shrink-0"
              aria-label="Solugans & Associates Engineering Ltd Home"
            >
              <BrandLogo size="md" variant="color" />
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                  currentRoute === 'home'
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Home
                {currentRoute === 'home' && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Company Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCompanyDropdownOpen(true)}
                onMouseLeave={() => setCompanyDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('about')}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    currentRoute === 'about'
                      ? 'text-white'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-expanded={companyDropdownOpen}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-orange-400' : 'text-neutral-400'}`} />
                </button>

                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 shadow-2xl backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-neutral-800/80 rounded-md transition-colors"
                      >
                        About Solugans
                        <p className="text-xs text-neutral-400 font-normal mt-0.5">Story, mission &amp; engineering ethos</p>
                      </button>
                      <button
                        onClick={() => handleNavClick('about')}
                        className="w-full text-left px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-neutral-800/80 rounded-md transition-colors"
                      >
                        Our Core Values
                        <p className="text-xs text-neutral-400 font-normal mt-0.5">Precision, safety &amp; quality control</p>
                      </button>
                      <button
                        onClick={() => handleNavClick('careers')}
                        className="w-full text-left px-3 py-2 text-sm text-neutral-200 hover:text-white hover:bg-neutral-800/80 rounded-md transition-colors"
                      >
                        Careers &amp; Manpower
                        <p className="text-xs text-neutral-400 font-normal mt-0.5">Opportunities for engineers &amp; artisans</p>
                      </button>
                      <div className="border-t border-neutral-800 mt-1 pt-1.5 px-3 py-1">
                        <span className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          CAC Registered: {COMPANY_INFO.rcNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Mega/Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${
                    currentRoute.startsWith('service')
                      ? 'text-white'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-orange-400' : 'text-neutral-400'}`} />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full -left-20 w-[480px] pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-2xl backdrop-blur-xl grid grid-cols-2 gap-2">
                      {serviceCategories.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.slug}
                            onClick={() => handleNavClick(`service-${item.slug}`)}
                            className="text-left p-2.5 rounded-md hover:bg-neutral-800/80 transition-colors group"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-orange-500 group-hover:text-orange-400 shrink-0" />
                              <span className="text-sm font-medium text-neutral-200 group-hover:text-white">
                                {item.name}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-400 font-normal mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </button>
                        );
                      })}
                      <div className="col-span-2 border-t border-neutral-800 pt-2.5 px-2 flex items-center justify-between">
                        <button
                          onClick={() => handleNavClick('services')}
                          className="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1"
                        >
                          View All Integrated Services
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-[11px] text-neutral-500">Awka · Anambra State</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <button
                onClick={() => handleNavClick('projects')}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                  currentRoute.startsWith('project')
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Projects
                {currentRoute.startsWith('project') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Insights */}
              <button
                onClick={() => handleNavClick('blog')}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                  currentRoute.startsWith('blog')
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Insights
                {currentRoute.startsWith('blog') && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md relative ${
                  currentRoute === 'contact'
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Contact
                {currentRoute === 'contact' && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            </nav>

            {/* Zone 3: Primary Action & Quick Phone */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500" />
                <span>+234 803 227 4204</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-all shadow-md shadow-orange-950/40 hover:shadow-orange-600/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
              >
                Get A Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 sm:gap-3 lg:hidden shrink-0">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 sm:px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md whitespace-nowrap"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 text-neutral-300 hover:text-white hover:bg-neutral-800/60 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-neutral-950 border-l border-neutral-800 p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-neutral-800">
                <BrandLogo size="sm" variant="color" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-neutral-400 hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-6 space-y-1">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute === 'home' ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute === 'about' ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  About Company
                </button>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex-1 text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                        currentRoute.startsWith('service') ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                      }`}
                    >
                      Our Services
                    </button>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2.5 text-neutral-400 hover:text-white rounded-md hover:bg-neutral-900"
                      aria-label="Toggle services list"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180 text-orange-400' : ''}`} />
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="pl-4 pr-1 py-1 space-y-1 border-l-2 border-orange-500/40 ml-3">
                      {serviceCategories.map((item) => {
                        const Icon = item.icon;
                        return (
                          <button
                            key={item.slug}
                            onClick={() => handleNavClick(`service-${item.slug}`)}
                            className="w-full text-left px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-md transition-colors flex items-center gap-2"
                          >
                            <Icon className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left px-3 py-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 rounded-md transition-colors"
                      >
                        View All Services →
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleNavClick('projects')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute.startsWith('project') ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Projects &amp; Case Studies
                </button>
                <button
                  onClick={() => handleNavClick('blog')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute.startsWith('blog') ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Insights &amp; Articles
                </button>
                <button
                  onClick={() => handleNavClick('careers')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute === 'careers' ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Careers &amp; Manpower
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-md transition-colors ${
                    currentRoute === 'contact' ? 'text-orange-500 bg-neutral-900 font-semibold' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-6 border-t border-neutral-800 space-y-4">
              <div className="space-y-2">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white"
                >
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span>+234 803 227 4204</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contacts.email}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white"
                >
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span>info@solugans.com</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors shadow-lg"
                >
                  Request A Project Quote
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center">
                CAC Registered · {COMPANY_INFO.rcNumber} · Awka, Anambra State
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
