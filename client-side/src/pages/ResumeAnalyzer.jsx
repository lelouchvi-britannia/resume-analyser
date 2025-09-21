import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import FileUploadZone from "../components/FileUploadZone";
import ScoreDashboard from "../components/ScoreDashboard";
import AnalyticsCharts from "../components/AnalyticsCharts";
import DetailedAnalysis from "../components/DetailedAnalysis";
import JobComparison from "../components/JobComparison";
import ExportOptions from "../components/ExportOptions";

const ResumeAnalyzer = () => {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI-Powered Resume Analysis
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get instant feedback on your resume with our advanced AI technology. 
          Improve your chances of landing your dream job with actionable insights and recommendations.
        </p>
      </div>

      {/* Upload Section */}
      <FileUploadZone />

      {resumeData && (
        <div className="space-y-8">
          {/* Score Dashboard */}
          <ScoreDashboard score={resumeData.score} resumeData={resumeData} />

          {/* Analytics Charts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics Dashboard</h2>
            <AnalyticsCharts resumeData={resumeData} />
          </div>

          {/* Two Column Layout for Detailed Analysis and Job Comparison */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Analysis</h2>
              <DetailedAnalysis resumeData={resumeData} />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Matching</h2>
                <JobComparison resumeData={resumeData} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Export Options</h2>
                <ExportOptions resumeData={resumeData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;