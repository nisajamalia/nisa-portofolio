import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from './Logo'
import { GithubIcon, InstagramIcon, LinkedInIcon } from './Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <Link
      href={href}
      className={`relative group font-semibold ${className}`}
    >
      {title}
      <span
        className={`
          absolute left-0 -bottom-1 h-[2px] bg-black 
          transition-all duration-300 ease-out
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      ></span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between relative'>
      {/* Navigation kiri */}
      <nav className='flex items-center space-x-8'>
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
        <CustomLink href="/projects" title="Projects" />
        <CustomLink href="/achieve" title="Achievement" />
      </nav>

      {/* Logo di tengah */}
      <div className='absolute left-1/2 top-2 -translate-x-1/2 scale-150'>
        <Logo />
      </div>

      {/* Social Icons */}
      <nav className='flex items-center gap-5'>
        <motion.a
          href="https://github.com"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-black hover:text-gray-600 transition-colors"
        >
          <GithubIcon className="w-7 h-7" />
        </motion.a>

        <motion.a
          href="https://linkedin.com"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#0077B5] hover:opacity-80 transition-opacity"
        >
          <LinkedInIcon className="w-7 h-7" />
        </motion.a>

        <motion.a
          href="https://instagram.com"
          target="_blank"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="text-[#E1306C] hover:opacity-80 transition-opacity"
        >
          <InstagramIcon className="w-7 h-7" />
        </motion.a>
      </nav>
    </header>
  )
}

export default NavBar
