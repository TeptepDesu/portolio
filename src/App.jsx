import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import SkillsShowcase from './components/SkillsShowcase.jsx';
import useActiveSection from './hooks/useActiveSection.js';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'skills-showcase', label: 'Showcase' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function App() {
  const active = useActiveSection(sections.map(s => s.id));

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  const toggleDark = useCallback(() => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, []);

  return (
    <div>
      <Navbar sections={sections} active={active} onToggleDark={toggleDark} />

      {/* Home */}
      <section id="home" className="pt-28 pb-16">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Joseph Irah G. Caballero</h1>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Software Quality Assurance Analyst • Frontend Developer • Software Developer Engineer in Test</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:caballerojosephirah@gmail.com" className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:shadow-lg transition-all">caballerojosephirah@gmail.com</a>
                <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">+63 927 928 5588</span>
                <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Angono, Rizal, PH</span>
              </div>
            </div>
            <div className="justify-self-end">
              <div className="w-full h-48 md:h-64 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 opacity-90 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experience</motion.h2>
          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Quality Assurance Analyst — VERSA</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Dec 2024 – Present</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Design & execute assurance tests based on system & security requirements.</li>
                <li>Develop & maintain automated regression, integration, and performance tests.</li>
                <li>Conduct vulnerability testing, threat modeling, and verify security best practices.</li>
                <li>Prepare test data sets to validate logic, security, error handling, and workflows.</li>
                <li>Collaborate with developers & DevOps to ensure quality across releases.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service Virtual Assistant — MOVINN</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Aug 2024 – Feb 2025</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Managed inbound/outbound calls and clerical tasks to resolve guest issues.</li>
                <li>Improved response rates and guest satisfaction through effective communication.</li>
                <li>Contributed to increased ratings for short-term rentals.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service Virtual Assistant — NEST COLLECTION</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Nov 2023 – Apr 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Engaged guests to secure positive reviews and managed feedback resolution.</li>
                <li>Handled administrative duties ensuring smooth operations.</li>
                <li>Maintained proactive communication to keep guests informed.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold">Web Developer Intern — Sta. Lucia Realty & Development Inc.</h3>
                <span className="text-sm text-gray-500">Nov 2023 – Apr 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-1 text-gray-700 dark:text-gray-300">
                <li>Assisted in developing & maintaining web apps using WordPress, HTML, CSS, JS.</li>
                <li>Troubleshot & debugged web issues; provided technical support to users.</li>
                <li>Participated in code reviews and team discussions.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Skills</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">QA Skills</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>API Security Testing, API Testing, Postman</li>
                <li>Black Box Testing, Automation (Java Selenium)</li>
                <li>Performance Testing (JMeter)</li>
                <li>Cross-browser/platform testing</li>
                <li>Documentation</li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Programming Skills</h3>
              <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>HTML & CSS, JavaScript</li>
                <li>React, Vue.js, Node.js</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Showcase */}
      <SkillsShowcase />

      {/* Certifications */}
      <section id="certifications" className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Certifications</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'NC II - (Computer Systems Services)',
              'Meta - Introduction to Frontend Development',
              'Meta - Programming with JavaScript',
              'Meta - HTML and CSS in Depth',
              'Meta - React Basics',
              'Meta - Advanced React',
            ].map((cert, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all flex items-center"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">✓</div>
                <span className="text-gray-700 dark:text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Projects</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Ramcos Nulud Website', url: 'https://ramcosnulud.com/' },
              { name: 'Website Portfolio', url: 'https://teptepdesu.github.io/Portfolio-Project/' },
              { name: 'E-Commerce Website Project', url: 'https://teptepdesu.github.io/Ecommorce-project/' },
              { name: 'International Graduate School of Ministry', url: 'https://www.igsm-ph.org/' },
            ].map((p) => (
              <motion.a
                key={p.url}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all hover:border-purple-300 dark:hover:border-purple-600 block group"
              >
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">{p.name}</div>
                <div className="text-sm text-blue-600 dark:text-blue-400 break-all mt-2">{p.url}</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Education</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                🎓
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Engineering</div>
                <div className="text-gray-600 dark:text-gray-400 mt-1">University of Rizal System — Antipolo City, Rizal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <Contact />
      <div className="container pb-8">
        <div className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Joseph Irah G. Caballero
        </div>
      </div>
    </div>
  );
}
