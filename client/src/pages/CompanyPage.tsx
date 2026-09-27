import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { AptivoLogo } from '../components/common/AptivoLogo';
import { Globe, ArrowRight } from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          About Aptivo AI
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          We are building the <span className="text-accent-blue">future</span> of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Aptivo AI is an AI career technology company building the autonomous reasoning infrastructure for human professional development.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Our Mission" targetId="company-vision" />
      </section>

      {/* Vision, Mission & Principles Grid */}
      <section id="company-vision" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why We Exist */}
          <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-4">
            <h2 className="text-2xl font-bold font-display text-ink">
              Why We Exist
            </h2>
            <p className="text-sm text-ink/80 leading-relaxed font-medium">
              For decades, career preparation has been treated as static education: watch video lectures, memorize answers, and spray resumes across job boards. This model fails both developers seeking fulfilling work and engineering leaders struggling to evaluate real competence.
            </p>
            <p className="text-sm text-muted leading-relaxed font-medium">
              We exist to replace fragmented guessing with closed-loop engineering telemetry — empowering any motivated person to reach their aspirational potential through deterministic steps.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-4">
            <h2 className="text-2xl font-bold font-display text-ink">
              Vision & Mission
            </h2>
            <p className="text-sm text-ink/80 leading-relaxed font-medium">
              <strong className="text-ink">Our Vision:</strong> A world where career advancement is decoupled from institutional pedigree and anchored entirely in verified capability, real-time feedback, and mathematical matching.
            </p>
            <p className="text-sm text-muted leading-relaxed font-medium">
              <strong className="text-ink">Our Mission:</strong> To construct the global career intelligence infrastructure that personalizes preparation, validates skill depth, and directly routes engineers into high-impact roles.
            </p>
          </div>

          {/* Core Technology */}
          <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-6 md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold font-display text-ink">
                Core Technology Principles
              </h2>
              <p className="text-sm text-muted mt-2 font-medium">
                The technical foundations powering Aptivo AI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
              <div className="space-y-2">
                <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">01. Graph Ontologies</div>
                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  Mapping 4,800+ skill nodes and mutual dependencies rather than treating skills as flat text keywords.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">02. Telemetry Verification</div>
                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  AST repo analysis, git commit histories, and simulated interview benchmarks replacing unverified claims.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">03. Non-Linear Adaptation</div>
                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  Closed-loop dynamic recalculation that updates your immediate trajectory upon every conquered milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Architecture Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[32px] border-2 border-accent-blue/30 bg-accent-blue-soft/50 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-white/40 pointer-events-none" />
          
          <div className="relative z-10 space-y-3 max-w-md">
            <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
              Brand Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Engineered for Upward Trajectory
            </h3>
            <p className="text-sm text-ink/80 leading-relaxed font-medium pt-2">
              The continuous 3D ribbon mark and soaring arrow represent deterministic career acceleration: transforming raw ambition into verified production mastery.
            </p>
          </div>

          <div className="relative z-10 p-8 rounded-[24px] bg-white border border-border flex flex-col items-center justify-center shadow-lg">
            <AptivoLogo variant="full" size="lg" showTagline={true} />
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-[24px] border border-border bg-surface shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* Clean Portrait Container */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-56 h-56 rounded-[24px] border border-border bg-white flex flex-col items-center justify-center text-center p-4 shadow-sm">
                <img 
                  src="/prittt.jpg" 
                  alt="Pritam Lohar" 
                  className="w-24 h-24 rounded-full border border-border object-cover mb-4 shadow-sm"
                />
                <div className="text-lg font-bold font-display text-ink">
                  Pritam Lohar
                </div>
                <div className="text-xs font-bold text-accent-blue mt-1 uppercase tracking-wider">
                  Founder & Architect
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-8 space-y-5">
              <div className="text-xs font-bold text-accent-orange tracking-wider uppercase">
                Founder's Perspective
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
                Pritam Lohar
              </h2>

              <p className="text-base text-ink/80 leading-relaxed font-medium">
                Founder building Aptivo AI to make career preparation more intelligent, personalized, and connected through AI.
              </p>
              <p className="text-sm text-muted leading-relaxed font-medium border-l-2 border-accent-blue/30 pl-4 py-1">
                "We set out to build Aptivo AI because human career trajectories should not be held hostage by uncalibrated advice, geographic isolation, or static credentials. By building deep telemetry into how engineers learn, build, and solve problems, we are constructing a more meritocratic bridge between ambition and world-class technology companies."
              </p>

              <div className="pt-4">
                <a
                  href="http://www.linkedin.com/in/pritam-lohar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-2 hover:bg-border border border-border text-sm font-semibold text-ink transition-colors"
                >
                  <Globe className="w-4 h-4 text-accent-blue" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
