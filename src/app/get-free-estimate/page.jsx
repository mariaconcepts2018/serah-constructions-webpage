import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";

export const metadata = {
  title: "Get a Free Estimate",
};

export default function GalleryPage() {
  const heroSrc = getCloudinaryUrl("HERO-serah_gfmweo");

  return (
    <>
      <Hero title={"Get a free estimate"} src={heroSrc} />

      <div className="min-h-screen bg-neutral-800">
        <h1 className="text-2xl text-center py-6">Get a Free Estimate</h1>
        <div className="max-w-md mx-auto">
          <ContactForm isUrl={true} />
        </div>
      </div>
    </>
  );
}
