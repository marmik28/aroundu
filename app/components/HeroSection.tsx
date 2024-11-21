import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center max-w-screen-xl w-full my-0 mx-auto">
      {/* Left Section: Title and Subtitle */}
      <div className="text-left w-full md:w-1/2 pr-8">
        <h1 className="text-5xl font-medium text-gray-900 mb-6 leading-tight">
          Hey User, <br />
          Discover Local Events
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Explore tailored events around you with ease, from concerts and
          workshops to festivals and local meetups. Your personalized event
          calendar is just a tap away, ensuring you never miss what matters
          most.
        </p>

      </div>

      {/* Right Section: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/rb_5266.png" // Path to your image in the public folder
          alt="Event Illustration"
          style={{width: 600, height: "auto"}}
        />
      </div>
    </div>
  );
};

export default HeroSection;
