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

// Marquee 2
const marqueeText2 = [
  {
    imgs: "/property-1.jpg",
    title: "Space Planing & Layout",
  },
  {
    imgs: "/property-2.jpg",
    title: "Color & Material Consultation",
  },
  {
    imgs: "/property-3.jpg",
    title: "Space Planing & Layout",
  },
  {
    imgs: "/property-4.jpg",
    title: "Commercial Interior Design",
  },
  {
    imgs: "/property-5.jpg",
    title: "Furniture & Decor Selection",
  },
];

// Services
const services2 = [
  {
    icon: "/structure-design-icon.png",
    title: "Structural Engineering",
    description:
      "Designing safe, durable, and sustainable structures with precision and innovation.",
  },
  {
    icon: "/service-icon-1.svg",
    title: "Architectural Design",
    description:
      "Creating modern, functional layouts that balance beauty and practicality.",
  },
  {
    icon: "/service-icon-2.svg",
    title: "Interior Design",
    description:
      "Crafting stylish interiors with personalized decor, colors, and textures.",
  },
  {
    icon: "/service-icon-3.svg",
    title: "Landscape Planning",
    description:
      "Designing green spaces that enhance outdoor living and connect with nature.",
  },
  {
    icon: "/service-icon-4.svg",
    title: "3D Visualization",
    description:
      "Delivering realistic renderings so clients can preview projects before construction.",
  },
  {
    icon: "/service-icon-5.svg",
    title: "Project Management",
    description:
      "Coordinating timelines, resources, and teams to ensure smooth execution.",
  },
];

// Gallery
const galleryItems = [
  {
    img: "/property-1.jpg",
    title: "Gallery 1",
  },
  {
    img: "/property-2.jpg",
    title: "Gallery 2",
  },
  {
    img: "/property-3.jpg",
    title: "Gallery 3",
  },
  {
    img: "/property-4.jpg",
    title: "Gallery 4",
  },
  {
    img: "/property-5.jpg",
    title: "Gallery 5",
  },
  {
    img: "/property-6.jpg",
    title: "Gallery 6",
  },
];

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
              <Link href={`properties/${property.id}`}>
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

      {/* Marquee 2 */}
      <div className="overflow-hidden whitespace-nowrap py-12">
        <div className="animate-marquee flex items-center gap-8">
          {marqueeText2.map((marquee, index) => (
            <div key={index} className="flex items-center gap-10 mr-12">
              <div className="w-[250px] h-[100px] overflow-hidden rounded-full">
                <Image
                  src={marquee.imgs}
                  alt={marquee.title}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-[250px] h-[100px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                  {marquee.title}
                </span>
              </div>
            </div>
          ))}
          {marqueeText2.map((marquee, index) => (
            <div
              key={`clone-${index}`}
              className="flex items-center gap-10 mr-12"
            >
              <div className="w-[250px] h-[100px] overflow-hidden rounded-full">
                <Image
                  src={marquee.imgs}
                  alt={marquee.title}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="min-w-[250px] h-[100px] border-2 border-gray-300 rounded-full flex items-center justify-center">
                <span className="text-black text-2xl font-bold uppercase px-4 text-center">
                  {marquee.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services 2 */}
      <section className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text=[4rem] leading-[4rem]  lg:text-[6rem] lg:leading-[6rem] font-bold tracking-[.2rem] font-bricolage">
              Architecture <br /> Design Solution
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
          {services2.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="border border-black p-6 rounded-xl transition-all hover:border-transparent shadow hover:shadow-lg cursor-pointer hover:-translate-y-1 group mt-10"
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

      {/* Gallery */}
      <section className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-8xl font-bricolage font-bold mb-10">Gallery</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative h-[400px] rounded overflow-hidden group cursor-pointer"
              >
                <a
                  href={item.img}
                  data-lightbox={item.lightbox}
                  data-title={item.title}
                  aria-label={`View ${item.title}`}
                  className="block relative w-full h-full overflow-hidden rounded-md"
                >
                  {/* Image */}
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="100%"
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay Title */}
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent z-30 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
                    <h4 className="text-white text-2xl md:text-3xl font-bricolage">
                      {item.title}
                    </h4>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Ready For An Upgrade? Let's Talk
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
              <div className="w-full h-full">
                <img
                  src={src}
                  alt={`Social Slide ${index + 1}`}
                  className="w-full h-full object-cover"
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
