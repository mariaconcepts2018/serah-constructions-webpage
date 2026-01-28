import "@/app/globals.css";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";
import Image from "next/image";

export const metadata = {
  title: "Services | Serah Constructions",
};

export default function MyApp() {
  const data = [
    {
      title: "Classical",
    },
    {
      title: "Standard",
    },
    {
      title: "Premium",
    },
    {
      title: "Royal",
    },
  ];
  const heroSrc = getCloudinaryUrl("HERO-serah_gfmweo");

  return (
    <>
      <Hero title={"Our Services"} src={heroSrc} />
      <main className=" px-4 xl:px-8 py-12 mx-auto w-full bg-neutral-800 text-neutral-100">
        <h1 className="text-center text-xl text-primary-500 mb-6">
          Our Packages
        </h1>
        <div className="max-w-xl mx-auto rounded-base border border-default overflow-hidden shadow-xs">
          {data.map((item, index) => (
            <div key={index}>
              <h2 id="accordion-collapse-heading-1">
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3"
                  aria-expanded="true"
                >
                  <span>{item.title}</span>
                  <svg
                    className="w-5 h-5 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m5 15 7-7 7 7"
                    />
                  </svg>
                </button>
              </h2>
              <div className="hidden border border-s-0 border-e-0 border-t-0 border-b-default">
                <div className="p-4 md:p-5">
                  <p className="mb-2 text-body">Structure, 3d Design.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
