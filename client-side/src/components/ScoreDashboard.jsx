import React from 'react';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';

const ScoreDashboard = ({ score = 0, resumeData }) => {
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score) => {
    if (score >= 8) return 'from-green-500 to-green-600';
    if (score >= 6) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const getScoreLabel = (score) => {
    if (score >= 8) return 'Excellent';
    if (score >= 6) return 'Good';
    if (score >= 4) return 'Fair';
    return 'Needs Improvement';
  };

  const scoreMetrics = [
    {
      label: 'ATS Compatibility',
      score: Math.min(score + 1, 10),
      icon: CheckCircleIcon,
      color: score >= 7 ? 'text-green-600' : 'text-yellow-600'
    },
    {
      label: 'Content Quality',
      score: score,
      icon: score >= 6 ? CheckCircleIcon : ExclamationTriangleIcon,
      color: score >= 6 ? 'text-green-600' : 'text-yellow-600'
    },
    {
      label: 'Format & Structure',
      score: Math.max(score - 1, 1),
      icon: score >= 5 ? CheckCircleIcon : XCircleIcon,
      color: score >= 5 ? 'text-green-600' : 'text-red-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Resume Score</h2>
        <p className="text-gray-600">Overall assessment of your resume quality</p>
      </div>

      {/* Main Score Circle */}
      <div className="flex justify-center mb-8">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="50"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${(score / 10) * 314} 314`}
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" className={`stop-color-${getScoreGradient(score).split(' ')[0].replace('from-', '')}`} />
                <stop offset="100%" className={`stop-color-${getScoreGradient(score).split(' ')[1].replace('to-', '')}`} />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
                {score}/10
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {getScoreLabel(score)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Score Breakdown</h3>
        {scoreMetrics.map((metric, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <metric.icon className={`w-5 h-5 ${metric.color}`} />
              <span className="font-medium text-gray-900">{metric.label}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-20 bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full bg-gradient-to-r ${getScoreGradient(metric.score)} transition-all duration-500`}
                  style={{ width: `${(metric.score / 10) * 100}%` }}
                ></div>
              </div>
              <span className={`text-sm font-semibold ${getScoreColor(metric.score)} min-w-[2rem]`}>
                {metric.score}/10
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      {resumeData && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{resumeData.skills?.length || 0}</div>
              <div className="text-sm text-gray-500">Skills Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{resumeData.projects?.length || 0}</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{resumeData.suggestions?.length || 0}</div>
              <div className="text-sm text-gray-500">Suggestions</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoreDashboard;