import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../../types';
import { NAV_ITEMS, MEGA_MENUS } from '../../data/navigation';
import { AptivoLogo } from '../common/AptivoLogo';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { getPagePath } from '../../utils/seo';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenWaitlist?: (role?: string) => void;
  onOpenLogin?: () => void;
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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key?: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
    if (key && MEGA_MENUS[key]) {
      setActiveMenu(key);
    } else {
      setActiveMenu(null);
    }
  };

  const handleMouseLeave = () => {
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMenuClick = (id: PageId) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
    }
    setActiveMenu(null);
    setMobileOpen(false);
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-border/80 shadow-ambient py-2.5'
          : 'bg-white/80 backdrop-blur-lg border-b border-border/60 py-3.5'
      }`}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with transparent icon & crisp typography - Always links to Home */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick('home');
            }}
            className="flex items-center text-left group focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2 rounded-lg cursor-pointer select-none"
            aria-label="Aptivo AI Home"
          >
            <AptivoLogo variant="lockup" size="md" className="group-hover:opacity-90 transition-opacity" />
          </a>

          {/* Desktop Navigation Links with Hover Mega-Menu Dropdowns */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isCurrent = currentPage === item.id || (item.menuKey && currentPage.startsWith(item.menuKey));
              const hasMenu = !!item.menuKey && !!MEGA_MENUS[item.menuKey];
              const isOpen = activeMenu === item.menuKey;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.menuKey)}
                >
                  <button
                    id={`nav-${item.id}-btn`}
                    onClick={() => hasMenu ? setActiveMenu(isOpen ? null : item.menuKey!) : handleMenuClick(item.id)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-full flex items-center gap-1 cursor-pointer transition-[color,background-color,transform] duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2 ${
                      isOpen || isCurrent
                        ? 'text-ink bg-surface-2 font-bold'
                        : 'text-ink/80 hover:text-ink hover:bg-surface'
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasMenu && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                          isOpen ? 'rotate-180 text-accent-blue' : 'text-muted'
                        }`}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>



          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted hover:text-ink rounded-full bg-surface-2 border border-border cursor-pointer transition-[transform,background-color] duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.95] focus-visible:outline-2 focus-visible:outline-accent-blue focus-visible:outline-offset-2"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Desktop Mega-Menu Dropdown Card on Hover */}
      {activeMenu && MEGA_MENUS[activeMenu] && (
        <div
          className="absolute top-full left-0 right-0 z-50 pt-2 animate-popover-in"
          onMouseEnter={() => handleMouseEnter(activeMenu)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="rounded-[24px] border border-border bg-white/98 backdrop-blur-2xl p-6 sm:p-7 shadow-2xl shadow-black/8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {MEGA_MENUS[activeMenu].map((group, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="text-[11px] font-bold tracking-wider text-accent-blue uppercase border-b border-border/80 pb-2">
                    {group.title}
                  </div>
                  <div className="space-y-1.5">
                    {group.links.map((link) => (
                      <a
                        key={link.pageId + link.title}
                        href={getPagePath(link.pageId)}
                        onClick={(e) => {
                          e.preventDefault();
                          handleMenuClick(link.pageId);
                        }}
                        className="w-full p-3 rounded-2xl text-left hover:bg-surface-2 transition-[background-color,border-color,transform] duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98] group flex items-start justify-between border border-transparent hover:border-border/60 cursor-pointer"
                      >
                        <div className="pr-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-bold text-ink group-hover:text-accent-blue transition-colors">
                              {link.title}
                            </span>
                            {link.badge && (
                              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-accent-blue-soft text-accent-blue">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-muted mt-0.5 leading-relaxed font-normal">
                            {link.desc}
                          </div>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted group-hover:text-accent-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-140 ease-[cubic-bezier(0.23,1,0.32,1)] mt-0.5 shrink-0" />
                      </a>
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
        <div className="lg:hidden fixed inset-x-0 top-[57px] bottom-0 bg-white/98 backdrop-blur-2xl border-t border-border overflow-y-auto p-6 space-y-6">
          {/* Products Section */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold tracking-wider text-accent-blue uppercase pb-1 border-b border-border">
              PRODUCTS
            </div>
            {MEGA_MENUS.products?.[0]?.links.map((link) => (
              <a
                key={link.pageId + link.title}
                href={getPagePath(link.pageId)}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(link.pageId);
                }}
                className="w-full py-2.5 px-3 rounded-xl text-left text-xs font-semibold text-ink hover:bg-surface-2 transition-colors flex items-center justify-between"
              >
                <span>{link.title}</span>
                <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
            ))}
          </div>

          {/* Services Section */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold tracking-wider text-ink uppercase pb-1 border-b border-border">
              SERVICES
            </div>
            {MEGA_MENUS.services?.[0]?.links.map((link) => (
              <a
                key={link.pageId + link.title}
                href={getPagePath(link.pageId)}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(link.pageId);
                }}
                className="w-full py-2.5 px-3 rounded-xl text-left text-xs font-semibold text-ink hover:bg-surface-2 transition-colors flex items-center justify-between"
              >
                <span>{link.title}</span>
                <ArrowUpRight className="w-3 h-3 text-muted" />
              </a>
            ))}
          </div>

          {/* Company Section */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold tracking-wider text-muted uppercase pb-1 border-b border-border">
              COMPANY & CAREERS
            </div>
            <a
              href="/company"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('company');
              }}
              className="w-full py-2 px-3 rounded-xl text-left text-xs font-semibold text-ink/80 hover:bg-surface-2 transition-colors block"
            >
              About Us (Pritam Lohar)
            </a>
            <a
              href="/careers"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('careers');
              }}
              className="w-full py-2 px-3 rounded-xl text-left text-xs font-semibold text-ink/80 hover:bg-surface-2 transition-colors block"
            >
              Careers
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleMenuClick('contact');
              }}
              className="w-full py-2 px-3 rounded-xl text-left text-xs font-semibold text-ink/80 hover:bg-surface-2 transition-colors block"
            >
              Contact
            </a>
          </div>


        </div>
      )}
    </header>
  );
};
