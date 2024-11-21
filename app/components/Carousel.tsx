"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  title: string;
  data: {
    id: number;
    image: string;
    title: string;
    date: string;
    time: string;
    attendees: number;
    price: string;
    host: string;
    location: string;
  }[];
}

const Carousel: React.FC<CarouselProps> = ({ title, data }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -600,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 600, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-12 max-w-screen-xl w-full my-0 mx-auto">
      {/* Section Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronLeft className="text-gray-800" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <FaChevronRight className="text-gray-800" />
          </button>
        </div>
      </div>

      {/* Cards Carousel */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth"
      >
        {data.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
            time={item.time}
            attendees={item.attendees}
            price={item.price}
            host={item.host}
            location={item.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
