import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export interface CtaBandProps {
  headline: string;
  subline: string;
  buttonText: string;
  buttonVariant?: 'primary' | 'secondary' | 'dark';
  onAction: () => void;
  className?: string;
}

export const CtaBand: React.FC<CtaBandProps> = ({
  headline,
  subline,
  buttonText,
  buttonVariant = 'dark',
  onAction,
  className = '',
}) => {
  return (
    <div
      className={`rounded-[32px] p-8 sm:p-14 text-center relative overflow-hidden bg-gradient-to-r from-accent-orange/15 via-white to-accent-blue/15 border border-border shadow-sm ${className}`}
    >
      <div className="relative z-10 max-w-2xl mx-auto space-y-5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-ink tracking-tight">
          {headline}
        </h2>
        <p className="text-sm sm:text-base text-muted max-w-xl mx-auto font-normal leading-relaxed">
          {subline}
        </p>
        <div className="pt-2">
          <Button variant={buttonVariant} size="lg" onClick={onAction}>
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
