import React, { useState } from 'react';
import { AptivoLogo } from '../common/AptivoLogo';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, defaultRole = 'Student' }) => {
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          role,
          goal
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to join waitlist:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setGoal('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Waitlist Priority Confirmed
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Welcome, <span className="text-white font-medium">{name}</span>. Your priority access invitation for the <span className="text-[#8AA0FF] font-medium">{role}</span> cohort has been sent to <span className="text-white">{email}</span>.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-3">
                <AptivoLogo variant="lockup" size="sm" glow={true} />
              </div>
              <div className="text-xs font-medium text-[#8AA0FF] uppercase tracking-wider">
                Early Access
              </div>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                Join the Aptivo AI Waitlist
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Be the first to build your career on adaptive intelligence infrastructure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Select Your Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Student', 'Job Seeker', 'Company', 'College'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center ${
                        role === r
                          ? 'bg-[#4C6FFF] border-transparent text-white shadow-sm'
                          : 'bg-[#080B14] border-white/[0.06] text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              {/* Target Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Primary Target Role or Focus
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-Stack Engineer, AI Systems, Talent Hiring"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md shadow-[#4C6FFF]/20"
                >
                  {isSubmitting ? 'Securing Access...' : 'Request Priority Access'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                Zero spam policy · Early cohort invitations active
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
