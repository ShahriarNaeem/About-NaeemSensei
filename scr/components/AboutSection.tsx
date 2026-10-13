import React from 'react';
import { GraduationCap, Globe, Award, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, LANGUAGE_SKILLS } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Professional Profile & Vision
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Bridging Civil Infrastructure Economics, Environmental Analytics & Climate Finance
          </h2>
        </div>

        {/* 2-Column Core Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Personal Statement & Research Focus */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-slate max-w-none text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                {PERSONAL_INFO.statement}
              </p>
              <p>
                {PERSONAL_INFO.researchVision}
              </p>
            </div>

            {/* Core Competency Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Infrastructure Economics</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Expertise in BOQ preparation, IPC forecasting, price escalation formulas, FIDIC contract administration, and project P&L modeling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Environmental Remote Sensing</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  6 years (72 months) of empirical Sentinel-5P satellite TROPOMI processing and atmospheric air pollutant ground validation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>AI & Data Modeling</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Python machine learning pipelines (XGBoost, Scikit-learn), predictive traffic modeling, and geospatial GIS interpolation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Sustainable Climate Finance</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Active engagement in COP31/GLF Sustainable Finance and IUCA symposiums on capital mobilization for resilient nature solutions.
                </p>
              </div>
            </div>

            {/* Language Proficiency */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Languages & Communication
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {LANGUAGE_SKILLS.map((lang) => (
                  <div key={lang.language} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white">{lang.language}</span>
                      <span className="font-mono text-blue-700 dark:text-blue-400 font-semibold">{lang.level}</span>
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">{lang.proficiency}</div>
                    {lang.breakdown && (
                      <div className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 font-mono">{lang.breakdown}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Academic Credentials & Education */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-4">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Education & Qualifications</span>
              </div>

              <div className="space-y-6">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div key={edu.degree} className="relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-0 before:w-[2px] before:bg-slate-200 dark:before:bg-slate-800 last:before:hidden">
                    <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-slate-900" />
                    
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-mono font-medium text-slate-500 dark:text-slate-400">{edu.period}</span>
                        <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                          {edu.grade}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                        {edu.institution}
                      </p>
                      <p className="text-[11px] text-slate-400 dark:text-slate-500">
                        {edu.location}
                      </p>
                      {edu.thesisOrFocus && (
                        <p className="text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 p-2.5 rounded-lg border border-slate-200/60 dark:border-slate-700 mt-2">
                          <span className="font-semibold text-slate-900 dark:text-white">Thesis: </span>
                          {edu.thesisOrFocus}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global Sustainability & Climate Fellowship Banner */}
            <div className="p-5 rounded-2xl bg-linear-to-br from-slate-900 to-blue-950 dark:from-slate-900 dark:to-blue-900 border border-slate-800 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 mb-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Global Governance & Climate Outreach</span>
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">
                9th GLF Investment Case Symposium & COP31 Delegate Preparation
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Active global sustainability engagement as Ambassador for the International Youth Conference (IYC) for Global Youth Governance, focusing on AI in sustainable finance and climate literacy for infrastructure policymakers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
