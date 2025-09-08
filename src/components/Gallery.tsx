import Image from "next/image";
import React from "react";

const Gallery = () => {
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
  return (
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
  );
};

export default Gallery;
