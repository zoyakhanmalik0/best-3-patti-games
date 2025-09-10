import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-400 text-lg">Get in touch with our support team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black rounded-xl p-8 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center space-x-2">
                <MessageSquare className="h-6 w-6 text-cyan-400" />
                <span>Send us a Message</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="technical">Technical Support</option>
                    <option value="download">Download Issues</option>
                    <option value="game-request">Game Request</option>
                    <option value="bug-report">Bug Report</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 justify-center"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Support Hours */}
              <div className="bg-black rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span>Support Hours</span>
                </h3>
                <div className="space-y-2 text-gray-300">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM PKT</p>
                  <p>Saturday, Sunday: Closed</p>
                  <p className="text-green-400 font-medium mt-3">
                    Average response time: 2-4 hours
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="bg-black rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-white">Other Ways to Reach Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">best3pattigame@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-purple-400" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400 text-sm">123 Gaming Street<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-6 border border-cyan-500/20">
                <h3 className="text-xl font-bold mb-3 text-white">Need Quick Help?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Check our FAQ page for instant answers to common questions.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Download Issues", "Installation", "System Requirements"].map((tag, index) => (
                    <span key={index} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;