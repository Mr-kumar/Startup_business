"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ServiceItem {
  title: string;
  desc: string;
}
export interface FaqItem {
  question: string;
  answer: string;
}
export interface ServicesFaqProps {
  services: ServiceItem[];
  faqs: FaqItem[];
}

export default function ServicesFaq({ services, faqs }: ServicesFaqProps) {
  // If both services and faqs are empty or undefined, render nothing
  if ((!services || services.length === 0) && (!faqs || faqs.length === 0)) {
    return null;
  }

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#0F172A]">
      {/* Services Section */}
      {services && services.length > 0 && (
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7AD955] to-[#1D293D] mb-4">
              Why Trust DoStartup?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional services with guaranteed satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1D293D] rounded-xl p-8 border border-[#1D293D] hover:border-[#7AD955] transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="w-14 h-14 bg-[#7AD955] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-[#1D293D]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-gray-400">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Have a look at the answers to the most asked questions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7 space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() =>
                    setActiveIndex(activeIndex === idx ? null : idx)
                  }
                  className={`bg-[#1D293D] rounded-lg p-6 cursor-pointer transition-all ${
                    activeIndex === idx ? "border-l-4 border-[#7AD955]" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">
                      {faq.question}
                    </h3>
                    {activeIndex === idx ? (
                      <ChevronUp className="w-5 h-5 text-[#7AD955]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <AnimatePresence>
                    {activeIndex === idx && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-400 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
