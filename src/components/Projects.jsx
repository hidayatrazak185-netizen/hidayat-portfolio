import React, { useState } from 'react';
import { FolderGit2, ChevronDown, ChevronUp, Sparkles, CheckCircle2, PlusCircle, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
            Transferable Skills & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight mt-1">
            {projects.title}
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600">
            {projects.subtitle}
          </p>
        </div>

        {/* Framing Banner */}
        <div className="mt-6 p-4 rounded-xl bg-brand-50/70 border border-brand-200/80 text-sm text-brand-900 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {projects.introNote}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.items.map((project) => {
            const isExpanded = expandedId === project.id;

            return (
              <article
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Meta */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                      {project.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {project.year}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className="mt-4 text-xl font-bold text-navy-900 leading-snug">
                    {project.title}
                  </h3>
                  
                  <div className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-brand-700">
                    <span>Role: {project.role}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-medium text-slate-500">{project.type}</span>
                  </div>

                  {/* Summary */}
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Contributions */}
                  <div className="mt-5 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Key Contributions:
                    </h4>
                    {project.contributions.map((contrib, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2 text-sm text-slate-700 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                        <span>{contrib}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Details */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/60 p-3.5 rounded-xl">
                      <p>{project.details}</p>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Skills Tags and Expand Toggle */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.skillsDemonstrated.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 text-navy-900 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-800 transition-colors self-start sm:self-center focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-600 rounded px-1"
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? 'Less info' : 'More context'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

              </article>
            );
          })}
        </div>

        {/* Extensible Future Projects Placeholder (Honest, not pretending to have unfinished work) */}
        <div className="mt-12 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto text-brand-600 mb-3 shadow-xs">
            <PlusCircle className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-navy-900">
            Future SQL & Excel Analytics Case Studies
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            This portfolio codebase is structured with a modular data schema so upcoming personal analytics projects—such as structured SQL database queries, business reporting dashboards, and spreadsheet modeling—can be added seamlessly.
          </p>
        </div>

      </div>
    </section>
  );
}
