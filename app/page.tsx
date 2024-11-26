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
  const backend_url = process.env.NEXT_PUBLIC_BACKEND
  useEffect(() => {
    const fetchEvents = async () => {
      console.log("ENV: ", backend_url)
      try {
        const response = await axios.get(`${backend_url}`);
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
      console.log("data: ", events)
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
