import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'Do you work with clients in the diaspora building residential or commercial projects in Nigeria?',
    answer: 'Yes, a significant portion of our residential and commercial clientele resides in the United Kingdom, United States, Canada, and across the globe. We provide transparent digital milestone tracking, high-definition drone progress photos, weekly video walkthroughs, and material testing receipts. Every stage—from foundation casting to interior finishes—is verified and reported in real time with zero ambiguity.',
    category: 'Diaspora & Remote Management'
  },
  {
    question: 'How does Solugans ensure structural integrity and prevent building defects?',
    answer: 'We employ a strict Quality Assurance/Quality Control (QA/QC) protocol across every site. Prior to designing any foundation, we conduct geotechnical soil bearing capacity tests. During construction, every concrete batch undergoes slump testing, and standard concrete test cubes are crushed at 7, 14, and 28 days in accredited testing laboratories. We also inspect tensile mill certificates for all high-yield steel reinforcement bars and enforce continuous resident engineer supervision.',
    category: 'Engineering & Quality'
  },
  {
    question: 'What is your pricing structure and how do you prepare the project budget?',
    answer: 'We believe in total fiscal clarity. Our certified Quantity Surveyors prepare a detailed Bill of Quantities (BOQ) following standard measurement conventions (BESMM/CESMM). Each line item—earthworks, concrete grade, steel tonnage, formwork, MEP reticulation, and architectural finishes—is priced using current Anambra and southeastern Nigerian market benchmarks, protecting you against unexpected cost overruns.',
    category: 'Costs & BOQ'
  },
  {
    question: 'Do you assist with statutory building approvals and town planning documentation?',
    answer: 'Yes. Our architectural and civil engineering teams produce complete, code-compliant statutory drawing sets (architectural, structural calculations, mechanical, and electrical). We liaise directly with Anambra State town planning authorities and ministry agencies to ensure seamless building permit vetting and approval, safeguarding your property against stop-work notices or legal disputes.',
    category: 'Approvals & Legal'
  },
  {
    question: 'Can Solugans & Associates take over and complete a stalled or uncompleted building?',
    answer: 'Yes. Before taking over any existing structure, our structural engineering team carries out a non-destructive structural integrity audit. We use Schmidt rebound hammers, cover meters, and core sampling to test the existing columns, beams, and foundation integrity. Once verified or remediated with structural strengthening, we provide a clear roadmap and BOQ to bring the project to turnkey completion.',
    category: 'Remodeling & Turnkey Delivery'
  },
  {
    question: 'What geographical areas do you cover?',
    answer: 'Our corporate headquarters and primary operations are in Awka, Anambra State (Aroma Junction), and we actively execute projects across all of Anambra State (Awka, Onitsha, Nnewi, Ihiala, Ekwulobia) as well as neighboring southeastern states including Enugu, Imo, Delta, and Abia.',
    category: 'Locations'
  }
];

interface FAQSectionProps {
  onNavigate?: (route: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 border-b border-neutral-900 bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
            <HelpCircle className="w-4 h-4 text-orange-400" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Key Questions About Building With Solugans
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Clear, transparent answers about our engineering methodology, diaspora project management, quality controls, and pricing transparency.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden transition-colors hover:border-neutral-700"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    {item.category && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-orange-400 font-semibold block">
                        {item.category}
                      </span>
                    )}
                    <span className="text-base sm:text-lg font-bold text-white font-display">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 text-neutral-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-400 bg-neutral-800/90' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {onNavigate && (
          <div className="mt-12 text-center p-6 bg-neutral-900/40 border border-neutral-800 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-white font-display">
              Have a question not answered here?
            </h3>
            <p className="text-xs text-neutral-400">
              Our engineering advisory desk is available to review your drawings and provide technical clarity.
            </p>
            <div className="pt-1">
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-2.5 rounded bg-orange-600 hover:bg-orange-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Contact Our Project Directors
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
