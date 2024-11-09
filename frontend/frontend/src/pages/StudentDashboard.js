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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <StudentNavbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Line Chart Card */}
            <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Your Weekly Activity</h2>
            </div>
            <div className="p-2">
                <LineChart width={350} height={300} data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
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
            </div>
            <div className="p-2">
                <BarChart width={350} height={300} data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip 
                    contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '8px'
                    }} 
                />
                <Bar dataKey="value" fill="#8884d8">
                    {barData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Bar>
                </BarChart>
            </div>
            </div>

            {/* Pie Chart Card */}
            <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Game Usage</h2>
            </div>
            <div className="p-2">
                <PieChart width={350} height={300}>
                <Pie
                    data={pieData}
                    cx={175}
                    cy={150}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                >
                    {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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
        </div>
    </div>
  );
};

export default StudentDashboard;