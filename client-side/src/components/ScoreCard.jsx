import React from "react";

const ScoreCard = ({ score = 0 }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-2">Resume Score</h2>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${score * 10}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600">Rating: {score}/10</p>
    </div>
  );
};

export default ScoreCard;