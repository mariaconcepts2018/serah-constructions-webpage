import "@/app/globals.css";
import Hero from "@/components/Hero";
import ImageView from "@/components/FullScreenButton";
import Image from "next/image";
import FullScreenButton from "@/components/FullScreenButton";


const data = [
  {
      id:"1",
      title:"Built-in Furniture",
      project:"Churchs",
      imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994636/gallery_14_fu2uqp.avif",
    },
    {
      id:"2",
      title:"Building Construction",
        project:"Residential",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994630/gallery_2_ga6bmb.avif",
      },
      {
        id:"3",
        title:"Interiors",
        project:"Residential",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994631/gallery_3_kg2gof.avif",
      },
      {
        id:"4",
        title:"Renovation",
        project:"Residential",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994631/gallery_4_jalacd.avif",
      },
      {
        id:"5",
        title:"Built-in Furniture",
        project:"Residential",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994633/gallery_5_kfikux.avif",
      },
      {
        id:"6",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994633/gallery_6_d8zwov.avif",
      },
      {
        id:"10",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994634/gallery_10_dchyz1.avif",
      },
      {
        id:"11",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994634/gallery_11_szeoul.avif",
      },
      {
        id:"12",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994635/gallery_12_jh0ipf.avif",
      },                   
      {
        id:"14",
        title:"Project Management",
        project:"Residential",
        imgUrl:"https://res.cloudinary.com/dylffjde8/image/upload/w_auto/v1761994630/gallery_1_v36rhe.avif",
      }
    ]
    
    export const metadata = {
      title: "Our Projects | Serah Constructions",
    };
    
    export default function MyApp() {
      
      return (
        <>
      <main className="bg-neutral-800 text-neutral-100">
        <>
          <Hero title={'Projects'}/>

 <div className="flex flex-col justify-center gap-4 mx-auto max-w-7xl p-8">            
            <div>
                    <div className="flex flex-row gap-2 md:gap-4 flex-wrap justify-evenly">
                        {data && data.map((item, i) => (
                        <FullScreenButton className={'basis-1/2 md:basis-1/6'} key={i} src={item.imgUrl} alt={item.title} >
                          <Image className="max-w-80 h-80 object-cover border border-secondary"  width={400} height={300} src={item.imgUrl} alt={item.title}/>
                        </FullScreenButton>
                        ))}
                    </div>
                    <br/>
                </div>

            <div>

            </div>
          
          </div>

        </>
      </main>

      <ImageView />
    </>
  );
}
