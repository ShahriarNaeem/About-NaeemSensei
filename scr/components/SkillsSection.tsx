import React, { useState } from 'react';
import { Terminal, Box, Calculator, Check, ArrowRight } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'programming' | 'bim' | 'cost'>('programming');

  return (
    <section id="skills" className="py-16 sm:py-24 bg-white dark:bg-slate-950 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Technical Stack & Engineering Tools
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Multi-Disciplinary Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            A rare hybrid toolkit uniting structural modeling & cost estimation with statistical data engineering and machine learning.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-100 dark:bg-slate-900 rounded-xl max-w-2xl border border-transparent dark:border-slate-800">
          <button
            onClick={() => setActiveCategory('programming')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'programming'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Terminal className="w-4 h-4 shrink-0" />
            <span>Python & Data Science</span>
          </button>

          <button
            onClick={() => setActiveCategory('bim')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'bim'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Box className="w-4 h-4 shrink-0" />
            <span>BIM & Structural Design</span>
          </button>

          <button
            onClick={() => setActiveCategory('cost')}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-lg transition-colors ${
              activeCategory === 'cost'
                ? 'bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Calculator className="w-4 h-4 shrink-0" />
            <span>Quantity Surveying & Cost</span>
          </button>
        </div>

        {/* Active Category Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {activeCategory === 'programming' &&
            SKILLS_DATA.programmingData.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-50/70 dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="font-mono text-blue-700 dark:text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2.5">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{skill.desc}</p>
              </div>
            ))}

          {activeCategory === 'bim' &&
            SKILLS_DATA.engineeringBim.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-50/70 dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="font-mono text-blue-700 dark:text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2.5">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{skill.desc}</p>
              </div>
            ))}

          {activeCategory === 'cost' &&
            SKILLS_DATA.costManagement.map((skill) => (
              <div
                key={skill.name}
                className="bg-slate-50/70 dark:bg-slate-900/80 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900 dark:text-white">{skill.name}</span>
                  <span className="font-mono text-blue-700 dark:text-blue-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mb-2.5">
                  <div
                    className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">{skill.desc}</p>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
};
