"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import Link from "next/link";

// Hero
const HeroSlides = [
  {
    bgImage: "/Hero-2.webp",
    span: "Interior Design",
    title: "Modern \nElegance",
    paragraphs: [
      "Transform your living and working spaces with contemporary design solutions.",
      "We blend creativity and functionality to deliver interiors that inspire comfort.",
    ],
    buttonText: "About Us",
    buttonLink: "/about",
  },
  {
    bgImage: "/Hero-3.webp",
    span: "Architecture",
    title: "Bold \nStructures",
    paragraphs: [
      "From concept to construction, our architectural vision turns ideas into reality.",
      "We focus on strength, sustainability, and innovation in every project.",
    ],

    buttonText: "Portfolio",
    buttonLink: "/projects",
  },
  {
    bgImage: "/Hero-4.webp",
    span: "Landscape Design",
    title: "Nature \nInspired",
    paragraphs: [
      "Crafting outdoor spaces that harmonize with nature and human activity.",
      "Our landscapes are designed to be serene, sustainable, and timeless.",
    ],

    buttonText: "Blog",
    buttonLink: "/blog",
  },
  {
    bgImage: "/Hero-5.webp",
    span: "Urban Planning",
    title: "Future \nCities",
    paragraphs: [
      "Designing modern urban spaces that are functional and eco-conscious.",
      "We envision cities where innovation meets livability and growth.",
    ],

    buttonText: "Services",
    buttonLink: "/services",
  },
];

const marqueeText = [
  "Space Planning & Layout",
  "Color & material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",

  "Space Planning & Layout",
  "Color & material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",

  "Space Planning & Layout",
  "Color & material Consultation",
  "Renovation",
  "Commercial Interior Design",
  "Furniture & Decor Selection",
  "Structure Design",
  "Residential Space",
];

type TabId = "his" | "mis" | "vis";
// About Tabs
const tabs: { id: TabId; label: string }[] = [
  { id: "his", label: "Our History" },
  { id: "mis", label: "Our Mission" },
  { id: "vis", label: "Our Vision" },
];

const tabContent: Record<TabId, string[]> = {
  his: [
    "Founded in 2023, Khubaib Shah Associates has quickly established itself as a leader in interior and architectural design.",
    "With a passion for creativity and a commitment to excellence, we have transformed numerous spaces into stunning environments that reflect our clients' unique styles and needs.",
  ],
  mis: [
    "Our mission is to deliver innovative design solutions that enhance the quality of life for our clients.",
    "We strive to create spaces that are not only aesthetically pleasing but also functional and sustainable, ensuring that every project we undertake exceeds expectations.",
  ],
  vis: [
    "We envision a future where design plays a pivotal role in shaping the way we live and interact with our environments.",
    "Our goal is to be at the forefront of this evolution, continuously pushing the boundaries of creativity and innovation in interior and architectural design.",
  ],
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState<TabId>("his");

  return (
    <>
      {/* Hero */}
      <div className="w-full h-screen relative">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {HeroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative w-full h-screen flex justify-center items-center text-white px-6"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl hero-content text-start space-y-6">
                  <span className="text-xl font-medium uppercase">
                    {slide.span}
                  </span>
                  <h1 className="text-6xl md:text-8xl font-bold font-bricolage whitespace-pre-line">
                    {slide.title}
                  </h1>
                  <div className="flex flex-col md:flex-row gap-4 text-lg">
                    {slide.paragraphs.map((pera, i) => (
                      <p key={i} className="max-w-xl">
                        {pera}
                      </p>
                    ))}
                  </div>
                  <Link href={slide.buttonLink}>
                    {" "}
                    <button className="mt-4 cursor-pointer rounded px-6 py-2 border border-white text-white uppercase tracking-wide hover:bg-white hover:text-black transition-all">
                      {slide.buttonText}
                      <i className="bi bi-arrow-right ml-2"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation Buttons */}
          <div className="swiper-button-next swiper-btn swiper-next right-4 top-[80%] absolute z-20">
            <i className="ri-arrow-right-wide-line"></i>
          </div>
          <div className="swiper-button-prev swiper-btn swiper-prev left-4 top-[60%] absolute z-20">
            <i className="ri-arrow-left-wide-line"></i>
          </div>
        </Swiper>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden whitespace-nowrap my-10 relative">
        <div className="animate-marquee flex w-max gap-8">
          {marqueeText.map((text, index) => (
            <div
              key={index}
              className="min-w-[250px] border-2 border-gray-300 rounded-full flex items-center justify-center text-black  text-2xl font-bold uppercase px-5 py-2"
            >
              {text}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section className="px-[8%] lg:px-[12%] py-12 border">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text=[4rem] leading-[4rem]  lg:text-[6rem] lg:leading-[6rem] font-bold tracking-[.2rem] font-[bricolage-font]">
              Interior & Architecture Design Solutions
            </h2>
          </div>
          <div className="w-1/2">
            <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
              About Us
            </h3>
            <p>
              At Khubaib Shah Associates, we're committed to transforming
              through creative vision, elegant design, and solutions that truly
              your lifestyle.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-black font-medium hover:underline text-lg"
            >
              Company Info <span className="ml-2 -rotate-45 text-sm">→</span>
            </a>
          </div>
        </div>

        {/* Main Section */}

        <div className="mt-12 flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 w-full">
            <Swiper
              modules={[Navigation, EffectCards, Autoplay]}
              loop={true}
              effect="cards"
              grabCursor={true}
              autoplay={{ delay: 1500 }}
              navigation={{
                nextEl: ".swiper-about-next",
                prevEl: ".swiper-about-prev",
              }}
              className="rounded"
              style={{ padding: "30px" }}
            >
              {[
                "interior-image-01.jpg",
                "interior-image-02.jpg",
                "interior-image-05.jpg",
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={`/${image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[580px] object-cover rounded"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Tabs & Content */}
          <div className="lg:w-1/2 w-full lg:px-10 pt-10 ">
            <div className="flex gap-6 border-b mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`relative pb-2 text-lg font-medium transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? "text-black after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="space-y-4 text-gray-700 ">
              {tabContent[activeTab].map((para, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
