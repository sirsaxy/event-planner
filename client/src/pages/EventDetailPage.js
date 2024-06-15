import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../utils/api';

const EventDetailPage = () => {
  const { eventId } = useParams(); // Correct parameter name
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const event = await getEvent(eventId);
        setEvent(event);
      } catch (error) {
        setError('Error fetching event. Please try again later.');
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{new Date(event.date).toLocaleString()}</p>
      <p>{event.location}</p>
    </div>
  );
};

export default EventDetailPage;
