"use client";

import { useParams } from "next/navigation";
import PropertyData from "@/JsonData/Properties.json";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";
import RelatedProperties from "@/components/RelatedProperties";
import { useEffect, useState } from "react";

interface Property {
  id: number;
  title: string;
  image: string;
  desc: string;
  price: string;
  location?: string;
}

const PropertyInfo = ({ property }: { property: Property }) => (
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

    <div className="mb-6 mt-3 space-y-1 text-gray-700 font-medium flex flex-wrap gap-x-5 gap-y-3">
      <p className="p-2 rounded border border-gray-800">
        <span className="font-semibold">Area:</span> 2200 Sq. Ft.
      </p>
      <p className="p-2 rounded border border-gray-800">
        <span className="font-semibold">Location:</span> {property.location || "Unknown"}
      </p>
      <p className="p-2 rounded border border-gray-800">
        <span className="font-semibold">Design By:</span> John Doe
      </p>
      <p className="p-2 rounded border border-gray-800">
        <span className="font-semibold">Client:</span> Jay Smith
      </p>
    </div>

    <p className="mt-3 font-bricolage text-gray-700">
      A cozy and modern home designed for comfortable living. Perfect for those seeking a peaceful and affordable residence.
    </p>
    <p className="mt-3 font-bricolage text-gray-700">
      This charming property offers a bright and inviting space, ideal for a growing family. Experience comfort and convenience in a beautiful home.
    </p>
  </div>
);

const PropertyDescription = () => (
  <div className="px-[8%] lg:px-[12%] py-16">
    <h1 className="text-6xl font-bricolage font-bold mb-10">Description</h1>
    <p className="font-bricolage text-lg mb-2">
      This residence showcases a subtle and sophisticated approach to modern living. Designed with a minimalist mindset, the home balances functionality with elegance through clean geometry, soft neutral tones, and purposeful spatial planning.
    </p>
    <p className="font-bricolage text-lg mb-2">
      A minimal yet impactful approach, tailored for healing and clarity.
    </p>
  </div>
);

const PropertyAmenities = () => {
  const amenities = [
    { icon: "bi-lightning-charge", label: "Power Back Up" },
    { icon: "bi-wifi", label: "Internet/Wifi Connectivity" },
    { icon: "bi-tools", label: "Maintenance Staff" },
    { icon: "bi-list", label: "Lift" },
    { icon: "bi-building", label: "Vaastu Complaint" },
    { icon: "bi-houses", label: "Rentable Community Space" },
  ];

  return (
    <div className="px-[8%] lg:px-[12%] py-16 rounded-xl shadow-sm bg-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-10">Amenities</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
        {amenities.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <i className={`bi ${item.icon} text-yellow-600 text-2xl`} />
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function PropertyDetails() {
  const params = useParams();
  const id = params?.id ? Number(params.id) : null;

  const [property, setProperty] = useState<Property | null>(null);
  const [relatedProperties, setRelatedProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const foundProperty = PropertyData.find((item: Property) => item.id === id);
    setProperty(foundProperty || null);
    setRelatedProperties(
      PropertyData.filter((item: Property) => item.id !== id)
    );
    setLoading(false);
  }, [id]);

  if (!id) {
    return <span className="text-red-500 text-center block mt-10">Error: Property ID is missing.</span>;
  }

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!property) {
    return <span className="text-red-500 text-center block mt-10">Property not found.</span>;
  }

  return (
    <>
      <PageTitle title={property.title} />

      {/* Property Details */}
      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={property.image}
              alt={`Image of ${property.title}`}
              fill
              className="object-cover"
            />
          </div>
          <PropertyInfo property={property} />
        </div>
      </div>

      <PropertyDescription />
      <PropertyAmenities />

      {/* Related Properties */}
      <div className="px-[8%] lg:px-[12%] py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Related Properties</h2>
        <RelatedProperties related={relatedProperties} />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
