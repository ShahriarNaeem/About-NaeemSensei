import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Cpu, BarChart3, TrainTrack, ChevronRight, Sparkles, Layers, Box, Eye } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { TrafficPredictorWidget } from './TrafficPredictorWidget';
import { No2GeospatialWidget } from './No2GeospatialWidget';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'showcase' | 'interactive'>('showcase');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Geospatial & Remote Sensing',
    'Machine Learning & Transit',
    'BIM & Structural',
    'Infrastructure & Cost Engineering'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-slate-50/70 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
              03. Selected Engineering & Data Science Works
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Geospatial, Machine Learning & Structural Portfolio
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
              Cross-disciplinary civil projects combining computational intelligence, satellite remote sensing, LOD 350-400 BIM structural modeling, and mega transit cost control.
            </p>
          </div>

          {/* Mode Switcher: Case Studies vs Interactive Simulators */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg self-start md:self-auto border border-transparent dark:border-slate-700">
            <button
              onClick={() => setActiveTab('showcase')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                activeTab === 'showcase'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Case Studies ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActiveTab('interactive')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 ${
                activeTab === 'interactive'
                  ? 'bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-400 shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Live Simulators</span>
            </button>
          </div>
        </div>

        {/* Category Filter Pills / Buttons (When Case Studies Tab is Active) */}
        {activeTab === 'showcase' && (
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-200/60 dark:border-slate-800">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-2xs font-semibold'
                      : 'bg-white dark:bg-slate-850 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        )}

        {/* Tab 1: Project Case Studies Grid */}
        {activeTab === 'showcase' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all overflow-hidden flex flex-col group"
              >
                {/* Project Image Banner with Overlay Information */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim for Legibility */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/85 via-slate-950/25 to-transparent pointer-events-none" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {project.category}
                  </div>

                  {/* Bottom Image Metadata Overlay (Matching Screenshot) */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                    <span className="font-mono text-[11px] bg-slate-950/70 backdrop-blur-xs px-2.5 py-1 rounded border border-slate-700/60 text-slate-300 max-w-[70%] truncate">
                      {project.overlayTag || project.category}
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 bg-slate-900/90 hover:bg-blue-600 text-white text-[11px] font-semibold px-2.5 py-1 rounded transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Case Number & Category Kicker */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-400 mb-1.5 font-mono">
                      <span>{project.caseNumber || 'Case'}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-sans text-slate-500 dark:text-slate-400">{project.category}</span>
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                      <span className="font-sans text-slate-400">{project.period}</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-serif italic mt-1">
                      {project.subtitle}
                    </p>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3.5 leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Metric Strip */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="bg-slate-50 dark:bg-slate-850 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                            <div className="text-[10px] text-slate-400 font-medium truncate">{m.label}</div>
                            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 font-mono tabular-nums truncate mt-0.5">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tools and Action Points */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                    {/* Tools as Clean Unboxed Text with Separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mb-4 font-mono">
                      {project.tools.map((tool, tIdx) => (
                        <React.Fragment key={tool}>
                          <span className="hover:text-slate-900 dark:hover:text-white transition-colors">{tool}</span>
                          {tIdx < project.tools.length - 1 && (
                            <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-2xs"
                      >
                        <span>Methodology & Outcomes</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      {project.category === 'Machine Learning & Transit' && (
                        <button
                          type="button"
                          onClick={() => setActiveTab('interactive')}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:underline"
                        >
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Try Live ML Simulator →</span>
                        </button>
                      )}

                      {project.category === 'Geospatial & Remote Sensing' && (
                        <button
                          type="button"
                          onClick={() => setActiveTab('interactive')}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
                        >
                          <Layers className="w-3.5 h-3.5" />
                          <span>View 72-Mo Satellite Data →</span>
                        </button>
                      )}

                      {project.category === 'BIM & Structural' && (
                        <button
                          type="button"
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600"
                        >
                          <Box className="w-3.5 h-3.5" />
                          <span>LOD 350 Model Details →</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Live Interactive Simulators */}
        {activeTab === 'interactive' && (
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                  Interactive Exploration 1
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  Real-Time Highway Machine Learning Traffic Estimator
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Simulate adverse weather conditions and peak hour bottlenecks on the westbound I-94 corridor.
                </p>
              </div>
              <TrafficPredictorWidget />
            </div>

            <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
              <div className="mb-4">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  Interactive Exploration 2
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  72-Month Atmospheric NO₂ Satellite Remote Sensing Viewer
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Toggle across 6 years of Sentinel-5P TROPOMI data and inspect the drastic reduction during the 2020 pandemic nationwide lockdown.
                </p>
              </div>
              <No2GeospatialWidget />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
