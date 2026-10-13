import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, ExternalLink, Send, CheckCircle2, MessageSquare, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Infrastructure & Research Collaboration',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2">
            Inquiries & Collaboration
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Discuss Infrastructure Projects or Research Initiatives
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2">
            Available for cost engineering consultancy, environmental impact assessments, data science collaborations, and graduate research opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/90 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                Direct Contact Points
              </h3>

              {/* Email */}
              <div className="flex items-start justify-between gap-3 p-3 bg-white dark:bg-slate-850 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Email Address</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-400 break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start justify-between gap-3 p-3 bg-white dark:bg-slate-850 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Phone & WhatsApp</div>
                    <a
                      href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-emerald-700 dark:hover:text-emerald-400"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="p-1.5 text-slate-400 hover:text-slate-800 dark:hover:text-white rounded transition-colors shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-3 bg-white dark:bg-slate-850 rounded-xl border border-slate-200/80 dark:border-slate-800">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Current Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Online Profiles */}
            <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-900 border border-transparent dark:border-slate-800 text-white space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Verified Research & Professional Hubs
              </h4>
              <div className="flex flex-col gap-2.5 pt-1">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 bg-slate-800/80 hover:bg-slate-800 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href={PERSONAL_INFO.researchgate}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 bg-slate-800/80 hover:bg-slate-800 rounded-lg text-xs font-semibold text-white transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-emerald-400" />
                    <span>ResearchGate Author Page</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50/70 dark:bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Message Dispatched Successfully</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out, {formState.name}. I will review your inquiry and respond to {formState.email} promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({ name: '', email: '', subject: 'Infrastructure & Research Collaboration', message: '' });
                  }}
                  className="mt-4 px-4 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Send a Message</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Jennifer Smith"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Email Address</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jennifer@organization.org"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Subject / Area of Interest</label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Infrastructure & Research Collaboration">Infrastructure & Research Collaboration</option>
                    <option value="Quantity Surveying & Cost Estimation Consulting">Quantity Surveying & Cost Estimation Consulting</option>
                    <option value="Environmental Remote Sensing / Air Quality">Environmental Remote Sensing / Air Quality</option>
                    <option value="Machine Learning & Traffic Engineering">Machine Learning & Traffic Engineering</option>
                    <option value="Academic or Graduate Research Inquiry">Academic or Graduate Research Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Message Details</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your project, research scope, or inquiry..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
