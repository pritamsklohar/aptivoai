import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Zap } from 'lucide-react';

interface HomeCtaSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <section className="py-24 relative bg-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
            className="rounded-[32px] p-10 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--color-accent-orange) 0%, #FFFFFF 50%, var(--color-accent-blue) 100%)' }}
        >
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-accent-orange" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold font-display text-ink tracking-tight max-w-2xl">
              Build your career with <span className="text-accent-blue">intelligence</span>.
            </h2>

            <p className="text-base sm:text-lg text-ink/80 max-w-lg mx-auto font-medium leading-relaxed mt-6">
              Your goals are unique. Your preparation should be too. Join thousands of candidates upgrading their career infrastructure today.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg transition-all hover:-translate-y-0.5"
              >
                <span>Join Aptivo AI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
