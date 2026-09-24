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

export const NAV_ITEMS: { id: PageId; label: string; menuKey?: 'platform' | 'solutions' | 'company' | 'resources' }[] = [
  { id: 'platform', label: 'Platform', menuKey: 'platform' },
  { id: 'solutions', label: 'Solutions', menuKey: 'solutions' },
  { id: 'ai-engine', label: 'AI Engine' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'company', label: 'Company', menuKey: 'company' },
  { id: 'resources', label: 'Resources', menuKey: 'resources' },
];

export const MEGA_MENUS: Record<string, MegaMenuGroup[]> = {
  platform: [
    {
      title: 'CORE PLATFORM',
      links: [
        { title: 'Platform Overview', desc: 'Unified intelligence layer for career evolution', pageId: 'platform' },
        { title: 'AI Career Engine', desc: 'Neural graph computing optimal preparation trajectories', pageId: 'ai-engine' },
      ],
    },
    {
      title: 'SPECIALIZED ACCESS',
      links: [
        { title: 'Students', desc: 'Step-by-step roadmap from baseline to verified skills', pageId: 'students' },
        { title: 'Job Seekers', desc: 'High-leverage conversion for experienced candidates', pageId: 'job-seekers' },
        { title: 'HR & Industry', desc: 'Signal-based hiring and candidate readiness analytics', pageId: 'hr-industry' },
      ],
    },
  ],
  solutions: [
    {
      title: 'INDIVIDUALS',
      links: [
        { title: 'For Students', desc: 'Structured milestones, verified projects, and interview mastery', pageId: 'students' },
        { title: 'For Job Seekers', desc: 'Targeted role alignment, resume optimization, and pipeline readiness', pageId: 'job-seekers' },
      ],
    },
    {
      title: 'ORGANIZATIONS',
      links: [
        { title: 'For Colleges', desc: 'Institutional placement analytics and curriculum-to-industry alignment', pageId: 'solutions' },
        { title: 'For Companies', desc: 'Pre-vetted skill telemetry and role-fit matching without resume noise', pageId: 'hr-industry' },
      ],
    },
  ],
  company: [
    {
      title: 'ABOUT APTIVO',
      links: [
        { title: 'About Aptivo AI', desc: 'Our founding vision, values, and engineering principles', pageId: 'company' },
        { title: 'Founder & Leadership', desc: 'Pritam Lohar on engineering career infrastructure', pageId: 'company' },
      ],
    },
    {
      title: 'CAREERS & NETWORK',
      links: [
        { title: 'Careers', desc: 'Join our distributed engineering and research team', pageId: 'careers' },
        { title: 'Contact Us', desc: 'Direct access for partnerships, pilots, and enterprise', pageId: 'contact' },
      ],
    },
  ],
  resources: [
    {
      title: 'KNOWLEDGE BASE',
      links: [
        { title: 'Career Intelligence Insights', desc: 'Deep research on talent telemetry and skill graphs', pageId: 'resources' },
        { title: 'Technical Preparation Guides', desc: 'System design, full-stack architectures, and interview rubrics', pageId: 'resources' },
        { title: 'Future of Work', desc: 'How autonomous systems alter engineering hiring', pageId: 'resources' },
      ],
    },
  ],
};
