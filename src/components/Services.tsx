import Image from "next/image";
import React from "react";

const Services = () => {
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

  return (
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
  );
};

export default Services;
