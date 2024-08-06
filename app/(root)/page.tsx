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
              href="/services"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl"
            >
              Our Services
            </a>
            <a
              href="/contact"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl"
            >
              <Image
                className="mr-4 rounded-3xl"
                src="/icons/phone.gif"
                width={40}
                height={40}
                alt="icon"
              />
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

          <div className="bg-white max-h-[200] flex-1 md:w-1/2 grid grid-cols-2 ml-2">
            <div className="flex flex-col items-center">
              <Image
                src="/videos/wifi (1).gif"
                alt="Connection GIF"
                width={150}
                height={100}
                unoptimized
              />
            </div>
            <div className="flex-col items-center hidden md:flex">
              <Image
                src="/videos/wifi.gif"
                alt="Hotspot GIF"
                width={150}
                height={100}
                unoptimized
              />
            </div>
            <div className="flex-col items-center flex">
              <Image
                src="/videos/hotspot.gif"
                alt="WiFi GIF"
                width={150}
                height={100}
                unoptimized
              />
            </div>
            <div className="flex-col items-center hidden md:flex">
              <Image
                src="/videos/connection.gif"
                alt="WiFi GIF"
                width={150}
                height={100}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="mx-2 md:mx-10 my-10">
        <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-blue-500">
          Our Services
        </h1>

        <div className="min-w-full mt-4 p-4 text-center bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            Internet Connectivity
          </h5>
          <p className="mb-5 text-lg font-semibold text-gray-500 sm:text-lg dark:text-gray-400">
            Bridging the Digital Divide{" "}
          </p>
          <p className="mb-5 text-lg text-black sm:text-lg dark:text-white">
            We specialize in providing reliable and high-speed internet
            connections to rural and underserved areas. Our solutions are
            designed to ensure that communities have access to the digital
            world, enhancing opportunities for education, business, and
            communication. Whether you&apos;re looking for a stable connection
            for your home or business, we offer customized packages and
            exceptional customer support to meet your needs.{" "}
          </p>
          <section className="bg-gray-50 dark:bg-gray-800 mt-4 rounded-xl">
      <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Internet Packages</h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Choose the perfect plan that suits your needs and enjoy seamless internet connectivity.</p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Ideal for light usage and small households.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Ksh.1500</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>5 Mbps speed</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>24/7 support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Unlimited data</span>
              </li>
            </ul>
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a> */}
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Standard</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Perfect for families and moderate internet users.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Ksh.3000</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>12 Mbps speed</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>24/7 support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Unlimited data</span>
              </li>
            </ul>
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a> */}
          </div>
          {/* Pricing Card */}
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-900 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for heavy users and large households.</p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold">Ksh.4500</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            {/* List */}
            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>24 Mbps speed</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>24/7 support</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                <span>Unlimited data</span>
              </li>
            </ul>
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a> */}
          </div>
        </div>
      </div>
    </section>



          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="/contact"
              className="w-full sm:w-auto text-white bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
            >
              <Image
                className="mr-4 rounded-3xl"
                src="/icons/phone.gif"
                width={40}
                height={40}
                alt="icon"
              />

              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Contact Us
                </div>
              </div>
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto text-white bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
            >
              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Learn More
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
            </a>
          </div>
        </div>

        <div className="min-w-full mt-4 p-4 text-center bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
            Web Development
          </h5>
          <p className="mb-5 text-lg font-semibold text-gray-500 sm:text-lg dark:text-gray-400">
            Crafting Digital Experiences{" "}
          </p>
          <p className="mb-5 text-lg text-black sm:text-lg dark:text-white">
            Our web development services are designed to help businesses and
            organizations establish a strong online presence. From creating
            visually appealing websites to developing robust web applications,
            we use the latest technologies and best practices to deliver
            high-quality solutions that drive results.{" "}
          </p>
          <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <a
              href="/contact"
              className="w-full sm:w-auto text-white bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
            >
              <Image
                className="mr-4 rounded-3xl"
                src="/icons/phone.gif"
                width={40}
                height={40}
                alt="icon"
                unoptimized
              />

              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Contact Us
                </div>
              </div>
            </a>
            <a
              href="/services"
              className="w-full sm:w-auto text-white bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
            >
              <div className="text-left rtl:text-right">
                <div className="-mt-1 font-sans text-sm font-semibold">
                  Learn More
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
            </a>
          </div>
        </div>
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
                unoptimized
              />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Phone Number
                </h3>
                <p className="text-black dark:text-white">+254 727 041 155</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/icons/email.gif"
                alt="email"
                width={40}
                height={40}
                unoptimized
              />
              <div>
                <h3 className="font-semiboldtext-black dark:text-white">
                  Email
                </h3>
                <p className="text-black dark:text-white">
                  info@netwoods.co.ke
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Image
                src="/icons/pin.gif"
                alt="pin"
                width={40}
                height={40}
                unoptimized
              />
              <div>
                <h3 className="font-semibold text-black dark:text-white">
                  Address
                </h3>
                <p className="text-black dark:text-white">
                  Kenyatta Road Business Centre, Thika Super Hwy, Kenyatta Road
                </p>
                <p className="text-black dark:text-white">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
