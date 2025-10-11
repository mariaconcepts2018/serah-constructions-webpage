import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home | Serah Constructions",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
          <Hero/>
      <main className="bg-white text-gray-800 px-2 xl:px-0 py-12">
        <>
          <div className="max-w-7xl mx-auto text-left bg-white text-gray-800 md:mt-4">
            <div className="flex flex-col md:flex-row">

            <div className="md:basis-1/2 py-4 px-8">
                      <h2 className="text-2xl text-primary-600 text-center md:text-left">
            About Us
          </h2>
        <p className="pb-4">
          Serah Constructions is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations.
        </p>
        <p className="pb-8">
          At Serah Constructions, project management is the cornerstone of our operations. Our experienced project managers oversee every aspect of construction projects, ensuring seamless execution and timely delivery. From inception to completion, we maintain a keen focus on meeting client requirements while adhering to the highest standards of quality and efficiency.
        </p>

              </div>
            <div className="md:basis-1/2">
              <Image src={'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?_gl=1*z0avf*_ga*MTU0Mjk2NDQ5LjE3NTk1NTU0Njc.*_ga_8JE65Q40S6*czE3NjAxNzIyNjQkbzMkZzEkdDE3NjAxNzIyNzUkajQ5JGwwJGgw'}
              height={300}
              width={400}
              className="w-full h-auto pr-4 py-8"
              alt="About-us"
              />  
            </div>
            </div>
          <h2 className="text-2xl text-primary-600 text-center md:text-left">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly gap-4 pt-4 pb-4">

            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
              <h2 className="text">Project Management </h2>
              <p className="text-sm">
                Our experienced project managers ensure that projects are delivered on time, within budget, and according to the highest quality standards.
              </p>
            </div>
            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
              <h2 className="text">Interior Design </h2>
              <p className="text-sm">
                Our construction team is skilled in executing structural designs with precision, ensuring durability, safety, and aesthetic appeal.
              </p>
            </div>
            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text">Constructions </h2>
              <p className="text-sm">Our interior design experts work closely with clients to create customised interiors that reflect their preferences and meet their needs.

</p>
            </div>
                        <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text">Renovation </h2>
              <p className="text-sm">
                Whether it’s a home renovation, office refurbishment, or institutional upgrade, we provide comprehensive solutions tailored to our clients’ requirements.
              </p>
            </div>
          </div>

          <div className="mt-2 py-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium   hover:bg-primary-400 transition"
              >
              View Services
            </Link>
            </div>

                      <div className="w-full mx-auto text-left bg-white text-gray-800 mt-12">
                    <h2 className="text-2xl text-primary-600 text-center md:text-left">
            Our Portfolio
          </h2>

          <div className="flex flex-wrap py-8 items-center text-center justify-center">
            <div className="p-4 w-60 h-45 border mx-auto basis-1/2 md:basis-1/4"></div>
            <div className="p-4 w-60 h-45 border mx-auto basis-1/2 md:basis-1/4"></div>
            <div className="p-4 w-60 h-45 border mx-auto basis-1/2 md:basis-1/4"></div>
            <div className="p-4 w-60 h-45 border mx-auto basis-1/2 md:basis-1/4"></div>
          </div>

          </div>

                      <Link
              href="/projects"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium   hover:bg-primary-400 transition"
              >
              View More
            </Link>

          <div className="mt-6 p-4 md:py-4   flex flex-col gap-4 md:flex-row md:justify-between justify-between bg-secondary-600 text-white items-start md:items-center mt-12">
            <h3  className="text-xl px-4">
              Get a Free Quote 
            </h3>

            <div className="flex flex-row items-center gap-4 p-3">
              <div className="bg-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" fill="#194c69"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              </div>
              <div>
              <p>+91 9036368688 </p><small> Call us now</small>
              </div>
            </div>
          </div>

          </div>
        </>
      </main>
    </>
  );
}
