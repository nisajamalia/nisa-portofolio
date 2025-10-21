"use client";

import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import Lilcon from "./Lilcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  image,
}) => {
  const ref = useRef(null);

  // ✅ Pisahkan work berdasarkan line break ("\n")
  const workPoints = work
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative flex items-start gap-6 sm:gap-8 mb-12 sm:mb-16"
    >
      {/* Timeline Icon */}
      <div className="relative flex flex-col items-center">
        <Lilcon reference={ref} />
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white border border-gray-100 hover:border-purple-400 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-purple-300/40 transition-all duration-300">
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1 leading-snug">
          {position}{" "}
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-pink-500 transition-colors"
          >
            @{company}
          </a>
        </h3>

        {/* Time & Location */}
        <span className="block text-sm text-gray-500 mb-3">
          {time} • {address}
        </span>

        {/* ✅ List Deskripsi */}
        <ul className="space-y-2 mb-5">
          {workPoints.map((point, index) => (
            <li key={index} className="flex items-start text-gray-700 text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* ✅ Gambar Dokumentasi */}
        {image && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden border border-gray-200 shadow-md"
          >
            <Image
              src={image}
              alt={`${position} - ${company}`}
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.li>
  );
};

// ============================
// 🔹 MAIN EXPERIENCE COMPONENT
// ============================
export default function Experience() {
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
        className="relative w-full max-w-5xl bg-white border border-gray-100 rounded-3xl shadow-lg p-8 sm:p-12 md:p-16 overflow-hidden"
      >
        <h2 className="relative font-bold text-4xl sm:text-5xl md:text-6xl mb-16 text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Main timeline line */}
          <div className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full bg-gray-300 rounded-full" />

          {/* Progress animation */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full origin-top bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
          />

          {/* ✅ Experience List */}
          <ul className="relative mt-8 ml-6 sm:ml-8">
            <Details
              position="Fullstack Developer"
              company="PT Nusantara Global Inovasi"
              companyLink="https://nginovasi.com/"
              time="2021"
              address="Semarang, Indonesia"
              work={`Developed a real estate mobile app from scratch using Android Studio and Kotlin for frontend development
Built custom RESTful APIs with Laravel to handle property listings and user interactions
Integrated Firebase Authentication for secure user access
Gained full-stack mobile development experience, covering native Android UI/UX design, backend integration, and deployment`}
              image="/images/experience/pkl_nisa.jpg"
            />

            <Details
              position="Core Team Android"
              company="Google Developer Group on Campus @BinusUniversity"
              companyLink="https://www.instagram.com/p/DGhodnYpj0i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
              time="October 2024 - Present"
              address="Bandung, Indonesia"
              work={`Mentored peers in Android programming, providing guidance on development tools, best practices,
and project execution.
Shared expertise in Android development through interactive sessions and collaborative
discussions.`}
              image="/images/experience/gdg_nisa.png"
            />

            <Details
              position="Software & Product Development"
              company="Asistant of Lab Curiosity @BINUS University"
              companyLink="https://binus.ac.id"
              time="2023 - Present"
              address="Bandung, Indonesia"
              work={`Assisted in teaching and mentoring students in mobile programming and software engineering labs
Focused on clean architecture, Kotlin MVVM, and UI/UX best practices`}
              image="/images/experience/lab_curiosity.jpg"
            />
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
