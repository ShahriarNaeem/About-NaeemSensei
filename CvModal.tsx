import React, { useEffect } from 'react';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin, Award, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_LIST, PUBLICATIONS, EXPERIENCES, CERTIFICATIONS, VOLUNTEERING_ACTIVITIES, REFERENCES, SKILLS_DATA, LANGUAGE_SKILLS } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white dark:bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 dark:bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <h3 className="text-sm font-bold tracking-tight">Curriculum Vitae</h3>
            <p className="text-xs text-slate-400">{PERSONAL_INFO.name} ({PERSONAL_INFO.affiliation})</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-md transition-colors ml-2"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="p-6 sm:p-10 text-slate-800 dark:text-slate-200 space-y-8 bg-white dark:bg-slate-900 print:bg-white print:text-black print:p-0">
          
          {/* CV Header */}
          <div className="border-b-2 border-slate-900 dark:border-slate-700 pb-6 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-blue-800 dark:text-blue-400 print:text-blue-900 mt-0.5">
              {PERSONAL_INFO.designation} · {PERSONAL_INFO.affiliation}
            </p>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 mt-3 font-medium">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.location}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.phone}
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                {PERSONAL_INFO.email}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 print:text-slate-600 mt-2">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-400 print:text-blue-800 hover:underline">
                LinkedIn: in/naeemsensei001
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">|</span>
              <a href={PERSONAL_INFO.researchgate} target="_blank" rel="noreferrer" className="text-emerald-700 dark:text-emerald-400 print:text-emerald-800 hover:underline">
                ResearchGate: profile/Md-Patwary-11
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">|</span>
              <span>Nationality: Bangladeshi · DOB: 10 Sep 1998</span>
            </div>
          </div>

          {/* Personal Statement */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
              Personal Statement and Research Focus
            </h2>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800">
              {PERSONAL_INFO.statement}
            </p>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 print:text-slate-800 mt-2">
              {PERSONAL_INFO.researchVision}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.degree}>
                  <div className="flex justify-between items-baseline text-xs">
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{edu.degree}</span>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-700 dark:text-slate-300 print:text-slate-700">
                    <span>{edu.institution}, {edu.location}</span>
                    <span className="font-mono font-semibold text-blue-800 dark:text-blue-400 print:text-blue-900">{edu.grade}</span>
                  </div>
                  {edu.thesisOrFocus && (
                    <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-600 italic mt-0.5">
                      Thesis: {edu.thesisOrFocus}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Research & Publications
            </h2>
            <ol className="space-y-3 text-xs list-decimal pl-4 text-slate-800 dark:text-slate-200 print:text-black">
              {PUBLICATIONS.map((pub) => (
                <li key={pub.id} className="leading-relaxed">
                  <span className="font-medium">{pub.authors} ({pub.year}). </span>
                  <span className="font-bold">{pub.title}. </span>
                  <span className="italic">{pub.journal}, </span>
                  <span>{pub.volume}, {pub.pages}. </span>
                  <a href={pub.doi} target="_blank" rel="noreferrer" className="text-blue-700 dark:text-blue-400 print:text-blue-800 hover:underline">
                    DOI: {pub.doi}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Professional Experience
            </h2>
            <div className="space-y-5">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline text-xs">
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white print:text-black">{exp.role}</span>
                      <span className="text-slate-600 dark:text-slate-400"> at {exp.company}</span>
                    </div>
                    <span className="font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                    {exp.division && `${exp.division} | `}{exp.location} | {exp.type}
                  </div>
                  <div className="space-y-2">
                    {exp.keyResponsibilities.map((grp) => (
                      <div key={grp.title}>
                        <div className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 print:text-slate-900">{grp.title}:</div>
                        <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-600 dark:text-slate-400 print:text-slate-600">
                          {grp.items.map((it, itIdx) => (
                            <li key={itIdx}>{it}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-3">
              Technical Skills
            </h2>
            <div className="text-xs space-y-2 text-slate-700 dark:text-slate-300 print:text-slate-800">
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Programming & Data Analysis: </span>
                <span>Python, NumPy, Pandas, Matplotlib, Seaborn, Plotly, Scikit-learn, XGBoost, ArcGIS Pro, Google Earth, SPSS, Origin Pro, Jupyter, HTML & CSS.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">BIM & Structural Design: </span>
                <span>Autodesk Revit, AutoCAD, ETABS, SAFE, Tekla Structures, Geo5, Autodesk ReCap (Scan-to-BIM), Navisworks, SketchUp, Lumion.</span>
              </div>
              <div>
                <span className="font-bold text-slate-900 dark:text-white print:text-black">Project Management & Cost Control: </span>
                <span>Quantity Surveying (BOQ), IPC forecasting, FIDIC contract provisions, MS Project, Planswift, MOQ, Cash flow analysis.</span>
              </div>
            </div>
          </div>

          {/* Certifications & References */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
                Key Certifications
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                {CERTIFICATIONS.slice(0, 5).map((c) => (
                  <li key={c.title}>
                    <span className="font-semibold">{c.title}</span> – {c.issuer} ({c.periodOrDate})
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white print:text-black border-b border-slate-200 dark:border-slate-800 pb-1 mb-2.5">
                References
              </h2>
              <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                {REFERENCES.map((r) => (
                  <div key={r.name}>
                    <div className="font-bold text-slate-900 dark:text-white print:text-black">{r.name}</div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-400">{r.designation}, {r.organization}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">{r.email} | {r.phone}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
