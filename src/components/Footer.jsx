"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/icons/Logo";
import {
  Email,
  Facebook,
  Instagram,
  Location,
  Phone,
  Pinterest,
  Youtube,
} from "@/icons/Svg";
import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("./GoogleMap"));

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-900 border-t border-neutral-700 pt-12 pb-18 lg:pb-0">
      <div className="w-full px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-4 md:grid-cols-2">
          <Link href="/">
            <Logo className="w-24 md:w-30 mx-auto md:ml-0 mb-6 md:mb-0" />
            {/* <Image  src="/serah-logo.svg" height={200} width={200} alt="logo" /> */}
          </Link>

          <div>
            <div className="flex flex-col  md:gap-x-16 justify-evenly items-left gap-4 text-neutral-200">
              <div className="flex items-center gap-4 items-start">
                <div>
                  <Phone className="w-7 mt-2" />
                </div>

                <div>
                  <p className="text-xl">Phone Number</p>

                  <p>+91 95388 39986</p>
                </div>
              </div>

              <div className="flex items-center gap-4 items-start">
                <div>
                  <Email className="w-7 mt-2" />
                </div>
                <div>
                  <p className="text-xl">Email Address</p>

                  <p>contact@serahconstructions.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-neutral-200 items-start">
            <div>
              <Location className="w-7 mt-2" />
            </div>
            <div>
              <p className="text-xl">Office Address</p>
              <p>
                # 4, Opp. Podar International School, <br /> Basavanapura,
                Gottigere Post, <br />
                Bengaluru - 560 083.
              </p>
            </div>
          </div>
        </div>
        <GoogleMap />
        <div className="flex flex-col items-center justify-center w-full py-4 mt-12 border-t border-neutral-200 md:flex-row md:justify-between">
          <p className="mb-4 text-sm text-center text-neutral-200 md:mb-0">
            Copyright © 2025 Serah Constructions. <br />
            All Rights Reserved.
          </p>
          <div className="flex gap-4 text-neutral-200 sm:justify-center items-center">
            <Link
              href="https://www.facebook.com/serah.construction.blr/"
              target="_blank"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <Facebook className="w-7" />
            </Link>
            <Link
              href="https://www.instagram.com/serah.construction/"
              target="_blank"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <Instagram className="w-7" />
            </Link>
            {/* <Link
              href="https://www.youtube.com/"
              target="_blank"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <Youtube className="w-7" />
            </Link> */}
            <Link
              href="https://in.pinterest.com/serahconstruction/"
              target="_blank"
              className="block transition-opacity text-inherit hover:opacity-80"
            >
              <Pinterest className="w-7" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
