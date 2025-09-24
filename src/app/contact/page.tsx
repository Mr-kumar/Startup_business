"use client";
import React from "react";
import { Mail, Phone, MapPin, Headphones } from "lucide-react";
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

        const data = await res.json();
        if (res.ok) {
            alert("✅ Query submitted successfully. Check your email.");
        } else {
            alert("❌ Failed to send. Please try again.");
        }
    };


    return (
        <div>
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-10 gap-8">

                    {/* Left Content */}
                    <div className="md:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Contact US
                        </h2>
                        <div className="w-16 h-1 bg-[#f0a52b] mb-6"></div>
                        <p className="text-gray-700 leading-relaxed">
                            At DostartUp, we aim to bestow the exquisite Environmental Compliance,
                            financial, Legal Compliance, and secretarial services through the
                            internet. However, if you are not satisfied with our services,
                            please get in touch with us immediately. We will correct the
                            situation and provide a refund or offer credit adjusted in future
                            DostartUp orders.
                        </p>
                    </div>

                    {/* Middle Content */}
                    <div className="md:col-span-5 bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-blue-700 mb-8">Quick Support</h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Contact Details */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Contact Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Full Name*"
                                        className="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition shadow-sm outline-none"
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email*"
                                        className="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition shadow-sm outline-none"
                                    />
                                </div>
                            </div>

                            {/* Mobile & State */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Additional Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Mobile Number*"
                                        className="w-full border border-gray-300 rounded-lg px-5 py-3 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition shadow-sm outline-none"
                                    />
                                    <select
                                        className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-white focus:ring-2 focus:ring-blue-400 transition shadow-sm outline-none"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
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

                            {/* Query */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">Your Query</h3>
                                <textarea
                                    placeholder="Type Your Query Here"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-5 py-3 min-h-[80px] placeholder-gray-400 focus:ring-2 focus:ring-blue-400 transition shadow-sm outline-none"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-7 py-3 rounded-lg shadow-lg hover:bg-blue-700 disabled:bg-blue-400 transition font-semibold text-lg"
                            >
                                Send Request
                            </button>
                        </form>
                    </div>

                    {/* Right Info Boxes (30%) */}
                    <div className="md:col-span-3 space-y-6">
                        {/* Head Office */}
                        <div className="p-5 bg-white rounded-lg shadow-md">
                            <h3 className="flex items-center font-semibold text-lg text-gray-800 mb-2">
                                <MapPin className="w-5 h-5 mr-2 text-blue-600" /> Head Office
                            </h3>
                            <p className="text-gray-600 text-sm">
                                C-84, Sector 2 Noida Uttar Pradesh - 201301
                            </p>
                        </div>

                        {/* Quick Inquiries */}
                        <div className="p-5 bg-blue-50 rounded-lg shadow-md">
                            <h3 className="flex items-center font-semibold text-lg text-gray-800 mb-2">
                                <Headphones className="w-5 h-5 mr-2 text-blue-600" /> For Quick Inquiries
                            </h3>
                            <p className="text-gray-700 text-sm">+91-9911144807</p>
                        </div>

                        {/* Email Us */}
                        <div className="p-5 bg-yellow-50 rounded-lg shadow-md">
                            <h3 className="flex items-center font-semibold text-lg text-gray-800 mb-2">
                                <Mail className="w-5 h-5 mr-2 text-yellow-600" /> Email us
                            </h3>
                            <p className="text-gray-700 text-sm">
                                <a href="mailto:office.dostartup@gmail.com" className="text-blue-600">
                                    office.dostartup@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                </div>



                {/* Diagonal background shape */}
                {/* <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-r from-white to-blue-200 clip-path-triangle hidden md:block"></div> */}
            </section>

        </div>
    );
}