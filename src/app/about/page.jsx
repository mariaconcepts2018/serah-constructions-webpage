import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: "About Us | Serah Constructions",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="bg-white text-gray-800">
        <>
          <Hero title={'About Us'}/>

                                <h2 className="text-3xl text-center mt-12 text-primary-500">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">

            <div className="basis-1/2 p-4">
              <Image src="/gallery (13).jpg"
                width={800}
                height ={600}
                alt="Our team"
                className="w-full h-auto"
              />
            </div>

            <div className="basis-1/2 p-4">

            <p>
Serah Construction is a leading firm in constructions and interiors in Bengaluru, offering a wide range of services tailored to meet the diverse needs of our clients. With a commitment to innovation and quality, we deliver solutions that elevate spaces and exceed expectations.
</p>

<p>
Project management is at the core of our operations. Our experienced managers oversee every aspect of construction, ensuring smooth execution, timely delivery, and strict adherence to quality standards.
</p>

<p>
From residential homes and commercial buildings to institutional structures, our skilled team brings architectural visions to life. With attention to detail and a focus on craftsmanship, we create spaces that inspire and endure.
</p>

<p>
Beyond construction, we provide interior design and renovation services. Collaborating closely with clients, we craft interiors that reflect their style and optimise functionality, transforming spaces into visually appealing and practical environments.
</p>

<p>
We also specialise in custom-built furniture, seamlessly integrating design and functionality to maximise space and enhance aesthetics.
</p>

<p>
Dedicated to excellence in every project, Serah Construction strives to deliver on time, within budget, and to the highest standards, building lasting relationships while leaving a strong mark in the construction and interiors industry.
</p>

            </div>
</div>
          

          <div className="max-w-7xl p-6 mx-auto bg-white text-gray-800 mt-4">

 <br/>
 <div className="flex flex-col md:flex-row justify-center gap-8">
    <div className="p-4 text-center border border-primary-600   basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 472 384">
    <path fill="currentColor" d="M235 32q79 0 142.5 44.5T469 192q-28 71-91.5 115.5T235 352T92 307.5T0 192q28-71 92-115.5T235 32zm0 267q44 0 75-31.5t31-75.5t-31-75.5T235 85t-75.5 31.5T128 192t31.5 75.5T235 299zm-.5-171q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 192t18.5-45.5t45-18.5z"/>
</svg>

      <h3 className="text-primary-500">
        VISION
      </h3>

      <p className="pt-2">
At Serah Construction, our vision is to lead the construction and interiors industry in Bengaluru by upholding the highest engineering and construction standards. We stay ahead of evolving project demands through the proactive adoption of cutting-edge technologies, ensuring we consistently exceed client expectations and deliver innovative, high-quality solutions.
</p>

    </div>

    <div className="p-4 text-center border border-primary-600   basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path fill="currentColor" d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5a5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
</svg>
      <h3 className="text-primary-500">
EXPERIENCE
      </h3>
<p className="pt-2">
Built on a strong reputation and extensive experience, Serah Construction is recognised for reliability and expertise in constructions and interiors in Bengaluru. Our commitment to understanding client visions and consistently delivering exceptional results sets us apart in the industry.
</p>

    </div>

        <div className="p-4 text-center border border-primary-600   basis-1/3">
          <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32q27 0 45.5-19t18.5-45V64q0-26 19-45t45-19h640q27 0 45.5 19T896 64v832q0 27 19 45.5t45 18.5h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zM384 160q0-13-9.5-22.5T352 128h-64q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h64q13 0 22.5-9.5T384 224v-64zm0 192q0-13-9.5-22.5T352 320h-64q-13 0-22.5 9.5T256 352v64q0 13 9.5 22.5T288 448h64q13 0 22.5-9.5T384 416v-64zm0 192q0-13-9.5-22.5T352 512h-64q-13 0-22.5 9.5T256 544v64q0 13 9.5 22.5T288 640h64q13 0 22.5-9.5T384 608v-64zm192-384q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v64q0 13 9.5 22.5T480 256h64q13 0 22.5-9.5T576 224v-64zm0 192q0-13-9.5-22.5T544 320h-64q-13 0-22.5 9.5T448 352v64q0 13 9.5 22.5T480 448h64q13 0 22.5-9.5T576 416v-64zm0 192q0-13-9.5-22.5T544 512h-64q-13 0-22.5 9.5T448 544v64q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608v-64zm32 224H416q-13 0-22.5 9.5T384 800v128q0 13 9.5 22.5T416 960h192q13 0 22.5-9.5T640 928V800q0-13-9.5-22.5T608 768zm160-608q0-13-9.5-22.5T736 128h-64q-13 0-22.5 9.5T640 160v64q0 13 9.5 22.5T672 256h64q13 0 22.5-9.5T768 224v-64zm0 192q0-13-9.5-22.5T736 320h-64q-13 0-22.5 9.5T640 352v64q0 13 9.5 22.5T672 448h64q13 0 22.5-9.5T768 416v-64zm0 192q0-13-9.5-22.5T736 512h-64q-13 0-22.5 9.5T640 544v64q0 13 9.5 22.5T672 640h64q13 0 22.5-9.5T768 608v-64z"/>
</svg>
      <h3 className="text-primary-500">
        MISSION
      </h3>
<p className="pt-2">
Our mission at Serah Construction is to deliver comprehensive construction and interior solutions in Bengaluru that are tailored to each client’s unique needs. Guided by integrity, quality, timely delivery, and a commitment to excellence, we ensure every project reflects our dedication to outstanding results.
</p>

    </div>
 </div>
 <br/>
          
          </div>
        </>
      </main>
    </>
  );
}
