import React from 'react';

interface ScrollIndicatorProps {
  label?: string;
  targetId?: string;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  label = 'Scroll',
  targetId,
  className = '',
}) => {
  const handleScroll = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Fallback: smooth scroll down by roughly one hero distance
    window.scrollBy({
      top: Math.min(window.innerHeight * 0.75, 700),
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto ${className}`}
    >
      <button
        onClick={handleScroll}
        type="button"
        aria-label={label}
        className="group flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8AA0FF]/50 rounded-full py-1 px-3 cursor-pointer transition-all duration-300"
      >
        {/* Subtle, sleek label */}
        {label && (
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 group-hover:text-[#8AA0FF] transition-colors duration-200">
            {label}
          </span>
        )}

        {/* Vertical Glowing Blue Line with Animated Pulsing Dot */}
        <div className="relative w-[18px] h-11 sm:h-14 flex items-center justify-center">
          {/* Ambient glow around the line */}
          <div className="absolute inset-0 bg-[#4C6FFF]/20 blur-sm rounded-full pointer-events-none" />

          {/* Vertical Glowing Line */}
          <div className="relative w-[2px] h-full rounded-full bg-gradient-to-b from-[#4C6FFF]/10 via-[#4C6FFF] to-[#4C6FFF]/20 animate-line-glow" />

          {/* Animated Pulsing Dot traveling along the line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border border-[#8AA0FF] shadow-[0_0_8px_#4C6FFF,0_0_16px_#4C6FFF,0_0_24px_#8AA0FF] animate-scroll-pulsing-dot pointer-events-none" />
        </div>
      </button>
    </div>
  );
};
