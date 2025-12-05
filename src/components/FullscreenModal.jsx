"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

export default function FullscreenModal({
  images,
  setFullscreen,
  setCurrentIndex,
  currentIndex,
}) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });

  const closeFullscreen = () => {
    setFullscreen(false);
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const startDrag = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const endDrag = () => setIsDragging(false);

  const zoomIn = () => setScale((s) => Math.min(4, s + 0.25));
  const zoomOut = () => setScale((s) => Math.max(1, s - 0.25));
  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex flex-col animate-fadeIn">
      <div className="flex justify-between items-center p-4 text-white">
        <div className="flex gap-2">
          <button
            onClick={closeFullscreen}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            Close
          </button>
          <button
            onClick={() =>
              setCurrentIndex((i) => (i - 1 + images.length) % images.length)
            }
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentIndex((i) => (i + 1) % images.length)}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            Next
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={zoomIn}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            +
          </button>
          <button
            onClick={zoomOut}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            -
          </button>
          <button
            onClick={resetZoom}
            className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <div
        className="flex-1 flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={startDrag}
        onMouseMove={onDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onDoubleClick={resetZoom}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1080}
          height={920}
          className="h-auto w-full md:h-full md:w-auto transition-transform duration-150 ease-in-out"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          }}
        />
      </div>

      <div className="flex justify-center gap-2 overflow-x-auto p-3 bg-black/60 border-t border-white/10">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img.src}
            alt={img.alt || ""}
            width={100}
            height={100}
            fetchPriority="high"
            onClick={() => setCurrentIndex(i)}
            className={`h-16 w-auto rounded-md cursor-pointer object-cover ${
              i === currentIndex ? "ring-2 ring-white" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
