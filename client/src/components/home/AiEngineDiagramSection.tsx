import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface AiEngineDiagramSectionProps {
  onNavigate: (page: PageId) => void;
}

const INPUT_SIGNALS = [
  { name: 'Target Role', note: 'Calibrated company criteria' },
  { name: 'Current Skills', note: 'Verified via repositories' },
  { name: 'Available Hours', note: 'Weekly bandwidth constraint' },
  { name: 'Past Experience', note: 'Extracted competencies' },
];

const REASONING_STEPS = [
  'Extracts 4,800+ skill dependencies',
  'Identifies highest-priority architectural gaps',
  'Synthesizes personalized production projects',
  'Calibrates mock interview rubrics to role level',
];

const OUTPUT_ACTIONS = [
  { name: 'Personalized Roadmap', note: 'Sprint-by-sprint milestones' },
  { name: 'Production Project Specs', note: 'Real PR reviews & guidance' },
  { name: 'Quantified Resume', note: 'ATS-resilient impact vectors' },
  { name: 'Direct Opportunity Matches', note: 'Routing to hiring leads' },
];

export const AiEngineDiagramSection: React.FC<AiEngineDiagramSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 border-y border-border bg-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-blue tracking-wider uppercase bg-accent-blue/10 px-3 py-1.5 rounded-full inline-block">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            The <span className="text-accent-blue">intelligence</span> behind your career.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            How Aptivo AI transforms your initial baseline into deterministic career advancement.
          </p>
        </div>

        {/* 3-Column Pipeline Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Candidate Inputs */}
          <div className="p-7 rounded-[24px] border border-border bg-surface space-y-6">
            <div>
              <div className="text-xs font-semibold text-muted mb-1 uppercase tracking-wider">Step 1</div>
              <h3 className="text-lg font-bold font-display text-ink">
                Candidate Profile Signals
              </h3>
              <p className="text-xs text-muted mt-1 font-medium">
                Multi-dimensional baseline analysis
              </p>
            </div>

            <div className="space-y-3">
              {INPUT_SIGNALS.map((inp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[20px] border border-border bg-white shadow-sm"
                >
                  <div className="text-xs font-semibold text-ink">{inp.name}</div>
                  <div className="text-[11px] text-muted mt-0.5 font-medium">{inp.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Aptivo AI Core */}
          <div className="p-7 rounded-[24px] border-2 border-accent-blue/40 bg-accent-blue-soft/50 space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white/40 pointer-events-none" />
            <div className="relative z-10">
                <div>
                <div className="text-xs font-semibold text-accent-blue mb-1 uppercase tracking-wider">Step 2</div>
                <h3 className="text-lg font-bold font-display text-ink">
                    Aptivo Career Engine
                </h3>
                <p className="text-xs text-ink/70 mt-1 font-medium">
                    Neural graph evaluation & reasoning
                </p>
                </div>

                <div className="space-y-3 mt-6">
                {REASONING_STEPS.map((step, idx) => (
                    <div
                    key={idx}
                    className="p-4 rounded-[20px] border border-border bg-white flex items-start gap-2.5 text-xs text-ink font-medium shadow-sm"
                    >
                    <CheckCircle2 className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{step}</span>
                    </div>
                ))}
                </div>
            </div>
          </div>

          {/* Column 3: High-Confidence Outputs */}
          <div className="p-7 rounded-[24px] border border-border bg-surface space-y-6">
            <div>
              <div className="text-xs font-semibold text-muted mb-1 uppercase tracking-wider">Step 3</div>
              <h3 className="text-lg font-bold font-display text-ink">
                Deterministic Deliverables
              </h3>
              <p className="text-xs text-muted mt-1 font-medium">
                Actionable milestones & verification
              </p>
            </div>

            <div className="space-y-3">
              {OUTPUT_ACTIONS.map((out, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[20px] border border-border bg-white shadow-sm"
                >
                  <div className="text-xs font-semibold text-ink">{out.name}</div>
                  <div className="text-[11px] text-muted mt-0.5 font-medium">{out.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom clean CTA link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('ai-engine')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent-blue hover:text-ink transition-colors"
          >
            <span>Learn more about the AI Engine architecture</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
