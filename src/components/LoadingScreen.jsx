import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-dark-950 to-dark-900 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ scale: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mb-8"
        >
          <div className="text-6xl font-bold gradient-text">SS</div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 mb-8"
        >
          Loading...
        </motion.p>

        {/* Animated Loader */}
        <div className="flex gap-3 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ y: [-10, 0, -10] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.1,
              }}
              className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
            />
          ))}
        </div>

        {/* Animated Lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 space-y-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ width: ['0%', '100%', '0%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
              className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto"
              style={{ maxWidth: '200px' }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
