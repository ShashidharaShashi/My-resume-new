import React, { useState } from 'react';
import { experienceData } from '../data/resumeData';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, CheckCircle2, Zap } from 'lucide-react';

export const Experience: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('qualcomm');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Work History & Progression
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Proven track record across leading tier-1 semiconductor & tech companies.
          </p>
        </div>

        {/* Experience Timeline List */}
        <div className="space-y-6">
          {experienceData.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`rounded-xl border transition-all overflow-hidden ${
                  exp.isCurrent
                    ? 'bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-950/20'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Header Bar */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none hover:bg-slate-800/40 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                      <span className="text-blue-400 font-bold text-base">@ {exp.company}</span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 text-[10px] font-mono font-bold">
                          PRESENT ROLE
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-400" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3">
                    <button
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {isExpanded ? (
                        <>
                          Hide Details <ChevronUp className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          View Achievements ({exp.bulletPoints.length}) <ChevronDown className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Key Metrics Chips */}
                {exp.keyMetrics && (
                  <div className="px-5 pb-4 flex flex-wrap gap-2.5">
                    {exp.keyMetrics.map((km, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-md bg-slate-800/60 border border-slate-700/60 text-xs flex items-center gap-2"
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <div>
                          <span className="text-slate-300 font-medium">{km.label}: </span>
                          <strong className="text-blue-300 font-mono font-bold">{km.value}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="p-5 pt-3 border-t border-slate-800/80 space-y-5 bg-slate-950/40">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                      {exp.summary}
                    </p>

                    <div className="space-y-2.5">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Key Responsibilities & Deliverables
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.bulletPoints.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-slate-800/80 text-blue-300 border border-slate-700/80 text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

