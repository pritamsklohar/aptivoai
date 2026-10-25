import React from 'react';
import { PageId } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  Database, 
  ShieldCheck, 
  GitBranch, 
  Layers, 
  Sparkles,
  Bot,
  Activity
} from 'lucide-react';

interface CustomAiSoftwarePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const CustomAiSoftwarePage: React.FC<CustomAiSoftwarePageProps> = ({ onNavigate }) => {
  const inclusions = [
    {
      title: 'Autonomous LLM Agent Architectures',
      desc: 'Multi-step reasoning agents capable of querying databases, calling internal APIs, and resolving operational tasks autonomously.',
    },
    {
      title: 'Intelligent Document & Data Ingestion',
      desc: 'Automated extraction, normalization, and vectorization of PDFs, invoices, spreadsheets, and semi-structured documents.',
    },
    {
      title: 'Custom Business Dashboards & Portals',
      desc: 'Bespoke internal administrative interfaces and client portals built with React, Node.js, and secure role-based access control.',
    },
    {
      title: 'Event-Driven Workflow Automation',
      desc: 'Real-time webhook handlers, queue workers (Redis/BullMQ), and asynchronous pipelines that connect your existing business tools.',
    },
    {
      title: 'Enterprise API & Database Engineering',
      desc: 'Production-ready REST & GraphQL endpoints, PostgreSQL schema modeling, ACID transaction guarantees, and Redis caching.',
    },
    {
      title: 'Zero Data Leakage & Security',
      desc: 'Isolated tenant credentials, strict API key encryption, and zero model training on your confidential proprietary enterprise data.',
    },
  ];

  const whoItSuits = [
    {
      title: 'Operations-Heavy Enterprises',
      desc: 'Organizations spending hundreds of human hours every week on manual copy-pasting, data validation, and customer triage.',
    },
    {
      title: 'SaaS & Tech Companies',
      desc: 'Software products looking to rapidly embed intelligent AI capabilities and autonomous workflows into their existing application.',
    },
    {
      title: 'Logistics, Finance & Legal',
      desc: 'High-compliance sectors requiring deterministic data extraction, automated document summarization, and audit trails.',
    },
    {
      title: 'Fast-Scaling Agencies',
      desc: 'Service businesses looking to automate client onboarding, reporting generation, and project management tasks.',
    },
  ];

  const useCases = [
    {
      title: 'Autonomous Inbound Customer Triage',
      summary: 'An intelligent AI support engine that classifies incoming client requests, resolves tier-1 questions via knowledge base search, and routes edge cases to senior staff.',
    },
    {
      title: 'Intelligent Document Processing Pipeline',
      summary: 'Ingests complex multi-page contracts and supplier invoices, extracts critical line items with high precision, and pushes structured data directly into accounting ERPs.',
    },
    {
      title: 'Bespoke Executive Intelligence Dashboard',
      summary: 'A unified single-pane-of-glass platform aggregating live metrics from payment gateways, database clusters, and CRM pipelines with natural language querying.',
    },
    {
      title: 'Automated Compliance & Content Review',
      summary: 'Scans published digital assets and marketing copy against brand guidelines and regulatory constraints before public deployment.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        
        {/* HERO */}
        <section className="text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Cpu className="w-3.5 h-3.5 text-accent-blue" />
            <span>Services · Custom AI Software & Automation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display text-ink tracking-tight leading-[1.12]">
            Custom <span className="text-accent-blue">AI Software</span> & Workflow Automation.
          </h1>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto font-normal leading-relaxed">
            Eliminate repetitive operational work. We build autonomous agent pipelines, internal tools, and custom software tailored to your company's workflows.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
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
              <span>Our Delivery Process</span>
            </button>
          </div>
        </section>

        {/* WHAT IS INCLUDED */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Technical Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              What Is Included
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Modern AI toolchains engineered with enterprise security and production reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {inclusions.map((item, idx) => (
              <div key={idx} className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient hover:shadow-ambient-lg transition-all space-y-3">
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
        <section className="glass-card rounded-[32px] border border-border/80 p-8 sm:p-12 shadow-ambient space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft/90 px-3.5 py-1.5 rounded-full inline-block border border-accent-blue/20">
              Ideal Fit
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Who It Suits
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Built for businesses ready to scale capacity without linear headcount expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whoItSuits.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border/70 p-6 sm:p-8 space-y-3 shadow-xs">
                <div className="flex items-center gap-2">
                  <Bot className="w-4 h-4 text-accent-blue" />
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
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft/90 px-3.5 py-1.5 rounded-full inline-block border border-accent-blue/20">
              High-Impact Automation
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink">
              Example Use Cases
            </h2>
            <p className="text-sm sm:text-base text-muted">
              Real-world architectures we deploy for business clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => (
              <div key={idx} className="glass-card rounded-[24px] border border-border/80 p-8 shadow-ambient hover:shadow-ambient-lg transition-all space-y-3">
                <h3 className="text-xl font-bold font-display text-ink">{uc.title}</h3>
                <p className="text-sm text-muted leading-relaxed font-normal">{uc.summary}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="glass-card rounded-[32px] border border-border/80 p-10 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-ambient">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-ink tracking-tight">
              Automate your business bottlenecks today.
            </h2>
            <p className="text-sm sm:text-base text-muted font-normal leading-relaxed">
              Describe the workflows, data pipelines, or software you want built. Receive a technical evaluation and custom quote within 1 business day.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('services-quote')}
                className="px-8 py-4 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Custom Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};
