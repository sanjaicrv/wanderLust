import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    guests: '2',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-8 border border-blue-100">
            <Mail className="h-5 w-5 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
            Let's Plan Your
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to explore the world? Get in touch with our travel experts and let's create your perfect adventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg text-gray-800">Visit Our Office</h4>
                    <p className="text-gray-600">123 Travel Street, Adventure City, AC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg text-gray-800">Call Us</h4>
                    <p className="text-gray-600">+91 6383921051</p>
                    <p className="text-gray-600">+91 7373773833</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-blue-50 rounded-3xl border border-blue-100">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-2xl shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg text-gray-800">Email Us</h4>
                    <p className="text-gray-600">sanjaicrv05@gmail.com</p>
                    <p className="text-gray-600">727823tuit204@skct.edu.in</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6 p-6 bg-cyan-50 rounded-3xl border border-cyan-100">
                  <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 rounded-2xl shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2 text-lg text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sat - Sun: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 rounded-3xl text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-4">24/7 Emergency Support</h4>
              <p className="text-blue-100 mb-6 text-lg">We're here for you around the clock during your travels</p>
              <p className="font-bold text-xl">Emergency Hotline: +91 (100) HELP-NOW</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-10 rounded-3xl border border-gray-100 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Preferred Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                    placeholder="Where would you like to go?"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Travel Date</label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5+">5+ Guests</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 resize-none bg-white"
                  placeholder="Tell us about your dream vacation..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-2xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;