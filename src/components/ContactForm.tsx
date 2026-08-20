import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ExternalLink, Copy, Sparkles } from 'lucide-react';
import { companyData } from '../content/company';

export const ContactForm: React.FC = () => {
  const targetEmail = companyData.socialLinks.email || 'viron.technologies.inquiry@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Zee AI Feature Suggestion',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getGmailComposeUrl = () => {
    const subjectText = encodeURIComponent(`Viron Technologies Suggestion: ${formData.subject || 'Feature Idea'}`);
    const bodyText = encodeURIComponent(
      `From: ${formData.name || 'Anonymous Visitor'} (${formData.email || 'Not provided'})\n\nSuggestion / Message:\n${formData.message || ''}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${subjectText}&body=${bodyText}`;
  };

  const handleWebGmailSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formData.message) {
      setStatus('error');
      return;
    }
    window.open(getGmailComposeUrl(), '_blank');
    setStatus('success');
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative overflow-hidden shadow-2xl space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-white/10 gap-2">
        <div>
          <h3 className="font-display text-xl font-bold text-white">
            Send Suggestion or Message
          </h3>
          <p className="text-gray-400 text-xs mt-0.5">
            Target Gmail: <span className="text-cyan-400 font-mono font-semibold">{targetEmail}</span>
          </p>
        </div>

        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors"
        >
          <Copy className="w-3.5 h-3.5 text-cyan-400" />
          <span>{copied ? 'Copied Email!' : 'Copy Email Address'}</span>
        </button>
      </div>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
          <h4 className="font-display font-semibold text-emerald-300 text-xl">Gmail Compose Window Opened</h4>
          <p className="text-gray-300 text-xs leading-relaxed max-w-md mx-auto">
            Your pre-filled suggestion has been loaded into Gmail for <strong>{targetEmail}</strong>. Simply click <strong>Send</strong> in Gmail!
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setStatus('idle')}
              className="px-4 py-2 rounded-lg bg-surface border border-white/10 text-xs font-mono text-cyan-400 hover:bg-white/5"
            >
              Send Another Suggestion
            </button>
          </div>
        </div>
      ) : (
        <form
          action={`https://formsubmit.co/${targetEmail}`}
          method="POST"
          target="_blank"
          className="space-y-4"
        >
          <input type="hidden" name="_subject" value={`Viron Technologies Website Suggestion`} />
          <input type="hidden" name="_captcha" value="false" />

          {status === 'error' && (
            <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center space-x-2">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>Please fill in your suggestion message before submitting.</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Kartik Domra"
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-gray-300 mb-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1">Subject / Category</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
            >
              <option value="Zee AI Feature Suggestion">Zee AI Feature & Architecture Suggestion</option>
              <option value="Zee AI Technical Inquiry">Zee AI Technical Inquiry</option>
              <option value="AI Research & Multi-Agent">AI Research & Multi-Agent Collaboration</option>
              <option value="General Inquiry">General Company Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1">Message / Suggestion *</label>
            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Type your suggestion or message here..."
              className="w-full px-4 py-2.5 rounded-lg bg-surface border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              required
            />
          </div>

          {/* Guaranteed Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            
            {/* Primary Action 1: Open Direct Web Gmail Compose in 1-click */}
            <button
              type="button"
              onClick={handleWebGmailSubmit}
              className="py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Send via Web Gmail Compose</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>

            {/* Primary Action 2: Direct Server Submit */}
            <button
              type="submit"
              className="py-3 px-4 rounded-lg glass-panel hover:bg-white/10 border border-white/15 text-white font-semibold text-xs flex items-center justify-center space-x-2 transition-all"
            >
              <Send className="w-4 h-4 text-cyan-400" />
              <span>Send via Direct FormSubmit</span>
            </button>

          </div>
        </form>
      )}
    </div>
  );
};
