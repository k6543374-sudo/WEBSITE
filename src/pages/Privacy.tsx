import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { companyData } from '../content/company';
import SEO from '../components/SEO';

export const Privacy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-8">
      <SEO
        title="Privacy Policy | Viron Technologies"
        description="Official Privacy Policy and local-first data protection standards of Viron Technologies."
        canonical="/privacy"
      />
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <ShieldCheck className="w-4 h-4" />
          <span>PRIVACY & SECURITY GUARANTEE</span>
        </div>
        <h1 className="text-4xl font-extrabold text-white">Privacy Policy</h1>
        <p className="text-gray-400 text-xs font-mono">Last Updated: August 2026 &bull; Viron Technologies</p>
      </div>

      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6 text-xs sm:text-sm text-gray-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Local-First Data Philosophy</h2>
          <p>
            {companyData.name} and Zee AI operate under a local-first data architecture. Your conversational context, SQLite memory graphs, and device status remain stored on your local hardware unless explicit cloud synchronization (Supabase) is enabled by the user.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Guardian Security Consent Model</h2>
          <p>
            Native platform actions (keyboard/mouse simulation, file modifications, ADB commands, network requests) pass through our <strong>Guardian Permission Engine</strong>. No high-risk action is performed without explicit user consent dialog approval.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. API & Telemetry Handling</h2>
          <p>
            When utilizing cloud AI providers (Groq, Pollinations AI, OpenAI, Gemini), prompts are transmitted strictly over encrypted HTTPS protocols. No API secrets or personal authentication tokens are exposed in public client bundles or third-party loggers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Biometric & Vision Data</h2>
          <p>
            Facial recognition and camera liveness checks performed by the Vision subsystem process frames strictly in local RAM memory for lockscreen authentication. No biometric templates are sold or shared.
          </p>
        </section>
      </div>
    </div>
  );
};
