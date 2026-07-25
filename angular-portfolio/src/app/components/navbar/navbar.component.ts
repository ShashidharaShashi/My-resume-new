import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-sm shadow-md shadow-blue-900/30">
              SH
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                Shashidhara H V
              </span>
              <span className="text-[10px] font-mono text-slate-400">
                Senior Full Stack Engineer
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6 text-xs font-mono text-slate-300">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-blue-400 transition-colors">Architecture</a>
            <a href="#awards" className="hover:text-blue-400 transition-colors">Awards</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              (click)="openChat.emit()"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-blue-400"
            >
              <span>Ask AI</span>
            </button>
            <button
              (click)="openPrintModal.emit()"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-all"
            >
              <span>Resume PDF</span>
            </button>
          </div>

        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  @Output() openPrintModal = new EventEmitter<void>();
  @Output() openChat = new EventEmitter<void>();
}
