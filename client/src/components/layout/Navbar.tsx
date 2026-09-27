import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../../types';
import { NAV_ITEMS, MEGA_MENUS } from '../../data/navigation';
import { AptivoLogo } from '../common/AptivoLogo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenWaitlist,
  onOpenLogin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key?: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    if (key && MEGA_MENUS[key]) {
      setActiveMenu(key);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  const handleMenuClick = (id: PageId) => {
    onNavigate(id);
    setActiveMenu(null);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-sm py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <button
            onClick={() => handleMenuClick('home')}
            className="flex items-center text-left group focus:outline-none cursor-pointer"
            aria-label="Aptivo AI Home"
          >
            <AptivoLogo variant="lockup" size="md" glow={false} className="group-hover:opacity-80 transition-opacity" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isCurrent = currentPage === item.id;
              const hasMenu = !!item.menuKey;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.menuKey)}
                >
                  <button
                    onClick={() => handleMenuClick(item.id)}
                    className={`px-4 py-2 text-sm font-semibold rounded-full flex items-center gap-1.5 transition-colors ${
                      isCurrent
                        ? 'text-ink bg-surface-2'
                        : 'text-ink/70 hover:text-ink hover:bg-surface'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === item.menuKey ? 'rotate-180 text-accent-blue' : 'text-muted'
                        }`}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenWaitlist()}
              className="px-6 py-2.5 text-sm font-bold text-white bg-accent-blue hover:bg-accent-blue/90 rounded-full shadow-sm hover:shadow-accent-blue/20 transition-all flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenWaitlist()}
              className="sm:hidden px-4 py-1.5 text-xs font-semibold text-white bg-accent-blue rounded-full"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted hover:text-ink rounded-full bg-surface-2 transition-colors border border-border"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu Dropdown Container */}
      {activeMenu && MEGA_MENUS[activeMenu] && (
        <div
          className="absolute top-full left-0 right-0 z-30 pt-2"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="rounded-[24px] border border-border bg-white/95 backdrop-blur-xl p-8 shadow-xl shadow-black/5 grid grid-cols-1 md:grid-cols-2 gap-8">
              {MEGA_MENUS[activeMenu].map((group, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="text-xs font-bold tracking-wider text-accent-blue uppercase border-b border-border pb-2">
                    {group.title}
                  </div>
                  <div className="space-y-2">
                    {group.links.map((link) => (
                      <button
                        key={link.pageId + link.title}
                        onClick={() => handleMenuClick(link.pageId)}
                        className="w-full p-3 rounded-[20px] text-left hover:bg-surface-2 transition-colors group flex items-start justify-between border border-transparent hover:border-border"
                      >
                        <div>
                          <div className="text-sm font-bold text-ink group-hover:text-accent-blue transition-colors">
                            {link.title}
                          </div>
                          <div className="text-xs text-muted mt-1 font-medium leading-relaxed">
                            {link.desc}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-border overflow-y-auto p-6 space-y-6">
          <div className="space-y-2">
            <div className="text-xs font-bold tracking-wider text-accent-blue uppercase pb-2">
              MAIN SECTIONS
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full py-3 px-4 rounded-2xl text-left text-sm font-bold transition-colors ${
                  currentPage === item.id
                    ? 'bg-accent-blue-soft text-accent-blue border border-accent-blue/20'
                    : 'text-ink/80 hover:text-ink hover:bg-surface border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Specialized Routes */}
          <div className="space-y-2 pt-4 border-t border-border">
            <div className="text-xs font-bold tracking-wider text-accent-blue uppercase pb-2">
              SPECIALIZED PATHWAYS
            </div>
            <button
              onClick={() => handleMenuClick('students')}
              className="w-full py-2.5 px-4 rounded-2xl text-left text-sm font-semibold text-ink/70 hover:text-ink hover:bg-surface transition-colors"
            >
              Students & Undergrads
            </button>
            <button
              onClick={() => handleMenuClick('job-seekers')}
              className="w-full py-2.5 px-4 rounded-2xl text-left text-sm font-semibold text-ink/70 hover:text-ink hover:bg-surface transition-colors"
            >
              Job Seekers & Lateral Transition
            </button>
            <button
              onClick={() => handleMenuClick('hr-industry')}
              className="w-full py-2.5 px-4 rounded-2xl text-left text-sm font-semibold text-ink/70 hover:text-ink hover:bg-surface transition-colors"
            >
              HR, Talent Teams & Industry
            </button>
            <button
              onClick={() => handleMenuClick('careers')}
              className="w-full py-2.5 px-4 rounded-2xl text-left text-sm font-semibold text-ink/70 hover:text-ink hover:bg-surface transition-colors"
            >
              We're Hiring (Careers)
            </button>
            <button
              onClick={() => handleMenuClick('contact')}
              className="w-full py-2.5 px-4 rounded-2xl text-left text-sm font-semibold text-ink/70 hover:text-ink hover:bg-surface transition-colors"
            >
              Contact & Partnerships
            </button>
          </div>

          <div className="pt-6 border-t border-border space-y-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenWaitlist();
              }}
              className="w-full py-3.5 rounded-full bg-accent-blue text-white text-sm font-bold shadow-sm"
            >
              Join Early Access Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
