import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const [selectedArch, setSelectedArch] = useState<number>(0);

  const architectures = [
    {
      id: 'ftp-sync',
      title: 'Kubernetes Distributed FTP Sync Engine',
      company: 'Qualcomm',
      metric: '24+ Hours → ~1 Hour Execution',
      speedup: '95.8% Reduction',
      before: {
        title: 'Legacy Monolithic FTP Sync',
        duration: '24+ Hours Execution',
        description: 'Single monolithic process sequentially pulling 100M+ FTP files over FTP connection. Prone to connection drops, network congestion, and memory overhead.',
        nodes: ['FTP Server', 'Single Java Monolith VM', 'Disk Storage'],
      },
      after: {
        title: 'Shashidhara\'s K8s Distributed Pod Framework',
        duration: '~1 Hour Execution',
        description: 'Kubernetes batch controller dynamically partitioning 100M+ FTP file paths into parallel queues. Scaled across AWS EKS worker pods with automatic retry logic.',
        nodes: ['FTP Cluster', 'Dynamic Job Allocator', 'K8s Worker Pods (Parallel)', 'AWS S3 / EFS'],
      },
      techStack: ['Java', 'Spring Boot', 'Kubernetes (EKS)', 'AWS S3', 'Docker', 'Multithreading'],
    },
    {
      id: 'data-grid',
      title: 'ECCN Heavy Data Grid Caching & Messaging',
      company: 'Qualcomm',
      metric: '3 Minutes → 18 Seconds Load Time',
      speedup: '90% Speedup',
      before: {
        title: 'Direct Heavy Database Join Queries',
        duration: '180 Seconds (3 mins)',
        description: 'Frontend requested complex ECCN reports executing 7-way table joins on relational database for every request, causing database lockups and timeout errors.',
        nodes: ['Angular Frontend', 'REST Monolith', 'Relational DB (7-Way Joins)'],
      },
      after: {
        title: 'Intelligent Caching & TIBCO Event Grid',
        duration: '18 Seconds',
        description: 'Architected multi-tier caching utility backed by TIBCO messaging queue for async cache invalidation, cutting database load by 90% and delivering near-instant grid loads.',
        nodes: ['Angular Web', 'Spring Boot Microservice', 'TIBCO Event Bus', 'Redis Caching Layer', 'PostgreSQL DB'],
      },
      techStack: ['Spring Boot', 'TIBCO Messaging', 'PostgreSQL', 'Spring Data JPA', 'Angular'],
    },
    {
      id: 'employee-pipeline',
      title: 'LCD 52,000+ Employee Processing Pipeline',
      company: 'Qualcomm',
      metric: 'High-Throughput Multithreaded Engine',
      speedup: '< 2 Mins Runtime',
      before: {
        title: 'Sequential Row-by-Row File Transfers',
        duration: 'Heavy Lag & Manual Scripts',
        description: 'Unoptimized row processing causing memory leaks when handling 52,000+ employee records during enterprise updates.',
        nodes: ['CSV File Feed', 'Single Thread Script', 'Database Table'],
      },
      after: {
        title: 'Java Multithread Batch Insert & Robocopy',
        duration: '< 2 Minutes Processing',
        description: 'Leveraged Java Executor Service for chunked batch inserts, integrated with automated Robocopy file transfer routines and Splunk monitoring.',
        nodes: ['Employee Feed', 'Java Concurrency Pipeline', 'Batch Insert Engine', 'Robocopy Automation'],
      },
      techStack: ['Java Multithreading', 'Spring Boot', 'Robocopy', 'Splunk', 'CloudWatch'],
    },
  ];

  const current = architectures[selectedArch];

  return (
    <section id="architecture" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Title */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Interactive System Architecture
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Architecture & Optimization Breakdown
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Select a project below to compare legacy bottleneck architectures against Shashidhara's high-performance cloud solutions.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {architectures.map((arch, idx) => (
            <button
              key={arch.id}
              onClick={() => setSelectedArch(idx)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                selectedArch === idx
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              {arch.title}
            </button>
          ))}
        </div>

        {/* Architecture Comparison Card */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-6">
          
          {/* Header Metric Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-lg bg-slate-900 border border-slate-800">
            <div>
              <span className="text-[10px] font-mono text-blue-400 font-bold uppercase">{current.company} ARCHITECTURE</span>
              <h3 className="text-base font-bold text-white mt-0.5">{current.title}</h3>
            </div>
            <div className="text-right flex items-center sm:block gap-2">
              <span className="text-[10px] font-mono text-slate-400 block">Performance Gain</span>
              <span className="text-xs font-bold text-emerald-400 font-mono bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800/80">
                {current.speedup} ({current.metric})
              </span>
            </div>
          </div>

          {/* Before vs After Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            
            {/* Legacy Before Card */}
            <div className="p-4 rounded-lg bg-slate-950/60 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/60">
                  BEFORE OPTIMIZATION
                </span>
                <span className="text-[10px] font-mono text-slate-400">{current.before.duration}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-200">{current.before.title}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {current.before.description}
              </p>

              {/* Node diagram list */}
              <div className="pt-2 space-y-1.5">
                <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">Legacy Data Flow:</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {current.before.nodes.map((node, i) => (
                    <React.Fragment key={i}>
                      <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 text-[10px] font-mono">
                        {node}
                      </span>
                      {i < current.before.nodes.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Shashidhara's After Architecture Card */}
            <div className="p-4 rounded-lg bg-slate-900/90 border border-blue-500/40 space-y-3 shadow-lg shadow-blue-950/20">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80">
                  SHASHIDHARA'S SOLUTION
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">{current.after.duration}</span>
              </div>

              <h4 className="text-sm font-bold text-white">{current.after.title}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {current.after.description}
              </p>

              {/* Node diagram list */}
              <div className="pt-2 space-y-1.5">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">Optimized Microservices Flow:</span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {current.after.nodes.map((node, i) => (
                    <React.Fragment key={i}>
                      <span className="px-2 py-0.5 rounded bg-blue-950/80 text-blue-200 border border-blue-800/80 text-[10px] font-mono font-semibold">
                        {node}
                      </span>
                      {i < current.after.nodes.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-blue-400 shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Tech Stack Footer */}
          <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-slate-400">Architecture Components:</span>
            <div className="flex flex-wrap gap-1.5">
              {current.techStack.map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-blue-300 border border-slate-700 text-[10px] font-mono font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

