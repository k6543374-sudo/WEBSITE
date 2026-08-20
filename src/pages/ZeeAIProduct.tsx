import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Cpu, ShieldCheck, BookOpen, ArrowRight, Activity, Monitor, Download, HardDrive, FileCheck } from 'lucide-react';
import { ThreeZeeCore } from '../components/react-bits/ThreeZeeCore';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { zeeAIData } from '../content/zee-ai';

export const ZeeAIProduct: React.FC = () => {
  const [orbState, setOrbState] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = () => {
    setDownloading(true);
    setDownloadNotice('Download started! Fetching Zee AI Operating System.exe...');

    const link = document.createElement('a');
    link.href = zeeAIData.downloadUrl || '/downloads/Zee AI Operating System.exe';
    link.download = zeeAIData.downloadFilename || 'Zee AI Operating System.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 4000);

    setTimeout(() => {
      setDownloadNotice(null);
    }, 6000);
  };

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <ParticleBackground particleCount={160} />

      {/* 1. HERO OVERVIEW SECTION */}
      <section className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-xl shadow-cyan-500/10">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>VIRON TECHNOLOGIES &bull; FLAGSHIP PRODUCT SPECIFICATION</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {zeeAIData.name}: The Modular AI <ShinyText text="Operating System" className="text-4xl sm:text-6xl font-extrabold" />
        </h1>

        <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
          {zeeAIData.fullOverview}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-gray-400 pt-2">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Version {zeeAIData.version}</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">13 Autonomous Agents</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Dual-Brain Router</span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Guardian Security</span>
        </div>

        {/* HERO CTA DOWNLOAD BUTTON */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer group"
          >
            <Download className={`w-5 h-5 text-cyan-300 ${downloading ? 'animate-bounce' : 'group-hover:translate-y-0.5 transition-transform'}`} />
            <div className="text-left">
              <div className="text-sm leading-none">Download Zee AI Executable (.exe)</div>
              <div className="text-[10px] font-mono text-cyan-200 mt-1 font-normal">Windows 10/11 &bull; {zeeAIData.downloadSize || '224 MB'}</div>
            </div>
          </button>

          <a
            href={zeeAIData.downloadUrl || '/downloads/Zee AI Operating System.exe'}
            download={zeeAIData.downloadFilename || 'Zee AI Operating System.exe'}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-gray-300 glass-panel hover:bg-white/10 border border-white/15 transition-all duration-300 flex items-center justify-center space-x-2 text-xs font-mono"
          >
            <HardDrive className="w-4 h-4 text-cyan-400" />
            <span>Direct File Link</span>
          </a>
        </div>

        {downloadNotice && (
          <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-500/50 text-cyan-200 text-xs font-mono animate-fade-in flex items-center justify-center space-x-2">
            <FileCheck className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>{downloadNotice}</span>
          </div>
        )}
      </section>

      {/* 2. REAL ZEE AI DESKTOP INTERFACE SCREENSHOT SHOWCASE */}
      <section className="relative z-10 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Monitor className="w-4 h-4 text-cyan-400" />
            <span>AUTHENTIC SYSTEM INTERFACE</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Real <ShinyText text="Zee AI Personal OS" className="text-3xl font-extrabold" /> Desktop Interface
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm">
            Live production interface of Zee AI featuring the dynamic notch navigation bar, status telemetry, central 3D Ultron Energy Orb, and hands-free voice trigger.
          </p>
        </div>

        <SpotlightCard className="p-4 sm:p-6 border-cyan-500/40 bg-gradient-to-br from-surface to-surface-light shadow-2xl">
          <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#02050d] p-1">
            <img
              src="/images/zee_real_ui.png"
              alt="Zee AI Authentic Desktop System Interface"
              className="w-full h-auto rounded-xl object-cover shadow-2xl"
            />
            <div className="absolute top-4 left-4 glass-panel px-3 py-1.5 rounded-full border border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE DESKTOP RUNTIME &bull; ULTRON CORE</span>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* 3. WHAT IS ZEE AI? & THREE.JS 3D QUANTUM CORE */}
      <section className="relative z-10">
        <SpotlightCard className="p-8 sm:p-12 border-cyan-500/40 bg-gradient-to-br from-surface to-surface-light shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-extrabold text-white">What is Zee AI?</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Zee AI is a personal AI operating system created by <strong>Kartik Domra</strong> and engineered by <strong>Viron Technologies</strong>. Unlike standard chatbot interfaces, Zee AI operates as a unified control plane across Windows desktop, Android companion hardware, local LLMs, and cloud endpoints.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                It utilizes a <strong>13-agent autonomous architecture</strong>, a <strong>Dual-Brain model router</strong>, a <strong>Self-Evolving Code Engine</strong>, and a <strong>Guardian Permission System</strong> to execute multi-step user workflows while ensuring complete data privacy and user consent.
              </p>

              <div className="pt-2 flex items-center space-x-3">
                <span className="text-xs font-mono text-cyan-400 font-semibold">Interactive 3D Simulator State:</span>
                <button
                  onClick={() => setOrbState('idle')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    orbState === 'idle' ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-lg shadow-cyan-500/20' : 'bg-surface text-gray-400 border-white/10'
                  }`}
                >
                  Idle
                </button>
                <button
                  onClick={() => setOrbState('listening')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    orbState === 'listening' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500 shadow-lg shadow-emerald-500/20' : 'bg-surface text-gray-400 border-white/10'
                  }`}
                >
                  Listening
                </button>
                <button
                  onClick={() => setOrbState('thinking')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all ${
                    orbState === 'thinking' ? 'bg-purple-500/20 text-purple-300 border-purple-500 shadow-lg shadow-purple-500/20' : 'bg-surface text-gray-400 border-white/10'
                  }`}
                >
                  Thinking
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center justify-center">
              <ThreeZeeCore size={360} state={orbState} />
              <div className="mt-4 text-center font-mono text-xs text-cyan-300 flex items-center space-x-2 bg-surface-light/80 px-4 py-1.5 rounded-full border border-cyan-500/40">
                <Activity className="w-4 h-4 animate-pulse text-cyan-400" />
                <span>State: {orbState.toUpperCase()} &bull; Three.js 3D WebGL Mesh</span>
              </div>
            </div>

          </div>
        </SpotlightCard>
      </section>

      {/* 4. DUAL-BRAIN AI SYSTEM WITH 3D SPOTLIGHT CARDS */}
      <section className="space-y-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-white">Dual-Brain AI System</h2>
          <p className="text-gray-400 text-xs">Dynamic multi-model router balancing latency, capability, cost, and offline privacy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SpotlightCard className="p-8 border-cyan-500/40 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Primary Cloud Brain</h3>
                <span className="text-xs font-mono text-cyan-400">Pollinations AI & Groq Llama 3.3</span>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Provides hyper-fast inferencing through Groq (Llama-3.3-70b-versatile) and zero-config multimodal reasoning via Pollinations AI. Enables instant complex reasoning without API configuration bottlenecks.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 border-purple-500/40 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Local Offline Brain</h3>
                <span className="text-xs font-mono text-purple-400">Ollama & LM Studio</span>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              Supports on-device LLMs (Llama 3, Mistral, Qwen) for 100% private, offline execution. Automatically selected when network connectivity is absent or when operating under high-privacy Guardian policies.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* 5. THE 13 AUTONOMOUS AGENTS IN 3D SPOTLIGHT MATRIX */}
      <section className="space-y-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl font-extrabold text-white">The 13 Autonomous Agents</h2>
          <p className="text-gray-400 text-xs">Specialized worker agents operating under CEO Agent intent classification.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {zeeAIData.agents.map((agent, idx) => (
            <SpotlightCard key={idx} className="p-6 space-y-3 border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">{agent.name}</span>
                <span className="px-2 py-0.5 rounded text-[9px] font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {agent.category}
                </span>
              </div>
              <div className="text-xs font-mono text-cyan-300">{agent.role}</div>
              <p className="text-gray-400 text-xs leading-relaxed">{agent.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* 6. DEDICATED DOWNLOAD SECTION */}
      <section className="relative z-10 space-y-6">
        <SpotlightCard className="p-8 sm:p-12 border-cyan-500/60 bg-gradient-to-br from-[#061224] via-surface to-[#0d162d] shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-lg shadow-cyan-500/10">
              <Download className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>OFFICIAL DESKTOP DISTRIBUTION &bull; READY TO RUN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Download <ShinyText text="Zee AI Operating System" className="text-3xl sm:text-5xl font-extrabold" />
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Get the official standalone executable for Windows. Connect directly to your local desktop environment with zero installation complexity and RAM-bound security.
            </p>

            {/* DOWNLOAD BUTTON */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="w-full sm:w-auto px-10 py-5 rounded-2xl font-extrabold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-4 cursor-pointer group"
              >
                <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-colors">
                  <Download className={`w-6 h-6 text-cyan-200 ${downloading ? 'animate-bounce' : ''}`} />
                </div>
                <div className="text-left">
                  <div className="text-base tracking-wide">Download Zee AI Operating System (.exe)</div>
                  <div className="text-xs font-mono text-cyan-200 font-normal">Zee AI Operating System.exe &bull; 224 MB</div>
                </div>
              </button>

              <a
                href={zeeAIData.downloadUrl || '/downloads/Zee AI Operating System.exe'}
                download={zeeAIData.downloadFilename || 'Zee AI Operating System.exe'}
                className="w-full sm:w-auto px-6 py-5 rounded-2xl font-semibold text-gray-300 glass-panel hover:bg-white/10 border border-white/20 transition-all duration-300 flex items-center justify-center space-x-2 text-xs font-mono"
              >
                <HardDrive className="w-4 h-4 text-cyan-400" />
                <span>Direct Exe Link</span>
              </a>
            </div>

            {/* TECHNICAL FILE METADATA */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono text-xs text-gray-300">
              <div className="p-3 rounded-xl bg-surface/80 border border-white/10">
                <div className="text-[10px] text-gray-400 uppercase">Binary File</div>
                <div className="text-cyan-300 font-bold truncate">Zee AI Operating System.exe</div>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/10">
                <div className="text-[10px] text-gray-400 uppercase">Platform Target</div>
                <div className="text-emerald-300 font-bold">Windows 10 / 11 (x64)</div>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/10">
                <div className="text-[10px] text-gray-400 uppercase">Runtime Engine</div>
                <div className="text-purple-300 font-bold">Electron 35 / Node.js</div>
              </div>
              <div className="p-3 rounded-xl bg-surface/80 border border-white/10">
                <div className="text-[10px] text-gray-400 uppercase">Source Build</div>
                <div className="text-pink-300 font-bold">win-unpacked dist</div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* DOCUMENTATION LINK CTA */}
      <section className="text-center relative z-10">
        <SpotlightCard className="p-8 border-cyan-500/40 space-y-4">
          <BookOpen className="w-10 h-10 text-cyan-400 mx-auto" />
          <h3 className="text-2xl font-bold text-white">Explore Full Zee AI Technical Documentation</h3>
          <p className="text-gray-300 text-xs max-w-xl mx-auto">
            Read verified architecture guides covering multi-agent intent routing, MCP adapters, Guardian permission schemas, and Android bridge protocols.
          </p>
          <div>
            <Link
              to="/documentation"
              className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25"
            >
              <span>Open Documentation Viewer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </SpotlightCard>
      </section>

    </div>
  );
};
