import React from 'react';
import { Code2, CheckCircle2 } from 'lucide-react';
import { technologyData } from '../content/technology';

export const Technology: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Code2 className="w-3.5 h-3.5" />
          <span>VIRON TECHNOLOGIES TECHNICAL STACK</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Technology & <span className="text-gradient-cyan">Architecture</span> Matrix
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Comprehensive breakdown of verified neural providers, multi-agent frameworks, vision subsystems, and security protocols engineered across Viron Technologies and Zee AI.
        </p>
      </div>

      {/* Tech Categories Grid */}
      <div className="space-y-12">
        {technologyData.map((category) => (
          <div key={category.id} className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <div className="border-b border-white/10 pb-4">
              <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              <p className="text-gray-400 text-xs mt-1">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <div key={idx} className="bg-surface p-5 rounded-2xl border border-white/5 space-y-2 hover:border-cyan-500/40 transition-colors">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-sm">{item.name}</h3>
                    {item.badge && (
                      <span className="px-2 py-0.5 text-[9px] font-mono font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.description}</p>
                  <div className="pt-2 flex items-center space-x-1.5 text-[10px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
