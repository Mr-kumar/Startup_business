"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CategoriesItem {
  category?: string;
  documents: string[];
}

interface CategoriesProps {
  Categories?: CategoriesItem[];
}

const Categories: React.FC<CategoriesProps> = ({ Categories = [] }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (Categories.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
    >
      <h2 className="text-2xl font-bold text-[#1D293D] mb-6"></h2>
      {Categories.map((item, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-lg font-semibold text-[#1D293D] mb-4">
            {item.category || "Uncategorized"} {/* Handle undefined category */}
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {item.documents.map((doc, docIndex) => (
              <li key={docIndex}>{doc}</li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Categories;