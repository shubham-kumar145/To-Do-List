import React from "react";
import {
  FaXTwitter,
  FaRedditAlien,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 py-10 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Get Started</a></li>
              <li><a href="#" className="hover:underline">Download Apps</a></li>
              <li><a href="#" className="hover:underline">Premium</a></li>
              <li><a href="#" className="hover:underline">Education Offer</a></li>
              <li><a href="#" className="hover:underline">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Translations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">URL Scheme</a></li>
              <li><a href="#" className="hover:underline">Refer Friends & Earn</a></li>
              <li><a href="#" className="hover:underline">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Media</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Terms</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">License</a></li>
              <li><a href="#" className="hover:underline">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">© 2025 SK Team</p>

          <div className="flex items-center gap-4">
            <select className="border border-gray-300 px-3 py-1 rounded focus:outline-none focus:ring focus:ring-blue-200 text-sm">
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>

            <div className="flex gap-3 text-lg">
              <a href="#" className="hover:scale-110 transition"><FaXTwitter className="text-black" /></a>
              <a href="#" className="hover:scale-110 transition"><FaRedditAlien className="text-red-500" /></a>
              <a href="#" className="hover:scale-110 transition"><FaFacebookF className="text-blue-500" /></a>
              <a href="#" className="hover:scale-110 transition"><FaInstagram className="text-pink-500" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
