import React from "react";
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import Maths from './pages/Maths';
import CompSci from './pages/CompSci';
import AI from './pages/AI';
import StudentAlerts from "./pages/StudentAlerts";
import StudentSubjects from "./pages/StudentSubjects";
import Profile from "./pages/Profile";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/StudentDashboard" element={<StudentDashboard />} />
            <Route path="/TeacherDashboard" element={<TeacherDashboard />} />
            <Route path="/Maths" element={<Maths />} />
            <Route path="/CompSci" element={<CompSci />} />
            <Route path="/AI" element={<AI />} />
            <Route path="/StudentAlerts" element={<StudentAlerts />} />
            <Route path="/StudentSubjects" element={<StudentSubjects />} />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
    );
}

export default App;