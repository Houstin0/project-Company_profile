"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "@/constants";

export default function Home() {
  const images = [
    "/images/hero_1.png",
    "/images/hero_2.jpeg",
    "/images/hero_3.jpeg",
    "/images/hero_4.jpeg",
    "/images/hero_5.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      {/* Hero section */}
      <section
        className="bg-center bg-no-repeat bg-fixed bg-cover  bg-gray-500 bg-blend-multiply max-h-screen mt-[58px] py-16 lg:py-20"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="px-4 mx-auto max-w-screen-xl text-center py-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-100 md:text-5xl lg:text-6xl">
            Empowering Rural Communities with Reliable Internet Solutions
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-6">
            Transforming Rural Living with High-Speed Internet and innovative
            software solutions
          </p>
          <div className="flex flex-col space-y-4 space-x-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Our Services
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="sm:px-8 px-4 max-w-7xl mx-auto relative z-0 bg-gray-100 dark:bg-black">
      <span className="hash-span" id="about">
        &nbsp;
      </span>

      <div>
        <h2 className="text-black dark:text-white font-bold md:text-xl text-xl">
          Introduction
        </h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 md:w-1/2">
          <p className="mt-2 text-black dark:text-white text-[17px] leading-[30px]">
            Welcome to NetWoods! Founded in 2024 and based in Nairobi, Kenya,
            we are committed to bridging the digital gap by providing reliable
            internet connectivity to rural areas and offering innovative web
            development services. Our mission is to empower underserved
            communities with affordable high-speed internet and create
            impactful web solutions for businesses and individuals. Join us in
            making the world a more connected place.
          </p>
        </div>
        
        <div className="bg-white flex-1 md:w-1/2 grid grid-cols-2 ml-2">
          <div className="flex flex-col items-center">
            <Image
              src="/videos/wifi (1).gif"
              alt="Connection GIF"
              width={150}
              height={100}
            />
          </div>
          <div className="flex-col items-center hidden md:flex">
            <Image
              
              src="/videos/wifi.gif"
              alt="Hotspot GIF"
              width={150}
              height={100}
            />
          </div>
          <div className="flex-col items-center flex">
            <Image
              src="/videos/hotspot.gif"
              alt="WiFi GIF"
              width={150}
              height={100}
            />
          </div>
          <div className="flex-col items-center hidden md:flex">
            <Image
             
               src="/videos/connection.gif"
              alt="WiFi GIF"
              width={150}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>

      {/* Services section */}
      <section className=" mx-10 md:my-10">
        <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Our Services
        </h1>
        {services.map((service) => (
          <div
            key={service.title}
            className="min-w-full mt-4 p-4 text-center bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h5>
            <p className="mb-5 text-lg font-semibold text-gray-500 sm:text-lg dark:text-gray-400">
              {service.motto}{" "}
            </p>
            <p className="mb-5 text-lg text-black sm:text-lg dark:text-white">
              {service.description}{" "}
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <button
                type="button"
                className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
              >
                <Image
                  className="mr-4 rounded-3xl"
                  src={service.icon}
                  width={40}
                  height={40}
                  alt="icon"
                />

                <div className="text-left rtl:text-right">
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    {service.CallToAction1}
                  </div>
                </div>
              </button>
              <button
                type="button"
                className="w-full sm:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
              >
                <div className="text-left rtl:text-right">
                  <div className="-mt-1 font-sans text-sm font-semibold">
                    {service.CallToAction2}
                  </div>
                </div>

                <svg
                  className="w-auto h-[30px] text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Contact section */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            We’d love to hear from you! Whether you have questions about our
            services or need support, here’s how you can reach us:
          </p>
          <div className="grid grid-cols-2 items-start">
      <div className="flex items-center space-x-4 mb-6">
        <Image
          src="/icons/phone-call.gif"
          alt="Number"
          width={40}
          height={40}
        />
        <div>
          <h3 className="font-semibold text-black dark:text-white">Phone Number</h3>
          <p className="text-black dark:text-white">+254 727 041 155</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/email.gif"
          alt="email"
          width={40}
          height={40}
        />
        <div>
          <h3 className="font-semiboldtext-black dark:text-white">Email</h3>
          <p className="text-black dark:text-white">info@netwoods.co.ke</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Image
          src="/icons/pin.gif"
          alt="pin"
          width={40}
          height={40}
        />
        <div>
          <h3 className="font-semibold text-black dark:text-white">Address</h3>
          <p className="text-black dark:text-white">1234 Rural Connection Ave,</p>
          <p className="text-black dark:text-white">Nairobi, Kenya</p>
        </div>
      </div>
    </div>
        </div>
      </section>
    </main>
  );
}
