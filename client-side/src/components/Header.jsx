import React from 'react';
import { DocumentTextIcon, ChartBarIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <DocumentTextIcon className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ResumeAnalyzer Pro</h1>
              <p className="text-xs text-gray-500">AI-Powered Resume Intelligence</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Dashboard
            </a>
            <a href="#analytics" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Analytics
            </a>
            <a href="#reports" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Reports
            </a>
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <ChartBarIcon className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <UserCircleIcon className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Upgrade Pro
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;