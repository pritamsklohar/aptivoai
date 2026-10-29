import React, { useState, useEffect, lazy, Suspense } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WaitlistModal } from './components/layout/WaitlistModal';
import { LoginModal } from './components/layout/LoginModal';

// Eagerly loaded landing page for instant first contentful paint
import { HomePage } from './pages/HomePage';

// Lazy-loaded routes for code-splitting & minimal initial bundle
const PlatformPage = lazy(() => import('./pages/PlatformPage').then(m => ({ default: m.PlatformPage })));
const AiEnginePage = lazy(() => import('./pages/AiEnginePage').then(m => ({ default: m.AiEnginePage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const StudentsPage = lazy(() => import('./pages/StudentsPage').then(m => ({ default: m.StudentsPage })));
const JobSeekersPage = lazy(() => import('./pages/JobSeekersPage').then(m => ({ default: m.JobSeekersPage })));
const HrIndustryPage = lazy(() => import('./pages/HrIndustryPage').then(m => ({ default: m.HrIndustryPage })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage').then(m => ({ default: m.ResourcesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const ProductHelpPage = lazy(() => import('./pages/ProductHelpPage').then(m => ({ default: m.ProductHelpPage })));

// Services Pages
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const WebsiteSolutionsPage = lazy(() => import('./pages/WebsiteSolutionsPage').then(m => ({ default: m.WebsiteSolutionsPage })));
const CustomAiSoftwarePage = lazy(() => import('./pages/CustomAiSoftwarePage').then(m => ({ default: m.CustomAiSoftwarePage })));
const OurProcessPage = lazy(() => import('./pages/OurProcessPage').then(m => ({ default: m.OurProcessPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const RequestQuotePage = lazy(() => import('./pages/RequestQuotePage').then(m => ({ default: m.RequestQuotePage })));

// Company & Legal
const CompanyPage = lazy(() => import('./pages/CompanyPage').then(m => ({ default: m.CompanyPage })));
const CareersPage = lazy(() => import('./pages/CareersPage').then(m => ({ default: m.CareersPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

import { updatePageSeo, normalizePageId, getPagePath } from './utils/seo';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    // Check initial URL from hash or clean pathname
    const raw = window.location.hash || window.location.pathname;
    return normalizePageId(raw);
  });
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<string | undefined>(undefined);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Synchronize SEO meta tags & Schema.org JSON-LD whenever currentPage changes
  useEffect(() => {
    updatePageSeo(currentPage);
  }, [currentPage]);

  // Sync with browser back/forward buttons (popstate) and hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const raw = window.location.hash || window.location.pathname;
      const target = normalizePageId(raw);
      setCurrentPage(target);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page: PageId | string) => {
    const canonicalPage = normalizePageId(page);
    setCurrentPage(canonicalPage);

    // Push clean URL to HTML5 history (e.g. /services, /platform, /)
    const targetPath = getPagePath(canonicalPage);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page: canonicalPage }, '', targetPath);
    }

    updatePageSeo(canonicalPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenWaitlist = (role?: string) => {
    setWaitlistRole(role);
    setIsWaitlistOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      // Products & Platform
      case 'products':
      case 'platform':
      case 'products/aptivo-careers':
        return <PlatformPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'ai-engine':
        return <AiEnginePage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'students':
        return <StudentsPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'job-seekers':
        return <JobSeekersPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'hr-industry':
        return <HrIndustryPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'products/pricing':
        return <PricingPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'products/help':
        return <ProductHelpPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'products/contact':
        return <ContactPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;

      // Services & Solutions
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'services/websites':
        return <WebsiteSolutionsPage onNavigate={handleNavigate} />;
      
      case 'services/software':
        return <CustomAiSoftwarePage onNavigate={handleNavigate} />;
      
      case 'services/process':
        return <OurProcessPage onNavigate={handleNavigate} />;
      
      case 'services/work':
        return <CaseStudiesPage onNavigate={handleNavigate} />;
      
      case 'services/quote':
        return <RequestQuotePage onNavigate={handleNavigate} />;

      // Company, Careers & Legal
      case 'company':
        return <CompanyPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} />;
      
      case 'terms':
        return <TermsPage onNavigate={handleNavigate} />;

      default:
        return <HomePage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-accent-blue/20 selection:text-ink flex flex-col font-sans">
      {/* Global Header Navigation with Hover Mega-Menus */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWaitlist={handleOpenWaitlist}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      {/* Main Page Content with smooth transition */}
      <main className="flex-1">
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-accent-blue/30 border-t-accent-blue rounded-full animate-spin" />
          </div>
        }>
          <div key={currentPage} className="animate-fade-up">
            {renderPage()}
          </div>
        </Suspense>
      </main>

      {/* 5-Column Professional Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenWaitlist={() => handleOpenWaitlist()}
      />

      {/* Interactive Modals */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
        defaultRole={waitlistRole}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </div>
  );
}

export default App;
