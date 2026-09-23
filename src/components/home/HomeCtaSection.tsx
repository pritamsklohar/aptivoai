import React from 'react';
import { PageId } from '../../types';
import { ArrowRight } from 'lucide-react';

interface HomeCtaSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <section className="py-24 relative bg-[#06070B] overflow-hidden border-t border-white/[0.06]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4C6FFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Early Access Program
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Build your career with intelligence.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          Your goals are unique. Your preparation should be too.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#4C6FFF]/20 transition-all hover:scale-[1.01]"
          >
            <span>Join Aptivo AI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('platform')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111420] hover:bg-[#161B2E] border border-white/[0.08] text-slate-200 text-sm font-medium transition-colors"
          >
            Explore Platform
          </button>
        </div>
      </div>
    </section>
  );
};
