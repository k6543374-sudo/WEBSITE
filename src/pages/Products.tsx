import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Monitor,
  Bot,
  Globe,
  Mail,
  FileText,
  Smartphone,
  Search,
  ExternalLink,
  Cpu,
  ShieldCheck,
  Layers
} from 'lucide-react';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { HeroCore3D } from '../components/react-bits/HeroCore3D';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';
import { Reveal } from '../components/react-bits/Reveal';
import SEO from '../components/SEO';

const ASSISTANT_BETA_URL = 'https://openmuse-web-fdmw.onrender.com';

export const Products: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-20 relative z-10">
      <SEO
        title="Products | Viron Technologies"
        description="The Viron Technologies product lineup: the Zee Spark flagship AI assistant in live beta, the zee120 AI model in free public testing, and the Zee AI personal operating system in active development."
        canonical="/products"
      />
      <ParticleBackground particleCount={140} />

      {/* Header */}
      <Reveal className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIRON TECHNOLOGIES PRODUCTS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Software From The <ShinyText text="Future" className="text-4xl sm:text-5xl font-extrabold" />
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Three machines, one mission: put genuinely useful artificial intelligence in everyone's hands - free to try, built in the open.
        </p>
      </Reveal>

      {/* FLAGSHIP: Zee Spark AI assistant */}
      <Reveal className="relative z-10">
        <SpotlightCard
          className="p-8 sm:p-12 border-purple-500/50 bg-gradient-to-br from-surface to-surface-light shadow-2xl"
          spotlightColor="rgba(139, 92, 246, 0.25)"
        >
          <div className="flex flex-wrap gap-2 mb-4 lg:mb-0 lg:absolute lg:top-0 lg:right-0 lg:p-4 lg:flex-col lg:items-end">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/40">
              FLAGSHIP
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <Bot className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Zee Spark</h2>
                  <span className="text-xs font-mono text-purple-300">Live Beta &bull; Web + Android</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                Zee Spark is a personal AI assistant that goes beyond chat. Four specialist
                helper agents - a Planner, a Researcher, a Reviewer and a Writer - team up on
                every request. It browses the live web for current answers, connects to Gmail
                and Calendar, creates documents, and syncs across the web app and its Android app.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Live web browsing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Gmail & Calendar connector</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Document & PDF creator</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Android app available</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={ASSISTANT_BETA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 shadow-lg shadow-purple-500/25 flex items-center space-x-2 transition-all hover:scale-105"
                >
                  <span>Launch Beta App</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-200 glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center space-x-2"
                >
                  <span>Request Access Key</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-[11px] text-gray-500 font-mono">
                Free during beta. An access key is required - request one and we will get you in.
              </p>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroCore3D variant="orb" size={300} />
            </div>
          </div>
        </SpotlightCard>
      </Reveal>

      {/* zee120 + Zee AI OS */}
      <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* zee120 */}
        <SpotlightCard className="p-8 space-y-6 border-cyan-500/40 bg-gradient-to-br from-surface to-surface-light">
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
              <MessageSquare className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              LIVE & FREE
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white">zee120 AI Model</h2>
            <span className="text-xs font-mono text-cyan-400">Public model testing, live on this website</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Our own AI model, open for everyone to test. No account, no install, no cost - open the
            testing page and try the model yourself. Powered by Viron's own AI routing layer.
          </p>

          <a
            href="/zee120.html"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <span>Test zee120</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </SpotlightCard>

        {/* Zee AI OS */}
        <SpotlightCard
          className="p-8 space-y-6 border-emerald-500/40 bg-gradient-to-br from-surface to-surface-light"
          spotlightColor="rgba(16, 185, 129, 0.25)"
        >
          <div className="flex items-center justify-between">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-300">
              <Monitor className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              IN DEVELOPMENT
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white">Zee AI Operating System</h2>
            <span className="text-xs font-mono text-emerald-400">Personal AI OS for desktop</span>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            A modular personal AI operating system: 13 autonomous agents, dual-brain model
            routing across cloud and offline LLMs, an interactive 3D orb interface, and the
            Guardian consent framework keeping every action permissioned.
          </p>

          <div className="flex flex-wrap gap-2 text-[10px] font-mono">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center space-x-1">
              <Cpu className="w-3 h-3 text-emerald-400" />
              <span>13 Agents</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center space-x-1">
              <Layers className="w-3 h-3 text-emerald-400" />
              <span>Dual-Brain Router</span>
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center space-x-1">
              <ShieldCheck className="w-3 h-3 text-emerald-400" />
              <span>Guardian Security</span>
            </span>
          </div>

          <div className="relative group rounded-xl overflow-hidden border border-emerald-500/30 shadow-lg">
            <img
              src="/images/zee_real_ui.png"
              alt="Zee AI Operating System desktop interface"
              className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          <p className="text-[11px] text-gray-500 font-mono">
            Public release follows the beta program. <Globe className="w-3 h-3 inline text-emerald-400" /> Windows first, Android companion next.
          </p>
        </SpotlightCard>
      </Reveal>

      {/* Bottom CTA */}
      <Reveal className="text-center space-y-6 relative z-10 overflow-hidden rounded-3xl py-8">
      <AuroraBackground />
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Want early access or a collaboration?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105"
        >
          <span>Talk To Us</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Reveal>
    </div>
  );
};
