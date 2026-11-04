import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Work History
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            {experience.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {experience.subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="mt-12 max-w-4xl space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-5 before:h-full before:w-0.5 before:bg-slate-200">
          {experience.items.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-4 sm:gap-6 group">
              
              {/* Timeline Node Icon */}
              <div className="relative z-10 flex items-center justify-center w-7 h-7 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-brand-600 shadow-sm shrink-0 mt-1">
                <Briefcase className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-brand-600" />
              </div>

              {/* Timeline Card Content */}
              <div className="flex-1 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-bold text-navy-900">
                        {item.role}
                      </h3>
                      {item.unit && (
                        <span className="text-sm font-medium text-slate-600">
                          — {item.unit}
                        </span>
                      )}
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-100">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-base font-semibold text-brand-700 mt-1">
                      {item.company}
                    </div>
                  </div>

                  {/* Metadata: Date and Location */}
                  <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Brief Overview */}
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Factual Bullet Points */}
                <div className="mt-4 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Key Responsibilities:
                  </h4>
                  {item.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-normal">
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Data Privacy / Compliance Notice */}
        <div className="mt-10 p-4 rounded-xl bg-white border border-slate-200 max-w-4xl text-xs text-slate-500 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0" />
          <span>
            <strong>Data Privacy Compliance:</strong> In accordance with strict ethical standards and confidentiality policies, all real personal applicant records and internal case files handled during internship remain strictly confidential and are never stored or showcased publicly.
          </span>
        </div>

      </div>
    </section>
  );
}
