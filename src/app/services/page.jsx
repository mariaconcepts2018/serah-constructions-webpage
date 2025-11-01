import "@/app/globals.css";
import Hero from "@/components/Hero";
import Image from "next/image";


export const metadata = {
  title: "Services | Serah Constructions",
};

const data = [
  {
  title: "Constructions",
  description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
  imgUrl:"https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=779",
  },
  {
    title: "Project Management",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1677078610588-aed2834ad968?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1176",
  },
    {
    title: "Interior Design",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1664711942326-2c3351e215e6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1117",
  },
    {
    title: "Renovation",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1674649207083-281c2517ab49?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
    {
    title: "Custom Furnitures",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
    {
    title: "Institution and Church Works",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1667489010867-a7a46e76faee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
    {
    title: "Residentials",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1174",
  },
    {
    title: "Office Spaces",
    description: "Our skilled project managers oversee every phase of constructions and interiors in Bengaluru, ensuring that each project is completed on schedule, within budget, and to the highest standards of quality and craftsmanship.",
    imgUrl:"https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169",
  },
  
]

export default function MyApp() {

  return (
    <>
    <Hero title={"Our Services"} />
      <main className=" px-4 xl:px-8 py-12 mx-auto w-full bg-neutral-800 text-neutral-100">

          <div className="flex flex-col md:flex-row md:flex-wrap justify-evenly pt-4 pb-4 gap-2 max-w-7xl mx-auto">
            {data.map((item, index) => (
              <div key={index} className="cursor-pointer group relative flex flex-col my-3 bg-neutral-700 shadow-sm border border-neutral-900 rounded-xs w-84 hover:shadow-lg transition-shadow duration-300">
  <div className="relative h-48 overflow-hidden text-white rounded-xs">
    <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
         src={item.imgUrl} alt={item.title} />
  </div>
  <div className="p-4">
    <p className="mb-2 text-primary text-xxxl font-semibold">
      {item.title}
    </p>
    <p className="text-neutral-200 text-xs leading-normal font-light">
      {item.description}
    </p>
  </div>
  <div className="px-4 pb-4 pt-0 ">
    <button className="rounded-xs bg-primary py-1 px-2 border border-transparent text-center text-xs text-black transition-all shadow-md hover:shadow-lg focus:bg-primary-700 focus:shadow-none active:bg-primaty-300 hover:bg-primary-300 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
      Read More
    </button>
  </div>
</div> 
            ))}
          </div>


      </main>
    </>
  );
}
