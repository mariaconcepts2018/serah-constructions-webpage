import FullscreenImageViewer from "@/components/FullscreenImageViewer";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";

export const metadata = {
  title: "Projects | Serah Constructions",
};

export default function GalleryPage() {
  const images = [
    {
      src: getCloudinaryUrl("photo-1505691938895-1758d7feb511_dqje6f"),
      alt: "Modern Living Room",
    },
    {
      src: getCloudinaryUrl("photo-1600585154340-be6161a56a0c_tjam6z"),
      alt: "Cozy Bedroom",
    },
    {
      src: getCloudinaryUrl("premium_photo-1661338863383-563eda764ea1_zyvibk"),
      alt: "Minimalist Kitchen",
    },
    {
      src: getCloudinaryUrl("photo-1560448204-e02f11c3d0e2_euufem"),
      alt: "Luxury Bathroom",
    },
    {
      src: getCloudinaryUrl("photo-1519710164239-da123dc03ef4_aotab1"),
      alt: "Office Workspace",
    },
    {
      src: getCloudinaryUrl("photo-1593136596203-7212b076f4d2_yssxj7"),
      alt: "Dining Area",
    },
    {
      src: getCloudinaryUrl("premium_photo-1679690708613-0d10282f9d19_zxmk69"),
      alt: "Elegant Interior Design",
    },
    {
      src: getCloudinaryUrl("photo-1637665746399-0d52d9816128_ctsqkq"),
      alt: "Modern Hallway",
    },
    {
      src: getCloudinaryUrl("photo-1505691938895-1758d7feb511_1_l8yibr"),
      alt: "Balcony View",
    },
    {
      src: getCloudinaryUrl("photo-1610084458740-61366d43b5cf_ehgzfn"),
      alt: "Artistic Decor",
    },
    {
      src: getCloudinaryUrl("photo-1718220216044-006f43e3a9b1_bqspek"),
      alt: "Minimalist Office",
    },
    {
      src: getCloudinaryUrl("photo-1661016630713-67e36bfc2285_otxgtd"),
      alt: "Outdoor Lounge",
    },
  ];

  return (
    <>
      <Hero title={"Our Portfolio"} />

      <div className="min-h-screen bg-neutral-800">
        <h1 className="text-2xl text-center py-6">Image Gallery</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {images.map((img, i) => (
            <FullscreenImageViewer
              key={i}
              index={i}
              image={img}
              images={images}
            />
          ))}
        </div>
      </div>
    </>
  );
}
