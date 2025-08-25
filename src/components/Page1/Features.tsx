"use client";
import React from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeaturesProps {
  items: FeatureItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  hover: {
    y: -10,
    scale: 1.02,
  },
};

export default function Features({ items }: FeaturesProps) {
  if (!items || items.length === 0) return null;
  return (
    <section
      id="features"
      className="relative py-28 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#f9fafb] via-[#f4fdf7] to-[#eaf4ff] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-[#1D293D]">
              Features That Empower You
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions with expert support, ensuring your
            journey is seamless and stress-free.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((item, idx) => (
            <FeatureCard key={idx} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ item }: { item: FeatureItem }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const background = useMotionTemplate`
    radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(119, 218, 90, 0.35), transparent 80%)
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    rotateX.set((e.clientY - top - height / 2) / 10);
    rotateY.set(-(e.clientX - left - width / 2) / 10);
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 });
    animate(rotateY, 0, { duration: 0.5 });
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      className="relative group perspective-1000"
    >
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <motion.div
          style={{ background }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      <div className="relative h-full bg-white/80 backdrop-blur-lg border border-white/20 rounded-2xl p-8 
        shadow-lg shadow-[#77DA5A]/10 group-hover:shadow-2xl group-hover:shadow-[#77DA5A]/40 
        transition-all duration-500 overflow-hidden">
        
        {/* Card Glow Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-[#77DA5A]/30 to-[#1D293D]/20 rounded-2xl"></div>
          <div className="absolute inset-0.5 bg-gradient-to-br from-white/95 to-white/80 rounded-[15px]"></div>
        </div>

        {/* Card Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 text-[#1D293D]">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>

        {/* Hover Border Animation */}
        <div className="absolute inset-0 rounded-2xl p-pixel bg-gradient-to-br from-[#77DA5A] via-[#7DD956] to-[#1D293D] 
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
          <div className="absolute inset-0 rounded-2xl bg-white/90 backdrop-blur-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};
