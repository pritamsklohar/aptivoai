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
        const response = await fetch('/api/articles');
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
