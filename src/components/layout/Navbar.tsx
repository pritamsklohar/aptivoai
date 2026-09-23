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
          ? 'bg-[#06070B]/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/40 py-3.5'
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
            <AptivoLogo variant="lockup" size="md" glow={true} className="group-hover:opacity-95 transition-opacity" />
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
                    className={`px-3 py-2 text-xs font-medium rounded-md flex items-center gap-1.5 transition-colors ${
                      isCurrent
                        ? 'text-white bg-white/[0.05]'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                          activeMenu === item.menuKey ? 'rotate-180 text-[#8AA0FF]' : ''
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
              onClick={onOpenLogin}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              Log in
            </button>
            <button
              onClick={() => onOpenWaitlist()}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#4C6FFF] hover:bg-[#3B5BDB] rounded-lg shadow-sm hover:shadow-[#4C6FFF]/20 transition-all flex items-center gap-1.5"
            >
              <span>Join Waitlist</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenWaitlist()}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#4C6FFF] rounded-md"
            >
              Waitlist
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <div className="rounded-xl border border-white/[0.1] bg-[#0D0F17]/98 backdrop-blur-xl p-6 shadow-2xl shadow-black/80 grid grid-cols-1 md:grid-cols-2 gap-6">
              {MEGA_MENUS[activeMenu].map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-[10px] font-mono tracking-widest text-[#8AA0FF] uppercase border-b border-white/[0.06] pb-1.5">
                    {group.title}
                  </div>
                  <div className="space-y-2">
                    {group.links.map((link) => (
                      <button
                        key={link.pageId + link.title}
                        onClick={() => handleMenuClick(link.pageId)}
                        className="w-full p-2.5 rounded-lg text-left hover:bg-white/[0.04] transition-colors group flex items-start justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#8AA0FF] transition-colors">
                            {link.title}
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                            {link.desc}
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#8AA0FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-0.5 shrink-0" />
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
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#06070B]/98 backdrop-blur-2xl border-t border-white/[0.08] overflow-y-auto p-6 space-y-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase pb-2">
              MAIN SECTIONS
            </div>
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full py-2.5 px-3 rounded-lg text-left text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-[#4C6FFF]/20 text-white font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Specialized Routes */}
          <div className="space-y-1 pt-2 border-t border-white/[0.08]">
            <div className="text-[10px] font-mono tracking-widest text-[#8AA0FF] uppercase pb-2">
              SPECIALIZED PATHWAYS
            </div>
            <button
              onClick={() => handleMenuClick('students')}
              className="w-full py-2 px-3 rounded-lg text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              Students & Undergrads
            </button>
            <button
              onClick={() => handleMenuClick('job-seekers')}
              className="w-full py-2 px-3 rounded-lg text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              Job Seekers & Lateral Transition
            </button>
            <button
              onClick={() => handleMenuClick('hr-industry')}
              className="w-full py-2 px-3 rounded-lg text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              HR, Talent Teams & Industry
            </button>
            <button
              onClick={() => handleMenuClick('careers')}
              className="w-full py-2 px-3 rounded-lg text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              We're Hiring (Careers)
            </button>
            <button
              onClick={() => handleMenuClick('contact')}
              className="w-full py-2 px-3 rounded-lg text-left text-xs text-slate-300 hover:text-white hover:bg-white/[0.04]"
            >
              Contact & Partnerships
            </button>
          </div>

          <div className="pt-4 border-t border-white/[0.08] space-y-3">
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2.5 rounded-lg border border-white/[0.1] text-xs font-mono text-slate-300 text-center"
            >
              Log in to Portal
            </button>
            <button
              onClick={() => {
                setMobileOpen(false);
                onOpenWaitlist();
              }}
              className="w-full py-3 rounded-lg bg-[#4C6FFF] text-white text-xs font-semibold text-center"
            >
              Join Early Access Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
