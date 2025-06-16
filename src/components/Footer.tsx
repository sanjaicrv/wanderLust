import { MapPin, Facebook, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mr-3 shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">WanderLust</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              Your trusted travel companion for unforgettable adventures around the world. Creating memories that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-3 bg-gray-800 rounded-2xl hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="p-3 bg-gray-800 rounded-2xl hover:bg-pink-600 transition-colors duration-200 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-3 bg-gray-800 rounded-2xl hover:bg-red-600 transition-colors duration-200 cursor-pointer">
                <Youtube className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Home</span></a></li>
              <li><a href="#destinations" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Destinations</span></a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Services</span></a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Reviews</span></a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Contact</span></a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Flight Booking</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Hotel Reservations</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Car Rentals</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Guided Tours</span></a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2 group"><ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" /><span>Travel Insurance</span></a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">Subscribe to get special offers, travel tips, and destination updates.</p>
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-4 bg-gray-800 text-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700"
              />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-4 rounded-2xl transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                <Mail className="h-5 w-5" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-lg">
              © 2024 WanderLust. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;