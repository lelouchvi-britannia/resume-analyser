import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const AnalyticsCharts = ({ resumeData }) => {
  // Mock data for demonstration - in real app, this would come from actual analysis
  const skillsData = [
    { name: 'Technical Skills', value: resumeData?.skills?.filter(skill => 
      ['React', 'Node', 'JavaScript', 'Python', 'MongoDB'].includes(skill)
    ).length || 5, color: '#3B82F6' },
    { name: 'Soft Skills', value: 3, color: '#10B981' },
    { name: 'Tools & Frameworks', value: 4, color: '#F59E0B' },
    { name: 'Languages', value: 2, color: '#EF4444' }
  ];

  const experienceData = [
    { year: '2020', level: 2 },
    { year: '2021', level: 4 },
    { year: '2022', level: 6 },
    { year: '2023', level: 7 },
    { year: '2024', level: 8 }
  ];

  const keywordDensity = [
    { keyword: 'JavaScript', count: 12 },
    { keyword: 'React', count: 8 },
    { keyword: 'Node.js', count: 6 },
    { keyword: 'MongoDB', count: 4 },
    { keyword: 'Express', count: 3 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Skills Breakdown */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={skillsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {skillsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {skillsData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Experience Growth</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={experienceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="level" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Keyword Density */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Keyword Frequency Analysis</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={keywordDensity} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="keyword" type="category" width={80} />
              <Tooltip />
              <Bar dataKey="count" fill="#3B82F6" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;