import React from 'react';

export default function Navbar({ sections, active, onToggleDark }) {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-bold tracking-tight text-gray-900 dark:text-white">Joseph Caballero</a>
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
