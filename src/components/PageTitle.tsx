import React from "react";

const PageTitle = ({
  title,
  className,
}: {
  title: string;
  className: string;
}) => {
  return (
    <div
      className={`relative ${
        className ? className : "h-[65vh]"
      } overflow-hidden flex items-center justify-center`}
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
      >
        <source src="/page-title.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      <h1 className="text-white text-[3rem] md:text-[5rem] font-bricolage z-20">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
