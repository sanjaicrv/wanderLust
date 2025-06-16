import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate=useNavigate();
  const handleBookNow = () => {
    navigate('/checkout');
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl mr-3 shadow-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              WanderLust
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50">Home</Link>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50">Destinations</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-semibold py-2 px-4 rounded-xl hover:bg-blue-50">Contact</a>
          </nav>

            <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-xl">
              <Phone className="h-4 w-4 mr-2 text-blue-600" />
              <span className="font-medium">+91 6383921051</span>
            </div>
            <button
              onClick={handleBookNow}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center"
            >
              Book Now
            </button>
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 p-2 rounded-xl hover:bg-blue-50"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-lg border-t border-gray-100 rounded-b-2xl shadow-xl">
              <Link to="/" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold">Home</Link>
              <a href="#destinations" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold">Destinations</a>
              <a href="#services" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold">Services</a>
              <a href="#testimonials" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold">Reviews</a>
              <a href="#contact" className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-200 font-semibold">Contact</a>
              <div className="px-4 py-3 flex items-center text-sm text-gray-600 bg-gray-50 rounded-xl">
                <Phone className="h-4 w-4 mr-2 text-blue-600" />
                <span className="font-medium">+1 (555) 123-4567</span>
              </div>
              <button onClick={handleBookNow} className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 font-semibold shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;