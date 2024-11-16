'use client'

import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Sun, Moon, Shield, Clock, Wrench, Leaf, 
  DollarSign, CheckCircle, AlertCircle, 
  Settings, ShieldCheck, Zap, AlertTriangle
} from 'lucide-react';
import { motion } from 'framer-motion';

// Create a ThemeContext to manage dark/light mode across components
const ThemeContext = createContext();

// Custom hook to use ThemeContext, for cleaner code where the theme is needed
const useTheme = () => useContext(ThemeContext);

// Utility functions for class names to maintain readability
const getTextColorClass = (isDarkMode) => isDarkMode ? 'text-white' : 'text-gray-900';
const getBgClass = (isDarkMode) => isDarkMode ? 'bg-gray-900' : 'bg-white';
const getSecondaryTextClass = (isDarkMode) => isDarkMode ? 'text-gray-300' : 'text-gray-600';

// Feature component that uses React.memo to prevent unnecessary re-renders
const Feature = React.memo(({ text }) => (
  // Using framer-motion for slight hover effect to create a dynamic user experience
  <motion.div whileHover={{ scale: 1.05 }} className="flex items-start space-x-3">
    <CheckCircle className="h-5 w-5 text-lime-400 mt-1 flex-shrink-0" />
    <span className={`text-gray-600 dark:text-gray-300`}>{text}</span>
  </motion.div>
));

