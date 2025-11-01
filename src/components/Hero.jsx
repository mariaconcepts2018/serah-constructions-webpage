"use client";

import Link from "next/link";

export default function Hero({title}) {

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
              src={'https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994636/hero_p4c85t.avif'}
              alt={`Slide ${ 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
          {/* </div> */}
        {/* ))} */}

        {/* Hero content */}
        <div className="absolute inset-0 bg-black/60 h-full h-100 flex flex-col items-center justify-center text-center text-white px-6 w-full py-8">
           {title?
          <>
          <h1 className="text-4xl font-extrabold sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          
          </>:
          <>

          <h1 className="text-3xl text-white font-extrabold  lg:text-5xl"> 
        Building with <span className="text-primary"> Care.</span>
          </h1>
          <p className="mt-6 md:text-lg max-w-2xl mx-auto">
            Strong foundations. Strong relationships.
          </p>

                    <div className="mt-8 flex flex-col text-center items-center gap-4 justify-center md:flex-row">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-500 text-neutral-900 uppercase font-medium rounded-xs  hover:bg-primary-400 transition"
            >
              Enquire Now
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-white text-white uppercase font-medium rounded-xs  hover:bg-white hover:text-secondary-600 transition"
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
