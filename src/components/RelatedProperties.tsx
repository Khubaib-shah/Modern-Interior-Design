"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Property {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string;
  location?: string;
}

const RelatedProperties = ({ related }: { related: Property[] }) => {
  return (
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
      {related.map((property) => (
        <SwiperSlide key={property.id}>
          <Link href={`/properties/${property.id}`}>
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
  );
};

export default RelatedProperties;
