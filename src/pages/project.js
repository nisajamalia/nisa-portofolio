import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Slider from "react-slick"; // 🎠 Carousel
import { motion } from "framer-motion";
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

// ===== Featured Project Component =====
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
  className="w-full flex items-center justify-between relative rounded-3xl border border-solid shadow-2xl py-6 px-8"

      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      {/* Background Layer */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl"
        style={{ backgroundColor: "#000000" }}
      />

      {/* Carousel Project Images */}
      <div className="w-1/2 rounded-xl overflow-hidden">
        <Slider {...settings}>
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`${title}-${index}`}
              className="w-full h-auto object-cover rounded-xl"
            />
          ))}
        </Slider>
      </div>

      {/* Detail Project */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-10">
        <span className="text-primary font-medium text-xl">{type}</span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        <p className="my-4 font-medium text-dark opacity-80">{summary}</p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-sm bg-gray-900 text-white py-1 px-3 rounded-full shadow"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-4">
          <Link
            href={github}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
          >
            <GithubIcon className="w-10 h-10" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "9px",
            }}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

// ===== Project Card Component =====
const ProjectCard = ({ title, type, summary, img, link, github, tools }) => {
  return (
   <article
  className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md py-4 px-5"

      style={{
        backgroundColor: "#ffffff",
        borderColor: "#000000",
      }}
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
        style={{ backgroundColor: "#000000" }}
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto transition-transform duration-300 hover:scale-105"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-lg">{type}</span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
        </Link>

        <p className="my-2 font-medium text-dark text-sm">{summary}</p>

        {/* Tools Used */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="mt-2 flex items-center gap-3">
          <Link
            href={github}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
            style={{ backgroundColor: "#000000", color: "#ffffff" }}
          >
            <GithubIcon className="w-10 h-10" />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            style={{
              backgroundColor: "#000000",
              color: "#ffffff",
              borderRadius: "9px",
            }}
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

// ===== HouseUz App =====
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

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge" className="mb-16" />

          {/* Grid Project */}
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            {/* Featured Project 1 */}
            <div className="col-span-12">
              <FeaturedProject
                title="HouseUz App"
                images={[project6, project6i]}
                summary={
    <>
      <p>
        An application designed to help users easily find houses that match their preferences. This project was developed during my internship at Nusantara Global Inovasi. The app focuses on simplifying the house-hunting process for users who are unsure where to start looking.
      </p>
      <p className="mt-4">
        The backend was fully built from scratch using Laravel, where I created and managed the database and developed a custom REST API. This API was then integrated into the Android application, which was developed using Kotlin and followed the MVVM architecture pattern.
      </p>
    </>
  }
                link="/"
                github="https://github.com/nisajamalia/DisneyMotion"
                type="Mobile App"
                tools={[
                  "Kotlin",
                  "REST API",
                  "Anko",
                  "Firebase",
                  "Retrofit",
                  "Room",
                  "Data Binding",
                  "MVVM Architecture",
                ]}
              />
            </div>

            {/* Weather Apps */}
            <div className="col-span-6">
              <ProjectCard
                title="Weather Apps"
                img={project3}
                summary="
See the weather forecast wherever you are. Search for the location you want to get the latest weather information. No matter where you are, the weather
 forecast is always accurate &
 beautifully presented."
                link="/"
                github="https://github.com/nisajamalia/HomeMarketPlace"
                type="Mobile App"
                tools={["Kotlin", "API", "Date & Time"]}
              />
            </div>

            {/* Food Recipes App */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project4, project4i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Food Recipes App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Food Recipes App
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    Foodie is a project on how to get data from the given API.
                    The data contains food recipes with three menus — Seafood,
                    Dessert, and Profile.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "REST API",
                      "GridLayout",
                      "RecyclerView",
                      "Glide",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/KitchenRecipes"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* MC Catalogue App */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project5, project5i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Food Recipes App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      MC Catalogue App
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    MC Catalogue is an application that let you view
                    recommendations for the best movies and TV shows with the
                    highest ratings. This application created using the API from
                    MovieDb and we applied it to Android Studio.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "REST API",
                      "Data Binding",
                      "MVVM",
                      "LiveData",
                      "Dagger2",
                      "Retrofit",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/MyMovieCatalogueExtension2"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Disney Motion */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project1, project2].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Disney Motion App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Disney Motion App
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      "disney motion is an application that displays a synopsis or movie storyline from disney films. suitable for those of you who want to know first what the movie is about"
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "Jetpack Compose",
                      "Room Database",
                      "MVVM Architecture",
                      "Koin(Depedency Injection)",
                      "Lifecycle",
                      "DataBinding",
                      "Retrofit2",
                      "Glide",
                      "RecyclerView",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/DisneyMotion"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
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

            {/* DZikr Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project8, project8i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Dzikr App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Flutter App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Dzikr App
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      " a useful application for people who still don't know about the correct prayer and remembrance according to the sunnah"
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Dart", "State Management", "Widget"].map(
                      (tool, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                        >
                          {tool}
                        </span>
                      )
                    )}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/dzikir_apps"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Current News Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project9, project9i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Current News App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Flutter App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Current News 
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      "the latest updated news application, you can feel the sensation of reading updated news in the current news application with various interesting features"
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Dart",
                      "REST API",
                      "RecyclerView",
                      "State Management",
                      "Widget",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/current_news"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* CHealth Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project13, project13i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`C-Health App ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      C-Health Info
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      "This application displays the latest Covid info updates throughout the world and Indonesia"
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "MVVM Architecture",
                      "Retrofit",
                      "Live Data",
                      "Chart Library",
                      "RecyclerView",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/Covid19Info"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* ToDoo Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project12, project12i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Todoo Apps ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Todoo Apps
                    </h2>
                  </Link>

                  <div className="my-2 font-medium text-dark text-sm">
  <p>
    This is my 4th-semester project, and I contributed to every stage of development — from designing the user interface to building the entire application. 
  </p>
  <p className="mt-3">
    Todoo is a mobile app designed for students who often feel overwhelmed by academic workloads. It helps manage time and assignments more effectively by organizing busy schedules, providing smart task suggestions, reminders, and timers to reduce stress and improve productivity.
  </p>
</div>


                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "Android Jetpack",
                      "MVVM Architecture",
                      "Retrofit",
                      "Coroutines",
                      "LiveData",
                      "Room",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/TodoApps"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Featured Project 3 */}
            <div className="col-span-12">
              <FeaturedProject
                title="Career Sprint"
                images={[project11, project11i]}
              summary={
  <>
    <p>
      Career Sprint is a competition project that reached the final round of ITCC Udayana 2024. Our team developed an innovative task management platform designed to help employees track progress and achieve their goals through AI-powered interactive roadmaps.
    </p>
    <p className="mt-4">
      I was responsible for designing all visual and user experience aspects of the project. Key features include real-time progress tracking, AI-driven feedback analysis, and personalized roadmap-based training to support continuous skill development.
    </p>
  </>
}

                link="/"
                github="/"
                type="UI/UX Design"
                tools={["Figma"]}
              />
            </div>

            {/* Echo Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project10, project10i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`Todoo Apps ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    UI/UX Design
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Echo
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      "Echo Apps is a platform designed to share volunteer activity information and facilitate the recruitment and registration process for social and community events. It serves as a mediation platform between organizers and volunteers, ensuring a more organized, transparent, and legal process for managing human resources involved in volunteer programs."
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {["Figma"].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/TodoApps"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* Football Apps */}
            <div className="col-span-6">
              <article
                className="relative w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-md p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#000000",
                }}
              >
                <div
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]"
                  style={{ backgroundColor: "#000000" }}
                />

                {/* 🎠 Carousel */}
                <div className="w-full rounded-xl overflow-hidden mb-4">
                  <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={2000}
                    arrows={false}
                  >
                    {[project14, project14i].map((imgSrc, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={imgSrc}
                          alt={`football Apps ${index}`}
                          className="w-full h-auto object-cover rounded-xl"
                        />
                      </motion.div>
                    ))}
                  </Slider>
                </div>

                <div className="w-full flex flex-col items-start justify-between">
                  <span className="text-primary font-medium text-lg">
                    Mobile App
                  </span>

                  <Link
                    href="/"
                    target="_blank"
                    className="hover:underline underline-offset-2"
                  >
                    <h2 className="my-2 w-full text-left text-2xl font-bold">
                      Football Apps
                    </h2>
                  </Link>

                  <p className="my-2 font-medium text-dark text-sm">
                    {
                      "Football App is used for seeing a list of any existing leagues. And we can also find what football club we like along with a description of the club. We can also save the data by clicking like."
                    }
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "Kotlin",
                      "REST API",
                      "Data Binding",
                      "Retrofit",
                      "Spinner",
                    ].map((tool, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-900 text-white py-1 px-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-2 flex items-center gap-3">
                    <Link
                      href="https://github.com/nisajamalia/TodoApps"
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                      style={{ backgroundColor: "#000000", color: "#ffffff" }}
                    >
                      <GithubIcon className="w-10 h-10" />
                    </Link>

                    <Link
                      href="/"
                      target="_blank"
                      className="py-2 px-8 text-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                      style={{
                        backgroundColor: "#000000",
                        color: "#ffffff",
                        borderRadius: "9px",
                      }}
                    >
                      Visit
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Project;
