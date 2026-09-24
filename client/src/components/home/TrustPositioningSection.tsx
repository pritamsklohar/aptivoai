import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Check, X } from 'lucide-react';

interface TrustPositioningSectionProps {
  onNavigate: (page: PageId) => void;
}

const FRAGMENTED_POINTS = [
  { title: 'Isolated Learning', desc: 'Tutorials and lectures that do not measure hands-on code quality.' },
  { title: 'Static Resume PDFs', desc: 'Keyword lists disconnected from verified engineering contributions.' },
  { title: 'Rote Interview Prep', desc: 'Memorizing algorithm puzzles that ignore system architecture.' },
  { title: 'Application Black Holes', desc: 'Mass submissions to job boards with 2% response rates.' },
];

const UNIFIED_POINTS = [
  { title: 'Continuous Career Graph', desc: 'One adaptive model connecting your goals, projects, and skills.' },
  { title: 'Verified Code Telemetry', desc: 'Pull request reviews and architectural audits prove real ability.' },
  { title: 'Company-Specific Rubrics', desc: 'Simulated system design and technical interviews calibrated to hiring bars.' },
  { title: 'Direct Engineering Routing', desc: 'Candidates matching 85%+ readiness route directly to engineering leads.' },
];

export const TrustPositioningSection: React.FC<TrustPositioningSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#07090F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            A Fundamental Shift
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Career preparation is fragmented.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Engineers and students juggle disconnected tools that do not communicate, causing months of blind spots and wasted effort.
          </p>
        </div>

        {/* Clean Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Fragmented Reality */}
          <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0C0E17] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold font-display text-slate-300">
                  Fragmented Approach
                </h3>
                <span className="text-xs text-red-400 font-medium">Disconnected</span>
              </div>

              <div className="space-y-4">
                {FRAGMENTED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">{pt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-slate-400">
              Result: 80% of preparation effort is lost between disconnected platforms.
            </div>
          </div>

          {/* Unified Aptivo AI System */}
          <div className="p-8 rounded-2xl border border-[#4C6FFF]/30 bg-gradient-to-b from-[#0F1426] to-[#0A0D18] flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="text-lg font-bold font-display text-white">
                  Aptivo AI Connected System
                </h3>
                <span className="text-xs text-[#8AA0FF] font-medium">Unified Infrastructure</span>
              </div>

              <div className="space-y-4">
                {UNIFIED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4C6FFF]/20 text-[#8AA0FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('platform')}
                className="w-full py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
