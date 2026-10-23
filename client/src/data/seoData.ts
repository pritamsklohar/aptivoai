import { PageId } from '../types';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface PageSeoMetadata {
  pageId: PageId;
  path: string;
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogType: 'website' | 'article';
  ogImage?: string;
  breadcrumbs: BreadcrumbItem[];
  schemaType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'ItemPage' | 'CollectionPage';
  specificSchema?: Record<string, any>;
  priority: number; // 0.0 - 1.0 for sitemap
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

const BASE_URL = 'https://aptivoai.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/aptivo-logo.png`;

export const SEO_PAGES: Record<PageId, PageSeoMetadata> = {
  home: {
    pageId: 'home',
    path: '/',
    title: 'Aptivo AI | Autonomous Career Intelligence & Custom AI Software',
    description: 'Aptivo AI transforms career preparation with deterministic AI roadmaps, verified engineering projects, and delivers custom enterprise AI software & web solutions.',
    keywords: [
      'Aptivo AI',
      'Career Intelligence Platform',
      'AI Career Preparation',
      'Pritam Lohar',
      'AI Resume Builder',
      'Tech Interview Preparation',
      'Custom AI Software',
      'Full Stack Web Development'
    ],
    canonicalUrl: `${BASE_URL}/`,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    breadcrumbs: [{ name: 'Home', path: '/' }],
    schemaType: 'WebPage',
    priority: 1.0,
    changefreq: 'daily',
    specificSchema: {
      '@type': 'SoftwareApplication',
      name: 'Aptivo AI',
      operatingSystem: 'Web, Cloud',
      applicationCategory: 'EducationalApplication, BusinessApplication',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR'
      },
      creator: {
        '@type': 'Person',
        name: 'Pritam Lohar',
        jobTitle: 'Founder & Architect',
        sameAs: 'https://www.linkedin.com/in/pritam-lohar'
      }
    }
  },

  platform: {
    pageId: 'platform',
    path: '/platform',
    title: 'AI Career Intelligence Platform | Aptivo AI',
    description: 'Explore the unified Aptivo AI platform: continuous skill telemetry, autonomous milestone roadmap, and verifiable production engineering proofs.',
    keywords: [
      'Career Intelligence Platform',
      'Skill Graph AI',
      'Engineering Roadmaps',
      'Technical Career Telemetry',
      'Aptivo Platform'
    ],
    canonicalUrl: `${BASE_URL}/platform`,
    ogType: 'website',
    ogImage: `${BASE_URL}/aptivo-dashboard.png`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Platform', path: '/platform' }
    ],
    schemaType: 'ItemPage',
    priority: 0.9,
    changefreq: 'weekly',
  },

  products: {
    pageId: 'products',
    path: '/products',
    title: 'Aptivo AI Products | Intelligent Career Systems',
    description: 'Explore the complete suite of Aptivo AI career products: Aptivo Careers flagship platform, AI Career Engine, and verified skill credentialing.',
    keywords: ['Aptivo Products', 'AI Career Tools', 'Career Acceleration Suite', 'Aptivo Careers'],
    canonicalUrl: `${BASE_URL}/products`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' }
    ],
    schemaType: 'CollectionPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'products/aptivo-careers': {
    pageId: 'products/aptivo-careers',
    path: '/products/aptivo-careers',
    title: 'Aptivo Careers Flagship | Deterministic Tech Career Acceleration',
    description: 'Aptivo Careers bridges the gap between raw ambition and top-tier tech roles through milestone-driven project verification and live technical coaching.',
    keywords: [
      'Aptivo Careers',
      'Deterministic Career Acceleration',
      'Software Engineer Career Roadmap',
      'Tech Placement Preparation'
    ],
    canonicalUrl: `${BASE_URL}/products/aptivo-careers`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Aptivo Careers', path: '/products/aptivo-careers' }
    ],
    schemaType: 'ItemPage',
    priority: 0.9,
    changefreq: 'weekly',
  },

  'ai-engine': {
    pageId: 'ai-engine',
    path: '/ai-engine',
    title: 'Neural Career Reasoning Engine | Aptivo AI Architecture',
    description: 'Under the hood of Aptivo AI: Multi-agent reasoning graphs, semantic resume AST analyzers, and algorithmic skill trajectory optimization.',
    keywords: [
      'AI Career Engine',
      'Neural Career Reasoning',
      'Resume AST Parsing',
      'Skill Graph Algorithms',
      'Aptivo AI Engine'
    ],
    canonicalUrl: `${BASE_URL}/ai-engine`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'AI Engine', path: '/ai-engine' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'how-it-works': {
    pageId: 'how-it-works',
    path: '/how-it-works',
    title: 'How It Works | 5-Stage Autonomous Career Preparation | Aptivo AI',
    description: 'Learn the exact 5-stage blueprint used by Aptivo AI to calibrate your baseline, build production projects, audit resumes, and master interviews.',
    keywords: [
      'How Aptivo AI Works',
      'Career Preparation Framework',
      'Skill Verification Process',
      'Tech Hiring Preparation'
    ],
    canonicalUrl: `${BASE_URL}/how-it-works`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'How It Works', path: '/how-it-works' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  students: {
    pageId: 'students',
    path: '/students',
    title: 'AI Career Launchpad for College Students & Undergrads | Aptivo AI',
    description: 'Build real-world proof of work, master DSA & system design, and secure off-campus internships and graduate engineering offers with Aptivo AI.',
    keywords: [
      'Career Prep for Students',
      'College Engineering Placement',
      'CS Student Internships',
      'Campus to Corporate AI',
      'Fresher Tech Jobs'
    ],
    canonicalUrl: `${BASE_URL}/students`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Students', path: '/students' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'job-seekers': {
    pageId: 'job-seekers',
    path: '/job-seekers',
    title: 'AI Career Transition for Experienced Engineers & Job Seekers | Aptivo AI',
    description: 'Accelerate mid-career transitions to Senior, Staff, and AI roles with tailored resume intelligence, targeted project architectures, and mock loops.',
    keywords: [
      'Job Seekers AI',
      'Mid Career Transition Tech',
      'Senior Software Engineer Preparation',
      'Tech Career Switch'
    ],
    canonicalUrl: `${BASE_URL}/job-seekers`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Job Seekers', path: '/job-seekers' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'hr-industry': {
    pageId: 'hr-industry',
    path: '/hr-industry',
    title: 'Signal-Based Hiring & Talent Analytics for HR & Tech Recruiters | Aptivo AI',
    description: 'Discover pre-verified engineering candidates with verified codebases, deterministic skill telemetry, and zero resume noise.',
    keywords: [
      'HR Tech Recruitment',
      'Candidate Skill Verification',
      'Signal Based Hiring',
      'University Hiring Platform',
      'Technical Talent Sourcing'
    ],
    canonicalUrl: `${BASE_URL}/hr-industry`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'HR & Industry', path: '/hr-industry' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  solutions: {
    pageId: 'solutions',
    path: '/solutions',
    title: 'Integrated Career Solutions & Tooling Suite | Aptivo AI',
    description: 'Explore the full suite of career acceleration tools: AI Resume Architect, Technical Interview Simulator, Skill Gap Radar, and Project Sandbox.',
    keywords: [
      'Career Solutions',
      'AI Resume Builder',
      'Mock Interview AI',
      'Tech Skill Assessment Tools'
    ],
    canonicalUrl: `${BASE_URL}/solutions`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' }
    ],
    schemaType: 'CollectionPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  resources: {
    pageId: 'resources',
    path: '/resources',
    title: 'Career Intelligence & Engineering Guides | Aptivo AI Resources',
    description: 'Access in-depth technical guides, engineering salary benchmarks, hiring telemetry reports, and interview preparation rubrics.',
    keywords: [
      'Tech Career Resources',
      'Software Engineering Guides',
      'System Design Cheatsheet',
      'Aptivo Knowledge Base'
    ],
    canonicalUrl: `${BASE_URL}/resources`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Resources', path: '/resources' }
    ],
    schemaType: 'CollectionPage',
    priority: 0.7,
    changefreq: 'weekly',
  },

  'products/pricing': {
    pageId: 'products/pricing',
    path: '/products/pricing',
    title: 'Pricing Plans — Transparent Tiers for Students & Engineers | Aptivo AI',
    description: 'Simple, transparent pricing for individuals and institutions. Start free with fundamental roadmap tools or unlock pro AI mock interviews.',
    keywords: [
      'Aptivo AI Pricing',
      'Career Platform Cost',
      'Student Discount Tech Tools',
      'Pro Subscription Aptivo'
    ],
    canonicalUrl: `${BASE_URL}/products/pricing`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Pricing', path: '/products/pricing' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'monthly',
  },

  'products/help': {
    pageId: 'products/help',
    path: '/products/help',
    title: 'Help Center & Documentation | Aptivo AI Support',
    description: 'Get answers to common questions about Aptivo AI accounts, skill evaluations, roadmap generation, waitlist status, and security.',
    keywords: [
      'Aptivo Help Center',
      'Career Platform Support',
      'Aptivo Documentation',
      'FAQ Aptivo AI'
    ],
    canonicalUrl: `${BASE_URL}/products/help`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Help Center', path: '/products/help' }
    ],
    schemaType: 'ItemPage',
    priority: 0.7,
    changefreq: 'monthly',
  },

  'products/contact': {
    pageId: 'products/contact',
    path: '/products/contact',
    title: 'Product Support & Inquiries | Aptivo AI',
    description: 'Have a question about Aptivo AI features or need enterprise institutional onboarding? Contact our dedicated product team.',
    keywords: ['Product Support', 'Aptivo Contact', 'Enterprise AI Sales'],
    canonicalUrl: `${BASE_URL}/products/contact`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Products', path: '/products' },
      { name: 'Contact', path: '/products/contact' }
    ],
    schemaType: 'ContactPage',
    priority: 0.7,
    changefreq: 'monthly',
  },

  services: {
    pageId: 'services',
    path: '/services',
    title: 'Client Engineering & Software Development Services | Aptivo AI',
    description: 'Institutional-grade web development, custom AI software solutions, and automated workflows engineered to client requirements with 100% IP ownership.',
    keywords: [
      'Aptivo Client Services',
      'Custom Software Development',
      'Web Application Agency',
      'AI Integration Services',
      'Pritam Lohar Engineering'
    ],
    canonicalUrl: `${BASE_URL}/services`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' }
    ],
    schemaType: 'ItemPage',
    priority: 0.9,
    changefreq: 'weekly',
    specificSchema: {
      '@type': 'ProfessionalService',
      name: 'Aptivo AI Client Engineering Services',
      description: 'Production-grade software development, AI solutions, and high-performance websites.',
      url: `${BASE_URL}/services`,
      telephone: '+91-9876543210',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
      }
    }
  },

  'services/websites': {
    pageId: 'services/websites',
    path: '/services/websites',
    title: 'High-Performance Website Development & Design | Aptivo AI',
    description: 'Conversion-engineered websites and fast web applications built with modern frontend architecture, 100% Lighthouse scores, and responsive aesthetics.',
    keywords: [
      'Website Development Services',
      'Modern Frontend Agency',
      'High Performance Websites',
      'React Web Development',
      'Startup Landing Pages'
    ],
    canonicalUrl: `${BASE_URL}/services/websites`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Website Solutions', path: '/services/websites' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'services/software': {
    pageId: 'services/software',
    path: '/services/software',
    title: 'Custom AI Software, LLM Systems & Automation | Aptivo AI',
    description: 'Bespoke AI applications, autonomous agents, retrieval-augmented generation (RAG) pipelines, and internal business process automation.',
    keywords: [
      'Custom AI Software',
      'LLM App Development',
      'AI Agent Automation',
      'Enterprise AI Systems',
      'RAG Pipeline Development'
    ],
    canonicalUrl: `${BASE_URL}/services/software`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Custom AI Software', path: '/services/software' }
    ],
    schemaType: 'ItemPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'services/process': {
    pageId: 'services/process',
    path: '/services/process',
    title: 'Our Engineering Delivery Process & Quality Framework | Aptivo AI',
    description: 'Explore our 4-phase delivery system: Discovery & architecture, rapid sprint execution, automated QA, and seamless production handover.',
    keywords: [
      'Engineering Delivery Process',
      'Software Development Methodology',
      'Agile Sprints QA',
      'Aptivo Process'
    ],
    canonicalUrl: `${BASE_URL}/services/process`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Our Process', path: '/services/process' }
    ],
    schemaType: 'ItemPage',
    priority: 0.7,
    changefreq: 'monthly',
  },

  'services/work': {
    pageId: 'services/work',
    path: '/services/work',
    title: 'Client Work & Case Studies | Aptivo AI Software Engineering',
    description: 'Real-world case studies showcasing production web apps, custom AI microservices, and measurable ROI delivered for ambitious clients.',
    keywords: [
      'Aptivo Case Studies',
      'Software Engineering Portfolio',
      'Client Projects',
      'Web Development Examples'
    ],
    canonicalUrl: `${BASE_URL}/services/work`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Case Studies', path: '/services/work' }
    ],
    schemaType: 'CollectionPage',
    priority: 0.8,
    changefreq: 'weekly',
  },

  'services/quote': {
    pageId: 'services/quote',
    path: '/services/quote',
    title: 'Request a Free Project Proposal & Architecture Review | Aptivo AI',
    description: 'Submit your software or website project specifications. Receive an itemized technical proposal, architecture blueprint, and timeline in 24 hours.',
    keywords: [
      'Request Project Quote',
      'Software Development Proposal',
      'Website Cost Estimate',
      'Hire AI Developers'
    ],
    canonicalUrl: `${BASE_URL}/services/quote`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
      { name: 'Request Quote', path: '/services/quote' }
    ],
    schemaType: 'ContactPage',
    priority: 0.8,
    changefreq: 'monthly',
  },

  company: {
    pageId: 'company',
    path: '/company',
    title: 'About Aptivo AI | Founder Pritam Lohar & Leadership Vision',
    description: 'Learn about Aptivo AI, founded by Pritam Lohar to engineer the autonomous reasoning infrastructure for human professional development.',
    keywords: [
      'About Aptivo AI',
      'Pritam Lohar',
      'Pritam Lohar Founder',
      'Aptivo AI Founder',
      'Career Tech Company Vision',
      'Aptivo Leadership'
    ],
    canonicalUrl: `${BASE_URL}/company`,
    ogType: 'website',
    ogImage: `${BASE_URL}/prittt.jpg`,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Company', path: '/company' }
    ],
    schemaType: 'AboutPage',
    priority: 0.8,
    changefreq: 'monthly',
    specificSchema: {
      '@type': 'AboutPage',
      mainEntity: {
        '@type': 'Person',
        name: 'Pritam Lohar',
        jobTitle: 'Founder & Architect',
        worksFor: {
          '@type': 'Organization',
          name: 'Aptivo AI'
        },
        image: `${BASE_URL}/prittt.jpg`,
        sameAs: 'https://www.linkedin.com/in/pritam-lohar'
      }
    }
  },

  careers: {
    pageId: 'careers',
    path: '/careers',
    title: 'Careers at Aptivo AI | Engineering, Research & Design',
    description: 'Explore career opportunities at Aptivo AI. Learn about our founding engineering culture, high autonomy, deep problems, and get in touch.',
    keywords: [
      'Aptivo Careers',
      'Tech Jobs Aptivo AI',
      'Work at Aptivo',
      'AI Startup Careers'
    ],
    canonicalUrl: `${BASE_URL}/careers`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' }
    ],
    schemaType: 'ItemPage',
    priority: 0.7,
    changefreq: 'monthly',
  },

  contact: {
    pageId: 'contact',
    path: '/contact',
    title: 'Contact Aptivo AI | Executive Office & Partnerships',
    description: 'Contact Aptivo AI executive leadership, founder Pritam Lohar, client services, and partnership teams for business and media inquiries.',
    keywords: [
      'Contact Aptivo AI',
      'Aptivo Email',
      'Pritam Lohar Contact',
      'Aptivo Office'
    ],
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' }
    ],
    schemaType: 'ContactPage',
    priority: 0.8,
    changefreq: 'monthly',
    specificSchema: {
      '@type': 'ContactPage',
      mainEntity: {
        '@type': 'Organization',
        name: 'Aptivo AI',
        email: 'pritam@aptivo.ai',
        url: BASE_URL
      }
    }
  },

  privacy: {
    pageId: 'privacy',
    path: '/privacy',
    title: 'Privacy Policy | Aptivo AI Data Protection & Security',
    description: 'Read the official Privacy Policy of Aptivo AI detailing user privacy rights, data governance, intellectual property safeguards, and compliance.',
    keywords: ['Aptivo Privacy Policy', 'Data Security', 'User Privacy Terms'],
    canonicalUrl: `${BASE_URL}/privacy`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' }
    ],
    schemaType: 'ItemPage',
    priority: 0.5,
    changefreq: 'yearly',
  },

  terms: {
    pageId: 'terms',
    path: '/terms',
    title: 'Terms of Service | Aptivo AI Legal Agreement',
    description: 'Official Terms of Service governing the use of Aptivo AI platforms, software services, proprietary technology, and client contracts.',
    keywords: ['Aptivo Terms of Service', 'Legal Terms', 'User Agreement'],
    canonicalUrl: `${BASE_URL}/terms`,
    ogType: 'website',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Service', path: '/terms' }
    ],
    schemaType: 'ItemPage',
    priority: 0.5,
    changefreq: 'yearly',
  },
};

