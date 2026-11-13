import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import SEO from '../components/SEO';
import { Reveal } from '../components/react-bits/Reveal';
import { SpotlightCard } from '../components/react-bits/SpotlightCard';
import { WaitlistForm } from '../components/WaitlistForm';
import posts from '../content/posts.json';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const Updates: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
      <SEO
        title="Updates & Blog | Viron Technologies"
        description="Build notes and announcements from Viron Technologies: the Zee Spark AI assistant beta, zee120 AI model public testing, and the Zee AI operating system roadmap."
        canonical="/updates"
      />

      <div className="space-y-4 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Newspaper className="w-4 h-4" />
          <span>BUILD NOTES & ANNOUNCEMENTS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Updates from the lab</h1>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          What Viron Technologies is shipping, fixing and planning - written as it happens.
        </p>
      </div>

      <div className="space-y-6">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
            <Link to={`/updates/${post.slug}`} className="block group">
              <SpotlightCard className="p-6 sm:p-8 space-y-3 glass-panel-hover">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">{post.excerpt}</p>
                <span className="inline-flex items-center space-x-1.5 text-xs font-mono text-cyan-400 group-hover:underline py-1">
                  <span>Read the note</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </SpotlightCard>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <SpotlightCard className="p-8 sm:p-10 border-cyan-500/30 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Get the next update by email</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Join the Zee Spark waitlist and we will tell you when new features and products open up.
          </p>
          <WaitlistForm />
        </SpotlightCard>
      </Reveal>
    </div>
  );
};

export default Updates;
