import PageTitle from "@/components/PageTitle";
import React from "react";

const Contact = () => {
  return (
    <>
      <PageTitle title="Contact Us" />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left side */}
            <div className="lg:w-1/2 space-y-6">
              <h1>Lets's Talk</h1>
              <h2 className="text-xl text-gray-700">
                Let's start transforming your space-reach out and bring your
                vision to life today.
              </h2>

              <div className="space-y-4">
                <h6 className="uppercase text-lg tracking-widest border-b pb-4">
                  Call Us
                </h6>
                <h3 className="text-3xl font-light">
                  <a href="tel:+923162126865" className="hover:underline">
                    +92 316 2126865
                  </a>
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/khubaib2004.1978"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-facebook text-2xl text-black"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/khubaib-baacha/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin text-2xl text-black"></i>
                  </a>
                  <a
                    href="https://wa.me/923162126865"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-whatsapp text-2xl text-black"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-2/5">
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full border-b border-b-gray-300 focus:border-black outline-none py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="w-full border-b border-b-gray-300 focus:border-black outline-none py-2"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  name="phone"
                  className="w-full border-b border-b-gray-300 focus:border-black outline-none py-2"
                />
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="You Message"
                  className="w-full border-b border-b-gray-300 focus:border-black outline-none py-2"
                />
                <button
                  type="submit"
                  className="bg-black text-white py-2 px-6 rounded-md text-lg "
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-[8%] lg:px-[12%] py-12">
        <div className="overflow-hidden">
          <div className="bg-white rounded flex flex-col md:flex-row gap-6 p-10 items-center shadow-md">
            {/* Image */}
            <div className="w-full md:w-2/5 h-[400px]">
              <img
                src="contact-banner.jpg"
                alt="contact-banner"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Info */}
            <div className="w-full md:w-3/5">
              <h2 className="text-4xl md:text-6xl font-bold">
                Your Dream Starts Here{" "}
              </h2>
              <p className="text-gray-500 mt-4">
                All queries are replied within 24hrs.
              </p>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14479.264026557226!2d67.08592639999999!3d24.87013295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1757406416237!5m2!1sen!2s"
              width="100%"
              height="600"
              style={{ border: 0 }}
              loading="lazy"
              className="round-[10px]"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
