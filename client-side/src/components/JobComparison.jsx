import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon, 
  CheckCircleIcon, 
  XCircleIcon,
  ExclamationTriangleIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

const JobComparison = ({ resumeData }) => {
  const [jobDescription, setJobDescription] = useState('');
  const [comparisonResult, setComparisonResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate API call - in real app, this would call your backend
    setTimeout(() => {
      const mockResult = {
        matchPercentage: 78,
        matchedSkills: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
        missingSkills: ['AWS', 'Docker', 'TypeScript', 'GraphQL'],
        recommendations: [
          'Highlight your React experience more prominently',
          'Consider adding AWS certification',
          'Mention any Docker experience you may have',
          'Add TypeScript to your skill set'
        ],
        keywordMatches: {
          total: 25,
          matched: 19,
          missing: 6
        }
      };
      setComparisonResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getMatchGradient = (percentage) => {
    if (percentage >= 80) return 'from-green-500 to-green-600';
    if (percentage >= 60) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Job Description Comparison</h3>
      </div>

      {/* Job Description Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Paste Job Description
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Paste the job description here to analyze how well your resume matches..."
          className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <button
          onClick={handleAnalyze}
          disabled={!jobDescription.trim() || isAnalyzing}
          className="mt-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
        >
          {isAnalyzing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <MagnifyingGlassIcon className="w-4 h-4" />
              <span>Analyze Match</span>
            </>
          )}
        </button>
      </div>

      {/* Comparison Results */}
      {comparisonResult && (
        <div className="space-y-6">
          {/* Match Percentage */}
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="mb-4">
              <div className={`text-4xl font-bold ${getMatchColor(comparisonResult.matchPercentage)}`}>
                {comparisonResult.matchPercentage}%
              </div>
              <div className="text-sm text-gray-500 font-medium">Match Score</div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className={`h-3 rounded-full bg-gradient-to-r ${getMatchGradient(comparisonResult.matchPercentage)} transition-all duration-1000`}
                style={{ width: `${comparisonResult.matchPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              Your resume matches {comparisonResult.matchPercentage}% of the job requirements
            </p>
          </div>

          {/* Skills Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Matched Skills */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                <CheckCircleIcon className="w-5 h-5 text-green-600" />
                <span>Matched Skills</span>
              </h4>
              <div className="space-y-2">
                {comparisonResult.matchedSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircleIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Missing Skills */}
            <div>
              <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
                <XCircleIcon className="w-5 h-5 text-red-600" />
                <span>Missing Skills</span>
              </h4>
              <div className="space-y-2">
                {comparisonResult.missingSkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 bg-red-50 rounded-lg border border-red-200">
                    <XCircleIcon className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Keyword Analysis */}
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-gray-900 mb-3">Keyword Analysis</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{comparisonResult.keywordMatches.total}</div>
                <div className="text-sm text-gray-500">Total Keywords</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{comparisonResult.keywordMatches.matched}</div>
                <div className="text-sm text-gray-500">Matched</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">{comparisonResult.keywordMatches.missing}</div>
                <div className="text-sm text-gray-500">Missing</div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />
              <span>Recommendations</span>
            </h4>
            <div className="space-y-3">
              {comparisonResult.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-yellow-700">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobComparison;