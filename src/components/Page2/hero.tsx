"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    date: "",
    time: "",
  });
  // OTP state
  const [otpStep, setOtpStep] = useState<"form" | "otp" | "success">("form");
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // add near your other useState lines
  const MAX_OTP_ATTEMPTS = 3;
  const LOCKOUT_SECONDS = 2 * 60; // 2 minutes lockout
  const [otpAttempts, setOtpAttempts] = useState<number>(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);
  const [lockRemaining, setLockRemaining] = useState(0);

  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Countdown for OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  useEffect(() => {
    const v = localStorage.getItem("otpLockedUntil");
    if (v) setLockedUntil(parseInt(v, 10));
  }, []);

  // Countdown timer for OTP resend
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    if (lockedUntil) {
      localStorage.setItem("otpLockedUntil", String(lockedUntil));
    } else {
      localStorage.removeItem("otpLockedUntil");
    }
  }, [lockedUntil]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendOTP = async () => {
    if (!formData.email) {
      setMessage("Please enter your email address");
      return;
    }
    setOtpLoading(true);
    setMessage("");
    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      if (!res.ok)
        throw new Error((await res.json()).error || "Failed to send OTP");
      setOtpStep("otp");
      setCountdown(60);
      setMessage("OTP sent to your email address");
      // reset client-side attempt state when a fresh OTP is issued
      setOtpAttempts(0);
      setLockedUntil(null);
    } catch (err: any) {
      setMessage(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  };
  // countdown updater
  useEffect(() => {
    if (!lockedUntil) {
      setLockRemaining(0);
      return;
    }

    const tick = () => {
      const rem = Math.max(0, Math.ceil((lockedUntil - Date.now()) / 1000));
      setLockRemaining(rem);

      if (rem === 0) {
        setLockedUntil(null);
        setOtpAttempts(0); // reset attempts when lock expires
      }
    };

    tick(); // run immediately
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lockedUntil]);

  const verifyOTP = async () => {
    if (lockedUntil && Date.now() < lockedUntil) {
      setMessage(`Too many failed attempts. Try again after ${lockRemaining}s`);
      return;
    }

    if (!otp || otp.length !== 6) {
      setMessage("Please enter a valid 6-digit OTP");
      return;
    }

    if (otpAttempts >= MAX_OTP_ATTEMPTS) {
      const until = Date.now() + LOCKOUT_SECONDS * 1000;
      setLockedUntil(until);
      setMessage(
        `Too many failed attempts. Locked for ${LOCKOUT_SECONDS / 60} minutes.`
      );
      return;
    }

    setOtpLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/send-otp", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, otp }),
      });

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(() => ({ error: "Invalid OTP" }));
        setOtpAttempts((prev) => {
          const next = prev + 1;
          if (next >= MAX_OTP_ATTEMPTS) {
            setLockedUntil(Date.now() + LOCKOUT_SECONDS * 1000);
            setMessage(
              `Too many failed attempts. Locked for ${
                LOCKOUT_SECONDS / 60
              } minutes.`
            );
          } else {
            setMessage(errorData.error || "Invalid OTP. Please try again.");
          }
          return next;
        });
        return;
      }

      // success path
      await fetch("/api/contact", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      setMessage("Email verified successfully!");
      await submitForm();
    } catch (error: any) {
      setMessage(error.message || "Invalid OTP. Please try again.");
    } finally {
      setOtpLoading(false);
    }
  };

  const submitForm = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          pageTitle: title,
          isEmailVerified: true,
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
        date: "",
        time: "",
      });

      setOtpStep("success");
      setMessage(
        "Thank you! Your consultation has been confirmed. Check your email for details."
      );
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await sendOTP();
  };

  const resendOTP = async () => {
    if (countdown > 0) return;
    setOtp("");

    await sendOTP();
  };

  const goBackToForm = () => {
    setOtpStep("form");
    setOtp("");
    setMessage("");
  };

  const resetToForm = () => {
    setOtpStep("form");
    setOtp("");
    setMessage("");
    setFormData({
      name: "",
      email: "",
      phone: "",
      state: "",
      date: "",
      time: "",
    });
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-[#1D293D]/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#7DD756]/5 to-transparent" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-8">
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D293D] leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={itemVariants}
          >
            {[
              "10+ Years of Experience",
              "400+ In-House CAs, CS & Lawyers",
              "99% SLA Delivery",
              "10,000+ Pin codes Network in India",
            ].map((text, idx) => (
              <div
                key={idx}
                className="flex items-start p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#7DD756] text-white">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="ml-3 text-base font-medium text-gray-700">
                  {text}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
            <button className="px-8 py-3 bg-[#1D293D] hover:bg-[#1D293D]/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              Schedule Free Consultation
            </button>
            <button className="px-6 py-3 text-[#1D293D] font-semibold rounded-lg border-2 border-[#1D293D] hover:bg-[#1D293D]/5 transition-all duration-300 flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              See How It Works
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
          >
            {[
              {
                label: "Happy Customers",
                count: "100000+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "Expert Advisors",
                count: "3500+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
              },
              {
                label: "Branch Offices",
                count: "50+",
                icon: (
                  <svg
                    className="w-10 h-10 text-[#7DD756]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
                variants={statsVariants}
                whileHover={{ y: -5 }}
              >
                {item.icon}
                <h3 className="mt-4 text-2xl font-bold text-[#1D293D]">
                  {item.count}
                </h3>
                <p className="mt-1 text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Consultation Form */}
        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          {/* Ribbon */}
          {/* <div className="absolute -top-4 -right-4 z-10">
            <div className="relative bg-[#7DD756] text-white px-6 py-2 rounded-lg shadow-xl">
              <div className="text-center font-bold">
                <p className="text-sm leading-tight">
                  Upto <span className="text-yellow-200">50% OFF</span>
                </p>
                <p className="text-xs">Money Back Guarantee</p>
              </div>
              <div className="absolute -bottom-2 right-0 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-[#7DD756] border-r-8 border-r-transparent"></div>
            </div>
          </div> */}

          {/* Form Container */}
          <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1D293D] to-[#7DD756]"></div>
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    otpStep === "form"
                      ? "bg-[#7DD756] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  1
                </div>
                <div className="w-12 h-1 bg-gray-200 mx-2"></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    otpStep === "otp"
                      ? "bg-[#7DD756] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  2
                </div>
                <div className="w-12 h-1 bg-gray-200 mx-2"></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    otpStep === "success"
                      ? "bg-[#7DD756] text-white"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  ✓
                </div>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#7DD756]/10 -z-1"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#1D293D]/10 -z-1"></div>

            {otpStep === "form" && (
              <>
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
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
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
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
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
                      className="ml-2 block text-sm text-gray-700 flex items-center"
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
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={otpLoading}
                    className="w-full py-3 px-6 cursor-pointer bg-gradient-to-r from-[#1D293D] to-[#1D293D]/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                  >
                    {otpLoading ? "SENDING OTP..." : "VERIFY EMAIL & PROCEED"}
                  </button>
                </form>
              </>
            )}

            {otpStep === "otp" && (
              <>
                <h3 className="text-2xl font-bold text-center text-[#1D293D] mb-4">
                  Verify Your Email
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  We've sent a 6-digit OTP to <strong>{formData.email}</strong>
                </p>

                <div className="space-y-4">
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7DD756] focus:border-transparent transition-all duration-200 text-center text-2xl font-bold tracking-widest"
                  />

                  <div className="flex space-x-3">
                    <button
                      onClick={verifyOTP}
                      disabled={
                        otpLoading ||
                        otp.length !== 6 ||
                        (lockedUntil !== null && Date.now() < lockedUntil) // force boolean
                      }
                      className="flex-1 py-3 px-6 cursor-pointer bg-gradient-to-r from-[#1D293D] to-[#1D293D]/90 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {lockedUntil !== null && Date.now() < lockedUntil
                        ? `Locked (${lockRemaining}s)`
                        : otpLoading
                        ? "VERIFYING..."
                        : "VERIFY OTP"}
                    </button>
                  </div>

                  <div className="text-center space-y-2">
                    <button
                      onClick={resendOTP}
                      disabled={countdown > 0}
                      className="text-[#1D293D] hover:text-[#7DD756] font-medium disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {countdown > 0
                        ? `Resend OTP in ${countdown}s`
                        : "Resend OTP"}
                    </button>
                    <br />
                    <button
                      onClick={goBackToForm}
                      className="text-gray-600 hover:text-[#1D293D] text-sm cursor-pointer"
                    >
                      ← Change Email Address
                    </button>
                  </div>
                </div>
              </>
            )}

            {otpStep === "success" && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#7DD756] rounded-full flex items-center justify-center mx-auto">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#1D293D]">
                  Consultation Confirmed!
                </h3>
                <p className="text-gray-600">
                  Your consultation has been booked successfully. Please check
                  your email for the meeting details.
                </p>
                <button
                  onClick={() => {
                    setOtpStep("form");
                    setOtp("");
                    setMessage("");
                  }}
                  className="mt-4 px-6 py-2 text-[#1D293D] border border-[#1D293D] rounded-lg hover:bg-[#1D293D] hover:text-white transition-all duration-300"
                >
                  Book Another Consultation
                </button>
              </div>
            )}

            {message && (
              <div
                className={`mt-4 text-sm text-center p-3 rounded-lg ${
                  message.includes("error") ||
                  message.includes("Failed") ||
                  message.includes("Invalid")
                    ? "bg-red-50 text-red-600 border border-red-200"
                    : "bg-green-50 text-green-600 border border-green-200"
                }`}
              >
                {message}
              </div>
            )}

            {otpStep === "form" && (
              <div className="mt-6 flex items-center justify-center">
                <p className="ml-2 text-sm text-gray-600">
                  Rated 4.9 by 42,817+ Customers
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
