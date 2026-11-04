import React, { useState } from 'react';
import { Mail, Download, MapPin, Copy, Check, FileText, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Check if any optional social links have non-empty URLs
  const hasSocials = personal.socialLinks && 
    Object.values(personal.socialLinks).some(url => typeof url === 'string' && url.trim().length > 0);

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="bg-slate-50/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm text-center">
            
            {/* Header */}
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
              {contact.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {contact.subtitle}
            </p>

            {/* Direct Email Action Container */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <a
                href={`mailto:${contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email to Hidayat</span>
              </a>

              <button
                type="button"
                onClick={copyToClipboard}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors focus-visible:ring-2 focus-visible:ring-brand-600"
                aria-label="Copy email address to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
                <span>{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
            </div>

            {/* Email Address Display */}
            <div className="mt-3 text-sm font-mono text-slate-500">
              {contact.email}
            </div>

            {/* Details Box (Location & Resume) */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
              
              {/* Location Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <MapPin className="w-4 h-4 text-brand-600" />
                  <span>Based in</span>
                </div>
                <div className="mt-1.5 text-base font-bold text-navy-900">
                  {contact.location}
                </div>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  {contact.relocationNote}
                </p>
              </div>

              {/* Resume Download Box */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    <FileText className="w-4 h-4 text-brand-600" />
                    <span>Complete Credentials</span>
                  </div>
                  <div className="mt-1.5 text-base font-bold text-navy-900">
                    Full Résumé (PDF)
                  </div>
                  <p className="mt-1 text-xs text-slate-500 leading-normal">
                    {contact.phoneNote}
                  </p>
                </div>
                <div className="mt-3">
                  <a
                    href={personal.resumeUrl}
                    download={personal.resumeFilename}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-600 hover:text-brand-800 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF Version</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Optional Social Links - rendered ONLY if supplied in data file */}
            {hasSocials && (
              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-center gap-4">
                {personal.socialLinks.linkedin && (
                  <a
                    href={personal.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {personal.socialLinks.github && (
                  <a
                    href={personal.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-brand-600 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
