import React, { useState } from "react";

const ComparisonBox = ({ missingSkills = [] }) => {
  const [jobTitle, setJobTitle] = useState("");

  const handleCompare = () => {
    // In real app, call backend with jobTitle
    console.log("Comparing resume with:", jobTitle);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Compare with Job Title</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter job title..."
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={handleCompare}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Compare
        </button>
      </div>
      {missingSkills.length > 0 && (
        <div>
          <h3 className="font-medium">Missing Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {missingSkills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonBox;