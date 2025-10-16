import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";


export const metadata = {
  title: "Services | Serah Constructions",
};

export default function MyApp() {

  return (
    <>
    <Hero title={"Our Services"} />
      <main className="bg-white px-4 xl:px-8 my-4 py-12 mx-auto max-w-7xl text-gray-800">

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly pt-4 pb-4 gap-8">

            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/project.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Project Management</h2>
                <p className="text-sm pt-2 md:pt-4">
    Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.
                </p>

            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/interiors.svg" height={36} width={36} alt="svg-icon prject management"/>
                <h2 className="text-xl">Interior Design</h2>
                <p className="text-sm pt-2 md:pt-4">
        Our interior design specialists in Bengaluru collaborate closely with clients to create customised spaces that reflect their style, enhance functionality, and align perfectly with their vision.

                </p>
            </div>
            <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/construction.svg" height={36} width={36} alt="svg-icon prject management"/>

<h2 className="text-xl">Constructions</h2>
<p className="text-sm pt-2 md:pt-4">
        Our construction team in Bengaluru brings expertise and precision to every build, executing structural designs that deliver durability, safety, and long-lasting aesthetic appeal.

</p>

            </div>
                                    <div className="border border-primary p-4 md:p-8  md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/renovation.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Renovation</h2>
              <p className="text-sm pt-2 md:pt-4">
        Whether it’s a home renovation, office refurbishment, or institutional upgrade, we deliver comprehensive construction and interior solutions in Bengaluru, tailored to meet each client’s unique requirements.

              </p>
            </div>
                        <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/furniture.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Custom Furnitures</h2>
              <p className="text-sm pt-2 md:pt-4">
       We design and construct custom built-in furniture in Bengaluru that integrates seamlessly with interiors, maximising space utilisation and complementing the overall design aesthetic of your environment.

              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/church.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Institution and Church Works</h2>
              <p className="text-sm pt-2 md:pt-4">

We specialise in institution and church construction in Bengaluru, with a deep understanding of the unique requirements and sensitivities these projects demand. Our experienced team delivers spaces that meet the functional, aesthetic, and spiritual needs of religious and institutional organisations.
</p>

            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/home.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Residentials</h2>
              <p className="text-sm pt-2 md:pt-4">

Serah Constructions provides expert residential construction and renovation services in Bengaluru, tailored to the unique needs and preferences of homeowners. From single-family homes to multi-unit developments, we deliver high-quality projects that exceed expectations.


              </p>
            </div>

                                    <div className="border border-primary p-4 md:p-8 md:basis-1/3">
              <Image className="mb-4 text-primary-500" src="/office.svg" height={36} width={36} alt="svg-icon prject management"/>

              <h2 className="text-xl">Office Spaces</h2>
              <p className="text-sm pt-2 md:pt-4">
We design and build functional, inspiring office spaces in Bengaluru that boost productivity, collaboration, and employee well-being. Our customised office solutions align with each business’s unique needs, reflecting their brand identity and corporate culture.
</p>


            </div>

          </div>


      </main>
    </>
  );
}
