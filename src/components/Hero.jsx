"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero({title}) {
  const images = [
    // "/kitchen-16_9.jpg",
    "/livingroom-tv-16_9.png",
    // "/wallpanel-16_9.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [images.length]);

  return (
    <section className="relative overflow-hidden">
      {/* Carousel container */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        {/* Images */}
        {/* {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          > */}
            <img
              // src={src}
              src={'/hero.jpg'}
              alt={`Slide ${ 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-black max-w-xl mx-auto opacity-50 h-3/4 md:h-1/2 my-auto py-8"></div>
          {/* </div> */}
        {/* ))} */}

        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 max-w-xl mx-auto h-1/2 my-auto py-8">
          {title?
          <>
          <h1 className="text-4xl font-extrabold sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          
          </>:
          <>

          <h1 className="text-4xl text-white font-extrabold sm:text-3xl lg:text-4xl"> 
        Building with  <br /> <span className="text-white"> Care.</span>
          </h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Strong foundations. Strong relationships.
          </p>

                    <div className="mt-8 flex flex-col items-center gap-4 justify-center space-x-4 md:flex-row">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-500 text-gray-100 uppercase font-medium   hover:bg-primary-400 transition"
            >
              Book Your Consultation
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-white text-white uppercase font-medium   hover:bg-white hover:text-secondary-600 transition"
            >
              Learn More
            </Link>
          </div>
          
          </>}


        </div>

        {/* Carousel dots */}
        {/* <div className="absolute bottom-6 w-full flex justify-center space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3   ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
