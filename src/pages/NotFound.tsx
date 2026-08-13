import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Project Asuras</title>
      </Helmet>
      <section className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 pt-[72px] text-center">
        <ShieldAlert className="h-16 w-16 text-cyan-500/60" />
        <h1 className="mt-6 font-mono text-6xl font-bold text-slate-100">404</h1>
        <p className="mt-3 max-w-md text-slate-400">
          This path doesn't resolve to a known resource. It may have been moved, or never
          existed.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </section>
    </>
  );
}
