import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import CreateEvent from './components/CreateEvent';
import EventListPage from './pages/EventListPage';
import EventDetail from './components/EventDetail';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  return (
    <Router>
      <div>
        {token && <Navbar handleLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-event" element={<CreateEvent token={token} />} />
          <Route path="/events" element={<EventListPage token={token} />} />
          <Route path="/events/:eventId" element={<EventDetail token={token} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
