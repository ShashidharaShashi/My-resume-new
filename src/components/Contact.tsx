import React, { useState } from 'react';
import { contactData } from '../data/resumeData';
import { Mail, Phone, Linkedin, MapPin, Copy, Check, Send, FileDown, Sparkles } from 'lucide-react';

interface ContactProps {
  onOpenPrintModal: () => void;
  onOpenChat: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenPrintModal, onOpenChat }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
            Get In Touch
          </span>
          <h2 className="text-2xl font-bold text-white mt-1">
            Connect & Collaborate
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            Interested in discussing Senior Software Engineering roles, system architecture, or full stack Java microservices? Reach out today.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Contact Details Cards Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Contact Information</h3>
              
              {/* Email Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/80 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 font-mono">Email Address</div>
                    <a href={`mailto:${contactData.email}`} className="text-xs font-semibold text-white hover:text-blue-400 truncate block">
                      {contactData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactData.email, 'email')}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Phone Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-md bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] text-slate-400 font-mono">Phone / WhatsApp</div>
                    <a href={`tel:${contactData.phone}`} className="text-xs font-semibold text-white hover:text-emerald-400 truncate block">
                      {contactData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(contactData.phone, 'phone')}
                  className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 shrink-0"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* LinkedIn Box */}
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-900 border border-slate-800 hover:border-blue-500/50 flex items-center justify-between gap-3 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-blue-950/80 text-blue-400 border border-blue-800/80 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-mono">LinkedIn Profile</div>
                    <div className="text-xs font-semibold text-white group-hover:text-blue-400 transition-colors">
                      shashidhara-h-v-465b7116b
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Box */}
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded-md bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
                  <MapPin className="w-4 h-4 text-rose-400" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 font-mono">Primary Location</div>
                  <div className="text-xs font-semibold text-white">{contactData.location}</div>
                </div>
              </div>

            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={onOpenPrintModal}
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-slate-700 text-xs font-bold text-slate-200 flex items-center justify-center gap-1.5 transition-all"
              >
                <FileDown className="w-4 h-4 text-blue-400" />
                Export Resume PDF
              </button>
              <button
                onClick={onOpenChat}
                className="p-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center justify-center gap-1.5 shadow-md shadow-blue-950/30 transition-all"
              >
                <Sparkles className="w-4 h-4 text-blue-200" />
                Ask AI Assistant
              </button>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
            <h3 className="text-base font-bold text-white mb-1">Send Direct Message</h3>
            <p className="text-xs text-slate-400 mb-5">
              Leave a note for Shashidhara and get a swift response.
            </p>

            {formSubmitted ? (
              <div className="p-5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-center space-y-2">
                <div className="w-10 h-10 rounded-full bg-emerald-900 text-emerald-300 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Shashidhara will review your message and reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Message / Project Inquiry</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Hi Shashidhara, we would love to connect with you regarding a Senior Java / Microservices engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-950/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bar */}
        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <div>© {new Date().getFullYear()} Shashidhara H V. All rights reserved.</div>
          <div>Senior Full Stack Engineer Portfolio • Bangalore / Mysore</div>
        </div>

      </div>
    </section>
  );
};

