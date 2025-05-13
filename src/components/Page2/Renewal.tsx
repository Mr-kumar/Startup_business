"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type RenewalItem = {
  heading: string;
  content: string;
};

interface RenewalProps {
  renewal?: RenewalItem;
}

const Renewal: React.FC<RenewalProps> = ({ renewal }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (!renewal) return null;

  return (
    <motion.section
      id="renewal"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
      }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#1D293D] mb-4">
        {renewal.heading}
      </h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
        {renewal.content}
      </p>
    </motion.section>
  );
};

export default Renewal;
