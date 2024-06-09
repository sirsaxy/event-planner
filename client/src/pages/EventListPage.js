import React, { useEffect, useState } from 'react';
import { getEvents } from '../utils/api';

const EventListPage = ({ token }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getEvents(token);
        setEvents(eventsData);
      } catch (err) {
        console.error('Error fetching events:', err);
      }
    };

    fetchEvents();
  }, [token]);

  return (
    <div>
      <h1>Event List</h1>
      {events.map((event) => (
        <div key={event._id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventListPage;
