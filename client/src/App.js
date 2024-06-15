import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreateEventPage from './pages/CreateEventPage';
import EventListPage from './pages/EventListPage';
import EventDetailPage from './pages/EventDetailPage';
import Navbar from './components/Navbar';

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <Router>
      <div>
        {token && <Navbar handleLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={token ? <Navigate to="/events" /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage setToken={setToken} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-event" element={token ? <CreateEventPage token={token} /> : <Navigate to="/login" />} />
          <Route path="/events" element={token ? <EventListPage token={token} /> : <Navigate to="/login" />} />
          <Route path="/events/:eventId" element={token ? <EventDetailPage token={token} /> : <Navigate to="/login" />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
