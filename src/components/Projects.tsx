import React, { useState } from 'react';
import { projectHighlights } from '../data/resumeData';
import { Zap, CheckCircle2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Distributed Systems & Cloud', 'Performance Engineering', 'AI & Automation', 'Real-Time Systems'];

  const filteredProjects = projectHighlights.filter((proj) =>
    selectedCategory === 'All' ? true : proj.category === selectedCategory
  );

  return (
    <section id="projects" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Featured Initiatives
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Engineering Highlights & Projects
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            High-scale distributed systems, automated pipelines, and cloud migrations designed & deployed by Shashidhara.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-900/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between group hover:shadow-lg hover:shadow-blue-950/20"
            >
              <div className="space-y-3">
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800/80 text-blue-300 border border-slate-700/80">
                    {proj.companyName}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-amber-400 flex items-center gap-1 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/60">
                    <Zap className="w-3 h-3" />
                    {proj.impactMetric}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{proj.subtitle}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {proj.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-1">
                  {proj.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400 leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/80 text-[10px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

