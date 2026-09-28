import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 hover:bg-neutral-800 active:scale-95 text-neutral-300 hover:text-white border border-neutral-700/80 backdrop-blur-md flex items-center justify-center shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-orange-500"
      aria-label="Scroll to top of page"
      title="Back to top"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
};
