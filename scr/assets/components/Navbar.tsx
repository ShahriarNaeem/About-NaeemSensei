import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#credentials' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs py-3'
          : 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-xs border-b border-slate-100 dark:border-slate-900 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-6 sm:gap-8">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap shrink-0 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          >
            {PERSONAL_INFO.shortName}
            <span className="text-xs font-normal text-slate-500 dark:text-slate-400 ml-2 hidden lg:inline">
              · MIEB #M54334
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors whitespace-nowrap shrink-0 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + CV + Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Paper / Slate Mode Switcher */}
            <ThemeToggle variant="navbar" />

            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200/80 dark:hover:bg-slate-700 rounded-md transition-colors whitespace-nowrap shrink-0"
              title="Open full printable CV"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full CV</span>
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-md transition-colors shadow-xs whitespace-nowrap shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle variant="navbar" />
            <button
              onClick={onOpenCvModal}
              className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-md"
            >
              CV
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex gap-2">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 text-center py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-blue-600 rounded-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
