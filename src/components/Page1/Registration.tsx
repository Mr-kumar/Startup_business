"use client";
import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaWhatsapp, FaRegHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "919999999999"; // Configurable WhatsApp number

interface RegisterProps {
  title: string;
}

const Registration: React.FC<RegisterProps> = ({ title }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [whatsappConsent, setWhatsappConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFeature] = useState(0);

  const features = [
    "Personalized Expert Guidance",
    "Hassle-Free Documentation",
    "Fast & Transparent Process",
    "Dedicated Support Team",
    "Affordable & Flexible Plans",
    "Secure & Confidential Handling",
    "Timely Updates & Reminders",
    
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageTitle: title, // Adding the title from props
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        date: "", // reset
        time: "", // reset
      });

      setMessage("Thank you! We will contact you shortly.");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
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
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-white rounded-3xl shadow-2xl px-10 py-8 flex flex-col border border-gray-100/50 backdrop-blur-sm"
          >
            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Registration Form
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Let our CA-certified experts handle your{" "}
              <span className="font-semibold text-[#1D293D]">
                business registrations
              </span>
              , legal compliance, and tax needs — while you focus on growing
              your business with peace of mind.
            </p>

            {/* Features List */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#1D293D] mb-6 flex items-center">
                <FaRegHandshake className="mr-2 text-[#7DD956]" />
                What You Get:
              </h3>
              <ul className="space-y-3">
                {features.map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#E8FBEA] to-[#F9FFFB] border border-[#7DD956]/30 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <AiFillCheckCircle className="text-[#7DD956] text-2xl mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 relative"
          >
            {/* Ribbon */}
            <div className="absolute -top-4 -right-4 z-10">
              <div className="relative bg-[#7DD756] text-white px-6 py-2 rounded-lg shadow-xl">
                <div className="text-center font-bold">
                  <p className="text-sm leading-tight">
                    Upto <span className="text-yellow-200">50% OFF</span>
                  </p>
                  <p className="text-xs">Money Back Guarantee</p>
                </div>
                <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-[#7DD756] border-r-8 border-r-transparent"></div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D293D] to-[#7DD756]"></div>
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#7DD756]/10 -z-1"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#1D293D]/10 -z-1"></div>

              <h3 className="text-2xl font-bold text-center text-[#1D293D] mb-6">
                Free Consultation by Expert
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-4">
                  {/* Name */}
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                  />

                  {/* Email */}
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                  />

                  {/* Phone */}
                  <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-[#7DD756] focus-within:border-transparent transition-all duration-200">
                    <span className="px-4 py-3 bg-gray-100 text-gray-600">
                      +91
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Mobile Number"
                      required
                      className="w-full px-4 py-3 bg-transparent focus:outline-none"
                    />
                  </div>

                  {/* State / UT */}
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent appearance-none bg-white transition-all duration-200"
                  >
                    <option value="">Select State / Union Territory</option>
                    {/* States */}
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>

                    {/* Union Territories */}
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Dadra and Nagar Haveli and Daman and Diu">
                      Dadra and Nagar Haveli and Daman and Diu
                    </option>
                    <option value="Delhi">Delhi</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                  </select>

                  <div className="flex space-x-4">
                    {/* Date */}
                    <div className="flex-1">
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split("T")[0]} // ✅ Prevent past dates
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    {/* Time */}
                    <div className="w-28 relative">
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 pr-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* WhatsApp Updates */}
                <div className="flex items-center">
                  <input
                    id="whatsapp-updates"
                    type="checkbox"
                    className="h-4 w-4 text-[#7DD756] focus:ring-[#7DD756] border-gray-300 rounded"
                  />
                  <label
                    htmlFor="whatsapp-updates"
                    className="ml-2 text-sm text-gray-700 flex items-center"
                  >
                    <svg
                      className="w-4 h-4 ml-1 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="ml-1">Receive updates on WhatsApp</span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-[#1D293D] to-[#1D293D]/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                >
                  {loading ? "SUBMITTING..." : "GET STARTED NOW"}
                </button>

                {message && (
                  <div
                    className={`mt-2 text-sm text-center ${
                      message.includes("error")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>

              <div className="mt-6 flex items-center justify-center">
                <p className="ml-2 text-sm text-gray-600">
                  Rated 4.9 by 42,817+ Customers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* <motion.a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="fixed bottom-8 right-8 bg-[#7DD956] p-5 rounded-full shadow-xl text-white text-2xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </motion.a> */}
    </div>
  );
};

export default Registration;
