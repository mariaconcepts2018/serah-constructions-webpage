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
      imgUrl:"/gallery (14).jpg",
    },
    {
      id:"2",
      title:"Building Construction",
        project:"Residential",
        imgUrl:"/gallery (2).jpg",
      },
      {
        id:"3",
        title:"Interiors",
        project:"Residential",
        imgUrl:"/gallery (3).jpg",
      },
      {
        id:"4",
        title:"Renovation",
        project:"Residential",
        imgUrl:"/gallery (4).jpg",
      },
      {
        id:"5",
        title:"Built-in Furniture",
        project:"Residential",
        imgUrl:"/gallery (5).jpg",
      },
      {
        id:"6",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/gallery (6).jpg",
      },
      {
        id:"10",
        title:"Built-in Furniture",
        project:"Schools & colleges",
        imgUrl:"/gallery (10).jpg",
      },
      {
        id:"11",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/gallery (11).jpg",
      },
      {
        id:"12",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/gallery (12).jpg",
      },
      {
        id:"13",
        title:"Built-in Furniture",
        project:"Churchs",
        imgUrl:"/gallery (13).jpg",
      },                    {
        id:"14",
        title:"Project Management",
        project:"Residential",
        imgUrl:"/gallery (1).jpg",
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
