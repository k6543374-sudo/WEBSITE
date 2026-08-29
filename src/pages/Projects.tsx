import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { ShinyText } from '../components/react-bits/ShinyText';
import { ParticleBackground } from '../components/react-bits/ParticleBackground';
import { projectsData } from '../content/projects';
import SEO from '../components/SEO';

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-16 relative z-10">
      <SEO
        title="Engineering Projects & Subsystems | Viron Technologies"
        description="Overview of core software engineering projects and companion subsystems developed by Viron Technologies."
        canonical="/projects"
      />
      <ParticleBackground particleCount={140} />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 relative z-10">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" />
          <span>VIRON TECHNOLOGIES ENGINEERING INITIATIVES</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineering & Research <ShinyText text="Projects" className="text-4xl sm:text-5xl font-extrabold" />
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Active software repositories, core runtime systems, and architectural initiatives engineered by Kartik Domra and Viron Technologies.
        </p>
      </div>

      {/* Projects Grid with 3D Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {projectsData.map((project) => (
          <SpotlightCard
            key={project.id}
            className={`p-8 space-y-5 ${
              project.isFlagship
                ? 'border-cyan-500/50 bg-gradient-to-br from-surface via-surface to-surface-light shadow-2xl'
                : 'border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/5 border border-white/10 text-cyan-300">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {project.status}
              </span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-1">{project.name}</h2>
              <p className="text-xs font-mono text-cyan-400">{project.tagline}</p>
            </div>

            <p className="text-gray-300 text-xs leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-mono text-gray-400 uppercase">Key Features:</div>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-300">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/5 text-gray-400 border border-white/10">
                  {tech}
                </span>
              ))}
            </div>

            {project.docLink && (
              <div className="pt-2">
                <Link
                  to={project.docLink}
                  className="text-xs font-mono text-cyan-400 hover:underline inline-flex items-center"
                >
                  <BookOpen className="w-3.5 h-3.5 mr-1.5" />
                  <span>View Project Architecture Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>
            )}
          </SpotlightCard>
        ))}
      </div>

    </div>
  );
};
