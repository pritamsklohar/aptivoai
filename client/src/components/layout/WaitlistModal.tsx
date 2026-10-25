import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, GraduationCap, Briefcase, Building2, University } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

const ROLES = [
  { label: 'Student', icon: GraduationCap },
  { label: 'Job Seeker', icon: Briefcase },
  { label: 'Company', icon: Building2 },
  { label: 'College', icon: University },
];

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
        body: JSON.stringify({ name, email, role, goal }),
      });
      if (response.ok) setSubmitted(true);
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

  /* ── Shared input style ── */
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '11px 15px',
    borderRadius: '12px',
    background: '#FFFFFF',
    border: '1.5px solid #E4E6EB',
    color: '#111318',
    fontSize: '13.5px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  };

  const inputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#3B5BFF';
    e.target.style.boxShadow = '0 0 0 3px rgba(59,91,255,0.10)';
    e.target.style.background = '#fff';
  };
  const inputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = '#E4E6EB';
    e.target.style.boxShadow = 'none';
    e.target.style.background = '#FFFFFF';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-modal-backdrop"
      style={{ background: 'rgba(17,19,24,0.45)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <div
        className="animate-modal-card"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '448px',
          maxHeight: '92vh',
          overflowY: 'auto',
          borderRadius: '24px',
          background: '#ffffff',
          border: '1px solid #E4E6EB',
          boxShadow: '0 24px 60px rgba(0,0,0,0.14), 0 4px 16px rgba(0,0,0,0.06)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle top accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
          background: 'linear-gradient(90deg, #3B5BFF 0%, #7c3aed 50%, #F5941C 100%)',
          borderRadius: '24px 24px 0 0',
        }} />

        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '16px', right: '16px', zIndex: 10,
            width: '32px', height: '32px', borderRadius: '50%',
            background: '#F8F9FB', border: '1px solid #E4E6EB',
            color: '#6B7280', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            transition: 'transform 120ms var(--ease-out), background-color 150ms var(--ease-out), color 150ms var(--ease-out)',
          }}
          aria-label="Close modal"
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#EDEFF3';
            (e.currentTarget as HTMLButtonElement).style.color = '#111318';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#F8F9FB';
            (e.currentTarget as HTMLButtonElement).style.color = '#6B7280';
          }}
        >
          <X style={{ width: '15px', height: '15px' }} />
        </button>

        <div style={{ padding: '32px 32px 28px' }}>
          {submitted ? (
            /* ── Success State ── */
            <div style={{ textAlign: 'center', padding: '20px 0 8px' }}>
              <div style={{
                width: '68px', height: '68px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                border: '1px solid #6ee7b7',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 18px',
              }}>
                <CheckCircle2 style={{ width: '30px', height: '30px', color: '#059669' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#111318', marginBottom: '10px', letterSpacing: '-0.3px' }}>
                You're on the list! 🎉
              </h3>
              <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.7, maxWidth: '300px', margin: '0 auto 24px' }}>
                Priority access for the{' '}
                <span style={{ color: '#3B5BFF', fontWeight: 700 }}>{role}</span>{' '}
                cohort is reserved for{' '}
                <span style={{ color: '#111318', fontWeight: 600 }}>{email}</span>.
              </p>
              <button
                onClick={handleReset}
                style={{
                  padding: '10px 28px', borderRadius: '50px',
                  background: '#FFFFFF', border: '1px solid #E4E6EB',
                  color: '#111318', fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* ── Header ── */}
              <div style={{ marginBottom: '22px' }}>
                {/* Badge */}
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '4px 11px', borderRadius: '50px', marginBottom: '14px',
                  background: '#E7ECFF', border: '1px solid rgba(59,91,255,0.2)',
                }}>
                  <Sparkles style={{ width: '11px', height: '11px', color: '#3B5BFF' }} />
                  <span style={{ fontSize: '10px', fontWeight: 800, color: '#3B5BFF', letterSpacing: '0.9px', textTransform: 'uppercase' }}>
                    Early Access
                  </span>
                </div>

                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#111318', letterSpacing: '-0.4px', lineHeight: 1.2, marginBottom: '7px' }}>
                  Join the Aptivo Waitlist
                </h2>
                <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6, margin: 0 }}>
                  Be first to experience AI-powered career infrastructure.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

                {/* ── Role Selector ── */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#6B7280', letterSpacing: '0.7px', textTransform: 'uppercase', marginBottom: '9px' }}>
                    I am a
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                    {ROLES.map(({ label, icon: Icon }) => {
                      const isActive = role === label;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => setRole(label)}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px',
                            padding: '10px 6px', borderRadius: '12px', cursor: 'pointer',
                            transition: 'transform 120ms cubic-bezier(0.23, 1, 0.32, 1), background-color 150ms, border-color 150ms, box-shadow 150ms',
                            border: isActive ? '1.5px solid #3B5BFF' : '1.5px solid #E4E6EB',
                            background: isActive ? '#E7ECFF' : '#FFFFFF',
                            color: isActive ? '#3B5BFF' : '#6B7280',
                            boxShadow: isActive ? '0 0 0 3px rgba(59,91,255,0.08)' : 'none',
                            fontFamily: 'inherit',
                          }}
                        >
                          <Icon style={{ width: '16px', height: '16px' }} />
                          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1px', whiteSpace: 'nowrap' }}>
                            {label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* ── Divider ── */}
                <div style={{ height: '1px', background: '#E4E6EB', margin: '0 -4px' }} />

                {/* ── Full Name ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#111318' }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pritam Lohar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                {/* ── Email ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#111318' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                {/* ── Goal (optional) ── */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '12px', fontWeight: 700, color: '#111318', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Target Role / Focus
                    <span style={{ fontSize: '11px', fontWeight: 400, color: '#6B7280' }}>(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Full-Stack Engineer, AI Systems…"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    style={inputStyle}
                    onFocus={inputFocus}
                    onBlur={inputBlur}
                  />
                </div>

                {/* ── Submit ── */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: '50px',
                    background: isSubmitting
                      ? 'rgba(59,91,255,0.5)'
                      : 'linear-gradient(135deg, #3B5BFF 0%, #5c38d4 100%)',
                    border: 'none',
                    color: '#fff',
                    fontSize: '13.5px',
                    fontWeight: 800,
                    letterSpacing: '0.2px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'transform 120ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 150ms',
                    boxShadow: '0 6px 20px rgba(59,91,255,0.28)',
                    fontFamily: 'inherit',
                    marginTop: '2px',
                  }}
                  onMouseEnter={e => {
                    if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(59,91,255,0.38)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 6px 20px rgba(59,91,255,0.28)';
                  }}
                >
                  {isSubmitting ? 'Securing Access…' : 'Request Priority Access'}
                  <ArrowRight style={{ width: '15px', height: '15px' }} />
                </button>

                {/* ── Footnote ── */}
                <p style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center', margin: 0 }}>
                  No spam · Early cohort invitations · Cancel anytime
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
