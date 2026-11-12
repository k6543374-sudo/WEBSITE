import React from 'react';
import {
  ShieldCheck,
  Layers,
  Cpu,
  Smartphone,
  UserCheck,
  Sparkles,
  GraduationCap,
  Quote
} from 'lucide-react';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { AuroraBackground } from '../components/react-bits/AuroraBackground';
import { Reveal } from '../components/react-bits/Reveal';
import { companyData } from '../content/company';
import { creatorData } from '../content/creator';
import SEO from '../components/SEO';

const valueIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Layers,
  Cpu,
  Smartphone
};

export const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-20 relative z-10">
      <SEO
        title="About Viron Technologies | Story, Mission & Founder"
        description="The story of Viron Technologies: mission, vision, engineering values, and founder Kartik Domra - a self-taught young architect building next-generation AI systems."
        canonical="/about"
      />
      <ParticleBackground particleCount={140} />

      {/* Header */}
      <Reveal className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT VIRON TECHNOLOGIES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          A Small Lab With A <ShinyText text="Giant Mission" className="text-4xl sm:text-5xl font-extrabold" />
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          {companyData.aboutText}
        </p>
      </Reveal>

      {/* Mission / Vision */}
      <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <SpotlightCard className="p-8 space-y-4 border-cyan-500/30">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Our Mission</div>
          <p className="text-gray-200 text-sm leading-relaxed">{companyData.mission}</p>
        </SpotlightCard>
        <SpotlightCard className="p-8 space-y-4 border-purple-500/30" spotlightColor="rgba(139, 92, 246, 0.25)">
          <div className="text-xs font-mono text-purple-400 uppercase tracking-widest">Our Vision</div>
          <p className="text-gray-200 text-sm leading-relaxed">{companyData.vision}</p>
        </SpotlightCard>
      </Reveal>

      {/* Core Values */}
      <Reveal><section className="space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Engineering Values</h2>
          <p className="text-gray-400 text-sm">The rules every Viron product is built on.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyData.coreValues.map((value) => {
            const Icon = valueIcons[value.icon] || Cpu;
            return (
              <SpotlightCard key={value.title} className="p-6 space-y-3 border-white/10">
                <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">{value.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
              </SpotlightCard>
            );
          })}
        </div>
      </section></Reveal>

      {/* Technology pillars (condensed) */}
      <Reveal><section className="space-y-10 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">The Technology</h2>
          <p className="text-gray-400 text-sm">A condensed look at the architecture behind the products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SpotlightCard className="p-8 space-y-3 border-cyan-500/30">
            <div className="flex items-center space-x-3">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Multi-Agent Orchestration</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Up to 13 specialized agents - memory, planning, coding, research, vision and recovery -
              coordinate under a CEO dispatcher to execute multi-step goals safely.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-3 border-purple-500/30" spotlightColor="rgba(139, 92, 246, 0.25)">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Dual-Brain Model Routing</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Prompts are dynamically routed between high-speed cloud models and fully offline local
              LLMs based on cost, latency and task intent.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-3 border-emerald-500/30" spotlightColor="rgba(16, 185, 129, 0.25)">
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="text-lg font-bold text-white">Guardian Consent Framework</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              A risk-scored gateway audits every sensitive capability call and gates execution behind
              explicit user consent with tamper-evident logs.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-8 space-y-3 border-pink-500/30" spotlightColor="rgba(236, 72, 153, 0.25)">
            <div className="flex items-center space-x-3">
              <Smartphone className="w-6 h-6 text-pink-400" />
              <h3 className="text-lg font-bold text-white">Cross-Device Continuity</h3>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Desktop, web and Android stay in sync - notifications, clipboard and state flow between
              devices through a conflict-free bridge.
            </p>
          </SpotlightCard>
        </div>
      </section></Reveal>

      {/* Founder */}
      <Reveal><section className="relative z-10 overflow-hidden rounded-3xl">
        <AuroraBackground />
        <SpotlightCard className="p-8 sm:p-12 border-cyan-500/30 bg-gradient-to-br from-surface to-surface-light">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-5 text-center lg:text-left">
              <div className="w-28 h-28 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-1 shadow-2xl shadow-cyan-500/30">
                <div className="w-full h-full bg-surface rounded-2xl flex items-center justify-center text-cyan-300">
                  <UserCheck className="w-12 h-12" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-white">{creatorData.name}</h2>
                <p className="text-cyan-400 text-xs font-mono">{creatorData.role}</p>
                <p className="text-gray-500 text-[11px] font-mono mt-1">{companyData.name} &bull; Founded {companyData.foundingYear}</p>
              </div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-[11px] font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{creatorData.education}</span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-gray-300 text-sm leading-relaxed">{creatorData.bio}</p>

              <blockquote className="border-l-2 border-purple-500 pl-4 text-gray-300 text-sm italic leading-relaxed">
                <Quote className="w-4 h-4 text-purple-400 inline mr-2" />
                {creatorData.philosophy}
              </blockquote>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Key Engineering Contributions</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-400">
                  {creatorData.keyContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-cyan-400 mt-0.5">&#9656;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {creatorData.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-gray-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section></Reveal>
    </div>
  );
};
