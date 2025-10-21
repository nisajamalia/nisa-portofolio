import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "../../public/images/profile/NisaProfile.JPG";
import { animate, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

// 🔢 Komponen angka animasi halus
const AnimatedNumbers = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // hanya animasi sekali saat muncul

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration, // lama animasi (detik)
      ease: "easeOut",
      onUpdate(latest) {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(0);
        }
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
                Hi, I’m Nisa Jamalia, a Computer Science student at BINUS
                University passionate about mobile app development and UI/UX
                design. My journey in technology began in junior high school,
                when I started coding simple games with Scratch and 
                explored Unity to create interactive experiences. That early
                curiosity soon grew into a deep passion for software development
                and digital design.
              </p>

              <p className="font-medium mb-4">
                With over three years of experience in Mobile app development using
                Kotlin & Java, I enjoy building mobile apps that combine functionality
                with beautiful user experiences.
              </p>

              <p className="font-medium mb-4">
                Beyond programming, I love crafting intuitive and visually
                appealing interfaces with Figma.
              </p>

              <p className="font-medium mb-4">
                I’m also actively involved in campus and tech communities — as a
                core team member of Google Developer Group on Campus (GDGoC), a
                Lab Curiosity assistant, and part of HIMTI BINUS Bandung.
                Through these roles, I’ve mentored fellow students, delivered
                workshops on Android development, and shared insights about
                design and innovation.
              </p>

              <p className="font-medium">
                As I continue my journey, I strive to keep improving my skills,
                explore emerging technologies like AI and IoT, and build digital
                products that are not only functional but also meaningful to
                users. For me, technology is more than just code — it’s a way to
                connect creativity, innovation, and human experience.
              </p>
            </div>

            {/* BAGIAN FOTO */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid p-8"
              style={{
                backgroundColor: "#ffffff", // putih (ganti dari bg-light)
                borderColor: "#000000", // hitam (ganti dari border-dark)
              }}
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                style={{
                  backgroundColor: "#000000", // hitam latar belakang luar
                }}
              />
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
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
