"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
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

const Hero = () => {
  const [activeTab, setActiveTab] = useState("his");

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
    </>
  );
};

export default Hero;
