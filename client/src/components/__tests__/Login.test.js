import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from '../Login';

test('renders Login component', () => {
  render(<LoginPage setToken={() => {}} />);
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
  expect(screen.getByText('Login')).toBeInTheDocument();
});

test('submits form correctly', async () => {
  const mockSetToken = jest.fn();
  render(<LoginPage setToken={mockSetToken} />);
  
  fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password' } });
  fireEvent.click(screen.getByText('Login'));

  // Add your assertion here based on what the form submission does
});
