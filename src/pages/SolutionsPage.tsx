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
    <div className="pt-32 pb-24 space-y-20 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Ecosystem Solutions
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Intelligence for every stage of your career.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
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
              className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#4C6FFF]/10 border border-[#4C6FFF]/20 flex items-center justify-center text-[#8AA0FF]">
                  <Icon className="w-5 h-5" />
                </div>

                <h2 className="text-2xl font-bold font-display text-white">
                  {sol.title}
                </h2>

                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04]">
                    <div className="text-red-400/90 font-medium mb-1">The Friction</div>
                    <p className="text-slate-400 leading-relaxed">{sol.problem}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#12172A] border border-[#4C6FFF]/20">
                    <div className="text-[#8AA0FF] font-medium mb-1">Aptivo AI Solution</div>
                    <p className="text-slate-300 leading-relaxed">{sol.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(sol.targetPage)}
                    className="px-5 py-2.5 rounded-lg bg-[#141828] hover:bg-[#4C6FFF] border border-white/[0.08] text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0E1220] space-y-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Capabilities
                  </div>

                  <div className="space-y-3">
                    {sol.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
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
