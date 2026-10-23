import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Layout, 
  Zap, 
  Smartphone, 
  Search, 
  ShieldCheck, 
  Sparkles,
  Users,
  Briefcase
} from 'lucide-react';

interface WebsiteSolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const WebsiteSolutionsPage: React.FC<WebsiteSolutionsPageProps> = ({ onNavigate }) => {
  const inclusions = [
    {
      title: 'Custom React & Next.js Architecture',
      desc: 'Clean, modular, enterprise-grade frontend codebases built without bloated third-party templates.',
    },
    {
      title: 'Mobile-First Responsive Layouts',
      desc: 'Pixel-perfect rendering across mobile phones, tablets, laptops, and ultra-wide displays.',
    },
    {
      title: 'Conversion UX & Micro-Animations',
      desc: 'Purpose-driven visual hierarchies, smooth hover effects, and engaging micro-interactions that captivate visitors.',
    },
    {
      title: 'Technical SEO & Metadata Standards',
      desc: 'Automated sitemaps, Open Graph social tags, semantic HTML5, and structured JSON-LD schemas.',
    },
    {
      title: 'Performance & Lighthouse 95+',
      desc: 'Sub-second initial loads, asset minification, optimized responsive images, and zero layout shifts.',
    },
    {
      title: 'Zero-Maintenance Deployment',
      desc: 'Continuous integration and automated deployments on Vercel or AWS with SSL and global edge CDN caching.',
    },
  ];

  const whoItSuits = [
    {
      title: 'High-Growth Tech Startups',
      desc: 'Founders who need an exceptional, world-class web presence to build investor confidence and launch their product.',
    },
    {
      title: 'B2B & Enterprise Services',
      desc: 'Established companies upgrading legacy sites into sleek, modern platforms that drive qualified inbound leads.',
    },
    {
      title: 'Product & SaaS Teams',
      desc: 'Teams needing dedicated conversion-optimized landing pages, interactive product demos, or documentation hubs.',
    },
    {
      title: 'Agencies & Creators',
      desc: 'Businesses requiring distinctive digital platforms that stand out in crowded markets.',
    },
  ];

  const useCases = [
    {
      title: 'Corporate Flagship Platforms',
      summary: 'Complete brand web architecture with multi-page navigation, company storytelling, and inbound contact routing.',
    },
    {
      title: 'SaaS Product Launch Hubs',
      summary: 'High-converting product landing pages featuring interactive mockups, feature breakdowns, and waitlist funnels.',
    },
    {
      title: 'Interactive Web Tools & Portals',
      summary: 'Dynamic client dashboards, quote generators, self-service portals, and searchable knowledge bases.',
    },
    {
      title: 'Rebrand & Tech Modernization',
      summary: 'Migrating outdated WordPress or static sites onto blazingly fast modern React and edge architectures.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Globe className="w-3.5 h-3.5 text-accent-blue" />
            <span>Services · Website Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-ink tracking-tight leading-[1.12]">
            High-Performance <span className="text-accent-blue">Websites</span> Engineered for Growth.
          </h1>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            We build lightning-fast, beautifully designed web applications and corporate digital platforms tailored to your business goals.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('services-quote')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Website Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services-process')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-2 hover:bg-border border border-border text-ink font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>See Our Build Process</span>
            </button>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Comprehensive Delivery
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              What Is Included
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Every website we deliver is engineered with end-to-end precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {inclusions.map((item, idx) => (
              <div key={idx} className="bg-surface rounded-[24px] border border-border p-8 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-accent-blue-soft text-accent-blue flex items-center justify-center font-bold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold font-display text-ink">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WHO IT SUITS */}
        <section className="bg-surface rounded-[32px] border border-border p-8 sm:p-12 shadow-sm space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Target Audience
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Who It Suits
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Designed for companies prioritizing digital prestige and technical reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoItSuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border p-6 sm:p-8 space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-accent-blue" />
                  <h3 className="text-lg font-bold font-display text-ink">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXAMPLE USE CASES */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Proven Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Example Use Cases
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Tailored implementations across core business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => (
              <div key={idx} className="bg-surface rounded-[24px] border border-border p-8 shadow-sm space-y-3">
                <h3 className="text-xl font-bold font-display text-ink">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-normal">{uc.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="bg-surface rounded-[32px] border border-border p-10 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-ink tracking-tight">
              Ready to elevate your web presence?
            </h2>
            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              Share your project scope, timeline, and design aspirations. We will deliver a comprehensive proposal and estimate within 24 hours.
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
