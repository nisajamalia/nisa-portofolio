"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 ml-6 relative"
    >
      {/* Titik di timeline */}
      <span className="absolute left-[-1.3rem] top-2 w-4 h-4 bg-purple-500 rounded-full border border-purple-300 shadow-md" />

      <div className="bg-[#1b1b1b] border border-gray-700 hover:border-purple-400 rounded-2xl p-6 shadow-md hover:shadow-purple-500/20 transition-all duration-300">
        <h3 className="text-2xl font-semibold text-white mb-1">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            @{company}
          </a>
        </h3>
        <span className="block text-sm text-gray-400 mb-4">
          {time} | {address}
        </span>
        <p className="text-gray-300 leading-relaxed">{work}</p>
      </div>
    </motion.li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], // animasi mulai dan berhenti sesuai posisi section
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center py-20 px-6 bg-white text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl bg-[#111111] border border-gray-800 rounded-3xl shadow-lg p-10 md:p-16 overflow-hidden"
      >
        {/* Efek gradasi di dalam card */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none rounded-3xl" />

        <h2 className="relative font-bold text-4xl md:text-6xl mb-16 text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative w-full max-w-3xl mx-auto">
          {/* Garis utama timeline (scroll progress) */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-4 top-0 w-[2px] h-full origin-top bg-gradient-to-b from-purple-400 to-pink-500"
          />

          <ul className="mt-6 ml-6 relative">
            <Details
              position="Software Engineer"
              company="Google"
              companyLink="https://www.google.com"
              time="2022 - Present"
              address="Mountain View, CA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving accuracy and developing data analysis tools."
            />

            <Details
              position="Mobile Developer"
              company="BINUS Labs"
              companyLink="https://binus.ac.id"
              time="2021 - 2022"
              address="Jakarta, Indonesia"
              work="Developed Android applications using Kotlin and MVVM architecture. Collaborated with designers and backend engineers to deliver high-quality mobile experiences."
            />
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
