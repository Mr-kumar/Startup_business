import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Clause {
  title: string;
  description: string;
}

interface ClausesProps {
  clauses: Clause[];
}

const Clauses: React.FC<ClausesProps> = ({ clauses }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (!clauses || clauses.length === 0) return null;

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
      <h2 className="text-2xl font-bold text-[#1D293D] mb-6">Clauses</h2>
      <div className="space-y-6">
        {clauses.map((clause, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-[#1D293D] mb-2">{clause.title}</h3>
            <p className="text-gray-700">{clause.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Clauses;