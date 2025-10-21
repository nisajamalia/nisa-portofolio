"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ type, time, place, info}) => {
  const ref = useRef(null);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6 sm:gap-8 mb-12 sm:mb-16"
    >
      {/* Circle timeline di kiri */}
      <div className="relative flex flex-col items-center">
        <Lilcon reference={ref} />
      </div>

      {/* Card konten */}
      <div className="flex-1 bg-white border border-gray-200 hover:border-purple-400 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-purple-300/30 transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 leading-snug">
          {type}{" "}
          
        </h3>
        <span className="block text-sm text-gray-500 mb-3">
          {time} • {place}
        </span>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {info}
        </p>
      </div>
    </motion.li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  return (
    <section
      ref={ref}
      className="flex flex-col items-center justify-center py-24 px-5 sm:px-8 text-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl bg-white border border-gray-200 rounded-3xl shadow-lg p-8 sm:p-12 md:p-16 overflow-hidden"
      >
        <h2 className="relative font-bold text-4xl sm:text-5xl md:text-6xl mb-16 text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>

        {/* Wrapper timeline */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Garis utama timeline */}
          <div className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full bg-gray-300 rounded-full" />

          {/* Garis progress animasi */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full origin-top bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
          />

          {/* Daftar item */}
          <ul className="relative mt-8 ml-6 sm:ml-8">
            <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
            />

             <Details
              type="Bachelor Of Science In Computer Science"
              time="2016-2020"
              place="Massachusetts Institute Of Technology (MIT)"
              info="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial 
Intelligence."
            />

          </ul>
        </div>
      </motion.div>
    </section>
  );
};


