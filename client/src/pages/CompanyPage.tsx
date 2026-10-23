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
        <div className="p-6 sm:p-10 rounded-[28px] border border-border bg-surface shadow-sm relative overflow-hidden">
          {/* Subtle ambient light accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Clean, prominent founder portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-square rounded-[22px] overflow-hidden border border-border/80 shadow-md bg-white group">
                <img 
                  src="/prittt.jpg" 
                  alt="Pritam Lohar - Founder & Architect" 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-7 space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-xs font-bold text-accent-blue uppercase tracking-wider">
                Founder & Architect
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
                  Pritam Lohar
                </h2>
                <p className="text-xs font-bold text-accent-orange uppercase tracking-wider mt-1.5">
                  Founder's Perspective
                </p>
              </div>

              <p className="text-base text-ink/80 leading-relaxed font-medium">
                Building Aptivo AI to make career preparation more intelligent, personalized, and connected through AI.
              </p>

              <blockquote className="text-sm text-muted leading-relaxed font-medium border-l-2 border-accent-blue/40 pl-4 py-1 italic bg-surface-2/40 rounded-r-xl pr-3">
                "We set out to build Aptivo AI because human career trajectories should not be held hostage by uncalibrated advice, geographic isolation, or static credentials. By building deep telemetry into how engineers learn, build, and solve problems, we are constructing a more meritocratic bridge between ambition and world-class technology companies."
              </blockquote>

              <div className="pt-2">
                <a
                  href="http://www.linkedin.com/in/pritam-lohar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-surface-2 border border-border text-sm font-semibold text-ink shadow-sm hover:shadow transition-all group"
                >
                  <Globe className="w-4 h-4 text-accent-blue" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 text-muted group-hover:text-ink" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
