export type PageId = 
  | 'home'
  | 'platform'
  | 'ai-engine'
  | 'solutions'
  | 'students'
  | 'job-seekers'
  | 'hr-industry'
  | 'how-it-works'
  | 'company'
  | 'careers'
  | 'resources'
  | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  hasDropdown?: boolean;
}

export interface CareerGraphNode {
  id: string;
  label: string;
  category: 'core' | 'goal' | 'artifact' | 'outcome';
  x: number; // percentage
  y: number; // percentage
  detail: string;
  metric?: string;
}

export interface PlatformModule {
  id: string;
  code: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  mockupType: 'graph' | 'build' | 'prepare' | 'profile' | 'discover' | 'employer';
  aiFeedbackExample?: string;
}

export interface ArchitectureLayer {
  name: string;
  code: string;
  description: string;
  items: { title: string; desc: string }[];
}

export interface JobPosition {
  id: string;
  title: string;
  department: 'Engineering' | 'AI / ML' | 'Product' | 'Design' | 'Growth' | 'Operations';
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface ResourceArticle {
  id: string;
  title: string;
  category: 'AI & Careers' | 'Engineering Careers' | 'Interview Preparation' | 'Hiring' | 'Career Intelligence' | 'Future of Work';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}
