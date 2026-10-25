import React, { useState } from 'react';
import { PageId } from '../types';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { FloatingBadge } from '../components/ui/FloatingBadge';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Building2, 
  Target, 
  Cpu,
  Zap,
  ShieldCheck,
  TrendingUp,
  Terminal,
  ExternalLink
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'products' | 'services'>('products');

  return (
    <div className="relative w-full bg-bg overflow-hidden">
      {/* Ambient background light gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-accent-blue/6 via-accent-blue/3 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute top-64 left-[-10%] w-[500px] h-[500px] rounded-full bg-accent-blue/4 blur-3xl pointer-events-none" />

      {/* Main Gateway Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 sm:pt-28 sm:pb-32 space-y-28 sm:space-y-36 relative z-10">
        
        {/* 1. Hero Section (Two Columns with Interactive Showcase) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center pt-2 sm:pt-6">
          
          {/* Left Column: Headlines & Dual Action Buttons */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 animate-fade-up text-left">
            
            {/* High-Craft Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-border/80 shadow-ambient text-xs font-semibold backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-accent-blue animate-subtle-pulse" />
              <span className="text-ink font-bold">Aptivo AI</span>
              <span className="text-border">•</span>
              <span className="text-muted font-normal">One Company · Two Ways We Help</span>
            </div>

            {/* Headline with 'AI' in blue and 'solutions' in orange */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-bold font-display text-ink tracking-[-0.03em] leading-[1.08]">
              We build <span className="text-accent-blue">AI</span> products and AI-powered <span className="text-accent-blue">solutions</span>.
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-xl text-muted max-w-xl font-normal leading-relaxed">
              Explore our proprietary career intelligence platforms or partner with our engineering studio to build custom AI software for your business.
            </p>

            {/* Action Buttons: Blue Explore products + Dark Explore services */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                id="hero-explore-products-btn"
                variant="primary"
                size="lg"
                onClick={() => onNavigate('products')}
                className="group"
              >
                <span>Explore products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>

              <Button
                id="hero-explore-services-btn"
                variant="dark"
                size="lg"
                onClick={() => onNavigate('services')}
                className="group"
              >
                <span>Explore services</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Metric Micro-Bar */}
            <div className="pt-6 border-t border-border/70 flex items-center gap-8 text-xs text-muted">
              <div>
                <span className="font-display font-bold text-base text-ink block leading-none">12K+</span>
                <span className="mt-1 block text-[11px]">Active Candidates</span>
              </div>
              <div className="h-7 w-[1px] bg-border/80" />
              <div>
                <span className="font-display font-bold text-base text-ink block leading-none">3x</span>
                <span className="mt-1 block text-[11px]">Engineering Velocity</span>
              </div>
              <div className="h-7 w-[1px] bg-border/80" />
              <div>
                <span className="font-display font-bold text-base text-ink block leading-none">100%</span>
                <span className="mt-1 block text-[11px]">IP Code Transfer</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Dual-Engine Showcase Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[520px] aspect-auto">
              
              {/* Soft Ambient Radial Blur */}
              <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-accent-blue/15 via-accent-blue/8 to-transparent blur-2xl pointer-events-none" />

              {/* Main High-Craft Showcase Card */}
              <div className="relative z-10 w-full glass-card rounded-[28px] overflow-hidden shadow-ambient-lg border border-border/90">
                
                {/* Window Header */}
                <div className="h-12 bg-white/90 border-b border-border/70 flex items-center justify-between px-5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50" />
                    <span className="ml-2 text-xs font-semibold text-muted font-mono tracking-tight">aptivo.os / gateway</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-blue-soft/80 border border-accent-blue/20 text-accent-blue text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-subtle-pulse" />
                    <span>Live Dual Engine</span>
                  </div>
                </div>

                {/* Card Content with Interactive Mode Switcher */}
                <div className="p-6 bg-gradient-to-b from-white/95 to-surface/50 space-y-5">
                  
                  {/* Mode Switcher Tabs */}
                  <div className="flex items-center gap-1.5 p-1 bg-surface-2/80 rounded-xl border border-border/60 text-xs font-semibold">
                    <button
                      onClick={() => setActiveHeroTab('products')}
                      className={`flex-1 py-2 rounded-lg text-center transition-[background-color,color,box-shadow] duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                        activeHeroTab === 'products'
                          ? 'bg-white text-ink shadow-xs font-bold border border-border/40'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5 text-accent-blue" />
                      <span>Products: Aptivo Careers</span>
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('services')}
                      className={`flex-1 py-2 rounded-lg text-center transition-[background-color,color,box-shadow] duration-150 cursor-pointer flex items-center justify-center gap-2 ${
                        activeHeroTab === 'services'
                          ? 'bg-white text-ink shadow-xs font-bold border border-border/40'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5 text-accent-blue" />
                      <span>Services: AI Software Studio</span>
                    </button>
                  </div>

                  {/* Mode 1: Products Showcase */}
                  {activeHeroTab === 'products' ? (
                    <div className="space-y-4 animate-fade-up">
                      <div className="p-4 rounded-2xl bg-white border border-border/70 shadow-xs space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-xl bg-accent-blue-soft flex items-center justify-center text-accent-blue font-bold">
                              AI
                            </div>
                            <div>
                              <p className="font-bold text-ink text-sm">Full-Stack AI Engineer Roadmap</p>
                              <p className="text-[11px] text-muted">Aptivo Autonomous Career Graph</p>
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200">
                            94% Match
                          </span>
                        </div>

                        {/* Interactive Progress Bar */}
                        <div className="space-y-1.5 pt-1">
                          <div className="flex justify-between text-xs text-muted font-medium">
                            <span>Stage: System Design & LLM Orchestration</span>
                            <span className="text-accent-blue font-bold">Level 4.8 / 5.0</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden">
                            <div className="h-full bg-accent-blue rounded-full w-[88%]" />
                          </div>
                        </div>

                        {/* Verified Skill Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {['React / Vite', 'Distributed Systems', 'Vector DBs', 'FastAPI'].map((skill) => (
                            <span key={skill} className="px-2 py-0.5 rounded-md bg-white text-[10px] font-semibold text-ink border border-border/70 shadow-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-accent-blue-soft/50 border border-accent-blue/20 text-xs">
                        <span className="font-semibold text-ink">Ready to explore subscription plans?</span>
                        <button
                          onClick={() => onNavigate('products')}
                          className="font-bold text-accent-blue hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>View Product</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Mode 2: Services Showcase */
                    <div className="space-y-4 animate-fade-up">
                      <div className="p-4 rounded-2xl bg-ink text-white font-mono text-xs shadow-xs space-y-2.5 border border-ink/40">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-muted">
                          <div className="flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5 text-accent-blue" />
                            <span className="text-white/80">client-build-spec.ts</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                            Production Ready
                          </span>
                        </div>
                        <div className="text-[11px] space-y-1 text-white/70 leading-relaxed">
                          <p><span className="text-accent-blue font-bold">export const</span> <span className="text-sky-300 font-bold">customSoftware</span> = await Aptivo.build(&#123;</p>
                          <p className="pl-3">client: <span className="text-emerald-300">'Enterprise Logistics & AI'</span>,</p>
                          <p className="pl-3">techStack: [<span className="text-emerald-300">'Next.js'</span>, <span className="text-emerald-300">'PyTorch'</span>, <span className="text-emerald-300">'Cloud'</span>],</p>
                          <p className="pl-3">timeline: <span className="text-emerald-300 font-bold">'3 Weeks'</span>,</p>
                          <p className="pl-3">ipOwnership: <span className="text-accent-blue font-bold">100%</span></p>
                          <p>&#125;);</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-border/80 shadow-xs text-xs">
                        <span className="font-semibold text-ink">Have a product to build?</span>
                        <button
                          onClick={() => onNavigate('services')}
                          className="font-bold text-accent-blue hover:underline inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Explore Services</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Floating Badges with Emil Kowalski Glass & Lift */}
              <div className="absolute -top-3 -left-4 z-20 glass-pill px-3.5 py-2 shadow-ambient flex items-center gap-2 hover-lift cursor-default animate-scroll-bob hidden sm:flex" style={{ animationDelay: '0s' }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-bold text-ink">Interview Ready</span>
              </div>

              <div className="absolute top-8 -right-4 z-20 glass-pill px-3.5 py-2 shadow-ambient flex items-center gap-2 hover-lift cursor-default animate-scroll-bob hidden sm:flex" style={{ animationDelay: '1.2s' }}>
                <Target className="w-3.5 h-3.5 text-accent-blue" />
                <span className="text-xs font-bold text-ink">3 Companies Matched</span>
              </div>

              <div className="absolute -bottom-4 right-6 z-20 glass-pill px-3.5 py-2 shadow-ambient flex items-center gap-2 hover-lift cursor-default animate-scroll-bob hidden sm:flex" style={{ animationDelay: '2.4s' }}>
                <Cpu className="w-3.5 h-3.5 text-accent-blue" />
                <span className="text-xs font-bold text-ink">AI Engine Live</span>
              </div>

            </div>

          </div>

        </section>

        {/* 2. Two Dedicated Division Gateway Cards (Apple-Caliber Surface Depth) */}
        <section className="space-y-10 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-accent-blue bg-accent-blue-soft/80 px-3 py-1 rounded-full border border-accent-blue/20">
              Two Dedicated Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
              Choose Your Pathway
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Whether you are an ambitious professional or an expanding company, we have engineered solutions for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Products Door Card */}
            <Card
              id="products-door-card"
              className="glass-card shadow-ambient-lg hover:shadow-2xl border-border/80"
              miniUi={
                <div className="space-y-3 font-sans">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-ink">
                      <Layers className="w-4 h-4 text-accent-blue" />
                      <span>Aptivo Careers · Student & Job Seeker Roadmap</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-blue-soft text-accent-blue text-[10px] font-bold">
                      Adaptive Engine
                    </span>
                  </div>
                  {/* Progress Bar & Skills */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted">
                      <span>Target: Senior AI / Software Engineer</span>
                      <span className="font-bold text-accent-blue">88% Readiness</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden">
                      <div className="h-full bg-accent-blue rounded-full w-[88%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-muted pt-0.5">
                      <span>16 / 18 Signals Mastered</span>
                      <span className="text-emerald-700 font-semibold">Tier 1 Matched</span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                  SaaS Platforms
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink">
                  Products
                </h3>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  Proprietary AI platforms you subscribe to. Start with Aptivo Careers—your adaptive roadmap connecting skills, resume, interview prep, and opportunities.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('products')}
                  className="w-full sm:w-auto group"
                >
                  <span>Explore products</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Card>

            {/* Services Door Card */}
            <Card
              id="services-door-card"
              className="glass-card shadow-ambient-lg hover:shadow-2xl border-border/80"
              miniUi={
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <div className="flex items-center gap-1.5 text-ink font-sans font-bold">
                      <Code2 className="w-4 h-4 text-accent-blue" />
                      <span>Studio Engineering Specs</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-2 text-ink text-[10px] font-bold">
                      100% Owned Code
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface/80 border border-border/80 text-[11px] text-muted space-y-1">
                    <p className="text-ink font-semibold">// Modern AI-accelerated delivery</p>
                    <p className="text-accent-blue">const project = await Aptivo.build(&#123;</p>
                    <p className="pl-3">type: <span className="text-accent-blue">'CustomAiSoftware'</span>,</p>
                    <p className="pl-3">speed: <span className="text-accent-blue">'3x Faster'</span>, ipTransfer: true</p>
                    <p className="text-accent-blue">&#125;);</p>
                  </div>
                </div>
              }
            >
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                  Client Engineering
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink">
                  Services
                </h3>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  High-performance websites and bespoke software built for your business, delivered faster with custom AI workflows and complete source code ownership.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="dark"
                  size="md"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto group"
                >
                  <span>Explore services</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </Card>

          </div>
        </section>

        {/* 3. Founder & Company Strip */}
        <section className="w-full max-w-4xl mx-auto py-5 px-6 sm:px-8 rounded-2xl glass-card border border-border/90 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-ambient relative z-10">
          <div className="flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-full bg-accent-blue-soft flex items-center justify-center text-accent-blue shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-sm text-ink/85 leading-relaxed font-medium">
              Aptivo AI builds AI-powered products for people and solutions for businesses. Founded by Pritam Lohar.
            </p>
          </div>
          <button
            onClick={() => onNavigate('company')}
            className="text-xs sm:text-sm font-bold text-accent-blue hover:text-accent-blue/80 inline-flex items-center gap-1.5 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue rounded-full py-1.5 px-3 hover:bg-accent-blue-soft transition-colors"
          >
            <span>About our story</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>

      </div>
    </div>
  );
};