/**
 * Normalizes any route string, hash, or legacy alias into a canonical PageId
 */
export function normalizePageId(raw: string): PageId {
  if (!raw) return 'home';

  // Strip leading slash, hashes, trailing slashes, whitespace
  const clean = raw.replace(/^#\/?/, '').replace(/^\/+/, '').replace(/\/+$/, '').trim().toLowerCase();

  if (!clean || clean === 'home' || clean === 'index.html') return 'home';

  // Check direct matches
  if (clean in SEO_PAGES) {
    return clean as PageId;
  }

  // Handle common alias conversions
  const aliasMap: Record<string, PageId> = {
    'services-quote': 'services/quote',
    'services/quote': 'services/quote',
    'quote': 'services/quote',
    'services-process': 'services/process',
    'services/process': 'services/process',
    'process': 'services/process',
    'services-websites': 'services/websites',
    'services/websites': 'services/websites',
    'websites': 'services/websites',
    'services-software': 'services/software',
    'services/software': 'services/software',
    'software': 'services/software',
    'services-work': 'services/work',
    'services/work': 'services/work',
    'work': 'services/work',
    'case-studies': 'services/work',
    'product-contact': 'products/contact',
    'products/contact': 'products/contact',
    'products-pricing': 'products/pricing',
    'pricing': 'products/pricing',
    'products/pricing': 'products/pricing',
    'products-help': 'products/help',
    'help': 'products/help',
    'products/help': 'products/help',
    'aptivo-careers': 'products/aptivo-careers',
    'products/aptivo-careers': 'products/aptivo-careers',
    'products-careers': 'products/aptivo-careers',
    'about': 'company',
    'about-us': 'company',
  };

  if (aliasMap[clean]) {
    return aliasMap[clean];
  }

  return 'home';
}

/**
 * Get clean canonical path for any PageId (e.g. 'home' -> '/', 'services' -> '/services')
 */
export function getPagePath(pageId: PageId): string {
  const meta = SEO_PAGES[pageId];
  return meta ? meta.path : '/';
}
