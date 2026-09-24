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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Sign-In Link Sent
            </h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
              We sent a secure login link to <span className="text-white font-medium">{email}</span>. Click the link to access your Aptivo AI workspace.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Done
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
                Workspace Access
              </div>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                Log In to Aptivo AI
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Access your career intelligence dashboard or candidate pipeline.
              </p>
            </div>

            {/* SSO buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setLoading(false); setSent(true); setEmail('developer@github.com'); }, 400);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#121626] hover:bg-[#181D32] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center justify-center gap-2.5 transition-colors"
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
                className="w-full py-2.5 px-4 rounded-lg bg-[#121626] hover:bg-[#181D32] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center justify-center gap-2.5 transition-colors"
              >
                <span className="font-bold text-[#4C6FFF]">G</span>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
              <span className="text-[11px] text-slate-500">or with email</span>
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com or name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md shadow-[#4C6FFF]/20"
                >
                  {loading ? 'Authenticating...' : 'Send Login Link'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
