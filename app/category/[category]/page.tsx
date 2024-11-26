import React from "react";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import Footer from "@/app/components/Footer";
import {
  FaCalendarAlt,
  FaUsers,
  FaTicketAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
} from "react-icons/fa";
import Categories from "@/app/components/Categories";

interface PageProps {
  params: Promise<{ location: string }>;
}

const LocationPage = async ({ params }: PageProps) => {
  const { location } = await params;

  // Fetch events from the backend based on location
  const backend_url = process.env.NEXT_PUBLIC_BACKEND
  const res = await fetch(`${backend_url}`);
  const filteredEvents = await res.json();

  if (!res.ok) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-gray-600 mt-4">Failed to load events for {location}.</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-screen-xl w-full my-0 mx-auto mb-8">
        <Navbar />

        <SearchBar />

        {/* Breadcrumb */}
        {/* <p className="text-gray-500 text-sm mt-4 mb-4">
          <Link href={"/"}>Home</Link> &gt;{" "}
          <Link href={`/`}>{}</Link>
        </p> */}

        <h1 className="text-3xl font-bold mb-4">Events Near {location}</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Event Tiles */}
          <div className="flex-1 grid grid-cols-1 gap-6 max-w-[800px]">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event: any) => (
                <Link href={`/events/${event.id}`}>
                <div
                  key={event.id}
                  className="flex bg-[#F5F5F5] rounded-3xl overflow-hidden"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-1/3 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-1">
                    <h3 className="font-bold text-2xl text-gray-900 mb-2">
                      {event.title}
                    </h3>

                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaCalendarAlt />
                      <span>{event.date}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaUsers />
                      <span>{event.attendees} Attending</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaUser />
                      <span>Hosted By: {event.host}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaTicketAlt />
                      <span>{event.price}</span>
                    </div>
                    <div className="text-sm text-gray-600 flex items-center gap-2 mb-[1px]">
                      <FaMapMarkerAlt />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="content-end mr-8">
                    <button className="bg-orange-500 text-white rounded-full py-2 px-8 mb-4 hover:bg-orange-600">
                      Attend
                    </button>
                  </div>
                </div>
                </Link>
              ))
            ) : (
              <p>No events found for this location.</p>
            )}
          </div>
          

          {/* Filters */}
          <div className="md:w-1/4 flex flex-col gap-4">
            <h2 className="font-bold text-lg">Filters</h2>
            <select className="border rounded-lg p-2">
              <option>Any Day</option>
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
            <select className="border rounded-lg p-2">
              <option>Any Price</option>
              <option>Free</option>
              <option>Paid</option>
            </select>
            <select className="border rounded-lg p-2">
              <option>Any Category</option>
              <option>Music</option>
              <option>Food</option>
              <option>Sports</option>
            </select>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationPage;
