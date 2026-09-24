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
        const response = await fetch('/api/jobs');
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
      const response = await fetch('/api/applications', {
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
