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
