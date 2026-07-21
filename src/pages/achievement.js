import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

const achievements = [
  {
    title: [
      { text: "Top 10 Finalist", color: "text-black" },
      {
        text: " - UI/UX Competition by ITCC Udayana University",
        color: "text-purple-600",
      },
    ],
    date: "November 2024",
    description:
      "Career Sprint is an innovative platform designed to help companies and employees manage performance, develop careers, and enhance work effectiveness through an AI-driven and data analysis–based approach.",
    image: "/images/certificates/itcc.jpeg",
  },
  {
    title: [
      { text: "Top 10 Finalist", color: "text-black" },
      {
        text: " in Innovation Competition by DOW HERoes of Innovation",
        color: "text-purple-600",
      },
    ],
    date: "July 2025",
    description:
      "Our idea, Re-BioGo, is an IoT-powered eco-enzyme system that transforms household organic waste into natural cleaners, fertilizers, and biogas—driving sustainability and community empowerment for a better future.",
    image: "/images/certificates/nisa_heros.jpg",
  },
  {
    title: [
      { text: "VARSITY HACKATHON", color: "text-black" },
      { text: " by University Sains Malaysia", color: "text-purple-600" },
    ],
    date: "July 2024",
    description:
      "Certificate of Appreciation for Participating In Varsity Hackathon 2024",
    image: "/images/certificates/nisahackaton.jpg",
  },
  {
    title: [
      { text: "Slash National Hackathon", color: "text-black" },
      { text: " by UPN Veteran Jakarta", color: "text-purple-600" },
    ],
    date: "June 2024",
    description:
      "Certificate of Appreciation for Participating the Android Hackathon Slash National Competition 2024 by UPN Veteran Jakarta",
    image: "/images/certificates/nisaslash.jpg",
  },
  {
    title: [
      { text: "Business Model Canvas Competition", color: "text-black" },
      { text: " by Universitas Widyatama", color: "text-purple-600" },
    ],
    date: "June 2024",
    description:
      "Certificate of Appreciation for Participating in 5th WINACTION Business Model Canvas Competition",
    image: "/images/certificates/winnaction_nisa.jpg",
  },
  {
    title: [
      { text: "HackFest", color: "text-black" },
      {
        text: " by Google Developer Student Club",
        color: "text-purple-600",
      },
    ],
    date: "March 2024",
    description:
      "Hackathon Competition held by GDSC Indonesia for university student",
    image: "/images/certificates/nisahack.jpg",
  },
];

export default function Achievements() {
  return (
    <>
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-24">
          {/* 🔹 JUDUL UTAMA */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
  className="text-center mb-16 px-4 sm:px-6 md:px-0"
>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Certification & Achievements
            </h1>
          </motion.div>

          {/* 🔹 TIMELINE SECTION */}
          <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden bg-white w-full">
            {/* Garis Tengah */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 origin-top -translate-x-1/2"
            />

            {/* Card List */}
            <div className="flex flex-col gap-20 w-full max-w-5xl px-4 sm:px-8 lg:px-12 relative z-10">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center gap-10 ${
                    index % 2 === 0
                      ? "md:justify-start md:items-start"
                      : "md:justify-end md:items-start"
                  }`}
                >
                  {/* Titik di Garis Tengah */}
                  <div className="absolute left-1/2 w-8 h-8 bg-white border-4 border-purple-400 rounded-full -translate-x-1/2 z-10 shadow-md" />

                  {/* Card Sertifikat */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className={`bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden md:w-5/12 w-full ${
                      index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                    }`}
                  >
                    {/* Gambar */}
                    <motion.div
                      className="overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title.map((t) => t.text).join("")}
                        className="w-full h-52 sm:h-60 md:h-64 object-cover border-b border-gray-200"
                      />
                    </motion.div>

                    {/* Deskripsi */}
                    <div className="p-4 sm:p-6">
                      <h3 className="text-sm sm:text-base font-bold leading-snug">
                        {item.title.map((part, i) => (
                          <span key={i} className={part.color}>
                            {part.text}
                          </span>
                        ))}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        {item.date}
                      </p>
                      <p className="text-sm sm:text-base text-gray-700 mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
}
