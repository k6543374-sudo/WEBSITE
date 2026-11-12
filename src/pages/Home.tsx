import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cpu,
  ShieldCheck,
  Sparkles,
  MessageSquare,
  Monitor,
  Rocket,
  ChevronDown,
  UserCheck,
  Bot,
  Zap
} from 'lucide-react';
import { HeroCore3D } from '../components/react-bits/HeroCore3D';
import { Grid3DBackground } from '../components/react-bits/Grid3DBackground';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { Reveal } from '../components/react-bits/Reveal';
import { companyData } from '../content/company';
import { creatorData } from '../content/creator';
import SEO from '../components/SEO';

const TICKER_ITEMS = [
  'AI ASSISTANT BETA',
  'ZEE120 AI MODEL',
  'DUAL-BRAIN ROUTING',
  'MULTI-AGENT SYSTEMS',
  'GUARDIAN SECURITY',
  'ZEE AI OS',
  'BUILT IN THE OPEN'
];

export const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Viron Technologies | Futuristic AI Software & Intelligent Systems"
        description="Viron Technologies builds next-generation AI software: a flagship AI assistant now in beta, public testing of our zee120 AI model, and the Zee AI personal operating system in active development."
        canonical="/"
      />
      <div className="grain-overlay" />

      {/* HERO - fullscreen 3D core */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroCore3D variant="hero" className="z-0" />
        <Grid3DBackground />
        <AuroraBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-transparent to-[#030712] pointer-events-none z-[1]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-28 pb-20">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full glass-panel border border-cyan-500/40 mb-8 animate-float shadow-2xl shadow-cyan-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase font-semibold">
              VIRON TECHNOLOGIES &bull; EST 2026
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tighter leading-[1.02] max-w-6xl mx-auto mb-6">
            Engineering the{' '}
            <ShinyText text="Future of AI" className="text-5xl sm:text-7xl lg:text-8xl font-extrabold" />
            {' '}Software
          </h1>

          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Next-generation intelligent systems, autonomous agents and personal AI platforms -
            designed and built by {companyData.name}.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Rocket className="w-4 h-4 text-cyan-200" />
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <a
              href="/zee120.html"
              className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-cyan-300 glass-panel hover:bg-white/10 border border-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Test zee120</span>
            </a>
          </div>

          <div className="mt-20 flex justify-center">
            <ChevronDown className="w-6 h-6 text-cyan-400/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* MARQUEE TICKER */}
      <div className="relative border-y border-white/10 bg-[#02050e]/80 backdrop-blur-sm py-4 overflow-hidden z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {TICKER_ITEMS.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center">
                  <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-gray-400 uppercase px-6">
                    {item}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500/60 shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATS STRIP */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SpotlightCard className="p-6 text-center border-cyan-500/20">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">3</div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mt-1">Products Shipping</div>
            </SpotlightCard>
            <SpotlightCard className="p-6 text-center border-purple-500/20" spotlightColor="rgba(139, 92, 246, 0.25)">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">13</div>
              <div className="text-[11px] font-mono text-purple-400 uppercase tracking-widest mt-1">Autonomous Agents</div>
            </SpotlightCard>
            <SpotlightCard className="p-6 text-center border-emerald-500/20" spotlightColor="rgba(16, 185, 129, 0.25)">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">4</div>
              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest mt-1">Specialist Helpers</div>
            </SpotlightCard>
            <SpotlightCard className="p-6 text-center border-pink-500/20" spotlightColor="rgba(236, 72, 153, 0.25)">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">100%</div>
              <div className="text-[11px] font-mono text-pink-400 uppercase tracking-widest mt-1">Free To Try</div>
            </SpotlightCard>
          </div>
        </Reveal>
      </section>

      {/* FLAGSHIP TEASER - unnamed next-gen assistant */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <Reveal>
          <SpotlightCard className="relative p-8 sm:p-12 border-purple-500/40 bg-gradient-to-br from-surface via-surface to-surface-light shadow-2xl overflow-hidden">
            <AuroraBackground />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FLAGSHIP AI ASSISTANT</span>
                  </span>
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                    <span>LIVE BETA</span>
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono">
                    NAME REVEAL COMING SOON
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                  A Personal AI That{' '}
                  <ShinyText text="Actually Works For You" className="text-3xl sm:text-5xl font-extrabold" />
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Our next-generation AI assistant is already running in beta. It chats, plans,
                  researches, browses the live web, connects to Gmail and creates documents -
                  from the browser or its Android app. Its official name is under wraps and
                  will be revealed soon.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/products"
                    className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-500 via-indigo-600 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 shadow-lg shadow-purple-500/25 flex items-center space-x-2 transition-all hover:scale-105"
                  >
                    <Bot className="w-4 h-4 text-purple-200" />
                    <span>See the Beta</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 rounded-xl text-sm font-semibold text-gray-200 glass-panel hover:bg-white/10 border border-white/15 transition-all flex items-center space-x-2"
                  >
                    <span>Request Access</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 flex items-center justify-center">
                <HeroCore3D variant="orb" size={300} />
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>

      {/* PRODUCT LINEUP - bento grid */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 z-10">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            One Lab, <ShinyText text="Three Machines" className="text-3xl sm:text-5xl font-extrabold" />
          </h2>
          <p className="text-gray-400 text-sm">
            Everything Viron Technologies ships - from a live AI assistant to a full personal AI operating system.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal className="md:col-span-2" delay={0}>
            <SpotlightCard className="h-full p-8 space-y-4 border-purple-500/30" spotlightColor="rgba(139, 92, 246, 0.25)">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Bot className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-emerald-300 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span>Live Beta</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white">Flagship AI Assistant</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Chat, plan, research and browse the live web with four specialist helper agents.
                Works on the web and as an Android app. Official name reveal coming soon.
              </p>
              <Link to="/products" className="inline-flex items-center space-x-2 text-xs font-mono text-purple-300 hover:text-purple-200 transition-colors py-3 -my-1 pr-2">
                <span>Open product deck</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={100}>
            <SpotlightCard className="h-full p-8 space-y-4 border-cyan-500/30">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-emerald-300 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                  <span>Live & Free</span>
                </span>
              </div>
              <h3 className="text-xl font-bold text-white">zee120 AI Model</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Our own AI model in free public testing, right here on this website. No signup, no download - open it and put the model to the test.
              </p>
              <a href="/zee120.html" className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors py-3 -my-1 pr-2">
                <span>Test the model</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </SpotlightCard>
          </Reveal>

          <Reveal className="md:col-span-3" delay={150}>
            <SpotlightCard className="p-8 border-emerald-500/30" spotlightColor="rgba(16, 185, 129, 0.25)">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest">In Development</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">Zee AI Operating System</h3>
                  <p className="text-gray-400 text-xs leading-relaxed max-w-xl">
                    A modular personal AI OS for desktop: 13 autonomous agents, dual-brain routing,
                    an interactive 3D orb interface and consent-gated security.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="relative rounded-xl overflow-hidden border border-emerald-500/30 shadow-lg">
                    <img
                      src="/images/zee_real_ui.png"
                      alt="Zee AI Operating System desktop interface"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* TECH PILLARS */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 z-10">
        <Reveal className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Built on <ShinyText text="Serious Engineering" className="text-3xl sm:text-5xl font-extrabold" />
          </h2>
          <p className="text-gray-400 text-sm">
            The core architecture behind every Viron product.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={0}>
            <SpotlightCard className="h-full p-8 space-y-4 border-cyan-500/30">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Multi-Agent Systems</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Specialized autonomous agents coordinate memory, research, coding and device control to execute multi-step goals.
              </p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={100}>
            <SpotlightCard className="h-full p-8 space-y-4 border-purple-500/30" spotlightColor="rgba(139, 92, 246, 0.25)">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dual-Brain AI Routing</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                A policy engine routes every prompt to the best brain - fast cloud models or fully offline local LLMs.
              </p>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={200}>
            <SpotlightCard className="h-full p-8 space-y-4 border-emerald-500/30" spotlightColor="rgba(16, 185, 129, 0.25)">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Consent-Gated Security</h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Every sensitive action passes a risk-scored permission gateway. Nothing runs without the user's explicit consent.
              </p>
            </SpotlightCard>
          </Reveal>
        </div>
      </section>

      {/* FOUNDER STRIP */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <Reveal>
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
                  <p className="text-cyan-400 text-xs font-mono">{creatorData.role} &bull; {companyData.name}</p>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <blockquote className="text-gray-300 text-sm sm:text-base italic leading-relaxed border-l-2 border-cyan-500 pl-4">
                  "{creatorData.philosophy}"
                </blockquote>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center py-3 -my-1 pr-2"
                  >
                    <span>Read the full story</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10 overflow-hidden">
        <AuroraBackground />
        <Reveal className="relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            The future is being built{' '}
            <ShinyText text="right here" className="text-3xl sm:text-5xl font-extrabold" />
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mb-10 max-w-2xl mx-auto">
            Try the live products, follow the builds, or reach out to collaborate with {companyData.name}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-2xl shadow-cyan-500/30 transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-semibold text-cyan-300 glass-panel hover:bg-white/10 border border-cyan-500/30 transition-all flex items-center justify-center"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
};
