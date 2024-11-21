import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

interface CardProps {
  id: number;
  image: string;
  title: string;
  date: string;
  time: string;
  attendees: number;
  price: string;
  host: string;
  location: string;
}

const Card: React.FC<CardProps> = ({
  id,
  image,
  title,
  date,
  attendees,
  price,
  location,
}) => {
  return (
    <Link
      href={`/events/${id}`}
      className="block bg-[#f5f5f5] rounded-3xl overflow-hidden w-[280px] flex-shrink-0 hover:shadow-lg transition-shadow"
    >
      {/* Image Section */}
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-lg"
        />
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-2">{title}</h3>
        <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
          <FaCalendarAlt />
          <span>{date}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2 mb-1">
          <FaUsers />
          <span>{attendees} Attending</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <FaTicketAlt />
          <span>{price}</span>
        </div>
        <div className="text-sm text-gray-600 flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
