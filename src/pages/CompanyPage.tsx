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
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-24">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          About Aptivo AI
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          We are building the future of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Aptivo AI is an AI career technology company building the autonomous reasoning infrastructure for human professional development.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Our Mission" targetId="company-vision" />
      </section>

      {/* Vision, Mission & Principles Grid */}
      <section id="company-vision" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why We Exist */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
            <h2 className="text-xl font-bold font-display text-white">
              Why We Exist
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              For decades, career preparation has been treated as static education: watch video lectures, memorize answers, and spray resumes across job boards. This model fails both developers seeking fulfilling work and engineering leaders struggling to evaluate real competence.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We exist to replace fragmented guessing with closed-loop engineering telemetry — empowering any motivated person to reach their aspirational potential through deterministic steps.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
            <h2 className="text-xl font-bold font-display text-white">
              Vision & Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Our Vision:</strong> A world where career advancement is decoupled from institutional pedigree and anchored entirely in verified capability, real-time feedback, and mathematical matching.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong className="text-white">Our Mission:</strong> To construct the global career intelligence infrastructure that personalizes preparation, validates skill depth, and directly routes engineers into high-impact roles.
            </p>
          </div>

          {/* Core Technology */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6 md:col-span-2">
            <div>
              <h2 className="text-xl font-bold font-display text-white">
                Core Technology Principles
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                The technical foundations powering Aptivo AI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">01. Graph Ontologies</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mapping 4,800+ skill nodes and mutual dependencies rather than treating skills as flat text keywords.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">02. Telemetry Verification</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AST repo analysis, git commit histories, and simulated interview benchmarks replacing unverified claims.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">03. Non-Linear Adaptation</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Closed-loop dynamic recalculation that updates your immediate trajectory upon every conquered milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Architecture Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0F1424] to-[#0A0D18] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-md">
            <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
              Brand Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Engineered for Upward Trajectory
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The continuous 3D ribbon mark and soaring arrow represent deterministic career acceleration: transforming raw ambition into verified production mastery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#060810] border border-white/[0.08] flex flex-col items-center justify-center shadow-2xl">
            <AptivoLogo variant="full" size="lg" showTagline={true} glow={true} />
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl border border-white/[0.08] bg-[#0D101C]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Clean Portrait Container */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-2xl border border-[#4C6FFF]/30 bg-gradient-to-b from-[#13192E] to-[#0A0D18] flex flex-col items-center justify-center text-center p-4 shadow-xl">
                <div className="w-16 h-16 rounded-full bg-[#4C6FFF]/20 border border-[#4C6FFF]/50 flex items-center justify-center text-xl font-bold font-display text-white tracking-widest mb-3">
                  PL
                </div>
                <div className="text-sm font-bold font-display text-white">
                  Pritam Lohar
                </div>
                <div className="text-xs text-[#8AA0FF] mt-0.5">
                  Founder & Architect
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Aptivo AI
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
                Founder's Perspective
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Pritam Lohar
              </h2>
              <div className="text-xs text-slate-400">
                Founder, Aptivo AI
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Founder building Aptivo AI to make career preparation more intelligent, personalized, and connected through AI.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                "We set out to build Aptivo AI because human career trajectories should not be held hostage by uncalibrated advice, geographic isolation, or static credentials. By building deep telemetry into how engineers learn, build, and solve problems, we are constructing a more meritocratic bridge between ambition and world-class technology companies."
              </p>

              <div className="pt-2">
                <a
                  href="https://linkedin.com/in/pritamlohar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141828] hover:bg-[#1E2540] border border-white/[0.08] text-xs font-medium text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#8AA0FF]" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
