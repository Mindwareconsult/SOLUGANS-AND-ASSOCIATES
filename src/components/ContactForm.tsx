import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface FormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Residential Architecture & Construction',
    location: 'Awka, Anambra State',
    budgetRange: '₦20M - ₦50M',
    timeline: 'Within 3 Months',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const projectTypes = [
    'Residential Architecture & Construction',
    'Commercial Plaza & Retail Showroom',
    'Corporate Office Development',
    'Civil Engineering & Road Drainage',
    'Mechanical Fabrication & Structural Steel',
    'Electrical Installation & Power Distribution',
    'Quantity Surveying & Bill of Quantities (BOQ)',
    'Building Maintenance & Structural Audit',
    'Other Technical Works'
  ];

  const budgetRanges = [
    'Under ₦20 Million',
    '₦20M – ₦50 Million',
    '₦50M – ₦100 Million',
    '₦100M – ₦300 Million',
    'Above ₦300 Million',
    'To Be Determined / Need BOQ'
  ];

  const timelines = [
    'Immediate (Ready to break ground)',
    'Within 1 to 3 Months',
    'Within 3 to 6 Months',
    'Preliminary Planning & Costing'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid phone number with area code.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Please describe your project scope or questions.');
      return;
    }

    setIsSubmitting(true);

    // Simulate structured processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const createWhatsAppText = () => {
    return encodeURIComponent(
      `Hello Solugans & Associates,\n\nI just submitted a project enquiry:\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Project:* ${formData.projectType}\n` +
      `*Location:* ${formData.location}\n` +
      `*Timeline:* ${formData.timeline}\n` +
      `*Scope:* ${formData.message}`
    );
  };

  if (isSuccess) {
    return (
      <div className="bg-neutral-900 border border-emerald-500/40 rounded-xl p-8 sm:p-10 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white font-display">
            Enquiry Received
          </h3>
          <p className="text-neutral-300 max-w-lg mx-auto text-sm leading-relaxed">
            Thank you, <span className="font-semibold text-white">{formData.fullName}</span>. Your project enquiry has been logged with our engineering desk. Our team will review your requirements and reach out to schedule a preliminary consultation.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${createWhatsAppText()}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-950/40"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Forward Summary to WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                fullName: '',
                company: '',
                email: '',
                phone: '',
                projectType: 'Residential Architecture & Construction',
                location: 'Awka, Anambra State',
                budgetRange: '₦20M - ₦50M',
                timeline: 'Within 3 Months',
                message: ''
              });
            }}
            className="w-full sm:w-auto px-5 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 sm:p-8 space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
          Request a Quotation &amp; Project Evaluation
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400">
          Provide your project parameters below. All enquiries are reviewed by our certified engineering and quantity surveying teams.
        </p>
      </div>

      {errorMsg && (
        <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-md text-red-200 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
          <span>{errorMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Chief Emeka Nnamdi"
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Company / Organization */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Company / Organization (Optional)
          </label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="e.g. Apex Holdings Ltd"
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Phone Number <span className="text-orange-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+234 803 000 0000"
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Project Type */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Project Category
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Project Location */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Site Location
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Awka, Anambra State"
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Estimated Budget */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Estimated Budget Framework
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Project Timeline */}
        <div className="space-y-1.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
            Target Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md px-3.5 py-2.5 text-sm text-white outline-none transition-colors"
          >
            {timelines.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
          Project Brief / Scope Details <span className="text-orange-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe your site status, architectural objectives, land size, or specific engineering requirements..."
          className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 rounded-md p-3.5 text-sm text-white placeholder-neutral-600 outline-none transition-colors resize-y"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-orange-600 hover:bg-orange-500 disabled:opacity-50 rounded-md transition-all shadow-lg shadow-orange-950/50 flex items-center justify-center gap-2 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validating &amp; Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Project Enquiry</span>
            </>
          )}
        </button>

        <span className="text-xs text-neutral-500">
          Strict confidentiality · Direct review by principal engineers
        </span>
      </div>
    </form>
  );
};
