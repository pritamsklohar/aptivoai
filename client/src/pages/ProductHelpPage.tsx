import React, { useState, useMemo } from 'react';
import { PageId } from '../types';
import { Search, ChevronDown, HelpCircle, ArrowRight, MessageSquare, BookOpen, Layers } from 'lucide-react';

interface ProductHelpPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

interface FaqItem {
  category: string;
  q: string;
  a: string;
}

export const ProductHelpPage: React.FC<ProductHelpPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = ['All', 'Roadmap Engine', 'Projects & Code', 'Readiness Score', 'Account & Waitlist'];

  const allFaqs: FaqItem[] = [
    {
      category: 'Roadmap Engine',
      q: 'How does the AI Roadmap Engine know what skills I need?',
      a: 'The engine cross-references your selected target role and company tier against an ontology of 4,800+ skill nodes. It evaluates current hiring requirements, prerequisite dependencies, and your initial baseline diagnostic to build a customized, step-by-step path.',
    },
    {
      category: 'Roadmap Engine',
      q: 'Can I change my target role or company later?',
      a: 'Yes. You can reconfigure your target role or company tier at any time from your platform dashboard. The AI Roadmap Engine will recalculate your trajectory, preserving completed shared foundation nodes while swapping specialized topics.',
    },
    {
      category: 'Roadmap Engine',
      q: 'How much time do I need to commit each week?',
      a: 'The roadmap engine allows you to configure your weekly availability—from 10 hours/week (casual/semester pace) to 40 hours/week (intensive sprint). The timeline dynamically scales to fit your schedule.',
    },
    {
      category: 'Projects & Code',
      q: 'What is AST code telemetry and how does it review my project?',
      a: 'Abstract Syntax Tree (AST) analysis parses your GitHub source code into syntactic structures to verify architectural standards, modular design, error handling, and test coverage—without relying on superficial line counts.',
    },
    {
      category: 'Projects & Code',
      q: 'Are these projects generic tutorial clones?',
      a: 'No. Every project in Aptivo Careers is architected as an authentic production system (e.g. distributed webhooks, real-time WebSockets, ACID compliant database schemas) with real commit branches and continuous integration workflows.',
    },
    {
      category: 'Readiness Score',
      q: 'How is the 100-point Readiness Score calculated?',
      a: 'The Readiness Score is an objective formula composed of three pillars: Roadmap Progress (50%), Production Projects (30%), and Resume Optimization (20%). Each score is derived from verified code commits and passed benchmarks.',
    },
    {
      category: 'Readiness Score',
      q: 'Is my Readiness Score public to everyone?',
      a: 'By default, your Readiness Score is only visible to you. You can choose to generate a public portfolio link to share with recruiters or embed on your resume/LinkedIn profile.',
    },
    {
      category: 'Account & Waitlist',
      q: 'When will the Student Portal launch?',
      a: 'The Student Portal is launching first to early access waitlist members in phased cohorts. Joining the waitlist guarantees priority onboarding and grandfathered pricing.',
    },
    {
      category: 'Account & Waitlist',
      q: 'How do I submit feedback or request a feature?',
      a: 'You can submit feedback directly via our Product Contact & Support form or join our community discussions.',
    },
  ];

  const filteredFaqs = useMemo(() => {
    return allFaqs.filter((faq) => {
      const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
      const matchesQuery = 
        faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* HEADER */}
        <section className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <HelpCircle className="w-3.5 h-3.5 text-accent-blue" />
            <span>Product Help Center</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold font-display text-ink tracking-tight">
            How can we <span className="text-accent-blue">help you</span> today?
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto font-normal leading-relaxed">
            Search our comprehensive knowledge base for answers on Aptivo Careers, roadmaps, telemetry, and scoring.
          </p>

          {/* SEARCH INPUT */}
          <div className="pt-4 max-w-2xl mx-auto relative">
            <Search className="w-5 h-5 text-muted absolute left-5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics (e.g., Readiness Score, AST analysis, roadmap)..."
              className="w-full pl-13 pr-5 py-4 rounded-full bg-surface border border-border text-ink text-sm sm:text-base placeholder:text-muted focus:outline-none focus:border-accent-blue shadow-sm transition-all"
            />
          </div>

          {/* CATEGORY CHIPS */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-accent-blue text-white shadow-sm'
                    : 'bg-surface-2 text-ink/70 hover:text-ink hover:bg-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* FAQ ACCORDION LIST */}
        <section className="space-y-4">
          <div className="flex items-center justify-between px-2 text-xs text-muted font-medium">
            <span>Showing {filteredFaqs.length} results</span>
            {selectedCategory !== 'All' && <span>Category: {selectedCategory}</span>}
          </div>

          {filteredFaqs.length > 0 ? (
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-surface overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-ink text-sm sm:text-base cursor-pointer"
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
          ) : (
            <div className="p-12 text-center bg-surface rounded-2xl border border-border space-y-3">
              <p className="text-sm font-semibold text-ink">No answers match your search term.</p>
              <p className="text-xs text-muted">Try using different keywords or contact our product support team directly.</p>
            </div>
          )}
        </section>

        {/* STILL NEED HELP */}
        <section className="bg-surface rounded-[24px] border border-border p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-display text-ink">
            Can't find what you're looking for?
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            Our product team is on standby to assist with waitlist inquiries, technical issues, and roadmap questions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('product-contact')}
              className="px-6 py-3 rounded-full bg-accent-blue text-white text-xs sm:text-sm font-semibold hover:bg-accent-blue/90 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Product Support</span>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
