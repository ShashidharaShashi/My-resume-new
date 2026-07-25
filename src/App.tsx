import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { ArchitectureViewer } from './components/ArchitectureViewer';
import { Awards } from './components/Awards';
import { Contact } from './components/Contact';
import { ResumeChatbot } from './components/ResumeChatbot';
import { PrintableResumeModal } from './components/PrintableResumeModal';

export default function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [printModalOpen, setPrintModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Navbar */}
      <Navbar
        onOpenPrintModal={() => setPrintModalOpen(true)}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenPrintModal={() => setPrintModalOpen(true)}
          onOpenChat={() => setChatOpen(true)}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <ArchitectureViewer />
        <Awards />
        <Contact
          onOpenPrintModal={() => setPrintModalOpen(true)}
          onOpenChat={() => setChatOpen(true)}
        />
      </main>

      {/* Floating Interactive AI Assistant Trigger Badge */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          id="floating-ai-trigger"
          onClick={() => setChatOpen(true)}
          className="group relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-2xl shadow-cyan-500/40 transition-all transform hover:scale-105 active:scale-95"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <span className="text-white font-extrabold tracking-wide">
            Ask AI Assistant
          </span>
        </button>
      </div>

      {/* Interactive AI Assistant Modal */}
      <ResumeChatbot
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
      />

      {/* Printable Resume PDF Modal */}
      <PrintableResumeModal
        isOpen={printModalOpen}
        onClose={() => setPrintModalOpen(false)}
      />
    </div>
  );
}
