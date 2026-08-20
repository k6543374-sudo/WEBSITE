import React from 'react';
import { FileText } from 'lucide-react';
import { companyData } from '../content/company';

export const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-8">
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <FileText className="w-4 h-4" />
          <span>LEGAL TERMS OF SERVICE</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">Terms of Service</h1>
        <p className="text-gray-400 text-xs font-mono">Last Updated: August 2026 &bull; Viron Technologies</p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Ownership & Brand Identity</h2>
          <p>
            {companyData.name} and the Zee AI Personal Operating System are authored and created by <strong>Kartik Domra</strong>. All logos, architectural specifications, dynamic notch designs, and core software implementations are protected by copyright and software license laws.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Acceptable Use of Autonomous Agents</h2>
          <p>
            Users and developers deploying Zee AI's 13-agent runtime or MCP tool adapters agree not to modify the Guardian security engine to execute malicious code, unauthorized system destruction, or un-consented network attacks.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Self-Evolving Engine Approval</h2>
          <p>
            The Self-Evolving Code Engine produces automated AST refactoring proposals. Users retain full responsibility for reviewing diff proposals before confirming execution.
          </p>
        </section>
      </div>
    </div>
  );
};
