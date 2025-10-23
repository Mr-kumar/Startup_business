"use client";
import React from "react";
import { Mail, MapPin, Headphones } from "lucide-react";
import { useState } from "react";

export default function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [query, setQuery] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            state,
            query,
        };

        const res = await fetch("/api/support", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        await res.json();
            if (res.ok) {
                alert("✅ Query submitted successfully. Check your email.");
            } else {
                alert("❌ Failed to send. Please try again.");
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-primary text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                            Get in Touch with Ashtronx
                        </h1>
                        <p className="text-xl text-primary-100 mb-2">
                            Your Trusted Partner for Business Solutions
                        </p>
                        <p className="text-primary-200">
                            We're here to help your business grow with expert compliance, legal, and consulting services
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-16">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        
                        {/* Contact Info Cards - Left Side */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-primary p-3 rounded-xl">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Our Office</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed">
                                            Patna, Bihar<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-accent p-3 rounded-xl">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Email Us</h3>
                                        <a href="mailto:ashtronx.ceo@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                                            ashtronx.ceo@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-medium hover:shadow-large transition-shadow duration-300">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-gradient-secondary p-3 rounded-xl">
                                        <Headphones className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-neutral-800 mb-2">Call Us</h3>
                                        <p className="text-neutral-600 text-sm">Available Mon-Sat</p>
                                        <p className="text-primary-600 font-semibold mt-1">+91-9911144807</p>
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white shadow-large">
                                <h3 className="font-bold text-xl mb-4">Why Choose Ashtronx?</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start">
                                        <span className="text-accent-300 mr-2">✓</span>
                                        <span>Expert team with 10+ years experience</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-300 mr-2">✓</span>
                                        <span>Fast & reliable service delivery</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-300 mr-2">✓</span>
                                        <span>Transparent pricing & processes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent-300 mr-2">✓</span>
                                        <span>24/7 customer support</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact Form - Center/Right */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-large">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-neutral-800 mb-2">Send Us a Message</h2>
                                    <p className="text-neutral-600">Fill out the form below and we'll get back to you within 24 hours</p>
                                </div>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Full Name <span className="text-accent-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder="Enter your full name"
                                                className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Email Address <span className="text-accent-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="your.email@example.com"
                                                className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                Phone Number <span className="text-accent-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                                State <span className="text-accent-500">*</span>
                                            </label>
                                            <select
                                                className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 bg-white text-neutral-800 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                                title="Select your state"
                                                aria-label="Select your state"
                                            >
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
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-neutral-700 mb-2">
                                            Your Message <span className="text-accent-500">*</span>
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your requirements or questions..."
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            required
                                            rows={5}
                                            className="w-full border-2 border-neutral-200 rounded-xl px-4 py-3 text-neutral-800 placeholder-neutral-400 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-primary text-white px-8 py-4 rounded-xl shadow-medium hover:shadow-large transform hover:-translate-y-0.5 transition-all duration-300 font-bold text-lg flex items-center justify-center space-x-2 group"
                                    >
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-primary-600 mb-2">10+</div>
                            <div className="text-neutral-600 text-sm">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-secondary-600 mb-2">5000+</div>
                            <div className="text-neutral-600 text-sm">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-accent-600 mb-2">400+</div>
                            <div className="text-neutral-600 text-sm">Services Offered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-success-600 mb-2">24/7</div>
                            <div className="text-neutral-600 text-sm">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}