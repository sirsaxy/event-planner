import React, { useState } from 'react';
import { createEvent } from '../utils/api';

const CreateEventPage = ({ token }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEvent(token, { title, description, date, location });
      console.log('Event created:', response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" required />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default CreateEventPage;
