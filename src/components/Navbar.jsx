import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ sections, active, onToggleDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg border-b border-gray-200/50 dark:border-gray-800/50'
          : 'backdrop-blur-sm bg-white/60 dark:bg-gray-900/60 border-b border-gray-200/30 dark:border-gray-800/30'
        }`}
    >
      <div className="container flex items-center justify-between h-16 px-4">
        <motion.a
          href="#home"
          className="font-bold tracking-tight text-gray-900 dark:text-white text-lg flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-2xl">👨‍💻</span>
          <span className="hidden sm:inline">Joseph Caballero</span>
          <span className="sm:hidden">JC</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {sections.map((s, idx) => {
            const label = s.id === 'skills-showcase' ? 'Showcase' : s.label;
            return (
              <motion.a
                key={s.id}
                href={`#${s.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`px-3 py-2 text-sm rounded-lg transition-all relative group ${active === s.id
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}
              >
                {label}
                {active === s.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            );
          })}
          <motion.button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="ml-2 rounded-xl px-3 py-2 text-lg border border-gray-300 dark:border-gray-700 hover:shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            🌙
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-xl px-2 py-1 text-lg border border-gray-300 dark:border-gray-700 hover:shadow-md transition-all"
          >
            🌙
          </motion.button>
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-2">
              {sections.map((s, idx) => {
                const label = s.id === 'skills-showcase' ? 'Showcase' : s.label;
                return (
                  <motion.a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`px-4 py-3 rounded-lg text-sm transition-all ${active === s.id
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-600 dark:text-blue-400 font-semibold shadow-sm'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                  >
                    {label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
