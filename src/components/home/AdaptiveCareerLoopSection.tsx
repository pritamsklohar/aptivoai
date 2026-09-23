import React, { useState } from 'react';
import { ADAPTIVE_LOOP_STEPS } from '../../data/contentData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AdaptiveCareerLoopSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 relative bg-[#06070B] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Continuous Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Your roadmap evolves as you do.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Curricula shouldn't be static. Aptivo AI adapts your trajectory every time you commit code or complete an evaluation.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ADAPTIVE_LOOP_STEPS.map((s, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isCurrent
                      ? 'border-[#4C6FFF] bg-[#4C6FFF]/15 text-white shadow-sm'
                      : 'border-white/[0.06] bg-[#0C0F1A] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono mb-1 text-slate-500">
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
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0E111D] space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-xs font-mono text-[#8AA0FF]">Step {ADAPTIVE_LOOP_STEPS[activeStep].step}</span>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  {ADAPTIVE_LOOP_STEPS[activeStep].title}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                Closed-Loop Recalibration
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {ADAPTIVE_LOOP_STEPS[activeStep].desc}
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#8AA0FF]" />
                <span>Automated Feedback</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#8AA0FF]" />
                <span>Adaptive Milestones</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
