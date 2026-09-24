import React from 'react';
import { PageId } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4C6FFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          {/* Clean kicker text without pill box */}
          <div className="text-xs font-medium text-[#8AA0FF] tracking-widest uppercase">
            AI-POWERED CAREER INTELLIGENCE
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
            Your Career,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#8AA0FF]">
              Engineered by AI.
            </span>
          </h1>

          {/* Clean Description with generous breathing room */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Aptivo AI connects your goals, skills, projects, resume, interviews, and opportunities into one coherent, adaptive career system.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('platform')}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#4C6FFF]/20 transition-all hover:scale-[1.01]"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('how-it-works')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111420] hover:bg-[#161B2E] border border-white/[0.08] hover:border-white/[0.16] text-slate-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>


      </div>

      {/* Hero Scroll Indicator at absolute bottom center */}
      <ScrollIndicator label="Scroll to explore" />
    </section>
  );
};
