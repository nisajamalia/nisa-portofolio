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
  images = [],
}) => {
  const ref = useRef(null);

  // Pisahkan work menjadi bullet points
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

      {/* Card Content */}
      <div className="flex-1 bg-white border border-gray-100 hover:border-purple-400 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-purple-300/40 transition-all duration-300">
        {/* Header */}
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

        <span className="block text-sm text-gray-500 mb-3">
          {time} • {address}
        </span>

        {/* Work Description */}
        <ul className="space-y-2 mb-5">
          {workPoints.map((point, index) => (
            <li key={index} className="flex items-start text-gray-700 text-sm sm:text-base">
              <CheckCircle className="w-4 h-4 text-purple-500 mt-1 mr-2 flex-shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* ✅ Image Handling */}
        {images.length > 0 && (
          <>
            {images.length === 1 ? (
              // === Single Image → full width
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md"
              >
                <Image
                  src={images[0]}
                  alt={`${position} - ${company}`}
                  width={1000}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ) : (
              // === Multiple Images → grid layout
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {images.map((src, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full rounded-xl overflow-hidden border border-gray-200 shadow-md"
                  >
                    <Image
                      src={src}
                      alt={`${position} - ${company} - image ${idx + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </>
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
          {/* Timeline Lines */}
          <div className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full bg-gray-300 rounded-full" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[1.3rem] sm:left-[1.65rem] top-0 w-[2px] h-full origin-top bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"
          />

          {/* Experience List */}
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
              images={["/images/experience/pkl_nisa.jpg"]}
            />

            <Details
              position="Core Team Android"
              company="Google Developer Group on Campus @BinusUniversity"
              companyLink="https://www.instagram.com/p/DGhodnYpj0i/"
              time="October 2024 - Present"
              address="Bandung, Indonesia"
              work={`Mentored peers in Android programming, providing guidance on tools, best practices, and project execution
Shared expertise in Android development through workshops and collaborative sessions`}
              images={[
                "/images/experience/gdg_workshop_nisa.jpeg",
                "/images/experience/gdgnisa2.PNG",
              ]}
            />

            <Details
              position="Software & Product Development"
              company="Lab Curiosity @BINUS University"
              companyLink="https://binus.ac.id"
              time="2023 - Present"
              address="Bandung, Indonesia"
              work={`Internal student group supervised directly by the head of the study program, focusing on competitions and research
Participated in 7+ national and international competitions within one year
Delivered official presentation at the Pre-FYP event to 50+ freshmen, promoting the lab and recruiting new members`}
              images={[
                "/images/experience/nisa_labcuriosity.JPG",
                "/images/experience/labcurio.JPG",
              ]}
            />


             <Details
              position="Public Relation"
              company="Himpunan Mahasiswa Teknik Informatika"
              companyLink="https://ofog.himtibinus.or.id/"
              time="March 2024 - 2025"
              address="Bandung, Indonesia"
              work={`Speaker at ShareIT HIMTI 2025, delivering public presentations to improve engagement and communication skills
Designed visual content for Company Visit 2024, contributing to successful corporate engagementevents
Negotiated sponsorships and secured partnerships for TECHNO 2024 to support event funding and collaborations`}
              images={[
                "/images/experience/nisa_sertif_himti.png",
                "/images/experience/compvishimti.JPG",
                "/images/experience/ldkchimti.PNG",
              ]}
            />

             <Details
              position="Facilitator"
              company="Indonesia Andorid Kejar"
              companyLink="/"
              time="2017"
              address="Jakarta, Indonesia"
              work={`As a facilitator for Indonesia Android Kejar Batch 3,
                 I guided beginner-level participants in learning Java and Android app development. 
                 I was responsible for mentoring students, explaining core programming concepts, 
                 and ensuring participants successfully built their first Android projects.`}
              images={[
                "/images/experience/iak_batch_3.jpg",
                "/images/experience/iaknisa.jpg",
             
              ]}
            />
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
