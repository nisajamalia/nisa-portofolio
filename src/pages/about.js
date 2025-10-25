import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect"; // ✅ Tambahkan ini
import profilePic from "../../public/images/profile/NisaProfile.JPG";
import { animate, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { motion } from "framer-motion";

// 🔢 Komponen angka animasi halus
const AnimatedNumbers = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) ref.current.textContent = latest.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [isInView, value, duration]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | About</title>
        <meta
          name="description"
          content="About Nisa Jamalia - Portfolio and Biography"
        />
      </Head>

      {/* Efek Transisi Halaman */}
      <TransitionEffect />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-12 sm:pt-16">
          {/* JUDUL */}

         {/* 🔹 JUDUL UTAMA (sama seperti Achievement) */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
  className="text-center mb-16 px-4 sm:px-6 md:px-0"
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
    Passion Fuels Purpose!
  </h1>
</motion.div>


          {/* GRID UTAMA */}
          <div
            className="grid w-full grid-cols-1 lg:grid-cols-8 gap-10 sm:gap-12 lg:gap-16 
                       max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-0"
          >
            {/* BAGIAN TEKS */}
            <div className="lg:col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium mb-4">
                Hi, I’m Nisa Jamalia, a Computer Science student at BINUS
                University passionate about mobile app development and UI/UX
                design. My journey began in junior high school, where I started
                coding simple games with Scratch and Unity — sparking a lasting
                passion for software and digital design.
              </p>

              <p className="font-medium mb-4">
                With over three years of experience in mobile development using
                Kotlin & Java, I enjoy creating apps that combine functionality
                with beautiful user experiences. I also love crafting intuitive
                interfaces with Figma.
              </p>

              <p className="font-medium mb-4">
                I’m actively involved in tech communities such as GDGoC, IAK,
                HIMTI BINUS, and Lab Curiosity, where I mentor students and lead
                Android workshops.
              </p>

              <p className="font-medium mb-4">
                As I continue my journey, I strive to keep improving my skills,
                explore emerging technologies like Data Science and IoT, and
                build digital products that are not only functional but also
                meaningful to users.
              </p>

              <p className="font-medium">
                For me, technology is more than just code — it’s a way to
                connect creativity, innovation, and human experience.
              </p>
            </div>

            {/* BAGIAN FOTO */}
            <div
              className="lg:col-span-3 relative h-max rounded-2xl border-2 border-solid p-6 sm:p-8 
                         mx-auto lg:mx-0 w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px]"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#000000",
              }}
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                style={{ backgroundColor: "#000000" }}
              />
              <Image
                src={profilePic}
                alt="Nisa Jamalia"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 90vw,
                        (max-width: 1024px) 70vw,
                        (max-width: 1280px) 50vw,
                        33vw"
              />
            </div>

            {/* BAGIAN STATISTIK */}
         <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="lg:col-span-2 flex flex-col items-center justify-between 
             text-center space-y-10 sm:space-y-12 mt-8 lg:mt-0"
>
  <div className="flex flex-col items-center justify-center">
    <span className="inline-block text-6xl sm:text-7xl font-bold">
      <AnimatedNumbers value={20} duration={2.5} />+
    </span>
    <h2 className="text-lg sm:text-xl font-medium text-dark/75 dark:text-light/75 leading-snug max-w-[220px]">
      Tech, Competitions & Communities Joined
    </h2>
  </div>

  <div className="flex flex-col items-center justify-center">
    <span className="inline-block text-6xl sm:text-7xl font-bold">
      <AnimatedNumbers value={25} duration={2.5} />+
    </span>
    <h2 className="text-lg sm:text-xl font-medium text-dark/75 dark:text-light/75">
      Projects Completed
    </h2>
  </div>

  <div className="flex flex-col items-center justify-center">
    <span className="inline-block text-6xl sm:text-7xl font-bold">
      <AnimatedNumbers value={5} duration={2.5} />+
    </span>
    <h2 className="text-lg sm:text-xl font-medium text-dark/75 dark:text-light/75">
      Years Of Experience
    </h2>
  </div>
</motion.div>
          </div>

          {/* BAGIAN LAIN */}
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
