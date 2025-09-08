import Image from "next/image";
import React from "react";

const DesignProcess = () => {
  // Design Process
  const processSteps = [
    {
      id: 1,
      imgSrc: "/process-icon-1.svg",
      title: "Consultation and initial meeting",
      description:
        "The architect meets with the client to discuss their needs, preferences, and budget for the project.",
    },
    {
      id: 2,
      imgSrc: "/process-icon-2.svg",
      title: "Concept design",
      description:
        "Based on the client's input, the architect develops a preliminary design concept and presents it to the client for feedback.",
    },
    {
      id: 3,
      imgSrc: "/process-icon-3.svg",
      title: "Design development",
      description:
        "Once the design is finalized, the architect creates detailed construction drawings and specifications for the project.",
    },
    {
      id: 4,
      imgSrc: "/process-icon-4.svg",
      title: "Permitting and approvals",
      description:
        "Before construction can begin, the architecture company must obtain the necessary permits and approvals from local authorities.",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 px-[8%] lg:px-[12%] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-8xl font-bricolage font-semibold">
                Our Design Process
              </h1>
            </div>
            <div className="lg:w-1/3">
              <h3 className="uppercase tracking-wider font-semibold border-b pb-2 mb-6 text-sm w-fit">
                Process
              </h3>

              <p>
                Discover how our process transform ideas into personalized,
                functional, and styled spaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-10">
            {processSteps.map(({ id, imgSrc, title, description }) => (
              <div
                key={id}
                className="flex flex-col items-center cursor-pointer relative group"
              >
                {/* circle with image and number */}
                <div className="w-[170px] h-[170px] rounded-full shadow-lg flex items-center justify-center hover:-translate-y-1.5 transition-transform duration-200">
                  <Image
                    src={imgSrc}
                    alt={`Process ste ${id}`}
                    className="w-[70px] transition-transform duration-500 ease-out group-hover:-rotate-y-360"
                    width={100}
                    height={100}
                  />

                  <span className="absolute -top-3 rotate-3 bg-black text-white size-8 flex items-center justify-center rounded-full text-sm font-semibold select-none">
                    {id}.
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-bricolage  text-xl mt-6 mb-4 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-black after:w-0 group-hover:after:w-full after:transition-width after:duration-300">
                  {title}
                </h2>

                {/* Description */}
                <p className="text-center text-gray-600 text-base max-w-[70%] mx-auto">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignProcess;
