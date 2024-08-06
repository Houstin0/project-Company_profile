"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import {navLinks} from "@/constants"
import { usePathname } from 'next/navigation'

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);

    const updatedIsDarkMode = !isDarkMode;

    if (typeof window !== "undefined") {
      const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
      const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
  
      if (!updatedIsDarkMode) {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-light)";
        localStorage.setItem("color-theme", "light");
        if (themeToggleDarkIcon) themeToggleDarkIcon.classList.remove("hidden");
        if (themeToggleLightIcon) themeToggleLightIcon.classList.add("hidden");
      } else {
        document.documentElement.style.backgroundColor = "var(--bg-color-dark)";
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
        if (themeToggleDarkIcon) themeToggleDarkIcon.classList.add("hidden");
        if (themeToggleLightIcon) themeToggleLightIcon.classList.remove("hidden");
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isDark = localStorage.getItem("color-theme") === "dark" ||
        (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
      setIsDarkMode(isDark);

      if (isDark) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-dark)";
      } else {
        document.documentElement.classList.remove("dark");
        document.documentElement.style.backgroundColor = "var(--bg-color-light)";
      }
    }
  }, []);

  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

    if (themeToggleDarkIcon && themeToggleLightIcon) {
      if (isDarkMode) {
        themeToggleDarkIcon.classList.add("hidden");
        themeToggleLightIcon.classList.remove("hidden");
      } else {
        themeToggleDarkIcon.classList.remove("hidden");
        themeToggleLightIcon.classList.add("hidden");
      }
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-gray-100 border-gray-200 dark:bg-black">
      <div className="w-full flex flex-wrap items-center justify-between mx-4 p-1">
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Link
            href="/"
            className="ml-3 italic text-gray-900 text-2xl font-extrabold dark:text-white flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/icons/icon_.png" height={50} width={45} className="h-auto w-auto mr-1" alt="Logo" />
            Netwoods
          </Link>
        </div>

        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? "block" : "hidden"} ml-auto`} id="navbar-default">
          <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-6 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-black md:dark:bg-black dark:border-gray-700">
          

          {navLinks.map((link) => {
              const isActive = pathname === link.path;

              return (
                <li
                  key={link.path}
                  className={`block py-2 px-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-400 md:p-0 dark:text-white md:dark:hover:text-green-400 dark:hover:bg-gray-700 dark:hover:text-green-400 md:dark:hover:bg-transparent ${isActive ? 'text-blue-500 dark:text-blue-500' : 'text-black dark:text-white'}`}
                >
                  <Link href={link.path}>{link.label}</Link>
                </li>
              );
            })}


          </ul>

          {/* <a
          href="#"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-2 py-2 md:ml-4 dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          Get Started
        </a> */}
        </div>



        <div className="mx-5 flex items-center space-x-2 mt-3 md:mt-0">
          <button
            id="theme-toggle"
            type="button"
            onClick={toggleDarkMode}
            className="text-gray-500 dark:text-gray-400 lg:hover:bg-gray-200 lg:dark:hover:bg-gray-700 rounded-lg p-1"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 0zM16 10a1 1 0 110 2h-1a1 1 0 110-2h1zM5.05 4.464l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 101.414 1.414zM4.293 15.293a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM4 10a1 1 0 100 2H3a1 1 0 100-2h1zm6 6a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
