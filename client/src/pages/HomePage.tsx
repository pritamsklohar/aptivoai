import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { TrustPositioningSection } from '../components/home/TrustPositioningSection';
import { AudienceSection } from '../components/home/AudienceSection';
import { AiEngineDiagramSection } from '../components/home/AiEngineDiagramSection';
import { AdaptiveCareerLoopSection } from '../components/home/AdaptiveCareerLoopSection';
import { DashboardPreviewSection } from '../components/home/DashboardPreviewSection';
import { WhyAptivoSection } from '../components/home/WhyAptivoSection';
import { HomeCtaSection } from '../components/home/HomeCtaSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} onOpenWaitlist={() => onOpenWaitlist()} />
      <TrustPositioningSection onNavigate={onNavigate} />
      <AudienceSection onNavigate={onNavigate} />
      <AiEngineDiagramSection onNavigate={onNavigate} />
      <AdaptiveCareerLoopSection />
      <DashboardPreviewSection />
      <WhyAptivoSection onNavigate={onNavigate} />
      <HomeCtaSection onNavigate={onNavigate} onOpenWaitlist={() => onOpenWaitlist()} />
    </div>
  );
};
