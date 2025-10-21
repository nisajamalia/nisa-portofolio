"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

const Lilcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="flex items-center justify-center">
      <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 100 100">
        {/* Lingkaran luar */}
        <circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-gray-400 stroke-[6px] fill-none"
        />
        {/* Progress */}
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          className="stroke-purple-500 stroke-[6px] fill-none"
          style={{ pathLength: scrollYProgress }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        {/* Titik dalam */}
        <circle cx="50" cy="50" r="18" className="fill-purple-400" />
      </svg>
    </figure>
  );
};

export default Lilcon;
