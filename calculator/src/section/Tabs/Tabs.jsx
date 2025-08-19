import React, { useState } from 'react';
import EMICalculator from '../Home/Home';
import Car from '../Car/Car';
import Personal from '../Personal/Personal';

const HomeLoan = () => <div className="p-4"><EMICalculator/></div>;
const PersonalLoan = () => <div className="p-4"><Personal/></div>;
const CarLoan = () => <div className="p-4"><Car/></div>;

const ResponsiveTabs = () => {
  const [activeTab, setActiveTab] = useState('Home Loan');
  const tabs = ['Home Loan', 'Personal Loan', 'Car Loan'];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home Loan':
        return <HomeLoan />;
      case 'Personal Loan':
        return <PersonalLoan />;
      case 'Car Loan':
        return <CarLoan />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-4">
      {/* Mobile Dropdown */}
      <div className="sm:hidden mb-4">
        <label htmlFor="tabs" className="sr-only">Select a section</label>
        <select
          id="tabs"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          {tabs.map(tab => (
            <option key={tab} value={tab}>{tab}</option>
          ))}
        </select>
      </div>

      {/* Desktop Tabs */}
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:text-gray-400 dark:divide-gray-700">
        {tabs.map((tab, index) => (
          <li key={tab} className="w-full focus-within:z-10">
            <button
              onClick={() => setActiveTab(tab)}
              className={`inline-block w-full p-4  border-gray-200 dark:border-gray-700  focus:outline-none ${
                activeTab === tab
                  ? 'text-orange-500 text-1xl font-bold bg-blue-900 dark:bg-blue-100 dark:text-white'
                  : 'bg-blue-700 text-white text-1xl '
              } ${index === 0 ? 'rounded-s-lg' : ''} ${index === tabs.length - 1 ? 'rounded-e-lg border-s-0' : ''}`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className="mt-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ResponsiveTabs;
