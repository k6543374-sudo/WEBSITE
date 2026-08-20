import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu, ArrowUpRight, Code2, Mail } from 'lucide-react';
import { companyData } from '../content/company';

export const Footer: React.FC = () => {
  const officialEmail = companyData.socialLinks.email || 'viron.technologies.inquiry@gmail.com';

  return (
    <footer className="bg-[#02050e] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-9 h-9 rounded-lg border border-cyan-500/40 bg-surface p-1 shadow-lg shadow-cyan-500/10">
                <img
                  src="/images/viron_logo.png"
                  alt="Viron Technologies Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(0,240,255,0.4)]"
                />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wide">
                {companyData.name}
              </span>
            </Link>
            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              {companyData.tagline}. Architectural engineering centered on modular multi-agent orchestration, local-first privacy, and dynamic dual-brain LLM execution.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <ShieldCheck className="w-3 h-3 mr-1 text-cyan-400" /> Guardian Protected
              </span>
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Cpu className="w-3 h-3 mr-1 text-purple-400" /> Dual-Brain Architecture
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Viron</Link></li>
              <li><Link to="/creator" className="hover:text-cyan-400 transition-colors">Creator & Founder</Link></li>
              <li><Link to="/projects" className="hover:text-cyan-400 transition-colors">Engineering Projects</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link to="/products/zee-ai" className="text-cyan-400 font-semibold flex items-center hover:underline">
                  Zee AI OS
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Product Ecosystem</Link></li>
              <li><Link to="/technology" className="hover:text-cyan-400 transition-colors">Technology Stack</Link></li>
              <li><Link to="/documentation" className="hover:text-cyan-400 transition-colors">Architecture Docs</Link></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div>
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase mb-4">
              Official Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-center space-x-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub Repository</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <a href={`mailto:${officialEmail}`} className="font-mono text-cyan-400 hover:underline">
                  {officialEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <div>
            &copy; {new Date().getFullYear()} {companyData.name}. Founder & Chief Architect: <span className="text-gray-300 font-medium">Kartik Domra</span>. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
