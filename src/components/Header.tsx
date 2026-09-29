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

  // Prevent background scroll when mobile navigation drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 py-2 sm:py-2.5 shadow-xl shadow-black/40'
            : 'bg-neutral-950/95 md:bg-gradient-to-b md:from-neutral-950/80 md:via-neutral-950/40 md:to-transparent border-b border-neutral-800/80 md:border-transparent py-2 sm:py-2.5 md:py-4 backdrop-blur-md md:backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 md:px-8">
          {/* Main flex-wrap header container */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-2 sm:gap-x-4 md:gap-x-6">
            {/* Zone 1: Brand Wordmark / Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded-md shrink-0 pr-1 sm:pr-2 select-none min-w-0"
              aria-label="Solugans & Associates Engineering Ltd Home"
            >
              <BrandLogo size="md" variant="color" />
            </button>

            {/* Zone 2: Navigation Links (Desktop: 768px and up) */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5 xl:gap-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap ${
                  currentRoute === 'home'
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Home
                {currentRoute === 'home' && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-orange-500 rounded-full" />
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
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md whitespace-nowrap ${
                    currentRoute === 'about' || currentRoute === 'about-leadership'
                      ? 'text-white'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                  aria-expanded={companyDropdownOpen}
                >
                  <span>Company</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-orange-400' : 'text-neutral-400'}`} />
                </button>

                {companyDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-2 shadow-2xl backdrop-blur-xl">
                      <button
                        onClick={() => handleNavClick('about')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentRoute === 'about' ? 'bg-neutral-800 text-white font-semibold' : 'text-neutral-200 hover:text-white hover:bg-neutral-800/80'}`}
                      >
                        About Solugans
                        <p className="text-xs text-neutral-400 font-normal mt-0.5">Story, mission &amp; engineering ethos</p>
                      </button>
                      <button
                        onClick={() => handleNavClick('about/leadership')}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${currentRoute === 'about-leadership' ? 'bg-neutral-800 text-orange-400 font-semibold' : 'text-neutral-200 hover:text-white hover:bg-neutral-800/80'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span>Executive Leadership</span>
                          <span className="text-[10px] font-mono uppercase px-1.5 py-0.2 rounded bg-orange-950/80 text-orange-400 border border-orange-800/50">MD / CEO</span>
                        </div>
                        <p className="text-xs text-neutral-400 font-normal mt-0.5">Arc. Uganeme Emeka John Donatus</p>
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
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md whitespace-nowrap ${
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
                className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap ${
                  currentRoute.startsWith('project')
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Projects
                {currentRoute.startsWith('project') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Insights */}
              <button
                onClick={() => handleNavClick('blog')}
                className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap ${
                  currentRoute.startsWith('blog')
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Insights
                {currentRoute.startsWith('blog') && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>

              {/* Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-2.5 xl:px-3 py-2 text-xs xl:text-sm font-medium transition-colors rounded-md relative whitespace-nowrap ${
                  currentRoute === 'contact'
                    ? 'text-white'
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                Contact
                {currentRoute === 'contact' && (
                  <span className="absolute bottom-0 left-2.5 right-2.5 xl:left-3 xl:right-3 h-0.5 bg-orange-500 rounded-full" />
                )}
              </button>
            </nav>

            {/* Zone 3: Primary Action & Quick Phone (Desktop: 768px and up) */}
            <div className="hidden md:flex items-center gap-3 xl:gap-4 shrink-0">
              <a
                href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                className="hidden xl:flex items-center gap-2 text-xs text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
                title="Direct Phone Line"
              >
                <Phone className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                <span>+234 803 227 4204</span>
              </a>

              <button
                onClick={() => handleNavClick('contact')}
                className="px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md transition-all shadow-md shadow-orange-950/40 hover:shadow-orange-600/20 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 shrink-0 cursor-pointer"
              >
                Get A Quote
              </button>
            </div>

            {/* Zone 4: Mobile Action Controls (< 768px: md:hidden) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 md:hidden shrink-0">
              {/* On tablet/phablet screens (640px-767px), 'Get a Quote' is spaced cleanly beside toggle */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md whitespace-nowrap shadow-sm min-h-[38px] cursor-pointer transition-colors shrink-0"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              {/* Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`h-9 w-9 sm:h-10 sm:w-10 rounded-md sm:rounded-lg border transition-all duration-200 flex items-center justify-center cursor-pointer shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 active:scale-95 shrink-0 ${
                  mobileMenuOpen
                    ? 'bg-orange-600 border-orange-500 text-white ring-2 ring-orange-400/40'
                    : 'bg-neutral-900 border-neutral-700 text-white hover:border-orange-500 hover:bg-neutral-800'
                }`}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>

            {/* Zone 5: Dedicated Mobile Stacked Action Strip (< 640px: sm:hidden) */}
            {/* Stacks 'Get a Quote' below the logo and toggle on narrow mobile screens so they NEVER overlap */}
            <div className="w-full sm:hidden flex items-center justify-between gap-2 pt-1.5 pb-0.5 border-t border-neutral-800/60">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span className="truncate">Awka, Anambra · RC 1243171</span>
              </div>
              <button
                onClick={() => handleNavClick('contact')}
                className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-md whitespace-nowrap shadow-sm flex items-center gap-1 cursor-pointer shrink-0 transition-transform active:scale-95"
              >
                <span>Get a Quote</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Animated Slide-out Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-neutral-950 border-l border-neutral-800 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200 shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-neutral-800 gap-3">
                <BrandLogo size="sm" variant="color" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-h-[40px] min-w-[40px] p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center active:scale-95 transition-all shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-5 space-y-1">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute === 'home' ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute === 'about' ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  About Company
                </button>
                <button
                  onClick={() => handleNavClick('about/leadership')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center justify-between min-h-[44px] ${
                    currentRoute === 'about-leadership' ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  <div className="flex flex-col">
                    <span>Executive Leadership</span>
                    <span className="text-xs text-neutral-400 font-normal">Arc. Uganeme Emeka (MD / CEO)</span>
                  </div>
                  <span className="text-[10px] font-mono text-orange-400 uppercase bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">Profile</span>
                </button>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleNavClick('services')}
                      className={`flex-1 text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center ${
                        currentRoute.startsWith('service') ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                      }`}
                    >
                      Our Services
                    </button>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="min-h-[44px] min-w-[44px] p-2.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 flex items-center justify-center cursor-pointer"
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
                            className="w-full text-left px-3 py-2 text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-md transition-colors flex items-center gap-2 min-h-[38px]"
                          >
                            <Icon className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                            <span>{item.name}</span>
                          </button>
                        );
                      })}
                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-orange-400 hover:text-orange-300 rounded-md transition-colors min-h-[38px] flex items-center"
                      >
                        View All Services →
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleNavClick('projects')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute.startsWith('project') ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Projects &amp; Case Studies
                </button>
                <button
                  onClick={() => handleNavClick('blog')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute.startsWith('blog') ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Insights &amp; Articles
                </button>
                <button
                  onClick={() => handleNavClick('careers')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute === 'careers' ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Careers &amp; Manpower
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left px-3 py-2.5 text-base font-medium rounded-lg transition-colors flex items-center min-h-[44px] ${
                    currentRoute === 'contact' ? 'text-orange-400 bg-neutral-900 font-semibold border-l-2 border-orange-500' : 'text-neutral-200 hover:bg-neutral-900'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="pt-5 border-t border-neutral-800 space-y-4">
              <div className="space-y-2">
                <a
                  href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white min-h-[40px]"
                >
                  <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>+234 803 227 4204</span>
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.contacts.email}`}
                  className="flex items-center gap-3 text-sm text-neutral-300 hover:text-white min-h-[40px]"
                >
                  <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>info@solugans.com</span>
                </a>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 active:bg-orange-700 rounded-lg transition-colors shadow-lg min-h-[44px] flex items-center justify-center cursor-pointer"
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
