import React, { useContext } from "react";
import { ResumeContext } from "../context/ResumeContext";
import { analyzeResume } from "../api/resumeApi";

const UploadBox = () => {
  const { setResumeData } = useContext(ResumeContext);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Call backend API
    const data = await analyzeResume(file);
    setResumeData(data);
  };

  return (
    <div className="border-2 border-dashed p-6 text-center rounded-lg bg-white shadow">
      <p className="mb-2">Upload your resume (PDF/DOCX)</p>
      <input type="file" onChange={handleFileUpload} />
    </div>
  );
};

export default UploadBox;