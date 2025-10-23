"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";

interface ListItem {
  category?: string;
  documents: string[];
}

interface SectionListProps {
  data: ListItem[];
  title?: string;
  variant?: 'default' | 'check' | 'bullet';
  className?: string;
  showTitle?: boolean;
}

export const SectionList = ({
  data,
  title = "",
  variant = 'check',
  className = "",
  showTitle = true
}: SectionListProps) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (!data || data.length === 0) {
    return null;
  }

  const renderListItem = (item: ListItem, itemIndex: number) => {
    const hasCategory = item.category && item.category.trim() !== "";
    const documents = Array.isArray(item.documents) ? item.documents : [];

    // Skip rendering if no documents
    if (documents.length === 0) {
      return null;
    }

    return (
      <div key={itemIndex} className="mb-6">
        {hasCategory && (
          <h3 className="text-lg font-semibold text-[#1D293D] mb-4">
            {item.category}
          </h3>
        )}
        <ul className="space-y-2">
          {documents.map((doc, docIndex) => (
            <li key={docIndex} className="flex items-start gap-2 text-gray-700">
              {variant === 'check' && (
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
              )}
              {variant === 'bullet' && (
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              )}
              <span className={variant === 'default' ? 'ml-2' : ''}>{doc}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

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
      className={`bg-white p-8 rounded-xl shadow-sm border border-gray-100 ${className}`}
    >
      {showTitle && title && (
        <h2 className="text-2xl font-bold text-[#1D293D] mb-6">{title}</h2>
      )}
      <div className="space-y-6">
        {data.map((item, index) => renderListItem(item, index))}
      </div>
    </motion.div>
  );
};

export default SectionList;