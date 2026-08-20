import React from 'react';
import { Mail, ShieldCheck, Code2 } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { companyData } from '../content/company';

export const Contact: React.FC = () => {
  const officialEmail = companyData.socialLinks.email || 'viron.technologies.inquiry@gmail.com';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" />
          <span>CONTACT & COLLABORATION</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Connect with <span className="text-gradient-cyan">{companyData.name}</span>
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Reach out for technical inquiries regarding Zee AI, feature suggestions, autonomous agent systems research, or company updates.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Information & Official Links */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
          <h2 className="text-xl font-bold text-white">Official Information</h2>

          <div className="space-y-4 text-xs text-gray-300">
            <a
              href={`mailto:${officialEmail}`}
              className="flex items-start space-x-3 p-4 rounded-xl bg-surface border border-white/5 hover:border-cyan-500/40 transition-colors group"
            >
              <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white group-hover:text-cyan-300 transition-colors">Official Gmail Inbox</div>
                <div className="text-cyan-400 font-mono font-semibold">{officialEmail}</div>
                <div className="text-[10px] text-gray-400 mt-0.5">Suggestions and inquiries route directly here</div>
              </div>
            </a>

            <div className="flex items-start space-x-3 p-4 rounded-xl bg-surface border border-white/5">
              <Code2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">GitHub Organization</div>
                <div className="text-gray-400 font-mono">github.com/virontechnologies</div>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-xl bg-surface border border-white/5">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-white">Security & Privacy</div>
                <div className="text-gray-400">Guardian permission & consent model verified</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-300">
            <strong>Founder & Lead Architect:</strong> Kartik Domra
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

      </div>

    </div>
  );
};
