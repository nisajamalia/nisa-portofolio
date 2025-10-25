import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-base sm:text-lg dark:border-light py-6 mt-auto bg-gray-100 dark:bg-dark text-dark dark:text-light">
      <Layout className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-3">

        {/* KIRI */}
        <div className="md:w-1/3">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        </div>

        {/* TENGAH */}
        <div className="md:w-1/3">
          <p>
            Built with <span className="text-primary text-2xl px-1">♡</span> by{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-primary transition">
              Nisa Jamalia
            </Link>
          </p>
        </div>

        {/* KANAN */}
        <div className="md:w-1/3 flex flex-col md:flex-row justify-center md:justify-end items-center gap-2">
          <a
            href="mailto:nisajamalia99@gmail.com"
            className="hover:text-purple-600 transition-all flex items-center gap-1"
          >
            📧 <span>nisajamalia99@gmail.com</span>
          </a>
          <span className="hidden md:inline text-gray-400">|</span>
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600 transition-all flex items-center gap-1"
          >
            📱 <span>+62 82112339961</span>
          </a>
        </div>

      </Layout>
    </footer>
  )
}

export default Footer
