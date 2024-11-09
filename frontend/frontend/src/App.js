import React from "react";
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
            <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
        </Routes>
    );
}

export default App;