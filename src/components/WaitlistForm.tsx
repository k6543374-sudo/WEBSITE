import React, { useState } from 'react';
import { ArrowRight, Check, Loader2, Mail } from 'lucide-react';
import { companyData } from '../content/company';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'unavailable';

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState(''); // honeypot, hidden from humans
  const [status, setStatus] = useState<Status>('idle');
  const contactEmail = companyData.socialLinks.email || 'viron.technologies.inquiry@gmail.com';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending' || status === 'success') return;
    setStatus('sending');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, company }),
      });
      if (res.ok) {
        setStatus('success');
        return;
      }
      setStatus(res.status === 503 ? 'unavailable' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-sm font-medium">
        <Check className="w-4 h-4" />
        <span>You're on the list. We'll email you when Zee Spark opens up.</span>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        {/* Honeypot: invisible to humans, bots fill it and get silently ignored */}
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 px-5 py-3.5 rounded-xl text-sm text-white placeholder-gray-500 bg-white/5 border border-white/15 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center space-x-2"
        >
          {status === 'sending' ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>Join waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {status === 'error' && (
        <p className="text-center text-xs text-rose-400">
          Something went wrong. Please try again in a moment.
        </p>
      )}
      {status === 'unavailable' && (
        <p className="text-center text-xs text-amber-300">
          The waitlist is not live yet -{' '}
          <a
            href={`mailto:${contactEmail}?subject=Zee%20Spark%20waitlist`}
            className="underline hover:text-amber-200 inline-flex items-center space-x-1"
          >
            <Mail className="w-3 h-3" />
            <span>email us</span>
          </a>{' '}
          and we'll add you.
        </p>
      )}

      <p className="text-center text-[11px] text-gray-500">
        One email when Zee Spark opens to more people. No spam, unsubscribe anytime.
      </p>
    </div>
  );
};

export default WaitlistForm;
