import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */

// slate/cyan/emerald/rose are wired to CSS custom properties (defined per-theme
// in src/index.css) instead of static hex values, so every `bg-slate-900`,
// `text-cyan-400`, etc. utility automatically adapts when the `.dark` class is
// toggled — see the `--slate-*` / `--cyan-*` / ... variables in index.css.
function cssVarScale(name) {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  return Object.fromEntries(
    shades.map((shade) => [shade, `rgb(var(--${name}-${shade}) / <alpha-value>)`]),
  );
}

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: cssVarScale('slate'),
        // Brand primary accent, replacing the default cyan scale everywhere
        // `cyan-*` utility classes are used across the codebase.
        cyan: cssVarScale('cyan'),
        emerald: cssVarScale('emerald'),
        rose: cssVarScale('rose'),
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgb(var(--slate-400) / 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--slate-400) / 0.06) 1px, transparent 1px)',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-border': 'pulse-border 2.5s ease-in-out infinite',
        'grid-shift': 'grid-shift 20s linear infinite',
        blink: 'blink 1s step-end infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-border': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(182, 26, 1, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(182, 26, 1, 0)' },
        },
        'grid-shift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [typography],
};
