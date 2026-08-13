import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export function useCountUp({ end, duration = 1800, start = 0, decimals = 0 }: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(start + (end - start) * eased);
            if (progress < 1) requestAnimationFrame(step);
            else setValue(end);
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, end, duration, start]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();

  return { ref: setRef, value: display };
}
