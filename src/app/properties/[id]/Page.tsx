"use client";

import PropertyData from "@/app/JsonData/Properties.json";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import PageTitle from "@/components/PageTitle";

interface Property {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string;
  location?: string;
}

interface PropertyDetailsProps {
  params: {
    id: string;
  };
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ params }) => {
  const { id } = params;
  console.log(id);

  const property: Property | undefined = PropertyData.find(
    (item: Property) => item.id === parseInt(id)
  );

  if (!property) notFound();

  const relatedProperties: Property[] = PropertyData.filter(
    (item: Property) =>
      item.id !== property?.id && item.location === property?.location
  );
  console.log(relatedProperties.map((p) => p.id));

  return (
    <>
      {/* Page Title */}
      <PageTitle title={property.title} />
      {/* Property Details */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start gap-2">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 font-bricolage mb-2">
                  {property.title}
                </h2>

                <p className="text-lg text-gray-600 mb-1 leading-relaxed">
                  {property.desc}
                </p>
              </div>
              <span className="text-3xl pe-6 font-semibold text-shadow-gray-800">
                ${property.price}
              </span>
            </div>

            {/* Static Info Section */}
            <div className="mb-6 mt-3 space-y-1 text-gray-700 font-medium flex flex-wrap gap-x-5 gap-y-3">
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Area:</span> 2200 Sq. Ft.
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Location:</span> USA
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Design By:</span> John Doe.
              </p>
              <p className="p-2 rounded border border-gray-800">
                <span className="font-semibold">Client:</span> Jay Smith.
              </p>
            </div>

            <p className="mt-3 font-bricolage text-gray-700">
              A cozy and modern home designed for comfortable living, Properties
              3 combines practical layout with stylish details . Perfect for
              those seeking a a peaceful and affordable residence.
            </p>
            <p className="mt-3 font-bricolage text-gray-700">
              This charming property offers a bright and inviting space, ideal
              for a growing family or anyone looking for. Experience comfort and
              convenience in a beautiful.
            </p>
          </div>
        </div>
      </div>

      {/* Decs */}
      <div className="px-[8%] lg:px-[12%] py-16">
        <h1 className="text-6xl font-bricolage font-bold mb-10">Description</h1>
        <p className="font-bricolage text-lg mb-2">
          This 22000 sqft residence in Prabha Colony, Godhra showcases a subtle
          and sophisticated approach to modern living. Designed with a
          minimalist mindset, the home balances functionality with elegance
          through clean geometry, soft neutral tones, and purposeful spatial
          planing.
        </p>
        <p className="font-bricolage text-lg mb-2">
          A minimal yet impactful approach, tailored for healing and clarity.
        </p>
        <p className="font-bricolage text-lg mb-2">
          A minimal yet impactful approach, tailored for healing and clarity.
        </p>
      </div>

      {/* Amenities */}
      <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">Amenities</h1>

        {/* Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
          <div className="flex items-center gap-3">
            <i className="bi bi-lightning-charge text-yellow-600 text-2xl">
              <span className="font-medium">Power Back Up</span>
            </i>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-wifi text-yellow-600 text-2xl">
              <span className="font-medium">Internet/Wifi Connectivity</span>
            </i>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-tools text-yellow-600 text-2xl">
              <span className="font-medium">Maintenance Staff</span>
            </i>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-list text-yellow-600 text-2xl">
              <span className="font-medium">Lift</span>
            </i>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-building text-yellow-600 text-2xl">
              <span className="font-medium">Vaastu Complaint</span>
            </i>
          </div>
          <div className="flex items-center gap-3">
            <i className="bi bi-houses text-yellow-600 text-2xl">
              <span className="font-medium">Rentable Cummunity Space</span>
            </i>
          </div>
        </div>
      </div>

      {/* Related Properties */}
      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
        {" "}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Related Properties
        </h2>
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
          {relatedProperties.map((property) => (
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
      </div>
    </>
  );
};

export default PropertyDetails;
