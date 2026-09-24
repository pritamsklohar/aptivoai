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
      const response = await fetch('/api/contact', {
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
    <div className="pt-32 pb-24 space-y-20 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Contact & Partnerships
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Let's build the future of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
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
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Get in Touch
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Our core team responds within one business day for enterprise and institutional inquiries.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Enterprise & Partnerships</div>
                  <div className="text-white font-medium">enterprise@aptivo.ai</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Campus & Institutional Pilots</div>
                  <div className="text-white font-medium">universities@aptivo.ai</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Founder & Executive Office</div>
                  <div className="text-white font-medium">pritam@aptivo.ai</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>SOC2 Type II & GDPR Compliant Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-500" />
                  <span>Aptivo AI Inc. · Global & Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Message Received
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {name || 'for reaching out'}. Our engineering team has received your communication and will follow up within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300">I am inquiring as a:</label>
                    <div className="flex flex-wrap gap-2">
                      {roleOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setRoleType(opt)}
                          className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                            roleType === opt
                              ? 'bg-[#4C6FFF] text-white font-medium'
                              : 'bg-[#080B14] text-slate-400 border border-white/[0.04] hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Work Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Organization or Institution</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Company, University, or Independent"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message / Inquiry Details</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your team, timeline, or engineering goals..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#4C6FFF]/20 disabled:opacity-50"
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
