import React, { useEffect, useState } from 'react';
import { getEvent } from '../utils/api';

const EventDetailPage = ({ token }) => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventData = await getEvent(id, token);
        setEvent(eventData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvent();
  }, [id, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching event: {error.message}</p>;

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
