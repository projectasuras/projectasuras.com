import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const STORAGE_KEY = 'asuras-cookie-consent';

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timeout = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timeout);
    }
  }, []);

  const decide = (value: 'accepted' | 'declined') => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-xl border border-slate-800 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-md sm:inset-x-auto sm:right-6 sm:bottom-6"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
            <div className="flex-1">
              <p className="text-sm text-slate-300">
                We use cookies to improve your experience and analyze site traffic. Read our{' '}
                <Link to="/privacy" className="text-cyan-400 underline underline-offset-2">
                  Privacy Policy
                </Link>
                .
              </p>
              <div className="mt-4 flex gap-3">
                <Button size="sm" variant="primary" onClick={() => decide('accepted')}>
                  Accept
                </Button>
                <Button size="sm" variant="ghost" onClick={() => decide('declined')}>
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
