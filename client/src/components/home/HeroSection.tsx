import React from 'react';
import { PageId } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';
import { ArrowRight, ChevronRight, Star } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column */}
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl lg:text-[64px] font-bold font-display tracking-tight text-ink leading-[1.1]">
              Enhance Your <span className="text-accent-blue">Career</span> <br/>
              <span className="text-accent-orange">Journey</span> with AI
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl font-normal leading-relaxed">
              Aptivo AI connects your goals, skills, projects, resume, interviews, and opportunities into one coherent, adaptive career system.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenWaitlist()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-base font-medium flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-accent-blue/20"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => onNavigate('how-it-works')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-surface-2 hover:bg-border text-ink text-base font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <span>See How It Works</span>
                <ChevronRight className="w-4 h-4 text-muted" />
              </button>
            </div>
            
            {/* Trusted By Strip */}
            <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-sm text-muted font-medium">Trusted by students preparing for</span>
              <div className="flex items-center gap-6 opacity-60 grayscale">
                <span className="font-display font-bold text-lg">MAANG</span>
                <span className="font-display font-bold text-lg">FORTUNE 500</span>
                <span className="font-display font-bold text-lg">UNICORNS</span>
              </div>
            </div>
          </div>
          
          {/* Right Column (Gradient Blob & Badges) */}
          <div className="relative w-full aspect-square max-h-[550px] flex items-center justify-center">
            {/* Soft Gradient Blob Background */}
            <div className="absolute inset-0 rounded-[32px] opacity-[0.15]" 
                 style={{ background: 'linear-gradient(135deg, var(--color-accent-orange) 0%, #FFFFFF 45%, var(--color-accent-blue) 100%)' }} />
            <div className="absolute inset-0 rounded-[32px] opacity-30 blur-3xl pointer-events-none" 
                 style={{ background: 'linear-gradient(135deg, var(--color-accent-orange) 0%, transparent 50%, var(--color-accent-blue) 100%)' }} />
                 
            {/* Main Mockup Placeholder */}
            <div className="relative z-10 w-[85%] h-[85%] bg-white rounded-[24px] shadow-xl border border-border flex flex-col overflow-hidden">
                <div className="h-12 bg-surface border-b border-border flex items-center px-5 gap-2 shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-border" />
                        <div className="w-3 h-3 rounded-full bg-border" />
                        <div className="w-3 h-3 rounded-full bg-border" />
                    </div>
                </div>
                <div className="flex-1 bg-[#f8f9fa] flex items-center justify-center overflow-hidden p-6">
                    <img 
                      src="/no-bg-icon.png" 
                      alt="Aptivo AI Interface" 
                      className="w-full h-full object-contain"
                    />
                </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute top-1/4 -left-4 sm:-left-8 z-20 bg-white rounded-full px-4 py-2.5 shadow-[0_4px_16px_rgba(17,19,24,0.08)] border border-border flex items-center gap-2.5 animate-scroll-bob" style={{animationDelay: '0s'}}>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-orange" />
                <span className="text-sm font-semibold text-ink">AI Roadmap Ready</span>
            </div>
            
            <div className="absolute bottom-1/3 -right-2 sm:-right-6 z-20 bg-white rounded-full px-4 py-2.5 shadow-[0_4px_16px_rgba(17,19,24,0.08)] border border-border flex items-center gap-2.5 animate-scroll-bob" style={{animationDelay: '1s'}}>
                <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
                <span className="text-sm font-semibold text-ink">3 Companies Matched</span>
            </div>
            
            <div className="absolute -bottom-4 left-1/4 z-20 bg-white rounded-full px-4 py-2 shadow-[0_4px_16px_rgba(17,19,24,0.08)] border border-border flex items-center gap-2 animate-scroll-bob" style={{animationDelay: '2s'}}>
                <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-surface-2 border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-border border border-white"></div>
                    <div className="w-6 h-6 rounded-full bg-muted border border-white"></div>
                </div>
                <span className="text-xs font-semibold text-ink ml-1">12K+ Users</span>
                <Star className="w-3 h-3 text-accent-orange fill-accent-orange" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
