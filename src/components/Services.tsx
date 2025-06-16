import React from 'react';
import { Plane, Hotel, Car, Camera, Shield, Headphones, Sparkles, Award, Globe, Clock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: "Flight Booking",
    description: "Find and book the best flights at competitive prices with our extensive airline partnerships worldwide",
    color: "from-blue-500 to-cyan-500",
    features: ["Best Price Guarantee", "24/7 Flight Support", "Easy Cancellation"]
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description: "From luxury resorts to budget-friendly stays, we have accommodations for every traveler's needs",
    color: "from-cyan-500 to-blue-600",
    features: ["Verified Reviews", "Instant Confirmation", "Free Cancellation"]
  },
  {
    icon: Car,
    title: "Car Rentals",
    description: "Reliable vehicle rentals for your ground transportation needs in any destination worldwide",
    color: "from-blue-600 to-cyan-600",
    features: ["Premium Vehicles", "GPS Navigation", "Insurance Included"]
  },
  {
    icon: Camera,
    title: "Guided Tours",
    description: "Expert local guides to show you hidden gems and provide authentic cultural experiences",
    color: "from-cyan-600 to-blue-500",
    features: ["Local Experts", "Small Groups", "Cultural Immersion"]
  },
  {
    icon: Shield,
    title: "Travel Insurance",
    description: "Comprehensive coverage to protect your investment and give you complete peace of mind",
    color: "from-blue-500 to-cyan-500",
    features: ["Medical Coverage", "Trip Protection", "24/7 Assistance"]
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you throughout your entire travel journey",
    color: "from-cyan-500 to-blue-600",
    features: ["Instant Response", "Multi-language", "Emergency Help"]
  }
];

const stats = [
  { icon: Globe, number: "150+", label: "Countries Covered" },
  { icon: Award, number: "50K+", label: "Happy Travelers" },
  { icon: Clock, number: "24/7", label: "Customer Support" },
  { icon: Sparkles, number: "4.9★", label: "Average Rating" }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-8 border border-blue-100">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Premium Services</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Everything You
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Need
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-16">
            Complete travel solutions designed to make your journey seamless, memorable, and absolutely unforgettable
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group border border-gray-100 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`flex items-center justify-center w-24 h-24 bg-gradient-to-r ${service.color} rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                  <service.icon className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">{service.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                      <span className="text-gray-600 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2`}>
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-16 text-white text-center relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
              <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full"></div>
              <div className="absolute bottom-10 left-1/4 w-16 h-16 border border-white rounded-full"></div>
              <div className="absolute bottom-20 right-1/3 w-12 h-12 border border-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Ready for Adventure?</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Start Your Dream Journey Today</h3>
              <p className="text-xl mb-12 text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Let our travel experts create a personalized itinerary that matches your dreams and budget perfectly
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                  <span>🎯 Get Free Consultation</span>
                </button>
                <button className="border-2 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>📞 Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;