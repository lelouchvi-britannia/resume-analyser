import React, { useState, useContext, useRef } from 'react';
import { ResumeContext } from '../context/ResumeContext';
import { analyzeResume } from '../api/resumeApi';
import { CloudArrowUpIcon, DocumentIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FileUploadZone = () => {
  const { setResumeData } = useContext(ResumeContext);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file) => {
    if (!file) return;

    setIsUploading(true);
    setUploadedFile(file);

    try {
      const data = await analyzeResume(file);
      setResumeData(data);
    } catch (error) {
      console.error('Upload failed:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setResumeData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Upload Resume</h2>
        <p className="text-sm text-gray-600">Upload your resume to get instant AI-powered analysis</p>
      </div>

      {!uploadedFile ? (
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
            isDragOver
              ? 'border-blue-400 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx,.txt"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          
          <div className="space-y-4">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <CloudArrowUpIcon className="w-8 h-8 text-gray-400" />
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900">
                {isUploading ? 'Analyzing resume...' : 'Drop your resume here'}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                or <span className="text-blue-600 font-medium">browse files</span>
              </p>
            </div>
            
            <div className="text-xs text-gray-400">
              Supports PDF, DOC, DOCX, TXT (Max 10MB)
            </div>
          </div>

          {isUploading && (
            <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                <span className="text-sm font-medium text-gray-700">Processing...</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <DocumentIcon className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">{uploadedFile.name}</p>
                <p className="text-xs text-gray-500">
                  {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <XMarkIcon className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadZone;