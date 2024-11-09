import React from 'react';
import Navbar from '../components/StudentNavBar'; // Importing the StudentNavBar component
import TeacherNavBar from '../components/TeacherNavBar'; // Importing the TeacherNavBar component

// Functional component for the Students page
const Students = () => {
  return (
    <div>
      {/* Render the TeacherNavBar component */}
      <TeacherNavBar />
      {/* Render the page title */}
      <h1>Students</h1>
    </div>
  );
};

export default Students; // Exporting the Students component as the default export