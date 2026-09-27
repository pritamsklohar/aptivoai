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
    <section className="py-24 border-y border-border bg-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-orange tracking-wider uppercase bg-accent-orange/10 px-3 py-1.5 rounded-full inline-block">
            A Fundamental Shift
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            Career preparation is <span className="text-accent-orange">fragmented</span>.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Engineers and students juggle disconnected tools that do not communicate, causing months of blind spots and wasted effort.
          </p>
        </div>

        {/* Clean Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Fragmented Reality */}
          <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <h3 className="text-xl font-bold font-display text-ink">
                  Fragmented Approach
                </h3>
                <span className="text-xs text-red-500 font-bold bg-red-50 px-2 py-1 rounded-md">Disconnected</span>
              </div>

              <div className="space-y-5">
                {FRAGMENTED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{pt.title}</h4>
                      <p className="text-sm text-muted mt-1 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-2 border border-border text-sm text-ink font-medium">
              Result: 80% of preparation effort is lost between disconnected platforms.
            </div>
          </div>

          {/* Unified Aptivo AI System */}
          <div className="p-8 sm:p-10 rounded-[24px] border-2 border-accent-blue/30 bg-accent-blue-soft/30 flex flex-col justify-between space-y-6 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-white/40 pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-border">
                <h3 className="text-xl font-bold font-display text-ink">
                  Aptivo AI Connected System
                </h3>
                <span className="text-xs text-accent-blue font-bold bg-white px-2 py-1 rounded-md border border-accent-blue/20">Unified</span>
              </div>

              <div className="space-y-5">
                {UNIFIED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent-blue text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ink">{pt.title}</h4>
                      <p className="text-sm text-ink/80 mt-1 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('platform')}
                  className="w-full py-4 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <span>Explore the Platform</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
