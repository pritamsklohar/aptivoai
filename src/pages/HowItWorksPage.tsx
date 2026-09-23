import React from 'react';
import { PageId } from '../types';
import { HOW_IT_WORKS_STEPS } from '../data/contentData';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { CheckCircle2 } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-24">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Execution Methodology
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Eight steps. Zero guesswork.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          The step-by-step engineering pipeline turning raw ambition into verified production readiness and high-confidence job offers.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Start at Step 1
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Step Timeline" targetId="timeline-steps" />
      </section>

      {/* Clean Timeline */}
      <section id="timeline-steps" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pl-8 sm:pl-10 space-y-10">
          {/* Subtle Vertical Connector */}
          <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-white/[0.1]" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Timeline Indicator */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-5 w-6 h-6 rounded-full bg-[#06070B] border-2 border-[#4C6FFF] flex items-center justify-center text-[11px] font-semibold text-white">
                {idx + 1}
              </div>

              {/* Step Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-xs font-medium text-[#8AA0FF]">
                      {step.eyebrow}
                    </span>
                    <h2 className="text-xl font-bold font-display text-white mt-0.5">
                      {step.title}
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">
                    Step {idx + 1} of 8
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {step.detailPoints.map((point, pidx) => (
                    <div
                      key={pidx}
                      className="p-2.5 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
