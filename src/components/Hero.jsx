import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import heroImage from '../assets/images/hero/it\'s Me.png';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-6 relative z-10 lg:min-h-[calc(100vh-80px)] min-h-0 h-auto py-10 lg:py-0 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10 lg:gap-0">

          {/* Name Block */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-start order-1 lg:order-1"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-xl md:text-2xl text-purple-400 mb-4 tracking-widest uppercase font-mono">Hello, I am</h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 glow-text leading-tight">
                LIKKI<br />THIRUMALA<br />SRINIVAS<br />BABU
              </h1>
            </div>
          </motion.div>

          {/* Image Block */}
          <div className="w-full lg:w-1/3 flex justify-center z-20 order-2 lg:order-2">
            <div
              id="hero-image-placeholder"
              className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-2xl md:rounded-[3rem] opacity-0 overflow-hidden"
            />
          </div>

          {/* Role Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/3 flex justify-center lg:justify-end order-3 lg:order-3"
          >
            <div className="relative flex flex-col items-center lg:items-start">

              <h3 className="text-cyan-400 text-lg md:text-xl tracking-[0.35em] uppercase mb-2 font-light z-20 text-center lg:text-left">
                FULL STACK
              </h3>

              <div className="relative leading-none overflow-visible w-full min-w-[280px] text-center lg:text-left flex justify-center lg:justify-start">

                <h1 className="absolute top-1 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-cyan-400/20 blur-[2px] tracking-wide select-none z-0">
                  Developer
                </h1>

                <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-cyan-400 tracking-wide z-10">
                  Developer
                </h1>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
