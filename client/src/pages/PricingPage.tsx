import React, { useState } from 'react';
import { PageId } from '../types';
import { Check, X, ArrowRight, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const comparisonFeatures = [
    {
      feature: 'Core Skill Roadmaps',
      free: 'Basic (Fixed paths)',
      paid: 'Full Adaptive (Dynamic recalibration)',
    },
    {
      feature: 'Production Project Architectures',
      free: '1 Starter Project',
      paid: 'Unlimited Production Projects',
    },
    {
      feature: 'AST Code Analysis & Telemetry',
      free: false,
      paid: true,
    },
    {
      feature: 'ATS-Optimized Resume Builder',
      free: 'Standard Templates',
      paid: 'Automated Vector & Metric Sync',
    },
    {
      feature: 'Readiness Score Calculation',
      free: 'Basic Estimate',
      paid: 'Full 100-Point Calibrated Index',
    },
    {
      feature: 'Public Portfolio & Heatmap',
      free: true,
      paid: true,
    },
    {
      feature: 'Company-Specific Interview Simulation',
      free: false,
      paid: true,
    },
    {
      feature: 'Direct Talent Pipeline Visibility',
      free: false,
      paid: true,
    },
    {
      feature: 'Support & Community Access',
      free: 'Community Discord',
      paid: 'Priority Mentor & Technical Support',
    },
  ];

  const billingFaqs = [
    {
      q: 'When will official subscription prices be announced?',
      a: 'Official pricing tiers will be announced upon the public launch of the Student Portal. Early access waitlist members will receive grandfathered discount pricing.',
    },
    {
      q: 'Is there a free trial for the paid plan?',
      a: 'Yes. All new accounts on the paid tier will receive a 14-day full-access trial period to experience adaptive roadmaps and AST code reviews.',
    },
    {
      q: 'Will there be university and student discounts?',
      a: 'Yes. We are dedicated to student accessibility. Verified university email addresses (.edu and international college domains) will be eligible for substantial student discounts.',
    },
    {
      q: 'Can I cancel or switch plans at any time?',
      a: 'Yes, subscriptions can be cancelled or modified at any time with a single click in your account settings. You will retain access until the end of your billing cycle.',
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* HEADER */}
        <section className="text-center max-w-3xl mx-auto space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <Sparkles className="w-3.5 h-3.5 text-accent-blue" />
            <span>SaaS Subscription Plans</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight">
            Transparent, <span className="text-accent-blue">Predictable</span> Pricing.
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto font-normal leading-relaxed">
            Invest in your engineering potential. Choose the tier that matches your career velocity.
          </p>
        </section>

        {/* PRICING CARDS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="glass-card rounded-[28px] border border-border/85 p-8 sm:p-10 shadow-ambient flex flex-col justify-between hover:shadow-ambient-lg transition-[box-shadow,transform] duration-200">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted">Foundational Tier</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink mt-1">Free Tier</h3>
                <p className="text-xs sm:text-sm text-muted mt-2">Essential career exploration for self-driven students.</p>
              </div>

              <div className="py-2.5 border-y border-border/60">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold font-display text-ink">$0</span>
                  <span className="text-xs text-muted font-medium">/ month</span>
                </div>
                <div className="text-xs text-muted mt-1">Free forever, no credit card required</div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-ink uppercase tracking-wider">What's Included:</div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Personalized baseline skill roadmap</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>1 starter production project guide</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Public portfolio page & heatmap</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Community Discord access</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={() => onOpenWaitlist('Student')}
                className="w-full py-3.5 rounded-full bg-surface-2 hover:bg-border/80 border border-border/80 text-ink text-xs sm:text-sm font-semibold transition-[transform,background-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] cursor-pointer"
              >
                Join Free Tier
              </button>
            </div>
          </div>

          {/* Paid / Pro Tier */}
          <div className="glass-card rounded-[28px] border-2 border-accent-blue/40 p-8 sm:p-10 shadow-ambient-lg flex flex-col justify-between relative overflow-hidden ring-1 ring-accent-blue/15 hover:shadow-2xl transition-[box-shadow,transform] duration-200">
            {/* Subtle top ambient glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-2xl pointer-events-none" />

            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-accent-blue text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                Full Telemetry
              </span>
            </div>

            <div className="space-y-6 relative z-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-accent-blue">Pro Tier</span>
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink mt-1">Career Pro</h3>
                <p className="text-xs sm:text-sm text-muted mt-2">Comprehensive AST analysis and dynamic AI recalibration.</p>
              </div>

              <div className="py-2.5 border-y border-border/60">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold font-display text-accent-blue">Early Access</span>
                </div>
                <div className="text-xs text-muted mt-1 font-medium">
                  Free during beta cohort · Grandfathered discounts locked in for waitlist members.
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-bold text-ink uppercase tracking-wider">Everything in Free, plus:</div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Adaptive AI engine with daily recalibration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Automated AST code review & telemetry</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>100-Point verified Readiness Score</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Company-specific interview simulation drills</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-blue shrink-0" />
                    <span>Direct talent pipeline priority routing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => onOpenWaitlist('Pro Plan')}
                className="w-full py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/95 text-white text-xs sm:text-sm font-semibold transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] shadow-ambient inner-highlight cursor-pointer"
              >
                Join Pro Waitlist
              </button>
            </div>
          </div>
        </section>

        {/* FEATURE COMPARISON TABLE */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Feature Matrix
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Detailed Plan Comparison
            </h2>
          </div>

          <div className="glass-card rounded-[28px] border border-border/80 overflow-hidden shadow-ambient">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-border/70 bg-surface-2/40">
                    <th className="py-4 px-6 font-bold text-ink">Feature</th>
                    <th className="py-4 px-6 font-bold text-ink w-1/3 text-center">Free Tier</th>
                    <th className="py-4 px-6 font-bold text-accent-blue w-1/3 text-center">Pro Tier</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-surface-2/40 transition-colors">
                      <td className="py-4 px-6 font-medium text-ink/90">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-muted">
                        {typeof row.free === 'boolean' ? (
                          row.free ? (
                            <Check className="w-4 h-4 text-accent-blue mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted/50 mx-auto" />
                          )
                        ) : (
                          row.free
                        )}
                      </td>
                      <td className="py-4 px-6 text-center text-ink font-semibold bg-accent-blue-soft/20">
                        {typeof row.paid === 'boolean' ? (
                          row.paid ? (
                            <Check className="w-4 h-4 text-accent-blue mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-muted/50 mx-auto" />
                          )
                        ) : (
                          row.paid
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* BILLING FAQ */}
        <section className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="text-xs font-bold text-accent-blue uppercase tracking-wider">
              Billing Information
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
              Frequently Asked Billing Questions
            </h2>
          </div>

          <div className="space-y-3">
            {billingFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-border/80 overflow-hidden transition-all shadow-ambient"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-ink text-xs sm:text-sm cursor-pointer hover:bg-surface-2/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-accent-blue' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-muted leading-relaxed font-normal border-t border-border/50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="glass-card rounded-[28px] border border-border/80 p-8 sm:p-12 text-center max-w-3xl mx-auto space-y-4 shadow-ambient">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-ink">
            Have questions about group or campus licensing?
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-lg mx-auto">
            Contact our product team to learn about university cohorts and computer science department deployments.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('product-contact')}
              className="px-7 py-3 rounded-full bg-accent-blue text-white text-xs sm:text-sm font-semibold hover:bg-accent-blue/90 shadow-ambient transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Contact Product Support</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
