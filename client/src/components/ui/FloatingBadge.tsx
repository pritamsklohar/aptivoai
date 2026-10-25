import React from 'react';

export interface FloatingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  label: string;
  sublabel?: string;
  avatarStack?: string[];
  animationClass?: string;
}

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({
  icon,
  label,
  sublabel,
  avatarStack,
  animationClass = '',
  className = '',
  ...props
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-border/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] text-xs font-semibold text-ink select-none hover-lift cursor-default ${animationClass} ${className}`}
      {...props}
    >
      {avatarStack && avatarStack.length > 0 ? (
        <div className="flex -space-x-2 overflow-hidden">
          {avatarStack.map((imgSrc, i) => (
            <img
              key={i}
              src={imgSrc}
              alt="Avatar"
              className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
            />
          ))}
        </div>
      ) : icon ? (
        <span className="shrink-0 flex items-center justify-center">{icon}</span>
      ) : null}

      <div className="flex flex-col text-left">
        <span className="text-ink font-semibold tracking-tight leading-tight">{label}</span>
        {sublabel && (
          <span className="text-[10px] text-muted font-normal leading-tight">{sublabel}</span>
        )}
      </div>
    </div>
  );
};
