import React, { useState } from 'react';
import { ADAPTIVE_LOOP_STEPS } from '../../data/contentData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AdaptiveCareerLoopSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 relative bg-bg overflow-hidden border-y border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-blue tracking-wider uppercase bg-accent-blue/10 px-3 py-1.5 rounded-full inline-block">
            Continuous Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            Your roadmap <span className="text-accent-blue">evolves</span> as you do.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Curricula shouldn't be static. Aptivo AI adapts your trajectory every time you commit code or complete an evaluation.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {ADAPTIVE_LOOP_STEPS.map((s, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-[20px] border text-left transition-all ${
                    isCurrent
                      ? 'border-accent-blue bg-accent-blue-soft text-ink shadow-sm'
                      : 'border-border bg-surface text-muted hover:text-ink hover:bg-surface-2'
                  }`}
                >
                  <div className={`text-[10px] font-mono mb-1.5 font-bold ${isCurrent ? 'text-accent-blue' : 'text-muted'}`}>
                    {s.step}
                  </div>
                  <div className="text-xs font-semibold">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-4 mt-8">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <div>
                <span className="text-xs font-mono font-bold text-accent-blue uppercase tracking-wider">Step {ADAPTIVE_LOOP_STEPS[activeStep].step}</span>
                <h3 className="text-2xl font-bold font-display text-ink mt-1">
                  {ADAPTIVE_LOOP_STEPS[activeStep].title}
                </h3>
              </div>
              <span className="text-xs text-muted font-medium bg-surface-2 px-3 py-1.5 rounded-full hidden sm:inline-block">
                Closed-Loop Recalibration
              </span>
            </div>

            <p className="text-base text-ink/80 leading-relaxed max-w-3xl pt-2">
              {ADAPTIVE_LOOP_STEPS[activeStep].desc}
            </p>

            <div className="pt-6 flex items-center gap-6 text-sm text-muted">
              <span className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-accent-orange" />
                <span>Automated Feedback</span>
              </span>
              <span className="flex items-center gap-2 text-ink font-medium">
                <CheckCircle2 className="w-4 h-4 text-accent-orange" />
                <span>Adaptive Milestones</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
