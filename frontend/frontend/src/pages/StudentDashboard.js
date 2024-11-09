import React from 'react';
import SubjectCarousel from '../components/SubjectCarousel';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';
import StudentNavbar from '../components/StudentNavBar';
import './StudentDashboard.css';

const StudentDashboard = () => {
  // Sample data for the charts
  const lineData = [
    { month: 'Jan', users: 400, sales: 240 },
    { month: 'Feb', users: 300, sales: 139 },
    { month: 'Mar', users: 200, sales: 980 },
    { month: 'Apr', users: 278, sales: 390 },
    { month: 'May', users: 189, sales: 480 },
    { month: 'Jun', users: 239, sales: 380 },
  ];

  const barData = [
    { category: 'Product A', value: 4000 },
    { category: 'Product B', value: 3000 },
    { category: 'Product C', value: 2000 },
    { category: 'Product D', value: 2780 },
    { category: 'Product E', value: 1890 },
  ];

  const pieData = [
    { name: 'Mobile', value: 400 },
    { name: 'Desktop', value: 300 },
    { name: 'Tablet', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div>
      <StudentNavbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Line Chart Card */}
            <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">User Growth & Sales</h2>
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
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
                </LineChart>
            </div>
            </div>

            {/* Bar Chart Card */}
            <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700">Product Performance</h2>
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
                <h2 className="text-xl font-semibold text-gray-700">Device Distribution</h2>
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