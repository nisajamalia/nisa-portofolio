"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Lilcon from "./Lilcon";

// ============================
// 🔹 DETAILS COMPONENT
// ============================
const Details = ({ type, time, place, info, logo }) => {
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
      {/* Circle timeline */}
      <div className="relative flex flex-col items-center">
        <Lilcon reference={ref} />
      </div>

      {/* Card */}
      <div className="flex-1 bg-white border border-gray-200 hover:border-purple-400 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-purple-300/30 transition-all duration-300">
        <div className="flex items-center gap-4 mb-3">
          {/* ✅ Logo sekolah */}
          {logo && (
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full border border-gray-200 shadow-sm">
              <Image
                src={logo}
                alt={`${place} logo`}
                width={56}
                height={56}
                className="object-contain w-full h-full bg-white p-1"
              />
            </div>
          )}

          {/* Nama & waktu */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
              {type}
            </h3>
            <span className="block text-sm text-gray-500">
              {time} • {place}
            </span>
          </div>
        </div>

        {/* Info tambahan */}
        {info && (
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
            {info}
          </p>
        )}
      </div>
    </motion.li>
  );
};

// ============================
// 🔹 MAIN EDUCATION COMPONENT
// ============================
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

        {/* Timeline */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Garis utama */}
          <div className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full bg-gray-300 rounded-full" />

          {/* Garis progress */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full origin-top bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
          />

          {/* ✅ Education List */}
          <ul className="relative mt-8 ml-6 sm:ml-8">

             <Details
              type="Bachelor of Science in Computer Science"
              time="2023 - 2027"
              place="Bina Nusantara University"
              logo="/images/logos/binus.png"
              info="Currently pursuing a Computer Science degree focusing on Mobile Development, AI, and Internet of Things (IoT)."
            />

             <Details
              type="Senior High School - Rekayasa Perangkat Lunak"
              time="2019 - 2022"
              place="Islamic Development Network"
              logo="/images/logos/idn.png"
              info="Learned Software Engineering from intermediate to expert level, focusing on Mobile App Development and practical project-based learning."
            />
 
            <Details
              type="Junior High School - IT"
              time="2017 - 2019"
              place="Islamic Development Network"
              logo="/images/logos/idn.png"
              info="Focused on foundational IT education and software basics, building early interest in programming and technology. Learned to create simple games and digital designs, progressing to basic web and app platform development."
            />

           
           
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
