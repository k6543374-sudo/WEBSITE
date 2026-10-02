import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Cpu, Sparkles, Code2, BookOpen, Layers, UserCheck, Mail, Download } from 'lucide-react';
import { companyData } from '../content/company';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Cpu },
    { name: 'About', path: '/about', icon: Layers },
    { name: 'zee120', path: '/zee120.html', icon: Sparkles },
    { name: 'Products', path: '/products', icon: Sparkles, badge: 'Zee AI' },
    { name: 'Technology', path: '/technology', icon: Code2 },
    { name: 'Projects', path: '/projects', icon: Cpu },
    { name: 'Creator', path: '/creator', icon: UserCheck },
    { name: 'Documentation', path: '/documentation', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: Mail },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-cyan-500/30 bg-surface-light p-1 shadow-lg shadow-cyan-500/10 group-hover:border-cyan-400/60 transition-all">
              <img
                src="/images/viron_logo.png"
                alt="Viron Technologies Logo"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-wider text-white group-hover:text-cyan-400 transition-colors">
                {companyData.name}
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-400">
                Official Intelligence System
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 glass-pill px-4 py-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path} reloadDocument={link.path.endsWith('.html')}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 flex items-center space-x-1.5 ${
                    active
                      ? 'text-white bg-white/10 shadow-inner border border-cyan-400/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono font-semibold bg-gradient-to-r from-cyan-500 to-indigo-500 text-white rounded-full uppercase tracking-tighter">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Header Buttons */}
          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="/downloads/Zee AI Operating System.exe"
              download="Zee AI Operating System.exe"
              className="relative inline-flex items-center justify-center px-3.5 py-2 text-xs font-semibold text-cyan-300 transition-all bg-surface-light border border-cyan-500/40 rounded-lg shadow-md hover:bg-cyan-500/20 hover:text-white"
              title="Download Zee AI Operating System (.exe)"
            >
              <Download className="w-3.5 h-3.5 mr-1 text-cyan-400" />
              <span>Download .exe</span>
            </a>

            <Link
              to="/products/zee-ai"
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white transition-all bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
            >
              <span>Explore Zee AI</span>
              <ChevronRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-surface-light border border-white/10 focus:outline-none"
              aria-label="Toggle mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-8 space-y-2 shadow-2xl transition-all">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path} reloadDocument={link.path.endsWith('.html')}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-surface-light text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </div>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <div className="pt-4">
            <Link
              to="/products/zee-ai"
              className="w-full flex items-center justify-center px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl shadow-lg shadow-cyan-500/25"
            >
              <span>Explore Flagship Zee AI</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
