import React from 'react';

export const DashboardPreviewSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-border bg-bg relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-bold text-accent-blue tracking-wider uppercase bg-accent-blue/10 px-3 py-1.5 rounded-full inline-block">
            Platform Interface
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink tracking-tight">
            Clear metrics. <span className="text-accent-blue">Actionable</span> direction.
          </h2>
          <p className="text-sm sm:text-base text-muted leading-relaxed">
            Every metric in your Aptivo AI dashboard is backed by actual code commits, project reviews, and calibrated interview rubrics.
          </p>
        </div>

        {/* Clean Dashboard Window containing the provided image */}
        <div className="max-w-5xl mx-auto rounded-[24px] border border-border bg-white shadow-xl shadow-black/5 overflow-hidden">
          {/* Top Browser Bar */}
          <div className="px-5 py-3.5 bg-surface border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-border inline-block" />
              <span className="w-3 h-3 rounded-full bg-border inline-block" />
              <span className="w-3 h-3 rounded-full bg-border inline-block" />
              <span className="ml-3 text-xs text-muted font-mono hidden sm:inline">
                app.aptivo.ai/dashboard
              </span>
            </div>
            <div className="text-xs text-accent-blue font-medium">
              Live Profile
            </div>
          </div>

          {/* Internal Dashboard Image */}
          <div className="w-full bg-[#f8f9fa] flex items-center justify-center">
            <img 
              src="/aptivo-dashboard.png" 
              alt="Aptivo AI Dashboard Interface" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
