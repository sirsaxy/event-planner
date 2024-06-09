import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events, onDelete }) => {
  return (
    <div>
      <h1>Event List</h1>
      <ul>
        {events.map(event => (
          <li key={event._id}>
            <Link to={`/events/${event._id}`}>{event.title}</Link>
            <button onClick={() => onDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
