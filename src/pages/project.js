"use client";

import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Asumsi komponen ini juga mendukung responsivitas, seperti menggunakan 'max-width'
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Slider from "react-slick"; // 🎠 Carousel
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import project1 from "../../public/images/projects/appdisney.png";
import project2 from "../../public/images/projects/appdisney_dua.png";
import project3 from "../../public/images/projects/project3.png";
import project4 from "../../public/images/projects/project4.png";
import project4i from "../../public/images/projects/project4i.png";
import project5 from "../../public/images/projects/project5.png";
import project5i from "../../public/images/projects/project5i.png";
import project6 from "../../public/images/projects/project6.png";
import project6i from "../../public/images/projects/project6i.png";
import project7 from "../../public/images/projects/project7.png";
import project7i from "../../public/images/projects/project7i.png";
import project8 from "../../public/images/projects/project8.png";
import project8i from "../../public/images/projects/project8i.png";
import project9 from "../../public/images/projects/project9.png";
import project9i from "../../public/images/projects/project9i.png";
import project10 from "../../public/images/projects/project10.png";
import project10i from "../../public/images/projects/project10i.png";
import project11 from "../../public/images/projects/project11.png";
import project11i from "../../public/images/projects/project11i.png";
import project12 from "../../public/images/projects/project12.png";
import project12i from "../../public/images/projects/project12i.png";
import project13 from "../../public/images/projects/project13.png";
import project13i from "../../public/images/projects/project13i.png";
import project14 from "../../public/images/projects/project14.png";
import project14i from "../../public/images/projects/project14i.png";

// ====================================================================================================

// ===== Featured Project Component (Dibuat Responsif) =====
const FeaturedProject = ({
  type,
  title,
  summary,
  images,
  link,
  github,
  tools,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
  };

  return (
    <article
className="relative w-full flex flex-col lg:flex-row items-center justify-between rounded-xl border border-solid border-black shadow-lg py-4 px-6 lg:py-6 lg:px-8 max-w-6xl mx-auto bg-white"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      {/* Background Layer */}
      {/* Background Layer (efek 3D kanan-bawah) */}
      <div
        className="absolute bottom-[-12px] right-[-12px] -z-10 w-full h-full rounded-[1.5rem]"
        style={{
          backgroundColor: "#000000",
        }}
      />

      {/* Carousel */}
      <div className="w-full lg:w-[45%] rounded-lg overflow-hidden cursor-pointer">
        <Link
          href={link}
          target="_blank"
          className="w-full overflow-hidden rounded-lg"
        >
          <Slider {...settings}>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`${title}-${index}`}
                className="w-full h-auto object-cover rounded-lg"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
              />
            ))}
          </Slider>
        </Link>
      </div>

      {/* Detail */}
      <div className="w-full lg:w-[50%] flex flex-col items-start justify-between pt-2 lg:pt-0 lg:pl-4 pb-2">
        <span className="text-primary font-medium text-sm sm:text-base">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 text-left text-xl sm:text-2xl font-bold">
            {title}
          </h2>
        </Link>

        <p className="my-3 font-medium text-dark opacity-80 text-xs sm:text-sm leading-relaxed">
          {summary}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs bg-gray-900 text-white py-0.5 px-2 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-2 flex items-center gap-3">
          <Link
            href={github}
            target="_blank"
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
          >
            <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-1 px-3 sm:py-1.5 sm:px-6 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "8px",
            }}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

// ====================================================================================================

