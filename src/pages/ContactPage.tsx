import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { GoogleMapCard } from '../components/GoogleMapCard';
import { FAQSection } from '../components/FAQSection';
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Hero */}
      <section className="border-b border-neutral-900 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500">
              <span>Direct Engineering &amp; Architectural Consultation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-display">
              Let's Build Something Worthwhile.
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 font-normal leading-relaxed">
              Reach out to discuss your upcoming project, schedule an on-site feasibility evaluation in Anambra State, or request an itemized construction quotation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact/Map Details on Right */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 7 Columns: Interactive Quotation Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right 5 Columns: Map Card & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* Google Map Card */}
              <GoogleMapCard />

              {/* Direct Communication Channels */}
              <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-7 space-y-5">
                <div className="text-xs font-mono uppercase tracking-wider text-orange-400 font-bold">
                  Direct Line Channels
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white">Telephone Inquiries</div>
                      <div className="text-xs text-neutral-400 mt-0.5 space-y-0.5">
                        <div>
                          <a href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`} className="text-neutral-200 hover:text-white">
                            {COMPANY_INFO.contacts.primaryPhone}
                          </a>
                          <span className="mx-2">·</span>
                          <a href={`tel:${COMPANY_INFO.contacts.secondaryPhone.replace(/\s+/g, '')}`} className="text-neutral-200 hover:text-white">
                            {COMPANY_INFO.contacts.secondaryPhone}
                          </a>
                        </div>
                        {COMPANY_INFO.contacts.additionalPhone && (
                          <div>
                            <span className="text-neutral-500">Alt: </span>
                            <a href={`tel:${COMPANY_INFO.contacts.additionalPhone.replace(/\s+/g, '')}`} className="text-neutral-300 hover:text-white">
                              {COMPANY_INFO.contacts.additionalPhone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white">Instant WhatsApp Desk</div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        <a
                          href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
                            COMPANY_INFO.contacts.whatsappPrefilledMessage
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 font-semibold"
                        >
                          Chat directly with our principal engineering team →
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-white">Official Correspondence</div>
                      <div className="text-xs text-neutral-400 mt-0.5 space-y-0.5">
                        <div>
                          <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="text-neutral-200 hover:text-white">
                            {COMPANY_INFO.contacts.email}
                          </a>
                        </div>
                        {COMPANY_INFO.contacts.secondaryEmail && (
                          <div>
                            <a href={`mailto:${COMPANY_INFO.contacts.secondaryEmail}`} className="text-neutral-400 hover:text-white">
                              {COMPANY_INFO.contacts.secondaryEmail}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Corporate Affairs Commission: {COMPANY_INFO.rcNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <FAQSection />
    </div>
  );
};
