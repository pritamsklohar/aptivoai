import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronDown, 
  Clock, 
  ArrowUpRight 
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const servicesOfferings = [
    {
      title: 'Website Solutions',
      pageId: 'services-websites' as PageId,
      badge: 'High-Impact Web',
      desc: 'Modern, high-performance web applications and corporate digital platforms engineered with clean design, SEO excellence, and responsive mobile architecture.',
      deliverables: ['Custom React / Next.js web applications', 'Responsive mobile-first interfaces', 'Headless CMS & interactive components', 'Search engine optimization & analytics'],
    },
    {
      title: 'Custom AI Software & Automation',
      pageId: 'services-custom-software' as PageId,
      badge: 'Intelligent Systems',
      desc: 'Autonomous agent pipelines, LLM-powered business software, and API integration workflows that eliminate repetitive manual operations.',
      deliverables: ['Custom LLM integrations & agent workflows', 'Automated data ingestion & processing', 'Internal business tools & client dashboards', 'Secure API connectors & cloud webhooks'],
    },
    {
      title: 'Full-Stack SaaS Architecture',
      pageId: 'services-custom-software' as PageId,
      badge: 'Scalable Systems',
      desc: 'End-to-end multi-tenant SaaS application builds from foundational database modeling to cloud deployment on AWS and Vercel.',
      deliverables: ['Multi-tenant database schema design', 'Role-based access & authentication', 'Scalable REST/WebSocket microservices', 'Automated CI/CD build pipelines'],
    },
  ];

  const whyAiAssisted = [
    {
      title: 'Accelerated Time-to-Market',
      desc: 'AI-assisted code generation and automated testing cut standard software development timelines by up to 60%, delivering functional products in weeks rather than quarters.',
    },
    {
      title: 'Rigorous Architectural Quality',
      desc: 'Every code deliverable is tested against strict typing, linting, and AST standards, ensuring enterprise maintainability and seamless extensibility.',
    },
    {
      title: 'Cost-Efficient Execution',
      desc: 'Streamlined development overhead translates directly to predictable estimates and competitive project pricing without sacrificing technical excellence.',
    },
    {
      title: '100% Client Code Ownership',
      desc: 'All source code, design assets, and deployment configurations belong entirely to you with complete IP transfer upon project completion.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Discovery Call', desc: 'Understanding your business requirements, technical parameters, and user experience objectives.' },
    { step: '02', title: 'Scope & Quote', desc: 'Clear deliverables specification with transparent milestones and fixed timeline estimates.' },
    { step: '03', title: 'AI-Assisted Build', desc: 'Rapid development sprints utilizing modern TypeScript, React, and modular backend patterns.' },
    { step: '04', title: 'Review & Revisions', desc: 'Collaborative feedback cycles and fine-tuning to ensure flawless alignment with your standards.' },
    { step: '05', title: 'Launch & Support', desc: 'Production deployment, DNS setup, security verification, and post-launch maintenance.' },
  ];

  const servicesFaqs = [
    {
      q: 'How does Aptivo AI build software faster than traditional agencies?',
      a: 'We leverage AI-assisted engineering toolchains, modular component libraries, and automated test synthesis. This eliminates repetitive boilerplate development while allowing our engineers to focus on business logic and refined user experience.',
    },
    {
      q: 'Do I own the intellectual property and code when the project finishes?',
      a: 'Yes, 100%. Upon completion of the project and milestone settlement, all repository code, intellectual property rights, and design assets are fully transferred to your company.',
    },
    {
      q: 'How do you quote client projects?',
      a: 'We evaluate the technical scope, timeline, and required integrations submitted via our "Request a Quote" form. We provide structured, milestone-based quotes with transparent scopes and no hidden costs.',
    },
    {
      q: 'What modern technologies do you build with?',
      a: 'Our primary stack includes modern TypeScript, React, Node.js, Python, PostgreSQL, Redis, Tailwind CSS, Next.js, and cloud deployments on AWS and Vercel.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span>Aptivo Services · Client Engineering</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-ink tracking-tight leading-[1.12]">
            Websites and software, <span className="text-accent-blue">built faster</span> with AI.
          </h1>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            We architect and deliver modern web platforms, custom AI software, and automated workflows for ambitious businesses.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('services-quote')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('services-process')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-surface-2 hover:bg-border border border-border text-ink font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Our Process</span>
            </button>
          </div>
        </section>

        {/* WHAT WE BUILD */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Engineering Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              What We Build
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Tailored digital solutions built to solve real operational bottlenecks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {servicesOfferings.map((service, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[28px] border border-border/80 p-8 shadow-ambient flex flex-col justify-between hover:shadow-ambient-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-blue bg-accent-blue-soft px-3 py-1 rounded-full border border-accent-blue/20">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-ink">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed font-normal">
                    {service.desc}
                  </p>
                  
                  <div className="pt-2 space-y-2.5">
                    {service.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-ink/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => onNavigate(service.pageId)}
                    className="w-full py-3 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-xs font-bold shadow-ambient transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY AI-ASSISTED */}
        <section className="glass-card rounded-[32px] border border-border/80 p-8 sm:p-14 shadow-ambient space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              The Aptivo Advantage
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Why AI-Assisted Engineering?
            </h2>
            <p className="text-sm sm:text-base text-muted">
              We combine seasoned architectural insight with cutting-edge AI acceleration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {whyAiAssisted.map((point, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border p-6 sm:p-8 space-y-3 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-accent-blue-soft text-accent-blue flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold font-display text-ink">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PROCESS SNAPSHOT */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Our 5-Step Process
            </h2>
            <p className="text-sm sm:text-base text-muted">
              From initial technical consultation to deployed production software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-border/80 p-6 shadow-ambient space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-bold font-mono text-accent-blue">{step.step}</span>
                  <h3 className="text-base font-bold font-display text-ink">{step.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onNavigate('services-process')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-accent-blue hover:text-accent-blue/80 cursor-pointer"
            >
              <span>Explore complete delivery & ownership terms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </section>

        {/* SERVICES FAQ */}
        <section className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Client FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Frequently Asked Services Questions
            </h2>
          </div>

          <div className="space-y-4">
            {servicesFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-border/80 overflow-hidden transition-all shadow-ambient"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-ink text-sm sm:text-base cursor-pointer hover:bg-surface-2/50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-accent-blue' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-muted leading-relaxed font-normal border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="glass-card rounded-[32px] border border-border/80 p-10 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-ambient">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-ink tracking-tight">
              Ready to build your next digital solution?
            </h2>
            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              Tell us about your project requirements and receive a structured technical scope and quotation within 1 business day.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('services-quote')}
                className="px-8 py-4 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white font-semibold text-sm shadow-ambient transition-all inline-flex items-center gap-2 cursor-pointer"
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
