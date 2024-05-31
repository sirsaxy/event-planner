import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001', // Updated port to 5001
});

export const fetchExampleData = () => API.get('/');
