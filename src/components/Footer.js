import React from 'react'
import Link from 'next/link'
import Layout from './Layout'

const MailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.5 3.5h4l1.8 4.6-2.2 1.9a12.6 12.6 0 0 0 5.9 5.9l1.9-2.2 4.6 1.8v4a2 2 0 0 1-2.2 2C10.6 21.1 3 13.4 2.5 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
)

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 20.5s-7.5-4.6-10-9.3C.4 8 1.7 4.7 4.9 3.9c2-.5 3.9.4 5.1 2 1.2-1.6 3.1-2.5 5.1-2 3.2.8 4.5 4.1 2.9 7.3-2.5 4.7-10 9.3-10 9.3Z" />
  </svg>
)

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-sm sm:text-base dark:border-light py-8 sm:py-9 mt-auto bg-gray-100 dark:bg-dark text-dark dark:text-light">
      <Layout>
        {/*
          Centering/width classes live on THIS plain div, not on <Layout>'s
          className prop -- keeping them here guarantees they always apply,
          regardless of how <Layout> forwards className internally.
        */}
        <div className="w-full max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:gap-6 md:text-left">

            {/* KIRI: Copyright — muted so it doesn't compete with the name/contact */}
            <div className="whitespace-nowrap text-dark dark:text-light">
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            </div>

            {/* TENGAH: Built with */}
            <div>
              <p className="whitespace-nowrap flex items-center justify-center gap-1.5">
                <span>Built with</span>
                <HeartIcon className="w-4 h-4 text-primary" />
                <span>
                  by{" "}
                  <Link
                    href="/"
                    className="font-semibold underline underline-offset-2 decoration-1 hover:text-primary transition-colors"
                  >
                    Nisa Jamalia
                  </Link>
                </span>
              </p>
            </div>

            {/* KANAN: Kontak */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 sm:gap-4">
              <a
                href="mailto:nisajamalia99@gmail.com"
                className="group flex items-center gap-1.5 whitespace-nowrap text-dark dark:text-light hover:text-primary transition-colors"
              >
                <MailIcon className="w-4 h-4 shrink-0 text-dark group-hover:text-primary transition-colors" />
                <span>nisajamalia99@gmail.com</span>
              </a>
              <span className="hidden sm:inline text-gray-300 dark:text-gray-600">•</span>
              <a
                href="https://wa.me/6282112339961"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 whitespace-nowrap text-dark dark:text-light hover:text-primary transition-colors"
              >
                <PhoneIcon className="w-4 h-4 shrink-0 text-dark group-hover:text-primary transition-colors" />
                <span>+62 821-1233-9961</span>
              </a>
            </div>

          </div>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
