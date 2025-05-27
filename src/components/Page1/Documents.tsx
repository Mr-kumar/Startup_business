"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export interface Step {
  title: string;
  desc: string;
}
export interface DocumentsProps {
  data: {
    steps: Step[];
    violations: string[];
    consequences: string[];
  };
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const SectionHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1D293D] bg-clip-text bg-gradient-to-r from-[#1D293D] to-[#7AD955]">
        {title}
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
};

const StepItem = ({ step, index }: { step: Step; index: number }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
      className="border-l-4 border-[#7AD955] pl-6 py-4 hover:bg-gray-50 rounded-r-lg transition-colors duration-300"
    >
      <div className="flex gap-5 items-start">
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#7AD955] text-white font-bold text-lg shrink-0">
          {index + 1}
        </div>
        <div>
          <h3 className="font-semibold text-xl text-[#1D293D] mb-2">
            {step.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Card = ({
  title,
  items,
  isDark = false,
}: {
  title: string;
  items: string[];
  isDark?: boolean;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      className={`p-8 rounded-2xl shadow-xl border border-opacity-10 ${
        isDark
          ? "bg-[#1D293D] text-white border-white"
          : "bg-white text-[#1D293D] border-[#1D293D]"
      }`}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 },
      }}
    >
      <h3
        className={`text-2xl font-bold mb-6 pb-3 border-b ${
          isDark
            ? "text-[#7AD955] border-[#7AD955] border-opacity-30"
            : "text-[#1D293D] border-[#1D293D] border-opacity-20"
        }`}
      >
        {title}
      </h3>
      <motion.ul
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-4"
      >
        {items.map((item, i) => (
          <motion.li
            key={i}
            variants={fadeIn}
            className="flex items-start gap-4 group"
          >
            <span
              className={`mt-1 text-xl ${
                isDark ? "text-[#7AD955]" : "text-[#1D293D]"
              }`}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:scale-110 transition-transform"
              >
                <path
                  d="M20 6L9 17L4 12"
                  stroke={isDark ? "#7AD955" : "#1D293D"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default function Documents({ data }: DocumentsProps) {
  const { steps, violations, consequences } = data;
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100">
      <section className="max-w-7xl mx-auto py-20 px-5 sm:px-8" id="documents">
        <SectionHeader
          title="How To File It Online?"
          subtitle="Follow this step-by-step guide to ensure your response is submitted correctly"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="flex flex-col lg:flex-row items-stretch gap-12"
        >
          <motion.div
            variants={fadeIn}
            className="flex-1 overflow-hidden rounded-3xl shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="https://corpbiz.io/img/steps_img.webp"
              alt="Form Fill"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.2 },
              },
            }}
            className="flex-1 space-y-6"
          >
            {steps.map((step, idx) => (
              <StepItem key={idx} step={step} index={idx} />
            ))}
          </motion.div>
        </motion.div>
      </section>

      {(violations.length > 0 || consequences.length > 0) && (
        <section className="py-20 px-5 sm:px-8 bg-gradient-to-br from-[#1D293D] via-[#152238] to-[#0F172A]">
          <div className="max-w-7xl mx-auto text-white">
            <SectionHeader
              title="Deadlines & Penalties"
              subtitle="Avoid late fees by submitting on time"
            />

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={staggerContainer}
            >
              {violations.length > 0 && (
                <Card title="Penalty for Late Filing" items={violations} />
              )}
              {consequences.length > 0 && (
                <Card
                  title="Consequences of Non-Compliance"
                  items={consequences}
                  isDark={true}
                />
              )}
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
