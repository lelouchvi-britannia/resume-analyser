import React, { useState } from 'react';
import { 
  DocumentArrowDownIcon, 
  DocumentTextIcon, 
  ChartBarIcon,
  ShareIcon,
  PrinterIcon
} from '@heroicons/react/24/outline';

const ExportOptions = ({ resumeData }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState('');

  const handleExport = async (type) => {
    setIsExporting(true);
    setExportType(type);

    // Simulate export process
    setTimeout(() => {
      setIsExporting(false);
      setExportType('');
      
      // In a real app, this would trigger actual file download
      console.log(`Exporting ${type}...`);
    }, 2000);
  };

  const exportOptions = [
    {
      id: 'analysis-report',
      title: 'Analysis Report',
      description: 'Complete PDF report with scores, suggestions, and recommendations',
      icon: DocumentTextIcon,
      color: 'blue',
      format: 'PDF'
    },
    {
      id: 'improved-resume',
      title: 'Improved Resume',
      description: 'Your resume with AI-powered improvements and optimizations',
      icon: DocumentArrowDownIcon,
      color: 'green',
      format: 'DOCX'
    },
    {
      id: 'analytics-dashboard',
      title: 'Analytics Dashboard',
      description: 'Visual charts and graphs of your resume analysis',
      icon: ChartBarIcon,
      color: 'purple',
      format: 'PDF'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      }
    };
    return colors[color];
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <ShareIcon className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Export & Download</h3>
        </div>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <PrinterIcon className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {exportOptions.map((option) => {
          const colors = getColorClasses(option.color);
          const isCurrentlyExporting = isExporting && exportType === option.id;
          
          return (
            <div key={option.id} className={`p-4 rounded-lg border ${colors.bg} ${colors.border}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg bg-white`}>
                    <option.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{option.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500 border">
                        {option.format}
                      </span>
                      {resumeData && (
                        <span className="text-xs text-gray-500">
                          Ready to export
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleExport(option.id)}
                  disabled={!resumeData || isExporting}
                  className={`px-4 py-2 text-white text-sm font-medium rounded-lg transition-colors disabled:bg-gray-400 ${colors.button}`}
                >
                  {isCurrentlyExporting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Exporting...</span>
                    </div>
                  ) : (
                    'Download'
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {!resumeData && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Upload and analyze a resume to enable export options
          </p>
        </div>
      )}

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
        <div className="flex flex-wrap gap-2">
          <button 
            disabled={!resumeData}
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg transition-colors"
          >
            Email Report
          </button>
          <button 
            disabled={!resumeData}
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg transition-colors"
          >
            Share Link
          </button>
          <button 
            disabled={!resumeData}
            className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 disabled:bg-gray-50 disabled:text-gray-400 text-gray-700 rounded-lg transition-colors"
          >
            Save to Cloud
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportOptions;