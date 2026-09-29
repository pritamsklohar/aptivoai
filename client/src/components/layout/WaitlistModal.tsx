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
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/waitlist`, {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-[24px] border border-border bg-white p-5 sm:p-8 shadow-2xl text-ink space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 text-muted hover:text-ink rounded-full hover:bg-surface-2 transition-colors border border-transparent hover:border-border"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 sm:py-10 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-ink">
              Waitlist Priority Confirmed
            </h3>
            <p className="text-sm text-ink/80 max-w-sm mx-auto font-medium leading-relaxed">
              Welcome, <span className="text-ink font-bold">{name}</span>. Your priority access invitation for the <span className="text-accent-blue font-bold">{role}</span> cohort has been sent to <span className="text-ink font-bold">{email}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-surface-2 border border-border text-sm font-semibold text-ink hover:bg-border transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-3 sm:mb-4">
                <AptivoLogo variant="lockup" size="sm" glow={false} />
              </div>
              <div className="text-[10px] sm:text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft px-3 py-1 rounded-full inline-block border border-accent-blue/20">
                Early Access
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-display text-ink mt-2 sm:mt-3">
                Join the Aptivo AI Waitlist
              </h2>
              <p className="text-xs sm:text-sm font-medium text-muted mt-1.5">
                Be the first to build your career on adaptive intelligence infrastructure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile Selector */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-ink/80">
                  Select Your Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {['Student', 'Job Seeker', 'Company', 'College'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`px-2 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold rounded-[12px] sm:rounded-[16px] transition-all text-center ${
                        role === r
                          ? 'bg-accent-blue text-white shadow-sm border border-transparent'
                          : 'bg-surface border border-border text-muted hover:text-ink hover:bg-surface-2'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-ink/80">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-[16px] sm:rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-ink/80">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-[16px] sm:rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                />
              </div>

              {/* Target Role */}
              <div className="space-y-1.5">
                <label className="text-xs sm:text-sm font-bold text-ink/80">
                  Primary Target Role or Focus
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-Stack Engineer, AI Systems, Talent Hiring"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-4 py-2.5 sm:py-3 rounded-[16px] sm:rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 sm:py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? 'Securing Access...' : 'Request Priority Access'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[10px] sm:text-xs font-medium text-muted text-center pt-1 sm:pt-2">
                Zero spam policy · Early cohort invitations active
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
