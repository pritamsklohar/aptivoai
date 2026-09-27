import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ShieldCheck, Building, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [roleType, setRoleType] = useState<string>("Company");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleOptions = [
    "Student",
    "Job Seeker",
    "Company",
    "College",
    "Partnership",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization: org,
          message,
          type: roleType
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-orange tracking-wider uppercase">
          Contact & Partnerships
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Let's build the <span className="text-accent-blue">future</span> of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Whether you're exploring enterprise pilot deployments, academic partnerships, or personalized career intelligence, our team is ready.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Send an Inquiry" targetId="contact-form-section" />
      </section>

      {/* Form & Info Dual Column */}
      <section id="contact-form-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-surface shadow-sm space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-display text-ink">
                  Get in Touch
                </h3>
                <p className="text-sm text-muted mt-2 font-medium leading-relaxed">
                  Our core team responds within one business day for enterprise and institutional inquiries.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-[20px] bg-white border border-border shadow-sm space-y-1.5">
                  <div className="text-xs text-accent-blue font-bold uppercase tracking-wider">Enterprise & Partnerships</div>
                  <div className="text-ink font-bold">enterprise@aptivo.ai</div>
                </div>

                <div className="p-4 rounded-[20px] bg-white border border-border shadow-sm space-y-1.5">
                  <div className="text-xs text-accent-blue font-bold uppercase tracking-wider">Campus & Institutional Pilots</div>
                  <div className="text-ink font-bold">universities@aptivo.ai</div>
                </div>

                <div className="p-4 rounded-[20px] bg-white border border-border shadow-sm space-y-1.5">
                  <div className="text-xs text-accent-blue font-bold uppercase tracking-wider">Founder & Executive Office</div>
                  <div className="text-ink font-bold">pritam@aptivo.ai</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border space-y-3 text-sm text-muted font-medium">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  <span>SOC2 Type II & GDPR Compliant Infrastructure</span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-5 h-5 text-accent-blue" />
                  <span>Aptivo AI Inc. · Global & Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[24px] border border-border bg-white shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-ink">
                    Message Received
                  </h3>
                  <p className="text-sm text-ink/80 max-w-sm mx-auto font-medium leading-relaxed">
                    Thank you, {name || 'for reaching out'}. Our engineering team has received your communication and will follow up within one business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                      }}
                      className="px-6 py-2.5 rounded-full bg-surface-2 border border-border text-sm font-semibold text-ink hover:bg-border transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-ink/80">I am inquiring as a:</label>
                    <div className="flex flex-wrap gap-2">
                      {roleOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setRoleType(opt)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                            roleType === opt
                              ? 'bg-accent-blue text-white shadow-sm'
                              : 'bg-surface text-muted border border-border hover:text-ink hover:bg-surface-2'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/80">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-ink/80">Work Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/80">Organization or Institution</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Company, University, or Independent"
                      className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-ink/80">Message / Inquiry Details</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your team, timeline, or engineering goals..."
                      className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-bold tracking-wide transition-all shadow-sm disabled:opacity-50"
                    >
                      {loading ? 'Sending Inquiry...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
