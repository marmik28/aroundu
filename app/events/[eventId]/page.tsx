import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTicketAlt,
  FaUser,
} from "react-icons/fa";
import fakeData from "@/app/data/fake_event_data.json";
import Link from "next/link";

const EventDetail = async ({ params }: { params: { eventId: string } }) => {
  // Convert params.eventId to a number
  const eventId = parseInt(params.eventId, 10);

  // Find the event by id
  const event = fakeData.find((item) => item.id === eventId);

  if (!event) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">Event Not Found</h1>
        <p className="text-gray-600 mt-4">
          The event you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-screen-xl w-full my-0 mx-auto mb-8">
      < Navbar />
      {/* Breadcrumb */}
      <p className="text-gray-500 text-sm mt-4 mb-4"><Link href={"/"}>Home</Link> &gt; <Link href={`/events/${eventId}`}>{event.title}</Link></p>

       {/* Event Title */}
       <h1 className="text-4xl font-bold mb-4 text-gray-900">{event.title}</h1>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section (Image and Details) */}
        <div className="flex flex-col flex-1 gap-6">

          {/* Image Section */}
          <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              layout="fill"
              className="object-cover"
            />
          </div>

          {/* Details Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Details</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              ultrices, nunc vitae placerat consequat, metus arcu facilisis
              libero, vel facilisis odio elit sit amet ligula. Vivamus maximus
              non nisi eu hendrerit. Suspendisse accumsan arcu ac porttitor
              varius. Sed volutpat metus sit amet sodales faucibus.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Donec suscipit odio at turpis fermentum pharetra. Mauris
              fermentum non elit sed eleifend. Nulla ornare dolor id erat
              posuere ultrices. Sed et consequat sapien.
            </p>
          </div>
        </div>

        {/* Right Section (Event Info) */}
        <div className="w-full lg:w-80 flex-shrink-0">
          
          <div className="bg-gray-100 p-6 rounded-lg shadow">
          <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
            <FaUser className="text-lg text-gray-600" />
            <span className="font-medium">Hosted By: {event.host || "Unknown Host"}</span>
          </div>
          <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-lg text-gray-600" />
            <span className="font-medium">Date: {event.date}</span>
          </div>
          <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
            <FaClock className="text-lg text-gray-600" />
            <span className="font-medium">Time: {event.time || "N/A"}</span>
          </div>
          <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
            <FaMapMarkerAlt className="text-lg text-gray-600" />
            <span className="font-medium">Location: {event.location || "N/A"}</span>
          </div>
          <div className="text-sm text-gray-700 mb-4 flex items-center gap-2">
            <FaTicketAlt className="text-lg text-gray-600" />
            <span className="font-medium">Price: {event.price}</span>
          </div>

          {/* Map (Placeholder for now) */}
          <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <p className="text-gray-500">[Map Placeholder]</p>
          </div>

          {/* Attend Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg w-full">
            Attend
          </button>
          </div>

        </div>
      </div>
    </div>
    < Footer />
    </>
  );
};

export default EventDetail;
