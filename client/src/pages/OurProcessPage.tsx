import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  FileCode, 
  Layers, 
  RefreshCw, 
  Rocket, 
  HeartHandshake, 
  ShieldCheck, 
  Key, 
  FileText 
} from 'lucide-react';

interface OurProcessPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const OurProcessPage: React.FC<OurProcessPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: '01',
      title: 'Discovery Call',
      desc: 'We conduct a 30-minute technical consultation to understand your business objectives, target users, desired integrations, and timeline parameters.',
    },
    {
      num: '02',
      title: 'Scope & Quote',
      desc: 'We produce a transparent Statement of Work (SOW) outlining technical architecture, exact milestone deliverables, timeline, and a fixed quote with no hidden extras.',
    },
    {
      num: '03',
      title: 'AI-Assisted Build',
      desc: 'Our engineers build your software using modern typed frameworks (React, Node.js, Python), leveraging AI acceleration to deliver clean code in days instead of months.',
    },
    {
      num: '04',
      title: 'Review & Revisions',
      desc: 'You receive live staging links to test working software. We execute structured feedback loops to refine styling, interactions, and business logic.',
    },
    {
      num: '05',
      title: 'Production Launch',
      desc: 'We configure DNS, SSL certificates, database migrations, and CI/CD pipelines, deploying your application to reliable production infrastructure on AWS or Vercel.',
    },
    {
      num: '06',
      title: 'Post-Launch Support',
      desc: 'Every project includes a 30-day post-launch warranty period for bug fixes and operational support, with optional ongoing maintenance agreements.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Compass className="w-3.5 h-3.5 text-accent-blue" />
            <span>Delivery Framework</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-ink tracking-tight leading-[1.12]">
            Our <span className="text-accent-blue">Engineering</span> Process.
          </h1>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Predictable milestones, rigorous code standards, and transparent collaboration from initial call to deployed software.
          </p>

          <div className="pt-2">
            <button
              onClick={() => onNavigate('services-quote')}
              className="px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Request a Project Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* 6-STEP PROCESS TIMELINE */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Step-by-Step
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              The 6-Stage Delivery Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Built to guarantee speed, architectural excellence, and continuous alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient hover:shadow-ambient-lg transition-all space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-accent-blue-soft text-accent-blue flex items-center justify-center font-bold text-sm">
                    {st.num}
                  </div>
                  <h3 className="text-xl font-bold font-display text-ink">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT PROVISIONS, OWNERSHIP & REVISIONS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* What the Client Provides */}
          <div className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient space-y-4">
            <div className="w-10 h-10 rounded-full bg-surface-2 text-ink flex items-center justify-center font-bold">
              <FileText className="w-5 h-5 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink">
              What You Provide
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              To ensure lightning-fast execution, we ask clients to provide:
            </p>
            <ul className="space-y-2 text-xs text-ink/80 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Clear business goals & user expectations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Brand assets, logo files, and copy guidelines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Responsive point-of-contact for reviews</span>
              </li>
            </ul>
          </div>

          {/* 100% Ownership */}
          <div className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient space-y-4">
            <div className="w-10 h-10 rounded-full bg-surface-2 text-ink flex items-center justify-center font-bold">
              <Key className="w-5 h-5 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink">
              100% Code Ownership
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              You own everything. No vendor lock-in or proprietary dependencies:
            </p>
            <ul className="space-y-2 text-xs text-ink/80 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Complete GitHub repository IP transfer</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Full database schemas & deployment scripts</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Zero recurring agency licensing royalties</span>
              </li>
            </ul>
          </div>

          {/* Revision Rounds */}
          <div className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient space-y-4">
            <div className="w-10 h-10 rounded-full bg-surface-2 text-ink flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5 text-accent-blue" />
            </div>
            <h3 className="text-xl font-bold font-display text-ink">
              Structured Revisions
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
              Clear, transparent feedback cycles protect project velocity:
            </p>
            <ul className="space-y-2 text-xs text-ink/80 pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Two structured revision rounds per milestone</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Direct staging review feedback tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                <span>Fair, pre-quoted change orders for new features</span>
              </li>
            </ul>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="glass-card rounded-[32px] border border-border/80 p-10 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-ambient">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-ink tracking-tight">
              Start with a discovery call.
            </h2>
            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              Tell us about your technical challenges. We will prepare an architectural breakdown and quote.
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
