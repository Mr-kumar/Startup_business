"use client";
import React, { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {  FaRegHandshake } from "react-icons/fa";
import { motion } from "framer-motion";

// const WHATSAPP_NUMBER = "919999999999"; // Configurable WhatsApp number

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

  // OTP state

  const [otpStep, setOtpStep] = useState<"form" | "otp" | "success">("form");
  const [otp, setOtp] = useState("");
  const [otpLoading, setOtpLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const [loading, setLoading] = useState(false);
  console.log(loading)
  const [message, setMessage] = useState("");
  // const [whatsappConsent, setWhatsappConsent] = useState(true);
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [activeFeature] = useState(0);

  // add near your other useState lines
  const MAX_OTP_ATTEMPTS = 3;
  const LOCKOUT_SECONDS = 2 * 60; // 2 minutes lockout
  const [otpAttempts, setOtpAttempts] = useState<number>(0);
  const [lockedUntil, setLockedUntil] = useState<number | null>(null);
  const [lockRemaining, setLockRemaining] = useState(0);

  const features = [
    "Personalized Expert Guidance",
    "Hassle-Free Documentation",
    "Fast & Transparent Process",
    "Dedicated Support Team",
    "Affordable & Flexible Plans",
    "Secure & Confidential Handling",
    "Timely Updates & Reminders",
  ];

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
    }catch (err: unknown) {
      if (err instanceof Error) {
        setMessage(err.message || "Failed to send OTP. Please try again.");
      } else {
        setMessage("Failed to send OTP. Please try again.");
      }
    }finally {
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
        } catch (error: unknown) {
      if (error instanceof Error) {
        setMessage(error.message || "Invalid OTP. Please try again.");
      } else {
        setMessage("Invalid OTP. Please try again.");
      }
    }finally {
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
            className="lg:col-span-8 bg-white rounded-3xl shadow-2xl px-10 py-8 flex flex-col border border-gray-100/50 backdrop-blur-sm"
          >
            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Registration Form
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Let our CA-certified experts handle your business registrations ,
              legal compliance, and tax needs — while you focus on growing your
              business with peace of mind.
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
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#7DD756]/10 -z-1"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-[#1D293D]/10 -z-1"></div>

              {/* Step indicator */}
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

              {/* Form Step */}
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
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
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

              {/* OTP Verification Step */}
              {otpStep === "otp" && (
                <>
                  <h3 className=" cursor-pointer text-2xl font-bold text-center text-[#1D293D] mb-4">
                    Verify Your Email
                  </h3>
                  <p className="text-center text-gray-600 mb-6">
                    We&apos;ve sent a 6-digit OTP to{" "}
                    <strong>{formData.email}</strong>
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
                        className="text-[#1D293D] hover:text-[#7DD756] cursor-pointer font-medium disabled:text-gray-400 disabled:cursor-not-allowed"
                      >
                        {countdown > 0
                          ? `Resend OTP in ${countdown}s`
                          : "Resend OTP"}
                      </button>
                      <br />
                      <button
                        onClick={goBackToForm}
                        className="text-gray-600 hover:text-[#1D293D] text-sm"
                      >
                        ← Change Email Address
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Success Step */}
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
                    Registration Confirmed!
                  </h3>
                  <p className="text-gray-600">
                    Your registration has been completed successfully. Our
                    expert will contact you soon!
                  </p>
                  <button
                    onClick={resetToForm}
                    className="cursor-pointer mt-4 px-6 py-2 text-[#1D293D] border border-[#1D293D] rounded-lg hover:bg-[#1D293D] hover:text-white transition-all duration-300"
                  >
                    Submit Another Registration
                  </button>
                </div>
              )}

              {/* Message Display */}
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

              {/* Rating */}
              {otpStep === "form" && (
                <div className="mt-6 flex items-center justify-center">
                  
                </div>
              )}
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
