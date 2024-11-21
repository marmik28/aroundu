import React from 'react';

// Assuming the Event interface is defined elsewhere or in this file
interface Event {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  attendees: number;
  price: string;
  host: string;
  location: string;
  detail: string;
}

interface EventTileProps {
  event: Event;
}

const EventTile: React.FC<EventTileProps> = ({ event }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={event.image} alt={event.title} className="w-full h-32 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p>{event.price}</p>
    </div>
  );
};

export default EventTile;
