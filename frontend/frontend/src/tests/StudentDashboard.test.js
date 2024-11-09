import React from 'react';
import { render, screen } from '@testing-library/react';
import StudentDashboard from '../components/StudentDashboard';
import StudentNavbar from '../components/StudentNavBar';

jest.mock('../components/StudentNavBar', () => () => <div>StudentNavbar</div>);

test('renders StudentNavbar component', () => {
  render(<StudentDashboard />);
  const navbarElement = screen.getByText(/StudentNavbar/i);
  expect(navbarElement).toBeInTheDocument();
});