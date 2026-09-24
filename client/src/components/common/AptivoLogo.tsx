import React from 'react';

interface AptivoLogoProps {
  variant?: 'icon' | 'lockup' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  glow?: boolean;
}

export const AptivoLogo: React.FC<AptivoLogoProps> = ({
  variant = 'lockup',
  size = 'md',
  showTagline = false,
  className = '',
  glow = true,
}) => {
  // Dimensions mapping
  const sizeMap = {
    sm: { icon: 'w-6 h-6', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-8 h-8', text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // The Iconic Ribbon "A" + Arrow Symbol SVG
  const IconSymbol = (
    <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
      {glow && (
        <div className="absolute inset-0 bg-[#00C4FF]/25 blur-md rounded-full pointer-events-none transform scale-125" />
      )}
      <img
        src="/aptivo-icon.png"
        alt="Aptivo AI Icon"
        className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(0,196,255,0.35)] object-contain"
      />
    </div>
  );

  // If icon-only requested
  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{IconSymbol}</div>;
  }

  // Wordmark: "Aptivo" in crisp white + "AI" in cyan-to-purple gradient
  const Wordmark = (
    <div className="flex items-baseline tracking-tight font-display font-bold leading-none select-none">
      <span className={`text-white font-extrabold ${currentSize.text} tracking-tight`}>
        Aptivo
      </span>
      <span
        className={`ml-1 font-black ${currentSize.text} bg-gradient-to-r from-[#00CFFF] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent`}
      >
        AI
      </span>
    </div>
  );

  const shouldRenderTagline = showTagline || variant === 'full';

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2.5">
        {IconSymbol}
        {Wordmark}
      </div>

      {shouldRenderTagline && (
        <div className="mt-1 flex items-center gap-2 w-full pt-0.5">
          {/* Cyan gradient line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-[#3B82F6] opacity-75" />
          <span className={`${currentSize.sub} font-medium tracking-wider text-slate-300 uppercase whitespace-nowrap`}>
            Build Smarter. Grow Faster.
          </span>
          {/* Purple gradient line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-transparent opacity-75" />
        </div>
      )}
    </div>
  );
};
