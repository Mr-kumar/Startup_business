'use client';
import React, { useState } from 'react';
import { AiFillCheckCircle, AiOutlineArrowRight } from 'react-icons/ai';
import { FaWhatsapp, FaRegHandshake } from 'react-icons/fa';
import { FiCheck, FiChevronDown } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const WHATSAPP_NUMBER = '919999999999'; // Configurable WhatsApp number

const Registration: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    state: '',
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
    '1 Month Free Return Filing',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation for phone number
    if (!/^\d{10}$/.test(formData.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitted(true);

    // Simulate API call
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
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white rounded-3xl shadow-2xl p-10 flex flex-col border border-gray-100/50 backdrop-blur-sm"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              GST Registration Made Effortless
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Let our CA-certified experts handle your GST registration while you focus on your business.
            </p>

            {/* Features Carousel */}
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
                        className={`flex items-center p-3 rounded-xl ${
                          i === activeFeature ? 'bg-[#1D293D]/5 border border-[#1D293D]/10' : ''
                        }`}
                      >
                        <AiFillCheckCircle className="text-[#7DD956] text-2xl mr-3 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{text}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100/50 backdrop-blur-sm relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-[#1D293D] mb-2">Get Expert Assistance</h2>
                <p className="text-gray-600 mb-6">Fill this form for a free consultation</p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#7DD956]/10 p-6 rounded-xl text-center"
                  >
                    <h3 className="text-xl font-bold text-[#1D293D] mb-2">Thank You!</h3>
                    <p className="text-gray-600">Our expert will contact you shortly</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      required
                      aria-label="Your Name"
                    />
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      required
                      aria-label="Email Address"
                    />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="Mobile Number"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      required
                      aria-label="Mobile Number"
                    />
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl"
                      required
                      aria-label="State"
                    >
                      <option value="">Select State</option>
                      <option value="MH">Maharashtra</option>
                      <option value="DL">Delhi</option>
                      <option value="KA">Karnataka</option>
                    </select>
                    <div className="flex items-center space-x-2">
                      <input
                        id="whatsapp"
                        type="checkbox"
                        checked={whatsappConsent}
                        onChange={() => setWhatsappConsent((prev) => !prev)}
                        className="h-5 w-5"
                      />
                      <label htmlFor="whatsapp" className="text-gray-700">
                        Get updates on WhatsApp
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#1D293D] to-[#3A4B6B] text-white font-bold py-4 rounded-xl"
                    >
                      GET STARTED NOW
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-8 right-8 bg-[#7DD956] p-5 rounded-full shadow-xl text-white text-2xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
    </div>
  );
};

export default Registration;