import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronRight, FileCheck } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [activeExperienceId, setActiveExperienceId] = useState<string>(EXPERIENCES[0].id);

  const selectedExp = EXPERIENCES.find((exp) => exp.id === activeExperienceId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-50/60 dark:bg-slate-900/60 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Engineering Practice & Employment
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Professional Experience in Mega Transit & Infrastructure Economics
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            Hands-on leadership across Asian Development Bank (ADB) infrastructure, Dhaka Mass Rapid Transit Line-6 elevated viaducts, and multi-disciplinary structural design.
          </p>
        </div>

        {/* Interactive Experience Layout: Left Tab Switcher / Right Detailed Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Role Selector Cards */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === activeExperienceId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveExperienceId(exp.id)}
                  type="button"
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-white dark:bg-slate-900 border-blue-600 dark:border-blue-500 shadow-sm ring-1 ring-blue-600/30'
                      : 'bg-white/60 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-1">
                    <span>{exp.period}</span>
                    <span className="text-[11px] font-semibold text-blue-700 dark:text-blue-400 uppercase tracking-wider">
                      {exp.type}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-medium mt-0.5 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{exp.company}</span>
                  </div>
                  {exp.division && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                      {exp.division}
                    </div>
                  )}
                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {exp.location}
                    </span>
                    <span className={`font-semibold text-xs flex items-center gap-0.5 ${isSelected ? 'text-blue-700 dark:text-blue-400' : 'text-slate-400'}`}>
                      <span>View Scope</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Responsibilities Panel */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm p-6 sm:p-8">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                <span className="font-mono font-medium text-blue-700 dark:text-blue-400">{selectedExp.period}</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedExp.location}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {selectedExp.role}
              </h3>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {selectedExp.company}
              </p>
              {selectedExp.division && (
                <p className="text-xs text-blue-800 dark:text-blue-400 font-medium mt-0.5">
                  {selectedExp.division}
                </p>
              )}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                {selectedExp.description}
              </p>
            </div>

            {/* Scope Breakdown */}
            <div className="space-y-6">
              {selectedExp.keyResponsibilities.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{group.title}</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Tools & Skills Used */}
            <div className="mt-8 pt-5 border-t border-slate-100 dark:border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                Core Competencies Deployed
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {selectedExp.skillsUsed.map((skill, sIdx) => (
                  <React.Fragment key={skill}>
                    <span className="font-medium text-slate-800 dark:text-slate-200">{skill}</span>
                    {sIdx < selectedExp.skillsUsed.length - 1 && (
                      <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
