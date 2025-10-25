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
  <svg className="w-7 h-7 sm:w-8 sm:h-8 -rotate-90" viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="40"
      className="stroke-purple-300 stroke-[6px] fill-none"
    />
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      className="stroke-purple-600 stroke-[6px] fill-none"
      style={{ pathLength: scrollYProgress }}
    />
    <circle cx="50" cy="50" r="18" className="fill-purple-500 animate-pulse" />
  </svg>
</figure>

  );
};

export default Lilcon;
