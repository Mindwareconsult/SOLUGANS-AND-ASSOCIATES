import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Ruler, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  ArrowRight, 
  Phone, 
  Award, 
  FileCheck, 
  Cpu, 
  Truck, 
  Layers, 
  CalendarClock, 
  HardHat, 
  Users, 
  Sparkles,
  Briefcase,
  GraduationCap,
  ArrowUpRight
} from 'lucide-react';
import { COMPANY_INFO, TeamMember } from '../data/company';
import { EXECUTIVE_DATA } from '../data/executive';
import { FAQSection } from '../components/FAQSection';

interface AboutPageProps {
  onNavigate: (route: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const [activeTeamTab, setActiveTeamTab] = useState<'leadership' | 'field'>('leadership');

  return (
    <div className="w-full pt-28 pb-20">
      {/* 1. Page Hero: Corporate Monograph */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              <span className="w-2 h-0.5 bg-orange-500" />
              <span>Official Corporate Monograph</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
              Technical Precision. Proven Execution. Corporate Integrity.
            </h1>
            
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed font-sans max-w-3xl">
              Headquartered in Awka, Anambra State, Solugans &amp; Associates is a certified engineering and construction company delivering integrated architectural designs, structural civil works, infrastructure masterplanning, and turnkey project execution across Nigeria.
            </p>

            {/* Clean Unboxed Statutory Compliance Metadata */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs font-mono border-t border-neutral-800/80">
              <span className="flex items-center gap-1.5 text-neutral-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CAC Registered: {COMPANY_INFO.rcNumber}</span>
              </span>
              <span className="text-neutral-700">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <FileCheck className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>FIRS TIN: {COMPANY_INFO.tin}</span>
              </span>
              <span className="text-neutral-700">·</span>
              <span className="flex items-center gap-1.5 text-neutral-200">
                <Award className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>AIRS E-Tax: ASIN {COMPANY_INFO.asinNumber}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are & Corporate Profile */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Who We Are
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display leading-snug">
                A Pioneering Engineering Company in Eastern Nigeria
              </h2>
              
              <div className="space-y-4 text-base text-neutral-300 leading-relaxed font-sans">
                <p>
                  <strong className="text-white">{COMPANY_INFO.name}</strong> was incorporated under the Companies and Allied Matters Act 1990 on <strong className="text-white">{COMPANY_INFO.incorporationDate}</strong> with registration number <strong className="text-white">{COMPANY_INFO.rcNumber}</strong>. 
                </p>
                <p className="text-neutral-400">
                  Our unique brand of engineers has the capacity to deliver almost the full range of professional engineering services and specialist skills. These encompass project identification, pre-feasibility and feasibility studies, properties and site appraisals, site selection, architectural and detailed engineering design, construction management and field supervision, procurement, inspection, quality control, and personnel training.
                </p>
                <p className="text-neutral-400">
                  Our company has successfully undertaken a substantial list of landmark, mega-scale projects within Nigeria—from stately residential mansions and commercial retail complexes to university auditoriums and 120kVA renewable solar mini-grids. We are unreservedly committed to a policy of verified quality assurance.
                </p>
              </div>

              {/* Head Office Address Verification */}
              <div className="p-6 bg-neutral-900/80 border border-neutral-800 rounded-xl space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span>Principal Place of Business</span>
                </div>
                <p className="text-sm text-neutral-200 font-medium font-sans">
                  {COMPANY_INFO.address.fullFormatted}
                </p>
                <div className="text-xs text-neutral-400 flex flex-wrap gap-4 pt-1 font-mono">
                  <span>Tel: {COMPANY_INFO.contacts.primaryPhone}</span>
                  <span>·</span>
                  <span>{COMPANY_INFO.contacts.secondaryPhone}</span>
                  <span>·</span>
                  <span>Email: {COMPANY_INFO.contacts.email}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Engineering Supervision Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-neutral-800 aspect-[4/5] bg-neutral-900 shadow-2xl relative group">
                <img
                  src="/src/assets/images/RETAINING WALL WORK/team work.JPG"
                  alt="Solugans engineering site team on active project supervision"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-neutral-300 bg-neutral-950/85 p-4 rounded-lg backdrop-blur-md border border-neutral-800 space-y-1">
                  <div className="flex items-center gap-2 font-bold text-white font-display">
                    <HardHat className="w-4 h-4 text-orange-400" />
                    <span>On-Site Technical Supervision</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                    COREN-registered civil and structural engineers inspecting rebar cages, level geometry, and concrete slump on active deck pours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Vision & Our Mission (Exact PDF Text) */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-8 sm:p-10 rounded-xl space-y-5 hover:border-orange-500/40 transition-colors relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Our Vision</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Tradition of Excellence &amp; Global Standards
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  "{COMPANY_INFO.vision}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-orange-400 font-bold block mb-0.5">Client Loyalty</span>
                  Full integration with client-driven alliances
                </div>
                <div>
                  <span className="text-orange-400 font-bold block mb-0.5">Methodologies</span>
                  Latest codes &amp; standards compliance
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-neutral-950 border border-neutral-800/80 p-8 sm:p-10 rounded-xl space-y-5 hover:border-orange-500/40 transition-colors relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  <span>Our Mission</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Skilled Teams, Advanced Technology &amp; Value Delivery
                </h3>
                
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                  "{COMPANY_INFO.mission}"
                </p>
              </div>

              <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 gap-4 text-xs font-mono text-neutral-400">
                <div>
                  <span className="text-orange-400 font-bold block mb-0.5">Skilled Expertise</span>
                  Proven methodology &amp; technology
                </div>
                <div>
                  <span className="text-orange-400 font-bold block mb-0.5">Ethical Growth</span>
                  Progressive corporate alliance
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values (All 5 Exact Values from Profile Page 34) */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Our Core Operational Values
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              As documented in our corporate profile, we have maintained our status and reputation by incorporating these foundational commitments across our drawing boards, contracts, and construction sites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 border border-neutral-800/80 hover:border-orange-500/40 p-7 rounded-xl space-y-3 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="text-xs font-mono tracking-widest text-orange-500 font-bold">
                    VALUE 0{idx + 1}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
                  <span>Strict Operational Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4B. Executive Leadership Preview: Meet Our Managing Director */}
      <section className="py-20 lg:py-28 border-b border-neutral-900 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.025] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Professional Portrait */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => onNavigate('about/leadership')}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl group cursor-pointer"
              >
                <img
                  src={EXECUTIVE_DATA.image}
                  alt={EXECUTIVE_DATA.fullName}
                  className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />
                
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-950/90 border border-neutral-800 text-[11px] font-mono text-orange-400 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Executive Leadership</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-300">
                  <span className="font-semibold text-white">Arc. Uganeme Emeka Donatus</span>
                  <span className="text-orange-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-medium">
                    <span>Inspect Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Editorial Narrative & CTA */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                  <span className="w-2 h-0.5 bg-orange-500" />
                  <span>{EXECUTIVE_DATA.aboutPreview.eyebrow}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-display">
                  {EXECUTIVE_DATA.aboutPreview.heading}
                </h2>

                <p className="text-sm sm:text-base font-mono text-orange-400 font-medium italic">
                  "{EXECUTIVE_DATA.aboutPreview.supportingQuote}"
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-800/80 space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {EXECUTIVE_DATA.fullName}
                </h3>
                <div className="text-xs sm:text-sm font-bold text-orange-400 font-display">
                  {EXECUTIVE_DATA.formalTitle}
                </div>
                <div className="text-xs text-neutral-400 font-mono tracking-wide">
                  {EXECUTIVE_DATA.professionalDesignations}
                </div>
              </div>

              {/* Concise Preview Content (Exactly 2 short paragraphs as specified) */}
              <div className="space-y-3 text-sm sm:text-base text-neutral-300 font-normal leading-relaxed font-sans">
                <p>
                  {EXECUTIVE_DATA.aboutPreview.shortBioPara1}
                </p>
                <p className="text-neutral-400 text-sm">
                  {EXECUTIVE_DATA.aboutPreview.shortBioPara2}
                </p>
              </div>

              {/* Prominent Primary CTA */}
              <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('about/leadership')}
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-all shadow-xl shadow-orange-950/60 hover:shadow-orange-600/30 flex items-center justify-center gap-2.5 cursor-pointer group min-h-[44px]"
                >
                  <span>View Executive Profile</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('about/leadership')}
                  className="w-full sm:w-auto px-5 py-3.5 sm:py-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer flex items-center justify-center min-h-[44px]"
                >
                  Meet Our Managing Director
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Management & Key Technical Personnel (Verified Data from Pages 35 & 157-194) */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Management &amp; Key Personnel
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Certified Technical Leadership &amp; Field Specialists
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
                Our multidisciplinary practice is steered by seasoned architects, COREN-registered civil, electrical, and mechanical engineers, quantity surveyors, and certified building technologists.
              </p>
            </div>

            {/* Segmented Team Switcher */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto p-1 bg-neutral-900 border border-neutral-800 rounded-lg gap-1">
              <button
                onClick={() => setActiveTeamTab('leadership')}
                className={`px-4 py-2.5 text-xs font-medium rounded-md transition-colors text-center cursor-pointer min-h-[40px] flex items-center justify-center ${
                  activeTeamTab === 'leadership'
                    ? 'bg-orange-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Executive Leadership (COREN / ARCON)
              </button>
              <button
                onClick={() => setActiveTeamTab('field')}
                className={`px-4 py-2.5 text-xs font-medium rounded-md transition-colors text-center cursor-pointer min-h-[40px] flex items-center justify-center ${
                  activeTeamTab === 'field'
                    ? 'bg-orange-600 text-white font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Field Engineering Team
              </button>
            </div>
          </div>

          {/* Leadership Cards */}
          {activeTeamTab === 'leadership' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.managementTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
                >
                  <div>
                    {/* Headshot Portrait Media Container */}
                    <div className="relative aspect-[1/1] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      {member.image ? (
                        <>
                          <img
                            src={member.image}
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-104"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-neutral-950 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-blueprint-grid-dense">
                          <GraduationCap className="w-12 h-12 text-orange-500 mb-2" />
                          <span className="text-xl font-bold font-display text-white">{member.name}</span>
                          <span className="text-xs font-mono text-neutral-400 mt-1">{member.title}</span>
                        </div>
                      )}

                      {/* Top Folio / Reg Number */}
                      {member.regNumber && (
                        <div className="absolute top-3 right-3 font-mono text-[10px] text-orange-400 font-bold bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-neutral-800">
                          {member.regNumber.split('·')[0]}
                        </div>
                      )}

                      {/* Bottom Experience Overlay */}
                      {member.experienceYears && (
                        <div className="absolute bottom-3 left-3 font-mono text-[11px] text-neutral-300 bg-neutral-950/85 backdrop-blur-md px-2.5 py-1 rounded-sm border border-neutral-800 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>{member.experienceYears}+ Years Track Record</span>
                        </div>
                      )}
                    </div>

                    {/* Narrative Content */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                          {member.name}
                        </h3>
                        <div className="text-xs font-mono text-orange-500 font-medium mt-0.5">
                          {member.title}
                        </div>
                        <div className="text-xs text-neutral-400 mt-1 font-sans">
                          {member.qualification} · {member.institution}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                        {member.bio}
                      </p>

                      {member.name.includes('Uganeme') && (
                        <div className="pt-2">
                          <button
                            onClick={() => onNavigate('about/leadership')}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors cursor-pointer group/link"
                          >
                            <span>Inspect Dedicated Executive Profile</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {member.professionalBodies && member.professionalBodies.length > 0 && (
                    <div className="p-6 sm:p-7 pt-0">
                      <div className="pt-4 border-t border-neutral-800/80 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                          Professional Memberships:
                        </span>
                        {member.professionalBodies.map((pb, pIdx) => (
                          <div key={pIdx} className="text-xs font-mono text-neutral-300 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                            <span>{pb}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.fieldEngineeringTeam.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-950 border border-neutral-800/80 hover:border-neutral-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 group"
                >
                  <div>
                    {/* Photo or Monogram Frame */}
                    <div className="relative aspect-[4/3] sm:aspect-[1/1] w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                      {member.image ? (
                        <>
                          <img
                            src={member.image}
                            alt={member.name}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover object-top transform transition-transform duration-700 ease-out group-hover:scale-104"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/20 to-transparent opacity-60" />
                        </>
                      ) : (
                        <div className="w-full h-full bg-neutral-900/90 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-blueprint-grid-dense">
                          <div className="w-14 h-14 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-orange-400 font-display font-bold text-lg mb-2 shadow-inner">
                            {member.name.replace(/^(Arc\.|Engr\.|Chief)\s+/i, '').split(' ').map(n => n[0]).slice(0, 2).join('')}
                          </div>
                          <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Field Specialist</span>
                        </div>
                      )}

                      {/* Top Folio and Experience */}
                      <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs font-mono">
                        <span className="text-[10px] text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-800">
                          SPECIALIST 0{idx + 1}
                        </span>
                        <span className="text-[10px] text-orange-400 font-bold bg-neutral-950/80 backdrop-blur-md px-2 py-0.5 rounded border border-neutral-800">
                          {member.experienceYears} Years Exp
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-white font-display group-hover:text-orange-400 transition-colors">
                          {member.name}
                        </h3>
                        <div className="text-xs text-orange-400 font-medium font-mono mt-0.5">{member.role}</div>
                        <div className="text-xs text-neutral-400 font-sans mt-0.5">{member.qualification}</div>
                      </div>

                      <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 pt-0">
                    <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                      <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                      <span>Site Operations &amp; Verification</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. Heavy Machineries & Plants Fleet (Documented Page 195) */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-orange-500 font-bold">
              <Truck className="w-4 h-4 text-orange-500" />
              <span>Plant &amp; Equipment Holdings</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Company-Owned Heavy Construction Machineries
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed">
              As officially registered on Page 195 of our company profile, Solugans &amp; Associates maintains an extensive inventory of company-owned heavy plants and precision equipment deployed across active sites and available for commercial hire.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {COMPANY_INFO.machineries.map((mach, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/50 border border-neutral-800/80 p-5 rounded-xl space-y-2 hover:border-neutral-700 transition-colors"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-neutral-500">FLEET UNIT 0{idx + 1}</span>
                  <span className="text-orange-400 font-bold font-mono">
                    QTY: {mach.quantity}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white font-display">{mach.name}</h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">{mach.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>All company machinery undergoes routine preventative maintenance logs.</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-orange-400 hover:text-white transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1 font-semibold"
            >
              <span>Enquire About Commercial Plant Hire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Corporate Compliance & Financial Standing */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-orange-500">
                Audited Financial Standing &amp; Tax Compliance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Institutional Financial Transparency
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                <p>
                  Solugans &amp; Associates maintains comprehensive annual financial audits conducted by <strong className="text-white">B.C. Nwankwo &amp; Co. (Chartered Accountants)</strong>, fully complying with the Companies and Allied Matters Act and International Financial Reporting Standards (IFRS).
                </p>
                <p className="text-neutral-400">
                  With verified annual revenues scaling from ₦116 Million in 2020 to over <strong className="text-white">₦208 Million in 2023</strong>, our firm possesses the solid balance sheet, liquidity, and procurement strength required to execute multi-billion Naira infrastructure contracts without liquidity constraints.
                </p>
              </div>

              {/* Statutory Registrations Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="text-neutral-500 block mb-0.5">TIN (FIRS)</span>
                  <span className="text-white font-bold">{COMPANY_INFO.tin}</span>
                </div>
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="text-neutral-500 block mb-0.5">AIRS E-Tax ASIN</span>
                  <span className="text-white font-bold">{COMPANY_INFO.asinNumber}</span>
                </div>
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="text-neutral-500 block mb-0.5">CAC RC Number</span>
                  <span className="text-white font-bold">{COMPANY_INFO.rcNumber}</span>
                </div>
                <div className="p-3.5 bg-neutral-950 border border-neutral-800 rounded-lg">
                  <span className="text-neutral-500 block mb-0.5">Trademark</span>
                  <span className="text-white font-bold">SU &amp; DEVICE</span>
                </div>
              </div>
            </div>

            {/* Financial Highlights Table */}
            <div className="lg:col-span-6 bg-neutral-950 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div>
                  <h4 className="text-base font-bold text-white font-display">Audited Revenue Summary</h4>
                  <div className="text-xs text-neutral-400 font-mono">B.C. Nwankwo &amp; Co. (Chartered Accountants)</div>
                </div>
                <div className="text-xs text-emerald-400 font-mono font-medium">
                  Verified Audits
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-neutral-800 text-neutral-400">
                      <th className="pb-3">Financial Year</th>
                      <th className="pb-3 text-right">Audited Turnover</th>
                      <th className="pb-3 text-right">Gross Profit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-900 text-neutral-300">
                    {COMPANY_INFO.financialHighlights.map((fin, fIdx) => (
                      <tr key={fIdx} className="hover:bg-neutral-900/40">
                        <td className="py-3 font-bold text-white">{fin.year}</td>
                        <td className="py-3 text-right text-orange-400 font-bold">{fin.revenue}</td>
                        <td className="py-3 text-right text-neutral-300">{fin.grossProfit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 font-mono border-t border-neutral-800/80 flex items-center justify-between">
                <span>Cumulative Turnover: &gt; ₦647,000,000</span>
                <span>FIRS &amp; AIRS Tax Cleared</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Frequently Asked Questions */}
      <FAQSection onNavigate={onNavigate} />

      {/* 9. Leadership & Office Contact CTA */}
      <section className="py-16 lg:py-24 bg-neutral-900/40 border-t border-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Ready to Partner With an Established Engineering Practice?
          </h2>
          <p className="text-base text-neutral-300 font-sans leading-relaxed max-w-2xl mx-auto">
            Our corporate head office is located on the First Floor of Radopin Supermarket, No. 5 Secretariat Road, Aroma Junction, Awka. We invite developers, institutional leaders, and homeowners for comprehensive technical consultations.
          </p>
          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 rounded-md transition-colors cursor-pointer shadow-lg shadow-orange-950/40"
            >
              Book an Office Consultation
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
