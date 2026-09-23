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
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-24">
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
