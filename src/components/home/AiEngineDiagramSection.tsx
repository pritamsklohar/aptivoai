import React, { useState } from 'react';
import { PageId } from '../../types';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

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
    <section className="py-24 border-y border-white/[0.06] bg-[#080A12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            The intelligence behind your career.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            How Aptivo AI transforms your initial baseline into deterministic career advancement.
          </p>
        </div>

        {/* 3-Column Pipeline Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Candidate Inputs */}
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
            <div>
              <div className="text-xs font-medium text-slate-400 mb-1">Step 1</div>
              <h3 className="text-lg font-bold font-display text-white">
                Candidate Profile Signals
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Multi-dimensional baseline analysis
              </p>
            </div>

            <div className="space-y-3">
              {INPUT_SIGNALS.map((inp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-[#111524]"
                >
                  <div className="text-xs font-semibold text-white">{inp.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{inp.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Aptivo AI Core */}
          <div className="p-7 rounded-2xl border border-[#4C6FFF]/40 bg-gradient-to-b from-[#12182D] to-[#0A0D18] space-y-6 shadow-lg">
            <div>
              <div className="text-xs font-medium text-[#8AA0FF] mb-1">Step 2</div>
              <h3 className="text-lg font-bold font-display text-white">
                Aptivo Career Engine
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Neural graph evaluation & reasoning
              </p>
            </div>

            <div className="space-y-3">
              {REASONING_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.08] bg-[#151C33] flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: High-Confidence Outputs */}
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
            <div>
              <div className="text-xs font-medium text-slate-400 mb-1">Step 3</div>
              <h3 className="text-lg font-bold font-display text-white">
                Deterministic Deliverables
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Actionable milestones & verification
              </p>
            </div>

            <div className="space-y-3">
              {OUTPUT_ACTIONS.map((out, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-[#111524]"
                >
                  <div className="text-xs font-semibold text-white">{out.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{out.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom clean CTA link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('ai-engine')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#8AA0FF] hover:text-white transition-colors"
          >
            <span>Learn more about the AI Engine architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
