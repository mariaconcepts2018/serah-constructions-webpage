import Hero from "@/components/Hero";
import Image from "next/image";

export const metadata = {
  title: "About Us | Serah Constructions",
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="bg-white text-gray-800">
        <>
          <Hero title={'About Us'}/>

                                <h2 className="text-3xl text-center mt-12 text-primary-500">
            About Us
          </h2>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">

            <div className="basis-1/2 p-4">
              <Image src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=2048x2048&w=is&k=20&c=laH1UL7RxM9mqD9TSOYbAFbHBO3RokKTz3O1arUJ0_0="
                width={800}
                height ={600}
                alt="Our team"
                className="w-full h-auto"
              />
            </div>

            <div className="basis-1/2 p-4">
            

          
          <p className="text-left">
 Serah Construction is a distinguished firm specialising in a wide range of services tailored to meet the diverse needs of our clients. With a steadfast commitment to excellence and innovation, we offer comprehensive solutions that elevate spaces and exceed expectations.
</p>
 
<p>

At  Serah Construction, project management is the cornerstone of our operations. Our experienced project managers oversee every aspect of construction projects, ensuring seamless execution and timely delivery. From inception to completion, we maintain a keen focus on meeting client requirements while adhering to the highest standards of quality and efficiency.

</p>

<p>
In the realm of building construction,  Serah Construction excels in bringing architectural visions to life. Whether it’s residential homes, commercial buildings, or institutional structures, our skilled team is equipped to handle projects of any size and complexity. With meticulous attention to detail and a commitment to craftsmanship, we strive to create spaces that inspire and endure.

</p>
 
 <p>
Our expertise extends beyond construction to encompass interior design and renovation services.  Serah Construction collaborates closely with clients to conceptualise and create interiors that reflect their unique style and preferences. From concept development to implementation, our team works tirelessly to transform spaces into functional and aesthetically pleasing environments.
 </p>
<p>
In addition to construction,  Serah Construction specialises in built-in furniture, catering to the specific needs of each project. Our custom-designed furniture solutions seamlessly integrate with interior spaces, maximising functionality and enhancing overall aesthetics.
</p>
 
 <p>


With a focus on excellence in every endeavour,  Serah Construction is dedicated to building lasting relationships with clients and partners. By delivering projects on time, within budget, and to the highest standards of quality, we strive to exceed expectations and leave a lasting impression in the construction and interiors industry.

 </p>
            </div>
</div>
          

          <div className="max-w-7xl p-6 mx-auto bg-white text-gray-800 mt-4">

 <br/>

<h2>
  Message from our Managing Director
  </h2>
<p>

In the ever-evolving journey of  Serah Construction, I find immense value in pausing and looking back at the path we’ve traversed. It’s from this reflection on our past that we draw strength and insight as we navigate towards the future. It’s a practice that not only keeps us anchored but also enlightens our way forward.
</p>

<p>

From the outset, there have been three pillars that I believe have been instrumental in sculpting our success story:
</p>
<br/>

 <p>
<span className="font-bold"> The Art of Listening: </span> Our edge in the competitive landscape comes from a somewhat unconventional strategy – we ‘listen’ to our competitors. More significantly, we delve deep into understanding the needs of our customers. This isn’t just about hearing what they say; it’s about truly comprehending their desires and expectations. It’s this nuanced understanding that allows us to craft our offerings in a way that deeply connects with our clients, setting us a class apart.
 </p>
<br/>
 <p>
 <span className="font-bold"> Our Triple Commitment: </span> Our promise has always been threefold – unmatched quality, unwavering safety, and punctuality. These are not merely words to us but the very fabric of our work ethic. They are commitments we live by, ensuring that every project not only meets but soars beyond the expectations of those we serve.
  </p> 
 <br/>
 <p>

<span className="font-bold">The Strength of Our Team: </span> At the heart of our accomplishments lies the unparalleled dedication of our staff. The synergy, trust, and loyalty within our team are what breathe life into Serah Constructions. It’s their commitment that translates our vision into reality, driving us forward each day.

 </p>
<p>
As we cast our gaze to the horizon, these guiding principles remain our compass, ensuring that our journey is not just about expansion but about enriching the essence of who we are. Our path ahead is illuminated by the lessons of our past and the unwavering spirit of innovation.
  </p> 
 
 <p>
I want to extend my deepest appreciation to every client, partner, and team member who has been a part of our narrative. It’s your faith in us that has paved the way for our achievements. As we step into the future, let’s hold fast to the values that have brought us here, embracing both our heritage and our dreams with equal favour.

 </p>
 <br /><br />
 <span className="text-right font-bold">
With sincere gratitude, <br/>
Jesu Raj .S <br />
Managing Director <br />
 </span>


 <br/>
 <br/>

 <div className="flex flex-col md:flex-row justify-center gap-8">
    <div className="p-4 text-center border border-primary-600   basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 472 384">
    <path fill="currentColor" d="M235 32q79 0 142.5 44.5T469 192q-28 71-91.5 115.5T235 352T92 307.5T0 192q28-71 92-115.5T235 32zm0 267q44 0 75-31.5t31-75.5t-31-75.5T235 85t-75.5 31.5T128 192t31.5 75.5T235 299zm-.5-171q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45.5 18.5t-45-18.5T171 192t18.5-45.5t45-18.5z"/>
</svg>

      <h3 className="text-primary-500">
        VISION
      </h3>

      <p className="pt-2">
At  Serah Construction, our vision is to solidify our leadership in the construction industry. We aim to achieve this by maintaining our unwavering commitment to stringent engineering and construction standards. In a world where project complexities evolve rapidly, our strategy revolves around the proactive adoption and implementation of cutting-edge technologies. This approach ensures we not only meet but exceed the dynamic needs of our projects and clients.
      </p>
    </div>

    <div className="p-4 text-center border border-primary-600   basis-1/3">

      <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path fill="currentColor" d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5a5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"/>
</svg>
      <h3 className="text-primary-500">
EXPERIENCE
      </h3>
      <p className="pt-2">
Our foundation is built upon a robust reputation and vast experience, hallmarked by our dedication to fulfilling our clients' needs with excellence.  Serah Construction has become synonymous with reliability and expertise, thanks to our unyielding commitment to our clients' visions and our consistent delivery of exceptional outcomes.

      </p>
    </div>

        <div className="p-4 text-center border border-primary-600   basis-1/3">
          <svg className="mx-auto text-xl text-secondary-500 m-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32q27 0 45.5-19t18.5-45V64q0-26 19-45t45-19h640q27 0 45.5 19T896 64v832q0 27 19 45.5t45 18.5h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zM384 160q0-13-9.5-22.5T352 128h-64q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h64q13 0 22.5-9.5T384 224v-64zm0 192q0-13-9.5-22.5T352 320h-64q-13 0-22.5 9.5T256 352v64q0 13 9.5 22.5T288 448h64q13 0 22.5-9.5T384 416v-64zm0 192q0-13-9.5-22.5T352 512h-64q-13 0-22.5 9.5T256 544v64q0 13 9.5 22.5T288 640h64q13 0 22.5-9.5T384 608v-64zm192-384q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v64q0 13 9.5 22.5T480 256h64q13 0 22.5-9.5T576 224v-64zm0 192q0-13-9.5-22.5T544 320h-64q-13 0-22.5 9.5T448 352v64q0 13 9.5 22.5T480 448h64q13 0 22.5-9.5T576 416v-64zm0 192q0-13-9.5-22.5T544 512h-64q-13 0-22.5 9.5T448 544v64q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608v-64zm32 224H416q-13 0-22.5 9.5T384 800v128q0 13 9.5 22.5T416 960h192q13 0 22.5-9.5T640 928V800q0-13-9.5-22.5T608 768zm160-608q0-13-9.5-22.5T736 128h-64q-13 0-22.5 9.5T640 160v64q0 13 9.5 22.5T672 256h64q13 0 22.5-9.5T768 224v-64zm0 192q0-13-9.5-22.5T736 320h-64q-13 0-22.5 9.5T640 352v64q0 13 9.5 22.5T672 448h64q13 0 22.5-9.5T768 416v-64zm0 192q0-13-9.5-22.5T736 512h-64q-13 0-22.5 9.5T640 544v64q0 13 9.5 22.5T672 640h64q13 0 22.5-9.5T768 608v-64z"/>
</svg>
      <h3 className="text-primary-500">
        MISSION
      </h3>
      <p className="pt-2">
Our mission at  Serah Construction is to provide comprehensive, integrated services tailored to our clients' unique needs. We strive to adapt our capabilities to meet these needs, driven by our core principles of integrity, quality, timely delivery, and a competitive spirit. Our commitment to these values guides and empowers our team, ensuring that every project we undertake is a testament to our dedication to excellence.

      </p>
    </div>
 </div>
 <br/>
          
          </div>
        </>
      </main>
    </>
  );
}
