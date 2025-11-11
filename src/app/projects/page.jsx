import FullscreenImageViewer from "@/components/FullscreenImageViewer";
import Hero from "@/components/Hero";

export default function GalleryPage() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      alt: "Modern Living Room",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      alt: "Cozy Bedroom",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661338863383-563eda764ea1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Minimalist Kitchen",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      alt: "Luxury Bathroom",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      alt: "Office Workspace",
    },
    {
      src: "https://images.unsplash.com/photo-1593136596203-7212b076f4d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Dining Area",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1679690708613-0d10282f9d19?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1632",
      alt: "Elegant Interior Design",
    },
    {
      src: "https://images.unsplash.com/photo-1637665746399-0d52d9816128?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Modern Hallway",
    },
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      alt: "Balcony View",
    },
    {
      src: "https://images.unsplash.com/photo-1610084458740-61366d43b5cf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Artistic Decor",
    },
    {
      src: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1680",
      alt: "Minimalist Office",
    },
    {
      src: "https://images.unsplash.com/photo-1661016630713-67e36bfc2285?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      alt: "Outdoor Lounge",
    },
  ];

  return (
    <>
      <Hero title={"Our Gallery"} />

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
