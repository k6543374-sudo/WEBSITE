import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Layers, CheckCircle2, Download } from 'lucide-react';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { zeeAIData } from '../content/zee-ai';
import SEO from '../components/SEO';

export const Products: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16 relative z-10">
      <SEO
        title="Products Ecosystem | Viron Technologies"
        description="Explore the intelligent software product suite engineered by Viron Technologies, including flagship Zee AI OS."
        canonical="/products"
      />
      <ParticleBackground particleCount={150} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>VIRON TECHNOLOGIES PRODUCT ECOSYSTEM</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Intelligent Software <ShinyText text="Products" className="text-4xl sm:text-5xl font-extrabold" />
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Next-generation personal operating systems, AI routing frameworks, and security gateways engineered by Viron Technologies.
        </p>
      </div>

      {/* Flagship Product 3D Card: Zee AI */}
      <div className="relative z-10">
        <SpotlightCard className="p-8 sm:p-12 border-cyan-500/50 bg-gradient-to-br from-surface to-surface-light shadow-2xl">
          <div className="absolute top-0 right-0 p-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
              FLAGSHIP PRODUCT
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-white">{zeeAIData.name}</h2>
                  <span className="text-xs font-mono text-cyan-400">Version {zeeAIData.version} &bull; Personal AI OS</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {zeeAIData.fullOverview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span>13 Autonomous Agent Swarm</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  <span>Dual-Brain Model Router</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Guardian Consent Security</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-pink-400" />
                  <span>Self-Evolving Code Engine</span>
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

            {/* Right Col preview */}
            <div className="lg:col-span-4 glass-panel p-6 rounded-2xl border border-white/10 text-center space-y-4">
              <div className="text-xs font-mono text-cyan-400">DEPLOYMENT BOUNDARIES</div>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="p-2.5 rounded-lg bg-surface border border-white/5 font-mono">Windows Desktop Client</div>
                <div className="p-2.5 rounded-lg bg-surface border border-white/5 font-mono">Android Companion App</div>
                <div className="p-2.5 rounded-lg bg-surface border border-white/5 font-mono">Cloudflare Workers API</div>
              </div>
            </div>

          </div>
        </SpotlightCard>
      </div>

      {/* Expandable Architecture Note for Future Viron Products */}
      <div className="glass-panel p-8 rounded-2xl border border-white/10 text-center space-y-3 relative z-10">
        <Layers className="w-8 h-8 text-cyan-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Extensible Product Pipeline</h3>
        <p className="text-gray-400 text-xs max-w-xl mx-auto">
          Viron Technologies designs modular, scalable product architectures. Additional personal intelligence engines, desktop tools, and edge services will be launched in future cycles.
        </p>
      </div>

    </div>
  );
};
