import React, { useState } from 'react';
import { BookOpen, ExternalLink, Copy, Check, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { PUBLICATIONS, Publication } from '../data/portfolioData';

export const PublicationsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = ['All', 'Air Quality', 'Transportation & Urban Transit', 'Environmental & WASH'];

  const filteredPubs = selectedCategory === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter((p) => p.category === selectedCategory);

  const handleCopyCitation = (pub: Publication) => {
    const citation = `${pub.authors} (${pub.year}). ${pub.title}. ${pub.journal}, ${pub.volume}, ${pub.pages}. DOI: ${pub.doi}`;
    navigator.clipboard.writeText(citation);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="research" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Interactive Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              Peer-Reviewed Scholarly Contributions
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Research & Academic Publications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Empirical investigations in environmental impact assessment, urban air pollution dispersion, transportation externalities, and community WASH infrastructure.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg self-start md:self-auto border border-transparent dark:border-slate-800">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isSelected
                      ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-2xs font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-5">
          {filteredPubs.map((pub, idx) => {
            const isExpanded = expandedId === pub.id;
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="bg-slate-50/70 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 transition-all hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-xs"
              >
                {/* Clean unboxed metadata header */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2.5 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-blue-700 dark:text-blue-400 font-bold">0{idx + 1}.</span>
                    <span className="text-slate-700 dark:text-slate-200 font-semibold">{pub.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{pub.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pub.journal}</span>
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 dark:text-slate-500">
                    Vol. {pub.volume}, pp. {pub.pages}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 font-medium">
                  {pub.authors}
                </p>

                {/* Abstract Preview */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {pub.summary}
                </p>

                {/* Expandable Key Highlights */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 bg-white/70 dark:bg-slate-850 p-4 rounded-xl space-y-2">
                    <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Findings & Empirical Takeaways
                    </div>
                    <ul className="space-y-1.5">
                      {pub.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Bar */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <a
                      href={pub.doi}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-semibold text-blue-700 dark:text-blue-300 hover:text-white bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors"
                    >
                      <span>Read on Publisher (DOI)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      onClick={() => handleCopyCitation(pub)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      title="Copy formatted APA reference citation"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Citation Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy APA Citation</span>
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    onClick={() => toggleExpand(pub.id)}
                    className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors font-medium"
                  >
                    <span>{isExpanded ? 'Hide Highlights' : 'View Key Findings'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
