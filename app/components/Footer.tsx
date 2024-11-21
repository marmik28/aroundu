import Link from "next/link";
import React from "react";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F5F5] py-8 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Create Event Section */}
        <div className="flex items-center mb-8">
          <h2 className="text-xl font-bold pr-4">Create Your Own Event.</h2>
          <button className="border border-gray-900 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition">
            <Link href={"/eventdetail"}>Create Event</Link>
          </button>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-700">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">Your Account</h3>
            <ul className="space-y-2">
              <li>Sign Up</li>
              <li>Log In</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Events</h3>
            <ul className="space-y-2">
              <li>Online Events</li>
              <li>Host an Event</li>
              <li>Help</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">AroundU</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Blogs</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">Socials</h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Tiktok</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 flex justify-between items-center text-gray-500 text-sm">
          <p>&copy; {currentYear} AroundU</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
