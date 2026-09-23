import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}

export const CornerBracket: React.FC<CardContainerProps> = ({ children, className = '', tag }) => {
  return (
    <div className={`relative rounded-xl border border-white/[0.08] bg-[#0E111A] p-6 sm:p-8 transition-all duration-200 ${className}`}>
      {tag && (
        <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase select-none mb-3">
          {tag}
        </div>
      )}
      {children}
    </div>
  );
};
