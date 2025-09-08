import Image from "next/image";
import React from "react";

const Marquee2 = () => {
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

  return (
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
  );
};

export default Marquee2;
