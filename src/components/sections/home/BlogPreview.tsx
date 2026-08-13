import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { FadeIn } from '@/components/shared/FadeIn';
import { blogPosts } from '@/data/blogPosts';
import { formatDate } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function BlogPreview() {
  const latest = blogPosts.slice(0, 3);

  return (
    <section className="bg-slate-950 py-24">
      <div className="container-app">
        <SectionHeader
          eyebrow="Research & Insights"
          title="From the Asuras Blog"
          subtitle="Field notes from real engagements, detection engineering, and security training."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {latest.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.1}>
              <Link to={`/blog/${post.slug}`} className="group block h-full">
                <div className="overflow-hidden rounded-xl border border-slate-800">
                  <img
                    src={post.image}
                    alt=""
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    {post.category}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-slate-50 transition-colors group-hover:text-cyan-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-400">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
                    <span>{formatDate(post.publishedAt)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime} min read
                    </span>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button variant="secondary" size="md" asChild>
            <Link to="/blog">
              View All Articles <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
