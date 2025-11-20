import "@/app/globals.css";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";
import Image from "next/image";

export const metadata = {
  title: "Services | Serah Constructions",
};

const data = [
  {
    title: "Constructions",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1508450859948-4e04fabaa4ea_xqhhcy"),
  },
  {
    title: "Project Management",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1677078610588-aed2834ad968_rwi96h"),
  },
  {
    title: "Interior Design",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1664711942326-2c3351e215e6_vuzdqt"),
  },
  {
    title: "Renovation",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1674649207083-281c2517ab49_vct2kb"),
  },
  {
    title: "Custom Furnitures",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1540574163026-643ea20ade25_rpcvjy"),
  },
  {
    title: "Institution and Church Works",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1667489010867-a7a46e76faee_emx3r3"),
  },
  {
    title: "Residentials",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1664711942326-2c3351e215e6_vuzdqt"),
  },
  {
    title: "Office Spaces",
    description:
      "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl: getCloudinaryUrl("photo-1497366754035-f200968a6e72_akhsqa"),
  },
];

export default function MyApp() {
  return (
    <>
      <Hero title={"Our Services"} />
      <main className=" px-4 xl:px-8 py-12 mx-auto w-full bg-neutral-800 text-neutral-100">
        <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly items-center pt-4 pb-4 lg:px-24 gap-2 max-w-8xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative flex flex-col my-3 bg-neutral-700 shadow-sm border border-neutral-900 rounded-xs w-84 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden text-white rounded-xs">
                <Image
                  className="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src={item.imgUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                />
              </div>
              <div className="p-4">
                <p className="mb-2 text-primary text-xxxl font-semibold">
                  {item.title}
                </p>
                <p className="text-neutral-200 text-xs leading-normal font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
