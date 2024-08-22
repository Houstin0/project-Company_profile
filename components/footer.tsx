"use client"
import React,{ useEffect } from "react";
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    useEffect(() => {
        const yearElement = document.getElementById("currentYear");
        if (yearElement) {
          const currentYear = new Date().getFullYear();
          yearElement.textContent = `© ${currentYear} Netwoods. All Rights Reserved.`;
        }
      }, []);
  return (
   

<footer className="bg-gray-100 rounded-lg shadow dark:bg-black mx-4 z-20">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <Link
            href="/"
            className="ml-3 italic text-gray-900 text-2xl font-extrabold dark:text-white flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/icons/icon_.png" height={50} width={50} className="h-auto w-auto mr-1" alt="Logo" />
            Netwoods
          </Link>
            <ul className="flex flex-wrap items-center my-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                {/* <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li> */}
                <li>
                    <Link href="/services" className="hover:underline">Services</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </li>
            </ul>
            
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span
          id="currentYear"
          className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >
          {" "}
        </span>
    </div>
</footer>


  )
}

export default Footer
