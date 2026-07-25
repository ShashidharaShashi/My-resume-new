import React, { useState } from 'react';
import { skillCategories, yearsOfExp } from '../data/resumeData';
import { Search, Server, Cloud, Database, Code, ShieldCheck } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Server': return <Server className="w-4 h-4 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-blue-400" />;
      case 'Database': return <Database className="w-4 h-4 text-blue-400" />;
      case 'Code': return <Code className="w-4 h-4 text-blue-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4 text-blue-400" />;
      default: return <Server className="w-4 h-4 text-blue-400" />;
    }
  };

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()))
    ),
  })).filter((cat) =>
    activeCategory === 'All' ? cat.skills.length > 0 : cat.name === activeCategory && cat.skills.length > 0
  );

  return (
    <section id="skills" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
              Core Technical Competencies
            </span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Skills & Tech Stack Matrix
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {yearsOfExp} years of hands-on expertise across backend architecture, cloud infrastructure, and databases.
            </p>
          </div>

          {/* Search Filter Box */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (Java, K8s...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === 'All'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.name
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {getIcon(cat.iconName)}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="p-6 text-center bg-slate-900/50 rounded-xl border border-slate-800 text-slate-400 text-xs">
              No skills found matching "{searchQuery}".
            </div>
          ) : (
            filteredCategories.map((category) => (
              <div key={category.name} className="space-y-3">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <div className="p-1 rounded-md bg-slate-800/80 border border-slate-700/80">
                    {getIcon(category.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-200">{category.name}</h3>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-xl transition-all border ${
                        skill.featured
                          ? 'bg-slate-900/90 border-slate-800 hover:border-blue-500/40'
                          : 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs text-white flex items-center gap-1.5">
                          {skill.featured && (
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          )}
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                            skill.level === 'Expert'
                              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800/80'
                              : skill.level === 'Advanced'
                              ? 'bg-blue-950/80 text-blue-300 border-blue-800/80'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>

                      {skill.description && (
                        <p className="text-[11px] text-slate-400 mt-1.5 leading-relaxed">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};

