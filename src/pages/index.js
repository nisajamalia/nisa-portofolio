import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/NisaProfile.JPG"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from "framer-motion";


export default function Home() {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | Portfolio</title>
        <meta name="description" content="Nisa Jamalia - Portfolio website" />
      </Head>

      <TransitionEffect/>

    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
  <Layout className="pt-0 md:pt-16 sm:pt-8">
    {/* WRAPPER UTAMA */}
    <div className="flex flex-col md:flex-row items-start justify-center w-full max-w-6xl mx-auto gap-y-10 md:gap-x-[3.5rem] lg:gap-x-[4rem] px-4 lg:px-8">

      {/* FOTO PROFIL */}
   <div className="relative w-full md:w-1/2 flex justify-center">
        <motion.div
          className="absolute -z-10 w-[26rem] h-[26rem] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-[100px] opacity-60"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={profilePic}
            alt="Nisa Jamalia"
            className="w-64 sm:w-72 md:w-80 lg:w-[22rem] rounded-2xl shadow-xl"
            priority
          />
        </motion.div>
      </div>

          {/* TEKS UTAMA */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
  className="w-full md:w-[55%] flex flex-col items-center md:items-start text-center md:text-left"
>
  <AnimatedText
    text="Turning Vision Into Reality With Code And Design."
    className="!text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl font-bold pb-3 !text-left bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight max-w-[600px]" 
    // ⬆️ max-w membatasi lebar agar teks otomatis turun baris seperti di gambar
  />

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
    className="mb-4 text-sm sm:text-base font-medium max-w-lg leading-relaxed"
  >
    I’m a Computer Science student at BINUS University with a strong passion in IT,
    especially in mobile app development and UI/UX design. With over 3 years of
    experience in Android development, I’m excited to use my skills and
    keep learning through real-world experience.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.8, duration: 0.7, ease: "easeOut" }}
    className="flex flex-col sm:flex-row items-center gap-4 mt-3"
  >
    <Link
      href="/Curriculum Vitae Nisa Jamalia.pdf"
      target="_blank"
      className="flex items-center bg-dark text-light px-6 py-2.5
      rounded-lg text-base sm:text-lg font-semibold hover:bg-light hover:text-dark
      border-2 border-solid border-transparent hover:border-dark
      transition-all duration-300"
      download={true}
    >
      Resume
    </Link>
    <Link
      href="mailto:nisajamalia99@gmail.com"
      target="_blank"
      className="text-base sm:text-lg font-medium capitalize text-dark dark:text-light underline"
    >
      Contact
    </Link>
  </motion.div>
</motion.div>



          </div>
        </Layout>
      </main>
    </>
  )
}
