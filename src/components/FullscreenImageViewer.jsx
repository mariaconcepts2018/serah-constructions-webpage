"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useState } from "react";
const FullscreenModal = dynamic(() => import("./FullscreenModal"));

export default function FullscreenImageViewer({ images, image, index }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(index);

  const openFullscreen = () => {
    setFullscreen(true);
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Image Card */}
      <div onClick={openFullscreen} className="relative group cursor-pointer">
        <Image
          src={image.src}
          alt={image.alt}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
        />
        <div className="rounded-md absolute inset-0 h-full bg-black/50 group-hover:scale-105 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm transition">
          Click to view
        </div>
      </div>

      {/* Fullscreen Modal */}
      {fullscreen && (
        <FullscreenModal
          setFullscreen={setFullscreen}
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      )}
    </>
  );
}
