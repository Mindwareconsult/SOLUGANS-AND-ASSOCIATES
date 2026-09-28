import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'color' | 'light';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'color',
  showTagline = false,
}) => {
  const sizeClasses = {
    sm: 'h-9 w-9',
    md: 'h-9 w-9 sm:h-12 sm:w-12',
    lg: 'h-12 w-12 sm:h-14 sm:w-14',
    xl: 'h-16 w-16 sm:h-20 sm:w-20',
  };

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* Authentic vector rendition of the Solugans & Associates cog & SU crest mark */}
      <svg
        viewBox="0 0 100 100"
        className={`shrink-0 transition-transform duration-300 hover:rotate-12 ${sizeClasses[size]}`}
        aria-label="Solugans & Associates Engineering Ltd Emblem"
      >
        <defs>
          <path
            id="textPathTop"
            d="M 22 50 A 28 28 0 0 1 78 50"
            fill="none"
          />
          <path
            id="textPathBottom"
            d="M 78 50 A 28 28 0 0 1 22 50"
            fill="none"
          />
        </defs>

        {/* Outer 12-Tooth Industrial Gear (Royal Blue) */}
        <g fill="#1D4ED8" stroke="#1E40AF" strokeWidth="1">
          {/* Gear teeth */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
            <rect
              key={deg}
              x="44"
              y="2"
              width="12"
              height="10"
              rx="1.5"
              transform={`rotate(${deg} 50 50)`}
            />
          ))}
          {/* Main Gear Ring */}
          <circle cx="50" cy="50" r="42" />
        </g>

        {/* Circular text track in blue rim */}
        <text fontSize="4.2" fill="#FFFFFF" fontWeight="700" letterSpacing="0.4">
          <textPath href="#textPathTop" startOffset="50%" textAnchor="middle">
            SOLUGANS &amp; ASSOCIATES
          </textPath>
        </text>
        <text fontSize="3.8" fill="#FFFFFF" fontWeight="700" letterSpacing="0.4">
          <textPath href="#textPathBottom" startOffset="50%" textAnchor="middle">
            ENGINEERING SERVICES LTD
          </textPath>
        </text>

        {/* Inner Gear Groove */}
        <circle cx="50" cy="50" r="32" fill="#E65100" stroke="#B45309" strokeWidth="1.2" />

        {/* Orange Equilateral Triangle */}
        <polygon
          points="50,22 76,68 24,68"
          fill="#FB923C"
          stroke="#C2410C"
          strokeWidth="1.5"
        />

        {/* Inner Light Golden Triangle */}
        <polygon
          points="50,26 72,66 28,66"
          fill="#FEF08A"
        />

        {/* Center White Oval with Red SU Monogram */}
        <ellipse cx="50" cy="48" rx="13" ry="11" fill="#FFFFFF" stroke="#DC2626" strokeWidth="1.2" />
        <text
          x="50"
          y="52"
          fontSize="10"
          fontWeight="900"
          fill="#DC2626"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          letterSpacing="-0.5"
        >
          SU
        </text>

        {/* Base Banner across bottom of triangle */}
        <rect x="36" y="64" width="28" height="6.5" rx="1.5" fill="#EA580C" stroke="#7C2D12" strokeWidth="0.8" />
        <text
          x="50"
          y="69"
          fontSize="4"
          fontWeight="800"
          fill="#FFFFFF"
          textAnchor="middle"
          letterSpacing="0.4"
        >
          SU ECTED
        </text>
      </svg>

      {/* Brand Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight font-display ${
            size === 'sm'
              ? 'text-xs sm:text-sm'
              : size === 'md'
              ? 'text-sm sm:text-base md:text-lg'
              : size === 'lg'
              ? 'text-base sm:text-lg md:text-xl'
              : 'text-xl sm:text-2xl'
          } ${
            variant === 'color' ? 'text-[#f25c05]' : 'text-white'
          }`}
        >
          SOLUGANS &amp; ASSOCIATES
        </span>
        <span
          className={`font-bold tracking-wider ${
            size === 'sm'
              ? 'text-[9px] sm:text-[10px]'
              : size === 'md'
              ? 'text-[10px] sm:text-xs md:text-sm'
              : size === 'lg'
              ? 'text-xs sm:text-sm md:text-base'
              : 'text-sm sm:text-base'
          } ${
            variant === 'color'
              ? 'text-neutral-900 dark:text-neutral-200'
              : 'text-neutral-300'
          }`}
        >
          ENGINEERING LTD
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1 font-medium">
            We Plan · We Design · We Build
          </span>
        )}
      </div>
    </div>
  );
};
