import React from "react";
import Header from "../components/Header";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Built with ❤️ using React, Node.js, and AI • © 2024 ResumeAnalyzer Pro
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;