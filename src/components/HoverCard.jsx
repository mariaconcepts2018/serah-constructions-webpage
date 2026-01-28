"use client";
import { Construction, Interiors, Project, Renovation } from "@/icons/Svg";
import { useState } from "react";
const services = [
  {
    title: "Constructions",
    description:
      "Our construction team in Bengaluru brings expertise and precision to every project, executing structural designs that ensure durability, safety, and lasting aesthetic appeal.",
    Icon: Construction,
  },
  {
    title: "Interior Design",
    description:
      "Our interior design team in Bengaluru collaborates closely with clients to craft customised spaces that reflect their style, enhance functionality, and align with their vision.",
    Icon: Interiors,
  },
  {
    title: "Project Management",
    description:
      "Our skilled project managers oversee every phase of construction and interiors in Bengaluru, ensuring each project is completed on time, within budget, and to the highest standards of quality and craftsmanship.",
    Icon: Project,
  },
];

export default function HoverCard() {
  const [hovered, setHovered] = useState("");

  return (
    <>
      {services.map((item, index) => {
        return (
          <div
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered("")}
            key={index}
            className="md:basis-1/3"
          >
            <div className="p-3 cursor-pointer hover:shadow-xl transition flex gap-4 items-center  justify-start text-center bg-neutral-700 rounded-xs">
              <item.Icon className="w-7" />
              <p className="text-neutral-100 ">{item.title}</p>
            </div>

            <div
              className={`${
                hovered === item.title
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              } transition absolute md:left-auto left-0 p-4 mt-4 font-normal whitespace-normal bg-neutral-600 border rounded-xs g shadow-lg w-full md:w-1/4 border-blue-gray-50 text-white shadow-blue-gray-500/10 focus:outline-none`}
            >
              {item.description}
            </div>
          </div>
        );
      })}
    </>
  );
}
