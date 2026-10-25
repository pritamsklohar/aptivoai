import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WaitlistModal } from './components/layout/WaitlistModal';
import { LoginModal } from './components/layout/LoginModal';

// Product & Platform Pages
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { AiEnginePage } from './pages/AiEnginePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { StudentsPage } from './pages/StudentsPage';
import { JobSeekersPage } from './pages/JobSeekersPage';
import { HrIndustryPage } from './pages/HrIndustryPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { PricingPage } from './pages/PricingPage';
import { ProductHelpPage } from './pages/ProductHelpPage';

// Services Pages
import { ServicesPage } from './pages/ServicesPage';
import { WebsiteSolutionsPage } from './pages/WebsiteSolutionsPage';
import { CustomAiSoftwarePage } from './pages/CustomAiSoftwarePage';
import { OurProcessPage } from './pages/OurProcessPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { RequestQuotePage } from './pages/RequestQuotePage';

// Company & Legal
import { CompanyPage } from './pages/CompanyPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

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
        <div key={currentPage} className="animate-fade-up">
          {renderPage()}
        </div>
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
