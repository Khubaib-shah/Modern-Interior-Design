import Marquee2 from "@/components/Marquee2";
import PageTitle from "@/components/PageTitle";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";
import React from "react";

const service = () => {
  return (
    <>
      {/* Page Title */}
      <PageTitle title="Services" />
      <Services />
      <Marquee2 />
      <Services2 />
    </>
  );
};

export default service;
