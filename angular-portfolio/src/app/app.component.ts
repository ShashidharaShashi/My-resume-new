import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ResumeService } from './services/resume.service';
import { ContactInfo, ExperienceItem, SkillCategory, ProjectItem, AwardItem, EducationItem } from './models/resume.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent
  ],
  template: `
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-blue-500 selection:text-white">
      <app-navbar
        (openPrintModal)="isPrintModalOpen = true"
        (openChat)="isChatOpen = true"
      ></app-navbar>

      <main>
        <app-hero
          (openPrintModal)="isPrintModalOpen = true"
          (openChat)="isChatOpen = true"
        ></app-hero>

        <!-- About Section -->
        <section id="about" className="py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
                Career Overview
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Engineering Leadership & System Architecture
              </h2>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-slate-300 text-sm leading-relaxed">
                {{ summaryText }}
              </p>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" className="py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Technical Expertise</span>
              <h2 className="text-2xl font-bold text-white mt-1">Skills & Tech Stack Matrix</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              &#64;for (category of skillCategories; track category.title) {
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <h3 className="text-base font-bold text-white">{{ category.title }}</h3>
                  <div className="space-y-3">
                    &#64;for (skill of category.skills; track skill.name) {
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-200 font-medium">{{ skill.name }}</span>
                          <span className="text-blue-400 font-mono font-bold">{{ skill.level }}%</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full rounded-full" [style.width.%]="skill.level"></div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" className="py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Career Journey</span>
              <h2 className="text-2xl font-bold text-white mt-1">Professional Experience</h2>
            </div>

            <div className="space-y-6">
              &#64;for (exp of experienceData; track exp.id) {
                <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{{ exp.role }}</h3>
                      <p className="text-sm text-blue-400 font-medium">{{ exp.company }}</p>
                    </div>
                    <span className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-xs font-mono font-bold self-start sm:self-auto">
                      {{ exp.period }}
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 list-disc list-inside leading-relaxed">
                    &#64;for (desc of exp.description; track desc) {
                      <li>{{ desc }}</li>
                    }
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    &#64;for (skill of exp.skills; track skill) {
                      <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700">
                        {{ skill }}
                      </span>
                    }
                  </div>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Awards Section -->
        <section id="awards" className="py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Honors & Recognition</span>
              <h2 className="text-2xl font-bold text-white mt-1">Awards & Education</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              &#64;for (award of awardsData; track award.id) {
                <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800/80">
                      🏆 {{ award.issuer }} Award
                    </span>
                    <span className="text-xs font-mono text-slate-400">{{ award.year }}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{{ award.title }}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{{ award.description }}</p>
                </div>
              }
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" className="py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">Get In Touch</span>
              <h2 className="text-2xl font-bold text-white mt-1">Connect & Collaborate</h2>
            </div>

            <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Email</div>
                  <a [href]="'mailto:' + contactData.email" className="text-white font-bold hover:text-blue-400">{{ contactData.email }}</a>
                </div>
                <div className="p-3 rounded bg-slate-900 border border-slate-800">
                  <div className="text-slate-400">Phone / WhatsApp</div>
                  <a [href]="'tel:' + contactData.phone" className="text-white font-bold hover:text-emerald-400">{{ contactData.phone }}</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
              <div>© {{ currentYear }} Shashidhara H V. All rights reserved.</div>
              <div>Senior Full Stack Engineer Portfolio • Angular Edition</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  `
})
export class AppComponent implements OnInit {
  isPrintModalOpen = false;
  isChatOpen = false;

  contactData!: ContactInfo;
  summaryText = '';
  skillCategories: SkillCategory[] = [];
  experienceData: ExperienceItem[] = [];
  awardsData: AwardItem[] = [];
  currentYear = new Date().getFullYear();

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.contactData = this.resumeService.contactData;
    this.summaryText = this.resumeService.summaryText;
    this.skillCategories = this.resumeService.skillCategories;
    this.experienceData = this.resumeService.experienceData;
    this.awardsData = this.resumeService.awardsData;
  }
}
