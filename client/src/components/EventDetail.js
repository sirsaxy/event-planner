import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../utils/api';

const EventDetailPage = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEvent(id);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
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
