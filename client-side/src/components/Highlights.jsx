import React from "react";

const Highlights = ({ skills = [], projects = [] }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold mb-4">Highlights</h2>
      
      <div className="mb-4">
        <h3 className="font-medium">Skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.length > 0 ? (
            skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No skills extracted yet.</p>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-medium">Projects</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {projects.length > 0 ? (
            projects.map((proj, idx) => <li key={idx}>{proj}</li>)
          ) : (
            <p className="text-gray-500 text-sm">No projects extracted yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Highlights;