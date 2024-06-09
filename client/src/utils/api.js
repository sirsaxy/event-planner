import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Set up axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
});

// Add JWT token to the request headers if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const login = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data;
  } catch (err) {
    console.error('Error fetching events:', err);
    throw err;
  }
};

export const getEvent = async (id) => {
  try {
    const response = await api.get(`/events/${id}`);
    return response.data;
  } catch (err) {
    console.error('Error fetching event:', err);
    throw err;
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const createEvent = async (eventData) => {
  try {
    const response = await api.post('/events', eventData);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const addGuest = async (eventId, guestData) => {
  try {
    const response = await api.post(`/events/${eventId}/guests`, guestData);
    return response.data;
  } catch (error) {
    console.error('Error adding guest:', error);
    throw error;
  }
};

export const deleteGuest = async (eventId, guestId) => {
  try {
    const response = await api.delete(`/events/${eventId}/guests/${guestId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting guest:', error);
    throw error;
  }
};

export const deleteEvent = async (eventId) => {
  try {
    const response = await api.delete(`/events/${eventId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};
