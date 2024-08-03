import React from 'react'
import Image from "next/image";
import { services } from "@/constants";

const Services = () => {
  return (
    <section className="mx-2 md:mx-10 my-20">
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
              unoptimized
            />

            <div className="text-left rtl:text-right">
              <div className="-mt-1 font-sans text-sm font-semibold">
                {service.CallToAction1}
              </div>
            </div>
          </button>
          
        </div>
      </div>
    ))}
  </section>
  )
}

export default Services
