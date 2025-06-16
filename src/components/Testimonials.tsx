import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "WanderLust made our honeymoon in Bali absolutely magical. Every detail was perfectly planned, and their local guides showed us hidden gems we never would have found on our own.",
    trip: "Bali Honeymoon Package"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "The Swiss Alps adventure exceeded all expectations. The accommodations were luxurious, the activities were thrilling, and the customer service was exceptional throughout.",
    trip: "Swiss Alps Adventure"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    text: "Exploring Japan with WanderLust was a dream come true. Their cultural insights and authentic experiences made this trip unforgettable. Highly recommend!",
    trip: "Japan Cultural Tour"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-100 shadow-lg">
            <Star className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Customer Reviews</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            What Our Travelers
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Real stories from real travelers who trusted us with their dream vacations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-10 w-10 text-blue-200" />
                </div>

                <p className="text-gray-700 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-2xl object-cover mr-4 shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm font-medium">{testimonial.location}</p>
                    <p className="text-blue-600 text-sm font-semibold">{testimonial.trip}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-6 bg-white px-12 py-6 rounded-3xl shadow-xl border border-gray-100">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-800 font-bold text-xl">4.9 out of 5</span>
            <span className="text-gray-500 font-medium">Based on 2,847+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;