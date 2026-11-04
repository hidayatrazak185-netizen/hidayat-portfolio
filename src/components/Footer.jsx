import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { footer, personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-navy-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Role */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="w-7 h-7 rounded-lg bg-brand-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                H
              </span>
              <span className="text-lg font-bold text-white tracking-tight">
                {footer.fullName}
              </span>
            </div>
            <p className="mt-1 text-sm text-brand-400 font-medium">
              {footer.role}
            </p>
            <p className="mt-1 text-xs text-slate-400 max-w-sm">
              {footer.quote}
            </p>
          </div>

          {/* Quick Section Anchors */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to Top Button */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-navy-800 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700/80 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {currentYear} {footer.fullName}. All rights reserved.</p>
          <p className="text-slate-400">
            Built with React & Tailwind CSS • Clean Semantic Architecture
          </p>
        </div>
      </div>
    </footer>
  );
}
