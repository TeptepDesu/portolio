import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AutomationSimulator from "./AutomationSimulator";

const skillsData = {
  qa: [
    { title: "Test Strategy & Design", description: "Independently designing end-to-end QA strategies" },
    { title: "Black Box & Exploratory", description: "Uncovering edge cases and usability gaps" },
    { title: "Regression & Integration", description: "Building robust regression suites" },
    { title: "Defect Management", description: "Standardizing documentation and resolution tracking" },
  ],
  security: [
    { title: "API Testing & Security", description: "Testing with Postman, JWT, and data validation" },
    { title: "Vulnerability Testing", description: "Manual threat modeling and risk identification" },
    { title: "Performance Testing", description: "Load and stress testing using JMeter" },
  ],
  automation: [
    { title: "Java + Selenium", description: "Professional automation script development" },
    { title: "JavaScript", description: "Modern web automation and scripting" },
    { title: "Framework Design", description: "Basic reusable automation patterns" },
  ],
  frontend: [
    { title: "React Development", description: "Modern UI components and hooks" },
    { title: "HTML & CSS", description: "Responsive and semantically structured web" },
    { title: "Tailwind CSS", description: "Utility-first modern styling" },
  ],
};

export default function SkillsShowcase() {
  const [activeCategory, setActiveCategory] = useState("qa");

  const categories = [
    { id: "qa", label: "QA & Testing" },
    { id: "security", label: "Security & API" },
    { id: "automation", label: "Automation" },
    { id: "frontend", label: "Frontend Skills" },
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
            className={`px-6 py-2 rounded-full text-sm transition-all border flex items-center gap-2 font-semibold ${activeCategory === cat.id
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
