import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

// Import project images
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
import web1 from "../../public/images/projects/web1.png";
import web2 from "../../public/images/projects/web2.png";
import web3 from "../../public/images/projects/web3.png";
import web4 from "../../public/images/projects/web4.png";
import dash1 from "../../public/images/projects/dash1.png";
import dash2 from "../../public/images/projects/dash2.png";
import dash3 from "../../public/images/projects/dash3.png";
import dash4 from "../../public/images/projects/dash4.png";
import dash5 from "../../public/images/projects/dash5.png";
import dash6 from "../../public/images/projects/dash6.png";
import ticket1 from "../../public/images/projects/ticket1.png";
import ticket2 from "../../public/images/projects/ticket2.png";
import ticket3 from "../../public/images/projects/ticket3.png";
import ticket4 from "../../public/images/projects/ticket4.png";
import ticket5 from "../../public/images/projects/ticket5.png";

// ============================================================================
// IMPORTANT:
// react-slick dijalankan hanya di browser.
// Ini mencegah error saat Next.js melakukan prerender / build.
// ============================================================================

const Slider = dynamic(() => import("react-slick"), {
  ssr: false,
});

// ============================================================================
// Helper Component untuk Summary
// Bisa menerima string atau array of strings
// ============================================================================

const ProjectSummary = ({ summary, className = "" }) => {
  if (Array.isArray(summary)) {
    return (
      <div className={`${className} space-y-3`}>
        {summary.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    );
  }

  return <p className={className}>{summary}</p>;
};

const ProjectDetails = ({
  projectType,
  isGroupProject,
  role,
  impact,
  learnings,
  className = "",
}) => {
  const hasBadge = Boolean(projectType) || isGroupProject;
  const hasBox = Boolean((isGroupProject && role) || impact || learnings);
  if (!hasBadge && !hasBox) return null;

  return (
    <div className={`w-full ${className}`}>
      {/* Single status badge: Group Project takes priority over the origin type,
          so we never show two overlapping badges. */}
      {hasBadge && (
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {isGroupProject ? (
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wide bg-amber-500 text-white py-1 px-3 rounded-full">
              Group Project
            </span>
          ) : (
            <span
              className={`inline-flex items-center text-[11px] sm:text-xs font-bold uppercase tracking-wide py-1 px-3 rounded-full text-white ${
                projectType?.toLowerCase().includes("work assignment") ||
                projectType?.toLowerCase().includes("internship")
                  ? "bg-teal-600"
                  : "bg-blue-600"
              }`}
            >
              {projectType}
            </span>
          )}
        </div>
      )}

      {/* Role / Impact / Learnings — set apart in its own highlighted box */}
      {hasBox && (
        <div className="w-full rounded-lg border-l-4 border-black bg-gray-50 px-4 py-3 space-y-2">
          {isGroupProject && role && (
            <p className="text-sm leading-relaxed text-gray-800">
              <span className="font-bold text-dark">My Role — </span>
              {role}
            </p>
          )}

          {impact && (
            <p className="text-sm leading-relaxed text-gray-800">
              <span className="font-bold text-dark">Impact — </span>
              {impact}
            </p>
          )}

          {learnings && (
            <p className="text-sm leading-relaxed text-gray-800">
              <span className="font-bold text-dark">What I Learned — </span>
              {learnings}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// Featured Project Component — prop gambar: "images"
// ============================================================================

const FeaturedProject = ({
  type,
  title,
  summary,
  images = [],
  link,
  github,
  tools = [],
  projectType,
  isGroupProject,
  role,
  impact,
  learnings,
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
      className="relative w-full flex flex-col lg:flex-row items-center justify-between rounded-xl border border-solid shadow-lg py-6 px-5 lg:py-8 lg:px-8 max-w-5xl mx-auto bg-white"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      {/* Background 3D Layer */}
      <div
        className="absolute bottom-[-10px] right-[-10px] -z-10 w-full h-full rounded-[1.5rem]"
        style={{
          backgroundColor: "#000000",
        }}
      />

      {/* Carousel */}
      <div className="w-full lg:w-[40%] rounded-lg overflow-hidden cursor-pointer">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full overflow-hidden rounded-lg block"
        >
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="relative w-full aspect-[4/4.2] bg-gray-50">
                <Image
                  src={src}
                  alt={`${title}-${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 32vw"
                />
              </div>
            ))}
          </Slider>
        </Link>
      </div>

      {/* Detail */}
      <div className="w-full lg:w-[55%] flex flex-col items-start justify-center pt-4 lg:pt-0 lg:pl-6 pb-1">
        {/* Type */}
        <span className="text-primary font-medium text-sm sm:text-base">
          {type}
        </span>

        {/* Title */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 text-left text-xl sm:text-2xl font-bold">
            {title}
          </h2>
        </Link>

        {/* Summary */}
        <ProjectSummary
          summary={summary}
          className="my-3 font-medium text-dark opacity-80 text-sm leading-relaxed"
        />

        {/* Project Details: type / role / impact / learnings */}
        <ProjectDetails
          projectType={projectType}
          isGroupProject={isGroupProject}
          role={role}
          impact={impact}
          learnings={learnings}
          className="mb-4"
        />

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
        <div className="mt-1 flex items-center gap-3">
          {/* Github */}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
              }}
            >
              <GithubIcon className="w-6 h-6 md:w-7 md:h-7" />
            </Link>
          )}

          {/* Visit */}
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-3 sm:py-1.5 sm:px-6 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                backgroundColor: "#000000",
                color: "#ffffff",
                borderRadius: "8px",
              }}
            >
              Visit
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

// ============================================================================
// Project Card Component — prop gambar: "carousel" (banyak) atau "img" (satu)
// ============================================================================

const ProjectCard = ({
  title,
  type,
  summary,
  img,
  link,
  github,
  tools = [],
  carousel = [],
  projectType,
  isGroupProject,
  role,
  impact,
  learnings,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  const hasCarousel = carousel && carousel.length > 0;

  return (
    <article
      className="relative w-full h-full flex flex-col rounded-xl border border-solid shadow-md p-5 sm:p-6"
      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      {/* Efek 3D Border Belakang */}
      <div
        className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[1.2rem]"
        style={{
          backgroundColor: "#000000",
        }}
      />

      {/* Project Image — rasio tetap + object-contain supaya gambar tidak terpotong */}
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        {hasCarousel ? (
          <Slider {...settings}>
            {carousel.map((image, index) => (
              <div key={index} className="relative w-full aspect-[16/11] bg-gray-50">
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="relative w-full aspect-[16/11] bg-gray-50 group">
            <Image
              src={img}
              alt={title}
              fill
              className="object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="w-full flex-1 flex flex-col items-start mt-3">
        {/* Type */}
        <span className="text-primary font-medium text-sm sm:text-base mb-1">
          {type}
        </span>

        {/* Title */}
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-1 w-full text-left text-xl sm:text-2xl font-semibold">
            {title}
          </h2>
        </Link>

        {/* Description */}
        <ProjectSummary
          summary={summary}
          className="text-gray-700 text-sm leading-relaxed mt-1.5 mb-3"
        />

        {/* Project Details: type / role / impact / learnings */}
        <ProjectDetails
          projectType={projectType}
          isGroupProject={isGroupProject}
          role={role}
          impact={impact}
          learnings={learnings}
          className="mb-3"
        />

        {/* Tools */}
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

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          {/* Github */}
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-black text-white transition-all duration-300"
            >
              <GithubIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          )}

          {/* Visit */}
          {link && (
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="py-1 px-4 sm:py-1.5 sm:px-6 text-xs sm:text-sm font-semibold bg-black text-white rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              Visit
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};



const Project = () => {
  return (
    <>
      <Head>
        <title>Nisa Jamalia | Project Page</title>

        <meta
          name="description"
          content="Nisa Jamalia portfolio projects and works."
        />
      </Head>

      <TransitionEffect />

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          {/* Main Title */}
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

          {/* ================================================================ */}
          {/* SECTION 1: Featured — Fresh or Trash */}
          {/* ================================================================ */}

          <div className="w-full mb-10 md:mb-14">
            <FeaturedProject
              title="Fresh or Trash"
              images={[web1, web2, web3, web4]}
              summary={`Fresh or Trash is a Deep Learning-based fruit quality classification system designed to help make the fruit inspection process faster and more consistent.

The system can identify whether fruits are fresh or rotten across several types of fruit, such as apples, bananas, and oranges, through digital image analysis.`}
              link="https://freshortrash.vercel.app/"
              type="AI Web Application"
              tools={[
                "Python",
                "TensorFlow",
                "MobileNetV2",
                "Next.js",
                "React.js",
                "Express.js",
                "Prisma",
                "Supabase",
                "Tailwind CSS",
                "Vercel",
                "Railway",
              ]}
              projectType="Self-Initiated Project"
              isGroupProject={true}
              role="Worked as the Data Scientist on the team — handled data wrangling and exploratory data analysis (EDA) on the fruit image dataset, cleaning and structuring the data before it went into model training."
              impact="Built an end-to-end AI pipeline that classifies fruit freshness through a live web app, turning a trained deep learning model into a tool anyone can use in the browser."
              learnings="Learned to train and deploy a CNN model with TensorFlow and MobileNetV2, and connect a machine learning model to a full-stack Next.js and Express application."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 2: 4 Project Cards — SAKTI, Ticketing, Weather, Food Recipes */}
          {/* ================================================================ */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 gap-y-12 mb-10 md:mb-14 items-stretch justify-items-stretch max-w-5xl mx-auto">
            <ProjectCard
              title="SAKTI Student Management Website"
              carousel={[dash1, dash2, dash3, dash4, dash5, dash6]}
              summary="SAKTI is a student management dashboard that lets staff manage student records, track academic data, and administer school operations from a centralized web platform."
              link="https://uas-web-no-2.vercel.app/login"
              github="https://github.com/nisajamalia/Uas-web"
              type="Website"
              tools={["Vue JS", "Laravel"]}
              projectType="Individual Project (Final Exam Project)"
              isGroupProject={false}
              impact="Delivered a working full-stack student management system as the final exam project, covering everything from student records to academic tracking."
              learnings="Learned how to connect a Vue.js frontend to a Laravel REST API and manage relational student data across a full CRUD system."
            />

            <ProjectCard
              title="Ticketing Website"
              carousel={[ticket1, ticket2, ticket3, ticket4, ticket5]}
              summary="A ticketing platform that allows users to browse events, book tickets, and manage orders through a web-based system."
              link="https://mencoba-ticketflow.vercel.app/login"
              github="https://github.com/nisajamalia/Mencoba-ticketflow"
              type="Website"
              tools={["Node JS", "PHP", "MySQL", "Nginx"]}
              projectType="Individual Project"
              isGroupProject={false}
              impact="Implemented a complete ticket booking flow, from browsing events to checkout, on a stack built entirely from scratch."
              learnings="Learned to set up and deploy a PHP and Node.js application with MySQL and Nginx, and manage the full booking process end to end."
            />

            <ProjectCard
              title="Weather Apps"
              img={project3}
              summary="Weather Apps lets users check the current forecast for any location by searching for a city, displaying accurate and clearly presented weather data."
              link="/"
              github="https://github.com/nisajamalia/HomeMarketPlace"
              type="Mobile App"
              tools={["Kotlin", "API", "Date & Time"]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Delivered a lightweight forecast tool that returns accurate, well-presented weather data for any location the user searches."
              learnings="Learned to work with date and time formatting and integrate a public weather API into a native Kotlin app."
            />

            <ProjectCard
              title="Food Recipes App"
              type="Mobile App"
              summary="Foodie retrieves and displays food recipe data from a public API, organized into three sections: Seafood, Dessert, and Profile."
              link="/"
              github="https://github.com/nisajamalia/KitchenRecipes"
              tools={["Kotlin", "REST API", "GridLayout", "RecyclerView", "Glide"]}
              carousel={[project4, project4i]}
              projectType="Self-Initiated Project"
              isGroupProject={false}
              impact="Built a working recipe browser that organizes content into Seafood, Dessert, and Profile sections, sourced entirely from a public API."
              learnings="Learned to fetch and render API data with RecyclerView and GridLayout, and handle image loading efficiently with Glide."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 3: Featured — HouseUz App */}
          {/* ================================================================ */}

          <div className="w-full mb-10 md:mb-14">
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
              projectType="Work Assignment (Internship)"
              isGroupProject={false}
              impact="Shipped a full house-search feature during the internship, from a custom-built backend to the finished Android app."
              learnings="Learned to design a database schema and REST API from scratch with Laravel, then consume it in an MVVM Android app with Retrofit and Room."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 4: 4 Project Cards — Disney Motion, MC Catalogue, DZikr, Current News */}
          {/* ================================================================ */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 gap-y-12 mb-10 md:mb-14 items-stretch justify-items-stretch max-w-5xl mx-auto">
            <ProjectCard
              title="Disney Motion App"
              type="Mobile App"
              summary="Disney Motion displays synopses and storylines of Disney films, helping users decide what a movie is about before watching it."
              link="/"
              github="https://github.com/nisajamalia/DisneyMotion"
              tools={[
                "Kotlin",
                "Jetpack Compose",
                "Room Database",
                "MVVM Architecture",
                "Koin",
                "Lifecycle",
                "DataBinding",
                "Retrofit2",
                "Glide",
                "RecyclerView",
              ]}
              carousel={[project1, project2]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Built a synopsis browser that helps users quickly decide what a Disney film is about before watching, backed by offline caching."
              learnings="Learned MVVM architecture, dependency injection with Koin, and local data caching with Room in a Jetpack Compose app."
            />

            <ProjectCard
              title="MC Catalogue App"
              type="Mobile App"
              summary="MC Catalogue lets users browse recommended movies and TV shows with the highest ratings, built using the MovieDb API."
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
              carousel={[project5, project5i]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Extended a base app template into a fully working movie and TV catalogue with a working favorites feature."
              learnings="Learned dependency injection with Dagger2 and reactive UI updates with LiveData while working with the MovieDb API."
            />

            <ProjectCard
              title="DZikr App"
              type="Flutter App"
              summary="A helpful application for people who want to learn and practice the correct prayers and remembrance according to the Sunnah."
              link="/"
              github="https://github.com/nisajamalia/dzikir_apps"
              tools={["Dart", "State Management", "Widget"]}
              carousel={[project8, project8i]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Delivered a complete prayer and remembrance app that helps users practice daily worship correctly."
              learnings="Learned Flutter's widget system and basic state management, moving beyond native Android development."
            />

            <ProjectCard
              title="Current News App"
              type="Flutter App"
              summary="Current News delivers real-time news articles through a modern, easy-to-read interface."
              link="/"
              github="https://github.com/nisajamalia/current_news"
              tools={[
                "Dart",
                "REST API",
                "RecyclerView",
                "State Management",
                "Widget",
              ]}
              carousel={[project9, project9i]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Built a real-time news reader with a clean, modern interface for browsing current articles."
              learnings="Learned to fetch and manage live API data and handle app state in Flutter."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 5: Featured — Quran App */}
          {/* ================================================================ */}

          <div className="w-full mb-10 md:mb-14">
            <FeaturedProject
              title="Quran App"
              images={[project7, project7i]}
              summary="The Quran app is an application that maximizes your worship with prayer schedule features, various prayers and surahs, and a zakat calculator feature."
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
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Built a multi-feature worship app combining prayer times, Quran text, and a zakat calculator in a single tool."
              learnings="Learned to integrate location-based prayer time APIs with Maps and DatePicker in a native Android app."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 6: 4 Project Cards — C-Health Info, ToDoo, Echo, Football */}
          {/* ================================================================ */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 gap-y-12 mb-10 md:mb-14 items-stretch justify-items-stretch max-w-5xl mx-auto">
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
              carousel={[project13, project13i]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Delivered a Covid-19 information app with charted data to help users track case trends in real time."
              learnings="Learned to visualize API data with a charting library inside an MVVM-based Android app."
            />

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
              carousel={[project12, project12i]}
              projectType="Class Assignment"
              isGroupProject={true}
              role="Handled the end-to-end development of the Android application, from UI/UX design in Figma to implementation using Kotlin and Android Jetpack."
              impact="Delivered a fully working productivity app as my semester deliverable, covering everything from UI design to backend logic."
              learnings="Learned end-to-end app development — UI/UX design, local persistence with Room, and asynchronous work with Coroutines."
            />

            <ProjectCard
              title="Echo"
              type="UI/UX Design"
              summary="Echo App is a platform designed to share volunteer activity information and facilitate the recruitment and registration process for social and community events. It serves as a mediation platform between organizers and volunteers, ensuring a more organized, transparent, and legal process for managing human resources in volunteer programs."
              link="/"
              github="https://github.com/nisajamalia/TodoApps"
              tools={["Figma"]}
              carousel={[project10, project10i]}
              projectType="Competition Project"
              isGroupProject={true}
              role="Designed the full UI/UX flow in Figma, from wireframes to high-fidelity prototypes."
              impact="Produced a complete UX case study addressing a real gap in how volunteer organizers and volunteers coordinate."
              learnings="Learned to conduct user research and translate it into a structured design system in Figma."
            />

            <ProjectCard
              title="Football App"
              type="Mobile App"
              summary="Football App allows users to browse various football leagues and discover detailed information about their favorite clubs. Users can also save clubs to favorites by clicking the like button."
              link="/"
              github="https://github.com/nisajamalia/TodoApps"
              tools={[
                "Kotlin",
                "REST API",
                "Data Binding",
                "Retrofit",
                "Spinner",
              ]}
              carousel={[project14, project14i]}
              projectType="Individual Project (Class Assignment)"
              isGroupProject={false}
              impact="Built a favorites system on top of a public sports API, letting users save and revisit their preferred clubs."
              learnings="Learned to filter data by league using a Spinner and persist user favorites within the app."
            />
          </div>

          {/* ================================================================ */}
          {/* SECTION 7: Featured — Career Sprint */}
          {/* ================================================================ */}

          <div className="w-full">
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
              projectType="Competition Project"
              isGroupProject={true}
              role="Designed all visual and user experience aspects of the platform, including the AI-powered roadmap and progress-tracking flows."
              impact="Reached the final round of ITCC Udayana 2024, standing out among competing teams with a fully designed AI-powered platform."
              learnings="Learned to design AI-driven UX flows and collaborate closely with developers under competition deadlines."
            />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
