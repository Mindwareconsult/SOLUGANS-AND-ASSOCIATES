import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  GraduationCap, 
  Users,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface CareersPageProps {
  onNavigate: (route: string) => void;
}

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [applicationSent, setApplicationSent] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');

  const positions: JobPosition[] = [
    {
      id: 'senior-civil-engineer',
      title: 'Senior Civil / Structural Site Engineer',
      department: 'Civil & Structural Engineering',
      location: 'Awka, Anambra State',
      type: 'Full-Time',
      experience: '5+ Years',
      description: 'Lead day-to-day on-site structural execution, rebar reinforcement verification, concrete batch testing, and formwork alignment for multi-story residential and commercial buildings.',
      requirements: [
        'B.Eng or HND in Civil / Structural Engineering',
        'COREN / NSE registration or eligibility is an advantage',
        'Proven track record supervising raft foundations, columns, beams, and suspended slabs',
        'Proficiency in interpreting structural drawings and rebar bending schedules (BBS)',
        'Uncompromising commitment to site safety and concrete QA/QC standards'
      ]
    },
    {
      id: 'architectural-3d-visualizer',
      title: 'Architectural Designer & 3D Visualizer',
      department: 'Architecture & Design',
      location: 'Awka, Anambra State',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Develop conceptual floor plans, working construction drawings, and photorealistic 3D architectural visual walk-throughs for contemporary and classical residential and commercial projects.',
      requirements: [
        'B.Sc or M.Sc in Architecture from an accredited university',
        'Advanced proficiency in AutoCAD, Revit, SketchUp, Lumion / V-Ray / Enscape',
        'Deep understanding of Nigerian bioclimatic design, ventilation, and local town planning codes',
        'Portfolio demonstrating completed residential and commercial design sets',
        'Strong spatial thinking and material specification acumen'
      ]
    },
    {
      id: 'project-quantity-surveyor',
      title: 'Project Quantity Surveyor & Cost Estimator',
      department: 'Project Management & Cost Control',
      location: 'Awka, Anambra State',
      type: 'Full-Time',
      experience: '4+ Years',
      description: 'Prepare detailed Bills of Quantities (BOQ), material take-offs, tender documentations, interim valuations, and project variation reconciliations based on current market dynamics in southeastern Nigeria.',
      requirements: [
        'B.Sc or HND in Quantity Surveying; NIQS registration is a plus',
        'Thorough knowledge of standard measurement methods (BESMM / CESMM)',
        'Demonstrated competence in market material price benchmarking in Anambra State',
        'Experience conducting contractor valuations and final cost audits',
        'High proficiency in Microsoft Excel and cost-estimation software'
      ]
    },
    {
      id: 'qa-qc-materials-inspector',
      title: 'Quality Assurance & Materials Inspector',
      department: 'Quality Control & Testing',
      location: 'Awka / Site Locations, Anambra State',
      type: 'Full-Time',
      experience: '3+ Years',
      description: 'Enforce quality management plans across construction sites. Conduct slump tests, sample compressive test cubes, verify steel tensile mill certificates, and audit sand and aggregate cleanlines.',
      requirements: [
        'Degree or Diploma in Civil Engineering, Materials Science, or related technical discipline',
        'Hands-on experience with on-site sampling and non-destructive testing (NDT)',
        'Detailed documentation habits and daily quality test log preparation',
        'Courage and authority to halt sub-standard works until engineering compliance is achieved'
      ]
    },
    {
      id: 'skilled-artisan-lead',
      title: 'Certified Master Artisans & Trade Specialists',
      department: 'Manpower & Construction Execution',
      location: 'Anambra State',
      type: 'Contract / Project-Based',
      experience: '3+ Years Verified Trade',
      description: 'We continuously register and deploy verified master carpenters (formwork), certified welders (MIG/TIG/arc), steel fixers, master masons (blockwork/plastering), and licensed electrical technicians.',
      requirements: [
        'Demonstrated master craft experience with references from reputable sites',
        'High standard of precision, plumb-line accuracy, and tool discipline',
        'Willingness to adhere strictly to personal protective equipment (PPE) rules on site'
      ]
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;

    setApplicationSent(true);
    setTimeout(() => {
      // Keep state displayed
    }, 1000);
  };

  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Careers &amp; Manpower Excellence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
              Build Your Engineering Career With Solugans.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
              Join a multidisciplinary team of Nigerian professionals and specialists dedicated to elevating architectural aesthetics, structural precision, and project delivery standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work at Solugans */}
      <section className="py-16 lg:py-24 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Culture of Precision
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Why Engineers &amp; Builders Thrive With Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              We provide the framework, the mentorship, and the demanding standards that turn talented engineers into recognized leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-900/40 border border-neutral-800 p-7 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-orange-500 mb-2">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Landmark Scale Projects
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Work on signature luxury private residences, multi-story commercial plazas, and heavy civil infrastructure across Anambra State and Nigeria.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800 p-7 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-orange-500 mb-2">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Empirical Engineering Mentorship
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Learn rigorous QA/QC protocols, non-destructive testing (NDT), finite element structural calculation, and accurate quantity surveying.
              </p>
            </div>

            <div className="bg-neutral-900/40 border border-neutral-800 p-7 rounded-lg space-y-3">
              <div className="w-10 h-10 rounded bg-neutral-800 flex items-center justify-center text-orange-500 mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white font-display">
                Zero-Compromise Safety Culture
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Our active job sites operate with strict PPE mandates, structural scaffolding certifications, and daily safety toolbox briefings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions List */}
      <section className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12 space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-orange-500">
              Current Vacancies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Open Positions in Awka &amp; Site Offices
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Explore available engineering, architectural, quantity surveying, and site inspection roles.
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((pos) => (
              <div
                key={pos.id}
                className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 p-6 sm:p-8 rounded-xl transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-neutral-900">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                      {pos.department}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {pos.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs font-mono text-neutral-300">
                    <span className="flex items-center gap-1.5 text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{pos.location}</span>
                    </span>
                    <span className="text-neutral-700">·</span>
                    <span className="flex items-center gap-1.5 text-neutral-200">
                      <Clock className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{pos.type}</span>
                    </span>
                    <span className="text-neutral-700">·</span>
                    <span className="text-orange-400 font-semibold">
                      {pos.experience} Experience
                    </span>
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {pos.description}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Key Competencies &amp; Requirements:
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                      {pos.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setSelectedJob(pos)}
                      className="px-6 py-2.5 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Apply For This Position
                    </button>
                    <a
                      href={`mailto:${COMPANY_INFO.contacts.email}?subject=${encodeURIComponent(`Application for ${pos.title}`)}`}
                      className="text-xs text-neutral-400 hover:text-white transition-colors"
                    >
                      Or email CV to info@solugans.com →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-neutral-950 border border-neutral-800 rounded-xl max-w-lg w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between border-b border-neutral-900 pb-4">
              <div>
                <span className="text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                  Job Application
                </span>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                onClick={() => {
                  setSelectedJob(null);
                  setApplicationSent(false);
                }}
                className="text-neutral-400 hover:text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {applicationSent ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-white">Application Recorded</h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Thank you, <span className="font-semibold text-white">{applicantName}</span>. Your application for <span className="text-orange-400">{selectedJob.title}</span> has been noted. Please email your full CV, certifications, and portfolio drawings to <strong className="text-white">info@solugans.com</strong> referencing this role.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSelectedJob(null);
                      setApplicationSent(false);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-lg bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-700 min-h-[44px]"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="applicant-name" className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Full Name *
                  </label>
                  <input
                    id="applicant-name"
                    name="applicantName"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Engr. / Arc. Full Name"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-3 text-base sm:text-sm text-white focus:border-orange-500 outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="applicant-email" className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Email Address *
                  </label>
                  <input
                    id="applicant-email"
                    name="applicantEmail"
                    type="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-3 text-base sm:text-sm text-white focus:border-orange-500 outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="applicant-phone" className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Phone Number *
                  </label>
                  <input
                    id="applicant-phone"
                    name="applicantPhone"
                    type="tel"
                    required
                    aria-required="true"
                    autoComplete="tel"
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+234 800 000 0000"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3.5 py-3 text-base sm:text-sm text-white focus:border-orange-500 outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="applicant-notes" className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                    Summary of Qualifications / Experience
                  </label>
                  <textarea
                    id="applicant-notes"
                    name="applicantNotes"
                    rows={3}
                    value={applicantNotes}
                    onChange={(e) => setApplicantNotes(e.target.value)}
                    placeholder="Briefly state your highest degree, years on site, major projects handled..."
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-3 text-base sm:text-sm text-white focus:border-orange-500 outline-none resize-none min-h-[85px]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] cursor-pointer"
                  >
                    Submit Preliminary Application
                  </button>
                </div>
                <p className="text-[11px] text-neutral-500 text-center">
                  You can also drop off hard-copy credentials at our Awka head office: No. 5 Secretariat Road, Aroma Junction.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Walk-in & Physical Inquiries */}
      <section className="py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Physical Submissions &amp; Contractor Registration
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Subcontractors, equipment owners, and skilled artisans seeking registration for ongoing projects in Anambra State can visit our administrative desk at:
          </p>
          <div className="p-4 bg-neutral-900/60 border border-neutral-800 rounded-lg text-xs text-neutral-300 max-w-lg mx-auto">
            {COMPANY_INFO.address.fullFormatted}
          </div>
        </div>
      </section>
    </div>
  );
};
