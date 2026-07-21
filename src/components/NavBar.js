import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Logo from "./Logo";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const handleLinkClick = () => {
    if (onClick) onClick(); // Tutup overlay setelah klik
  };

  return (
    <Link
      href={href}
      className={`relative group font-semibold text-lg ${className}`}
      onClick={handleLinkClick}
    >
      {title}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] bg-black
          transition-all duration-300 ease-out
          ${isActive ? "w-full" : "w-0 group-hover:w-full"}
        `}
      ></span>
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // fungsi baru untuk menutup menu

  return (
    <header className="w-full px-8 sm:px-16 md:px-24 lg:px-32 py-8 font-medium flex items-center justify-between relative z-50">
      {/* Tombol Hamburger */}
      <button
        className="flex flex-col justify-center items-center lg:hidden z-50"
        onClick={handleClick}
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Navbar */}
      <div className="w-full flex justify-between items-center hidden lg:flex">
        <nav className="flex items-center space-x-8">
          <CustomLink href="/" title="Home" />
          <CustomLink href="/about" title="About" />
          <CustomLink href="/project" title="Project" />
          <CustomLink href="/achievement" title="Achievement" />
        </nav>

        <div className="absolute left-1/2 top-2 -translate-x-1/2 scale-150">
          <Logo />
        </div>

        <nav className="flex items-center gap-5">
          <motion.a
            href="https://github.com/nisajamalia"
            target="_blank"
            whileHover={{ y: -3 }}
          >
            <GithubIcon className="w-7 h-7 text-black" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/nisa-jamalia-hanif-83a491170/"
            target="_blank"
            whileHover={{ y: -3 }}
          >
            <LinkedInIcon className="w-7 h-7 text-[#0077B5]" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/nysanrhyt?igsh=a3BibHF3MGtybnJy&utm_source=qr"
            target="_blank"
            whileHover={{ y: -3 }}
          >
            <InstagramIcon className="w-7 h-7 text-[#E1306C]" />
          </motion.a>
        </nav>
      </div>

      {/* Mobile Navbar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background overlay gelap */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Pop-up menu */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         bg-white/90 backdrop-blur-lg py-14 px-20 rounded-3xl
                         shadow-2xl flex flex-col items-center space-y-8 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
                <CustomLink href="/" title="Home" onClick={closeMenu} />
                <CustomLink href="/about" title="About" onClick={closeMenu} />
                <CustomLink
                  href="/project"
                  title="Project"
                  onClick={closeMenu}
                />
                <CustomLink
                  href="/achievement"
                  title="Achievement"
                  onClick={closeMenu}
                />
              </nav>

              <div className="flex items-center gap-6 mt-8">
                <GithubIcon className="w-7 h-7 text-black" />
                <LinkedInIcon className="w-7 h-7 text-[#0077B5]" />
                <InstagramIcon className="w-7 h-7 text-[#E1306C]" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
