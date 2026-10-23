import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  FileText, 
  Lock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface RequestQuotePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
}

export const RequestQuotePage: React.FC<RequestQuotePageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [business, setBusiness] = useState('');
  const [serviceType, setServiceType] = useState('Website Solutions');
  const [description, setDescription] = useState('');
  const [budgetRange, setBudgetRange] = useState('$5,000 - $15,000');
  const [timeline, setTimeline] = useState('1 Month');
  const [consent, setConsent] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    'Website Solutions',
    'Custom AI Software & Automation',
    'Full-Stack SaaS Architecture',
    'Workflow Automation & APIs',
    'Technical Architecture Consultation',
    'Other Bespoke Solution',
  ];

  const budgetOptions = [
    '< $5,000',
    '$5,000 - $15,000',
    '$15,000 - $35,000',
    '$35,000+',
    'Flexible / Scoped per milestone',
  ];

  const timelineOptions = [
    'Urgent (< 2 weeks)',
    '1 Month',
    '2–3 Months',
    'Ongoing / Flexible',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !description || !consent) return;
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          business,
          organization: business,
          serviceType,
          description,
          budgetRange,
          timeline,
          message: `[Quote Request] Service: ${serviceType} | Budget: ${budgetRange} | Timeline: ${timeline} | Details: ${description}`,
          type: 'Services Quote Request',
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 md:pt-32 bg-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* HEADER */}
        <section className="text-center space-y-4 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-blue-soft text-accent-blue text-xs font-bold uppercase tracking-wider border border-accent-blue/20">
            <FileText className="w-3.5 h-3.5 text-accent-blue" />
            <span>Client Services Inquiry</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display text-ink tracking-tight">
            Request a Project <span className="text-accent-blue">Quote</span>.
          </h1>

          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto font-normal leading-relaxed">
            Tell us about your web, software, or AI automation goals. Receive an architectural breakdown, timeline, and structured quote.
          </p>
        </section>

        {/* QUOTE FORM CONTAINER */}
        <div className="bg-surface rounded-[28px] border border-border p-8 sm:p-12 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
                Quote Request Submitted
              </h2>
              <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-ink">{name || 'there'}</strong>. We have received your project details for <strong className="text-ink">{business || 'your company'}</strong>. Our engineering leads will review your technical requirements and contact you at <span className="text-accent-blue font-semibold">{email}</span> within 1 business day.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setDescription('');
                  }}
                  className="px-6 py-2.5 rounded-full bg-surface-2 border border-border text-ink text-xs font-semibold hover:bg-border transition-all cursor-pointer"
                >
                  Submit Another Scope
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Ellis"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jordan@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                  />
                </div>
              </div>

              {/* Business Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                  Business / Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={business}
                  onChange={(e) => setBusiness(e.target.value)}
                  placeholder="Acme Technologies Inc."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Service Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Service Type
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Budget Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                    Desired Timeline
                  </label>
                  <select
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue"
                  >
                    {timelineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-ink block">
                  Project Description & Key Requirements *
                </label>
                <textarea
                  required
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline the core functionality, user flows, integrations, or challenges you need solved..."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-border text-ink text-sm focus:outline-none focus:border-accent-blue leading-relaxed"
                />
              </div>

              {/* Privacy Consent Line */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent-checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded text-accent-blue focus:ring-accent-blue"
                />
                <label htmlFor="consent-checkbox" className="text-xs text-muted leading-relaxed">
                  By submitting, you agree to our{' '}
                  <button
                    type="button"
                    onClick={() => onNavigate('privacy')}
                    className="text-accent-blue underline hover:text-accent-blue/80"
                  >
                    Privacy Policy
                  </button>{' '}
                  and allow Aptivo AI to contact you regarding your project quote.
                </label>
              </div>

              {/* Response-Time Note */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-border/60">
                <div className="flex items-center gap-2 text-xs text-muted font-medium">
                  <Clock className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Response time: We review and respond within 1 business day.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted font-medium">
                  <Lock className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>Mutual NDA protection available</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading || !consent}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-ink text-white font-semibold text-sm hover:bg-ink/90 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Submitting Scope...' : 'Submit Quote Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
