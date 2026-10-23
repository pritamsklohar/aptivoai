import React from 'react';

interface AptivoLogoProps {
  variant?: 'icon' | 'lockup' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const AptivoLogo: React.FC<AptivoLogoProps> = ({
  variant = 'lockup',
  size = 'md',
  showTagline = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8 sm:w-9 sm:h-9',
    lg: 'w-10 h-10 sm:w-11 sm:h-11',
    xl: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl',
  };

  // The crisp transparent 3D ribbon mark
  const IconElement = (
    <img
      src="/aptivo-icon.png"
      alt="Aptivo AI Icon"
      className={`${iconSizes[size]} object-contain shrink-0 drop-shadow-xs select-none`}
    />
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {IconElement}
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2.5">
        {IconElement}
        <span className={`font-display font-bold ${textSizes[size]} text-ink tracking-tight select-none leading-none`}>
          Aptivo <span className="text-accent-blue font-extrabold">AI</span>
        </span>
      </div>
      {showTagline && (
        <span className="text-[10px] tracking-wider text-muted font-medium mt-1 uppercase pl-1">
          Your Career, Engineered by AI.
        </span>
      )}
    </div>
  );
};
