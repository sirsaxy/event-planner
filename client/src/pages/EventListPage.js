import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../utils/api';
import EventList from '../components/EventList';

const EventListPage = ({ token }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents(token);
        setEvents(eventsData);
      } catch (err) {
        setError('Error fetching events. Please try again later.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [token]);

  const handleDelete = async (eventId) => {
    try {
      await deleteEvent(eventId, token); // Add token here
      setEvents(events.filter(event => event._id !== eventId));
    } catch (err) {
      console.error('Error deleting event:', err);
      setError('Error deleting event. Please try again later.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Event List</h1>
      <EventList events={events} onDelete={handleDelete} />
    </div>
  );
};

export default EventListPage;
