import React from 'react';
import { contactData, summaryText, experienceData, skillCategories, awardsData, educationData } from '../data/resumeData';
import { X, Printer, Download, Mail, Phone, Linkedin, MapPin, CheckCircle2 } from 'lucide-react';

interface PrintableResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintableResumeModal: React.FC<PrintableResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Controls Header */}
        <div className="p-4 bg-slate-900 text-slate-100 flex items-center justify-between border-b border-slate-800 shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">Resume Document Preview</span>
            <span className="text-xs text-slate-400 font-mono">(Print & PDF Ready)</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
            >
              <Printer className="w-4 h-4" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content Document Container */}
        <div className="p-8 sm:p-12 overflow-y-auto font-sans space-y-6 text-slate-800 leading-normal" id="printable-area">
          
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 uppercase">
              {contactData.name}
            </h1>
            <p className="text-base font-semibold text-cyan-800">
              {contactData.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-600 pt-2">
              <span>Email: {contactData.email}</span>
              <span>•</span>
              <span>Phone: {contactData.phone}</span>
              <span>•</span>
              <span>LinkedIn: linkedin.com/in/shashidhara-h-v-465b7116b</span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {summaryText}
            </p>
          </div>

          {/* Core Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Core Skills
            </h2>
            <div className="space-y-1 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <strong className="text-slate-900 shrink-0 min-w-[180px]">• {cat.name}:</strong>
                  <span className="text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Professional Experience
            </h2>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-xs text-slate-900">
                  <span>
                    {exp.company} | <span className="text-cyan-900">{exp.role}</span>
                  </span>
                  <span className="text-slate-600 font-mono">{exp.period}</span>
                </div>

                <ul className="space-y-1 pl-4 text-xs text-slate-700 list-disc">
                  {exp.bulletPoints.map((bullet, idx) => (
                    <li key={idx} className="leading-normal">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Honors & Awards */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Achievements & Awards
            </h2>
            <ul className="space-y-1.5 pl-4 text-xs text-slate-700 list-disc">
              {awardsData.map((award) => (
                <li key={award.id}>
                  <strong className="text-slate-900">{award.title} ({award.issuer}):</strong> {award.description}
                </li>
              ))}
              <li>
                <strong className="text-slate-900">Gen AI Hackathon (ECCN):</strong> Proposed and prototyped AI request summarization tool demonstrating a 50% reduction in manual review effort.
              </li>
            </ul>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1">
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex justify-between text-xs text-slate-800 font-medium">
                <span><strong>{edu.degree}</strong> - {edu.field}, {edu.institution}</span>
                <span className="font-mono">{edu.year}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
