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
            <div className="md:basis-1/2 p-2">
              <h2 className="text-2xl text-primary-600 text-center md:text-left">
                About Us
              </h2>
              <p className="pb-4">
                Serah Constructions is a trusted name in <strong>constructions and interiors in Bengaluru</strong>, offering a comprehensive range of services designed to meet the unique needs of every client. With a dedication to quality, innovation, and detail, we create spaces that inspire, perform, and stand the test of time.
              </p>
              <p className="pb-8">
                At Serah Constructions, effective project management forms the foundation of everything we do. Our experienced team oversees each stage of the construction and interior process, ensuring smooth coordination, timely delivery, and exceptional results. From concept to completion, we focus on achieving client satisfaction while upholding the highest standards of craftsmanship and efficiency.
              </p>
            </div>



          <h2 className="text-2xl text-primary-600 text-center md:text-left">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row justify-evenly gap-4 pt-4 pb-4">

            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
              <h2 className="text">Project Management</h2>
              <p className="text-sm">
                Our skilled project managers oversee every phase of construction and interiors in Bengaluru, ensuring each project is completed on time, within budget, and to the highest standards of quality and craftsmanship.
              </p>

            </div>
            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
              <h2 className="text">Interior Design </h2>
              <p className="text-sm">
                Our construction team in Bengaluru brings expertise and precision to every project, executing structural designs that ensure durability, safety, and lasting aesthetic appeal.
              </p>

            </div>
            <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text">Constructions </h2>
                <p className="text-sm">
                  Our interior design team in Bengaluru collaborates closely with clients to craft customised spaces that reflect their style, enhance functionality, and align with their vision.
                </p>

            </div>
                        <div className="border border-primary p-8">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text">Renovation </h2>
              <p className="text-sm">
                Whether it’s a home renovation, office refurbishment, or institutional upgrade, we deliver comprehensive construction and interior solutions in Bengaluru, tailored to meet each client’s unique requirements.
              </p>

            </div>
          </div>

          <div className="mt-2 py-4">
            <Link
              href="/services"
              className="px-6 py-3 bg-primary-500 text-white uppercase font-medium   hover:bg-primary-400 transition"
              >
              View More
            </Link>
            </div>

                      <div className="w-full mx-auto text-left bg-white text-gray-800 mt-12">
                    <h2 className="text-2xl text-primary-600 text-center md:text-left">
            Our Portfolio
          </h2>

          <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center mb-8 gap-8">
            <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/island-kitchen-edited.jpg" width={400} height={300} alt="island kitchen" />
            </div>
            <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/building.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded" src="/kitchen-16_9.jpg" width={400} height={300} alt="building" />
            </div>
                        <div className="rounded border border-secondary-400 p-1 w-auto h-auto mx-auto basis-1/2 md:basis-1/4">
            <Image className="rounded"  src="/office.jpg" width={400} height={300} alt="building" />
            </div>

            
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
              <p>+91 +91 86607 51241 </p><small> Call us now</small>
              </div>
            </div>
          </div>

          </div>
        </>
      </main>
    </>
  );
}
