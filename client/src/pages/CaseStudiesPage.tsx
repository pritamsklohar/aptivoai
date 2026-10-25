import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Layers, 
  Code2, 
  ShieldCheck, 
  Lock, 
  ExternalLink, 
  Sparkles,
  Database,
  Cpu
} from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onNavigate }) => {
  const frameworks = [
    {
      badge: 'Architecture Blueprint',
      title: 'Full-Stack Multi-Tenant SaaS Engine',
      techStack: ['React', 'TypeScript', 'Node.js Fastify', 'PostgreSQL', 'Redis', 'Docker'],
      problem: 'High-throughput subscription platform requiring granular role-based tenant isolation, sub-100ms API response latency, and automated billing synchronization.',
      architecture: 'Event-driven microservice topology with connection pooling, Redis caching layer, and isolated schema tenancy to ensure strict enterprise data partitioning.',
    },
    {
      badge: 'Automation Blueprint',
      title: 'Autonomous Inbound Document & Ticket Triage',
      techStack: ['Python', 'LLM Agent Framework', 'FastAPI', 'Vector Store', 'Slack / Webhooks'],
      problem: 'Enterprise support and operations teams processing thousands of weekly PDF invoices, contracts, and inbound support requests with manual data re-entry.',
      architecture: 'Asynchronous webhook ingestion pipeline coupled with zero-data-retention LLM extraction agents, automated verification checks, and ERP synchronization.',
    },
    {
      badge: 'Frontend Engineering Blueprint',
      title: 'Conversion-Optimized Corporate Web Platform',
      techStack: ['Next.js / React', 'Tailwind CSS', 'Headless CMS', 'Edge CDN', 'Vercel'],
      problem: 'B2B technology firm experiencing slow load times, poor mobile conversion rates, and cumbersome content management on a legacy CMS.',
      architecture: 'Static-site generation with incremental edge revalidation, automated Open Graph asset synthesis, and responsive micro-interaction styling scoring 98+ on Google Lighthouse.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Layers className="w-3.5 h-3.5 text-accent-blue" />
            <span>Architecture & Case Studies</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-ink tracking-tight leading-[1.12]">
            Engineering <span className="text-accent-blue">Blueprints</span> & Case Studies.
          </h1>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            We prioritize strict client non-disclosure and intellectual property protection. Explore our architectural frameworks and request sanitized project briefs.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('services-quote')}
              className="px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* NDA & CONFIDENTIALITY NOTICE */}
        <section className="glass-card rounded-2xl border border-border/80 p-6 sm:p-8 flex items-start gap-4 shadow-ambient max-w-4xl mx-auto">
          <Lock className="w-6 h-6 text-accent-blue shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-ink">Strict Client Non-Disclosure Standard</h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              Aptivo AI signs mutual NDAs prior to initiating discovery on all custom software builds. We do not fabricate fake testimonials, user logos, or vanity metrics. Specific production case studies and sanitized code reviews are shared selectively during the discovery phase upon client consent.
            </p>
          </div>
        </section>

        {/* ARCHITECTURE BLUEPRINTS */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Technical Archetypes
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Production Architecture Frameworks
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Reference patterns deployed across client solutions.
            </p>
          </div>

          <div className="space-y-8">
            {frameworks.map((fw, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[28px] border border-border/80 p-8 sm:p-10 shadow-ambient space-y-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-blue bg-accent-blue-soft px-3 py-1 rounded-full border border-accent-blue/20">
                    {fw.badge}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {fw.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-full bg-white border border-border/70 text-[11px] font-mono text-muted shadow-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold font-display text-ink">{fw.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-2 p-5 rounded-2xl bg-white border border-border/70 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                    <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      Business Challenge
                    </div>
                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                      {fw.problem}
                    </p>
                  </div>

                  <div className="space-y-2 p-5 rounded-2xl bg-white border border-border/70 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                    <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
                      Architectural Solution
                    </div>
                    <p className="text-xs sm:text-sm text-ink/80 leading-relaxed font-medium">
                      {fw.architecture}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="glass-card rounded-[32px] border border-border/80 p-10 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-ambient">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-ink tracking-tight">
              Request a confidential consultation.
            </h2>
            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              We will review your technical specifications under NDA and outline the optimal architecture for your business.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('services-quote')}
                className="px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
