import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import UploadBox from "../components/UploadBox";
import ScoreCard from "../components/ScoreCard";
import Highlights from "../components/Highlights";
import SuggestionsList from "../components/SuggestionsList";
import SummaryCard from "../components/SummaryCard";
import ComparisonBox from "../components/ComparisonBox";

const ResumeAnalyzer = () => {
  const { resumeData } = useContext(ResumeContext);

  return (
    <div className="space-y-6">
      <UploadBox />
      {resumeData && (
        <>
          <ScoreCard score={resumeData.score} />
          <SummaryCard summary={resumeData.summary} />
          <Highlights skills={resumeData.skills} projects={resumeData.projects} />
          <SuggestionsList suggestions={resumeData.suggestions} />
          <ComparisonBox missingSkills={resumeData.missingSkills} />
        </>
      )}
    </div>
  );
};

export default ResumeAnalyzer;