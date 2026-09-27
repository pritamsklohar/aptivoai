# Aptivo AI Website - Full Frontend Details

This document contains the full source code and copy for every single component and page in the Aptivo AI frontend, ensuring you do not miss a single detail during your Figma redesign.

## File: App.tsx
\	ypescript
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

\\n
## File: components\common\AiCareerGraph.tsx
\	ypescript
import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Gauge,
  Layers3,
  Network,
  Sparkles,
  Target,
  TrendingUp,
  UserRoundCheck,
  Zap,
} from 'lucide-react';

interface CareerNode {
  id: string;
  name: string;
  shortName: string;
  metric: string;
  score?: number;
  detail: string;
  category: string;
  icon: React.ElementType;
  position: {
    x: number;
    y: number;
  };
}

const CAREER_NODES: CareerNode[] = [
  {
    id: 'role',
    name: 'Target Role',
    shortName: 'ROLE',
    metric: 'Full-Stack Engineer',
    score: 94,
    detail:
      'Your target role defines the skills, project depth, profile signals and preparation required by the career model.',
    category: 'Goal Intelligence',
    icon: Target,
    position: { x: 500, y: 72 },
  },
  {
    id: 'skills',
    name: 'Skill Alignment',
    shortName: 'SKILLS',
    metric: '86% aligned',
    score: 86,
    detail:
      'Aptivo compares your current capabilities against the skill requirements associated with your target role.',
    category: 'Profile Intelligence',
    icon: Layers3,
    position: { x: 700, y: 205 },
  },
  {
    id: 'projects',
    name: 'Project Readiness',
    shortName: 'PROJECTS',
    metric: '78% ready',
    score: 78,
    detail:
      'Projects provide evidence of applied skills, engineering depth and practical problem-solving ability.',
    category: 'Proof of Work',
    icon: Network,
    position: { x: 700, y: 390 },
  },
  {
    id: 'resume',
    name: 'Profile Strength',
    shortName: 'PROFILE',
    metric: '91% aligned',
    score: 91,
    detail:
      'Your resume and professional profile are evaluated against the target role and the evidence available in your profile.',
    category: 'Profile Intelligence',
    icon: FileText,
    position: { x: 500, y: 520 },
  },
  {
    id: 'interview',
    name: 'Interview Readiness',
    shortName: 'INTERVIEW',
    metric: '72% ready',
    score: 72,
    detail:
      'Interview preparation tracks technical, system-design and behavioral areas relevant to your target role.',
    category: 'Preparation',
    icon: UserRoundCheck,
    position: { x: 300, y: 520 },
  },
  {
    id: 'opportunities',
    name: 'Opportunity Match',
    shortName: 'OPPORTUNITIES',
    metric: '84% aligned',
    score: 84,
    detail:
      'Your profile can be compared against opportunities using role, skill and experience alignment.',
    category: 'Opportunity Intelligence',
    icon: BriefcaseBusiness,
    position: { x: 100, y: 390 },
  },
  {
    id: 'progress',
    name: 'Career Progress',
    shortName: 'PROGRESS',
    metric: 'Sprint 03',
    score: 68,
    detail:
      'Progress signals are fed back into the career model so recommendations can adapt as your profile develops.',
    category: 'Adaptive Intelligence',
    icon: TrendingUp,
    position: { x: 100, y: 205 },
  },
];

const CONNECTIONS = [
  ['role', 'skills'],
  ['role', 'projects'],
  ['skills', 'projects'],
  ['projects', 'resume'],
  ['resume', 'interview'],
  ['interview', 'opportunities'],
  ['opportunities', 'progress'],
  ['progress', 'role'],
];

const getNode = (id: string) =>
  CAREER_NODES.find((node) => node.id === id)!;

