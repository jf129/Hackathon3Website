import React from 'react';
import StudentNavbar from '../components/StudentNavBar'; // Importing the StudentNavBar component
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook from react-router-dom

// Functional component for the StudentSubjects page
const StudentSubjects = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    return (
        <div>
            {/* Render the StudentNavBar component */}
            <StudentNavbar />
            {/* Render the page title */}
            <h1 className="text-2xl font-bold">Subjects</h1>
            {/* Container for the subject buttons */}
            <div className="button-container">
                {/* Button for navigating to the Maths page */}
                <button
                    className="rounded-button"
                    style={{ backgroundImage: "url('../constants/Maths.jpg')" }}
                    onClick={() => navigate('/Maths')}
                >
                    Maths
                </button>
                {/* Button for navigating to the Computer Science page */}
                <button
                    className="rounded-button"
                    style={{ backgroundImage: "url('../constants/CompSci.jpeg')" }}
                    onClick={() => navigate('/CompSci')}
                >
                    Computer Science
                </button>
                {/* Button for navigating to the AI Literacy page */}
                <button
                    className="rounded-button"
                    style={{ backgroundImage: "url('../constants/AI.jpeg')" }}
                    onClick={() => navigate('/AI')}
                >
                    AI Literacy
                </button>
            </div>
        </div>
    );
};

export default StudentSubjects; // Exporting the StudentSubjects component as the default export