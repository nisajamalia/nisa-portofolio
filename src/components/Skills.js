"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const categories = [
  {
    title: "Programming Languages",
    items: [
      { name: "Kotlin", logo: "/images/logos/kotlin.png" },
      { name: "Java", logo: "/images/logos/java.png" },
      { name: "Flutter", logo: "/images/logos/flutter.png" },
      { name: "C/C++", logo: "/images/logos/cc.png" },
      { name: "Python", logo: "/images/logos/pythonlog.png" },
      { name: "PHP", logo: "/images/logos/php.png" },
      { name: "HTML", logo: "/images/logos/html.png" },
      { name: "CSS", logo: "/images/logos/css.png" },
      { name: "JavaScript", logo: "/images/logos/jss.png" },
    ],
  },
  {
    title: "Framework & Architecture",
    items: [
      { name: "Laravel", logo: "/images/logos/laravel.png" },
      { name: "React JS", logo: "/images/logos/react.png" },
      { name: "Node JS", logo: "/images/logos/nodejs.png"},
      { name: "CodeIgniter", logo: "/images/logos/ci.png" },
      { name: "MVC", logo: "/images/logos/mvc.png" },
      { name: "MVVM", logo: "/images/logos/mvvm.png" },
      { name: "Bootstrap", logo: "/images/logos/boot.png" },
      { name: "Data Binding" ,logo: "/images/logos/databinding.jpg"},
      { name: "Android Jetpack", logo: "/images/logos/jetpack.png" },
      { name: "Room", logo: "/images/logos/room.jpg" },
      { name: "Koin", logo: "/images/logos/koin.png" },
      { name: "Dagger Hilt", logo: "/images/logos/dh.jpg" },
      { name: "Coroutines", logo: "/images/logos/coroutines.png" },
      { name: "Navigation Component", logo: "/images/logos/navigationc.png" },
    ],
  },
  {
    title: "Data Science & Analytics",
    items: [
      { name: "Dataiku", logo: "/images/logos/dataiku.png" },
      { name: "Pandas", logo: "/images/logos/pandas.png" },
      { name: "NumPy", logo: "/images/logos/numpyy.png" },
      { name: "Matplotlib", logo: "/images/logos/matplot.png" },
    ],
  },

  {
    title: "Database & Service",
    items: [
      { name: "MySQL", logo: "/images/logos/mysql.png" },
      { name: "SQLite", logo: "/images/logos/sqlite.png" },
      { name: "Retrofit", logo: "/images/logos/retrofit.jpg" },
      { name: "Firebase", logo: "/images/logos/firebase.png" },
      { name: "RESTful API", logo: "/images/logos/rest.png" },
    ],
  },

  {
    title: "AI & Machine Learning",
    items: [
      { name: "TensorFlow", logo: "/images/logos/tensorflow.png" },
      { name: "Roboflow", logo: "/images/logos/roboflow.png" },
      { name: "LLM", logo: "/images/logos/llm2.jpg" },
    ],
  },

  {
    title: "Tools & Automation",
    items: [
      { name: "UiPath", logo: "/images/logos/uipath.png" },
      { name: "Postman", logo: "/images/logos/postman.png" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.92, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center py-8 px-5 sm:px-8 text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl bg-white border border-gray-200 rounded-3xl shadow-lg p-8 sm:p-12 md:p-16 overflow-hidden"
      >
        <h2 className="relative font-bold text-4xl sm:text-5xl md:text-6xl mb-16 text-center tracking-tight">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Loop kategori */}
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-purple-600 border-b border-gray-200 pb-2">
              {category.title}
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            >
              {category.items.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    boxShadow: "0 4px 12px rgba(168,85,247,0.25)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center bg-white border border-gray-200 hover:border-purple-400 
                            rounded-xl py-4 px-5 cursor-pointer shadow-sm hover:shadow-purple-300/30 
                            transition-all duration-300 font-medium text-gray-800 text-lg"
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="mb-3"
                  />
                  {skill.name}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
