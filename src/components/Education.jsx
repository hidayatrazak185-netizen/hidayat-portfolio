import React from 'react';
import { GraduationCap, Award, BookOpen, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-slate-50/70 border-t border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            {education.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {education.subtitle}
          </p>
        </div>

        {/* Education Institutions Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Institution Cards */}
          <div className="lg:col-span-8 space-y-6">
            {education.institutions.map((inst) => (
              <div
                key={inst.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900 leading-snug">
                        {inst.institution}
                      </h3>
                      <div className="text-base font-semibold text-brand-700 mt-0.5">
                        {inst.degree}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-500">
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 font-medium text-slate-700">
                          {inst.status}
                        </span>
                        {inst.period && (
                          <span>• {inst.period}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CGPA Badge */}
                  <div className="sm:text-right shrink-0">
                    <div className="inline-flex flex-col items-start sm:items-end bg-brand-50/80 border border-brand-100 px-3 py-1.5 rounded-xl">
                      <span className="text-[10px] uppercase font-bold text-brand-600">Cumulative GPA</span>
                      <span className="text-xl font-extrabold text-navy-900">{inst.cgpa}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                  {inst.description}
                </p>

                {/* Key Coursework / Subjects */}
                <div className="mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Key Academic Areas:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {inst.keySubjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Honors within institution */}
                {inst.honors && inst.honors.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                    {inst.honors.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        <Award className="w-3.5 h-3.5 text-emerald-600" />
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Academic Recognition Callout Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm">
              <div className="flex items-center gap-2.5 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-900">
                    {education.recognitionSummary.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    Verified Academic Merit
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3.5">
                {education.recognitionSummary.items.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50/70 border border-slate-100">
                    <div className="text-sm font-bold text-navy-900">
                      {item.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-500 italic">
                * Recognition reflects verified Dean’s List achievements at UiTM and official MUET certification.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
