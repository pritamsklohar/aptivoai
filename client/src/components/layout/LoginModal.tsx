import React, { useState } from 'react';
import { AptivoLogo } from '../common/AptivoLogo';
import { X, CheckCircle2, ArrowRight, Code } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  };

  const handleReset = () => {
    setSent(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-[24px] border border-border bg-white p-6 sm:p-8 shadow-2xl text-ink space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-muted hover:text-ink rounded-full hover:bg-surface-2 transition-colors border border-transparent hover:border-border"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-ink">
              Sign-In Link Sent
            </h3>
            <p className="text-sm text-ink/80 max-w-xs mx-auto font-medium leading-relaxed">
              We sent a secure login link to <span className="text-ink font-bold">{email}</span>. Click the link to access your Aptivo AI workspace.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-surface-2 border border-border text-sm font-semibold text-ink hover:bg-border transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <AptivoLogo variant="lockup" size="sm" glow={false} />
              </div>
              <div className="text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft px-3 py-1 rounded-full inline-block border border-accent-blue/20">
                Workspace Access
              </div>
              <h2 className="text-2xl font-bold font-display text-ink mt-3">
                Log In to Aptivo AI
              </h2>
              <p className="text-sm font-medium text-muted mt-1.5">
                Access your career intelligence dashboard or candidate pipeline.
              </p>
            </div>

            {/* SSO buttons */}
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setLoading(false); setSent(true); setEmail('developer@github.com'); }, 400);
                }}
                className="w-full py-3 px-4 rounded-full bg-surface border border-border hover:bg-surface-2 text-sm font-semibold text-ink flex items-center justify-center gap-2.5 transition-colors shadow-sm"
              >
                <Code className="w-4 h-4" />
                <span>Continue with GitHub</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setLoading(false); setSent(true); setEmail('enterprise@work.com'); }, 400);
                }}
                className="w-full py-3 px-4 rounded-full bg-surface border border-border hover:bg-surface-2 text-sm font-semibold text-ink flex items-center justify-center gap-2.5 transition-colors shadow-sm"
              >
                <span className="font-bold text-accent-blue text-lg leading-none">G</span>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="flex items-center gap-3 my-4">
              <div className="h-[1px] flex-1 bg-border" />
              <span className="text-xs font-bold text-muted uppercase tracking-wider">or with email</span>
              <div className="h-[1px] flex-1 bg-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold text-ink/80">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com or name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-sm"
                >
                  {loading ? 'Authenticating...' : 'Send Login Link'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
