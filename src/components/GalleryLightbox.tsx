import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImageItem {
  src?: string;
  url?: string;
  category?: string;
  title?: string;
  caption?: string;
  alt?: string;
}

interface GalleryLightboxProps {
  images: LightboxImageItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  const touchStartXRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex];
  const imageSrc = currentItem?.src || currentItem?.url || '';
  const formattedIndex = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(images.length).padStart(2, '0');

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    // 50px swipe threshold
    if (diff > 50) {
      onNext();
    } else if (diff < -50) {
      onPrev();
    }
    touchStartXRef.current = null;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Solugans Project Photo Viewer"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200 select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between text-white z-20 pb-3 border-b border-neutral-900">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          {currentItem.category && (
            <span className="text-xs font-mono font-bold tracking-widest text-orange-400 uppercase">
              {currentItem.category}
            </span>
          )}
          <span className="hidden sm:inline text-neutral-700">·</span>
          <div className="text-xs font-mono tracking-widest text-neutral-400">
            <span className="text-white font-bold tabular-nums">{formattedIndex}</span>
            <span className="mx-1 text-neutral-600">/</span>
            <span className="tabular-nums">{formattedTotal}</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
          aria-label="Close Lightbox (Esc)"
          title="Close Lightbox (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-2 sm:my-4 overflow-hidden">
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-1 sm:left-4 z-20 p-3 sm:p-3.5 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 text-white transition-all hover:scale-105 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
            aria-label="Previous Image (Left Arrow)"
            title="Previous (Left Arrow)"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        {/* Active High-Resolution Image Container */}
        <div className="max-w-6xl max-h-[76vh] flex items-center justify-center p-1 sm:p-3">
          <img
            src={imageSrc}
            alt={currentItem.alt || currentItem.caption || 'Solugans engineering photograph'}
            className="max-w-full max-h-[76vh] object-contain rounded-lg shadow-2xl transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-1 sm:right-4 z-20 p-3 sm:p-3.5 rounded-full bg-neutral-950/80 hover:bg-neutral-900 border border-neutral-800 text-white transition-all hover:scale-105 focus:outline-none focus:ring-1 focus:ring-orange-500 cursor-pointer"
            aria-label="Next Image (Right Arrow)"
            title="Next (Right Arrow)"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Bottom Information Bar */}
      <div className="text-center max-w-3xl mx-auto py-2 z-20 space-y-1">
        <p className="text-xs sm:text-sm text-neutral-200 font-medium font-sans">
          {currentItem.caption || currentItem.title || currentItem.category}
        </p>
        <span className="text-[11px] text-neutral-500 font-mono block">
          Use ← / → arrow keys to navigate · Swipe on mobile · Esc to exit
        </span>
      </div>
    </div>
  );
};
