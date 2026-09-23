import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WaitlistModal } from './components/layout/WaitlistModal';
import { LoginModal } from './components/layout/LoginModal';

// Pages
import { HomePage } from './pages/HomePage';
import { PlatformPage } from './pages/PlatformPage';
import { AiEnginePage } from './pages/AiEnginePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { StudentsPage } from './pages/StudentsPage';
import { JobSeekersPage } from './pages/JobSeekersPage';
import { HrIndustryPage } from './pages/HrIndustryPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CompanyPage } from './pages/CompanyPage';
import { CareersPage } from './pages/CareersPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistRole, setWaitlistRole] = useState<string | undefined>(undefined);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Sync with browser hash if present (e.g. #platform, #careers)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'platform',
        'ai-engine',
        'solutions',
        'students',
        'job-seekers',
        'hr-industry',
        'how-it-works',
        'company',
        'careers',
        'resources',
        'contact',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
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
      case 'platform':
        return <PlatformPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'ai-engine':
        return <AiEnginePage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'solutions':
        return <SolutionsPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'students':
        return <StudentsPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'job-seekers':
        return <JobSeekersPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'hr-industry':
        return <HrIndustryPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'how-it-works':
        return <HowItWorksPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'company':
        return <CompanyPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'careers':
        return <CareersPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenWaitlist={handleOpenWaitlist} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#06070B] text-slate-100 selection:bg-[#4C6FFF]/30 selection:text-white flex flex-col font-sans">
      {/* Top Fixed Header Navigation */}
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

      {/* Corporate Technical Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenWaitlist={handleOpenWaitlist}
      />

      {/* Global Interactive Modals */}
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
