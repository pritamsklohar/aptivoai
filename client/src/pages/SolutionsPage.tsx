import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { GraduationCap, Briefcase, School, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

const SOLUTIONS_DATA = [
  {
    id: 'students',
    title: 'Students & Undergrads',
    targetPage: 'students' as PageId,
    icon: GraduationCap,
    problem: 'Computer Science curricula are theoretical and outdated. Students drown in video tutorials without knowing which skills actually move the hiring needle.',
    solution: 'Aptivo AI deconstructs modern engineering hiring requirements into an adaptive step-by-step roadmap from day one, verifying real project code and guiding mock interview practice.',
    features: [
      'Zero-fluff foundation to production curriculum mapping',
      'Production-grade open-source and team project specs',
      'Automated code reviews checking architectural rigor',
      'Campus-to-career readiness benchmark scoring',
    ],
  },
  {
    id: 'job-seekers',
    title: 'Job Seekers & Lateral Pivots',
    targetPage: 'job-seekers' as PageId,
    icon: Briefcase,
    problem: 'Experienced engineers and career switchers waste months submitting hundreds of resumes into ATS black holes, failing screening rounds due to invisible skill gaps.',
    solution: 'Aptivo AI scans your existing code and background against specific target company rubrics, pinpoints the architectural gaps holding you back, and preps you to convert.',
    features: [
      'Deep semantic ATS resume audit & impact quantification',
      'Targeted gap-closing sprint roadmaps',
      'System design and algorithmic mock interview simulators',
      'Direct routing to hiring managers seeking your verified stack',
    ],
  },
  {
    id: 'colleges',
    title: 'Colleges & Universities',
    targetPage: 'contact' as PageId,
    icon: School,
    problem: 'University placement cells lack real-time market telemetry. Curricula lag behind industry needs by 3–5 years, resulting in unplaced cohorts.',
    solution: 'Aptivo AI provides placement cells with an institutional intelligence console. Track cohort readiness, detect curriculum blind spots, and connect verified graduates to hiring partners.',
    features: [
      'Cohort telemetry & readiness dashboards',
      'Curriculum alignment benchmarks against current tech stacks',
      'Automated internal mock placement assessments',
      'Direct pipeline access for corporate campus recruiters',
    ],
  },
  {
    id: 'companies',
    title: 'Companies & Engineering Leaders',
    targetPage: 'hr-industry' as PageId,
    icon: Building2,
    problem: 'Recruiting teams spend hundreds of hours sifting through inflated resumes, reviewing candidate spam, and conducting low-signal first-round screens with 80%+ drop-off.',
    solution: 'Aptivo AI replaces resumes with verified candidate telemetry. Inspect code architecture, commit histories, and simulated interview metrics before spending engineering time on calls.',
    features: [
      'Role requirement vector synthesis and matching',
      'Pre-interview code and architectural depth verification',
      'Instant access to candidates passing 85%+ readiness bars',
      'Zero recruiter spam with deterministic skill fit signals',
    ],
  },
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          Ecosystem Solutions
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          <span className="text-accent-blue">Intelligence</span> for every stage of your career.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          From first-year CS students building foundational projects to tech companies discovering pre-vetted engineers, Aptivo AI connects the entire talent lifecycle.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Solutions" targetId="solutions-grid" />
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS_DATA.map((sol) => {
          const Icon = sol.icon;
          return (
            <div
              key={sol.id}
              className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-6">
                <div className="w-12 h-12 rounded-full bg-accent-blue-soft border border-accent-blue/20 flex items-center justify-center text-accent-blue">
                  <Icon className="w-6 h-6" />
                </div>

                <h2 className="text-2xl font-bold font-display text-ink">
                  {sol.title}
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="p-4 rounded-[20px] bg-red-50 border border-red-100">
                    <div className="text-red-500 font-bold mb-1">The Friction</div>
                    <p className="text-ink/80 leading-relaxed font-medium">{sol.problem}</p>
                  </div>
                  <div className="p-4 rounded-[20px] bg-accent-blue-soft border border-accent-blue/20">
                    <div className="text-accent-blue font-bold mb-1">Aptivo AI Solution</div>
                    <p className="text-ink leading-relaxed font-medium">{sol.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(sol.targetPage)}
                    className="px-6 py-3 rounded-full bg-surface-2 hover:bg-border border border-border text-sm font-semibold text-ink flex items-center gap-2 transition-colors"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-8 rounded-[24px] border border-border bg-white shadow-sm space-y-5">
                  <div className="text-xs font-bold text-muted uppercase tracking-wider">
                    Core Capabilities
                  </div>

                  <div className="space-y-4">
                    {sol.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-3 text-sm text-ink font-medium">
                        <CheckCircle2 className="w-5 h-5 text-accent-blue shrink-0" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
