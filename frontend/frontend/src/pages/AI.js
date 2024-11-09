import React from 'react';
import AIFlashCards from '../components/AIFlashcardGame'; // Importing the AIFlashCards component
import StudentNavBar from '../components/StudentNavBar'; // Importing the StudentNavBar component

// Functional component for the AI page
const AI = () => {
  return (
    <div>
      {/* Render the StudentNavBar component */}
      <StudentNavBar />
      {/* Render the AIFlashCards component */}
      <AIFlashCards />
    </div>
  );
};

export default AI; // Exporting the AI component as the default export