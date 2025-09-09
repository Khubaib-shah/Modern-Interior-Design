import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10">
        <div className="absolute inset-0 bg-[url('/footer-bg.png')] invert z-[-1]" />

        <div
          className={
            "absolute top-0 right-0 w-full h-full bg-[url('/footer-shape.svg')] bg-no-repeat bg-right-bottom invert z-[-1]"
          }
        />

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
            {/* Left col */}
            <div className="lg:w-1/2 pr-10 lg:pr-0">
              <h2 className="font-bricolage text-6xl mb-6">
                we&apos;d love cooperate to build amazing
                <span className="word-animate"></span>
              </h2>
              <p className="my-5 text-lg font-medium">
                {" "}
                Through a unique combination of construction, architecture,
                furniture ad design disciplines and expertise.
              </p>
              <div className="flex justify-between items-center w-full max-w-md">
                <span className="text-xl block">Call our office</span>
                <h4 className="mt-3 text-xl font-semibold">
                  <a href="tel:+923162126865" className="hover:underline">
                    +92 316 2126865
                  </a>
                </h4>
              </div>

              <div className="flex justify-between items-center w-full max-w-md">
                <span className="text-xl block">Send a Message</span>
                <h4 className="mt-3 text-xl font-semibold">
                  <a href="#" className="text-lg hover:underline inline-block">
                    khubaibsyed@icloud.com
                  </a>
                </h4>
              </div>
            </div>

            {/* Right col */}
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-8 lg:gap-12">
              <div>
                <div className="flex flex-col space-y-3">
                  <h3 className="uppercase text-3xl font-bricolage">Company</h3>
                  <Link
                    href="/about"
                    className="text-xl font-medium text-gray-700 hover:text-black hover:underline"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/properties"
                    className="text-xl font-medium text-gray-700 hover:text-black hover:underline"
                  >
                    Properties
                  </Link>
                  <Link
                    href="/contact"
                    className="text-xl font-medium text-gray-700 hover:text-black hover:underline"
                  >
                    Contact
                  </Link>
                </div>
                <div className="lg:flex flex-col mt-5">
                  <h5 className="font-bricolage text-3xl mb-3">Address</h5>

                  <p className="text-lg font-medium max-w-sm">
                    Shop No B-1 Suleman terrace, Sir shah muhammad Suleman Rd,
                    Block/13D Block 13A Gulshan-e-Iqbal, Karachi.
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <h3 className="uppercase text-3xl font-bricolage mb-3">
                  Follow Us
                </h3>
                <a
                  href="https://www.facebook.com/khubaib2004.1978"
                  className="text-xl font-medium text-gray-700 hover:text-black hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.facebook.com/khubaib2004.1978"
                  className="text-xl font-medium text-gray-700 hover:text-black hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-r-gray-300 py-6 bg-white">
          <p className="text-center text-lg font-medium">
            © 2025 All Rights Reserved by{" "}
            <a
              href="https://khubaib-portfolio-seven.vercel.app/"
              className="font-semibold hover:underline"
            >
              Khubaib Shah
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
