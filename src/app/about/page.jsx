import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";
import Image from "next/image";

export const metadata = {
  title: "About Us | Serah Constructions",
};

export default function MyApp({ Component, pageProps }) {
  const heroSrc = getCloudinaryUrl("HERO-serah_gfmweo");

  return (
    <>
      <main className="bg-neutral-800 text-neutral-100">
        <>
          <Hero title={"Get to know us"} src={heroSrc} />

          <h2 className="text-3xl text-center mt-12 text-primary-500">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            {/* <div className="basis-1/2 p-4"></div> */}

            <div className="p-4">
              <p>
                Serah Construction is a leading firm in constructions and
                interiors in Bengaluru, offering a wide range of services
                tailored to meet the diverse needs of our clients. With a
                commitment to innovation and quality, we deliver solutions that
                elevate spaces and exceed expectations.
              </p>

              <p>
                Project management is at the core of our operations. Our
                experienced managers oversee every aspect of construction,
                ensuring smooth execution, timely delivery, and strict adherence
                to quality standards.
              </p>

              <p>
                From residential homes and commercial buildings to institutional
                structures, our skilled team brings architectural visions to
                life. With attention to detail and a focus on craftsmanship, we
                create spaces that inspire and endure.
              </p>

              <p>
                Beyond construction, we provide interior design and renovation
                services. Collaborating closely with clients, we craft interiors
                that reflect their style and optimise functionality,
                transforming spaces into visually appealing and practical
                environments.
              </p>

              <p>
                We also specialise in custom-built furniture, seamlessly
                integrating design and functionality to maximise space and
                enhance aesthetics.
              </p>

              <p>
                Dedicated to excellence in every project, Serah Construction
                strives to deliver on time, within budget, and to the highest
                standards, building lasting relationships while leaving a strong
                mark in the construction and interiors industry.
              </p>
            </div>
          </div>
        </>
      </main>
    </>
  );
}
