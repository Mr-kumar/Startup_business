"use client";
import React from "react";
import { Button } from "@/components/ui/button"; // Adjust import based on your component setup
import Navbar from "../components/Navbar";

const steps = [
  {
    title: "Connect",
    description: "Integrate Zoho Projects to create and associate projects in Zoho CRM.",
    image: "/contact1.png", // replace with real paths or imports
  },
  {
    title: "Track",
    description: "Stay on top of your tasks and milestones.",
    image: "/contact2.png",
  },
  {
    title: "Deliver",
    description: "Execute customer projects on time, every time.",
    image: "/contact3.png",
  },
];

const project = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 bg-white">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-semibold mb-2">Unified Sales and Project Management</h1>
        <p className="text-gray-600">
          A smarter way to bridge the gap between sales and project tracking.{" "}
          <a href="#" className="text-blue-600 hover:underline">Learn More</a>
        </p>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl text-center">
        {steps.map((step, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={step.image}
              alt={step.title}
              className="w-24 h-24 mb-4"
            />
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-10 flex items-center space-x-4">
        <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
        <button className="text-sm text-gray-500 hover:underline">
          Don&apos;t show this tab again.
        </button>
      </div>
    </div>
    </>
  );
};

export default project;
