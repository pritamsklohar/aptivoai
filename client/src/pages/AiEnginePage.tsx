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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-orange tracking-wider uppercase">
          Autonomous Career Computation
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          The <span className="text-accent-blue">AI engine</span> for high-stakes career decisions.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Aptivo AI connects candidate baselines, target standards, verified project telemetry, and hiring rubrics into one continuously evolving neural model.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <button
            onClick={onOpenWaitlist}
            className="px-8 py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-semibold tracking-wide shadow-sm transition-all"
          >
            Request Architecture Demo
          </button>
        </div>

        {/* Scroll Indicator at absolute bottom center */}
        <ScrollIndicator label="Explore Architecture" targetId="architecture-layers" />
      </section>

      {/* 5-Layer Architecture Diagram */}
      <section id="architecture-layers" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center mb-8 space-y-3">
          <div className="text-xs font-bold text-accent-blue tracking-wider uppercase bg-accent-blue-soft/50 px-3 py-1.5 rounded-full inline-block border border-accent-blue/20">
            Layered Pipeline
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink">
            Architecture & Reasoning Layers
          </h2>
          <p className="text-sm text-muted font-medium">
            Select any layer to inspect the components and reasoning rules.
          </p>
        </div>

        {/* Vertical Stack */}
        <div className="space-y-5">
          {ARCHITECTURE_LAYERS.map((layer, idx) => {
            const isSelected = selectedLayerIndex === idx;

            return (
              <div key={layer.name} className="space-y-4">
                {/* Layer Card */}
                <div
                  onClick={() => setSelectedLayerIndex(idx)}
                  className={`p-6 sm:p-8 rounded-[24px] border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-accent-blue bg-accent-blue-soft shadow-sm'
                      : 'border-border bg-surface hover:bg-surface-2'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-border">
                    <div className="flex items-center gap-4">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold ${
                        isSelected ? 'bg-accent-blue text-white' : 'bg-border text-muted'
                      }`}>
                        {layer.code}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold font-display text-ink">
                          {layer.name}
                        </h3>
                        <p className="text-sm text-ink/70 mt-1 font-medium">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${isSelected ? 'bg-white text-accent-blue border border-accent-blue/20' : 'text-muted'}`}>
                      {layer.items.length} Subsystems
                    </span>
                  </div>

                  {/* Components Grid */}
                  <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {layer.items.map((comp) => (
                      <div
                        key={comp.title}
                        className="p-4 rounded-[20px] bg-white border border-border text-sm space-y-1.5 shadow-sm"
                      >
                        <div className="font-bold text-ink flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-accent-blue' : 'text-muted'}`} />
                          <span>{comp.title}</span>
                        </div>
                        <p className="text-xs text-muted leading-snug pl-6 font-medium">
                          {comp.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Connector Arrow */}
                {idx < ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-border" />
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
