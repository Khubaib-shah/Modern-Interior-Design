"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// ============ Json Data ============

import PropertyData from "@/app/JsonData/Properties.json";
import Gallery from "../components/Gallery";
import DesignProcess from "../components/DesignProcess";
import Services2 from "@/components/Services2";
import Marquee2 from "@/components/Marquee2";
import Services from "@/components/Services";
import PropertyCard from "@/components/PropertyCard";

//  =========== Content ============

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
    "With a passion for creativity and a commitment to excellence, we have transformed numerous spaces into stunning environments that reflect our clients unique styles and needs.",
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

// Testimonials
const testimonials = [
  {
    name: "Riyan Shah",
    location: "Gulshan, Karachi",
    image: "/User.jpg",
    feedback:
      "Khubaib Shah Associates transformed our home into a modern masterpiece. Their attention to detail and innovative designs exceeded.",
  },
  {
    name: "Ayesha Khan",
    location: "Clifton, Karachi",
    image: "/User.jpg",
    feedback:
      "The team was professional and creative. They helped us design our office interior beautifully, blending style with functionality. Truly impressed!",
  },
  {
    name: "Imran Ali",
    location: "PECHS, Karachi",
    image: "/User.jpg",
    feedback:
      "From consultation to execution, everything was seamless. They delivered exactly what we had in mind, and even better. Excellent work!",
  },
  {
    name: "Sana Ahmed",
    location: "Bahria Town, Karachi",
    image: "/User.jpg",
    feedback:
      "We loved working with Khubaib Shah Associates. They brought fresh ideas and made sure the project was completed on time. Very satisfied!",
  },
  {
    name: "Farhan Malik",
    location: "North Nazimabad, Karachi",
    image: "/User.jpg",
    feedback:
      "Their team not only understood our requirements but also guided us with better design choices. The results were outstanding!",
  },
  {
    name: "Hira Fatima",
    location: "DHA, Karachi",
    image: "/User.jpg",
    feedback:
      "Super creative and reliable team! They completely upgraded our living space and turned it into something elegant and comfortable.",
  },
];

const socialImages = [
  "/social-slide-1.jpg",
  "/social-slide-2.jpg",
  "/social-slide-3.jpg",
  "/social-slide-4.jpg",
  "/social-slide-5.jpg",
];

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
      <section className="px-[8%] lg:px-[12%] py-12">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text=[4rem] leading-[4rem]  lg:text-[6rem] lg:leading-[6rem] font-bold tracking-[.2rem] font-bricolage">
              Interior & Architecture Design Solutions
            </h2>
          </div>
          <div className="w-1/2">
            <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
              About Us
            </h3>
            <p>
              At Khubaib Shah Associates, we&apos;re committed to transforming
              through creative vision, elegant design, and solutions that truly
              your lifestyle.
            </p>
            <a
              href="/about"
              className="inline-flex items-center text-black font-medium hover:underline text-lg"
            >
              Company Info <span className="bi bi-arrow-up-right ms-2"></span>
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
                  <Image
                    src={`/${image}`}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[580px] object-cover rounded"
                    width={1200}
                    height={580}
                    priority={index === 0}
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
                      ? "text-black after:absolute after:content-[] after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-black"
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

      {/* Design Process */}
      <DesignProcess />

      {/* Services */}
      <Services />

      {/* our Properties */}
      <section className="px-[8%] lg:px-[12%] py-12 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text=[4rem] leading-[4rem]  lg:text-[6rem] lg:leading-[6rem] font-bold tracking-[.2rem] font-bricolage">
              Our Properties
            </h2>
          </div>
          <div className="w-1/2">
            <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
              Our Properties
            </h3>
            <p>
              we build our projects with your dreams and ideas. Touch modern
              concepts and designs with Khubaib Shah Associates.
            </p>
            <a
              href="/properties"
              className="inline-flex items-center text-black font-medium hover:underline text-lg"
            >
              View More <i className="bi bi-arrow-up-right ms-2"></i>
            </a>
          </div>
        </div>

        <Swiper
          loop={true}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-project-next",
            prevEl: ".swiper-project-prev",
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {PropertyData.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper Navigation Buttons */}
        <div className="swiper-project-next hidden lg:flex items-center justify-center absolute right-3 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md cursor-pointer hover:bg-black hover:text-white transition">
          <i className="bi bi-arrow-right"></i>
        </div>
        <div className="swiper-project-prev hidden lg:flex items-center justify-center absolute left-3 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-md cursor-pointer hover:bg-black hover:text-white transition">
          <i className="bi bi-arrow-left"></i>
        </div>
      </section>

      {/* Marquee 2 */}
      <Marquee2 />

      {/* Services 2 */}
      <Services2 />

      {/* Gallery */}
      <Gallery />

      {/* Video Banner */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center px-4 z-10">
          <h2 className="text-5xl md:text-6xl font-bricolage font-bold text-white">
            Ready For An Upgrade? Let&apos;s Talk
          </h2>

          <button className="mt-10 px-6 py-3 cursor-pointer bg-white text-black font-semibold rounded hover:bg-gray-200 transition hover:translate-y-1">
            Contact Us
          </button>
        </div>
      </div>

      {/* Testimonial */}
      <section className="px-[8%] lg:px-[12%] py-20">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bricolage font-bold leading-tight">
              Client <br /> Testimonials
            </h2>
          </div>
          <div className="lg:w-2/5">
            <h3 className="text-xl font-semibold mb-2">Testimonials</h3>
            <p className="text-gray-600">
              Discover how our thoughtful process transforms ideas into
              personalized, functional, and beautifully styled spaces.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          loop={true}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                <Image
                  src="/qoute.svg"
                  alt="quote"
                  width={40}
                  height={40}
                  className="mb-4 opacity-25 object-contain"
                />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.feedback}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="font-semibold text-lg">
                      {testimonial.name}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Social Images */}
      <div className="w-full h-[500px]">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full h-full"
        >
          {socialImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full relative">
                <Image
                  src={src}
                  alt={`Social Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
