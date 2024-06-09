import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ handleLogout }) => (
  <nav>
    <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem' }}>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/create-event">Create Event</Link></li>
      <li><button onClick={handleLogout}>Logout</button></li>
    </ul>
  </nav>
);

export default Navbar;
