import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import HoverCard from "@/components/HoverCard";
import { About, Check, Eye, GoalsFill, Phone } from "@/icons/Svg";

export const metadata = {
  title: "Home | Serah Constructions",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Hero />
      <main className="bg-neutral-800 text-neutral-100 px-2 md:px-4 xl:px-0 ">
        <>
          <div className=" mx-auto text-gray-100">
            <div className="max-w-7xl p-2 pt-8 mx-auto">
              <div className="flex flex-row justify-start overflow-x-scroll md:overflow-auto gap-4 min-w-xs scroll-smooth">
                <section
                  id="about"
                  className="p-4 text-center bg-neutral-700 min-w-xs pb-8"
                >
                  <h3 className="text-primary">ABOUT US</h3>

                  <p className="pt-2">
                    Serah Constructions is a trusted name in constructions and
                    interiors in Bengaluru, offering a comprehensive range of
                    services designed to meet the unique needs of every client.
                    With a dedication to quality, innovation, and detail, we
                    create spaces that inspire, perform, and stand the test of
                    time.
                  </p>
                </section>

                <section
                  id="vision"
                  className="p-4 text-center bg-neutral-700 min-w-xs"
                >
                  <h3 className="text-primary">VISION</h3>

                  <p className="pt-2">
                    To redefine living and working spaces by blending creative
                    design, sustainable construction, and functional elegance —
                    inspiring better lifestyles through every project we build.
                  </p>
                </section>
                <section
                  id="mission"
                  className="p-4 text-center bg-neutral-700 min-w-xs"
                >
                  <h3 className="text-primary">MISSION</h3>
                  <p className="pt-2">
                    Our mission is to deliver end-to-end construction and
                    interior solutions with excellence, creativity, and
                    sustainability. We aim to bring together architecture,
                    engineering, and craftsmanship to create spaces that are as
                    beautiful as they are functional
                  </p>
                </section>
              </div>
              <div className="z-30 flex gap-2 mt-4 justify-center mx-auto md:hidden">
                <button className="w-2 h-2 bg-neutral-500 rounded-full"></button>
                <button className="w-2 h-2 bg-neutral-500 rounded-full"></button>
                <button className="w-2 h-2 bg-neutral-500 rounded-full"></button>
              </div>
            </div>

            <h2 className="text-2xl text-primary-500 text-center pt-12">
              What Sets Us Apart
            </h2>

            <div className="relative flex flex-col max-w-sm mx-auto items-center">
              <nav className="flex min-w-[240px] flex-col gap-1 py-1.5">
                <div className="text-neutral-100 flex gap-4 w-full items-center p-3">
                  <Check className="w-4 h-4" />
                  In-House Engineering Team
                </div>
                <div className="text-neutral-100 flex gap-4 w-full items-center p-3">
                  <Check className="w-4 h-4" />
                  Structural Warranty*
                </div>
                <div className="text-neutral-100 flex gap-4 w-full items-center p-3">
                  <Check className="w-4 h-4" />
                  300+ Projects of Experience
                </div>
                <div className="text-neutral-100 flex gap-4 w-full items-center p-3">
                  <Check className="w-4 h-4" />
                  Affordable EMI Options
                </div>
                <div className="text-neutral-100 flex gap-4 w-full items-center p-3">
                  <Check className="w-4 h-4" />
                  Trusted Quality and On time delivery
                </div>
              </nav>
            </div>
            <h2 className="text-2xl text-primary-500 text-center pt-12">
              Our Services
            </h2>
            <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly gap-y-4 md:gap-y-16 gap-x-2 md:max-w-4xl md:mx-auto pt-4 pb-8 text-primary-300">
              <HoverCard />
            </div>

            <div className="mt-2 pb-6 text-center">
              <Link
                href="/services"
                className="px-6 py-3 bg-primary-500 text-neutral-900 uppercase font-medium rounded-xs  hover:bg-primary-400 transition"
              >
                View More
              </Link>
            </div>
            <div className="mt-6 p-4 md:py-4 rounded-xs md:max-w-4xl md:mx-auto flex flex-col gap-4 md:flex-row md:justify-between justify-between bg-neutral-600 text-white items-start md:items-center mt-12">
              <h3 className="text-xl px-4">Get a Free Quote</h3>
              <Link href={"tel:+919538839986"} target="_blank">
                <div className="flex flex-row items-center gap-4 p-3">
                  <div className="bg-neutral-700 p-3 rounded-full text-primary">
                    <Phone width="20" height="20" />
                  </div>
                  <div>
                    <p>+91 95388 39986 </p>
                    <small> Call us now</small>
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full max-w-7xl mx-auto text-center text-neutral-100 mt-12 pb-12">
              <h2 className="text-2xl text-primary text-center pt-12 pb-4">
                Our Portfolio
              </h2>

              <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center mb-8 md:gap-8">
                <div className=" w-auto h-full mx-auto basis-1/2 md:basis-1/4 p-0.5">
                  <Image
                    className="w-full rounded-xs"
                    src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994633/island-kitchen-edited_j0wjzo.avif"
                    width={400}
                    height={300}
                    alt="island kitchen"
                  />
                </div>
                <div className=" w-auto h-full mx-auto basis-1/2 md:basis-1/4 p-0.5">
                  <Image
                    className="w-full rounded-xs"
                    src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994633/building_yl6fok.avif"
                    width={400}
                    height={300}
                    alt="building"
                  />
                </div>
                <div className=" w-auto h-full mx-auto basis-1/2 md:basis-1/4 p-0.5">
                  <Image
                    className="w-full rounded-xs"
                    src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994630/kitchen-16_9_witsu2.avif"
                    width={400}
                    height={300}
                    alt="building"
                  />
                </div>
                <div className="w-auto h-full mx-auto basis-1/2 md:basis-1/4 p-0.5">
                  <Image
                    className="w-full rounded-xs"
                    src="https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994633/office_hgenhz.avif"
                    width={400}
                    height={300}
                    alt="building"
                  />
                </div>
              </div>
              <Link
                href="/projects"
                className="px-6 py-3 bg-primary-500 text-neutral-900 text-center uppercase font-medium rounded-xs  hover:bg-primary-400 transition"
              >
                View More
              </Link>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
