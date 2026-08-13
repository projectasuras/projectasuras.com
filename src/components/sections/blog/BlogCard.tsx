import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import type { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group block ${featured ? 'grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center' : ''}`}
    >
      <div className={`overflow-hidden rounded-xl border border-slate-800 ${featured ? 'aspect-video' : 'aspect-[16/10]'}`}>
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={featured ? '' : 'mt-4'}>
        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
          {post.category}
        </span>
        <h3
          className={`mt-3 font-semibold text-slate-50 transition-colors group-hover:text-cyan-400 ${
            featured ? 'text-2xl' : 'text-lg'
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-2 text-slate-400 ${featured ? 'line-clamp-3 text-sm' : 'line-clamp-2 text-sm'}`}>
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} min read
          </span>
        </div>
      </div>
    </Link>
  );
}
