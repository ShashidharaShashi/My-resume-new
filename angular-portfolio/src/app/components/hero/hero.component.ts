import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeService } from '../../services/resume.service';
import { ContactInfo } from '../../models/resume.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero-section" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          <!-- Text Column -->
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-semibold">Senior Software Engineer &#64; Qualcomm</span>
            </div>

            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
                {{ contactData.name }}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-400">
                {{ contactData.title }}
              </p>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Backend system architect with <strong className="text-blue-300 font-semibold">{{ yearsOfExp }} years of experience</strong> scaling distributed applications, microservices, Kubernetes batch pipelines, and enterprise security.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 pt-1 font-mono">
              <a [href]="'mailto:' + contactData.email" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all">
                ✉ {{ contactData.email }}
              </a>
              <a [href]="'tel:' + contactData.phone" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all">
                📞 {{ contactData.phone }}
              </a>
              <a [href]="contactData.linkedin" target="_blank" className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all">
                🔗 LinkedIn Profile
              </a>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                📍 {{ contactData.location }}
              </span>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a href="#experience" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all">
                Explore Experience →
              </a>
              <button (click)="openChat.emit()" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-blue-400">
                ✨ Ask AI Assistant
              </button>
              <button (click)="openPrintModal.emit()" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all">
                📄 Download CV
              </button>
            </div>

            <div className="pt-5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-xl font-bold text-blue-400 font-mono">{{ yearsOfExp }}+</div>
                <div className="text-[11px] text-slate-400 font-medium">Years Experience</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-xl font-bold text-emerald-400 font-mono">100M+</div>
                <div className="text-[11px] text-slate-400 font-medium">FTP Files Processed</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-xl font-bold text-indigo-400 font-mono">90%</div>
                <div className="text-[11px] text-slate-400 font-medium">Grid Query Speedup</div>
              </div>
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-xl font-bold text-amber-400 font-mono">2x</div>
                <div className="text-[11px] text-slate-400 font-medium">Qualcomm Awards</div>
              </div>
            </div>

          </div>

          <!-- Profile Card -->
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden">
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">shashidhara_profile.java</span>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80">Full Stack Engineer</span>
                </div>

                <div className="p-5 flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-950">
                      <img [src]="profilePhoto" alt="Shashidhara H V" className="w-full h-full object-cover" />
                    </div>
                    <label htmlFor="photo-upload-ng" className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-600 text-white cursor-pointer shadow-lg hover:scale-110 transition-transform">
                      📷
                      <input id="photo-upload-ng" type="file" accept="image/*" (change)="onPhotoSelected($event)" className="hidden" />
                    </label>
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white">{{ contactData.name }}</h2>
                    <p className="text-xs font-mono text-blue-400 mt-0.5">Java • Spring Boot • Microservices • AWS</p>
                  </div>

                  <div className="w-full space-y-2 text-left pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      ⚡ Distributed System Architecture & Microservices
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      ☁ AWS EKS & High-Throughput Data Pipelines
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      🛡 Zero Trust IAP & Enterprise Security
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements OnInit {
  @Output() openPrintModal = new EventEmitter<void>();
  @Output() openChat = new EventEmitter<void>();

  contactData!: ContactInfo;
  yearsOfExp: string = '';
  profilePhoto: string = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400';

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.contactData = this.resumeService.contactData;
    this.yearsOfExp = this.resumeService.yearsOfExp;
    const saved = localStorage.getItem('shashidhara_profile_photo');
    if (saved) {
      this.profilePhoto = saved;
    }
  }

  onPhotoSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePhoto = reader.result as string;
        localStorage.setItem('shashidhara_profile_photo', this.profilePhoto);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
}
