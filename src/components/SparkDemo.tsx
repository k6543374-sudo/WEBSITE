import React, { useEffect, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const USER_MSG = 'Plan my morning and summarize my unread email.';
const ASSISTANT_MSG =
  'Done. You had 6 unread emails - 2 need replies, so I drafted both. I also moved your 10:00 call to 10:30 and queued a 20-minute focus block so you can review everything first.';
const CHIPS = ['Gmail checked', '2 replies drafted', 'Calendar updated', 'Morning plan ready'];

const isReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Auto-playing, looping simulated Zee Spark conversation.
 * Pure CSS/JS (no video asset), clearly labeled as a simulated demo.
 */
export const SparkDemo: React.FC = () => {
  const [reduced] = useState(isReducedMotion);
  // phase: 0 idle -> 1 user bubble -> 2 thinking -> 3 assistant typing -> 4 chips -> hold -> back to 0
  const [phase, setPhase] = useState(() => (isReducedMotion() ? 4 : 0));
  const [typed, setTyped] = useState(() => (isReducedMotion() ? ASSISTANT_MSG : ''));

  // Each phase schedules the next one. Loop: 0 -> 1 -> 2 -> 3 -> 4 -> back to 1.
  useEffect(() => {
    if (phase !== 0 || reduced) return;
    const t = window.setTimeout(() => setPhase(1), 700);
    return () => window.clearTimeout(t);
  }, [phase, reduced]);

  useEffect(() => {
    if (phase !== 1 || reduced) return;
    const t = window.setTimeout(() => setPhase(2), 1400);
    return () => window.clearTimeout(t);
  }, [phase, reduced]);

  useEffect(() => {
    if (phase !== 2 || reduced) return;
    const t = window.setTimeout(() => setPhase(3), 1500);
    return () => window.clearTimeout(t);
  }, [phase, reduced]);

  useEffect(() => {
    if (phase !== 3 || reduced) return;
    let i = 0;
    const iv = window.setInterval(() => {
      i += 3;
      setTyped(ASSISTANT_MSG.slice(0, i));
      if (i >= ASSISTANT_MSG.length) {
        window.clearInterval(iv);
        setPhase(4);
      }
    }, 24);
    return () => window.clearInterval(iv);
  }, [phase, reduced]);

  useEffect(() => {
    if (phase !== 4 || reduced) return;
    const t = window.setTimeout(() => {
      setTyped('');
      setPhase(1);
    }, 5200);
    return () => window.clearTimeout(t);
  }, [phase, reduced]);

  return (
    <div className="relative rounded-2xl border border-cyan-500/30 glass-panel shadow-2xl shadow-cyan-500/10 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center space-x-3 px-4 py-3 border-b border-white/10 bg-white/5">
        <div className="flex items-center space-x-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 flex justify-center">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono text-gray-400 bg-white/5 border border-white/10">
            Zee Spark - Web Beta
          </span>
        </div>
        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider text-amber-300 border border-amber-500/30 bg-amber-500/10">
          Simulated demo
        </span>
      </div>

      {/* Conversation */}
      <div className="p-4 sm:p-6 space-y-4 min-h-[19rem] sm:min-h-[17rem] flex flex-col justify-end">
        {phase >= 1 && (
          <div className="demo-pop flex justify-end">
            <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-br-sm px-4 py-3 text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20">
              {USER_MSG}
            </div>
          </div>
        )}

        {phase === 2 && (
          <div className="demo-pop flex justify-start">
            <div className="flex items-center space-x-1.5 rounded-2xl rounded-bl-sm px-4 py-3.5 bg-white/5 border border-white/10">
              <span className="demo-dot w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="demo-dot w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="demo-dot w-1.5 h-1.5 rounded-full bg-cyan-400" />
            </div>
          </div>
        )}

        {phase >= 3 && (
          <div className="demo-pop flex justify-start">
            <div className="max-w-[90%] sm:max-w-[80%] rounded-2xl rounded-bl-sm px-4 py-3 bg-white/5 border border-white/10">
              <div className="flex items-center space-x-1.5 mb-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-300">Zee Spark</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {typed}
                {phase === 3 && <span className="demo-caret text-cyan-400">|</span>}
              </p>
            </div>
          </div>
        )}

        {phase >= 4 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {CHIPS.map((chip, i) => (
              <span
                key={chip}
                className="demo-pop inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 border border-emerald-500/30 bg-emerald-500/10"
                style={{ animationDelay: `${i * 0.22}s` }}
              >
                <Check className="w-3 h-3" />
                <span>{chip}</span>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SparkDemo;
