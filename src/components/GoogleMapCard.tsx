import React from 'react';
import { MapPin, Navigation, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const GoogleMapCard: React.FC = () => {
  return (
    <div className="bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden flex flex-col justify-between">
      {/* Visual Map Representation */}
      <div className="relative aspect-[16/9] w-full bg-neutral-950 border-b border-neutral-800 flex items-center justify-center overflow-hidden">
        {/* Architectural map styling pattern */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Map roads representation */}
        <svg className="absolute inset-0 w-full h-full opacity-30 stroke-neutral-700" fill="none">
          <path d="M-50,80 Q150,120 400,60 T800,100" strokeWidth="6" />
          <path d="M120,-20 L180,300" strokeWidth="4" />
          <path d="M300,-20 L280,300" strokeWidth="4" />
          <circle cx="280" cy="90" r="14" fill="#f25c05" fillOpacity="0.2" stroke="#f25c05" strokeWidth="2" />
        </svg>

        {/* Pin Center Marker */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-orange-600/90 border-2 border-white shadow-2xl flex items-center justify-center text-white motion-safe:animate-pulse">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="mt-2 bg-neutral-900/90 border border-neutral-700 px-3 py-1 rounded text-xs font-bold text-white shadow-lg backdrop-blur-md">
            SOLUGANS AND ASSOCIATES
          </div>
          <div className="text-[10px] text-orange-400 font-mono mt-0.5">
            Aroma Junction, Awka
          </div>
        </div>

        {/* Direct Link button over map */}
        <div className="absolute bottom-3 right-3 z-10">
          <a
            href={COMPANY_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 text-xs font-medium text-white backdrop-blur-md transition-colors shadow-lg"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3 h-3 text-orange-400" />
          </a>
        </div>
      </div>

      {/* Office Details */}
      <div className="p-6 sm:p-7 space-y-5">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-orange-400 font-semibold block mb-1">
            Head Office Location
          </span>
          <h4 className="text-lg font-bold text-white font-display">
            Awka Corporate Secretariat
          </h4>
          <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
            {COMPANY_INFO.address.fullFormatted}
          </p>
        </div>

        <div className="space-y-2.5 pt-3 border-t border-neutral-800 text-xs text-neutral-300">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Mon – Fri: 8:00 AM – 5:30 PM | Sat: 9:00 AM – 2:00 PM</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-orange-400 shrink-0" />
            <a href={`tel:${COMPANY_INFO.contacts.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.contacts.primaryPhone} · {COMPANY_INFO.contacts.secondaryPhone}
            </a>
          </div>
          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-orange-400 shrink-0" />
            <a href={`mailto:${COMPANY_INFO.contacts.email}`} className="hover:text-white transition-colors">
              {COMPANY_INFO.contacts.email}
            </a>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={COMPANY_INFO.address.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-md bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
          >
            <Navigation className="w-4 h-4 text-orange-400 shrink-0" />
            <span className="hidden sm:inline">Get Driving Directions to Aroma Junction</span>
            <span className="sm:hidden">Get Driving Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};
