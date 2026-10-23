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

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<string | undefined>(undefined);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Sync with browser hash / location
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').replace(/^\//, '');
      const validPages: PageId[] = [
        'home',
        'products',
        'platform',
        'products/aptivo-careers',
        'ai-engine',
        'how-it-works',
        'students',
        'job-seekers',
        'hr-industry',
        'solutions',
        'resources',
        'products/pricing',
        'products/help',
        'products/contact',
        'services',
        'services/websites',
        'services/software',
        'services/process',
        'services/work',
        'services/quote',
        'company',
        'careers',
        'privacy',
        'terms',
        'contact',
      ];

      if (validPages.includes(rawHash as PageId)) {
        setCurrentPage(rawHash as PageId);
      } else if (!rawHash) {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
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
        return <ResourcesPage onNavigate={handleNavigate} />;
      
      case 'products/pricing':
        return <PricingPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      
      case 'products/help':
        return <ProductHelpPage onNavigate={handleNavigate} />;
      
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

      {/* Main Page Content */}
      <main className="flex-1">
        {renderPage()}
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
