import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import posts from '../content/posts.json';

const DOMAIN = 'https://virontechnologiesx.vercel.app';

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

export const UpdatePost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 pt-40 pb-32 text-center space-y-6">
        <SEO title="Update not found | Viron Technologies" description="This update does not exist." />
        <h1 className="text-3xl font-extrabold text-white">Update not found</h1>
        <p className="text-gray-400 text-sm">The note you are looking for does not exist or was moved.</p>
        <Link to="/updates" className="inline-flex items-center space-x-2 text-cyan-400 text-sm font-mono hover:underline py-2">
          <ArrowLeft className="w-4 h-4" />
          <span>All updates</span>
        </Link>
      </div>
    );
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: 'Viron Technologies',
      url: DOMAIN,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Viron Technologies',
      url: DOMAIN,
      logo: {
        '@type': 'ImageObject',
        url: `${DOMAIN}/images/viron_logo.png`,
      },
    },
    mainEntityOfPage: `${DOMAIN}/updates/${post.slug}`,
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
      <SEO
        title={`${post.title} | Viron Technologies`}
        description={post.excerpt}
        canonical={`/updates/${post.slug}`}
        ogType="article"
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>

      <Link
        to="/updates"
        className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors mb-8 py-2"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>All updates</span>
      </Link>

      <article className="space-y-6">
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

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{post.title}</h1>

        <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/10 pt-6">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};

export default UpdatePost;
