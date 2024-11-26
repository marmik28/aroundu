import Link from "next/link";
import React from "react";
import {
  FaTree,
  FaUsers,
  FaGuitar,
  FaFootballBall,
  FaHeart,
  FaTheaterMasks,
} from "react-icons/fa";

interface Category {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Travel and Outdoor",
    icon: <FaTree className="text-green-500 text-2xl" />,
  },
  {
    id: 2,
    title: "Social Activities",
    icon: <FaUsers className="text-purple-500 text-2xl" />,
  },
  {
    id: 3,
    title: "Hobbies and Passions",
    icon: <FaGuitar className="text-yellow-500 text-2xl" />,
  },
  {
    id: 4,
    title: "Sports and Fitness",
    icon: <FaFootballBall className="text-blue-500 text-2xl" />,
  },
  {
    id: 5,
    title: "Health and Wellbeing",
    icon: <FaHeart className="text-green-600 text-2xl" />,
  },
  {
    id: 6,
    title: "Art and Culture",
    icon: <FaTheaterMasks className="text-yellow-600 text-2xl" />,
  },
];

const Categories: React.FC = () => {
  return (
    <div className="mb-6 max-w-screen-xl w-full my-0 mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore Top Categories
        </h2>
      </div>
      <div className="flex justify-center gap-4 py-4 overflow-x-auto scrollbar-hide">
      {categories.map((category, index) => (
          <Link
            key={index}
            href={`/category/${category.title}`}
            className="block text-center hover:scale-110 transform transition-transform duration-300"
          >
          <div
            key={category.id}
            className="flex flex-col items-center w-48 p-4 border rounded-lg shadow-sm hover:shadow-lg hover:bg-gray-100 transition duration-300"
          >
            {category.icon}
            <h3 className="text-base font-semibold mt-4 text-center">
              {category.title}
            </h3>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
