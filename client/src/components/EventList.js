import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events, onDelete, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Event List</h1>
      {events.length > 0 ? (
        <ul>
          {events.map(event => (
            <li key={event._id}>
              <Link to={`/events/${event._id}`}>{event.title}</Link>
              <button onClick={() => onDelete(event._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <div>No events found.</div>
      )}
    </div>
  );
};

export default EventList;
