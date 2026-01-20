import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';
import SkillsShowcase from './components/SkillsShowcase.jsx';
import { MortarboardFill } from 'react-bootstrap-icons';
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
      <section id="home" className="pt-24 pb-4 md:pt-28 md:pb-16">
        <div className="container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">Joseph Irah G. Caballero</h1>
              <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">Software Quality Assurance Engineer / SDET</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:caballerojosephirah@gmail.com" className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:shadow-lg transition-all">caballerojosephirah@gmail.com</a>
                <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">+63 927 928 5588</span>
                <span className="px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Angono, Rizal, PH</span>
              </div>
            </div>
            <div className="hidden md:block justify-self-end">
              <div className="w-full h-48 md:h-64 rounded-3xl bg-gradient-to-br from-purple-600 to-indigo-600 opacity-90 shadow-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-8 md:py-16">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Experience</motion.h2>
          <div className="space-y-6">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Software Quality Assurance Engineer / SDET — VERSA</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Dec 2024 – Present</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Independently designed and executed end-to-end QA strategies covering functional, regression, API, automation, and security testing across multiple modules.</li>
                <li>Initiated API and security testing efforts using Postman, JWT analysis, and manual threat modeling to proactively identify authentication, authorization, and data validation risks.</li>
                <li>Built and maintained automated test scripts for regression and integration testing, improving test coverage and reducing manual validation effort.</li>
                <li>Analyzed system behavior and user workflows to uncover edge cases, failure points, and usability gaps not explicitly documented in requirements.</li>
                <li>Developed structured test plans, test cases, and security test procedures by identifying coverage gaps and prioritizing high-risk areas.</li>
                <li>Prepared and managed test data to validate business logic, role-based access control, error handling, and system workflows.</li>
                <li>Actively tracked defects, security findings, and fixes through resolution, ensuring verification before release.</li>
                <li>Collaborated closely with developers, DevOps, and product stakeholders to align quality, security, and release objectives.</li>
                <li>Contributed to improving QA processes by standardizing test documentation and reusable automation patterns.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service Virtual Assistant — MOVINN</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Aug 2024 – Feb 2025</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Managed inbound and outbound customer communications, resolving issues efficiently and escalating complex concerns when needed.</li>
                <li>Improved response turnaround time and customer satisfaction through proactive communication and issue ownership.</li>
                <li>Supported operational efficiency by handling clerical and administrative tasks with accuracy and consistency.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customer Service Virtual Assistant — NEST COLLECTION</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Nov 2023 – Apr 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Proactively engaged guests to secure positive reviews, improving property ratings and online visibility.</li>
                <li>Addressed and resolved negative feedback constructively, turning service issues into improvement opportunities.</li>
                <li>Maintained clear and timely guest communication to ensure smooth operations and positive guest experiences.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web Developer Intern — Sta. Lucia Realty & Development Inc.</h3>
                <span className="text-sm text-gray-600 dark:text-gray-400">Nov 2023 – Apr 2024</span>
              </div>
              <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Contributed to the development and maintenance of web applications using WordPress, HTML, CSS, and JavaScript.</li>
                <li>Assisted in troubleshooting, debugging, and improving application performance and usability.</li>
                <li>Participated in code reviews and technical discussions, gaining exposure to collaborative development practices.</li>
                <li>Provided technical support and basic troubleshooting for internal users and devices.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
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
                <li>Java (Professional in Selenium)</li>
                <li>HTML & CSS, JavaScript</li>
                <li>React, Vue.js, Node.js</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Showcase */}
      <section id="skills-showcase" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900/50 dark:to-gray-900">
        <SkillsShowcase />
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Certifications</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'NC – Computer Systems Servicing', url: null },
              { name: 'Meta – Introduction to Frontend Development', url: 'https://www.coursera.org/account/accomplishments/verify/WH5W2AECMU6Z?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
              { name: 'Meta – Programming with JavaScript', url: 'https://coursera.org/share/9e60d5220cc7a6caa485e1524340857d' },
              { name: 'Meta – HTML and CSS in Depth', url: 'https://www.coursera.org/account/accomplishments/verify/47FDHRHUCY2H?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course' },
              { name: 'Meta – React Basics', url: 'https://www.coursera.org/account/accomplishments/verify/JSJMFTTG733U?utm_source=link&utm_medium=certificate&utm_content=pdf_header_button&utm_product=course' },
              { name: 'Meta – Advanced React', url: 'https://www.coursera.org/account/accomplishments/verify/JSJMFTTG733U?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course' },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-600 transition-all flex items-center group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">✓</div>
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition flex-1">{cert.name}</span>
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <div className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0">✓</div>
                    <span className="text-gray-700 dark:text-gray-300">{cert.name}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-10 md:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-900/50">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Projects</motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Ramcos Nulud Website', url: 'https://ramcosnulud.com/' },
              { name: 'Personal Website Portfolio', url: 'https://teptepdesu.github.io/Portfolio-Project/' },
              { name: 'E-Commerce Website Project', url: 'https://teptepdesu.github.io/Ecommorce-project/' },
              { name: 'International Graduate School of Ministry Website (Wix)', url: 'https://www.igsm-ph.org/' },
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
      <section id="education" className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container">
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Education</motion.h2>
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 mt-1">
                <MortarboardFill size={20} />
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
