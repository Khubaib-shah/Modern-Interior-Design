import Image from "next/image";
import Link from "next/link";
import React from "react";

type Property = {
  id: string | number;
  image: string;
  title: string;
  price: number | string;
};

type PropertyCardProps = {
  property: Property;
};
const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
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
  );
};

export default PropertyCard;
