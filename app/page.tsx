import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import SearchBar from "@/app/components/SearchBar";
import Carousel from "@/app/components/Carousel";
import eventData from "@/app/data/fake_event_data.json";
import Footer from "@/app/components/Footer";
import PopularCities from "./components/PopularCities";

export default function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <HeroSection />
      <div className="px-8 pt-12">
        <Carousel title="Trending Near You" data={eventData} />
        <Carousel title="Recommended For You" data={eventData} />
      </div>
      <PopularCities />
      < Footer />
    </>
  );
}
