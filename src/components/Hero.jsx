"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, src }) {
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
        <Image
          src={src}
          alt="hero image"
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          className="h-full w-auto lg:h-auto lg:w-full object-cover"
        />
        {/* Dark overlay */}
        {/* </div> */}
        {/* ))} */}

        {/* Hero content */}
        <div className="absolute inset-0 bg-black/60 h-full h-100 flex flex-col items-center justify-center text-center text-white px-6 w-full py-8">
          {title ? (
            <>
              <h1 className="text-4xl font-extrabold sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-extrabold  lg:text-5xl">
                Building with{" "}
                <span className="text-white bg-neutral-800 rounded-sm px-2">
                  {" "}
                  Care.
                </span>
              </h1>
              <p className="mt-6 md:text-lg max-w-2xl mx-auto bg-neutral-900/70 rounded-xs">
                Strong foundations. Strong relationships.
              </p>
            </>
          )}
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
