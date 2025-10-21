'use client';
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export interface EligibilitySection {
  heading: string;
  items: string[];
}
export interface EligibilityProps {
  sections: EligibilitySection[];
}

const fadeInItem = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Eligibility({ sections }: EligibilityProps) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white" id="eligibility">
      <motion.div 
        initial="hidden"
        animate="visible"
        className="space-y-10"
      >
        {sections.map((sec, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#1D293D]">
              <span className="w-8 h-8 bg-[#7AD955] text-white rounded-full flex items-center justify-center mr-3">
                {idx + 1}
              </span>
              {sec.heading}
            </h2>
            <ul className="space-y-4 pl-11">
              {sec.items.map((item, i) => (
                <motion.li 
                  key={i}
                  custom={i}
                  variants={fadeInItem}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="text-[#7AD955] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-[#1D293D] transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}