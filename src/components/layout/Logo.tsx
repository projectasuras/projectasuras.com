import { Link } from 'react-router-dom';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const src = theme === 'dark' ? '/images/dark-logo.png' : '/images/logo.png';

  return (
    <Link to="/" className="group flex items-center" aria-label="Project Asuras home">
      <img
        src={src}
        alt="Project Asuras"
        className={cn('h-8 w-auto sm:h-9', className)}
      />
    </Link>
  );
}
