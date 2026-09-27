import React from 'react';
import { PageId } from '../../types';
import { X, Check } from 'lucide-react';

interface WhyAptivoSectionProps {
  onNavigate: (page: PageId) => void;
}

const COMPARISON_ROWS = [
  {
    topic: 'Curriculum & Direction',
    traditional: 'Generic video playlists and outdated syllabi',
    aptivo: 'Adaptive neural roadmap built for your target company',
  },
  {
    topic: 'Hands-on Projects',
    traditional: 'Tutorial clones that fail senior engineering review',
    aptivo: 'Production architectures with automated senior PR reviews',
  },
  {
    topic: 'Resume & ATS',
    traditional: 'Keyword-stuffed static PDFs with high rejection rates',
    aptivo: 'Quantified impact metrics generated from verified commits',
  },
  {
    topic: 'Interview Preparation',
    traditional: 'Isolated algorithmic puzzles without system context',
    aptivo: 'Simulated system design and coding on actual enterprise rubrics',
  },
  {
    topic: 'Hiring Access',
    traditional: 'Submitting blind applications into ATS black holes',
    aptivo: 'Direct routing to engineering leads at 85%+ readiness',
  },
];

export const WhyAptivoSection: React.FC<WhyAptivoSectionProps> = () => {
  return (
    <section className="py-24 relative bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-orange tracking-wider uppercase bg-accent-orange/10 px-3 py-1.5 rounded-full inline-block">
            The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            Scattered preparation vs. One <span className="text-accent-blue">intelligent</span> system.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Replace guesswork with a unified career intelligence platform.
          </p>
        </div>

        {/* Clean Comparison Table / Cards */}
        <div className="rounded-[24px] border border-border bg-surface overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 border-b border-border bg-surface-2 text-xs font-semibold text-muted">
            <div className="md:col-span-4 uppercase tracking-wider">Dimension</div>
            <div className="md:col-span-4 uppercase tracking-wider text-muted hidden md:block">Traditional Preparation</div>
            <div className="md:col-span-4 uppercase tracking-wider text-accent-blue hidden md:block">Aptivo AI Platform</div>
          </div>

          <div className="divide-y divide-border">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center bg-bg/50 hover:bg-bg transition-colors">
                <div className="md:col-span-4 text-sm font-semibold text-ink">
                  {row.topic}
                </div>

                <div className="md:col-span-4 text-sm text-muted flex items-start gap-2">
                  <X className="w-4 h-4 text-muted/60 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                <div className="md:col-span-4 text-sm text-ink flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{row.aptivo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
