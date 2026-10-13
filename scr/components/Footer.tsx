import React from 'react';
import { ArrowUp, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface FooterProps {
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-400 py-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Civil Engineer & Cost Control Engineer · {PERSONAL_INFO.affiliation}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#research" className="hover:text-white transition-colors">Research</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#credentials" className="hover:text-white transition-colors">Credentials</a>
            <button
              onClick={onOpenCvModal}
              className="hover:text-white transition-colors"
            >
              Curriculum Vitae
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle variant="navbar" />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-2 rounded-md bg-slate-800 hover:bg-slate-700"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Engr. Md Shahriar Rahman Naeem Patwary. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PERSONAL_INFO.researchgate}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300 transition-colors"
            >
              ResearchGate
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
