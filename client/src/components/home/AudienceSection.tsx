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
    <section className="py-24 relative bg-[#06070B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Tailored Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Built around your career objective.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
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
                className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F19] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#4C6FFF]/10 border border-[#4C6FFF]/20 flex items-center justify-center text-[#8AA0FF] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-xs text-[#8AA0FF] font-medium tracking-wide mb-1">
                    {card.kicker}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(card.id)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#141724] hover:bg-[#4C6FFF] border border-white/[0.08] hover:border-transparent text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all group"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
