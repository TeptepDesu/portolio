import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function AutomationSimulator() {
  const [activeLesson, setActiveLesson] = useState(0);
  const [activeTab, setActiveTab] = useState('learn');
  const [customSteps, setCustomSteps] = useState([]);
  const [newStep, setNewStep] = useState({
    action: '',
    locatorType: '',
    locator: '',
    testData: '',
    expectedResult: ''
  });

  const lessons = [
    {
      title: 'Beginner',
      steps: [
        { testId: 'login_001', stepDescription: 'Navigate to Login Page', action: 'Navigate', locatorType: 'URL', locator: 'https://example.com/login', testData: '-', expectedResult: 'Login page loads' },
        { testId: 'login_002', stepDescription: 'Enter Username', action: 'Type', locatorType: 'ID', locator: 'username', testData: 'testuser', expectedResult: 'Username entered in field' },
        { testId: 'login_003', stepDescription: 'Enter Password', action: 'Type', locatorType: 'ID', locator: 'password', testData: 'password123', expectedResult: 'Password masked in field' },
        { testId: 'login_004', stepDescription: 'Click Login Button', action: 'Click', locatorType: 'XPath', locator: '//button[@class="login-btn"]', testData: '-', expectedResult: 'User logged in successfully' }
      ]
    },
    {
      title: 'Intermediate',
      steps: [
        { testId: 'checkout_001', stepDescription: 'Navigate to Product Page', action: 'Navigate', locatorType: 'URL', locator: 'https://example.com/products', testData: '-', expectedResult: 'Product list displayed' },
        { testId: 'checkout_002', stepDescription: 'Select Product', action: 'Click', locatorType: 'CSS', locator: '.product-item:nth-child(1)', testData: '-', expectedResult: 'Product details page opens' },
        { testId: 'checkout_003', stepDescription: 'Add to Cart', action: 'Click', locatorType: 'ID', locator: 'add-to-cart', testData: '-', expectedResult: 'Item added to cart' },
        { testId: 'checkout_004', stepDescription: 'Proceed to Checkout', action: 'Click', locatorType: 'XPath', locator: '//button[contains(text(), "Checkout")]', testData: '-', expectedResult: 'Checkout page loads' }
      ]
    },
    {
      title: 'Advanced',
      steps: [
        { testId: 'api_001', stepDescription: 'Execute API Call', action: 'API Request', locatorType: 'Endpoint', locator: '/api/v1/users', testData: '{"name": "John"}', expectedResult: 'Status 200 OK' },
        { testId: 'api_002', stepDescription: 'Validate JSON Response', action: 'Assert', locatorType: 'JSONPath', locator: '$.data[0].id', testData: 'not_empty', expectedResult: 'ID field exists and populated' },
        { testId: 'api_003', stepDescription: 'Database Verification', action: 'Query', locatorType: 'SQL', locator: 'SELECT * FROM users WHERE name="John"', testData: '-', expectedResult: 'Record found in database' }
      ]
    }
  ];

  const actionTypes = ['Click', 'Type', 'Navigate', 'Wait', 'Assert', 'Scroll', 'API Request', 'Query'];
  const locatorTypes = ['ID', 'CSS', 'XPath', 'ClassName', 'Name', 'Endpoint', 'JSONPath', 'SQL'];

  const handleAddStep = () => {
    if (newStep.action && newStep.locatorType && newStep.locator) {
      setCustomSteps([...customSteps, { testId: `custom_${Date.now()}`, stepDescription: newStep.action, ...newStep }]);
      setNewStep({ action: '', locatorType: '', locator: '', testData: '', expectedResult: '' });
    }
  };

  const StepTable = ({ steps }) => (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Test ID</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Step Description</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Action</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Locator Type</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Locator</th>
            <th className="border border-gray-300 dark:border-gray-700 p-3 text-left text-gray-900 dark:text-white font-semibold">Expected Result</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step, idx) => (
            <tr key={idx} className="bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100">{step.testId}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100">{step.stepDescription}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100">{step.action}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100">{step.locatorType}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100 font-mono text-xs">{step.locator}</td>
              <td className="border border-gray-300 dark:border-gray-700 p-3 text-gray-900 dark:text-gray-100">{step.expectedResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const currentLesson = lessons[activeLesson];
  const displaySteps = activeTab === 'learn' ? currentLesson.steps : customSteps;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Test Automation Learning Lab</h3>
        
        {/* Lesson Selector */}
        <div className="flex gap-3 flex-wrap">
          {lessons.map((lesson, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveLesson(idx); setActiveTab('learn'); }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                activeLesson === idx
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {lesson.title}
            </button>
          ))}
        </div>

        {/* Learn/Practice Tabs */}
        <div className="flex gap-2 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-2 border-b-2 font-semibold transition-all ${
              activeTab === 'learn'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 dark:text-gray-400'
            }`}
          >
            Learn
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 border-b-2 font-semibold transition-all ${
              activeTab === 'practice'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-600 dark:text-gray-400'
            }`}
          >
            Practice
          </button>
        </div>

        {activeTab === 'learn' ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">Study the {currentLesson.title} lesson automation steps</p>
            <StepTable steps={currentLesson.steps} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">Create Your Test Step</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <select
                  value={newStep.action}
                  onChange={(e) => setNewStep({ ...newStep, action: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                >
                  <option value="">Select Action</option>
                  {actionTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                <select
                  value={newStep.locatorType}
                  onChange={(e) => setNewStep({ ...newStep, locatorType: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                >
                  <option value="">Select Locator Type</option>
                  {locatorTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
                <input
                  type="text"
                  placeholder="Locator"
                  value={newStep.locator}
                  onChange={(e) => setNewStep({ ...newStep, locator: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Test Data"
                  value={newStep.testData}
                  onChange={(e) => setNewStep({ ...newStep, testData: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
                <input
                  type="text"
                  placeholder="Expected Result"
                  value={newStep.expectedResult}
                  onChange={(e) => setNewStep({ ...newStep, expectedResult: e.target.value })}
                  className="p-2 border border-gray-300 dark:border-gray-700 rounded bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
              </div>
              <button
                onClick={handleAddStep}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-all"
              >
                Add Step
              </button>
            </div>
            {customSteps.length > 0 && (
              <div className="space-y-3">
                <p className="font-semibold text-gray-900 dark:text-white">Your Test Steps ({customSteps.length})</p>
                <StepTable steps={customSteps} />
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
