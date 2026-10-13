import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ProjectModal } from './components/ProjectModal';
import { ThemeToggle } from './components/ThemeToggle';
import { Project } from './data/portfolioData';

function PortfolioApp() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Navigation with Theme Switcher */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Verified Portrait */}
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* About & Academic Foundation */}
        <AboutSection />

        {/* Professional Engineering & Quantity Surveying Experience */}
        <ExperienceSection />

        {/* Peer-Reviewed Research Publications */}
        <PublicationsSection />

        {/* Featured Projects & Live Computational Simulators */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Technical Stack & Multi-Disciplinary Skills */}
        <SkillsSection />

        {/* Certifications, Community Leadership & Academic Referees */}
        <CredentialsSection />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Floating Theme Quick Switcher */}
      <ThemeToggle variant="floating" />

      {/* Modals */}
      <CvModal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
