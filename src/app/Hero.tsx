"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

// ============ Json Data ============

import PropertyData from "@/app/JsonData/Properties.json";

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

// Design Process
const processSteps = [
  {
    id: 1,
    imgSrc: "/process-icon-1.svg",
    title: "Consultation and initial meeting",
    description:
      "The architect meets with the client to discuss their needs, preferences, and budget for the project.",
  },
  {
    id: 2,
    imgSrc: "/process-icon-2.svg",
    title: "Concept design",
    description:
      "Based on the client's input, the architect develops a preliminary design concept and presents it to the client for feedback.",
  },
  {
    id: 3,
    imgSrc: "/process-icon-3.svg",
    title: "Design development",
    description:
      "Once the design is finalized, the architect creates detailed construction drawings and specifications for the project.",
  },
  {
    id: 4,
    imgSrc: "/process-icon-4.svg",
    title: "Permitting and approvals",
    description:
      "Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities.",
  },
];

// Services
const Services = [
  {
    icon: "/service-icon-1.svg",
    title: "Space Planning",
    description:
      "Designing efficient layouts that maximize comfort and usability.",
  },

  {
    icon: "/service-icon-2.svg",
    title: "3D Visualization",
    description:
      "Providing realistic previews of designs before implementation.",
  },

  {
    icon: "/service-icon-3.svg",
    title: "Lighting Design",
    description:
      "Creating mood and function with the perfect blend of natural and artificial light.",
  },

  {
    icon: "/service-icon-4.svg",
    title: "Project Management",
    description:
      "Coordinating timelines, budgets, and contractors for seamless execution.",
  },

  {
    icon: "/service-icon-5.svg",
    title: "Custom Decor",
    description:
      "Personalizing interiors with unique accessories and artistic details.",
  },

  {
    icon: "/service-icon-6.svg",
    title: "Material & Finish Selection",
    description:
      "Selecting quality textures and finishes to enhance durability and aesthetics.",
  },
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
              At Khubaib Shah Associates, we're committed to transforming
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

      {/* Design Process */}
      <div className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-8xl font-bricolage font-semibold">
                Our Design Process
              </h1>
            </div>
            <div className="lg:w-1/3">
              <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                Process
              </h3>

              <p>
                Discover how our process transform ideas into personalized,
                functional, and styled spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-10">
            {processSteps.map(({ id, imgSrc, title, description }) => (
              <div
                key={id}
                className="flex flex-col items-center cursor-pointer relative group"
              >
                {/* circle with image and number */}
                <div className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-200">
                  <Image
                    src={imgSrc}
                    alt={`Process ste ${id}`}
                    className="w-[70px] transition-transform duration-500 ease-out group-hover:-rotate-y-360"
                    width={100}
                    height={100}
                  />

                  <span className="absolute -top-3 rotate-3 bg-black text-white size-8 flex items-center justify-center rounded-full text-sm font-semibold select-none">
                    {id}.
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bricolage  text-xl mt-6 mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:w-0 group-hover:after:w-full after:transition-width after:duration-300">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 text-base max-w-[70%] mx-auto">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="px-[8%] lg:px-[12%] py-12 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text=[4rem] leading-[4rem]  lg:text-[6rem] lg:leading-[6rem] font-bold tracking-[.2rem] font-bricolage">
              Interior Design Solutions
            </h2>
          </div>
          <div className="w-1/2">
            <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
              Our Services
            </h3>
            <p>
              Wether you're dreaming of a cozy home retreat or a bold, modern
              workspace, our expert designers are here to bring your vision to
              life
            </p>
            <a
              href="/services"
              className="inline-flex items-center text-black font-medium hover:underline text-lg"
            >
              All Services <span className="bi bi-arrow-up-right ms-2"></span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {Services.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="border border-black p-6 rounded-xl transition-all hover:border-transparent shadow hover:shadow-lg cursor-pointer hover:-translate-y-1 group"
            >
              <Image
                src={icon}
                alt={title}
                width={60}
                height={60}
                className="mb-4 transition-transform duration-700 group-hover:rotate-[-15deg]"
              />
              <h3 className="text-3xl relative inline-block mt-2 mb-2 after:block after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black group-hover:after:w-full after:transition-all after:duration-300 font-semibold font-bricolage">
                {title}
              </h3>
              <p className="text-gray-700 font-normal w-4/5">{description}</p>
            </div>
          ))}
        </div>
      </section>

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
              <Link href={`properties ${property.id}`}>
                <div className="relative h-[450px] rounded overflow-hidden group cursor-pointer">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="100%"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

                  {/* Title & Price */}
                  <div className="flex justify-between items-center w-full absolute bottom-0 left-0 z-10 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h4 className="text-white text-2xl font-bricolage font-bold">
                      {property.title}
                    </h4>
                    <p className="text-white text-xl font-bricolage font-semibold">
                      ${property.price}
                    </p>
                  </div>
                </div>
              </Link>
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
    </>
  );
};

export default Hero;
