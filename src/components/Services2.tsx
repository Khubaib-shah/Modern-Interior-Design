import Image from "next/image";
import React from "react";

const Services2 = () => {
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

  return (
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
  );
};

export default Services2;
