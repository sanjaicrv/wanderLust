import React, { useState, useMemo } from 'react';
import { Star, Clock, Users, MapPin, Filter, Heart, Eye, ArrowRight } from 'lucide-react';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  price: string;
  originalPrice?: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  category: string;
  featured: boolean;
  tags: string[];
}

interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: string;
}

interface DestinationsProps {
  searchQuery?: SearchData;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: "Bali",
    country: "Indonesia",
    image: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$1,299",
    originalPrice: "$1,599",
    duration: "7 Days",
    rating: 4.8,
    reviews: 156,
    description: "Tropical paradise with stunning beaches, ancient temples, and rich cultural heritage",
    category: "Beach",
    featured: true,
    tags: ["tropical", "beach", "culture", "temples", "paradise"]
  },
  {
    id: 2,
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$2,199",
    duration: "5 Days",
    rating: 4.9,
    reviews: 203,
    description: "Breathtaking mountain views, pristine alpine lakes, and world-class skiing",
    category: "Mountain",
    featured: true,
    tags: ["mountains", "skiing", "lakes", "adventure", "luxury"]
  },
  {
    id: 3,
    name: "Santorini",
    country: "Greece",
    image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$1,599",
    originalPrice: "$1,899",
    duration: "6 Days",
    rating: 4.7,
    reviews: 189,
    description: "Iconic white buildings, spectacular sunsets, and Mediterranean charm",
    category: "Island",
    featured: false,
    tags: ["island", "sunset", "mediterranean", "romantic", "architecture"]
  },
  {
    id: 4,
    name: "Kyoto",
    country: "Japan",
    image: "https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$1,899",
    duration: "8 Days",
    rating: 4.9,
    reviews: 234,
    description: "Ancient temples, traditional gardens, and authentic cultural experiences",
    category: "Cultural",
    featured: true,
    tags: ["culture", "temples", "traditional", "gardens", "authentic"]
  },
  {
    id: 5,
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$1,799",
    duration: "9 Days",
    rating: 4.8,
    reviews: 167,
    description: "Ancient Incan citadel with mystical mountain atmosphere and hiking adventures",
    category: "Adventure",
    featured: false,
    tags: ["adventure", "hiking", "ancient", "mountains", "mystical"]
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    image: "https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$1,499",
    duration: "5 Days",
    rating: 4.6,
    reviews: 298,
    description: "Luxury shopping, futuristic architecture, and desert safari adventures",
    category: "Luxury",
    featured: false,
    tags: ["luxury", "shopping", "modern", "desert", "architecture"]
  },
  {
    id: 7,
    name: "Maldives",
    country: "Maldives",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$2,999",
    originalPrice: "$3,499",
    duration: "7 Days",
    rating: 4.9,
    reviews: 445,
    description: "Overwater bungalows, crystal-clear waters, and ultimate tropical luxury",
    category: "Luxury",
    featured: true,
    tags: ["luxury", "overwater", "tropical", "romantic", "exclusive"]
  },
  {
    id: 8,
    name: "Iceland",
    country: "Iceland",
    image: "https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: "$2,299",
    duration: "6 Days",
    rating: 4.8,
    reviews: 178,
    description: "Northern lights, geysers, waterfalls, and dramatic volcanic landscapes",
    category: "Adventure",
    featured: false,
    tags: ["northern lights", "geysers", "waterfalls", "volcanic", "unique"]
  }
];

const categories = ["All", "Beach", "Mountain", "Island", "Cultural", "Adventure", "Luxury"];

const Destinations: React.FC<DestinationsProps> = ({ searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [favorites, setFavorites] = useState<number[]>([]);

  const filteredAndSortedDestinations = useMemo(() => {
    let filtered = destinations;

    if (searchQuery?.destination) {
      const query = searchQuery.destination.toLowerCase();
      filtered = filtered.filter(dest => 
        dest.name.toLowerCase().includes(query) ||
        dest.country.toLowerCase().includes(query) ||
        dest.tags.some(tag => tag.toLowerCase().includes(query)) ||
        dest.description.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "All") {
      filtered = filtered.filter(dest => dest.category === selectedCategory);
    }

    switch (sortBy) {
      case "price-low":
        return filtered.sort((a, b) => parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, '')));
      case "price-high":
        return filtered.sort((a, b) => parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, '')));
      case "rating":
        return filtered.sort((a, b) => b.rating - a.rating);
      case "reviews":
        return filtered.sort((a, b) => b.reviews - a.reviews);
      default:
        return filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
  }, [searchQuery, selectedCategory, sortBy]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="destinations" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-100 shadow-lg">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Popular Destinations</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Discover Amazing
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Places
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            From tropical paradises to mountain adventures, find your perfect escape with our handpicked destinations
          </p>
        </div>

        {/* Search Results Info */}
        {searchQuery?.destination && (
          <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-2xl">
            <p className="text-blue-800 font-semibold text-lg">
              🔍 Showing results for "<span className="font-bold">{searchQuery.destination}</span>" 
              - {filteredAndSortedDestinations.length} destinations found
            </p>
          </div>
        )}

        {/* Modern Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-16 space-y-6 lg:space-y-0">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-xl transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-4 bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            <Filter className="h-5 w-5 text-gray-500 ml-4" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-transparent text-gray-700 font-medium cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="reviews">Most Reviewed</option>
            </select>
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAndSortedDestinations.map((destination) => (
            <div 
              key={destination.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100"
            >
              {/* Featured Badge */}
              {destination.featured && (
                <div className="absolute top-6 left-6 z-10 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                  ⭐ Featured
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(destination.id)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200 shadow-lg"
              >
                <Heart 
                  className={`h-5 w-5 ${
                    favorites.includes(destination.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-600'
                  }`} 
                />
              </button>

              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    {destination.originalPrice && (
                      <span className="text-gray-500 line-through text-sm font-medium">{destination.originalPrice}</span>
                    )}
                    <span className="text-blue-600 font-bold text-lg">{destination.price}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">{destination.country}</span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{destination.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-semibold text-gray-800">{destination.rating}</span>
                    <span className="text-gray-500 text-sm">({destination.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl transition-all duration-200 font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedDestinations.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">No destinations found</h3>
            <p className="text-gray-600 mb-8 text-lg">Try adjusting your search criteria or browse all destinations</p>
            <button 
              onClick={() => setSelectedCategory("All")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Show All Destinations
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredAndSortedDestinations.length > 0 && (
          <div className="text-center mt-20">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
              🌍 Explore More Destinations
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;