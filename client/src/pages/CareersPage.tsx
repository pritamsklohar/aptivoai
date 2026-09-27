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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-orange tracking-wider uppercase">
          Join the Founding Team
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Build the <span className="text-accent-blue">future</span> of career intelligence.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          We are engineering the algorithms, graph ontologies, and telemetry pipelines powering human potential. Work on deep problems with high autonomy.
        </p>

        {/* Department Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all font-semibold ${
                selectedDept === dept
                  ? 'bg-accent-blue text-white shadow-sm border border-transparent'
                  : 'bg-surface text-ink hover:bg-surface-2 border border-border'
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
      <section id="open-positions" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-border text-sm text-muted font-bold uppercase tracking-wider">
          <span>{filteredJobs.length} Open Positions</span>
          <span>Competitive Salary + Equity</span>
        </div>

        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="p-12 text-center rounded-[24px] border border-border bg-surface shadow-sm">
              <h3 className="text-2xl font-display font-bold text-ink mb-2">No Openings Currently</h3>
              <p className="text-sm text-muted font-medium">New openings will be posted here soon.</p>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-[24px] border border-border bg-white shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                      <span className="text-accent-blue bg-accent-blue-soft px-2.5 py-1 rounded-md border border-accent-blue/20">{job.department}</span>
                      <span className="text-muted flex items-center gap-1.5 bg-surface-2 px-2.5 py-1 rounded-md border border-border">
                        <MapPin className="w-3.5 h-3.5" />
                        {job.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold font-display text-ink mt-3">
                      {job.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveJob(job)}
                    className="px-6 py-2.5 rounded-full bg-surface-2 hover:bg-border border border-border text-sm font-semibold text-ink flex items-center gap-2 whitespace-nowrap self-start sm:self-auto transition-colors"
                  >
                    <span>View Role</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-sm text-ink/80 leading-relaxed font-medium">
                  {job.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {job.requirements.slice(0, 3).map((req) => (
                    <span
                      key={req}
                      className="px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-muted font-bold"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
          <div className="max-w-lg w-full rounded-[24px] border border-border bg-white p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setActiveJob(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-muted hover:text-ink hover:bg-surface-2 transition-colors border border-transparent hover:border-border"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft/50 inline-block px-2.5 py-1 rounded-md border border-accent-blue/20">
                Application: {activeJob.department}
              </div>
              <h2 className="text-2xl font-bold font-display text-ink mt-2">
                {activeJob.title}
              </h2>
              <p className="text-sm text-muted font-medium mt-1">
                {activeJob.location} · {activeJob.type}
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-[24px] bg-emerald-50 border border-emerald-100 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                <h4 className="text-lg font-bold text-ink">Application Received</h4>
                <p className="text-sm text-ink/80 font-medium">
                  Our engineering team will review your background and telemetry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/80">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/80">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-ink/80">GitHub / Portfolio URL</label>
                  <input
                    type="url"
                    value={applicantPortfolio}
                    onChange={(e) => setApplicantPortfolio(e.target.value)}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 rounded-[20px] bg-surface border border-border text-sm text-ink placeholder-muted focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-bold tracking-wide transition-all shadow-sm"
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
