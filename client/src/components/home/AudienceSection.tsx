import React from 'react';
import { PageId } from '../../types';
import { GraduationCap, Briefcase, Building2, ArrowRight, Check } from 'lucide-react';

interface AudienceSectionProps {
  onNavigate: (page: PageId) => void;
}

const AUDIENCE_CARDS = [
  {
    id: 'students' as PageId,
    title: 'Students & Undergrads',
    kicker: 'Aspiring Engineers',
    icon: GraduationCap,
    description: 'Build foundational and production skills through structured roadmaps, hands-on code reviews, and mock interviews.',
    features: [
      'Personalized milestone roadmap',
      'Real project architectures & PR reviews',
      'ATS-optimized resume generation',
      'Technical interview simulations',
    ],
    cta: 'Explore for Students',
  },
  {
    id: 'job-seekers' as PageId,
    title: 'Job Seekers & Switchers',
    kicker: 'Experienced Professionals',
    icon: Briefcase,
    description: 'Turn your existing background into a high-confidence strategy for senior roles, closing unseen architectural gaps.',
    features: [
      'Deep profile & gap analysis',
      'High-dimensional job matching',
      'System design mock evaluations',
      'Direct routing to hiring managers',
    ],
    cta: 'Explore for Job Seekers',
  },
  {
    id: 'hr-industry' as PageId,
    title: 'HR & Engineering Teams',
    kicker: 'Tech Companies & Hiring Leads',
    icon: Building2,
    description: 'Discover candidates pre-evaluated through verified code depth, test coverage, and calibrated readiness signals.',
    features: [
      'Role requirement mapping',
      'Verified pull request telemetry',
      'Pre-screened 85%+ readiness cohort',
      'Zero recruiter spam or blind screens',
    ],
    cta: 'Explore for Companies',
  },
];

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 relative bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-blue tracking-wider uppercase bg-accent-blue/10 px-3 py-1.5 rounded-full inline-block">
            Tailored Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            Built around your <span className="text-accent-orange">career</span> objective.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Whether starting out, seeking a senior promotion, or building high-performing engineering teams, Aptivo AI adapts to your context.
          </p>
        </div>

        {/* 3 Clean Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-8 rounded-[24px] border border-border bg-surface hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-8"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-accent-blue-soft border border-accent-blue/20 flex items-center justify-center text-accent-blue mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-xs text-accent-blue font-bold tracking-wider uppercase mb-1.5">
                    {card.kicker}
                  </div>
                  <h3 className="text-2xl font-bold font-display text-ink mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-8">
                    {card.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-border">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-ink font-medium">
                        <Check className="w-4 h-4 text-accent-orange shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(card.id)}
                  className="w-full py-3.5 px-6 rounded-full bg-surface-2 hover:bg-border border border-border hover:border-border/80 text-sm font-semibold text-ink flex items-center justify-center gap-2 transition-all group"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
