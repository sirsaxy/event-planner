import React, { useState } from 'react';
import { registerUser } from '../../utils/api';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      alert('Registration successful');
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange} required>
        <option value="">Select Role</option>
        <option value="Coordinator">Coordinator</option>
        <option value="Vendor">Vendor</option>
        <option value="Guest">Guest</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
