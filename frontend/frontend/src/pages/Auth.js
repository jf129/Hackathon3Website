import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/AuthComps'; // Importing styled components from AuthComps

// Functional component for the Auth page
const Auth = () => {
    // State to toggle between sign-in and sign-up forms
    const [signIn, toggle] = useState(true);
    // State to store the username input
    const [username, setUsername] = useState('');
    // State to store the password input
    const [password, setPassword] = useState('');
    // State to store the email input
    const [email, setEmail] = useState('');
    // Hook to navigate programmatically
    const navigate = useNavigate();

    // Function to handle sign-in button click
    const handleSignInClick = async () => {
        console.log('Signing in');
        console.log(email + ' ' + password);
        // Navigate to the TeacherDashboard page
        navigate('/TeacherDashboard');
    };

    return (
        <div>
            {/* Render the sign-in or sign-up form based on the signIn state */}
            {signIn ? (
                <Components.Container>
                    <Components.Form>
                        <Components.Title>Sign In</Components.Title>
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Button onClick={handleSignInClick}>Sign In</Components.Button>
                    </Components.Form>
                </Components.Container>
            ) : (
                <Components.Container>
                    <Components.Form>
                        <Components.Title>Sign Up</Components.Title>
                        <Components.Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Components.Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Button>Sign Up</Components.Button>
                    </Components.Form>
                </Components.Container>
            )}
            {/* Toggle between sign-in and sign-up forms */}
            <Components.Toggle onClick={() => toggle(!signIn)}>
                {signIn ? 'Create an account' : 'Already have an account? Sign In'}
            </Components.Toggle>
        </div>
    );
};

export default Auth; // Exporting the Auth component as the default export