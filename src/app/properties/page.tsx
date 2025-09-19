import PageTitle from "@/components/PageTitle";
import React from "react";
import PropertyData from "@/app/JsonData/Properties.json";
import PropertyCard from "@/components/PropertyCard";

const Properties = () => {
  return (
    <>
      <PageTitle title="Properties" className="h-[75vh]" />

      <div className="px-[8%] lg:px-[12%] py-12">
        <h2 className="text-4xl font-bold font-bricolage mb-6">
          Available Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PropertyData.map((property) => {
            return <PropertyCard key={property.id} property={property} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Properties;
