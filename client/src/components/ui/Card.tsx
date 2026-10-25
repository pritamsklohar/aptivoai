import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  miniUi?: React.ReactNode;
  elevated?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  miniUi,
  elevated = false,
  className = '',
  ...props
}) => {
  return (
    <div
      className={`rounded-[28px] border p-8 sm:p-10 transition-[transform,box-shadow,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-between group ${
        elevated
          ? 'bg-white/95 border-accent-blue/35 shadow-ambient-lg ring-1 ring-accent-blue/15 hover:shadow-xl hover:-translate-y-1'
          : 'bg-white/90 border-border/80 shadow-ambient hover:shadow-ambient-lg hover:border-border hover:-translate-y-1'
      } ${className}`}
      {...props}
    >
      <div className="space-y-6">
        {miniUi && (
          <div className="w-full rounded-2xl bg-surface/60 border border-border/60 p-4 shadow-xs overflow-hidden">
            {miniUi}
          </div>
        )}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};
