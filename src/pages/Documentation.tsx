import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BookOpen, Search, ChevronRight, FileText } from 'lucide-react';
import { documentationData } from '../content/documentation';
import SEO from '../components/SEO';

export const Documentation: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeDocId = searchParams.get('doc') || 'overview';
  const [searchQuery, setSearchQuery] = useState('');

  const activeDoc = useMemo(() => {
    return documentationData.find((d) => d.id === activeDocId) || documentationData[0];
  }, [activeDocId]);

  const filteredDocs = useMemo(() => {
    if (!searchQuery.trim()) return documentationData;
    return documentationData.filter(
      (d) =>
        d.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const categories = Array.from(new Set(documentationData.map((d) => d.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-10">
      <SEO
        title="Documentation & Architecture Specs | Viron Technologies"
        description="Technical documentation and architectural guides for Zee AI OS and Viron Technologies subsystems."
        canonical="/documentation"
      />
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <BookOpen className="w-3.5 h-3.5" />
          <span>VIRON TECHNOLOGIES ARCHITECTURE DOCUMENTATION</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          System & Software <span className="text-gradient-cyan">Documentation</span>
        </h1>
      </div>

      {/* Main Documentation Viewer Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture guides..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-surface border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Doc Categories */}
          <div className="space-y-6">
            {categories.map((cat) => {
              const categoryDocs = filteredDocs.filter((d) => d.category === cat);
              if (categoryDocs.length === 0) return null;

              return (
                <div key={cat} className="space-y-2">
                  <div className="text-[11px] font-mono font-semibold text-cyan-400 uppercase tracking-wider px-2">
                    {cat}
                  </div>
                  <div className="space-y-1">
                    {categoryDocs.map((doc) => {
                      const isActive = doc.id === activeDoc.id;
                      return (
                        <button
                          key={doc.id}
                          onClick={() => setSearchParams({ doc: doc.id })}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center justify-between ${
                            isActive
                              ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-semibold'
                              : 'text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="flex items-center space-x-2 truncate">
                            <FileText className="w-3.5 h-3.5 flex-shrink-0 text-cyan-400" />
                            <span className="truncate">{doc.title}</span>
                          </div>
                          {isActive && <ChevronRight className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Article Viewer Pane */}
        <div className="lg:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
          <div className="border-b border-white/10 pb-6 space-y-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {activeDoc.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{activeDoc.title}</h2>
            <p className="text-gray-400 text-xs">{activeDoc.summary}</p>
          </div>

          {/* Formatted Article Content */}
          <div className="prose prose-invert max-w-none text-xs sm:text-sm text-gray-300 leading-relaxed space-y-4">
            <div className="whitespace-pre-line font-sans">
              {activeDoc.contentMarkdown}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
