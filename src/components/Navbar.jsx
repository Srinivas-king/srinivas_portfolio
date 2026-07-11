import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'What I Do', href: '#whatido' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="fixed top-0 left-0 w-full z-50 flex flex-col items-center py-4 md:py-6 pointer-events-none"
    >
      <div className="glass px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-6 md:gap-8 pointer-events-auto relative z-20">
        <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          LTSB
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-sm text-gray-300 hover:text-white transition-colors hover:glow-text relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        <button 
          className="md:hidden text-white cursor-pointer hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
             initial={{ opacity: 0, y: -20, scale: 0.95 }}
             animate={{ opacity: 1, y: 10, scale: 1 }}
             exit={{ opacity: 0, y: -20, scale: 0.95 }}
             transition={{ duration: 0.2 }}
             className="absolute top-[70px] w-[90%] max-w-[300px] glass rounded-2xl p-6 pointer-events-auto flex flex-col gap-4 border border-white/10 z-10"
          >
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-300 hover:text-white hover:text-cyan-400 text-lg text-center transition-colors font-medium border-b border-white/5 pb-2 last:border-0"
                >
                  {link.name}
                </a>
             ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