export default function Home() {
  // State to manage dark mode, defaulting based on localStorage value or true
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true;
  });

  // useEffect to update the HTML class and localStorage whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Function to toggle dark/light mode
  const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={`min-h-screen transition-colors duration-200 ${getBgClass(isDarkMode)}`}>
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme}
          className={`fixed top-4 right-4 p-3 rounded-full 
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 hover:scale-105
            ${isDarkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}
          aria-label="Toggle theme"
        >
          {/* Icon switches between Sun and Moon depending on the mode */}
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-lime-400" />
          ) : (
            <Moon className="h-5 w-5 text-gray-600" />
          )}
        </button>
        
        <main className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero Section with animated entry for a more engaging intro */}
          <section className="text-center mb-16">
            <motion.div className="flex items-center justify-center mb-4" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
              <Leaf className="h-12 w-12 text-lime-400 mr-3" />
              <h1 className={`text-5xl font-bold ${getTextColorClass(isDarkMode)}`}>
                Maintain<span className="text-lime-400">ME</span>
              </h1>
            </motion.div>
            <motion.p className={`text-xl ${getSecondaryTextClass(isDarkMode)}`} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.5, duration: 1 }}>
              Smart, sustainable grounds maintenance solutions
            </motion.p>
          </section>

          {/* Warranty Comparison Section - Standard vs. MaintainME */}
          <section className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${getTextColorClass(isDarkMode)}`}>
              Standard vs. MaintainME Coverage
            </h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
              {/* Standard Warranty - Highlighting the drawbacks */}
              <div className={`rounded-lg p-6 relative border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    Limited Coverage
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-6 flex items-center ${getTextColorClass(isDarkMode)}`}>
                  <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                  Standard Warranty
                </h3>
                <div className="space-y-4">
                  {/* Standard warranty only covers manufacturer defects */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Limited Defect Coverage</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Only covers manufacturer defects, excluding wear and tear.
                      </p>
                    </div>
                  </div>
                  {/* No proactive maintenance provided under the standard warranty */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>No Proactive Maintenance</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        No scheduled inspections or preventative actions.
                      </p>
                    </div>
                  </div>
                  {/* Slow response times in standard warranty */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <AlertCircle className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Delayed Response Time</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Typically responds within 48 hours, with no guaranteed timeframe.
                      </p>
                    </div>
                  </div>
                  {/* Unexpected costs for repairs and parts */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <DollarSign className="h-5 w-5 text-red-500 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Unexpected Costs</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Additional fees for labor and parts not included.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* MaintainME Coverage - Highlighting benefits over standard warranty */}
              <div className={`rounded-lg p-6 relative border border-lime-400 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-lime-400 text-gray-900 text-sm px-3 py-1 rounded-full">
                    Comprehensive Care
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-6 flex items-center ${getTextColorClass(isDarkMode)}`}>
                  <Shield className="h-6 w-6 text-lime-400 mr-2" />
                  MaintainME Coverage
                </h3>
                <div className="space-y-4">
                  {/* MaintainME includes comprehensive defect and wear coverage */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <CheckCircle className="h-5 w-5 text-lime-400 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Comprehensive Protection</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Covers wear, tear, and manufacturer defects.
                      </p>
                    </div>
                  </div>
                  {/* MaintainME offers scheduled, proactive maintenance */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <CheckCircle className="h-5 w-5 text-lime-400 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Proactive Maintenance</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Scheduled inspections and preventative maintenance included.
                      </p>
                    </div>
                  </div>
                  {/* MaintainME promises a quicker response time compared to standard warranty */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <CheckCircle className="h-5 w-5 text-lime-400 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>Rapid Response</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        Guaranteed response within 48 hours, striving for 24-hour support.
                      </p>
                    </div>
                  </div>
                  {/* All-inclusive pricing helps customers avoid surprise costs */}
                  <div className={`flex items-start space-x-3 p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}>
                    <CheckCircle className="h-5 w-5 text-lime-400 mt-1" />
                    <div>
                      <h4 className={`font-medium ${getTextColorClass(isDarkMode)}`}>All-Inclusive Pricing</h4>
                      <p className={getSecondaryTextClass(isDarkMode)}>
                        No hidden fees; all parts and labor included in Premium plans.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Why Choose MaintainME Section - Highlighting general benefits */}
          <section className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${getTextColorClass(isDarkMode)}`}>
              Why Choose Maintain<span className="text-lime-400">ME</span>?
            </h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
              {/* Proactive Maintenance Feature */}
              <div className={`rounded-lg p-6 border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <CheckCircle className="h-8 w-8 text-lime-400 mb-4" />
                <h3 className={`text-lg font-semibold ${getTextColorClass(isDarkMode)}`}>Proactive Maintenance</h3>
                <p className={getSecondaryTextClass(isDarkMode)}>
                  Stay ahead with regular inspections and preventative care to minimize downtime.
                </p>
              </div>
              {/* Cost Effectiveness Feature */}
              <div className={`rounded-lg p-6 border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <CheckCircle className="h-8 w-8 text-lime-400 mb-4" />
                <h3 className={`text-lg font-semibold ${getTextColorClass(isDarkMode)}`}>Cost-Effectiveness</h3>
                <p className={getSecondaryTextClass(isDarkMode)}>
                  Predictable monthly expenses with no surprise charges for parts or labor.
                </p>
              </div>
              {/* Expert Support Feature */}
              <div className={`rounded-lg p-6 border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <CheckCircle className="h-8 w-8 text-lime-400 mb-4" />
                <h3 className={`text-lg font-semibold ${getTextColorClass(isDarkMode)}`}>Expert Support</h3>
                <p className={getSecondaryTextClass(isDarkMode)}>
                  Get assistance from our knowledgeable technicians whenever needed.
                </p>
              </div>
              {/* Peace of Mind Feature */}
              <div className={`rounded-lg p-6 border ${
                isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <CheckCircle className="h-8 w-8 text-lime-400 mb-4" />
                <h3 className={`text-lg font-semibold ${getTextColorClass(isDarkMode)}`}>Peace of Mind</h3>
                <p className={getSecondaryTextClass(isDarkMode)}>
                  Focus on your core business while we ensure your equipment runs smoothly.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Mosaic Plan Comparison Section - Different service tiers */}
          <section className="mb-16">
            <h2 className={`text-3xl font-bold mb-8 text-center ${getTextColorClass(isDarkMode)}`}>
              Choose Your Maintain<span className="text-lime-400">ME</span> Plan
            </h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }}>
              {/* Basic Plan - Affordable plan for cost-conscious customers */}
              <div className={`md:col-span-1 rounded-lg p-6 border ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <h3 className={`text-xl font-semibold mb-4 flex items-center ${getTextColorClass(isDarkMode)}`}>
                  <Shield className="h-6 w-6 text-lime-400 mr-2" />
                  MaintainME Basic
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${getTextColorClass(isDarkMode)}`}>$249</span>
                  <span className={getSecondaryTextClass(isDarkMode)}>
                    /acre/year
                  </span>
                </div>
                <p className={`mb-6 ${getSecondaryTextClass(isDarkMode)}`}>
                  Essential coverage with discounted services for cost-conscious operations
                </p>
                <div className="space-y-4">
                  <Feature text="Priority service access with discounted rates ($90/hr vs $150/hr)" />
                  <Feature text="Annual blade replacement included" />
                  <Feature text="50% off winter servicing" />
                  <Feature text="Access to mower loan program" />
                  <Feature text="Basic fleet monitoring" />
                  <Feature text="Warranty processing assistance" />
                  <Feature text="Pay-as-you-go service model" />
                </div>
              </div>
              {/* Premium Plan - All-inclusive, comprehensive coverage plan */}
              <div className={`md:col-span-2 rounded-lg p-6 relative border border-lime-400 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
              }`}>
                <div className="absolute top-4 right-4">
                  <span className="bg-lime-400 text-gray-900 text-sm px-3 py-1 rounded-full">
                    Recommended
                  </span>
                </div>
                <h3 className={`text-xl font-semibold mb-4 flex items-center ${getTextColorClass(isDarkMode)}`}>
                  <ShieldCheck className="h-6 w-6 text-lime-400 mr-2" />
                  MaintainME Premium
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${getTextColorClass(isDarkMode)}`}>$59</span>
                  <span className={getSecondaryTextClass(isDarkMode)}>
                    /acre/month
                  </span>
                  <p className={`text-sm mt-2 ${getSecondaryTextClass(isDarkMode)}`}>
                    10-month billing cycle ($590/acre/year, 4 months half off for Tennessee transition zone)
                    $100 for the first acre
                  </p>
                </div>
                <p className={`mb-6 ${getSecondaryTextClass(isDarkMode)}`}>
                  Comprehensive coverage with rapid response and all-inclusive service
                </p>
                <div className="space-y-4">
                  <Feature text="24/7 monitoring & rapid response (within 48 hours)" />
                  <Feature text="All labor included - no hourly charges" />
                  <Feature text="Monthly manager check-ins" />
                  <Feature text="Comprehensive winter storage & servicing" />
                  <Feature text="Advanced fleet monitoring & analytics" />
                  <Feature text="Quarterly maintenance included" />
                  <Feature text="All software updates & service bulletins" />
                  <Feature text="Regular blade changes" />
                  <Feature text="Annual inspection & full cleaning" />
                </div>
              </div>
            </motion.div>
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
