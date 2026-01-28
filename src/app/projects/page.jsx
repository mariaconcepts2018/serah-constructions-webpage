import FullscreenImageViewer from "@/components/FullscreenImageViewer";
import Hero from "@/components/Hero";
import getCloudinaryUrl from "@/lib/cloudinary";

export const metadata = {
  title: "Projects | Serah Constructions",
};

export default function GalleryPage() {
  const images = [
    {
      src: getCloudinaryUrl("Building-1_yvshdh"),
      alt: "Balcony",
    },
    {
      src: getCloudinaryUrl("gallery_14_fu2uqp"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("1000238398_cdideo"),
      alt: "Warm and elegant vanity unit with storage",
    },
    {
      src: getCloudinaryUrl("auditorium-2_v3rd7h"),
      alt: "False ceiling",
    },
    {
      src: getCloudinaryUrl("Church-3_soeqnm"),
      alt: "Comfy sitout",
    },
    {
      src: getCloudinaryUrl("1000382545_mgyilk"),
      alt: "Glass panneling",
    },
    {
      src: getCloudinaryUrl("auditorium_ff8mas"),
      alt: "Building Exteriors",
    },

    {
      src: getCloudinaryUrl("FBZF7418_ya2fkd"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("PDTH8875_m3xhhg"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("OUMK7387_ztxsix"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("TSQB8131_nzucio"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("UYRI1358_eguvgf"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("TASN5894_xb1uii"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("RNRA9126_az04xd"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("FBZF7418_ya2fkd"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("PGSQ2308_jucej1"),

      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("UXDG6435_gxw2o9"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("ESFO9150_vzwysq"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("IMG_4440_v1crnt"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("THMA9754_drvzux"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("BJPH7884_aubcfb"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("BRJY9743_tyhbpr"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("AFPP3467_y5v92w"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("ASYE8945_fgiky2"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("HIZV7179_hdpnpa"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("IMG_4439_qjxtoz"),
      alt: "3d Visualization",
    },
    {
      src: getCloudinaryUrl("DKQE4292_izcrgl"),
      alt: "Grotto",
    },
    {
      src: getCloudinaryUrl("QWYG0595_hilcad"),
      alt: "3d Visualization",
    },
  ];

  const heroSrc = getCloudinaryUrl("HERO-serah_gfmweo");

  return (
    <>
      <Hero title={"Our Portfolio"} src={heroSrc} />

      <div className="min-h-screen bg-neutral-800">
        <h1 className="text-2xl text-center py-6 text-primary-500">
          Image Gallery
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4  2xl:w-1/2 md:mx-auto gap-4 p-4">
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
