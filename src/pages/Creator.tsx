import React from 'react';
import { Link } from 'react-router-dom';
import { UserCheck, CheckCircle2, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { creatorData } from '../content/creator';
import { companyData } from '../content/company';
import SEO from '../components/SEO';

export const Creator: React.FC = () => {
  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16 relative z-10">
      <SEO
        title="Kartik Domra — Founder of Viron Technologies"
        description="Official profile of Kartik Domra, Founder & Lead Architect of Viron Technologies and creator of Zee AI operating system."
        canonical="/creator"
      />
      <ParticleBackground particleCount={150} />

      {/* Header Profile Hero with 3D Spotlight Card */}
      <SpotlightCard className="p-8 sm:p-12 border-cyan-500/40 bg-gradient-to-br from-surface to-surface-light shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-left space-y-4">
            <div className="w-32 h-32 mx-auto lg:mx-0 rounded-3xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-600 p-1 shadow-2xl shadow-cyan-500/30">
              <div className="w-full h-full bg-surface rounded-[22px] flex items-center justify-center text-cyan-300">
                <UserCheck className="w-16 h-16" />
              </div>
            </div>

            <div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                {creatorData.name}
              </h1>
              <h2 className="text-base font-mono text-cyan-400 font-semibold mt-1">
                Founder of {companyData.name}
              </h2>
              <p className="text-xs font-mono text-gray-400 mt-1">{creatorData.role}</p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Kartik Domra — Founder of Viron Technologies</span>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {creatorData.bio}
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              As the Founder and Lead Architect of <Link to="/about" className="text-cyan-400 hover:underline font-medium">Viron Technologies</Link>, Kartik Domra designs intelligent systems bridging cloud AI capability with desktop and mobile boundaries, including the flagship <Link to="/products/zee-ai" className="text-cyan-400 hover:underline font-medium">Zee AI Personal OS</Link>.
            </p>

            <div className="p-4 rounded-xl bg-surface border border-white/10 text-xs text-gray-300 space-y-1">
              <div className="flex items-center space-x-2 text-cyan-400 font-mono font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Background & Experience:</span>
              </div>
              <p className="pl-6 text-gray-400">{creatorData.education}</p>
            </div>

            <div className="flex items-center space-x-4 pt-2">
              <Link to="/about" className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center">
                <span>About Viron Technologies</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
              <Link to="/products/zee-ai" className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center">
                <span>Explore Flagship Zee AI</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </SpotlightCard>

      {/* Engineering Philosophy */}
      <SpotlightCard className="p-8 space-y-4 border-white/10">
        <h2 className="text-2xl font-bold text-white">Architectural Philosophy</h2>
        <blockquote className="text-gray-300 text-sm sm:text-base italic leading-relaxed border-l-2 border-cyan-500 pl-4">
          "{creatorData.philosophy}"
        </blockquote>
      </SpotlightCard>

      {/* Key Architectural Contributions */}
      <div className="space-y-6 relative z-10">
        <h2 className="text-2xl font-bold text-white text-center">
          Key <ShinyText text="Architectural Contributions" className="text-2xl font-bold" />
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {creatorData.keyContributions.map((contrib, idx) => (
            <SpotlightCard key={idx} className="p-5 flex items-start space-x-3 border-white/10">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300 text-xs leading-relaxed">{contrib}</span>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-6 relative z-10">
        <h2 className="text-2xl font-bold text-white text-center">Technical Core Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {creatorData.skills.map((skill, idx) => (
            <SpotlightCard key={idx} className="p-4 space-y-1 text-center border-white/10">
              <div className="text-xs font-bold text-white">{skill.name}</div>
              <div className="text-[10px] font-mono text-cyan-400">{skill.category}</div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      {/* Featured Founder Projects */}
      <div className="space-y-6 relative z-10">
        <h2 className="text-2xl font-bold text-white text-center">Featured Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creatorData.featuredProjects.map((proj, idx) => (
            <SpotlightCard key={idx} className="p-6 space-y-3 border-white/10">
              <div className="text-sm font-bold text-white">{proj.name}</div>
              <div className="text-xs font-mono text-cyan-400">{proj.role}</div>
              <p className="text-gray-400 text-xs leading-relaxed">{proj.description}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>

    </article>
  );
};
