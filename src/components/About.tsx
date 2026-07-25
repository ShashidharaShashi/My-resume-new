import React from 'react';
import { summaryText, coreMetrics } from '../data/resumeData';
import { Zap, Server, ShieldCheck, Activity, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Server,
      title: 'Backend & Microservices',
      description: 'Expertise in Java 17, Spring Boot, Spring Data JPA, and RESTful APIs, building resilient distributed services with high concurrency.',
    },
    {
      icon: Zap,
      title: 'High-Throughput Optimization',
      description: 'Proven track record of slashing pipeline runtimes by over 90% using multithreading, Kubernetes job parallelization, and Redis/TIBCO caching.',
    },
    {
      icon: Layers,
      title: 'Cloud & Infrastructure',
      description: 'Containerizing workloads with Docker & AWS EKS, creating robust CI/CD packaging, and establishing observability with Splunk & CloudWatch.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Implementing Zero Trust IAP authentication, SiteMinder IdP, LDAP, and stateless JWT token management for enterprise-scale platforms.',
    },
  ];

  return (
    <section id="about" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Executive Summary
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Architecting & Modernizing Scalable Systems
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Delivering high-performance backend infrastructure with quantifiable business impact.
          </p>
        </div>

        {/* Professional Summary Card */}
        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 relative overflow-hidden">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Professional Overview
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {summaryText}
            </p>
          </div>
        </div>

        {/* Quantifiable Engineering Impact Grid */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2 uppercase tracking-wider text-xs font-mono">
            <Zap className="w-4 h-4 text-amber-400" />
            Measurable System Optimization Impact
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreMetrics.map((metric) => (
              <div
                key={metric.id}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80">
                    {metric.percent}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center text-blue-400">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-2xl font-extrabold text-white font-mono tracking-tight group-hover:text-blue-400 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">
                    {metric.label}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                    {metric.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-blue-400">
                  <IconComponent className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

