function About() {
  return (
    <section className="relative bg-gray-100 antialiased dark:bg-black p-6 mt-14 mx-4 md:mx-12 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-7xl">
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
                    About Us
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-400 to-blue-500">
                About
              </span>&nbsp;
              Us
            </h1>
            <div className="mx-auto max-w-5xl space-y-6">
              <p className="text-base font-normal text-black dark:text-gray-400">
              Welcome to NetWoods, your trusted partner in bringing the digital revolution to rural areas. Established in 2024 and based in Nairobi, Kenya, NetWoods is dedicated to providing reliable internet connectivity and comprehensive web development services. Our goal is to bridge the digital divide, ensuring that rural communities have access to the same opportunities as urban areas.
              </p>
              <h2 className="text-teal-600 text-2xl font-semibold">Our Mission</h2>
  
              <p className="text-base font-normal text-black dark:text-gray-400">
              At NetWoods, our mission is twofold:
              </p>
              <ol className="list-inside list-decimal space-y-4 pl-8 text-base font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Empowering Rural Communities: {" "}
                  </span>
                  We strive to connect underserved regions with high-speed, affordable internet, enabling access to essential online services, education, and economic opportunities.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Innovative Web Solutions:{" "}
                  </span>
                  We are committed to delivering cutting-edge web development services that help businesses and individuals create a strong online presence. Our team of skilled developers works diligently to provide tailored solutions that meet the unique needs of our clients
                </li>
  
            
              </ol>
              <p className="text-base font-normal text-black dark:text-gray-400">
              With a focus on quality, reliability, and customer satisfaction, NetWoods aims to be a catalyst for positive change in rural areas and a leader in web development innovation. Join us on our journey to make the world a more connected place.
              </p>


              <h2 className="text-teal-600 text-2xl font-semibold">Why Choose Us</h2>
              <ol className="list-inside list-decimal space-y-4 pl-8 text-base font-normal text-gray-700 dark:text-gray-400">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Reliable Connectivity Solutions: {" "}
                  </span>
                  We specialize in providing robust and consistent internet connections, even in the most remote areas. Our technology ensures minimal downtime and maximum performance, so you can stay connected at all times.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Community-Focused Approach:{" "}
                  </span>
                  We are dedicated to empowering rural communities through technology. Our initiatives go beyond providing services; we also offer training and support to help local businesses and individuals thrive in the digital age.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Affordable and Transparent Pricing:{" "}
                  </span>
                  We believe in offering top-notch services at prices that are accessible to everyone. Our transparent pricing structure ensures you know exactly what you&apos;re paying for, with no hidden fees.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Tailored Web Development Services:{" "}
                  </span>
                  Our team of experienced developers creates custom web solutions that meet your specific needs. From responsive websites to e-commerce platforms, we deliver high-quality, user-friendly designs that drive results.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Exceptional Customer Support:{" "}
                  </span>
                  Our customer support team is always ready to assist you with any questions or issues. We pride ourselves on our quick response times and our commitment to resolving problems efficiently.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Cutting-Edge Technology:{" "}
                  </span>
                  We leverage the latest technologies to ensure our services are fast, secure, and reliable. Our continuous investment in innovation keeps us at the forefront of the industry.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {" "}
                    Comprehensive Service Range:{" "}
                  </span>
                  From internet connectivity to web development, we offer a comprehensive range of services to meet all your digital needs. Our integrated solutions provide a seamless experience for our clients.
                </li>
  
            
              </ol>
              
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;