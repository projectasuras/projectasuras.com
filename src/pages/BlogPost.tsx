import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Clock, Link as LinkIcon } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '@/data/blogPosts';
import { formatDate } from '@/lib/utils';
import { BlogCard } from '@/components/sections/blog/BlogCard';
import { LinkedinIcon, XIcon } from '@/components/shared/SocialIcons';
import { useState } from 'react';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const [copied, setCopied] = useState(false);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, 3);
  const shareUrl = `https://projectasuras.com/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title} | Project Asuras Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            datePublished: post.publishedAt,
            author: { '@type': 'Person', name: post.author.name },
          })}
        </script>
      </Helmet>

      <article className="pt-[72px]">
        <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
          <img src={post.image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
        </div>

        <div className="container-app -mt-24 relative max-w-3xl">
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-slate-800 py-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt=""
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-slate-100">{post.author.name}</p>
                <p className="text-xs text-slate-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime} min read
              </span>
            </div>
          </div>

          <div className="prose prose-invert prose-cyan mt-10 max-w-none prose-headings:font-semibold prose-a:text-cyan-400 prose-code:text-cyan-300">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {post.content}
            </ReactMarkdown>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-900 px-3 py-1 text-xs text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 border-t border-slate-800 pt-8">
            <span className="text-sm font-medium text-slate-400">Share:</span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Share on Twitter"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              aria-label="Copy link"
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-slate-400 hover:text-cyan-400"
            >
              <LinkIcon className="h-4 w-4" />
            </button>
            {copied && <span className="text-xs text-emerald-400">Link copied</span>}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-slate-800/80 py-20">
          <div className="container-app">
            <h2 className="text-2xl font-bold text-slate-50">Related Articles</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-slate-800/80 bg-slate-900/30 py-16">
        <div className="container-app max-w-xl text-center">
          <h2 className="text-2xl font-bold text-slate-50">Never miss a write-up</h2>
          <p className="mt-3 text-sm text-slate-400">
            Threat research and product updates, delivered straight to your inbox.
          </p>
          <form
            className="mt-6 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="post-newsletter" className="sr-only">
              Email address
            </label>
            <input
              id="post-newsletter"
              type="email"
              required
              placeholder="you@company.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:brightness-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <div className="sr-only">
        <Link to="/blog">Back to blog</Link>
      </div>
    </>
  );
}
