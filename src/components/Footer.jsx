"use client";

import Image from "next/image";
import Link from "next/link";
import GoogleMap from "./GoogleMap";
import Logo from "@/icons/Logo";
import { Phone } from "@/icons/Svg";

export default function Footer() {

  return (
      <footer  className="w-full bg-neutral-900 pt-12">
  <div  className="w-full px-4 mx-auto max-w-7xl">
    <div  className="flex flex-col md:flex-row justify-between gap-4 md:grid-cols-2">
          <Link href="/">

          <Logo className="w-24 md:w-40" />
          {/* <Image  src="/serah-logo.svg" height={200} width={200} alt="logo" /> */}
          </Link>

      
<div>

      <div className="flex flex-col md:gap-x-16 justify-evenly items-left gap-4 text-neutral-200">
        <div className="flex items-center gap-4">
            <div>

            <Phone className="w-7" />
            </div>

            <div>

                <p className="text-xl">

             
        Phone Number
                </p>

       <p >


+91 95388 39986
       </p>
            </div>
        </div>

        <div>

<p className="text-xl">
Email Address
</p>

<p>
contact@serahconstructions.com
</p>
        </div>
</div>
</div>

        <div className="text-neutral-200">

<p className="text-xl">
Office Address
</p>
<p>

# 4, Opp. Podar International School, <br/> Basavanapura, Gottigere Post, <br/>Bengaluru - 560 083.
</p>
        </div>

    </div>
    <div  className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-neutral-200 md:flex-row md:justify-between">
      <p  className="mb-4 text-sm text-center text-neutral-200 md:mb-0">
        Copyright © 2024 Serah Constructions. <br />
        All Rights Reserved.
      </p>
      <div  className="flex gap-4 text-neutral-200 sm:justify-center">
        <Link href="https://www.facebook.com/" target="_blank"  className="block transition-opacity text-inherit hover:opacity-80">
          <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"></path>
          </svg>
        </Link>
        <Link href="https://www.instagram.com/" target="_blank" className="block transition-opacity text-inherit hover:opacity-80">
          <svg  className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"></path>
          </svg>
        </Link>
        <Link href="https://www.youtube.com/" target="_blank" className="block transition-opacity text-inherit hover:opacity-80">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 768">
    <path fill="currentColor" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37zM693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25z"/>
</svg>
        </Link>
        <Link href="https://www.pintrest.com/" target="_blank" className="block transition-opacity text-inherit hover:opacity-80">
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <path fill="currentColor" d="M10.015 0C4.484 0 0 4.473 0 9.99c0 4.232 2.638 7.847 6.364 9.3c-.088-.79-.166-2.002.034-2.865c.183-.78 1.175-4.964 1.175-4.964s-.3-.6-.3-1.484c0-1.386.808-2.426 1.811-2.426c.855 0 1.268.64 1.268 1.406c0 .858-.545 2.14-.829 3.327c-.238.994.502 1.804 1.483 1.804c1.778 0 3.148-1.87 3.148-4.572c0-2.384-1.723-4.058-4.184-4.058c-2.848 0-4.518 2.135-4.518 4.333c0 .86.329 1.786.742 2.284c.083.1.094.188.071.288c-.075.312-.244.999-.279 1.135c-.044.188-.143.226-.335.138c-1.249-.575-2.032-2.398-2.032-3.872c0-3.146 2.296-6.043 6.616-6.043c3.474 0 6.175 2.472 6.175 5.769c0 3.446-2.178 6.218-5.207 6.218c-1.014 0-1.966-.524-2.304-1.149l-.625 2.374c-.225.87-.84 1.96-1.252 2.621A10.07 10.07 0 0 0 9.988 20C15.508 20 20 15.53 20 10.01C20 4.493 15.507.023 9.988.023L10.015 0Z"/>
</svg>
        </Link>
      </div>
    </div>
  </div>
</footer>

//     <section className="relative overflow-hidden text-center bg-secondary-600 text-gray-100">
//         <div className="flex flex-col md:flex-row justify-evenly  gap-8 pt-4 px-2 md:px-4">


//         <div className="p-2 md:p-6 text-center">

//         <div  className="bg-white text-gray-800   p-8 w-full">

//           <br/>
//                 <h6 className="text-secondary-500 text-2xl">
//                         Follow Us
//                 </h6>
//                 <br/>

//                 <div className="flex gap-8 justify-center">
//       <Link className="hover:text-primary-500 transition" href="/">
// <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"/>
// </svg>
//       </Link>
//       <Link href="/" className="hover:text-primary-500 transition">
      
// <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
//     <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
// </svg>
//       </Link>
//       <Link href="/" className="hover:text-primary-500 transition">
      
// <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
//     <path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
// </svg>
//       </Link>
//       <Link href="/" className="hover:text-primary-500 transition">
      
//       <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//     <path fill="currentColor" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8c0-14.3 5.7-27.9 15.8-38S39.6 0 53.8 0s27.9 5.7 38 15.8s15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3M447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2c-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3c94 0 111.3 61.9 111.3 142.3V448z"/>
// </svg>
//       </Link>
  
//                 </div>

// <br/>
//         </div>
//         </div>
//       {/* Footer container */}

// <div className="text-left p-4 text-center">


//       <h3 className="text-2xl">Get in touch</h3>

//       <br/>

//       </div>

//                     </div>
//       <p className="text-center">&copy; Serah Constructions - 2025</p>

//     </section>
  );
}