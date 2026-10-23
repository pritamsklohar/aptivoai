import { PageId } from '../types';

export interface MegaMenuLink {
  title: string;
  desc: string;
  pageId: PageId;
  badge?: string;
}

export interface MegaMenuGroup {
  title: string;
  links: MegaMenuLink[];
}

export const NAV_ITEMS: { id: PageId; label: string; menuKey?: 'products' | 'services' | 'company' | 'resources' }[] = [
  { id: 'products', label: 'Products', menuKey: 'products' },
  { id: 'services', label: 'Services', menuKey: 'services' },
  { id: 'company', label: 'Company', menuKey: 'company' },
  { id: 'resources', label: 'Resources', menuKey: 'resources' },
];

export const MEGA_MENUS: Record<string, MegaMenuGroup[]> = {
  products: [
    {
      title: 'CORE PLATFORM',
      links: [
        { 
          title: 'Platform Overview', 
          desc: 'Unified intelligence layer for career evolution and roadmap tracking', 
          pageId: 'platform' 
        },
        { 
          title: 'AI Career Engine', 
          desc: 'Neural graph computing optimal preparation trajectories and skill gaps', 
          pageId: 'ai-engine' 
        },
        { 
          title: 'Aptivo Careers (Flagship)', 
          desc: 'Targeted roadmaps, verified projects & daily interview mastery', 
          pageId: 'products/aptivo-careers' 
        },
        { 
          title: 'How It Works', 
          desc: 'How our adaptive AI engine generates and tracks your personalized roadmap', 
          pageId: 'how-it-works' 
        },
        { 
          title: 'Pricing Plans', 
          desc: 'Free, Pro, and Premium tiers engineered for students & professionals', 
          pageId: 'products/pricing' 
        },
      ],
    },
    {
      title: 'SPECIALIZED ACCESS',
      links: [
        { 
          title: 'Students & Undergrads', 
          desc: 'Step-by-step roadmap from baseline to verified skills and hiring signals', 
          pageId: 'students' 
        },
        { 
          title: 'Job Seekers & Lateral', 
          desc: 'High-leverage role conversion, targeted resume audit and interview prep', 
          pageId: 'job-seekers' 
        },
        { 
          title: 'HR, Talent Teams & Industry', 
          desc: 'Signal-based hiring and candidate readiness analytics without resume noise', 
          pageId: 'hr-industry' 
        },
        { 
          title: 'Help Center', 
          desc: 'Guides, tutorials, FAQs, and product roadmap documentation', 
          pageId: 'products/help' 
        },
      ],
    },
  ],
  services: [
    {
      title: 'DEVELOPMENT & ENGINEERING',
      links: [
        { 
          title: 'Services Overview', 
          desc: 'Production-grade software & web development built on client requirement', 
          pageId: 'services' 
        },
        { 
          title: 'Website Solutions', 
          desc: 'High-converting, responsive, modern web applications built at lightning speed', 
          pageId: 'services/websites' 
        },
        { 
          title: 'Custom AI Software & Automation', 
          desc: 'Custom AI agents, LLM integrations, and backend automation pipelines', 
          pageId: 'services/software' 
        },
      ],
    },
    {
      title: 'DELIVERY & PARTNERSHIP',
      links: [
        { 
          title: 'Our Process', 
          desc: 'Agile sprints, rigorous QA, and 100% intellectual property ownership transfer', 
          pageId: 'services/process' 
        },
        { 
          title: 'Case Studies / Work', 
          desc: 'Production systems shipped with measurable ROI and verified engineering quality', 
          pageId: 'services/work' 
        },
        { 
          title: 'Request a Quote', 
          desc: 'Submit your project specifications and receive a scoped proposal in 24 hours', 
          pageId: 'services/quote',
          badge: 'Fast Response'
        },
      ],
    },
  ],
  company: [
    {
      title: 'ABOUT APTIVO',
      links: [
        { 
          title: 'About Aptivo AI', 
          desc: 'Our founding vision, values, and engineering principles', 
          pageId: 'company' 
        },
        { 
          title: 'Founder & Leadership', 
          desc: 'Founded by Pritam Lohar on engineering career & AI infrastructure', 
          pageId: 'company' 
        },
      ],
    },
    {
      title: 'NETWORK & CAREERS',
      links: [
        { 
          title: 'Careers (We\'re Hiring)', 
          desc: 'Join our distributed engineering, AI research, and design team', 
          pageId: 'careers',
          badge: 'Hiring'
        },
        { 
          title: 'Contact Us', 
          desc: 'Direct access for partnerships, client projects, and corporate inquiries', 
          pageId: 'contact' 
        },
      ],
    },
  ],
  resources: [
    {
      title: 'KNOWLEDGE & INSIGHTS',
      links: [
        { 
          title: 'Career Intelligence Insights', 
          desc: 'Deep research on talent telemetry, skill graphs, and market demand', 
          pageId: 'resources' 
        },
        { 
          title: 'Technical Preparation Guides', 
          desc: 'System design, full-stack architectures, and modern interview rubrics', 
          pageId: 'resources' 
        },
        { 
          title: 'Future of Work', 
          desc: 'How autonomous AI systems reshape developer hiring and team structure', 
          pageId: 'resources' 
        },
      ],
    },
  ],
};
