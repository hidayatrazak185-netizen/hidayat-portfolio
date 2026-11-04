import React from 'react';
import { Database, Wrench, Users, Globe, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'core-technical':
        return <Database className="w-5 h-5 text-brand-600" />;
      case 'additional-tools':
        return <Wrench className="w-5 h-5 text-navy-800" />;
      case 'professional-skills':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'languages':
        return <Globe className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Competencies
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            {skills.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {skills.subtitle}
          </p>
        </div>

        {/* Note on Transparency */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
          <span className="font-semibold text-brand-700 shrink-0">Honest Skill Reporting:</span>
          <span>
            Reflecting genuine undergraduate and internship proficiencies. Skills are presented in functional groups without arbitrary percentages or fabricated mastery ratings.
          </span>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-900">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skill Items */}
                <div className="mt-5 space-y-3">
                  {category.skills.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-slate-50/70 hover:bg-slate-50 border border-slate-100 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-1"
                    >
                      <span className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0" />
                        {item.name}
                      </span>
                      <span className="text-xs text-slate-500 sm:text-right">
                        {item.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {category.id === 'core-technical' && (
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-brand-700 font-medium">
                  ✦ Primary tools applied during MAIK administrative internship & university coursework.
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
