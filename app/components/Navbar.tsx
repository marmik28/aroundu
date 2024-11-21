"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("En");

  const toggleDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageChange = (lang: string) => {
    // Update selected language state
    setSelectedLanguage(lang);

    // Set Google Translate to the selected language
    const googleTranslateElement = document.querySelector("select.goog-te-combo") as HTMLSelectElement;
    if (googleTranslateElement) {
      switch (lang) {
        case "En":
          googleTranslateElement.value = "en";
          break;
        case "Es":
          googleTranslateElement.value = "es";
          break;
        case "Fr":
          googleTranslateElement.value = "fr";
          break;
        default:
          googleTranslateElement.value = "en";
      }
      // Trigger Google Translate
      googleTranslateElement.dispatchEvent(new Event("change"));
    }

    setLanguageDropdownOpen(false);
  };

  useEffect(() => {
    // Load the Google Translate script
    const script = document.createElement("script");
    script.src = `https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit`;
    script.async = true;
    document.body.appendChild(script);

    // Define the global initialization function
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="max-w-screen-xl w-full my-0 mx-auto">
      <nav className="flex justify-between items-center py-3 bg-white">
        {/* Logo */}
        <Link href={"/"}>
          <div className="text-5xl font-semibold text-gray-800">AroundU</div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center gap-1 rounded-full px-3 py-1 text-lg text-gray-800 hover:bg-gray-100 transition"
            >
              <FaGlobe className="text-lg" />
              <span>{selectedLanguage}</span>
            </button>
            {languageDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border rounded shadow-md text-lg">
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  onClick={() => handleLanguageChange("En")}
                >
                  English
                </button>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  onClick={() => handleLanguageChange("Es")}
                >
                  Español
                </button>
                <button
                  className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  onClick={() => handleLanguageChange("Fr")}
                >
                  Français
                </button>
              </div>
            )}
          </div>

          {/* Log In Button */}
          <button className="border rounded-3xl px-4 py-1 text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
            Log In
          </button>

          {/* Sign Up Button */}
          <button className="border rounded-3xl px-4 py-1 text-sm font-medium text-white bg-black hover:bg-gray-800 transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default Navbar;
