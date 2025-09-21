import React from 'react';
import { 
  CheckCircleIcon, 
  ExclamationTriangleIcon, 
  LightBulbIcon,
  DocumentCheckIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const DetailedAnalysis = ({ resumeData }) => {
  const strengths = [
    'Strong technical skill set with modern technologies',
    'Clear project descriptions with measurable outcomes',
    'Consistent formatting and professional presentation',
    'Relevant work experience in target industry'
  ];

  const improvements = resumeData?.suggestions || [
    'Add more quantifiable achievements with specific metrics',
    'Include relevant certifications or training',
    'Optimize keywords for ATS compatibility',
    'Add a professional summary section'
  ];

  const missingElements = [
    'Professional certifications',
    'Volunteer experience',
    'Publications or blog posts',
    'Language proficiencies'
  ];

  const atsCompatibility = {
    score: 85,
    issues: [
      'Some special characters may not parse correctly',
      'Consider using standard section headings'
    ],
    recommendations: [
      'Use standard fonts (Arial, Calibri, Times New Roman)',
      'Avoid images, graphics, or complex formatting',
      'Include keywords from job descriptions'
    ]
  };

  return (
    <div className="space-y-6">
      {/* Resume Highlights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <StarIcon className="w-5 h-5 text-green-600" />
          <h3 className="text-lg font-semibold text-gray-900">Resume Strengths</h3>
        </div>
        <div className="space-y-3">
          {strengths.map((strength, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{strength}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Improvement Suggestions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <LightBulbIcon className="w-5 h-5 text-yellow-600" />
          <h3 className="text-lg font-semibold text-gray-900">Improvement Suggestions</h3>
        </div>
        <div className="space-y-4">
          {improvements.map((suggestion, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-gray-700 font-medium">{suggestion}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Priority: {index < 2 ? 'High' : 'Medium'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Missing Elements */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <ClockIcon className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900">Consider Adding</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {missingElements.map((element, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-gray-700">{element}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ATS Compatibility */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <DocumentCheckIcon className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-semibold text-gray-900">ATS Compatibility</h3>
          </div>
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-purple-600">{atsCompatibility.score}%</div>
            <div className="text-sm text-gray-500">Compatible</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${atsCompatibility.score}%` }}
            ></div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Potential Issues</h4>
            <div className="space-y-2">
              {atsCompatibility.issues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <ExclamationTriangleIcon className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-2">Recommendations</h4>
            <div className="space-y-2">
              {atsCompatibility.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircleIcon className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-600">{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedAnalysis;