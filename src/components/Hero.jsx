import React from 'react';
import { Download, ArrowDown, MapPin, Database, Award, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, heroMetrics } = portfolioData;

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white overflow-hidden"
    >
      {/* Subtle decorative background glow */}
      <div
        className="absolute top-12 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100/50 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 -ml-20 w-72 h-72 rounded-full bg-slate-100/60 blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: Desktop Left Text / Right Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Small Label / Status Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span>{personal.tagline}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-navy-900 tracking-tight leading-tight">
              {personal.heroHeading}
            </h1>

            {/* Supporting Headline */}
            <p className="mt-3 text-lg sm:text-xl font-medium text-brand-700 leading-snug">
              {personal.supportingHeadline}
            </p>

            {/* Introduction Copy */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {personal.intro}
            </p>

            {/* Location Pill */}
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
              <span>{personal.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 active:bg-brand-800 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personal.resumeUrl}
                download={personal.resumeFilename}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
              >
                <Download className="w-4 h-4 text-brand-600" />
                <span>Download Résumé</span>
              </a>
            </div>

            {/* Recruiter Transparency Note */}
            <p className="mt-4 text-xs text-slate-500 italic">
              Honest academic & internship qualifications • Ready for immediate Junior Data Analyst entry
            </p>
          </div>

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-sm">
              
              {/* Image Frame Card */}
              <div className="relative bg-white rounded-2xl p-3 shadow-lg border border-slate-200/90 overflow-hidden group">
                
                {/* Crop container:
                    Aspect ratio 4:5 with object-cover object-[center_18%] carefully frames the head and torso,
                    reducing the excessive blue space above the head while preserving natural proportions.
                */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-brand-600">
                  <img
                    src={personal.portraitUrl}
                    alt={personal.portraitAlt}
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="eager"
                  />
                  {/* Subtle inner gradient shadow at bottom for elegant contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Card Ribbon */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1.5 font-medium text-navy-900">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Open to Opportunities</span>
                  </div>
                  <span className="text-slate-400">UiTM Graduate</span>
                </div>
              </div>

              {/* Decorative accent card floating behind */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-brand-100 -z-10"
                aria-hidden="true"
              />
            </div>
          </div>

        </div>

        {/* Understated Info Cards (3 Columns) */}
        {/* Transparently presented as academic & internship accomplishments */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80">
          <div className="text-center mb-6">
            <h2 className="text-xs uppercase tracking-wider font-semibold text-slate-500">
              Academic & Practical Foundations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {heroMetrics.map((metric) => (
              <div
                key={metric.id}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {metric.badge}
                    </span>
                    {metric.id === 'cgpa' && <Award className="w-4 h-4 text-brand-600" />}
                    {metric.id === 'applications' && <CheckCircle2 className="w-4 h-4 text-brand-600" />}
                    {metric.id === 'skills' && <Database className="w-4 h-4 text-brand-600" />}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {metric.label}
                  </div>
                </div>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            Metrics reflect verified academic coursework and internship application validation; not presented as employment analytics tenure.
          </p>
        </div>

      </div>
    </section>
  );
}
