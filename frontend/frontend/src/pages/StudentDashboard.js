import React from 'react';
import SubjectCarousel from '../components/SubjectCarousel';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import StudentNavbar from '../components/StudentNavBar';
import './StudentDashboard.css';

const StudentDashboard = () => {
  // Sample data for the charts
  const lineData = [
    { month: 'Mon', Minutes: 400},
    { month: 'Tue', Minutes: 300},
    { month: 'Wed', Minutes: 200},
    { month: 'Thu', Minutes: 278},
    { month: 'Fri', Minutes: 189},
    { month: 'Sat', Minutes: 239},
  ];

  const barData = [
    { category: 'Maths', value: 4000 },
    { category: 'Comp Sci', value: 3000 },
    { category: 'AI', value: 2000 },
  ];

  const pieData = [
    { name: 'Flashcards', value: 400 },
    { name: 'Definitions', value: 300 },
    { name: 'Adaptive', value: 700 },
  ];

  return (
    <div>
      {/* Render the StudentNavbar component */}
      <StudentNavbar />
      {/* Render the SubjectCarousel component */}
      <SubjectCarousel />
      
      {/* Line Chart Card */}
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Study Time</h2>
          <LineChart width={600} height={300} data={lineData}>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px'
              }} 
            />
            <Legend />
            <Line type="monotone" dataKey="Minutes" stroke="#02C5CB" />
          </LineChart>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Subject Mastery</h2>
          <BarChart width={600} height={300} data={barData}>
            <XAxis dataKey="category" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px'
              }} 
            />
            <Legend />
            <Bar dataKey="value" fill="#02C5CB" />
          </BarChart>
        </div>
      </div>

      {/* Pie Chart Card */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Study Methods</h2>
          <PieChart width={400} height={400}>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#02C5CB">
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === 'Adaptive' ? '#FFBB28' : '#02C5CB'} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                padding: '8px'
              }} 
            />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;