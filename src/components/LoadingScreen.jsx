import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 2; // Increases by 2 every 40ms -> 100 in 2000ms
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] bg-cyan-600/20 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative flex flex-col items-center z-10">
        {/* Letters */}
        <div className="flex gap-2 sm:gap-4 text-5xl sm:text-7xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          {["L", "T", "S", "B"].map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: index * 0.15 + 0.2,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="inline-block relative"
            >
              {letter}
              {/* Glowing Outline */}
              <motion.span
                className="absolute inset-0 text-cyan-400 blur-[8px] -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2,
                  delay: index * 0.15 + 0.8,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {letter}
              </motion.span>
            </motion.span>
          ))}
        </div>

        {/* Loading Bar Container */}
        <motion.div 
          className="mt-8 sm:mt-12 w-[160px] sm:w-[200px] h-[1px] bg-white/10 relative overflow-hidden"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {/* Animated Loading Line */}
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/2"
            animate={{ 
              x: ["-100%", "200%"]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Loading Progress Text */}
        <motion.div
          className="mt-4 text-[10px] sm:text-xs tracking-[0.3em] text-white/50 font-light flex gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>SYSTEM INITIALIZING</span>
          <span className="w-8 text-right text-cyan-400 font-medium">{progress}%</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
