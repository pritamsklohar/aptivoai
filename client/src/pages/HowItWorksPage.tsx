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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-orange tracking-wider uppercase">
          Execution Methodology
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Eight steps. <span className="text-accent-orange">Zero</span> guesswork.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          The step-by-step engineering pipeline turning raw ambition into verified production readiness and high-confidence job offers.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
          >
            Start at Step 1
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Step Timeline" targetId="timeline-steps" />
      </section>

      {/* Clean Timeline */}
      <section id="timeline-steps" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pl-8 sm:pl-12 space-y-12">
          {/* Subtle Vertical Connector */}
          <div className="absolute left-[13px] sm:left-[21px] top-6 bottom-6 w-[2px] bg-border" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Timeline Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-5 w-8 h-8 rounded-full bg-white border-2 border-accent-blue flex items-center justify-center text-xs font-bold text-accent-blue shadow-sm">
                {idx + 1}
              </div>

              {/* Step Content Card */}
              <div className="p-6 sm:p-8 rounded-[24px] border border-border bg-surface space-y-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-4">
                  <div>
                    <span className="text-xs font-bold text-muted uppercase tracking-wider">
                      {step.eyebrow}
                    </span>
                    <h2 className="text-2xl font-bold font-display text-ink mt-1">
                      {step.title}
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-accent-blue bg-accent-blue-soft px-3 py-1.5 rounded-full border border-accent-blue/20">
                    Step {idx + 1} of 8
                  </span>
                </div>

                <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {step.detailPoints.map((point, pidx) => (
                    <div
                      key={pidx}
                      className="p-3.5 rounded-[20px] bg-surface-2 border border-border text-sm text-ink font-medium flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
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
