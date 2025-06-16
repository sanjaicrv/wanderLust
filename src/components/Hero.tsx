import React, { useState } from 'react';
import { Search, Calendar, Users, MapPin, Sparkles, Play } from 'lucide-react';

interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface HeroProps {
  onSearch: (searchData: SearchData) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchData, setSearchData] = useState<SearchData>({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: '2'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchData);
    document.getElementById('destinations')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleInputChange = (field: keyof SearchData, value: string) => {
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 pt-20">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-100 shadow-lg">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">✨ World's Premier Travel Platform</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gray-800">Discover Your Next</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Adventure
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore breathtaking destinations, create unforgettable memories, and embark on journeys that will transform your perspective on the world
          </p>
        </div>

        {/* Enhanced Modern Search Bar */}
        <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto mb-16 border border-white/50">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2 relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                <input 
                  type="text" 
                  placeholder="Where would you like to go?" 
                  value={searchData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-700 font-medium placeholder-gray-400"
                />
              </div>
            </div>
            
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-500" />
                <input 
                  type="date" 
                  value={searchData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-700 font-medium"
                />
              </div>
            </div>
            
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-cyan-500" />
                <input 
                  type="date" 
                  value={searchData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-700 font-medium"
                />
              </div>
            </div>
            
            <div className="relative group">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Guests</label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500" />
                <select 
                  value={searchData.guests}
                  onChange={(e) => handleInputChange('guests', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-100 rounded-xl focus:border-blue-500 focus:bg-white transition-all duration-300 outline-none text-gray-700 font-medium appearance-none cursor-pointer"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-5 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <Search className="h-6 w-6" />
            <span>Search Amazing Destinations</span>
          </button>
        </form>

        {/* Modern CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2">
            <MapPin className="h-5 w-5" />
            <span>Explore Destinations</span>
          </button>
          <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50 flex items-center justify-center space-x-2">
            <Play className="h-5 w-5" />
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 animate-bounce">
          <span className="text-gray-500 text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;