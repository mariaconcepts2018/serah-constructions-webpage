"use client";

import { WhatsAppIcon } from "@/icons/Svg";
import Link from "next/link";

export default function WhatsApp() {

  return (
      <div className="fixed bottom-0 right-0 p-4 md:p-8">

      <Link href="https://wa.me/+919538839986?text=Hello%20I%20would%20like%20to%20know%20more%20about%20your%20services" target="_blank" className="w-full h-auto cursor-pointer">
      <WhatsAppIcon className="w-10" />
      </Link>
      </div>
  );
}