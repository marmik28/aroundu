"use client";
import React, { useState } from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locations] = useState(["Vancouver", "Toronto", "Montreal", "Ottawa"]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter locations based on the search query
  const filteredLocations = locations.filter((location) =>
    location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationClick = (location: string) => {
    setSearchQuery(location); // Set the clicked location in the input
    setDropdownOpen(false); // Close the dropdown
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown state
  };

  return (
    <div className="flex items-center justify-center w-full max-w-2xl mx-auto mt-6">
      {/* Event Search Input */}
      <div className="flex items-center bg-[#F5F5F5] border rounded-l-full w-1/2 px-4 py-2 shadow-sm">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search Events"
          className="w-full bg-[#F5F5F5] outline-none text-gray-700"
        />
      </div>

      {/* Location Dropdown with Search */}
      <div className="flex flex-col relative border rounded-r-full w-1/2 px-4 py-2 shadow-sm">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Location"
            className="w-full outline-none text-gray-700 bg-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onClick={toggleDropdown} // Open/close the dropdown when clicked
          />
        </div>
        {dropdownOpen && filteredLocations.length > 0 && (
          <div className="absolute top-full left-0 mt-1 w-full bg-white border shadow-md rounded-lg z-10">
            {filteredLocations.map((location, index) => (
              <div
                key={index}
                onClick={() => handleLocationClick(location)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {location}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