// ===== Project Card Component (Efek 3D + Ukuran disamakan dengan Featured Project) =====
const ProjectCard = ({
  title,
  type,
  summary,
  img,
  link,
  github,
  tools = [], // ✅ default value
  carousel,
}) => {
  // 🔹 Setting untuk carousel jika ada
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <article
      className="relative w-full max-w-md flex flex-col items-center justify-center rounded-xl border border-solid shadow-md p-4 sm:p-5"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      {/* 🔹 Efek 3D Border Belakang */}
      <div
        className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[1.2rem]"
        style={{ backgroundColor: "#000000" }}
      />

      {/* 🔹 Gambar Project (img tunggal atau carousel) */}
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        {carousel && carousel.length > 0 ? (
          <Slider {...settings}>
            {carousel.map((image, index) => (
              <div key={index}>
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <Image
            src={img}
            alt={title}
            className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      {/* 🔹 Konten Project */}
      <div className="w-full flex flex-col items-start justify-between mt-3">
        <span className="text-primary font-medium text-sm sm:text-base">
          {type}
        </span>

        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-1 w-full text-left text-lg sm:text-xl font-semibold">{title}</h2>
        </Link>
        {/* 🔹 Text Deskripsi  */}
<div className="text-gray-700 text-xs sm:text-sm leading-snug mt-1 mb-3 space-y-3">
  {summary}
</div>

        {/* 🔹 Tools */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-[10px] sm:text-xs bg-gray-900 text-white py-0.5 px-2 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* 🔹 Tombol Aksi */}
        <div className="flex items-center gap-3">
          <Link
            href={github}
            target="_blank"
            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-1 px-4 sm:py-1.5 sm:px-6 text-xs sm:text-sm font-semibold bg-black text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

// ====================================================================================================

// ===== Project Page Component =====
const Project = () => {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | Project Page</title>
        <meta
          name="description"
          content="About Nisa Jamalia - Portfolio and Biography"
        />
      </Head>
      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* 🔹 JUDUL UTAMA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 px-4 sm:px-6 md:px-0"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent pb-2 leading-[1.2]">
              Imagination Trumps Knowledge
            </h1>
          </motion.div>

          {/* 🔹 GRID PROJECT */}
          <div className="grid grid-cols-12 gap-12 sm:gap-16 md:gap-24 gap-y-16 md:gap-y-32">

            {/* ✅ Featured Project 1 */}
            <div className="col-span-12">
              <FeaturedProject
                title="HouseUz App"
                images={[project6, project6i]}
                summary={`An application designed to help users easily find houses that match their preferences. This project was developed during my internship at Nusantara Global Inovasi. The app focuses on simplifying the house-hunting process for users who are unsure where to start looking.

The backend was fully built from scratch using Laravel, where I created and managed the database and developed a custom REST API. This API was then integrated into the Android application, which was developed using Kotlin and followed the MVVM architecture pattern.`}
                link="/"
                github="https://github.com/nisajamalia/DisneyMotion"
                type="Mobile App"
                tools={[
                  "Kotlin",
                  "REST API",
                  "Anko",
                  "Dagger2",
                  "Firebase",
                  "Retrofit",
                  "Room",
                  "Data Binding",
                  "MVVM Architecture",
                ]}
              />
            </div>
  


       {/* Weather Apps */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Weather Apps"
    img={project3}
    summary="See the weather forecast wherever you are. Search for the location you want to get the latest weather information. No matter where you are, the weather
 forecast is always accurate &
 beautifully presented."
    link="/"
    github="https://github.com/nisajamalia/HomeMarketPlace"
    type="Mobile App"
    tools={["Kotlin", "API", "Date & Time"]}
  />
</div>

{/* Food Recipes App (pakai carousel) */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Food Recipes App"
    type="Mobile App"
    summary="Foodie is a project on how to get data from the given API.
                    The data contains food recipes with three menus — Seafood,
                    Dessert, and Profile."
    link="/"
    github="https://github.com/nisajamalia/KitchenRecipes"
    tools={["Kotlin", "REST API", "GridLayout", "RecyclerView", "Glide"]}
    carousel={[project4, project4i]} // 🎠 Tambahkan carousel di sini
  />
</div>




         {/* Disney Motion App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Disney Motion App"
    type="Mobile App"
    summary="Disney Motion is an application that displays a synopsis or movie storyline from disney films. suitable for those of you who want to know first what the movie is about"
    link="/"
    github="https://github.com/nisajamalia/DisneyMotion"
    tools={[
      "Kotlin",
      "Jetpack Compose",
      "Room Database",
      "MVVM Architecture",
      "Koin (Dependency Injection)",
      "Lifecycle",
      "DataBinding",
      "Retrofit2",
      "Glide",
      "RecyclerView",
    ]}
    carousel={[project1, project2]} // 🎠 carousel aktif
  />
</div>

{/* MC Catalogue App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="MC Catalogue App"
    type="Mobile App"
    summary="    MC Catalogue is an application that let you view
                    recommendations for the best movies and TV shows with the
                    highest ratings. This application created using the API from
                    MovieDb and we applied it to Android Studio."
    link="/"
    github="https://github.com/nisajamalia/MyMovieCatalogueExtension2"
    tools={[
      "Kotlin",
      "REST API",
      "Data Binding",
      "MVVM",
      "LiveData",
      "Dagger2",
      "Retrofit",
    ]}
    carousel={[project5, project5i]} // 🎠 carousel aktif
  />
</div>


            {/* === Tambahan Project Baru === */}

            {/* Featured Project 2 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Quran App"
                images={[project7, project7i]}
                summary="The Quran app is an application that maximizes your worship with the prayer schedule feature, various prayers and letters and there is also a zakat calculator feature"
                link="/"
                github="https://github.com/nisajamalia/QuranApp"
                type="Mobile App"
                tools={[
                  "Kotlin",
                  "Maps",
                  "DatePicker",
                  "RecyclerView",
                  "CardView",
                  "REST API",
                ]}
              />
            </div>

            {/* DZikr App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="DZikr App"
    type="Flutter App"
    summary="A helpful application for people who want to learn and practice the correct prayers and remembrance according to the Sunnah."
    link="/"
    github="https://github.com/nisajamalia/dzikir_apps"
    tools={["Dart", "State Management", "Widget"]}
    carousel={[project8, project8i]} // 🎠 Carousel aktif
  />
</div>

{/* Current News App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Current News App"
    type="Flutter App"
    summary="Stay updated with the latest news through the Current News app, featuring real-time articles and modern UI for a smooth reading experience."
    link="/"
    github="https://github.com/nisajamalia/current_news"
    tools={[
      "Dart",
      "REST API",
      "RecyclerView",
      "State Management",
      "Widget",
    ]}
    carousel={[project9, project9i]} // 🎠 Carousel aktif
  />
</div>

{/* C-Health Info App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="C-Health Info"
    type="Mobile App"
    summary="This application displays the latest Covid-19 information and updates from around the world and Indonesia, helping users stay informed during the pandemic."
    link="/"
    github="https://github.com/nisajamalia/Covid19Info"
    tools={[
      "Kotlin",
      "MVVM Architecture",
      "Retrofit",
      "Live Data",
      "Chart Library",
      "RecyclerView",
    ]}
    carousel={[project13, project13i]} // 🎠 Carousel aktif
  />
</div>

{/* ToDoo App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="ToDoo App"
    type="Mobile App"
     summary={[
    "This is my 4th-semester project, where I contributed to every stage of development — from designing the UI to building the entire app.",
    "Todoo is a productivity app for students who often feel overwhelmed by academic tasks. It helps organize schedules, set reminders, and manage assignments effectively to improve focus and reduce stress.",
  ]}
    link="/"
    github="https://github.com/nisajamalia/TodoApps"
    tools={[
      "Kotlin",
      "Android Jetpack",
      "MVVM Architecture",
      "Retrofit",
      "Coroutines",
      "LiveData",
      "Room",
    ]}
    carousel={[project12, project12i]} // 🎠 Carousel aktif
  />
</div>

 {/* Featured Project 3 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Career Sprint"
                images={[project11, project11i]}
               summary={[
    "Career Sprint is a competition project that reached the final round of ITCC Udayana 2024. Our team developed an innovative task management platform designed to help employees track progress and achieve their goals through AI-powered interactive roadmaps.",
    "I was responsible for designing all visual and user experience aspects of the project. Key features include real-time progress tracking, AI-driven feedback analysis, and personalized roadmap-based training to support continuous skill development.",
  ]}

                link="/"
                github="/"
                type="UI/UX Design"
                tools={["Figma"]}
              />
            </div>

{/* Echo App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Echo"
    type="UI/UX Design"
    summary="Echo App is a platform designed to share volunteer activity information and facilitate the recruitment and registration process for social and community events. It serves as a mediation platform between organizers and volunteers, ensuring a more organized, transparent, and legal process for managing human resources in volunteer programs."
    link="/"
    github="https://github.com/nisajamalia/TodoApps"
    tools={["Figma"]}
    carousel={[project10, project10i]} // 🎠 Carousel aktif
  />
</div>

{/* Football App */}
<div className="col-span-12 md:col-span-6 ml-18">
  <ProjectCard
    title="Football App"
    type="Mobile App"
    summary="Football App allows users to browse various football leagues and discover detailed information about their favorite clubs. Users can also save clubs to favorites by clicking the like button."
    link="/"
    github="https://github.com/nisajamalia/TodoApps"
    tools={["Kotlin", "REST API", "Data Binding", "Retrofit", "Spinner"]}
    carousel={[project14, project14i]} // 🎠 Carousel aktif
  />
</div>

     
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
