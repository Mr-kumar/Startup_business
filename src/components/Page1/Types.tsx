"use client";
// import '../styles/globals.css'
import React from "react";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import FlipCard from "@/components/FlipCard";
import { motion } from "framer-motion";

// Add FlipCard props interface
interface FlipCardProps {
  title: string;
  shortText: string;
  backText: string;
  accentColor?: string;
  textColor?: string;
  className?: string;
  frontClassName?: string;
  backClassName?: string;
  icon?: React.ReactNode;
}

export interface TypesData {
  cards: { title: string; shortText: string; backText: string }[];
  roleBenefits: string[];
  differenceTable: {
    columns: string[];
    rows: string[][];
  };
  timelineFees: string[];
}
export interface TypesProps {
  data: TypesData;
}
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Types({ data }: TypesProps) {
  const { cards, roleBenefits, differenceTable, timelineFees } = data;

  return (
    <div id="types" className="bg-gradient-to-b from-gray-50 to-white">
      {/* Role Benefits Section */}
      {roleBenefits?.length > 0 && (
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#7AD95510_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7AD955] to-[#1D293D] rounded-3xl opacity-30 blur-xl group-hover:opacity-40 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="https://corpbiz.io/img/feature_img.webp"
                    alt="FSSAI benefits"
                    className="w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-block bg-[#1D293D]/10 text-[#1D293D] px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
                Why It Matters
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D293D] leading-tight">
                Key Benefits
              </h2>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {roleBenefits.map((b, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#7AD955] to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md group-hover:shadow-lg transition-shadow">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 group-hover:text-[#1D293D] transition-colors text-lg leading-relaxed">
                      {b}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* Common Mistakes Section */}
      {cards?.length > 0 && (
        <section className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5" />
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#7AD955]/10 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-[#1D293D]/10 blur-3xl" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16 relative"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 mb-6 bg-gradient-to-r from-[#1D293D] to-[#7AD955] text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300"
            >
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium tracking-wide">
                Avoid These Mistakes
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#1D293D]">
              Pitfalls to Avoid During Filing
            </h2>
            <p className="text-gray-500/90 text-lg max-w-2xl mx-auto">
              Common errors that can delay your submission
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group perspective-1000"
              >
                <div className="relative h-full transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#7AD955]/20 rounded-2xl">
                  <FlipCard
                    title={card.title}
                    shortText={card.shortText}
                    backText={card.backText}
                    className="border border-gray-200/50 hover:border-[#7AD955]/30 transition-all duration-300"
                    frontClassName="bg-gradient-to-br from-white to-gray-50"
                    backClassName="bg-gradient-to-br from-[#1D293D] to-gray-900 text-white"
                    icon={<AlertTriangle className="w-6 h-6 text-[#7AD955]" />}
                  />
                  <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7AD955_0%,transparent_70%)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      {/* Comparison Table Section */}
      {differenceTable.columns.length > 0 &&
        differenceTable.rows.length > 0 && (
          <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
            {/* …heading & intro… */}
            <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200/50 backdrop-blur-sm bg-white/50 max-w-6xl mx-auto">
              <table className="w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-[#1D293D] to-[#7AD955] text-white">
                    {differenceTable.columns.map((col, i) => (
                      <th
                        key={i}
                        className={`p-6 font-semibold text-lg ${
                          i === 0 ? "rounded-tl-3xl" : ""
                        } ${
                          i === differenceTable.columns.length - 1
                            ? "rounded-tr-3xl"
                            : ""
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {differenceTable.rows.map((rowValues, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-gray-200/50 ${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                      }`}
                    >
                      {rowValues.map((cell, j) => (
                        <td key={j} className="p-6 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

      {/* Timeline Section */}
      {timelineFees?.length > 0 && (
        <section className="py-24 px-4 md:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="inline-block bg-[#7AD955]/10 text-[#7AD955] px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
                Process Overview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#1D293D] leading-tight">
                Streamlined Filing Process
              </h2>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 mb-12"
              >
                {timelineFees.map((t, i) => (
                  <motion.li
                    key={i}
                    variants={fadeIn}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-[#1D293D] to-[#7AD955] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                      <div className="text-white font-bold">{i + 1}</div>
                    </div>
                    <span className="text-gray-700 group-hover:text-[#1D293D] transition-colors text-lg leading-relaxed">
                      {t}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(122, 217, 85, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="relative overflow-hidden group bg-gradient-to-r from-[#7AD955] to-emerald-500 hover:from-[#1D293D] hover:to-[#7AD955] text-white font-semibold px-10 py-5 rounded-xl shadow-lg transition-all duration-500"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started{" "}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#1D293D] to-[#7AD955] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1 flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#7AD955] to-[#1D293D] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-all duration-500" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src="https://corpbiz.io/img/img4.webp"
                    alt="Process illustration"
                    className="w-full max-w-md object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
