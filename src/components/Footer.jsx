"use client";

import Image from "next/image";
import Link from "next/link";
import GoogleMap from "./GoogleMap";

export default function Footer() {

  return (
    <section className="relative overflow-hidden text-center bg-secondary-600 text-gray-100">
        <div className="flex flex-col md:flex-row justify-evenly  gap-8 pt-4 px-2 md:px-4">


        <div className="p-2 md:p-6 text-center">

        <div  className="bg-white text-gray-800   p-8 w-full">

           <h1 className="text-2xl font-bold text-gray-800 text-center">
            <span className="logo text-2xl md-text-4xl text-center">Serah</span>&nbsp;
            <small className="text-sm text-center logo-2">
            Constructions
            </small>
          </h1>
          <br/>
                <h6 className="text-secondary-500">
                        Follow Us On
                </h6>
                <br/>

                <div className="flex gap-8 justify-center">
      <Link className="hover:text-primary-500 transition" href="/">
      
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z"/>
</svg>
      </Link>
      <Link href="/" className="hover:text-primary-500 transition">
      
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
</svg>
      </Link>
      <Link href="/" className="hover:text-primary-500 transition">
      
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="m10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73Z"/>
</svg>
      </Link>
      <Link href="/" className="hover:text-primary-500 transition">
      
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
    <path fill="currentColor" d="M12.222 5.977a5.402 5.402 0 0 1 3.823 1.496l2.868-2.868A9.61 9.61 0 0 0 12.222 2a9.996 9.996 0 0 0-8.937 5.51l3.341 2.59a5.96 5.96 0 0 1 5.596-4.123z" opacity=".7"/>
    <path fill="currentColor" d="M3.285 7.51a10.013 10.013 0 0 0 0 8.98l3.341-2.59a5.913 5.913 0 0 1 0-3.8l-3.34-2.59z"/>
    <path fill="currentColor" d="M15.608 17.068A6.033 6.033 0 0 1 6.626 13.9l-3.34 2.59A9.996 9.996 0 0 0 12.221 22a9.547 9.547 0 0 0 6.618-2.423l-3.232-2.509z" opacity=".5"/>
    <path fill="currentColor" d="M21.64 10.182h-9.418v3.868h5.382a4.6 4.6 0 0 1-1.996 3.018l-.01.006l.01-.006l3.232 2.51a9.753 9.753 0 0 0 2.982-7.35c0-.687-.06-1.371-.182-2.046z" opacity=".25"/>
</svg>
      </Link>
  
                </div>

<br/>
                       <Link
              href="/contact"
              className="block mt-4 px-6 py-3 bg-primary-500 text-white uppercase font-medium   hover:bg-primary-400 transition"
              >
              Contact Us
            </Link>     
        </div>
        </div>
      {/* Footer container */}
<div className="p-2 md:p-6 text-center">
<GoogleMap />
</div>
<div className="text-left p-4 text-center">


      <h3 className="text-2xl">Get in touch</h3>

      <br/>
      <div className="flex flex-col justify-evenly items-left gap-4">

        <div>
                <p className="text-xl">

             
        Phone Number
                </p>

       <p >


+91 90 36 36 86 88
       </p>
        </div>

        <div>

<p className="text-xl">
Email Address
</p>

<p>
contact@serahconstructions.com
</p>
        </div>

        <div>

<p className="text-xl">
Office Address
</p>
<p>

# 4, Opp. Podar International School, <br/> Basavanapura, Gottigere Post, <br/>Bengaluru - 560 083.
</p>
        </div>

</div>
      </div>

                    </div>
      <p className="text-center">&copy; Serah Constructions - 2025</p>

    </section>
  );
}