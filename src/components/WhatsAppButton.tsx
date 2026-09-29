import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.contacts.whatsappPrefilledMessage
  )}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center">
      {/* Tooltip */}
      {isHovered && (
        <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-700 text-xs font-medium text-white shadow-xl animate-in fade-in slide-in-from-right-2 duration-150 whitespace-nowrap">
          Chat with us on WhatsApp
        </div>
      )}

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white flex items-center justify-center shadow-2xl shadow-green-950/60 hover:shadow-green-500/30 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-green-400/40"
        aria-label="Chat with Solugans & Associates on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366]" />
      </a>
    </div>
  );
};
