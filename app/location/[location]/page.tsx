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

interface PageProps {
  params: Promise<{ location: string }>;
}

const LocationPage = async ({ params }: PageProps) => {
  const { location } = await params;

  // Fetch events from the backend based on location
  const backend_url = process.env.NEXT_PUBLIC_BACKEND;
  const res = await fetch(`${backend_url}location/${location}`);
  const filteredEvents = await res.json();

  if (!res.ok) {
    return (
      <div className="text-center py-16">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-gray-600 mt-4">
          Failed to load events for {location}.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-screen-xl w-full my-0 mx-auto mb-8">
        <Navbar />

        <SearchBar />

        {/* Breadcrumb */}
        <p className="text-gray-500 text-sm mt-4 mb-4">
          <Link href={"/"}>Home</Link> &gt;{" "}
          <Link href={`/location/${location}`}>{location}</Link>
        </p>

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

          <div className="md:w-1/4 flex flex-col gap-4 p-4">
            <h2 className="font-bold text-xl">Filters</h2>

            {/* Date Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Date</label>
              <select className="border rounded-lg p-2">
                <option>Any Day</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>Weekend</option>
                <option>This Month</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Category</label>
              <select className="border rounded-lg p-2">
                <option>Any Category</option>
                <option>Social Activities</option>
                <option>Hobbies</option>
                <option>Sports</option>
                <option>Workshops</option>
                <option>Networking</option>
                <option>Art & Culture</option>
              </select>
            </div>


            {/* Price Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Price Range</label>
              <input
                type="range"
                min="0"
                max="500"
                step="10"
                className="w-full"
              />
              <div className="text-sm text-gray-500">Up to $500</div>
            </div>

            {/* Location Radius Filter */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Search Radius</label>
              <input
                type="range"
                min="1"
                max="100"
                step="1"
                className="w-full"
              />
              <div className="text-sm text-gray-500">{`Within ${100} km`}</div>
            </div>

            {/* Additional Features */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Features</label>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="free" />
                <label htmlFor="free" className="text-sm">
                  Free Events
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="outdoor" />
                <label htmlFor="outdoor" className="text-sm">
                  Outdoor Events
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="familyFriendly" />
                <label htmlFor="familyFriendly" className="text-sm">
                  Family Friendly
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationPage;
