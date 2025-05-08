'use client'
import React, { useState } from 'react';
import { AiFillCheckCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { FaWhatsapp, FaRegHandshake } from 'react-icons/fa';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: ''
  });
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    'Document Preparation',
    'Get ARN in 2-3 Days',
    'GST Certificate',
    'Free Expert Consultation',
    'HSN/SAC Code Guidance',
    '1 Month Free Return Filing'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // API call would go here
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-16 px-4 sm:px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#1D293D]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/4 bottom-0 w-80 h-80 bg-[#7DD956]/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Premium Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white rounded-3xl shadow-2xl p-10 flex flex-col border border-gray-100/50 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6">
              <div className="bg-[#1D293D] text-white px-3 py-1 rounded-full text-sm font-medium">
                Trusted by 42,868+ Businesses
              </div>
              <div className="ml-3 flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-gray-600">4.8/5</span>
              </div>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D293D] to-[#3A4B6B]">GST Registration</span><br />
              Made Effortless
            </h1>

            <h2 className="text-2xl font-semibold text-gray-700 mb-6">
              Starting at <span className="text-3xl font-bold text-[#1D293D]">₹499</span> <span className="text-gray-500 text-lg">+ Govt Fees</span>
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Let our <span className="font-semibold text-[#1D293D]">CA-certified experts</span> handle your GST registration while you focus on your business. 
              <span className="block mt-2 text-[#7DD956] font-medium">20 Lakh+ Hours Saved for Indian Entrepreneurs</span>
            </p>

            {/* Animated Features Carousel */}
            <div className="mb-10">
              <h3 className="text-xl font-medium text-[#1D293D] mb-6 flex items-center">
                <FaRegHandshake className="mr-2 text-[#7DD956]" />
                What You Get:
              </h3>
              <div className="relative h-40 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.ul
                    key={activeFeature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-3 absolute inset-0"
                  >
                    {features.map((text, i) => (
                      <motion.li 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={`flex items-center p-3 rounded-xl ${i === activeFeature ? 'bg-[#1D293D]/5 border border-[#1D293D]/10' : ''}`}
                      >
                        <AiFillCheckCircle className="text-[#7DD956] text-2xl mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{text}</span>
                        {i === activeFeature && (
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="ml-auto text-sm text-[#7DD956] font-medium flex items-center"
                          >
                            Included <FiCheck className="ml-1" />
                          </motion.span>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
              <div className="flex justify-center mt-4 space-x-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveFeature(i)}
                    className={`w-2 h-2 rounded-full ${i === activeFeature ? 'bg-[#7DD956]' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
            </div>

            {/* Premium Stats */}
            <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '3 Days', label: 'Average Processing' },
                { value: '99.7%', label: 'Success Rate' },
                { value: '50+', label: 'CA Experts' },
                { value: '24/7', label: 'Support' }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-[#1D293D]/5 p-4 rounded-xl text-center border border-[#1D293D]/10"
                >
                  <p className="text-2xl font-bold text-[#1D293D]">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Luxury Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            {/* Premium Ribbon */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[#1D293D] to-[#3A4B6B] text-white px-6 py-2 rounded-lg shadow-xl flex items-center z-10">
              <div className="absolute -left-1 top-1/2 w-3 h-3 bg-[#1D293D] transform -translate-y-1/2 rotate-45"></div>
              <span className="text-sm font-semibold">Limited Time Offer</span>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100/50 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#7DD956]/10 rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#1D293D]/5 rounded-full"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-[#1D293D] mb-2">Get Expert Assistance</h2>
                <p className="text-gray-600 mb-6">Fill this form for a free consultation</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#7DD956]/10 p-6 rounded-xl text-center"
                  >
                    <div className="w-16 h-16 bg-[#7DD956] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiCheck className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1D293D] mb-2">Thank You!</h3>
                    <p className="text-gray-600">Our expert will contact you shortly</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7DD956] focus:border-transparent bg-white/50"
                        required
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7DD956] focus:border-transparent bg-white/50"
                        required
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex">
                        <select className="px-4 py-3 border border-gray-200 rounded-l-xl focus:outline-none bg-gray-50 text-gray-700 appearance-none pl-10 pr-8">
                          <option>+91</option>
                        </select>
                        <input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          placeholder="Mobile Number"
                          className="flex-1 px-4 py-3 border-t border-b border-r border-gray-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-[#7DD956] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>

                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full px-4 py-3 pl-12 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7DD956] focus:border-transparent bg-white/50 appearance-none pr-8"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="MH">Maharashtra</option>
                        <option value="DL">Delhi</option>
                        <option value="KA">Karnataka</option>
                      </select>
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <FiChevronDown />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-3 bg-[#7DD956]/5 rounded-lg">
                      <input
                        id="whatsapp"
                        type="checkbox"
                        checked={whatsappConsent}
                        onChange={() => setWhatsappConsent(!whatsappConsent)}
                        className="h-5 w-5 text-[#7DD956] rounded border-gray-300 focus:ring-[#7DD956]"
                      />
                      <label htmlFor="whatsapp" className="text-gray-700 flex items-center space-x-2">
                        <FaWhatsapp className="text-[#7DD956]" />
                        <span>Get updates on WhatsApp</span>
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-[#1D293D] to-[#3A4B6B] text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center space-x-2"
                    >
                      <span>GET STARTED NOW</span>
                      <AiOutlineArrowRight />
                    </motion.button>

                    <div className="text-center text-xs text-gray-500 mt-4">
                      <p>By submitting, you agree to our Terms & Privacy Policy</p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Luxury Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919999999999"
        className="fixed bottom-8 right-8 bg-[#7DD956] p-5 rounded-full shadow-xl text-white text-2xl hover:bg-[#6BC84D] transition-colors flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
        <span className="absolute -right-1 -top-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs animate-pulse">!</span>
      </motion.a>
    </div>
  );
};

export default Registration;