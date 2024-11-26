"use client"
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import SearchBar from "@/app/components/SearchBar";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import PopularCities from "./components/PopularCities";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Navbar />
      <SearchBar />
      <HeroSection />
      <div className="px-8 pt-12">
        <Carousel title="Trending Near You" data={events} />
        <Carousel title="Recommended For You" data={events} />
      </div>
      <PopularCities />
      < Footer />
    </>
  );
}
