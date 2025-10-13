import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import profilePic from '../../public/images/profile/NisaProfile.JPG'
import { animate, useInView } from 'framer-motion'
import Skills from "@/components/Skills";
import Experience from '@/components/Experience'



// 🔢 Komponen angka animasi halus
const AnimatedNumbers = ({ value, duration = 2 }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // hanya animasi sekali saat muncul

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, value, {
      duration, // lama animasi (detik)
      ease: 'easeOut',
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(0)
        }
      },
    })
    return () => controls.stop()
  }, [isInView, value, duration])

  return <span ref={ref}></span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | About</title>
        <meta name="description" content="About Nisa Jamalia - Portfolio and Biography" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">

          {/* JUDUL */}
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />

          <div className="grid w-full grid-cols-8 gap-16">

            {/* BAGIAN TEKS */}
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium mb-4">
                I’m Nisa Jamalia, a Computer Science student passionate about mobile app development and UI/UX design.
                I love transforming creative ideas into real digital experiences through code and design.
              </p>

              <p className="font-medium">
                With over 3 years of Android development experience using Kotlin, I’m continuously exploring new ways
                to improve both my technical and creative skills — blending functionality with beauty in every project.
              </p>
            </div>

            {/* BAGIAN FOTO */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Nisa Jamalia"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            {/* BAGIAN ANGKA / STATISTIK */}
            <div className="col-span-2 flex flex-col items-end justify-between">

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} duration={2.5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Satisfied Clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} duration={2.5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} duration={2.5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Years of Experience
                </h2>
              </div>

            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  )
}

export default About