export const AiCareerGraph: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState('role');

  const activeNode = useMemo(
    () => getNode(activeNodeId),
    [activeNodeId]
  );

  const ActiveIcon = activeNode.icon;

  const readiness = 82;

  const handleNext = () => {
    const currentIndex = CAREER_NODES.findIndex(
      (node) => node.id === activeNodeId
    );

    const nextIndex =
      (currentIndex + 1) % CAREER_NODES.length;

    setActiveNodeId(CAREER_NODES[nextIndex].id);
  };

  return (
    <section className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#080B13] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">

      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#4C6FFF]/[0.08] blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[260px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/[0.035] blur-[100px]" />

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-5 border-b border-white/[0.07] px-6 py-6 sm:px-8 lg:px-10 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#4C6FFF]/30 bg-[#4C6FFF]/10">
              <BrainCircuit className="h-3.5 w-3.5 text-[#8AA0FF]" />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8AA0FF]">
              Aptivo Intelligence
            </span>
          </div>

          <h3 className="font-display text-base font-semibold tracking-tight text-white sm:text-lg">
            Interactive Career Intelligence
          </h3>

          <p className="mt-1 max-w-xl text-xs leading-relaxed text-slate-400 sm:text-sm">
            A connected view of your career goal, skills, proof of work,
            preparation and opportunities.
          </p>
        </div>

        <div className="flex items-center gap-3 self-start rounded-full border border-emerald-400/10 bg-emerald-400/[0.04] px-3 py-2 lg:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>

          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">
            Career model active
          </span>
        </div>
      </div>

      {/* Graph */}
      <div className="relative px-3 py-5 sm:px-6 lg:px-10">

        <div className="relative mx-auto aspect-[1.55/1] w-full max-w-[900px] min-h-[390px] overflow-hidden rounded-2xl border border-white/[0.05] bg-[#090D17]">

          {/* Background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />

          {/* Top system label */}
          <div className="absolute left-5 top-5 z-20 flex items-center gap-2">
            <Gauge className="h-3.5 w-3.5 text-[#8AA0FF]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
              Career Graph / Live Model
            </span>
          </div>

          <svg
            viewBox="0 0 800 600"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Main glow */}
              <filter id="aptivoGlow">
                <feGaussianBlur
                  stdDeviation="5"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Center glow */}
              <radialGradient id="hubGradient">
                <stop
                  offset="0%"
                  stopColor="#4C6FFF"
                  stopOpacity="0.22"
                />
                <stop
                  offset="65%"
                  stopColor="#4C6FFF"
                  stopOpacity="0.05"
                />
                <stop
                  offset="100%"
                  stopColor="#4C6FFF"
                  stopOpacity="0"
                />
              </radialGradient>

              {/* Animated data flow */}
              <linearGradient
                id="dataFlow"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  stopColor="#4C6FFF"
                  stopOpacity="0"
                />
                <stop
                  offset="50%"
                  stopColor="#19D9FF"
                  stopOpacity="1"
                />
                <stop
                  offset="100%"
                  stopColor="#4C6FFF"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* Orbital rings */}
            <circle
              cx="400"
              cy="300"
              r="118"
              fill="none"
              stroke="rgba(255,255,255,0.045)"
              strokeWidth="1"
            />

            <circle
              cx="400"
              cy="300"
              r="185"
              fill="none"
              stroke="rgba(255,255,255,0.035)"
              strokeWidth="1"
              strokeDasharray="2 7"
            />

            <circle
              cx="400"
              cy="300"
              r="235"
              fill="none"
              stroke="rgba(255,255,255,0.025)"
              strokeWidth="1"
              strokeDasharray="1 9"
            />

            {/* Center ambient glow */}
            <circle
              cx="400"
              cy="300"
              r="145"
              fill="url(#hubGradient)"
            />

            {/* Connections */}
            {CONNECTIONS.map(([fromId, toId]) => {
              const from = getNode(fromId);
              const to = getNode(toId);

              const isRelated =
                from.id === activeNodeId ||
                to.id === activeNodeId;

              return (
                <g key={`${fromId}-${toId}`}>
                  {/* Base connection */}
                  <line
                    x1={from.position.x}
                    y1={from.position.y}
                    x2={to.position.x}
                    y2={to.position.y}
                    stroke={
                      isRelated
                        ? 'rgba(76,111,255,0.65)'
                        : 'rgba(255,255,255,0.08)'
                    }
                    strokeWidth={isRelated ? 1.8 : 1}
                    strokeDasharray={
                      isRelated ? 'none' : '3 7'
                    }
                    className="transition-all duration-500"
                  />

                  {/* Data pulse */}
                  {isRelated && (
                    <circle
                      r="3"
                      fill="#19D9FF"
                      filter="url(#aptivoGlow)"
                    >
                      <animateMotion
                        dur="2.8s"
                        repeatCount="indefinite"
                        path={`M ${from.position.x} ${from.position.y} L ${to.position.x} ${to.position.y}`}
                      />
                    </circle>
                  )}
                </g>
              );
            })}

            {/* Connection to central engine */}
            {CAREER_NODES.map((node) => {
              const isRelated =
                node.id === activeNodeId;

              return (
                <line
                  key={`hub-${node.id}`}
                  x1="400"
                  y1="300"
                  x2={node.position.x}
                  y2={node.position.y}
                  stroke={
                    isRelated
                      ? '#4C6FFF'
                      : 'rgba(255,255,255,0.055)'
                  }
                  strokeWidth={isRelated ? 1.6 : 1}
                  strokeDasharray={
                    isRelated ? 'none' : '2 7'
                  }
                  className="transition-all duration-500"
                />
              );
            })}

            {/* Central Engine */}
            <g>
              {/* outer pulse */}
              <circle
                cx="400"
                cy="300"
                r="72"
                fill="none"
                stroke="#4C6FFF"
                strokeOpacity="0.08"
                strokeWidth="1"
              >
                <animate
                  attributeName="r"
                  values="66;76;66"
                  dur="3.5s"
                  repeatCount="indefinite"
                />

                <animate
                  attributeName="stroke-opacity"
                  values="0.08;0.02;0.08"
                  dur="3.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* glow */}
              <circle
                cx="400"
                cy="300"
                r="60"
                fill="rgba(76,111,255,0.08)"
              />

              {/* outer ring */}
              <circle
                cx="400"
                cy="300"
                r="49"
                fill="#0B1020"
                stroke="#4C6FFF"
                strokeWidth="1.5"
              />

              {/* inner */}
              <circle
                cx="400"
                cy="300"
                r="40"
                fill="#0F1528"
                stroke="rgba(138,160,255,0.18)"
                strokeWidth="1"
              />

              <foreignObject
                x="355"
                y="263"
                width="90"
                height="75"
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-[#19D9FF]" />

                    <span className="text-[11px] font-bold tracking-tight text-white">
                      APTIVO AI
                    </span>
                  </div>

                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#8AA0FF]">
                    Career Engine
                  </span>
                </div>
              </foreignObject>
            </g>

            {/* Satellite nodes */}
            {CAREER_NODES.map((node) => {
              const selected =
                node.id === activeNodeId;

              const Icon = node.icon;

              return (
                <g
                  key={node.id}
                  onClick={() =>
                    setActiveNodeId(node.id)
                  }
                  className="cursor-pointer"
                >
                  {/* selection glow */}
                  {selected && (
                    <circle
                      cx={node.position.x}
                      cy={node.position.y}
                      r="34"
                      fill="rgba(76,111,255,0.08)"
                      stroke="rgba(76,111,255,0.18)"
                      strokeWidth="1"
                    >
                      <animate
                        attributeName="r"
                        values="31;35;31"
                        dur="2.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}

                  {/* node */}
                  <circle
                    cx={node.position.x}
                    cy={node.position.y}
                    r="25"
                    fill={
                      selected
                        ? '#17244C'
                        : '#0D121F'
                    }
                    stroke={
                      selected
                        ? '#4C6FFF'
                        : 'rgba(255,255,255,0.14)'
                    }
                    strokeWidth={selected ? 1.6 : 1}
                    className="transition-all duration-300"
                  />

                  {/* icon */}
                  <foreignObject
                    x={node.position.x - 12}
                    y={node.position.y - 12}
                    width="24"
                    height="24"
                  >
                    <div className="flex h-full w-full items-center justify-center">
                      <Icon
                        size={13}
                        strokeWidth={1.8}
                        className={
                          selected
                            ? 'text-[#8AA0FF]'
                            : 'text-slate-500'
                        }
                      />
                    </div>
                  </foreignObject>

                  {/* label */}
                  <text
                    x={node.position.x}
                    y={node.position.y + 45}
                    textAnchor="middle"
                    fill={
                      selected
                        ? '#FFFFFF'
                        : '#7F8AA3'
                    }
                    fontSize="10"
                    fontWeight={
                      selected ? '600' : '400'
                    }
                    fontFamily="Inter, sans-serif"
                  >
                    {node.shortName}
                  </text>

                  {/* score */}
                  {node.score && (
                    <text
                      x={node.position.x}
                      y={node.position.y + 58}
                      textAnchor="middle"
                      fill={
                        selected
                          ? '#8AA0FF'
                          : '#4E5870'
                      }
                      fontSize="8"
                      fontFamily="Inter, sans-serif"
                    >
                      {node.score}%
                    </text>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Graph status */}
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#19D9FF]" />

            <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
              Connected career model
            </span>
          </div>

          {/* Readiness floating card */}
          <div className="absolute bottom-4 right-5 hidden rounded-xl border border-white/[0.08] bg-[#0C111D]/90 px-4 py-3 backdrop-blur-xl sm:block">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#4C6FFF]/30 bg-[#4C6FFF]/10">
                <span className="text-xs font-bold text-white">
                  {readiness}%
                </span>
              </div>

              <div>
                <div className="text-[9px] uppercase tracking-widest text-slate-500">
                  Career readiness
                </div>

                <div className="mt-0.5 text-xs font-medium text-slate-200">
                  Target alignment
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected node panel */}
      <div className="relative z-10 border-t border-white/[0.07] px-6 py-5 sm:px-8 lg:px-10">

        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">

          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#4C6FFF]/20 bg-[#4C6FFF]/10">
                <ActiveIcon className="h-3.5 w-3.5 text-[#8AA0FF]" />
              </span>

              <span className="text-sm font-semibold text-white">
                {activeNode.name}
              </span>

              <span className="text-slate-700">
                /
              </span>

              <span className="text-xs font-medium text-[#8AA0FF]">
                {activeNode.metric}
              </span>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[9px] uppercase tracking-wider text-slate-500">
                {activeNode.category}
              </span>

              {activeNode.score && (
                <span className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <CheckCircle2 className="h-3 w-3" />
                  Analyzed
                </span>
              )}
            </div>

            <p className="max-w-2xl text-xs leading-relaxed text-slate-400 sm:text-sm">
              {activeNode.detail}
            </p>
          </div>

          <button
            onClick={handleNext}
            className="group flex w-fit items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 text-xs font-medium text-slate-200 transition-all duration-300 hover:border-[#4C6FFF]/30 hover:bg-[#4C6FFF]/[0.06]"
          >
            <span>Explore next signal</span>

            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/[0.05] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5 text-[#8AA0FF]" />
            </span>
          </button>
        </div>

        {/* AI recommendation */}
        <div className="mt-5 flex flex-col gap-3 rounded-xl border border-[#4C6FFF]/10 bg-[#4C6FFF]/[0.035] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4C6FFF]/10">
              <Zap className="h-3.5 w-3.5 text-[#8AA0FF]" />
            </div>

            <div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8AA0FF]">
                AI next action
              </div>

              <p className="mt-1 text-xs text-slate-300">
                Strengthen system design to improve alignment with your
                target Full-Stack Engineer role.
              </p>
            </div>
          </div>

          <div className="whitespace-nowrap font-mono text-[10px] text-slate-500">
            Recommended next
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiCareerGraph;

\\n
## File: components\common\AptivoLogo.tsx
\	ypescript
import React from 'react';

interface AptivoLogoProps {
  variant?: 'icon' | 'lockup' | 'full';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  glow?: boolean;
}

export const AptivoLogo: React.FC<AptivoLogoProps> = ({
  variant = 'lockup',
  size = 'md',
  showTagline = false,
  className = '',
  glow = true,
}) => {
  // Dimensions mapping
  const sizeMap = {
    sm: { icon: 'w-6 h-6', text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 'w-8 h-8', text: 'text-xl', sub: 'text-[11px]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-4xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  // The Iconic Ribbon "A" + Arrow Symbol SVG
  const IconSymbol = (
    <div className={`relative ${currentSize.icon} flex-shrink-0 flex items-center justify-center`}>
      {glow && (
        <div className="absolute inset-0 bg-[#00C4FF]/25 blur-md rounded-full pointer-events-none transform scale-125" />
      )}
      <img
        src="/aptivo-icon.png"
        alt="Aptivo AI Icon"
        className="w-full h-full relative z-10 drop-shadow-[0_2px_10px_rgba(0,196,255,0.35)] object-contain"
      />
    </div>
  );

  // If icon-only requested
  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{IconSymbol}</div>;
  }

  // Wordmark: "Aptivo" in crisp white + "AI" in cyan-to-purple gradient
  const Wordmark = (
    <div className="flex items-baseline tracking-tight font-display font-bold leading-none select-none">
      <span className={`text-white font-extrabold ${currentSize.text} tracking-tight`}>
        Aptivo
      </span>
      <span
        className={`ml-1 font-black ${currentSize.text} bg-gradient-to-r from-[#00CFFF] via-[#3B82F6] to-[#A855F7] bg-clip-text text-transparent`}
      >
        AI
      </span>
    </div>
  );

  const shouldRenderTagline = showTagline || variant === 'full';

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-2.5">
        {IconSymbol}
        {Wordmark}
      </div>

      {shouldRenderTagline && (
        <div className="mt-1 flex items-center gap-2 w-full pt-0.5">
          {/* Cyan gradient line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#00CFFF] to-[#3B82F6] opacity-75" />
          <span className={`${currentSize.sub} font-medium tracking-wider text-slate-300 uppercase whitespace-nowrap`}>
            Build Smarter. Grow Faster.
          </span>
          {/* Purple gradient line */}
          <div className="h-[1px] flex-1 bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-transparent opacity-75" />
        </div>
      )}
    </div>
  );
};

\\n
## File: components\common\CornerBracket.tsx
\	ypescript
import React from 'react';

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  tag?: string;
}

export const CornerBracket: React.FC<CardContainerProps> = ({ children, className = '', tag }) => {
  return (
    <div className={`relative rounded-xl border border-white/[0.08] bg-[#0E111A] p-6 sm:p-8 transition-all duration-200 ${className}`}>
      {tag && (
        <div className="text-[11px] font-mono tracking-wider text-slate-400 uppercase select-none mb-3">
          {tag}
        </div>
      )}
      {children}
    </div>
  );
};

\\n
## File: components\common\ScrollIndicator.tsx
\	ypescript
import React from 'react';

interface ScrollIndicatorProps {
  label?: string;
  targetId?: string;
  className?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  label = 'Scroll',
  targetId,
  className = '',
}) => {
  const handleScroll = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    // Fallback: smooth scroll down by roughly one hero distance
    window.scrollBy({
      top: Math.min(window.innerHeight * 0.75, 700),
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto ${className}`}
    >
      <button
        onClick={handleScroll}
        type="button"
        aria-label={label}
        className="group flex flex-col items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8AA0FF]/50 rounded-full py-1 px-3 cursor-pointer transition-all duration-300"
      >
        {/* Subtle, sleek label */}
        {label && (
          <span className="text-[9px] sm:text-[10px] font-mono tracking-[0.25em] uppercase text-slate-400 group-hover:text-[#8AA0FF] transition-colors duration-200">
            {label}
          </span>
        )}

        {/* Vertical Glowing Blue Line with Animated Pulsing Dot */}
        <div className="relative w-[18px] h-11 sm:h-14 flex items-center justify-center">
          {/* Ambient glow around the line */}
          <div className="absolute inset-0 bg-[#4C6FFF]/20 blur-sm rounded-full pointer-events-none" />

          {/* Vertical Glowing Line */}
          <div className="relative w-[2px] h-full rounded-full bg-gradient-to-b from-[#4C6FFF]/10 via-[#4C6FFF] to-[#4C6FFF]/20 animate-line-glow" />

          {/* Animated Pulsing Dot traveling along the line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white border border-[#8AA0FF] shadow-[0_0_8px_#4C6FFF,0_0_16px_#4C6FFF,0_0_24px_#8AA0FF] animate-scroll-pulsing-dot pointer-events-none" />
        </div>
      </button>
    </div>
  );
};

\\n
## File: components\home\AdaptiveCareerLoopSection.tsx
\	ypescript
import React, { useState } from 'react';
import { ADAPTIVE_LOOP_STEPS } from '../../data/contentData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const AdaptiveCareerLoopSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-24 relative bg-[#06070B] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Continuous Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Your roadmap evolves as you do.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Curricula shouldn't be static. Aptivo AI adapts your trajectory every time you commit code or complete an evaluation.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {ADAPTIVE_LOOP_STEPS.map((s, idx) => {
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isCurrent
                      ? 'border-[#4C6FFF] bg-[#4C6FFF]/15 text-white shadow-sm'
                      : 'border-white/[0.06] bg-[#0C0F1A] text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-[10px] font-mono mb-1 text-slate-500">
                    {s.step}
                  </div>
                  <div className="text-xs font-semibold">
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0E111D] space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
              <div>
                <span className="text-xs font-mono text-[#8AA0FF]">Step {ADAPTIVE_LOOP_STEPS[activeStep].step}</span>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  {ADAPTIVE_LOOP_STEPS[activeStep].title}
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                Closed-Loop Recalibration
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
              {ADAPTIVE_LOOP_STEPS[activeStep].desc}
            </p>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#8AA0FF]" />
                <span>Automated Feedback</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#8AA0FF]" />
                <span>Adaptive Milestones</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\AiEngineDiagramSection.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../../types';
import { Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AiEngineDiagramSectionProps {
  onNavigate: (page: PageId) => void;
}

const INPUT_SIGNALS = [
  { name: 'Target Role', note: 'Calibrated company criteria' },
  { name: 'Current Skills', note: 'Verified via repositories' },
  { name: 'Available Hours', note: 'Weekly bandwidth constraint' },
  { name: 'Past Experience', note: 'Extracted competencies' },
];

const REASONING_STEPS = [
  'Extracts 4,800+ skill dependencies',
  'Identifies highest-priority architectural gaps',
  'Synthesizes personalized production projects',
  'Calibrates mock interview rubrics to role level',
];

const OUTPUT_ACTIONS = [
  { name: 'Personalized Roadmap', note: 'Sprint-by-sprint milestones' },
  { name: 'Production Project Specs', note: 'Real PR reviews & guidance' },
  { name: 'Quantified Resume', note: 'ATS-resilient impact vectors' },
  { name: 'Direct Opportunity Matches', note: 'Routing to hiring leads' },
];

export const AiEngineDiagramSection: React.FC<AiEngineDiagramSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#080A12] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            System Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            The intelligence behind your career.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            How Aptivo AI transforms your initial baseline into deterministic career advancement.
          </p>
        </div>

        {/* 3-Column Pipeline Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Column 1: Candidate Inputs */}
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
            <div>
              <div className="text-xs font-medium text-slate-400 mb-1">Step 1</div>
              <h3 className="text-lg font-bold font-display text-white">
                Candidate Profile Signals
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Multi-dimensional baseline analysis
              </p>
            </div>

            <div className="space-y-3">
              {INPUT_SIGNALS.map((inp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-[#111524]"
                >
                  <div className="text-xs font-semibold text-white">{inp.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{inp.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Aptivo AI Core */}
          <div className="p-7 rounded-2xl border border-[#4C6FFF]/40 bg-gradient-to-b from-[#12182D] to-[#0A0D18] space-y-6 shadow-lg">
            <div>
              <div className="text-xs font-medium text-[#8AA0FF] mb-1">Step 2</div>
              <h3 className="text-lg font-bold font-display text-white">
                Aptivo Career Engine
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Neural graph evaluation & reasoning
              </p>
            </div>

            <div className="space-y-3">
              {REASONING_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.08] bg-[#151C33] flex items-start gap-2.5 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: High-Confidence Outputs */}
          <div className="p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
            <div>
              <div className="text-xs font-medium text-slate-400 mb-1">Step 3</div>
              <h3 className="text-lg font-bold font-display text-white">
                Deterministic Deliverables
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Actionable milestones & verification
              </p>
            </div>

            <div className="space-y-3">
              {OUTPUT_ACTIONS.map((out, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-[#111524]"
                >
                  <div className="text-xs font-semibold text-white">{out.name}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{out.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom clean CTA link */}
        <div className="mt-10 text-center">
          <button
            onClick={() => onNavigate('ai-engine')}
            className="inline-flex items-center gap-2 text-xs font-medium text-[#8AA0FF] hover:text-white transition-colors"
          >
            <span>Learn more about the AI Engine architecture</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\AudienceSection.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { GraduationCap, Briefcase, Building2, ArrowRight, Check } from 'lucide-react';

interface AudienceSectionProps {
  onNavigate: (page: PageId) => void;
}

const AUDIENCE_CARDS = [
  {
    id: 'students' as PageId,
    title: 'Students & Undergrads',
    kicker: 'Aspiring Engineers',
    icon: GraduationCap,
    description: 'Build foundational and production skills through structured roadmaps, hands-on code reviews, and mock interviews.',
    features: [
      'Personalized milestone roadmap',
      'Real project architectures & PR reviews',
      'ATS-optimized resume generation',
      'Technical interview simulations',
    ],
    cta: 'Explore for Students',
  },
  {
    id: 'job-seekers' as PageId,
    title: 'Job Seekers & Switchers',
    kicker: 'Experienced Professionals',
    icon: Briefcase,
    description: 'Turn your existing background into a high-confidence strategy for senior roles, closing unseen architectural gaps.',
    features: [
      'Deep profile & gap analysis',
      'High-dimensional job matching',
      'System design mock evaluations',
      'Direct routing to hiring managers',
    ],
    cta: 'Explore for Job Seekers',
  },
  {
    id: 'hr-industry' as PageId,
    title: 'HR & Engineering Teams',
    kicker: 'Tech Companies & Hiring Leads',
    icon: Building2,
    description: 'Discover candidates pre-evaluated through verified code depth, test coverage, and calibrated readiness signals.',
    features: [
      'Role requirement mapping',
      'Verified pull request telemetry',
      'Pre-screened 85%+ readiness cohort',
      'Zero recruiter spam or blind screens',
    ],
    cta: 'Explore for Companies',
  },
];

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 relative bg-[#06070B]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Tailored Pathways
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Built around your career objective.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Whether starting out, seeking a senior promotion, or building high-performing engineering teams, Aptivo AI adapts to your context.
          </p>
        </div>

        {/* 3 Clean Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {AUDIENCE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F19] hover:border-white/[0.18] transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#4C6FFF]/10 border border-[#4C6FFF]/20 flex items-center justify-center text-[#8AA0FF] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-xs text-[#8AA0FF] font-medium tracking-wide mb-1">
                    {card.kicker}
                  </div>
                  <h3 className="text-xl font-bold font-display text-white mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onNavigate(card.id)}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#141724] hover:bg-[#4C6FFF] border border-white/[0.08] hover:border-transparent text-xs font-semibold text-white flex items-center justify-center gap-2 transition-all group"
                >
                  <span>{card.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\DashboardPreviewSection.tsx
\	ypescript
import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

const SKILLS_DATA = [
  { name: 'React & Component Architecture', level: 88, status: 'Strong' },
  { name: 'TypeScript & Type Safety', level: 84, status: 'Strong' },
  { name: 'Node.js & Concurrency', level: 75, status: 'Proficient' },
  { name: 'Database & Schema Modeling', level: 70, status: 'Proficient' },
  { name: 'Distributed System Design', level: 62, status: 'Focus Area' },
];

const ROADMAP_PHASES = [
  { name: 'Phase 01 — Foundation', status: 'Completed', date: 'Weeks 1–3', done: true },
  { name: 'Phase 02 — Production Skills', status: 'Completed', date: 'Weeks 4–7', done: true },
  { name: 'Phase 03 — System Projects', status: 'In Progress', date: 'Current Focus', active: true },
  { name: 'Phase 04 — Interview Readiness', status: 'Next', date: 'Upcoming', done: false },
];

export const DashboardPreviewSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/[0.06] bg-[#07090F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Platform Interface
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Clear metrics. Actionable direction.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Every metric in your Aptivo AI dashboard is backed by actual code commits, project reviews, and calibrated interview rubrics.
          </p>
        </div>

        {/* Clean Dashboard Window */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/[0.08] bg-[#0C0F1A] shadow-2xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="px-5 py-3.5 bg-[#090B12] border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20 inline-block" />
              <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                app.aptivo.ai/dashboard
              </span>
            </div>
            <div className="text-xs text-[#8AA0FF] font-medium">
              Live Profile
            </div>
          </div>

          {/* Internal Dashboard Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Top Stat Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-white/[0.06]">
              {/* Target Objective */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04]">
                <div className="text-xs text-slate-400">Target Role</div>
                <div className="text-base font-bold text-white mt-1">Full-Stack Engineer</div>
                <div className="text-xs text-[#8AA0FF] mt-0.5">High-Growth Tech & SaaS</div>
              </div>

              {/* Career Readiness */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04] flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-400">Career Readiness</div>
                  <div className="text-2xl font-bold font-display text-white mt-1">72%</div>
                  <div className="text-xs text-emerald-400 mt-0.5">+14% this month</div>
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-[#4C6FFF] flex items-center justify-center font-bold text-xs text-white">
                  72%
                </div>
              </div>

              {/* Weekly Velocity */}
              <div className="p-4 rounded-xl bg-[#101422] border border-white/[0.04]">
                <div className="text-xs text-slate-400">Weekly Commitment</div>
                <div className="text-base font-bold text-white mt-1">11.4 / 12 hrs</div>
                <div className="text-xs text-slate-400 mt-0.5">On pace for hiring cycle</div>
              </div>
            </div>

            {/* AI Insight Note */}
            <div className="p-5 rounded-xl border border-[#4C6FFF]/30 bg-[#11172A] flex items-start gap-3.5">
              <Sparkles className="w-5 h-5 text-[#8AA0FF] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#8AA0FF]">
                  AI Trajectory Assessment
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">
                  "You are strong in frontend development. Your largest current gap is backend system design."
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Recommendation: Prioritize distributed event queues and database partitioning in your next sprint to reach the 85% benchmark.
                </p>
              </div>
            </div>

            {/* Skills & Roadmap Dual Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Left Column: Skills Breakdown */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Technical Competencies
                </div>

                <div className="space-y-3">
                  {SKILLS_DATA.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-slate-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/[0.06] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            skill.status === 'Focus Area' ? 'bg-[#8AA0FF]' : 'bg-[#4C6FFF]'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Roadmap Execution */}
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Adaptive Milestones
                </div>

                <div className="space-y-2.5">
                  {ROADMAP_PHASES.map((phase) => (
                    <div
                      key={phase.name}
                      className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                        phase.active
                          ? 'border-[#4C6FFF]/50 bg-[#4C6FFF]/10 text-white font-medium'
                          : phase.done
                          ? 'border-white/[0.06] bg-[#0E111C] text-slate-300'
                          : 'border-white/[0.04] bg-[#0A0C14] text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        {phase.done ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        ) : (
                          <div className={`w-2 h-2 rounded-full ${phase.active ? 'bg-[#4C6FFF]' : 'bg-slate-600'}`} />
                        )}
                        <span>{phase.name}</span>
                      </div>
                      <span className="text-[11px] text-slate-400">{phase.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\HeroSection.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#4C6FFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Top Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          {/* Clean kicker text without pill box */}
          <div className="text-xs font-medium text-[#8AA0FF] tracking-widest uppercase">
            AI-POWERED CAREER INTELLIGENCE
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]">
            Your Career,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#8AA0FF]">
              Engineered by AI.
            </span>
          </h1>

          {/* Clean Description with generous breathing room */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Aptivo AI connects your goals, skills, projects, resume, interviews, and opportunities into one coherent, adaptive career system.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigate('platform')}
              className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#4C6FFF]/20 transition-all hover:scale-[1.01]"
            >
              <span>Explore Platform</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('how-it-works')}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111420] hover:bg-[#161B2E] border border-white/[0.08] hover:border-white/[0.16] text-slate-200 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <span>See How It Works</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>
        </div>


      </div>

      {/* Hero Scroll Indicator at absolute bottom center */}
      <ScrollIndicator label="Scroll to explore" />
    </section>
  );
};

\\n
## File: components\home\HomeCtaSection.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { ArrowRight } from 'lucide-react';

interface HomeCtaSectionProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HomeCtaSection: React.FC<HomeCtaSectionProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <section className="py-24 relative bg-[#06070B] overflow-hidden border-t border-white/[0.06]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4C6FFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Early Access Program
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold font-display text-white tracking-tight">
          Build your career with intelligence.
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          Your goals are unique. Your preparation should be too.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto px-7 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-sm font-semibold tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-[#4C6FFF]/20 transition-all hover:scale-[1.01]"
          >
            <span>Join Aptivo AI</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('platform')}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#111420] hover:bg-[#161B2E] border border-white/[0.08] text-slate-200 text-sm font-medium transition-colors"
          >
            Explore Platform
          </button>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\TrustPositioningSection.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { ArrowRight, Check, X } from 'lucide-react';

interface TrustPositioningSectionProps {
  onNavigate: (page: PageId) => void;
}

const FRAGMENTED_POINTS = [
  { title: 'Isolated Learning', desc: 'Tutorials and lectures that do not measure hands-on code quality.' },
  { title: 'Static Resume PDFs', desc: 'Keyword lists disconnected from verified engineering contributions.' },
  { title: 'Rote Interview Prep', desc: 'Memorizing algorithm puzzles that ignore system architecture.' },
  { title: 'Application Black Holes', desc: 'Mass submissions to job boards with 2% response rates.' },
];

const UNIFIED_POINTS = [
  { title: 'Continuous Career Graph', desc: 'One adaptive model connecting your goals, projects, and skills.' },
  { title: 'Verified Code Telemetry', desc: 'Pull request reviews and architectural audits prove real ability.' },
  { title: 'Company-Specific Rubrics', desc: 'Simulated system design and technical interviews calibrated to hiring bars.' },
  { title: 'Direct Engineering Routing', desc: 'Candidates matching 85%+ readiness route directly to engineering leads.' },
];

export const TrustPositioningSection: React.FC<TrustPositioningSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 border-y border-white/[0.06] bg-[#07090F] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            A Fundamental Shift
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Career preparation is fragmented.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Engineers and students juggle disconnected tools that do not communicate, causing months of blind spots and wasted effort.
          </p>
        </div>

        {/* Clean Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Fragmented Reality */}
          <div className="p-8 rounded-2xl border border-white/[0.06] bg-[#0C0E17] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold font-display text-slate-300">
                  Fragmented Approach
                </h3>
                <span className="text-xs text-red-400 font-medium">Disconnected</span>
              </div>

              <div className="space-y-4">
                {FRAGMENTED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">{pt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] text-xs text-slate-400">
              Result: 80% of preparation effort is lost between disconnected platforms.
            </div>
          </div>

          {/* Unified Aptivo AI System */}
          <div className="p-8 rounded-2xl border border-[#4C6FFF]/30 bg-gradient-to-b from-[#0F1426] to-[#0A0D18] flex flex-col justify-between space-y-6 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <h3 className="text-lg font-bold font-display text-white">
                  Aptivo AI Connected System
                </h3>
                <span className="text-xs text-[#8AA0FF] font-medium">Unified Infrastructure</span>
              </div>

              <div className="space-y-4">
                {UNIFIED_POINTS.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4C6FFF]/20 text-[#8AA0FF] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">{pt.title}</h4>
                      <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('platform')}
                className="w-full py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span>Explore the Platform</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\home\WhyAptivoSection.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { X, Check } from 'lucide-react';

interface WhyAptivoSectionProps {
  onNavigate: (page: PageId) => void;
}

const COMPARISON_ROWS = [
  {
    topic: 'Curriculum & Direction',
    traditional: 'Generic video playlists and outdated syllabi',
    aptivo: 'Adaptive neural roadmap built for your target company',
  },
  {
    topic: 'Hands-on Projects',
    traditional: 'Tutorial clones that fail senior engineering review',
    aptivo: 'Production architectures with automated senior PR reviews',
  },
  {
    topic: 'Resume & ATS',
    traditional: 'Keyword-stuffed static PDFs with high rejection rates',
    aptivo: 'Quantified impact metrics generated from verified commits',
  },
  {
    topic: 'Interview Preparation',
    traditional: 'Isolated algorithmic puzzles without system context',
    aptivo: 'Simulated system design and coding on actual enterprise rubrics',
  },
  {
    topic: 'Hiring Access',
    traditional: 'Submitting blind applications into ATS black holes',
    aptivo: 'Direct routing to engineering leads at 85%+ readiness',
  },
];

export const WhyAptivoSection: React.FC<WhyAptivoSectionProps> = () => {
  return (
    <section className="py-24 relative bg-[#06070B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            The Difference
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
            Scattered preparation vs. One intelligent system.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Replace guesswork with a unified career intelligence platform.
          </p>
        </div>

        {/* Clean Comparison Table / Cards */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0C0F1A] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 border-b border-white/[0.06] bg-[#090B12] text-xs font-medium text-slate-400">
            <div className="md:col-span-4 uppercase tracking-wider">Dimension</div>
            <div className="md:col-span-4 uppercase tracking-wider text-red-400/90 hidden md:block">Traditional Preparation</div>
            <div className="md:col-span-4 uppercase tracking-wider text-[#8AA0FF] hidden md:block">Aptivo AI Platform</div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-5 gap-3 md:gap-4 items-center">
                <div className="md:col-span-4 text-xs font-semibold text-white">
                  {row.topic}
                </div>

                <div className="md:col-span-4 text-xs text-slate-400 flex items-start gap-2">
                  <X className="w-3.5 h-3.5 text-red-400/80 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.traditional}</span>
                </div>

                <div className="md:col-span-4 text-xs text-slate-200 flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                  <span className="leading-relaxed font-medium">{row.aptivo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

\\n
## File: components\layout\Footer.tsx
\	ypescript
import React from 'react';
import { PageId } from '../../types';
import { AptivoLogo } from '../common/AptivoLogo';
import { Briefcase, MessageCircle, Code } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWaitlist }) => {
  const handleNav = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#06070B] text-slate-400 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left focus:outline-none cursor-pointer"
              aria-label="Aptivo AI Home"
            >
              <AptivoLogo variant="full" size="md" showTagline={true} glow={true} />
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Autonomous career computation infrastructure connecting goals, skills, projects, and opportunities.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/aptivo-ai"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-[#0F121C] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:border-[#4C6FFF]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Briefcase className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Platform
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('ai-engine')} className="hover:text-white transition-colors">
                  AI Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Build Engine
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('platform')} className="hover:text-white transition-colors">
                  Interview Prep
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Solutions
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('students')} className="hover:text-white transition-colors">
                  Students
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('job-seekers')} className="hover:text-white transition-colors">
                  Job Seekers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solutions')} className="hover:text-white transition-colors">
                  Colleges
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('hr-industry')} className="hover:text-white transition-colors">
                  Companies
                </button>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('company')} className="hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('company')} className="hover:text-white transition-colors">
                  Founder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-white transition-colors">
                  Careers
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              Resources
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('resources')} className="hover:text-white transition-colors">
                  Research & Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={onOpenWaitlist} className="hover:text-white transition-colors text-[#8AA0FF]">
                  Early Access
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Aptivo AI Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="#privacy" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: Aptivo AI protects candidate data with strict zero-retention encryption."); }} className="hover:text-slate-200">
              Privacy
            </a>
            <a href="#terms" onClick={(e) => { e.preventDefault(); alert("Terms of Service: Candidate and enterprise data use complies with SOC2 standards."); }} className="hover:text-slate-200">
              Terms
            </a>
            <span>SOC2 Type II</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

\\n
## File: components\layout\LoginModal.tsx
\	ypescript
import React, { useState } from 'react';
import { AptivoLogo } from '../common/AptivoLogo';
import { X, CheckCircle2, ArrowRight, Code } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  };

  const handleReset = () => {
    setSent(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-md rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Sign-In Link Sent
            </h3>
            <p className="text-xs text-slate-300 max-w-xs mx-auto leading-relaxed">
              We sent a secure login link to <span className="text-white font-medium">{email}</span>. Click the link to access your Aptivo AI workspace.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-3">
                <AptivoLogo variant="lockup" size="sm" glow={true} />
              </div>
              <div className="text-xs font-medium text-[#8AA0FF] uppercase tracking-wider">
                Workspace Access
              </div>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                Log In to Aptivo AI
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Access your career intelligence dashboard or candidate pipeline.
              </p>
            </div>

            {/* SSO buttons */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setLoading(false); setSent(true); setEmail('developer@github.com'); }, 400);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#121626] hover:bg-[#181D32] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center justify-center gap-2.5 transition-colors"
              >
                <Code className="w-4 h-4" />
                <span>Continue with GitHub</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setLoading(false); setSent(true); setEmail('enterprise@work.com'); }, 400);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-[#121626] hover:bg-[#181D32] border border-white/[0.08] text-xs font-medium text-slate-200 flex items-center justify-center gap-2.5 transition-colors"
              >
                <span className="font-bold text-[#4C6FFF]">G</span>
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="flex items-center gap-3 my-2">
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
              <span className="text-[11px] text-slate-500">or with email</span>
              <div className="h-[1px] flex-1 bg-white/[0.06]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com or name@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md shadow-[#4C6FFF]/20"
                >
                  {loading ? 'Authenticating...' : 'Send Login Link'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

\\n
## File: components\layout\Navbar.tsx
\	ypescript
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

\\n
## File: components\layout\WaitlistModal.tsx
\	ypescript
import React, { useState } from 'react';
import { AptivoLogo } from '../common/AptivoLogo';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultRole?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, defaultRole = 'Student' }) => {
  const [role, setRole] = useState(defaultRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setIsSubmitting(true);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          role,
          goal
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to join waitlist:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setGoal('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 shadow-2xl text-slate-100 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-white">
              Waitlist Priority Confirmed
            </h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Welcome, <span className="text-white font-medium">{name}</span>. Your priority access invitation for the <span className="text-[#8AA0FF] font-medium">{role}</span> cohort has been sent to <span className="text-white">{email}</span>.
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <div className="mb-3">
                <AptivoLogo variant="lockup" size="sm" glow={true} />
              </div>
              <div className="text-xs font-medium text-[#8AA0FF] uppercase tracking-wider">
                Early Access
              </div>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                Join the Aptivo AI Waitlist
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Be the first to build your career on adaptive intelligence infrastructure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Profile Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Select Your Profile
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Student', 'Job Seeker', 'Company', 'College'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-center ${
                        role === r
                          ? 'bg-[#4C6FFF] border-transparent text-white shadow-sm'
                          : 'bg-[#080B14] border-white/[0.06] text-slate-400 hover:text-white'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              {/* Target Role */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Primary Target Role or Focus
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-Stack Engineer, AI Systems, Talent Hiring"
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md shadow-[#4C6FFF]/20"
                >
                  {isSubmitting ? 'Securing Access...' : 'Request Priority Access'}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1">
                Zero spam policy · Early cohort invitations active
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

\\n
## File: data\contentData.ts
\	ypescript
import { PlatformModule, ArchitectureLayer, JobPosition, ResourceArticle } from '../types';

export const PLATFORM_MODULES: PlatformModule[] = [
  {
    id: 'career-intelligence',
    code: '01',
    title: 'Career Intelligence',
    eyebrow: 'FOUNDATIONAL REASONING',
    description: 'Synthesizes your real-time skills, target role, company preferences, and time bandwidth into a continuous vector-mapped career trajectory.',
    features: [
      'Target role & company criteria deconstruction',
      'Dynamic multi-dimensional skill graph evaluation',
      'Real-time market requirement alignment',
      'Non-linear adaptive milestone calculation',
    ],
    mockupType: 'graph',
    aiFeedbackExample: 'Analysis indicates high frontend mastery (88%). To achieve Tier-1 Full-Stack threshold, shift next sprint to distributed event systems and cache consistency.',
  },
  {
    id: 'build',
    code: '02',
    title: 'Build Engine',
    eyebrow: 'PROOF OF COMPETENCE',
    description: 'Replaces toy tutorials with production-grade architecture challenges, real pull request evaluations, and structured team formation.',
    features: [
      'Production architecture blueprint generators',
      'Automated pull request & code depth reviews',
      'Cross-functional team formation for real builds',
      'Live portfolio deployment with verifiable commit telemetry',
    ],
    mockupType: 'build',
    aiFeedbackExample: 'Your project demonstrates strong frontend ability. Add authentication, role-based access, and deployment architecture to increase backend depth.',
  },
  {
    id: 'prepare',
    code: '03',
    title: 'Interview Prepare',
    eyebrow: 'SIMULATED RIGOR',
    description: 'Interactive voice and technical mock evaluations tailored directly to target company rubrics, system design constraints, and behavioral indicators.',
    features: [
      'Target company-calibrated rubrics (FAANG, unicorn, high-growth SaaS)',
      'Real-time system design whiteboarding evaluation',
      'Role-specific technical questioning with instant depth scoring',
      'Behavioral STAR framework precision feedback',
    ],
    mockupType: 'prepare',
    aiFeedbackExample: 'Response to database partitioning demonstrated good conceptual grasp. In company rubric for Stripe/Datadog, explicitly quantify horizontal sharding vs read replicas.',
  },
  {
    id: 'profile',
    code: '04',
    title: 'Profile & Resume Optimization',
    eyebrow: 'SIGNAL MAXIMIZATION',
    description: 'Transforms fragmented work experience into quantified, high-signal engineering profiles that pass recruiter filters and hiring manager scrutiny.',
    features: [
      'Semantic ATS parse verification and score modeling',
      'Impact quantification engine (X-Y-Z formula reinforcement)',
      'Automated skill gap detection against live target job postings',
      'LinkedIn narrative and GitHub profile signal alignment',
    ],
    mockupType: 'profile',
    aiFeedbackExample: 'Bullet 3 lacks quantitative scale. Updated recommendation: "Architected asynchronous worker pool in Go, reducing webhook ingestion latency by 41% across 1.2M daily payloads."',
  },
  {
    id: 'discover',
    code: '05',
    title: 'Discover & Opportunities',
    eyebrow: 'PRECISION MATCHING',
    description: 'Not a generic job board. Matches candidate profiles to verified hiring requisitions using high-dimensional readiness vectors and verified proof points.',
    features: [
      'Readiness-weighted job matching (94%, 87%, 81%)',
      'Direct-to-engineering pipeline dispatch without black-hole queues',
      'Explicit match criteria breakdown showing exact overlap',
      'One-click targeted application packet generation',
    ],
    mockupType: 'discover',
  },
  {
    id: 'employers',
    code: '06',
    title: 'Employers & Enterprise Pipeline',
    eyebrow: 'TALENT TELEMETRY',
    description: 'Empowers engineering leaders and talent teams to discover high-readiness candidates based on verified project proof, code depth, and technical readiness.',
    features: [
      'Role requirement vector synthesis and skill indexing',
      'Verified candidate readiness scores before interview scheduling',
      'Full technical portfolio and simulated interview audits',
      'Seamless pipeline synchronization with enterprise ATS systems',
    ],
    mockupType: 'employer',
  },
];

export const ARCHITECTURE_LAYERS: ArchitectureLayer[] = [
  {
    name: 'INPUT LAYER',
    code: '01',
    description: 'Ingests raw, heterogeneous profile signals, aspirational goals, and market criteria into clean structured vectors.',
    items: [
      { title: 'Profile & Resume Vectors', desc: 'Normalized parse of professional history, educational baseline, and credentials' },
      { title: 'Verified Skills & GitHub Telemetry', desc: 'Static code analysis, commit frequency, architecture patterns, and test coverage' },
      { title: 'Target Role & Company Archetypes', desc: 'Target company tier, technical stack requirements, compensation brackets, and level' },
      { title: 'Temporal & Bandwidth Constraints', desc: 'Available hours/week, target hiring window (30d, 90d, 180d), learning velocity' },
    ],
  },
  {
    name: 'INTELLIGENCE LAYER',
    code: '02',
    description: 'The core reasoning engine combining multi-agent graphs, market ontology, and capability gap detection.',
    items: [
      { title: 'Dynamic Skill Graph', desc: 'Interconnected graph of 4,800+ technical competencies and dependencies' },
      { title: 'Role & Company Intelligence', desc: 'Continuously refreshed hiring rubrics from 2,500+ technology organizations' },
      { title: 'Gap Detection Matrix', desc: 'Vector difference between current readiness state and target role expectations' },
      { title: 'Predictive Recommendation Engine', desc: 'Calculates the highest-ROI sequence of actions to close critical gaps' },
    ],
  },
  {
    name: 'DECISION LAYER',
    code: '03',
    description: 'Translates high-dimensional intelligence into concrete, day-by-day actionable engineering work.',
    items: [
      { title: 'Personalized Adaptive Roadmap', desc: 'Phased milestones with deterministic checkpoints and measurable outcomes' },
      { title: 'Production Project Blueprints', desc: 'Architectural specifications designed to provide irrefutable hiring proof' },
      { title: 'Interview Strategy Rubrics', desc: 'Precision mock schedules focused specifically on historical weak points' },
      { title: 'Direct Opportunity Matches', desc: 'Algorithmic routing to open enterprise requisitions when readiness passes 85%' },
    ],
  },
  {
    name: 'FEEDBACK LOOP',
    code: '04',
    description: 'Continuously measures actual performance during development, practice, and live market interaction.',
    items: [
      { title: 'Milestone Completion Velocity', desc: 'Tracks actual hours versus anticipated mastery velocity across phases' },
      { title: 'Code Review & PR Evaluations', desc: 'Measures architectural complexity, edge-case handling, and security rigor' },
      { title: 'Mock Interview Telemetry', desc: 'Evaluates clarity, algorithmic optimality, system scalability, and confidence' },
      { title: 'Market Application Signals', desc: 'Monitors recruiter responses, screening pass rates, and interview progression' },
    ],
  },
  {
    name: 'ADAPTIVE AI',
    code: '05',
    description: 'The perpetual reconfiguration engine that prevents career preparation from becoming stale.',
    items: [
      { title: 'Real-Time Trajectory Recalibration', desc: 'Instantly re-routes next sprint tasks if a milestone is conquered or blocked' },
      { title: 'Role Pivot Optimization', desc: 'If candidate targets change (e.g., Backend to Platform Engineer), adjusts seamlessly' },
      { title: 'Evolving Market Weights', desc: 'Re-weights skill importance as enterprise technology stacks shift in real time' },
    ],
  },
];

export const ADAPTIVE_LOOP_STEPS = [
  { step: '01', title: 'DEFINE', desc: 'Target role, dream companies, timeline, and weekly bandwidth.' },
  { step: '02', title: 'ANALYZE', desc: 'Deep-vector scan of current code, projects, and resume baseline.' },
  { step: '03', title: 'BUILD', desc: 'Execute production-level architecture projects with live AI PR review.' },
  { step: '04', title: 'PRACTICE', desc: 'Simulated technical & system design rounds on company rubrics.' },
  { step: '05', title: 'APPLY', desc: 'Algorithmic routing directly to high-match hiring managers.' },
  { step: '06', title: 'MEASURE', desc: 'Track interview conversions, code depth, and feedback telemetry.' },
  { step: '07', title: 'ADAPT', desc: 'Engine instantly recalculates roadmap and priority based on real outcomes.' },
];

export const HOW_IT_WORKS_STEPS = [
  {
    num: '01',
    title: 'DEFINE YOUR GOAL',
    eyebrow: 'OBJECTIVE SYNTHESIS',
    description: 'Input your aspirational career target — specific job titles (e.g. Senior Distributed Systems Engineer), target companies, timeline constraints, and weekly focus capacity.',
    detailPoints: ['Granular role targeting beyond generic titles', 'Target organization culture & engineering tier selection', 'Realistic bandwidth calibration (4 to 25+ hours/week)'],
  },
  {
    num: '02',
    title: 'BUILD YOUR PROFILE',
    eyebrow: 'DEEP BASELINE SCAN',
    description: 'Connect GitHub, upload your resume, or complete a 10-minute diagnostic. Aptivo maps your historical code commits, project complexity, and technical breadth.',
    detailPoints: ['AST parsing of public repositories', 'Quantified skill extraction and depth verification', 'Identification of blind spots and hidden strengths'],
  },
  {
    num: '03',
    title: 'MEET YOUR AI',
    eyebrow: 'CAREER ENGINE INITIALIZATION',
    description: 'The Aptivo AI Engine configures your unique career model. It benchmarks your profile against current hiring bars at your target companies.',
    detailPoints: ['Neural graph mapping across 4,800+ tech competencies', 'Clear readiness score generation with gap attribution', 'Transparent reasoning on what hiring managers expect'],
  },
  {
    num: '04',
    title: 'FOLLOW YOUR ROADMAP',
    eyebrow: 'DYNAMIC SEQUENCING',
    description: 'Receive an unambiguous, phased execution plan. Each phase contains prioritized concepts, code milestones, and verifiable deliverables.',
    detailPoints: ['Zero fluff or repetitive tutorial loops', 'Clear prerequisites and dependency chains', 'Milestones weighted by hiring conversion impact'],
  },
  {
    num: '05',
    title: 'BUILD PROOF',
    eyebrow: 'PRODUCTION-GRADE ARTIFACTS',
    description: 'Create non-trivial software systems. Aptivo reviews your architectural schemas, pulls requests, and provides actionable senior-level engineering feedback.',
    detailPoints: ['Architectural blueprints with scalable constraints', 'Automated code reviews checking concurrency and performance', 'Deployable systems that command recruiter attention'],
  },
  {
    num: '06',
    title: 'PRACTICE',
    eyebrow: 'RIGOROUS EVALUATION',
    description: 'Step into company-specific interview simulations. Practice live coding, system design architecture, and behavioral STAR scenarios under realistic pressure.',
    detailPoints: ['Real rubrics matching target company engineering bars', 'Instant breakdown of algorithmic time/space complexity', 'Behavioral scoring on communication clarity and leadership'],
  },
  {
    num: '07',
    title: 'DISCOVER OPPORTUNITIES',
    eyebrow: 'READINESS-DRIVEN ROUTING',
    description: 'As your readiness crosses target thresholds, get surfaced directly to partner employers and engineering teams actively searching for verified competence.',
    detailPoints: ['No blind job applications into black holes', 'Direct signal sharing with engineering hiring leads', 'Interview invitations pre-qualified by your verified project proof'],
  },
  {
    num: '08',
    title: 'KEEP ADAPTING',
    eyebrow: 'CONTINUOUS EVOLUTION',
    description: 'Careers are non-linear. Whether you hit a roadblock, clear an interview early, or pivot your focus, Aptivo recalculates your optimal path in real time.',
    detailPoints: ['Roadmap adapts based on practice performance', 'Feedback from actual interviews feeds back into the engine', 'Lifelong trajectory optimization across every career phase'],
  },
];

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'staff-ai-researcher',
    title: 'Staff AI / ML Research Engineer',
    department: 'AI / ML',
    location: 'Bengaluru / San Francisco / Remote',
    type: 'Full-time',
    description: 'Lead the architecture of our multi-agent career graph and dynamic vector reasoning engine.',
    responsibilities: [
      'Design graph neural networks modeling skills, role evolutions, and competency gaps',
      'Optimize multi-agent planning frameworks for real-time roadmap synthesis',
      'Scale vector indexing and semantic retrieval over millions of technical criteria',
    ],
    requirements: [
      '5+ years building and deploying deep learning or graph representation systems in production',
      'Deep fluency with PyTorch, distributed training, and LLM orchestration',
      'Demonstrated passion for education systems or talent intelligence',
    ],
  },
  {
    id: 'senior-distributed-systems',
    title: 'Senior Distributed Systems Engineer',
    department: 'Engineering',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Build the low-latency backbone powering real-time code evaluation and telemetry ingestion.',
    responsibilities: [
      'Architect robust event streams handling AST parsing and live repo indexing',
      'Ensure sub-100ms response times across complex neural graph querying',
      'Maintain enterprise-grade security and isolation for user source code sandbox environments',
    ],
    requirements: [
      'Strong expertise with Go or Rust, Kafka, gRPC, and PostgreSQL',
      'Experience containerizing and sandboxing untrusted execution environments',
      'Rigorous focus on high availability, telemetry, and distributed profiling',
    ],
  },
  {
    id: 'lead-product-designer',
    title: 'Lead Product Designer',
    department: 'Design',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Define the visual and interaction language of next-generation career intelligence systems.',
    responsibilities: [
      'Translate intricate neural graph models into intuitive, empowering user interfaces',
      'Design complex data visualizations for skill gaps, roadmaps, and candidate readiness',
      'Uphold our minimalist, high-contrast, technical design constitution',
    ],
    requirements: [
      'Portfolio demonstrating exceptional craft in developer tools, complex SaaS, or financial UI',
      'Mastery of Figma design systems, motion principles, and frontend execution',
      'Deep empathy for engineers, students, and talent leaders',
    ],
  },
  {
    id: 'principal-product-manager',
    title: 'Principal Product Manager, Talent Infrastructure',
    department: 'Product',
    location: 'Bengaluru / Remote',
    type: 'Full-time',
    description: 'Spearhead the product roadmap connecting student readiness signals to enterprise hiring workflows.',
    responsibilities: [
      'Define feature roadmaps for both candidate preparation and enterprise discovery suites',
      'Collaborate closely with AI research and engineering to translate capabilities into customer value',
      'Engage directly with engineering hiring managers and university placement deans',
    ],
    requirements: [
      '6+ years technical product management in developer tools, enterprise HRTech, or AI SaaS',
      'Proven track record scaling B2B or B2C products from 0 to 1 and 1 to 10',
      'Exceptional analytical rigor and technical fluency',
    ],
  },
  {
    id: 'enterprise-growth-lead',
    title: 'Enterprise Growth & Partnerships Lead',
    department: 'Growth',
    location: 'Bengaluru / Hybrid',
    type: 'Full-time',
    description: 'Build strategic hiring partnerships with high-growth technology companies and premier universities.',
    responsibilities: [
      'Drive enterprise adoption of Aptivo AI Candidate Discovery across tech companies',
      'Establish institutional deployment programs with leading engineering universities',
      'Build long-term pipeline trust with engineering VPs and Heads of Talent',
    ],
    requirements: [
      '4+ years B2B tech sales, strategic partnerships, or corporate talent solutions',
      'Strong existing network among CTOs, engineering directors, and campus recruiting leads',
      'Ability to clearly articulate deep technical product value',
    ],
  },
];

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    id: 'skill-graph-revolution',
    title: 'The Death of the Static Resume: How Graph Embeddings Map Verified Capability',
    category: 'Career Intelligence',
    readTime: '6 min read',
    date: 'September 2026',
    summary: 'Why PDF resumes fail both engineers and hiring managers, and how multidimensional skill graphs represent actual engineering capacity with mathematical fidelity.',
    content: [
      'For thirty years, hiring in technology has relied on a flat, two-dimensional document invented in the industrial era: the resume. In an age where engineering requires nuanced mastery of distributed systems, concurrency primitives, and dynamic cloud environments, a bullet point stating "worked on microservices" conveys almost zero useful signal.',
      'Aptivo AI approaches capability through graph representation learning. Rather than treating skills as isolated buzzwords, our ontology models the dependency structures between conceptual knowledge and execution artifacts. A developer who demonstrates clean cache eviction strategies and atomic database transactions in production code is mathematically mapped to system reliability readiness.',
      'By decoupling career assessment from self-reported credentials and anchoring it in verifiable telemetry, both candidates and employers save hundreds of hours of wasted interview loops.',
    ],
  },
  {
    id: 'backend-system-design-rubrics',
    title: 'Deconstructing Top-Tier System Design Interviews: What Real Rubrics Measure',
    category: 'Engineering Careers',
    readTime: '9 min read',
    date: 'September 2026',
    summary: 'A deep dive into the evaluation criteria used by high-scale software organizations to differentiate Staff-level architects from mid-level implementers.',
    content: [
      'In senior engineering interviews, candidates rarely fail because they cannot draw boxes for load balancers or databases. They fail because they fail to articulate back-of-the-envelope throughput calculations, fail to identify single points of failure under partition, and treat distributed consensus as a trivial plug-in.',
      'Aptivo AI simulated interview modules analyze your structural trade-offs in real time. Are you considering read-heavy versus write-heavy caching ratios? How does your design handle catastrophic node failover?',
      'When you practice with clear, quantified feedback on each architectural decision, your ability to defend design decisions under pressure accelerates exponentially.',
    ],
  },
  {
    id: 'ai-native-career-infrastructure',
    title: 'Adaptive Career Engines: Why Linear Curriculums Are Obsolete',
    category: 'AI & Careers',
    readTime: '7 min read',
    date: 'August 2026',
    summary: 'Traditional bootcamps and courses force every learner through the same static sequential steps. Here is how adaptive AI loops dynamically recalculate learning vectors.',
    content: [
      'Linear education models operate under the false assumption that all individuals start with identical baselines and learn at identical rates. If you are already fluent in React component lifecycles, forcing you through 40 hours of beginner JavaScript syntax is not merely inefficient — it drains motivation.',
      'Aptivo AI treats your preparation as an optimization function with constraints: target role, target timeline, and available hours per week. If you grasp asynchronous event streaming in half the projected time, the engine immediately elevates your next challenge to distributed tracing or raft consensus.',
      'Continuous reassessment ensures that every hour you invest yields maximum marginal increase in your career readiness score.',
    ],
  },
  {
    id: 'hiring-beyond-pedigree',
    title: 'Signal Over Pedigree: How Enterprise Engineering Teams Discover Hidden Talent',
    category: 'Hiring',
    readTime: '5 min read',
    date: 'August 2026',
    summary: 'How leading tech companies are shifting away from college tier filtering and towards verified code depth, PR quality, and real problem-solving proof.',
    content: [
      'College pedigree and historical brand names have long served as crude proxies for engineering aptitude. But in a global talent market, this filter excludes thousands of exceptional engineers who learned through non-traditional pathways or lesser-known universities.',
      'Aptivo AI provides hiring partners with candidate telemetry that matters: pull request quality, test coverage discipline, architectural coherence, and performance under simulated technical scrutiny.',
      'The result is a meritocratic pipeline where talent is discovered and hired based purely on verifiable engineering readiness.',
    ],
  },
];

\\n
## File: data\navigation.ts
\	ypescript
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

\\n
## File: main.tsx
\	ypescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)

\\n
## File: pages\AiEnginePage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../types';
import { ARCHITECTURE_LAYERS } from '../data/contentData';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import {
  ArrowDown,
  CheckCircle2,
  Cpu,
} from 'lucide-react';

interface AiEnginePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const AiEnginePage: React.FC<AiEnginePageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(1);

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Autonomous Career Computation
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          The AI engine for high-stakes career decisions.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Aptivo AI connects candidate baselines, target standards, verified project telemetry, and hiring rubrics into one continuously evolving neural model.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Request Architecture Demo
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Architecture" targetId="architecture-layers" />
      </section>

      {/* 5-Layer Architecture Diagram */}
      <section id="architecture-layers" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Layered Pipeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Architecture & Reasoning Layers
          </h2>
          <p className="text-xs text-slate-400">
            Select any layer to inspect the components and reasoning rules.
          </p>
        </div>

        {/* Vertical Stack */}
        <div className="space-y-4">
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;

            return (
              <div key={layer.name} className="space-y-3">
                {/* Layer Card */}
                <div
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#4C6FFF]/60 bg-gradient-to-r from-[#11172A] to-[#0A0D17] shadow-lg'
                      : 'border-white/[0.08] bg-[#0C0E18] hover:border-white/[0.16]'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-semibold ${
                        isSelected ? 'bg-[#4C6FFF] text-white' : 'bg-white/[0.06] text-slate-400'
                      }`}>
                        {layer.code}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold font-display text-white">
                          {layer.name}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-xs text-[#8AA0FF] font-medium">
                      {layer.items.length} Subsystems
                    </span>
                  </div>

                  {/* Components Grid */}
                  <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {layer.items.map((comp) => (
                      <div
                        key={comp.title}
                        className="p-3 rounded-xl bg-[#080B14] border border-white/[0.04] text-xs space-y-1"
                      >
                        <div className="font-semibold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF]" />
                          <span>{comp.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-snug pl-5">
                          {comp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Connector Arrow */}
                {idx < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center py-0.5">
                    <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\CareersPage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId, JobPosition } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ArrowRight, MapPin, CheckCircle2, X } from 'lucide-react';

interface CareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [activeJob, setActiveJob] = useState<JobPosition | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const departments = ['All', 'Engineering', 'AI / ML', 'Product', 'Design', 'Growth'];

  const [jobs, setJobs] = React.useState<JobPosition[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try {
        // Replace with actual backend API endpoint later
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/jobs`);
        if (!response.ok) throw new Error('Failed to fetch jobs');
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Fallback for development if backend isn't ready
        setJobs([]); 
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const filteredJobs = selectedDept === 'All'
    ? jobs
    : jobs.filter((j) => j.department === selectedDept);

  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantEmail || !activeJob) return;

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: applicantName,
          email: applicantEmail,
          portfolio: applicantPortfolio,
          jobId: activeJob.id
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setActiveJob(null);
          setApplicantName('');
          setApplicantEmail('');
          setApplicantPortfolio('');
        }, 2500);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Join the Founding Team
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Build the future of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          We are engineering the algorithms, graph ontologies, and telemetry pipelines powering human potential. Work on deep problems with high autonomy.
        </p>

        {/* Department Filters */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-colors ${
                selectedDept === dept
                  ? 'bg-[#4C6FFF] text-white font-medium shadow-sm'
                  : 'bg-[#101320] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View Open Roles" targetId="open-positions" />
      </section>

      {/* Open Positions List */}
      <section id="open-positions" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs text-slate-400">
          <span>{filteredJobs.length} Open Positions</span>
          <span>Competitive Salary + Equity</span>
        </div>

        <div className="space-y-3">
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl border border-white/[0.08] bg-[#0C0F1A]">
              <h3 className="text-xl font-display font-bold text-white mb-2">No Openings Currently</h3>
              <p className="text-sm text-slate-400">New Opening will come soon</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] hover:border-white/[0.16] transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-[#8AA0FF] font-medium">{job.department}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mt-1">
                      {job.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveJob(job)}
                    className="px-4 py-2 rounded-lg bg-[#141828] hover:bg-[#4C6FFF] border border-white/[0.08] text-xs font-semibold text-white flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto transition-colors"
                  >
                    <span>View Role</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {job.requirements.slice(0, 3).map((req) => (
                    <span
                      key={req}
                      className="px-2.5 py-0.5 rounded-md bg-[#080B14] border border-white/[0.04] text-[11px] text-slate-400"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Clean Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="max-w-lg w-full rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <div className="text-xs font-medium text-[#8AA0FF] uppercase tracking-wider">
                Application: {activeJob.department}
              </div>
              <h2 className="text-xl font-bold font-display text-white mt-1">
                {activeJob.title}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeJob.location} · {activeJob.type}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Application Received</h4>
                <p className="text-xs text-slate-300">
                  Our engineering team will review your background and telemetry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.08] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#4C6FFF]/20"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

\\n
## File: pages\CompanyPage.tsx
\	ypescript
import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { AptivoLogo } from '../components/common/AptivoLogo';
import { Globe, ArrowRight } from 'lucide-react';

interface CompanyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          About Aptivo AI
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          We are building the future of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Aptivo AI is an AI career technology company building the autonomous reasoning infrastructure for human professional development.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Our Mission" targetId="company-vision" />
      </section>

      {/* Vision, Mission & Principles Grid */}
      <section id="company-vision" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Why We Exist */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
            <h2 className="text-xl font-bold font-display text-white">
              Why We Exist
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              For decades, career preparation has been treated as static education: watch video lectures, memorize answers, and spray resumes across job boards. This model fails both developers seeking fulfilling work and engineering leaders struggling to evaluate real competence.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We exist to replace fragmented guessing with closed-loop engineering telemetry — empowering any motivated person to reach their aspirational potential through deterministic steps.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
            <h2 className="text-xl font-bold font-display text-white">
              Vision & Mission
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">Our Vision:</strong> A world where career advancement is decoupled from institutional pedigree and anchored entirely in verified capability, real-time feedback, and mathematical matching.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              <strong className="text-white">Our Mission:</strong> To construct the global career intelligence infrastructure that personalizes preparation, validates skill depth, and directly routes engineers into high-impact roles.
            </p>
          </div>

          {/* Core Technology */}
          <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6 md:col-span-2">
            <div>
              <h2 className="text-xl font-bold font-display text-white">
                Core Technology Principles
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                The technical foundations powering Aptivo AI.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-1">
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">01. Graph Ontologies</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Mapping 4,800+ skill nodes and mutual dependencies rather than treating skills as flat text keywords.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">02. Telemetry Verification</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  AST repo analysis, git commit histories, and simulated interview benchmarks replacing unverified claims.
                </p>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-semibold text-[#8AA0FF]">03. Non-Linear Adaptation</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Closed-loop dynamic recalculation that updates your immediate trajectory upon every conquered milestone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Architecture Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#0F1424] to-[#0A0D18] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2 max-w-md">
            <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
              Brand Architecture
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Engineered for Upward Trajectory
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The continuous 3D ribbon mark and soaring arrow represent deterministic career acceleration: transforming raw ambition into verified production mastery.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#060810] border border-white/[0.08] flex flex-col items-center justify-center shadow-2xl">
            <AptivoLogo variant="full" size="lg" showTagline={true} glow={true} />
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl border border-white/[0.08] bg-[#0D101C]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Clean Portrait Container */}
            <div className="md:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-2xl border border-[#4C6FFF]/30 bg-gradient-to-b from-[#13192E] to-[#0A0D18] flex flex-col items-center justify-center text-center p-4 shadow-xl">
                <img 
                  src="/prittt.jpg" 
                  alt="Pritam Lohar" 
                  className="w-20 h-20 rounded-full border-2 border-[#4C6FFF]/50 object-cover mb-3 shadow-lg"
                />
                <div className="text-sm font-bold font-display text-white">
                  Pritam Lohar
                </div>
                <div className="text-xs text-[#8AA0FF] mt-0.5">
                  Founder & Architect
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Aptivo AI
                </div>
              </div>
            </div>

            {/* Founder Narrative */}
            <div className="md:col-span-8 space-y-4">
              <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
                Founder's Perspective
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Pritam Lohar
              </h2>
              <div className="text-xs text-slate-400">
                Founder, Aptivo AI
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Founder building Aptivo AI to make career preparation more intelligent, personalized, and connected through AI.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                "We set out to build Aptivo AI because human career trajectories should not be held hostage by uncalibrated advice, geographic isolation, or static credentials. By building deep telemetry into how engineers learn, build, and solve problems, we are constructing a more meritocratic bridge between ambition and world-class technology companies."
              </p>

              <div className="pt-2">
                <a
                  href="http://www.linkedin.com/in/pritam-lohar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#141828] hover:bg-[#1E2540] border border-white/[0.08] text-xs font-medium text-white transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#8AA0FF]" />
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\ContactPage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ShieldCheck, Building, CheckCircle2 } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [roleType, setRoleType] = useState<string>("Company");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roleOptions = [
    "Student",
    "Job Seeker",
    "Company",
    "College",
    "Partnership",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !message) return;
    setLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          organization: org,
          message,
          type: roleType
        })
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Failed to send message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Contact & Partnerships
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Let's build the future of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Whether you're exploring enterprise pilot deployments, academic partnerships, or personalized career intelligence, our team is ready.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Send an Inquiry" targetId="contact-form-section" />
      </section>

      {/* Form & Info Dual Column */}
      <section id="contact-form-section" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Contact Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Get in Touch
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Our core team responds within one business day for enterprise and institutional inquiries.
                </p>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Enterprise & Partnerships</div>
                  <div className="text-white font-medium">enterprise@aptivo.ai</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Campus & Institutional Pilots</div>
                  <div className="text-white font-medium">universities@aptivo.ai</div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04] space-y-1">
                  <div className="text-[11px] text-[#8AA0FF] font-medium">Founder & Executive Office</div>
                  <div className="text-white font-medium">pritam@aptivo.ai</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>SOC2 Type II & GDPR Compliant Infrastructure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-slate-500" />
                  <span>Aptivo AI Inc. · Global & Remote</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A]">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-white">
                    Message Received
                  </h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {name || 'for reaching out'}. Our engineering team has received your communication and will follow up within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-4 py-2 rounded-lg bg-[#141828] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-300">I am inquiring as a:</label>
                    <div className="flex flex-wrap gap-2">
                      {roleOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setRoleType(opt)}
                          className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                            roleType === opt
                              ? 'bg-[#4C6FFF] text-white font-medium'
                              : 'bg-[#080B14] text-slate-400 border border-white/[0.04] hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Work Email</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Organization or Institution</label>
                    <input
                      type="text"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      placeholder="Company, University, or Independent"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message / Inquiry Details</label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your team, timeline, or engineering goals..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#080B14] border border-white/[0.06] text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#4C6FFF] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-[#4C6FFF]/20 disabled:opacity-50"
                    >
                      {loading ? 'Sending Inquiry...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\HomePage.tsx
\	ypescript
import React from 'react';
import { PageId } from '../types';
import { HeroSection } from '../components/home/HeroSection';
import { TrustPositioningSection } from '../components/home/TrustPositioningSection';
import { AudienceSection } from '../components/home/AudienceSection';
import { AiEngineDiagramSection } from '../components/home/AiEngineDiagramSection';
import { AdaptiveCareerLoopSection } from '../components/home/AdaptiveCareerLoopSection';
import { DashboardPreviewSection } from '../components/home/DashboardPreviewSection';
import { WhyAptivoSection } from '../components/home/WhyAptivoSection';
import { HomeCtaSection } from '../components/home/HomeCtaSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} onOpenWaitlist={() => onOpenWaitlist()} />
      <TrustPositioningSection onNavigate={onNavigate} />
      <AudienceSection onNavigate={onNavigate} />
      <AiEngineDiagramSection onNavigate={onNavigate} />
      <AdaptiveCareerLoopSection />
      <DashboardPreviewSection />
      <WhyAptivoSection onNavigate={onNavigate} />
      <HomeCtaSection onNavigate={onNavigate} onOpenWaitlist={() => onOpenWaitlist()} />
    </div>
  );
};

\\n
## File: pages\HowItWorksPage.tsx
\	ypescript
import React from 'react';
import { PageId } from '../types';
import { HOW_IT_WORKS_STEPS } from '../data/contentData';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { CheckCircle2 } from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Execution Methodology
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Eight steps. Zero guesswork.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          The step-by-step engineering pipeline turning raw ambition into verified production readiness and high-confidence job offers.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Start at Step 1
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Step Timeline" targetId="timeline-steps" />
      </section>

      {/* Clean Timeline */}
      <section id="timeline-steps" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pl-8 sm:pl-10 space-y-10">
          {/* Subtle Vertical Connector */}
          <div className="absolute left-[13px] sm:left-[17px] top-4 bottom-4 w-[2px] bg-white/[0.1]" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Timeline Indicator */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-5 w-6 h-6 rounded-full bg-[#06070B] border-2 border-[#4C6FFF] flex items-center justify-center text-[11px] font-semibold text-white">
                {idx + 1}
              </div>

              {/* Step Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-white/[0.06] pb-3">
                  <div>
                    <span className="text-xs font-medium text-[#8AA0FF]">
                      {step.eyebrow}
                    </span>
                    <h2 className="text-xl font-bold font-display text-white mt-0.5">
                      {step.title}
                    </h2>
                  </div>
                  <span className="text-xs text-slate-400">
                    Step {idx + 1} of 8
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {step.detailPoints.map((point, pidx) => (
                    <div
                      key={pidx}
                      className="p-2.5 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs text-slate-300 flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\HrIndustryPage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { Building2, CheckCircle2 } from 'lucide-react';

interface HrIndustryPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const EMPLOYER_WORKFLOW = [
  { step: '01', title: 'Create Role', desc: 'Define tech stack requirements, architectural scope, and seniority constraints.' },
  { step: '02', title: 'Criteria Mapping', desc: 'Aptivo maps job criteria into high-dimensional competency weights across 4,800+ nodes.' },
  { step: '03', title: 'Telemetry Search', desc: 'Scours verified candidate telemetry for mathematical and architectural overlap.' },
  { step: '04', title: 'Readiness Signals', desc: 'Review actual pull requests, code test coverage, and mock interview performance.' },
  { step: '05', title: 'Direct Invite', desc: 'One-click invite candidates who pass your verified threshold (e.g. 85%+ score).' },
  { step: '06', title: 'Technical Interview', desc: 'Skip low-signal phone screens; jump straight to technical debriefs and team fit.' },
  { step: '07', title: 'Deterministic Offer', desc: 'Make offers with calibrated confidence in hands-on technical execution.' },
];

export const HrIndustryPage: React.FC<HrIndustryPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Enterprise Talent Intelligence
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Hire beyond the resume.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Stop reviewing keyword-stuffed resumes and unverified claims. Discover engineering talent using verified code depth, PR quality, and calibrated readiness signals.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Deploy Enterprise Pilot
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View Hiring Funnel" targetId="employer-funnel" />
      </section>

      {/* Employer 7-Step Workflow */}
      <section id="employer-funnel" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Hiring Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            Verified Talent Discovery Funnel
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {EMPLOYER_WORKFLOW.map((wf) => (
            <div
              key={wf.step}
              className="p-3.5 rounded-xl border border-white/[0.08] bg-[#0C0F1A] space-y-1.5"
            >
              <div className="text-xs font-mono text-[#8AA0FF]">
                {wf.step}
              </div>
              <div className="text-xs font-semibold text-white">
                {wf.title}
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                {wf.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Talent Console Preview */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#8AA0FF] font-medium">Enterprise Console</span>
              <h3 className="text-lg font-bold font-display text-white mt-0.5">
                Pre-Screened Engineering Cohort
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Verified Readiness ≥ 85%
            </div>
          </div>

          <div className="space-y-3">
            {[
              { id: 'Candidate #4029', role: 'Full-Stack Engineer', readiness: 92, verifiedStack: 'TypeScript, React, Node.js, Distributed Caching', prCoverage: '94% Test Coverage' },
              { id: 'Candidate #7118', role: 'Systems Backend Engineer', readiness: 89, verifiedStack: 'Go, Kafka, Docker, Postgres Indexing', prCoverage: '91% Concurrency Verification' },
              { id: 'Candidate #9420', role: 'Infrastructure SRE', readiness: 87, verifiedStack: 'Kubernetes, Terraform, AWS, Prometheus', prCoverage: 'Zero Production Incident History' },
            ].map((cand, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/[0.04] bg-[#080B14] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{cand.id} · {cand.role}</h4>
                    <p className="text-xs text-slate-400">{cand.verifiedStack}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {cand.readiness}% Readiness Score
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-white/[0.04]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0" />
                  <span>{cand.prCoverage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\JobSeekersPage.tsx
\	ypescript
import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface JobSeekersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const CONVERSION_STAGES = [
  { step: '01', title: 'Profile Analysis', desc: 'Scan code repositories, commit telemetry, and past responsibilities to extract verified competence.' },
  { step: '02', title: 'Job Matching', desc: 'Benchmark against active enterprise requisitions using high-dimensional criteria matching.' },
  { step: '03', title: 'Gap Detection', desc: 'Isolate the 1–3 precise architectural deficiencies lowering your interview pass probability.' },
  { step: '04', title: 'Resume Optimization', desc: 'Re-engineer bullet points into quantified impact specifications that pass ATS scrutiny.' },
  { step: '05', title: 'Interview Preparation', desc: 'Run high-pressure mock evaluations tailored to target company engineering rubrics.' },
  { step: '06', title: 'Direct Application', desc: 'Direct dispatch to hiring managers with verified technical telemetry attached.' },
  { step: '07', title: 'Live Interviewing', desc: 'Execute live coding and system design rounds with verified confidence.' },
  { step: '08', title: 'Offer Execution', desc: 'Command senior compensation backed by proven, peer-reviewed engineering metrics.' },
];

export const JobSeekersPage: React.FC<JobSeekersPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Lateral Career Transition
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Don't just apply. Prepare to convert.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Mass-applying with a generic PDF yields a 2% callback rate. Aptivo AI turns your existing technical background into a calibrated, high-converting candidate profile.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Audit Your Candidate Profile
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="View 8-Stage Pathway" targetId="conversion-pipeline" />
      </section>

      {/* 8-Stage Conversion Pipeline */}
      <section id="conversion-pipeline" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-medium text-slate-400 tracking-wider uppercase">
            Systematic Methodology
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            The Candidate-to-Offer Pathway
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CONVERSION_STAGES.map((st) => (
            <div
              key={st.step}
              className="p-5 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-2.5"
            >
              <span className="text-xs font-mono text-[#8AA0FF]">
                Step {st.step}
              </span>

              <h3 className="text-sm font-bold font-display text-white">
                {st.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Matching Showcase */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs text-[#8AA0FF] font-medium">Requisition Matching</span>
              <h3 className="text-lg font-bold font-display text-white mt-0.5">
                Live Opportunity Overlap Analysis
              </h3>
            </div>
            <div className="text-xs text-slate-400">
              Calibrated for Series B+ & Enterprise
            </div>
          </div>

          <div className="space-y-3">
            {[
              { role: 'Staff Infrastructure Engineer', match: 94, org: 'Autonomous Cloud Platform', salary: '$210k - $250k', gaps: 'Zero critical gaps detected' },
              { role: 'Senior Distributed Backend Engineer', match: 87, org: 'Fintech Payments Infrastructure', salary: '$185k - $220k', gaps: '1 gap in review: Distributed Consensus' },
              { role: 'Systems Reliability Architect', match: 81, org: 'High-Throughput Streaming Network', salary: '$175k - $210k', gaps: '2 gaps: Kernel bypass networking, eBPF' },
            ].map((j, i) => (
              <div key={i} className="p-4 rounded-xl border border-white/[0.04] bg-[#080B14] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{j.role}</h4>
                    <p className="text-xs text-slate-400">{j.org} · {j.salary}</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md self-start sm:self-auto">
                    {j.match}% Alignment
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-white/[0.04]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0" />
                  <span>{j.gaps}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

\\n
## File: pages\PlatformPage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../types';
import { PLATFORM_MODULES } from '../data/contentData';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code,
  Mic,
  FileCheck,
  Building,
} from 'lucide-react';

interface PlatformPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onNavigate, onOpenWaitlist }) => {

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Unified Career Infrastructure
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          One platform for your entire career trajectory.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From diagnosing baseline competencies to verifying production pull requests, mastering technical interviews, and routing directly to hiring teams.
        </p>



        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Modules" targetId="platform-modules" />
      </section>

      {/* Deep-Dive on 6 Modules */}
      <section id="platform-modules" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {PLATFORM_MODULES.map((module, idx) => (
          <div
            key={module.id}
            id={module.id}
            className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0A0D18] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Col: Module Description */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-medium text-[#8AA0FF]">0{idx + 1} — {module.eyebrow}</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  {module.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {module.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {module.features.map((feat, fidx) => (
                  <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWaitlist(module.title)}
                  className="px-5 py-2.5 rounded-lg bg-[#141828] hover:bg-[#4C6FFF] border border-white/[0.08] text-xs font-medium text-white flex items-center gap-2 transition-colors"
                >
                  <span>Request Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Col: Clean Module UI Mockup Preview */}
            <div className="lg:col-span-7">
              <div className="rounded-xl border border-white/[0.08] bg-[#0E1220] p-6 space-y-4">
                {/* 01: Career Intelligence Preview */}
                {module.mockupType === 'graph' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Trajectory Target</div>
                        <div className="text-sm font-semibold text-white">Senior Distributed Backend Engineer</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        94% Match
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04]">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Verified Stack</span>
                        <span className="text-white font-medium">Go, Kafka, Docker, gRPC</span>
                      </div>
                      <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04]">
                        <span className="text-[11px] text-slate-400 block mb-0.5">Identified Gaps</span>
                        <span className="text-[#8AA0FF] font-medium">Raft Consensus, eBPF Tracing</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-200">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>AI Trajectory Assessment</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{module.aiFeedbackExample}</p>
                    </div>
                  </div>
                )}

                {/* 02: Build Engine Preview */}
                {module.mockupType === 'build' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Automated Pull Request Review</div>
                        <div className="text-sm font-semibold text-white">Event-Driven Notification Broker</div>
                      </div>
                      <span className="text-xs text-[#8AA0FF] font-medium">
                        PR Evaluated
                      </span>
                    </div>

                    <div className="bg-[#080B14] p-3 rounded-lg font-mono text-[11px] text-slate-300 space-y-1">
                      <div className="text-emerald-400">+ func (b *Broker) HandleDeadLetter(msg []byte) error</div>
                      <div className="text-emerald-400">+   return b.retryPolicy.Execute(context.Background(), msg)</div>
                      <div className="text-slate-500">// Test coverage: 91.4% with race detector enabled</div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5" />
                        <span>Senior Code Reviewer Feedback</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 03: Prepare Engine Preview */}
                {module.mockupType === 'prepare' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Mock Technical Simulation</div>
                        <div className="text-sm font-semibold text-white">Global Distributed Rate Limiter</div>
                      </div>
                      <span className="text-xs text-amber-400 font-medium">
                        Rubric Evaluated
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Concurrency Architecture:</span>
                        <span className="text-white font-medium">88/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Distributed Synchronization:</span>
                        <span className="text-white font-medium">92/100</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <Mic className="w-3.5 h-3.5" />
                        <span>AI Interviewer Rubric Feedback</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 04: Profile Optimization Preview */}
                {module.mockupType === 'profile' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Resume Impact Analysis</div>
                        <div className="text-sm font-semibold text-white">Semantic ATS Parsing</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">
                        ATS Score 96/100
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs space-y-2">
                      <div className="text-slate-400 text-[11px]">Original Bullet:</div>
                      <div className="text-red-400 line-through">"Worked on backend APIs and helped speed up queries."</div>
                      <div className="text-slate-400 text-[11px] pt-1">Quantified Specification:</div>
                      <div className="text-emerald-300">"Re-architected query pipeline with multi-column composite indexing, reducing P99 latency from 420ms to 68ms."</div>
                    </div>

                    <div className="p-4 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-white">
                      <div className="text-[#8AA0FF] font-medium mb-1 flex items-center gap-1.5">
                        <FileCheck className="w-3.5 h-3.5" />
                        <span>AI Impact Optimizer</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">"{module.aiFeedbackExample}"</p>
                    </div>
                  </div>
                )}

                {/* 05: Discover / Job Matching Preview */}
                {module.mockupType === 'discover' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Direct Requisition Matching</div>
                        <div className="text-sm font-semibold text-white">Candidate Alignment</div>
                      </div>
                      <span className="text-xs text-[#8AA0FF] font-medium">85%+ Threshold</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { title: 'Distributed Systems Engineer', co: 'Cloud Infrastructure SaaS', score: '94% Match' },
                        { title: 'Core Platform Backend Engineer', co: 'Fintech Payments Unicorn', score: '87% Match' },
                        { title: 'Infrastructure SRE II', co: 'Real-time Telemetry Platform', score: '81% Match' },
                      ].map((j, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-white">{j.title}</div>
                            <div className="text-[11px] text-slate-400">{j.co}</div>
                          </div>
                          <span className="text-[#8AA0FF] font-medium">{j.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-300">
                      Direct engineering review triggered without recruiter keyword screening.
                    </div>
                  </div>
                )}

                {/* 06: Employers Preview */}
                {module.mockupType === 'employer' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                      <div>
                        <div className="text-xs text-slate-400">Enterprise Talent Console</div>
                        <div className="text-sm font-semibold text-white">Verified Engineering Cohort</div>
                      </div>
                      <span className="text-xs text-emerald-400 font-medium">14 Calibrated</span>
                    </div>

                    <div className="space-y-2">
                      {[
                        { name: 'Candidate #8841', stack: 'Go, Kafka, Distributed Caching', score: '92% Readiness' },
                        { name: 'Candidate #9102', stack: 'Rust, WebAssembly, Networking', score: '89% Readiness' },
                      ].map((c, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-white">{c.name}</div>
                            <div className="text-[11px] text-slate-400">{c.stack}</div>
                          </div>
                          <span className="text-[#8AA0FF] font-medium">{c.score}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-lg bg-[#12172A] border border-[#4C6FFF]/20 text-xs text-slate-300 flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#8AA0FF] shrink-0" />
                      <span>Candidates evaluated by automated test depth and architectural rubrics.</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

\\n
## File: pages\ResourcesPage.tsx
\	ypescript
import React, { useState, useEffect } from 'react';
import { PageId, ResourceArticle } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { ArrowRight, Clock, X } from 'lucide-react';

interface ResourcesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [readingArticle, setReadingArticle] = useState<ResourceArticle | null>(null);
  const [articles, setArticles] = useState<ResourceArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
      const API_URL = import.meta.env.VITE_API_URL || '';
      const response = await fetch(`${API_URL}/api/articles`);
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const categories = ['All', 'Career Intelligence', 'AI & Careers', 'Engineering Careers', 'Interview Preparation', 'Hiring', 'Future of Work'];

  const filteredArticles = selectedTag === 'All'
    ? articles
    : articles.filter((a) => a.category === selectedTag);

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Research & Insights
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Ideas for the future of career engineering.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Deep-dives into career neural graph ontologies, modern engineering rubrics, telemetry verification, and the shift from credentials to proof.
        </p>

        {/* Category Filters */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs transition-colors ${
                selectedTag === cat
                  ? 'bg-[#4C6FFF] text-white font-medium shadow-sm'
                  : 'bg-[#101320] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Browse Articles" targetId="articles-grid" />
      </section>

      {/* Articles Grid */}
      <section id="articles-grid" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[40vh]">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-slate-400">Loading articles...</div>
        ) : error ? (
          <div className="flex justify-center items-center py-20 text-red-400">Error: {error}</div>
        ) : filteredArticles.length === 0 ? (
          <div className="flex justify-center items-center py-20 text-slate-400">No articles found for this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setReadingArticle(art)}
                className="p-6 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] hover:border-white/[0.16] transition-all cursor-pointer flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#8AA0FF] font-medium">{art.category}</span>
                    <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold font-display text-white group-hover:text-[#8AA0FF] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-500">
                  <span>{art.date}</span>
                  <span className="text-slate-300 group-hover:text-white flex items-center gap-1 transition-colors">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/[0.1] bg-[#0C0F1A] p-6 sm:p-8 text-slate-100 shadow-2xl space-y-6">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2">
              <span className="text-xs text-[#8AA0FF] font-medium uppercase tracking-wider">
                {readingArticle.category} · {readingArticle.readTime}
              </span>
              <h2 className="text-2xl font-bold font-display text-white">
                {readingArticle.title}
              </h2>
              <div className="text-xs text-slate-500">
                Published on {readingArticle.date}
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed space-y-4">
              <p className="font-medium text-white">
                {readingArticle.summary}
              </p>
              {readingArticle.content?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <button
                onClick={() => setReadingArticle(null)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Close article
              </button>
              <button
                onClick={() => {
                  setReadingArticle(null);
                  onOpenWaitlist();
                }}
                className="px-4 py-2 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

\\n
## File: pages\SolutionsPage.tsx
\	ypescript
import React from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { GraduationCap, Briefcase, School, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';

interface SolutionsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: (role?: string) => void;
}

const SOLUTIONS_DATA = [
  {
    id: 'students',
    title: 'Students & Undergrads',
    targetPage: 'students' as PageId,
    icon: GraduationCap,
    problem: 'Computer Science curricula are theoretical and outdated. Students drown in video tutorials without knowing which skills actually move the hiring needle.',
    solution: 'Aptivo AI deconstructs modern engineering hiring requirements into an adaptive step-by-step roadmap from day one, verifying real project code and guiding mock interview practice.',
    features: [
      'Zero-fluff foundation to production curriculum mapping',
      'Production-grade open-source and team project specs',
      'Automated code reviews checking architectural rigor',
      'Campus-to-career readiness benchmark scoring',
    ],
  },
  {
    id: 'job-seekers',
    title: 'Job Seekers & Lateral Pivots',
    targetPage: 'job-seekers' as PageId,
    icon: Briefcase,
    problem: 'Experienced engineers and career switchers waste months submitting hundreds of resumes into ATS black holes, failing screening rounds due to invisible skill gaps.',
    solution: 'Aptivo AI scans your existing code and background against specific target company rubrics, pinpoints the architectural gaps holding you back, and preps you to convert.',
    features: [
      'Deep semantic ATS resume audit & impact quantification',
      'Targeted gap-closing sprint roadmaps',
      'System design and algorithmic mock interview simulators',
      'Direct routing to hiring managers seeking your verified stack',
    ],
  },
  {
    id: 'colleges',
    title: 'Colleges & Universities',
    targetPage: 'contact' as PageId,
    icon: School,
    problem: 'University placement cells lack real-time market telemetry. Curricula lag behind industry needs by 3–5 years, resulting in unplaced cohorts.',
    solution: 'Aptivo AI provides placement cells with an institutional intelligence console. Track cohort readiness, detect curriculum blind spots, and connect verified graduates to hiring partners.',
    features: [
      'Cohort telemetry & readiness dashboards',
      'Curriculum alignment benchmarks against current tech stacks',
      'Automated internal mock placement assessments',
      'Direct pipeline access for corporate campus recruiters',
    ],
  },
  {
    id: 'companies',
    title: 'Companies & Engineering Leaders',
    targetPage: 'hr-industry' as PageId,
    icon: Building2,
    problem: 'Recruiting teams spend hundreds of hours sifting through inflated resumes, reviewing candidate spam, and conducting low-signal first-round screens with 80%+ drop-off.',
    solution: 'Aptivo AI replaces resumes with verified candidate telemetry. Inspect code architecture, commit histories, and simulated interview metrics before spending engineering time on calls.',
    features: [
      'Role requirement vector synthesis and matching',
      'Pre-interview code and architectural depth verification',
      'Instant access to candidates passing 85%+ readiness bars',
      'Zero recruiter spam with deterministic skill fit signals',
    ],
  },
];

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-24 space-y-20 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          Ecosystem Solutions
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          Intelligence for every stage of your career.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          From first-year CS students building foundational projects to tech companies discovering pre-vetted engineers, Aptivo AI connects the entire talent lifecycle.
        </p>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Solutions" targetId="solutions-grid" />
      </section>

      {/* Solutions Grid */}
      <section id="solutions-grid" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SOLUTIONS_DATA.map((sol) => {
          const Icon = sol.icon;
          return (
            <div
              key={sol.id}
              className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#4C6FFF]/10 border border-[#4C6FFF]/20 flex items-center justify-center text-[#8AA0FF]">
                  <Icon className="w-5 h-5" />
                </div>

                <h2 className="text-2xl font-bold font-display text-white">
                  {sol.title}
                </h2>

                <div className="space-y-2 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#080B14] border border-white/[0.04]">
                    <div className="text-red-400/90 font-medium mb-1">The Friction</div>
                    <p className="text-slate-400 leading-relaxed">{sol.problem}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#12172A] border border-[#4C6FFF]/20">
                    <div className="text-[#8AA0FF] font-medium mb-1">Aptivo AI Solution</div>
                    <p className="text-slate-300 leading-relaxed">{sol.solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate(sol.targetPage)}
                    className="px-5 py-2.5 rounded-lg bg-[#141828] hover:bg-[#4C6FFF] border border-white/[0.08] text-xs font-semibold text-white flex items-center gap-2 transition-colors"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 rounded-xl border border-white/[0.06] bg-[#0E1220] space-y-4">
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Core Capabilities
                  </div>

                  <div className="space-y-3">
                    {sol.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#8AA0FF] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

\\n
## File: pages\StudentsPage.tsx
\	ypescript
import React, { useState } from 'react';
import { PageId } from '../types';
import { ScrollIndicator } from '../components/common/ScrollIndicator';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface StudentsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenWaitlist: () => void;
}

const CSE_ROADMAP_STEPS = [
  {
    phase: '01',
    title: 'Foundation & Principles',
    timeline: 'Weeks 1–3',
    status: 'Completed',
    topics: ['Data Structures & Algorithmic Complexity', 'DOM manipulation & Event Loop mechanics', 'Git branching & Conventional Commits'],
    proofPoint: 'Diagnostic Score: 88%',
  },
  {
    phase: '02',
    title: 'Production Skills',
    timeline: 'Weeks 4–7',
    status: 'Completed',
    topics: ['React Component Architecture & Custom Hooks', 'Node.js Fastify REST & WebSocket endpoints', 'PostgreSQL schema modeling & ACID transactions'],
    proofPoint: '14 Pull Requests merged',
  },
  {
    phase: '03',
    title: 'Production Systems Project',
    timeline: 'Weeks 8–12',
    status: 'In Progress',
    topics: ['Real-time collaborative canvas with WebSockets', 'Redis caching layer & distributed rate limiter', 'Docker containerization & CI/CD deployment'],
    proofPoint: 'Current sprint: PR review in progress',
  },
  {
    phase: '04',
    title: 'Portfolio & Quantified Resume',
    timeline: 'Week 13',
    status: 'Upcoming',
    topics: ['ATS vector optimization with verified metrics', 'Interactive live demonstration architecture', 'Comprehensive documentation and system specs'],
    proofPoint: 'Target ATS rating: 95%+',
  },
  {
    phase: '05',
    title: 'Interview Readiness',
    timeline: 'Weeks 14–16',
    status: 'Upcoming',
    topics: ['Simulated company-specific live coding rounds', 'System design interview practice', 'Structured behavioral scenario simulations'],
    proofPoint: 'Target pass probability: 85%+',
  },
  {
    phase: '06',
    title: 'Direct Hiring Pipeline',
    timeline: 'Weeks 17+',
    status: 'Upcoming',
    topics: ['Direct routing to matched tech requisitions', 'Verified skill telemetry shared with engineering managers', 'Skip initial recruiter screening filters'],
    proofPoint: 'Direct Dispatch Enabled',
  },
];

export const StudentsPage: React.FC<StudentsPageProps> = ({ onNavigate, onOpenWaitlist }) => {
  const [selectedPhase, setSelectedPhase] = useState(2);

  return (
    <div className="pt-32 pb-24 space-y-24 bg-[#06070B] min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-medium text-[#8AA0FF] tracking-wider uppercase">
          From Campus to Production
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-white tracking-tight leading-tight">
          You don't need to know where to start.
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Tell Aptivo AI your target role and weekly hours. We build the exact trajectory from your current baseline to hired.
        </p>

        <div className="pt-4 flex items-center justify-center">
          <button
            onClick={onOpenWaitlist}
            className="px-6 py-3 rounded-lg bg-[#4C6FFF] hover:bg-[#3B5BDB] text-white text-xs font-semibold tracking-wide shadow-md shadow-[#4C6FFF]/20 transition-all"
          >
            Generate Your Personalized Roadmap
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore 16-Week Roadmap" targetId="student-trajectory" />
      </section>

      {/* Concrete Student Scenario Walkthrough */}
      <section id="student-trajectory" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0C0F1A] space-y-8">
          {/* Scenario Banner */}
          <div className="p-6 rounded-xl border border-[#4C6FFF]/30 bg-[#11172A] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs text-[#8AA0FF] font-medium uppercase tracking-wider">
                Example Student Trajectory
              </span>
              <h2 className="text-xl font-bold font-display text-white">
                2nd-Year CSE Student → Full-Stack Developer
              </h2>
              <p className="text-xs text-slate-300">
                Bandwidth: 8 hours/week · Target: Series B+ Software Engineering Role · Horizon: 16 Weeks
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.06] text-center">
                <div className="text-lg font-bold text-white font-display">16</div>
                <div className="text-[10px] text-slate-400">Total Weeks</div>
              </div>
              <div className="p-3 rounded-lg bg-[#080B14] border border-white/[0.06] text-center">
                <div className="text-lg font-bold text-[#8AA0FF] font-display">128</div>
                <div className="text-[10px] text-slate-400">Total Hours</div>
              </div>
            </div>
          </div>

          {/* Stepper Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {CSE_ROADMAP_STEPS.map((s, idx) => (
              <button
                key={s.phase}
                onClick={() => setSelectedPhase(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  selectedPhase === idx
                    ? 'border-[#4C6FFF] bg-[#4C6FFF]/15 text-white shadow-sm'
                    : 'border-white/[0.06] bg-[#0E1220] text-slate-400 hover:text-white'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-500 mb-1">
                  Phase {s.phase}
                </div>
                <div className="text-xs font-semibold truncate">
                  {s.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Phase Deep Dive */}
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#0E1220] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
              <div>
                <span className="text-xs font-mono text-[#8AA0FF]">Phase {CSE_ROADMAP_STEPS[selectedPhase].phase} · {CSE_ROADMAP_STEPS[selectedPhase].timeline}</span>
                <h3 className="text-xl font-bold font-display text-white mt-0.5">
                  {CSE_ROADMAP_STEPS[selectedPhase].title}
                </h3>
              </div>
              <span className="text-xs text-emerald-400 font-medium self-start sm:self-auto">
                {CSE_ROADMAP_STEPS[selectedPhase].proofPoint}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-300">Deliverables & Focus Areas:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {CSE_ROADMAP_STEPS[selectedPhase].topics.map((topic, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#080B14] border border-white/[0.04] text-xs text-slate-300 flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8AA0FF] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

\\n
## File: types.ts
\	ypescript
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

\\n
