import Image from "next/image";
import React from "react";
import DesignProcess from "../../components/DesignProcess";
import Gallery from "@/components/Gallery";
import PageTitle from "@/components/PageTitle";

const About = () => {
  return (
    <>
      {/* Page Title */}
      <PageTitle title="About Us" />

      {/* About Us */}
      <div className="bg-white py-10">
        {/* Top Section */}

        <div className="container mx-auto mb-10 px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-2/3 mb-6 lg:mb-0">
              <h1 className="text-3xl lg:text-8xl font-bold text-gray-800">
                Interior & Exterior Solutions
              </h1>
            </div>
            <div className="lg:w-1/3">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  About Us
                </h3>
                <p className="mt-2 text-gray-600">
                  Designing Dreams, Crafting Spaces — Where Vision Meets
                  Elegance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
              <Image
                src="/ab-vision-image1.jpeg"
                alt="Vision"
                width={100}
                height={80}
                className="w-full h-[500px] object-cover"
              />
            </div>

            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                <span className="text-gray-800 font-bold me-1 ">Our</span>
                vision is to become a leader in transforming spaces through
                innovative and thoughtful design. We aim to create environments
                that not only meet the aesthetic and functional needs of our
                clients but also inspire creativity, foster well-being, and
                enhance the overall quality of life.
              </p>
              <p className="text-gray-800 leading-relaxed ">
                By blending modern design principles with sustainable practices,
                we strive to deliver spaces that stand the test of time. Our
                approach focuses on attention to detail, collaboration with
                clients, and innovative solutions that bring both beauty and
                functionality together seamlessly. Every project we take on is a
                step toward shaping a future where design not only looks good
                but also makes a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-col lg:flex-row-reverse items-center">
            <div className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-lg">
              <Image
                src="/ab-vision-image2.jpeg"
                alt="Vision"
                width={100}
                height={80}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <p className="mb-4 text-gray-700 leading-relaxed">
                At <strong>LivingLines</strong>, Our mission is to craft
                inspiring, functional, and personalized spaces that elevate the
                way our clients live, Work and experience their surroundings. We
                are committed to delivering exceptional design solutions that
                blend creativity with practicality, transforming every
                environment into a reflection of the client's unique vision.
              </p>
              <p className="text-gray-800 leading-relaxed">
                We strive to build lasting relationships with our clients,
                ensuring each project is executed with attention to detail,
                innovation, and impeccable craftsmanship. Our goal is o create
                spaces that inspire, enrich, and enhance the everyday lives of
                those who inhabit them.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Design Process */}
      <DesignProcess />

      {/* Gallery */}
      <Gallery />
    </>
  );
};

export default About;
