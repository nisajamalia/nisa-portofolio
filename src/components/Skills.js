"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    items: ["Kotlin", "Java", "C/C++", "Python", "PHP", "HTML", "CSS"],
  },
  {
    title: "Framework & Architecture",
    items: [
      "Laravel",
      "CodeIgniter",
      "MVC",
      "MVVM",
      "Data Binding",
      "Live Data",
      "Room Database",
    ],
  },
  {
    title: "Database & Service",
    items: ["MySQL", "SQLite", "Retrofit", "Firebase"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 bg-white text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl bg-[#111111] border border-gray-800 rounded-3xl shadow-lg p-10 md:p-16 overflow-hidden"
      >
        {/* Efek gradasi */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl" />

        <h2 className="relative font-bold text-4xl md:text-6xl mb-12 text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Mapping tiap kategori */}
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-300 border-b border-purple-800 pb-2">
              {category.title}
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {category.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                    boxShadow: "0 0 15px rgba(168,85,247,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center text-center bg-[#1b1b1b] border border-gray-700 hover:border-purple-400 
                            rounded-xl py-3 px-5 cursor-pointer shadow-sm hover:shadow-purple-500/20 
                            transition-all duration-300 font-medium text-lg"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
