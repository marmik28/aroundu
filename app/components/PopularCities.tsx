import React from "react";
import Link from "next/link";

const cities = [
  { name: "Toronto", image: "/toronto.jpeg"},
  { name: "Vancouver", image: "/vancouver.jpeg"},
  { name: "Montreal", image: "/montreal.jpeg"},
  { name: "Ottawa", image: "/ottawa.jpeg"},
];

const PopularCities: React.FC = () => {
  return (
    <div className="mb-12 max-w-screen-xl w-full my-0 mx-auto">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Popular Cities</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <Link
            key={index}
            href={`/location/${city.name}`}
            className="block text-center hover:scale-110 transform transition-transform duration-300"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-md">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-lg font-semibold text-gray-800">{city.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
