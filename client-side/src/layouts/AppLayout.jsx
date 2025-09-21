import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="p-4 bg-blue-600 text-white font-bold text-xl">
        Resume Analyzer
      </header>
      <main className="p-6 max-w-5xl mx-auto">{children}</main>
      <footer className="p-4 text-center text-sm text-gray-500">
        Built with ❤️ using MERN
      </footer>
    </div>
  );
};

export default AppLayout;