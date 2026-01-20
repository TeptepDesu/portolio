import React from 'react';
import { motion } from 'framer-motion';

export default function AutomationSimulator() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-2xl"
      >
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-8 rounded-2xl transition-all hover:bg-blue-100 dark:hover:bg-blue-900/30 text-center shadow-sm hover:shadow-md">
          <a href="#contact" className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 font-semibold hover:underline decoration-blue-500 underline-offset-4">
            Interested in the Automation Tool or Security Testing? <br className="hidden md:block" />
            Contact me to schedule a demo.
          </a>
        </div>
      </motion.div>
    </div>
  );
}
