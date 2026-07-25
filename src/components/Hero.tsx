import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, Award, ChevronRight, Sparkles, Server, Cpu, Shield, FileText, Camera, Upload } from 'lucide-react';
import { contactData, yearsOfExp } from '../data/resumeData';
import myPhoto from '../assets/profile.jpg';

interface HeroProps {
  onOpenPrintModal: () => void;
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPrintModal, onOpenChat }) => {
  // Default professional software developer headshot photo
  const defaultPhoto = myPhoto;

  const [profilePhoto, setProfilePhoto] = useState<string>(defaultPhoto);

  useEffect(() => {
    const savedPhoto = localStorage.getItem('shashidhara_profile_photo');
    if (savedPhoto) {
      setProfilePhoto(savedPhoto);
    }
  }, []);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setProfilePhoto(result);
        localStorage.setItem('shashidhara_profile_photo', result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="hero-section" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Text Column */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-blue-500/30 text-blue-300 text-xs font-mono shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-semibold">Senior Software Engineer @ Qualcomm</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-sans">
                {contactData.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-400">
                {contactData.title}
              </p>
            </div>

            {/* Brief Elevator Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Backend system architect with <strong className="text-blue-300 font-semibold">{yearsOfExp} years of experience</strong> scaling distributed applications, microservices, Kubernetes batch pipelines, and enterprise security.
            </p>

            {/* Quick Contact & Info Grid */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-300 pt-1 font-mono">
              <a
                href={`mailto:${contactData.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {contactData.email}
              </a>
              <a
                href={`tel:${contactData.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                {contactData.phone}
              </a>
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:text-blue-300 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                LinkedIn Profile
              </a>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {contactData.location}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-900/30 transition-all"
              >
                Explore Experience
                <ChevronRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenChat}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold transition-all hover:border-blue-400"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                Ask AI Assistant
              </button>

              <button
                onClick={onOpenPrintModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-semibold transition-all"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Download CV
              </button>
            </div>

            {/* Key Accomplishment Quick Tickers */}
            <div className="pt-5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-left">
                <div className="text-xl font-bold text-blue-400 font-mono">{yearsOfExp}+</div>
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

          {/* Profile Visual Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glowing card border container */}
              <div className="relative rounded-xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden group">
                
                {/* Tech Header Banner */}
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-slate-400 ml-1.5">shashidhara_profile.java</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/80">
                    Full Stack Engineer
                  </span>
                </div>

                {/* Profile Avatar Frame */}
                <div className="p-5 flex flex-col items-center text-center space-y-4">
                  <div className="relative group/avatar">
                    {/* Ring animation */}
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    
                    {/* Portrait container with image */}
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-950 flex items-center justify-center">
                      <img
                        src={profilePhoto}
                        alt="Shashidhara H V"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Upload Photo Button Overlay */}
                    <label
                      htmlFor="photo-upload"
                      className="absolute bottom-0 right-0 p-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white cursor-pointer shadow-lg transition-transform hover:scale-110 border border-slate-900"
                      title="Upload your photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                        className="hidden"
                      />
                    </label>

                    <div className="absolute bottom-1 left-1 bg-emerald-500 border-2 border-slate-900 w-4 h-4 rounded-full" title="Active & Open for Senior Roles" />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-white">Shashidhara H V</h2>
                    <p className="text-xs font-mono text-blue-400 mt-0.5">
                      Java • Spring Boot • Microservices • AWS
                    </p>
                  </div>

                  {/* Quick Feature Badges */}
                  <div className="w-full space-y-2 text-left pt-1">
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>Distributed System Architecture & Microservices</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>AWS EKS & High-Throughput Data Pipelines</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                      <Shield className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Zero Trust IAP & Enterprise Security</span>
                    </div>
                  </div>

                  {/* Award Badges Pill */}
                  <div className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <div className="text-left">
                        <div className="text-xs font-bold text-slate-200">QSparkler & QAchiever</div>
                        <div className="text-[10px] text-slate-400">Qualcomm Internal Recognition</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-800/80">
                      Winner
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
