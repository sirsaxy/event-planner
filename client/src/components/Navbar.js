import React from 'react';
import { Link } from 'react-router-dom'; // Make sure Link is imported

const Navbar = ({ handleLogout }) => (
  <nav>
    <ul>
      <li><Link to="/events">Events</Link></li>
      <li><Link to="/create-event">Create Event</Link></li>
      <li><button onClick={handleLogout}>Logout</button></li>
    </ul>
  </nav>
);

export default Navbar;
