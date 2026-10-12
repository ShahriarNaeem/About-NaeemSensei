import React, { useEffect } from 'react';
import { X, CheckCircle2, Wrench, BarChart2, Calendar, Tag } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 dark:bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative aspect-16/9 w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1 text-white">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400 pb-4 border-b border-slate-100 dark:border-slate-800 font-medium">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>Duration: {project.period}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-slate-400" />
              <span>Specialization: {project.category}</span>
            </div>
          </div>

          {/* Overview summary */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
              Project Overview
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Metrics if present */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-100 dark:border-slate-700/60 text-center">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div className="text-xs text-slate-400 dark:text-slate-400 font-medium">{m.label}</div>
                  <div className="text-base font-bold text-slate-900 dark:text-white font-mono tabular-nums">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Methodology */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Methodology & Analytical Pipeline</span>
            </h3>
            <ul className="space-y-2">
              {project.methodology.map((m, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outcomes */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Key Empirical Outcomes & Impact</span>
            </h3>
            <ul className="space-y-2">
              {project.outcomes.map((o, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software & Tools Applied */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
              Technologies & Standards Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-md text-xs font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
