import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AutomationSimulator from "./AutomationSimulator";

const skillsData = {
  automation: [
    {
      title: "Java Selenium Mastery",
      description: "Advanced automation testing with Selenium WebDriver using Java",
      icon: "🧪",
      proficiency: 95,
    },
    {
      title: "Test Automation Framework",
      description: "Building robust and scalable test automation frameworks",
      icon: "🔌",
      proficiency: 90,
    },
    {
      title: "Black Box Testing Automation",
      description: "Automating comprehensive black box test cases",
      icon: "⚙️",
      proficiency: 88,
    },
    {
      title: "Healenium Self-Healing Automation",
      description: "Self-healing automation testing with Healenium framework",
      icon: "🩹",
      proficiency: 87,
    },
  ],
  devtools: [
    {
      title: "API Security Testing",
      description: "Comprehensive API security vulnerability assessment",
      icon: "🔐",
      proficiency: 92,
    },
    {
      title: "OWASP ZAP Mastery",
      description: "Expert-level OWASP ZAP penetration testing",
      icon: "🔍",
      proficiency: 90,
    },
    {
      title: "Vulnerability Testing",
      description: "Identifying and documenting security vulnerabilities",
      icon: "⚠️",
      proficiency: 88,
    },
  ],
  softskills: [
    {
      title: "React Development",
      description: "Building responsive and modular UI components using React, hooks, and Tailwind.",
      icon: "⚛️",
      proficiency: 85,
    },
    {
      title: "Tailwind CSS",
      description: "Responsive & modern UI design with Tailwind CSS",
      icon: "🎨",
      proficiency: 88,
    },
    {
      title: "JavaScript & DOM",
      description: "Core JavaScript & DOM manipulation expertise",
      icon: "💻",
      proficiency: 87,
    },
  ],
};

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("automation");

  const categories = [
    { id: "automation", label: "Automation Skills", icon: "🤖" },
    { id: "devtools", label: "API Security & Testing", icon: "🔒" },
    { id: "softskills", label: "Frontend Skills", icon: "🎨" },
  ];

  const items = skillsData[activeCategory];


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-7xl mx-auto px-4 py-10 space-y-10"
    >
      {/* CATEGORY SELECTOR */}
      <div className="flex gap-4 justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-6 py-2 rounded-full text-sm transition-all border flex items-center gap-2 font-semibold ${
              activeCategory === cat.id
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-500 text-white shadow-lg shadow-purple-500/50"
                : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {items.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="h-full rounded-2xl border shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 p-6 flex flex-col bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">{skill.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 flex-grow">{skill.description}</p>
                {skill.proficiency && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">Proficiency</span>
                      <span className="text-sm font-bold text-purple-600 dark:text-purple-400">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* SUMMARY STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Automation Testing', value: '95%', icon: '🤖' },
          { label: 'API Security', value: '92%', icon: '🔒' },
          { label: 'Frontend Development', value: '87%', icon: '🎨' }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all text-center bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800"
          >
            <div className="text-5xl mb-4">{stat.icon}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{stat.label}</h3>
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>


      {/* AUTOMATION SIMULATOR SECTION */}
      {activeCategory === "automation" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <AutomationSimulator />
        </motion.div>
      )}
    </motion.div>
  );
}
