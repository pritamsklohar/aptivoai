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
    <section className="py-24 relative bg-[#06070B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Scattered preparation vs. One intelligent system.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Replace guesswork with a unified career intelligence platform.
          </p>
        </div>

        {/* Clean Comparison Table / Cards */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0C0F1A] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 border-b border-white/[0.06] bg-[#090B12] text-xs font-medium text-slate-400">
            <div className="md:col-span-4 uppercase tracking-wider">Dimension</div>
            <div className="md:col-span-4 uppercase tracking-wider text-red-400/90 hidden md:block">Traditional Preparation</div>
            <div className="md:col-span-4 uppercase tracking-wider text-[#8AA0FF] hidden md:block">Aptivo AI Platform</div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center">
                <div className="md:col-span-4 text-xs font-semibold text-white">
                  {row.topic}
                </div>

                <div className="md:col-span-4 text-xs text-slate-400 flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                <div className="md:col-span-4 text-xs text-slate-200 flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
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
