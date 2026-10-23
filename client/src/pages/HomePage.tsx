import React from 'react';
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
  Cpu
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full bg-bg">


      {/* Main Gateway Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 sm:pt-24 sm:pb-24 space-y-24 sm:space-y-28 relative">
        
        {/* Soft Ambient Corner Glows (Gateway Home Only) */}
        <div className="absolute top-16 right-0 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 left-0 w-96 h-96 rounded-full bg-accent-orange/5 blur-3xl pointer-events-none" />

        {/* 3. Hero Section (Two Columns) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8 relative z-10">
          
          {/* Left Column: Headlines & Dual Action Buttons */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 animate-fade-up text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold tracking-wide border border-accent-blue/20">
              <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
              <span>One Company · Two Ways We Help</span>
            </div>

            {/* Headline with 'AI' in blue and 'solutions' in orange */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-ink tracking-tight leading-[1.14]">
              We build <span className="text-accent-blue">AI</span> products and AI-powered <span className="text-accent-orange">solutions</span>.
            </h1>

            {/* Subline */}
            <p className="text-base sm:text-lg text-muted max-w-lg font-normal leading-relaxed">
              One company, two ways we help. Choose where to start.
            </p>

            {/* Action Buttons: Blue Explore products + Dark Explore services */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Button
                id="hero-explore-products-btn"
                variant="primary"
                size="lg"
                onClick={() => onNavigate('products')}
              >
                <span>Explore products</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                id="hero-explore-services-btn"
                variant="dark"
                size="lg"
                onClick={() => onNavigate('services')}
              >
                <span>Explore services</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Hero phone image with soft organic gradient blob and floating badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[460px] aspect-[4/3] flex items-center justify-center">
              
              {/* Soft Organic Ambient Gradient Blob (Amber on left to Soft Blue on right) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-orange/20 via-accent-blue-soft/60 to-accent-blue/20 blur-3xl pointer-events-none" />

              {/* Hand-held Phone Transparent Graphic */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
                <img
                  src="/no-bg-icon.png"
                  alt="Aptivo AI Career Roadmap on Mobile Phone"
                  className="max-h-[380px] sm:max-h-[440px] w-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>

              {/* Floating Badges with Soft Shadows */}
              {/* Badge 1: Top Left - Interview Ready */}
              <div className="absolute -top-1 left-0 z-20 animate-badge-in-1 hidden sm:block">
                <FloatingBadge
                  icon={<CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  label="Interview Ready"
                />
              </div>

              {/* Badge 2: Top Right - 3 Companies Matched */}
              <div className="absolute top-4 -right-2 z-20 animate-badge-in-2 hidden sm:block">
                <FloatingBadge
                  icon={<Target className="w-4 h-4 text-accent-orange" />}
                  label="3 Companies Matched"
                />
              </div>

              {/* Badge 3: Middle/Bottom Right - AI Roadmap Live */}
              <div className="absolute top-1/2 -right-4 z-20 animate-badge-in-3 hidden sm:block">
                <FloatingBadge
                  icon={<Cpu className="w-4 h-4 text-accent-blue" />}
                  label="AI Roadmap Live"
                />
              </div>

              {/* Badge 4: Lower Left - Early Access */}
              <div className="absolute bottom-3 -left-2 z-20 animate-badge-in-4 hidden sm:block">
                <FloatingBadge
                  icon={<span className="text-red-500 text-xs">❤️</span>}
                  label="Early Access"
                  sublabel="Cohort Priority"
                />
              </div>

            </div>
          </div>

        </section>

        {/* 4. Two Equal "Door" Cards (Same size and weight, no 'recommended' one) */}
        <section className="space-y-8 relative z-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-muted">Two Dedicated Divisions</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Choose Your Pathway
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Products Door Card (First on Mobile) */}
            <Card
              id="products-door-card"
              miniUi={
                <div className="space-y-3 font-sans">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 font-bold text-ink">
                      <Layers className="w-3.5 h-3.5 text-accent-blue" />
                      <span>Aptivo Careers · Student Roadmap</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-accent-blue-soft text-accent-blue text-[10px] font-bold">
                      Adaptive Engine
                    </span>
                  </div>
                  {/* Progress Bar & Skills */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-muted">
                      <span>Target: Software Developer @ Stripe</span>
                      <span className="font-semibold text-accent-blue">68% Complete</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-surface-2 overflow-hidden">
                      <div className="h-full bg-accent-blue rounded-full w-[68%]" />
                    </div>
                    <div className="flex justify-between text-[11px] text-muted pt-0.5">
                      <span>12 / 18 Skills Mastered</span>
                      <span className="text-emerald-700 font-medium">Readiness: 88/100</span>
                    </div>
                  </div>
                </div>
              }
            >
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-accent-blue">
                  SaaS Platforms
                </div>
                <h3 className="text-2xl font-bold font-display text-ink">
                  Products
                </h3>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  AI platforms you subscribe to. Start with Aptivo Careers, your AI-powered career roadmap.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('products')}
                  className="w-full sm:w-auto"
                >
                  <span>Explore products</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

            {/* Services Door Card */}
            <Card
              id="services-door-card"
              miniUi={
                <div className="space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-border/60 pb-2">
                    <div className="flex items-center gap-1.5 text-ink font-sans font-bold">
                      <Code2 className="w-3.5 h-3.5 text-ink" />
                      <span>Client Engineering Specs</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-surface-2 text-ink text-[10px] font-bold">
                      100% Owned Code
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface border border-border/80 text-[11px] text-muted space-y-1">
                    <p className="text-ink font-semibold">// Modern AI-accelerated delivery</p>
                    <p className="text-accent-blue">const project = await Aptivo.build(&#123;</p>
                    <p className="pl-3">type: 'WebsiteSolutions', speed: '3x',</p>
                    <p className="pl-3">ipTransfer: true</p>
                    <p className="text-accent-blue">&#125;);</p>
                  </div>
                </div>
              }
            >
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-muted">
                  Client Solutions
                </div>
                <h3 className="text-2xl font-bold font-display text-ink">
                  Services
                </h3>
                <p className="text-sm text-muted leading-relaxed font-normal">
                  Websites and software built for your business, made faster with AI.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="dark"
                  size="md"
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto"
                >
                  <span>Explore services</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>

          </div>
        </section>

        {/* 5. About Strip */}
        <section className="w-full max-w-4xl mx-auto py-5 px-6 sm:px-8 rounded-2xl bg-surface border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs relative z-10">
          <div className="flex items-center gap-3 text-left">
            <Building2 className="w-5 h-5 text-accent-blue shrink-0 hidden sm:block" />
            <p className="text-xs sm:text-sm text-ink/85 leading-relaxed font-medium">
              Aptivo AI builds AI-powered products for people and solutions for businesses. Founded by Pritam Lohar.
            </p>
          </div>
          <button
            onClick={() => onNavigate('company')}
            className="text-xs sm:text-sm font-semibold text-accent-blue hover:text-accent-blue/80 inline-flex items-center gap-1 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2 rounded"
          >
            <span>About us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </section>



      </div>
    </div>
  );
};
