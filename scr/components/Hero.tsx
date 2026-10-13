import React from 'react';
import { ArrowDown, Mail, Linkedin, ExternalLink, Download, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  return (
    <section className="pt-28 pb-14 lg:pt-32 lg:pb-20 border-b border-slate-200/80 dark:border-slate-800 bg-linear-to-b from-white via-slate-50/50 to-slate-100/60 dark:from-slate-950 dark:via-slate-900/80 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-700 dark:text-blue-400 mb-3">
              <span>Institution of Engineers, Bangladesh</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-600 dark:text-slate-400 font-mono">M54334</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance mb-4">
              Civil & Cost Control Engineer
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 dark:text-slate-300 mt-1">
                Pioneering Environmental Analytics & Sustainable Infrastructure
              </span>
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mb-6">
              Interdisciplinary engineering professional with proven expertise in mega-infrastructure economics (DMRT Line-6, ADB projects), financial modeling, and BIM, integrated with satellite remote sensing (NO2), Python data analytics, and machine learning.
            </p>

            {/* Location & Affiliation unboxed info */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400 mb-8 font-medium">
              <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                Gazipur & Dhaka, Bangladesh
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>B.Sc. Ahsanullah Univ. of Science & Technology</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span>Property Development Ltd (Pran-RFL Group)</span>
            </div>

            {/* Primary Action Points */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#research"
                className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-xs"
              >
                Explore Research Papers
              </a>
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 rounded-lg transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Download / View CV</span>
              </button>
              <a
                href="#experience"
                className="px-4 py-2.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Engineering Experience →
              </a>
            </div>

            {/* Social & Academic Verified Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-200">Profiles:</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.researchgate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>ResearchGate</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Container (Portrait) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end">
            <div className="relative w-full max-w-md bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              
              {/* Image Frame with graceful fallback */}
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src="/src/assets/images/regenerated_image_1791820588033.png"
                  alt="Engr. Md Shahriar Rahman Naeem Patwary portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.image-fallback');
                    if (fallback) (fallback as HTMLElement).style.display = 'flex';
                  }}
                />
                
                {/* Fallback Container */}
                <div className="image-fallback hidden absolute inset-0 bg-linear-to-br from-slate-800 to-slate-900 text-white flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold mb-3">
                    SR
                  </div>
                  <h3 className="font-bold text-lg">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs text-slate-300 mt-1">{PERSONAL_INFO.designation}</p>
                </div>
              </div>

              {/* Bottom Card Identity Strip */}
              <div className="mt-3.5 px-2 pb-1 flex items-center justify-between">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                    Engr. Md Shahriar Rahman Naeem Patwary
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <span className="font-mono text-blue-700 dark:text-blue-400">MIEB M54334</span>
                    <span aria-hidden="true">·</span>
                    <span>Cost & Civil Engineer</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-transparent dark:border-emerald-800/40 px-2 py-1 rounded">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Verified IEB</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Full-Width Row of Quantitative Highlights */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {HIGHLIGHTS_METRICS.map((metric) => (
              <div key={metric.label} className="bg-white/80 dark:bg-slate-900/90 p-5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-2xs">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
