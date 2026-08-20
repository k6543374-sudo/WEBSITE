import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, ShieldCheck, Sparkles, Code2, CheckCircle2, ChevronRight, UserCheck, Monitor, Download } from 'lucide-react';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { Grid3DBackground } from '../components/react-bits/Grid3DBackground';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { companyData } from '../content/company';
import { zeeAIData } from '../content/zee-ai';
import { creatorData } from '../content/creator';

export const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20 relative overflow-hidden">
      
      {/* 3D PARTICLE CONSTELLATION & GRID BACKGROUND */}
      <ParticleBackground particleCount={220} />
      <Grid3DBackground />

      {/* HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Logo Showcase with 3D Float */}
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-cyan-500/40 mb-8 animate-float shadow-2xl shadow-cyan-500/20">
            <img
              src="/images/viron_logo.png"
              alt="Viron Technologies Logo"
              className="w-8 h-8 object-contain filter drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]"
            />
            <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              VIRON TECHNOLOGIES &bull; OFFICIAL PLATFORM
            </span>
          </div>

          {/* Main Headline with React Bits ShinyText */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6">
            Building Intelligent Technology for the{' '}
            <ShinyText text="Next Generation" className="text-4xl sm:text-6xl lg:text-7xl font-extrabold" />
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            {companyData.heroSubtitle} Pioneering autonomous multi-agent systems, local-first dual-brain AI, and consent-gated security frameworks.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/products/zee-ai"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Explore Zee AI</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href={zeeAIData.downloadUrl || '/downloads/Zee AI Operating System.exe'}
              download={zeeAIData.downloadFilename || 'Zee AI Operating System.exe'}
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-cyan-300 glass-panel hover:bg-white/10 border border-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download (.exe)</span>
            </a>
          </div>

          {/* Key Stat 3D Spotlight Pills */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <SpotlightCard className="p-4 text-left border-cyan-500/20">
              <div className="text-xs font-mono text-cyan-400 uppercase mb-1">Architecture</div>
              <div className="text-sm font-semibold text-white">13 Autonomous Agents</div>
            </SpotlightCard>
            <SpotlightCard className="p-4 text-left border-purple-500/20">
              <div className="text-xs font-mono text-purple-400 uppercase mb-1">AI Engine</div>
              <div className="text-sm font-semibold text-white">Dual-Brain Router</div>
            </SpotlightCard>
            <SpotlightCard className="p-4 text-left border-emerald-500/20">
              <div className="text-xs font-mono text-emerald-400 uppercase mb-1">Security</div>
              <div className="text-sm font-semibold text-white">Guardian Consent Gate</div>
            </SpotlightCard>
            <SpotlightCard className="p-4 text-left border-pink-500/20">
              <div className="text-xs font-mono text-pink-400 uppercase mb-1">Ecosystem</div>
              <div className="text-sm font-semibold text-white">MCP Sandboxed Tools</div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SECTION: INTRODUCING ZEE AI WITH REAL DESKTOP INTERFACE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SpotlightCard className="p-8 sm:p-12 border-cyan-500/40 bg-gradient-to-br from-surface via-surface to-surface-light shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Col: Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FLAGSHIP PRODUCT SHOWCASE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Introducing <ShinyText text={zeeAIData.name} className="text-3xl sm:text-5xl font-extrabold" />
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {zeeAIData.shortDescription}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    <strong>13-Agent Autonomous System:</strong> Orchestrates tasks across Memory, Research, Coding, Browser, PC, Android, Vision, Plugin, Guardian, and Recovery agents.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    <strong>Dual-Brain AI Routing:</strong> Dynamically routes prompts between zero-config Pollinations AI, high-speed Groq Llama 3.3, and local offline Ollama models.
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">
                    <strong>Self-Evolving & Guardian Protected:</strong> Code AST analysis with human-in-the-loop refactoring gates and risk-scored user consent security.
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={zeeAIData.downloadUrl || '/downloads/Zee AI Operating System.exe'}
                  download={zeeAIData.downloadFilename || 'Zee AI Operating System.exe'}
                  className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 flex items-center space-x-2 transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4 text-cyan-200" />
                  <span>Download Zee AI (.exe)</span>
                </a>

                <Link
                  to="/products/zee-ai"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-200 glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center space-x-2"
                >
                  <span>Explore 3D Specification</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Col: Real Desktop UI Screenshot Showcase */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-4">
              <div className="relative group rounded-2xl overflow-hidden border border-cyan-500/40 shadow-2xl shadow-cyan-500/20 bg-surface p-1">
                <img
                  src="/images/zee_real_ui.png"
                  alt="Zee AI Real Desktop Interface"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-30 pointer-events-none" />
              </div>
              <div className="text-center font-mono text-xs text-cyan-300 flex items-center space-x-2 bg-surface-light/80 px-4 py-1.5 rounded-full border border-cyan-500/40">
                <Monitor className="w-4 h-4 text-cyan-400" />
                <span>Actual Zee AI Desktop UI &bull; 3D Energy Orb Interface</span>
              </div>
            </div>

          </div>
        </SpotlightCard>
      </section>

      {/* CORE SUBSYSTEM HIGHLIGHTS WITH 3D SPOTLIGHT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Engineering Excellence & Systems Innovation
          </h2>
          <p className="text-gray-400 text-sm">
            Core architectural pillars driving the technology stack of Viron Technologies and Zee AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Multi-Agent */}
          <SpotlightCard className="p-8 space-y-4 border-cyan-500/30">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">13-Agent Orchestration</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              CEO Agent intent dispatcher decomposes multi-step goals and coordinates specialized agents across memory, coding, vision, PC, and Android boundaries.
            </p>
            <div className="pt-2 text-xs font-mono text-cyan-400 flex items-center">
              <span>View Agent Specs</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </SpotlightCard>

          {/* Card 2: Guardian */}
          <SpotlightCard className="p-8 space-y-4 border-emerald-500/30">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Guardian Security</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Risk-scoring permission policy engine ensuring dangerous platform actions (file updates, system execution) require explicit user consent prompts.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-400 flex items-center">
              <span>Read Security Architecture</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </SpotlightCard>

          {/* Card 3: Self-Evolving Engine */}
          <SpotlightCard className="p-8 space-y-4 border-purple-500/30">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Self-Evolving Code Engine</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Automated AST inspection, risk scoring, patch proposal diff generator, and regression auditing with human-in-the-loop gating.
            </p>
            <div className="pt-2 text-xs font-mono text-purple-400 flex items-center">
              <span>Explore Self-Evolution</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </SpotlightCard>

        </div>
      </section>

      {/* FOUNDER & CREATOR SPOTLIGHT WITH 3D TILT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SpotlightCard className="p-8 sm:p-12 border-white/10 bg-gradient-to-br from-surface to-surface-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-4 text-center lg:text-left">
              <div className="w-24 h-24 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-1 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center text-cyan-300">
                  <UserCheck className="w-10 h-10" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{creatorData.name}</h3>
                <p className="text-cyan-400 text-xs font-mono">{creatorData.role} &bull; Viron Technologies</p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <blockquote className="text-gray-300 text-sm sm:text-base italic leading-relaxed border-l-2 border-cyan-500 pl-4">
                "{creatorData.bio}"
              </blockquote>

              <div className="flex flex-wrap gap-2 pt-2">
                {creatorData.skills.slice(0, 5).map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300">
                    {skill.name}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/creator"
                  className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center"
                >
                  <span>View Full Founder Profile</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            </div>

          </div>
        </SpotlightCard>
      </section>

    </div>
  );
};
