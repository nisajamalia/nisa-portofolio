import React from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

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
        color: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
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
    <main className="flex w-full flex-col items-center justify-center dark:text-light">
      <Layout className="pt-24">
        {/* JUDUL */}
        <AnimatedText
          text="Line Up Achievements"
          className="mb-16 text-center"
        />

        <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden bg-white">
          {/* Garis Tengah */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 origin-top -translate-x-1/2"
          />

          {/* Card List */}
          <div className="flex flex-col gap-20 w-full max-w-5xl px-4 md:px-8 relative z-10">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Titik Koneksi */}
                <div className="absolute left-1/2 hidden md:block w-8 h-8 bg-white border-4 border-purple-400 rounded-full -translate-x-1/2 z-10 shadow-md" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className={`bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden md:w-5/12 w-full ${
                    index % 2 === 0 ? "ml-0 mr-auto" : "ml-auto mr-0"
                  }`}
                >
                  {/* Gambar Sertifikat */}
                  <motion.div
                    className="overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title.map((t) => t.text).join("")}
                      className="w-full h-52 object-cover border-b border-gray-200"
                    />
                  </motion.div>

                  {/* Teks */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold">
                      {item.title.map((part, i) => (
                        <span key={i} className={part.color}>
                          {part.text}
                        </span>
                      ))}
                    </h3>
                    <p className="text-sm text-gray-400">{item.date}</p>
                    <p className="text-sm text-gray-700 mt-3 leading-relaxed">
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
  );
}
