import React from 'react';
import { PageId } from '../types';
import { Bell } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 bg-bg min-h-screen">

      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-5">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue-soft/90 text-accent-blue text-xs font-semibold uppercase tracking-wider border border-accent-blue/20">
          Join the Founding Team
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Build the <span className="text-accent-blue">future</span> of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          We are engineering the algorithms, graph ontologies, and telemetry pipelines powering human potential. Work on deep problems with high autonomy.
        </p>
      </section>

      {/* No Openings Banner */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="glass-card rounded-[28px] border border-border/80 shadow-ambient p-10 sm:p-14 text-center space-y-5">

          {/* Icon */}
          <div className="w-14 h-14 mx-auto rounded-2xl bg-surface-2 border border-border/70 flex items-center justify-center">
            <Bell className="w-6 h-6 text-accent-blue" />
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3 tracking-tight">
              No openings right now
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md mx-auto">
              We don't have any open roles at this moment, but we're always growing. Leave your details and we'll reach out when something fits.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-2 flex items-center justify-center">
            <a
              href="mailto:hr@aptivoai.in"
              className="px-6 py-3 rounded-full bg-white hover:bg-surface-2 border border-border/80 text-sm font-semibold text-ink shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors"
            >
              hr@aptivoai.in
            </a>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'High Autonomy', desc: 'Own your work end-to-end with minimal process overhead.' },
            { label: 'Deep Problems', desc: 'We build at the intersection of AI, ontology, and human systems.' },
            { label: 'Founding Equity', desc: 'Early team members receive meaningful equity in the company.' },
          ].map((v) => (
            <div
              key={v.label}
              className="glass-card p-6 rounded-[22px] border border-border/80 shadow-ambient space-y-2"
            >
              <div className="text-sm font-bold text-ink">{v.label}</div>
              <p className="text-xs text-muted leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
