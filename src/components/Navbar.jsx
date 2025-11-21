import React, { useState } from 'react';

export default function Navbar({ sections, active, onToggleDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between h-16 px-4">
        <a href="#home" className="font-bold tracking-tight text-gray-900 dark:text-white text-lg">Joseph Caballero</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {sections.map(s => {
            const label = s.id === 'skills-showcase' ? 'Showcase' : s.label;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-2 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition ${
                  active === s.id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {label}
              </a>
            );
          })}
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            className="ml-2 rounded-xl px-3 py-1 text-sm border border-gray-300 dark:border-gray-700 hover:shadow-soft"
          >
            🌙
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle dark mode"
            onClick={onToggleDark}
            className="rounded-xl px-2 py-1 text-sm border border-gray-300 dark:border-gray-700 hover:shadow-soft"
          >
            🌙
          </button>
          <button
            onClick={toggleMenu}
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="flex flex-col p-4 gap-2">
            {sections.map(s => {
              const label = s.id === 'skills-showcase' ? 'Showcase' : s.label;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={closeMenu}
                  className={`px-3 py-2 rounded-md text-sm transition ${
                    active === s.id
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
