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
      className={`bg-surface rounded-[24px] border p-8 sm:p-10 shadow-sm transition-all duration-300 flex flex-col justify-between group ${
        elevated
          ? 'border-accent-blue/30 shadow-md ring-1 ring-accent-blue/10 hover:shadow-lg hover:-translate-y-1'
          : 'border-border hover:shadow-md hover:-translate-y-1'
      } ${className}`}
      {...props}
    >
      <div className="space-y-6">
        {miniUi && (
          <div className="w-full rounded-2xl bg-white border border-border/70 p-4 shadow-xs overflow-hidden">
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
