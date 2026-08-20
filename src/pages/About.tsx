import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, Layers, Sparkles, UserCheck, ArrowRight, Target, Eye } from 'lucide-react';
import { companyData } from '../content/company';
import { creatorData } from '../content/creator';

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <img src="/images/viron_logo.png" alt="Logo" className="w-4 h-4 object-contain" />
          <span>ABOUT VIRON TECHNOLOGIES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Pioneering <span className="text-gradient-cyan">Next-Generation</span> Systems Architecture
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          {companyData.aboutText}
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {companyData.vision}
          </p>
        </div>

        <div className="glass-panel p-8 rounded-2xl border border-white/10 space-y-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            {companyData.mission}
          </p>
        </div>
      </div>

      {/* Core Engineering Values */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white">Engineering Philosophy</h2>
          <p className="text-gray-400 text-xs mt-2">Core principles driving software architecture at Viron Technologies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.coreValues.map((value, idx) => (
            <div key={idx} className="glass-panel p-6 rounded-xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                {idx === 1 && <Layers className="w-5 h-5" />}
                {idx === 2 && <Cpu className="w-5 h-5" />}
                {idx === 3 && <Sparkles className="w-5 h-5" />}
              </div>
              <h3 className="font-bold text-white text-base">{value.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Spotlight */}
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-surface-light">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 text-center lg:text-left space-y-3">
            <div className="w-20 h-20 mx-auto lg:mx-0 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <UserCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">{creatorData.name}</h3>
            <p className="text-cyan-400 text-xs font-mono">{creatorData.role}</p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              {creatorData.bio}
            </p>
            <div className="pt-2">
              <Link
                to="/creator"
                className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center"
              >
                <span>Read Founder Profile & Background</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
