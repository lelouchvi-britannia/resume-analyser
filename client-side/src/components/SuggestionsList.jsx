import React from "react";

const SuggestionsList = ({ suggestions = [] }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Suggestions for Improvement</h2>
      <ul className="list-disc list-inside text-gray-700">
        {suggestions.length > 0 ? (
          suggestions.map((s, idx) => <li key={idx}>{s}</li>)
        ) : (
          <p className="text-gray-500 text-sm">No suggestions yet.</p>
        )}
      </ul>
    </div>
  );
};

export default SuggestionsList;