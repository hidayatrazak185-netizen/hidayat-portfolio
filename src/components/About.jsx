import React from 'react';
import { Check, ShieldCheck, Cpu, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  const pillarIcons = [
    <ShieldCheck className="w-5 h-5 text-brand-600" />,
    <Cpu className="w-5 h-5 text-brand-600" />,
    <TrendingUp className="w-5 h-5 text-brand-600" />
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            {about.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {about.subtitle}
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (Exact Copy) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-5 text-slate-700 leading-relaxed text-base sm:text-lg">
            {about.paragraphs.map((p, index) => (
              <p key={index} className="text-slate-700">
                {p}
              </p>
            ))}

            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1.5 text-brand-700 font-semibold">
                <Check className="w-4 h-4 text-brand-600" />
                Data Integrity Focus
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-brand-700 font-semibold">
                <Check className="w-4 h-4 text-brand-600" />
                Administrative Rigor
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-brand-700 font-semibold">
                <Check className="w-4 h-4 text-brand-600" />
                Business Technology Context
              </span>
            </div>
          </div>

          {/* Complementary Pillar Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
              Core Transferable Strengths
            </h3>
            
            {about.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:border-brand-200 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-50 shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-navy-900">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-600 leading-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Career Objective Box */}
            <div className="rounded-xl p-5 bg-gradient-to-br from-brand-50 to-white border border-brand-200/90 text-sm">
              <div className="font-semibold text-brand-900 mb-1">
                Immediate Employment Target
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Seeking an entry-level / Junior Data Analyst position to support reporting, data validation, database queries, and business operational improvements.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
