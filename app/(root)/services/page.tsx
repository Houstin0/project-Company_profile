import React from "react";
import Image from "next/image";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="mx-2 md:mx-10 my-20">
      <nav className="flex ml-12" aria-label="Breadcrumb ">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3 me-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
              </svg>
              Home
            </a>
          </li>

          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                Our Services
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-blue-500">
        Our Services
      </h1>
<div className="min-w-full mt-4 p-4 text-center bg-gray-50 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
  <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-white">
    Internet Connectivity
  </h5>
  <p className="mb-5 text-lg font-semibold text-gray-500 sm:text-lg dark:text-gray-400">
    Bridging the Digital Divide
  </p>
  <p className="mb-5 text-lg text-black sm:text-lg dark:text-white">
    We specialize in providing reliable and high-speed internet
    connections to rural and underserved areas. Our solutions are designed
    to ensure that communities have access to the digital world, enhancing
    opportunities for education, business, and communication. Whether
    you&apos;re looking for a stable connection for your home or business,
    we offer customized packages and exceptional customer support to meet
    your needs.
  </p>

  <ol className="mb-5 pl-10 text-left text-lg list-decimal list-inside space-y-2 text-gray-900 dark:text-white">
  <li>
    <strong>Reliable Connection</strong>: Enjoy a stable and fast internet experience, even in remote locations.
  </li>
  <li>
    <strong>Customer Support</strong>: Get assistance anytime with our 24/7 customer support service.
  </li>
  <li>
    <strong>Flexible Plans</strong>: Choose from a range of plans tailored to suit different usage needs and budgets.
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
            {/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">Get started</a> */}
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
           {/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">Get started</a> */}
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
{/* <a href="#" className="text-white bg-blue-700 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">Get started</a> */}
          </div>
        </div>
      </div>
    </section>
  </li>

</ol>


  <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse mt-6">
    <a
      href="/contact"
      className="w-full sm:w-auto text-white  bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
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
    visually appealing websites to developing robust web applications, we
    use the latest technologies and best practices to deliver high-quality
    solutions that drive results.{" "}
  </p>

  <ol className="mb-5 pl-10 text-left text-lg list-decimal list-inside space-y-2 text-gray-900 dark:text-white">
    <li>
      <strong>Custom Websites</strong>: Tailored designs and functionalities to reflect your brand and engage your audience.
    </li>
    <li>
      <strong>Responsive Design</strong>: Ensure your site looks and works great on all devices, from desktops to smartphones.
    </li>
    <li>
      <strong>Full-Stack Development</strong>: Comprehensive services including front-end and back-end development, integration, and maintenance.
    </li>
  </ol>

  <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
    <a
      href="/contact"
      className="w-full sm:w-auto text-white  bg-gradient-to-br from-green-600 via-green-400 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm text-center me-2 mb-2 inline-flex items-center justify-center px-4 py-2.5"
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
  </div>
</div>

    </section>
  );
};

export default Services;
