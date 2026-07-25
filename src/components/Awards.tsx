import React from 'react';
import { awardsData, educationData } from '../data/resumeData';
import { Award, GraduationCap } from 'lucide-react';

export const Awards: React.FC = () => {
  return (
    <section id="awards" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Title */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Honors & Recognition
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Awards & Education
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Recognized by leadership for engineering excellence and process modernization.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {awardsData.map((award) => (
            <div
              key={award.id}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-amber-950/60 border border-amber-800/60 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800/80">
                  {award.issuer} Award
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {award.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">Qualcomm Internal Recognition</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {award.description}
              </p>

              <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Projects Recognized:</span>
                <div className="flex flex-wrap gap-1.5">
                  {award.projectsInvolved.map((proj) => (
                    <span key={proj} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700 text-[10px] font-mono">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/80">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Education Background</h3>
              <p className="text-xs text-slate-400 font-mono">Academic Qualifications</p>
            </div>
          </div>

          {educationData.map((edu, idx) => (
            <div key={idx} className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-sm font-bold text-white">{edu.degree} in {edu.field}</h4>
                <p className="text-xs text-blue-400 font-medium mt-0.5">{edu.institution}</p>
                <p className="text-xs text-slate-400 mt-0.5">{edu.location}</p>
              </div>
              <span className="px-2.5 py-1 rounded bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono font-bold self-start sm:self-auto">
                {edu.year}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

