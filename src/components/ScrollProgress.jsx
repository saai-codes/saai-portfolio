import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 z-40 origin-left"
        style={{ width: `${progress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Floating Progress Indicator */}
      {progress > 0 && (
        <motion.div
          className="fixed bottom-8 right-8 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="relative w-12 h-12">
            <svg className="transform -rotate-90 w-12 h-12">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
                fill="none"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="20"
                stroke="url(#progressGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="125.6"
                strokeDashoffset={125.6 * (1 - progress / 100)}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="progressGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-primary-400">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ScrollProgress;
