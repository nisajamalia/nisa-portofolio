import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/NisaProfile.JPG"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'
import { GithubIcon } from '@/components/Icons'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | Portfolio</title>
        <meta name="description" content="Nisa Jamalia - Portfolio website" />
      </Head>

      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          {/* WRAPPER UTAMA */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-6xl mx-auto gap-y-16 md:gap-x-[3rem] lg:gap-x-[4rem] px-4 lg:px-8">

            {/* ============================================================ */}
            {/* FOTO PROFIL — signature "sticker card" selaras dengan card project */}
            {/* ============================================================ */}

            <div className="relative w-full md:w-[42%] flex justify-center md:justify-end pt-6 md:pt-10">
              {/* Ambient glow di belakang */}
              <motion.div
                className="absolute -z-10 w-[22rem] h-[22rem] sm:w-[26rem] sm:h-[26rem] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-[100px] opacity-50"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -3 }}
                transition={{ delay: 0.3, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  {/* Offset shadow hitam — motif "sticker card" khas halaman project */}
                  <div className="absolute top-3 -right-3 -z-10 w-full h-full rounded-[1.75rem] bg-black" />

                  {/* Frame foto */}
                  <div className="relative rounded-[1.75rem] border-2 border-black bg-white p-2.5 shadow-xl">
                    <Image
                      src={profilePic}
                      alt="Nisa Jamalia"
                      className="w-60 sm:w-72 md:w-72 lg:w-80 rounded-2xl object-cover"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Badge mengambang — info nyata dari paragraf, bukan dekorasi kosong */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: -10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                  className="absolute -left-6 sm:-left-10 top-8 sm:top-10"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="flex items-center gap-1.5 bg-white border-2 border-black rounded-full pl-2 pr-3 py-1.5 shadow-md"
                  >
                    <span className="text-base">📱</span>
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">3+ yrs Android</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 1.6, duration: 0.6, ease: "easeOut" }}
                  className="absolute -right-4 sm:-right-8 bottom-10 sm:bottom-14"
                >
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="flex items-center gap-1.5 bg-white border-2 border-black rounded-full pl-2 pr-3 py-1.5 shadow-md"
                  >
                    <span className="text-base">🎨</span>
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">UI/UX Design</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* ============================================================ */}
            {/* TEKS UTAMA */}
            {/* ============================================================ */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="w-full md:w-[58%] flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Eyebrow */}
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 mb-4 text-sm sm:text-base font-semibold text-purple-600 dark:text-purple-300"
              >
                Hi, I&apos;m Nisa
                <motion.span
                  animate={{ rotate: [0, 18, -8, 18, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                  className="inline-block origin-[70%_70%]"
                >
                  👋
                </motion.span>
              </motion.span>

              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold pb-3 !text-left leading-[1.1] max-w-[600px] bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
              />

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7, ease: "easeOut" }}
                className="mt-2 mb-6 text-sm sm:text-base text-dark/70 dark:text-light/70 font-medium max-w-lg leading-relaxed"
              >
                I&apos;m a Computer Science student at BINUS University with a strong
                passion for IT, especially{" "}
                <span className="text-dark dark:text-light font-semibold">
                  Mobile App Development
                </span>{" "}
                and{" "}
                <span className="text-dark dark:text-light font-semibold">
                  UI/UX design
                </span>
                . With over 3 years of experience in Android development, I&apos;m
                excited to keep sharpening my skills through real-world experience.
              </motion.p>

              {/* Skill chips — ringkasan cepat, diambil dari paragraf */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                className="flex flex-wrap justify-center md:justify-start gap-2 mb-7"
              >
                {["Android Development", "Mobile App Dev", "UI/UX Design", "Kotlin"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm font-medium border border-dark/20 dark:border-light/20 rounded-full px-3 py-1 text-dark/80 dark:text-light/80"
                    >
                      {skill}
                    </span>
                  )
                )}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7, duration: 0.7, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link
                  href="/Curriculum Vitae Nisa Jamaliaa.pdf"
                  target="_blank"
                  className="group flex items-center gap-2 bg-dark text-light px-6 py-2.5
                  rounded-lg text-base sm:text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  transition-all duration-300"
                  download={true}
                >
                  Resume
                  <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                    ↓
                  </span>
                </Link>

                <Link
                  href="mailto:nisajamalia99@gmail.com"
                  target="_blank"
                  className="text-base sm:text-lg font-medium capitalize text-dark dark:text-light underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity duration-300"
                >
                  Contact
                </Link>

                <Link
                  href="https://github.com/nisajamalia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-dark dark:border-light text-dark dark:text-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-300"
                >
                  <GithubIcon className="w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </Layout>
      </main>
    </>
  )
}
