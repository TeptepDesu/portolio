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
      title: 'Automation Script Example',
      steps: [
        { testId: 'login_001', stepDescription: 'Navigate to Login Page', action: 'Navigate', locatorType: 'URL', locator: 'https://example.com/login', testData: '-', expectedResult: 'Login page loads' },
        { testId: 'login_002', stepDescription: 'Enter Username', action: 'Type', locatorType: 'ID', locator: 'username', testData: 'testuser', expectedResult: 'Username entered in field' },
        { testId: 'login_003', stepDescription: 'Enter Password', action: 'Type', locatorType: 'ID', locator: 'password', testData: 'password123', expectedResult: 'Password masked in field' },
        { testId: 'login_004', stepDescription: 'Click Login Button', action: 'Click', locatorType: 'XPath', locator: '//button[@class="login-btn"]', testData: '-', expectedResult: 'User logged in successfully' }
      ]
    },
    {
      title: 'Testing Example in Postman',
      steps: [
        { testId: 'api_001', stepDescription: 'GET User List', action: 'API Request', locatorType: 'Endpoint', locator: 'GET /api/v1/users', testData: '-', expectedResult: 'Status 200 OK' },
        { testId: 'api_002', stepDescription: 'POST Create User', action: 'API Request', locatorType: 'Endpoint', locator: 'POST /api/v1/users', testData: '{"name": "Jane Doe", "role": "admin"}', expectedResult: 'Status 201 Created' },
        { testId: 'api_003', stepDescription: 'Validate Response Schema', action: 'Assert', locatorType: 'JSONPath', locator: '$.data.id', testData: 'exists', expectedResult: 'ID generated' },
        { testId: 'api_004', stepDescription: 'Verify Database Entry', action: 'Query', locatorType: 'SQL', locator: 'SELECT * FROM users WHERE name="Jane Doe"', testData: '-', expectedResult: 'Record found' }
      ]
    },
    {
      title: 'Example using OWASP ZAP',
      steps: [
        { testId: 'sec_001', stepDescription: 'Spider Scan Target', action: 'Spider Scan', locatorType: 'URL', locator: 'https://example.com', testData: 'Depth: 5', expectedResult: 'Site map generated' },
        { testId: 'sec_002', stepDescription: 'Active Scan', action: 'Active Scan', locatorType: 'Target', locator: 'https://example.com/login', testData: 'Policy: Default', expectedResult: 'Vulnerabilities identified' },
        { testId: 'sec_003', stepDescription: 'Analyze Alerts', action: 'Review', locatorType: 'Report', locator: 'High/Medium Risks', testData: '-', expectedResult: 'Alerts categorized' },
        { testId: 'sec_004', stepDescription: 'Re-test Fix', action: 'Re-scan', locatorType: 'Alert ID', locator: '10023', testData: '-', expectedResult: 'Vulnerability mitigated' }
      ]
    }
  ];



  const actionTypes = ['Click', 'Type', 'Navigate', 'Wait', 'Assert', 'Scroll', 'API Request', 'Query', 'Spider Scan', 'Active Scan', 'Review', 'Re-scan'];
  const locatorTypes = ['ID', 'CSS', 'XPath', 'ClassName', 'Name', 'Endpoint', 'JSONPath', 'SQL', 'Target', 'Report', 'Alert ID'];

  const handleAddStep = () => {
    if (newStep.action && newStep.locatorType && newStep.locator) {
      setCustomSteps([...customSteps, { testId: `custom_${Date.now()}`, stepDescription: newStep.action, ...newStep }]);
      setNewStep({ action: '', locatorType: '', locator: '', testData: '', expectedResult: '' });
    }
  };

  const generateScript = (steps) => {
    return steps.map(step => {
      let line = `// ${step.stepDescription}\n`;
      switch (step.action) {
        case 'Navigate':
          line += `await browser.url('${step.locator}');`;
          break;
        case 'Type':
          line += `await $('${step.locator}').setValue('${step.testData}');`;
          break;
        case 'Click':
          line += `await $('${step.locator}').click();`;
          break;
        case 'Wait':
          line += `await browser.pause(${step.testData});`;
          break;
        case 'Assert':
          line += `await expect($('${step.locator}')).toHaveText('${step.expectedResult}');`;
          break;
        case 'API Request':
          line += `const response = await request('${step.locator}', { method: 'GET' });`;
          break;
        case 'Query':
          line += `const result = await db.query('${step.locator}');`;
          break;
        case 'Spider Scan':
          line += `await zap.spider.scan('${step.locator}');`;
          break;
        case 'Active Scan':
          line += `await zap.ascan.scan('${step.locator}');`;
          break;
        case 'Review':
          line += `const alerts = await zap.core.alerts('${step.locator}');`;
          break;
        case 'Re-scan':
          line += `await zap.ascan.scan('${step.locator}', { recurse: true });`;
          break;
        default:
          line += `// Action: ${step.action}, Locator: ${step.locator}`;
      }
      return line;
    }).join('\n\n');
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
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Test Automation Learning Lab</h3>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 p-4 rounded-lg transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/40">
            <a href="#contact" className="text-blue-800 dark:text-blue-200 font-medium hover:underline block w-full h-full">
              Interested in the Automation Tool or Security Testing? Contact me to schedule a demo.
            </a>
          </div>
        </div>

        {/* Lesson Selector */}
        <div className="flex gap-3 flex-wrap">
          {lessons.map((lesson, idx) => (
            <button
              key={idx}
              onClick={() => { setActiveLesson(idx); setActiveTab('learn'); }}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${activeLesson === idx
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
            >
              {lesson.title}
            </button>
          ))}
        </div>

        {/* Learn/Practice/Script Tabs */}
        <div className="flex gap-2 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => setActiveTab('learn')}
            className={`px-4 py-2 border-b-2 font-semibold transition-all ${activeTab === 'learn'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 dark:text-gray-400'
              }`}
          >
            Learn
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-4 py-2 border-b-2 font-semibold transition-all ${activeTab === 'practice'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 dark:text-gray-400'
              }`}
          >
            Practice
          </button>
          <button
            onClick={() => setActiveTab('script')}
            className={`px-4 py-2 border-b-2 font-semibold transition-all ${activeTab === 'script'
              ? 'border-purple-600 text-purple-600'
              : 'border-transparent text-gray-600 dark:text-gray-400'
              }`}
          >
            Script Glimpse
          </button>
        </div>

        {activeTab === 'learn' && (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">Study the {currentLesson.title} lesson automation steps</p>
            <StepTable steps={currentLesson.steps} />
          </div>
        )}

        {activeTab === 'practice' && (
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

        {activeTab === 'script' && (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">Generated Automation Script for {currentLesson.title}</p>
            <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto shadow-inner">
              <pre>{generateScript(currentLesson.steps)}</pre>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
