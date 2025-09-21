import React from "react";

const SummaryCard = ({ summary = "Your professional summary will appear here." }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default SummaryCard;