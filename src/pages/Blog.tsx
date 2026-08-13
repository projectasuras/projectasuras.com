import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search } from 'lucide-react';
import { PageHero } from '@/components/shared/PageHero';
import { BlogCard } from '@/components/sections/blog/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { useDebounce } from '@/hooks/useDebounce';
import { cn } from '@/lib/utils';

const PAGE_SIZE = 4;

export default function Blog() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 300);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.map((p) => p.category)))],
    [],
  );

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];

  const filtered = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    return blogPosts.filter((p) => {
      if (p.slug === featured.slug) return false;
      const matchesCategory = category === 'All' || p.category === category;
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.tags.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [debouncedSearch, category, featured.slug]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <Helmet>
        <title>Blog | Project Asuras</title>
        <meta
          name="description"
          content="Threat research, detection engineering, and security training insights from the Project Asuras team."
        />
      </Helmet>

      <PageHero
        eyebrow="Research & Insights"
        title="The Asuras Blog"
        subtitle="Field notes from real engagements — offensive research, detection engineering, and security training."
        breadcrumb="Blog"
      />

      <section className="py-20">
        <div className="container-app grid grid-cols-1 gap-12 lg:grid-cols-[1fr_280px]">
          <div>
            {page === 1 && category === 'All' && !debouncedSearch && (
              <div className="mb-14">
                <BlogCard post={featured} featured />
              </div>
            )}

            {paginated.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                {paginated.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <p className="text-center text-slate-500">No articles match your search.</p>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPage(i + 1)}
                    className={cn(
                      'h-9 w-9 rounded-lg text-sm font-medium transition-colors',
                      page === i + 1
                        ? 'bg-cyan-500 text-white'
                        : 'border border-slate-800 text-slate-400 hover:text-slate-100',
                    )}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
                <input
                  id="blog-search"
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Search articles..."
                  className="w-full rounded-lg border border-slate-800 bg-slate-900/60 py-2.5 pl-9 pr-3 text-sm text-slate-100 outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-slate-100">Categories</h3>
              <ul className="mt-3 space-y-1">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => {
                        setCategory(cat);
                        setPage(1);
                      }}
                      className={cn(
                        'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                        category === cat
                          ? 'bg-cyan-500/10 text-cyan-400'
                          : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100',
                      )}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
