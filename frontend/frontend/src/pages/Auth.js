import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import * as Components from '../components/AuthComps';

const Auth = () => {
    const [signIn, toggle] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSignInClick = async () => {
        console.log('Signing');
        console.log(email  + ' ' + password);
        navigate('/StudentDashboard');

        {/*

        try {
            const response = await fetch(
              `http://localhost:27017/login`, // Assuming your login endpoint is /login
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email,
                  password
                })
              }
            );

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                navigate('/Home'); // Navigate to the dashboard page
            } else {
                // Handle login error
                console.error('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error signing in:', error);
        }*/}
    };

    const handleSignUpClick = async () => {
        navigate('/StudentDashboard');

        {/*

        try {
            const response = await fetch(
              `http://localhost:27017/register`,
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  username,
                  email,
                  password
                })
              }
            );

            const data = await response.json();
            console.log(data);
            if (response.ok) {
                navigate('/Home'); // Navigate to the dashboard page
            } else {
                // Handle registration error
                console.error('Registration failed:', data.message);
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }*/}
    };

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <Components.Input 
                        type='text' 
                        placeholder='Name' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Components.Input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Components.Input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Components.Button onClick={handleSignUpClick}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign in</Components.Title>
                    <Components.Input 
                        type='email' 
                        placeholder='Email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Components.Input 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button onClick={handleSignInClick}>Sign In</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>
                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Friend!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
};

export default Auth;