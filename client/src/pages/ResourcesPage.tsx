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
    <div className="pt-32 pb-24 space-y-24 bg-bg min-h-screen">
      {/* Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-5 pb-32 md:pb-40 min-h-[45vh] flex flex-col justify-center">
        <div className="text-xs font-bold text-accent-blue tracking-wider uppercase">
          Research & Insights
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold font-display text-ink tracking-tight leading-tight">
          Ideas for the <span className="text-accent-orange">future</span> of career engineering.
        </h1>

        <p className="text-base sm:text-lg text-ink/70 max-w-2xl mx-auto font-normal leading-relaxed">
          Deep-dives into career neural graph ontologies, modern engineering rubrics, telemetry verification, and the shift from credentials to proof.
        </p>

        {/* Category Filters */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTag(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedTag === cat
                  ? 'bg-accent-blue text-white shadow-sm border border-transparent'
                  : 'bg-surface text-ink border border-border hover:bg-surface-2'
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
      <section id="articles-grid" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[40vh]">
        {loading ? (
          <div className="flex justify-center items-center py-20 text-muted font-bold">Loading articles...</div>
        ) : error ? (
          <div className="flex justify-center items-center py-20 text-red-500 font-bold">Error: {error}</div>
        ) : filteredArticles.length === 0 ? (
          <div className="flex justify-center items-center py-20 text-muted font-bold">No articles found for this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setReadingArticle(art)}
                className="p-8 rounded-[24px] border border-border bg-surface hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-accent-blue bg-accent-blue-soft px-2.5 py-1 rounded-md border border-accent-blue/20">{art.category}</span>
                    <span className="text-muted flex items-center gap-1.5 bg-surface-2 px-2.5 py-1 rounded-md border border-border">
                      <Clock className="w-3.5 h-3.5" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-ink group-hover:text-accent-blue transition-colors leading-snug">
                    {art.title}
                  </h3>

                  <p className="text-sm text-ink/80 leading-relaxed line-clamp-3 font-medium">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-bold text-muted">
                  <span>{art.date}</span>
                  <span className="text-accent-blue flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[24px] border border-border bg-white p-6 sm:p-10 text-ink shadow-2xl space-y-8">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-muted hover:text-ink hover:bg-surface-2 transition-colors border border-transparent hover:border-border"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold text-accent-blue uppercase tracking-wider bg-accent-blue-soft px-3 py-1.5 rounded-full border border-accent-blue/20">
                {readingArticle.category} · {readingArticle.readTime}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-ink leading-tight">
                {readingArticle.title}
              </h2>
              <div className="text-sm font-bold text-muted">
                Published on {readingArticle.date}
              </div>
            </div>

            <div className="prose prose-slate max-w-none text-sm sm:text-base text-ink/80 leading-relaxed font-medium space-y-5">
              <p className="font-bold text-ink text-lg">
                {readingArticle.summary}
              </p>
              {readingArticle.content?.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-border flex items-center justify-between">
              <button
                onClick={() => setReadingArticle(null)}
                className="text-sm font-bold text-muted hover:text-ink transition-colors"
              >
                Close article
              </button>
              <button
                onClick={() => {
                  setReadingArticle(null);
                  onOpenWaitlist();
                }}
                className="px-6 py-3 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-white text-sm font-bold shadow-sm"
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
