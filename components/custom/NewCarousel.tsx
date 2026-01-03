"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type CarouselProps = {
  images?: string[]; // URLs (can be /images/xxx.jpg in public or external links)
  interval?: number; // ms
  className?: string;
};

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b5d7f90d6f4d5d8f3a1a2c3e4b5f6a7",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=59c6f2c4e8d1c4b8a9b8b8b7b6b5b4a3",
  "https://images.unsplash.com/photo-1493244040629-496f6d136cc3?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&s=6d6a6f1d2c0c4e6b2f5c8a9e0f1a2b3c",
];

export default function NewCarousel({
  images = DEFAULT_IMAGES,
  interval = 4000,
  className = "",
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const touchStartX = useRef<number | null>(null);

  const length = images.length;

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, interval, length]);

  function startAutoPlay() {
    stopAutoPlay();
    // only autoplay if more than 1 image
    if (length <= 1) return;
    timerRef.current = window.setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => (prev + 1) % length);
      }
    }, interval);
  }

  function stopAutoPlay() {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  function goTo(i: number) {
    setIndex(((i % length) + length) % length);
  }

  function prev() {
    goTo(index - 1);
  }

  function next() {
    goTo(index + 1);
  }

  // Touch handlers for swipe
  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    const threshold = 40; // min px to count as swipe
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // swiped left
        next();
      } else {
        prev();
      }
    }
    touchStartX.current = null;
  }

  return (
    <div
      className={`w-full relative overflow-hidden ${className}`}
      onMouseEnter={() => {
        isHoveredRef.current = true;
        stopAutoPlay();
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
        startAutoPlay();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* Slides */}
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-[50vh] shrink-0 mx-2">
            <div className="w-full aspect-video bg-gray-100 relative">
              {/* Use next/image for optimization; set fill and object-cover */}
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 100vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
            {/* Optional caption area - visible on md */}
            <div className="absolute left-4 bottom-4 bg-black bg-opacity-40 text-white px-3 py-1 rounded-md md:block hidden">
              <span className="text-sm">{`Image ${i + 1} of ${length}`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        aria-label="Previous"
        onClick={() => {
          prev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414 0L3 12.243l5.465-6.878a1 1 0 011.414 0l1.414 1.414a1 1 0 010 1.414L7.414 12l4.879 4.879z" clipRule="evenodd" />
        </svg>
      </button>

      <button
        aria-label="Next"
        onClick={() => {
          next();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-40 hover:bg-opacity-60 text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path fillRule="evenodd" d="M7.707 3.707a1 1 0 010-1.414L9.121.879a1 1 0 011.414 0l6.879 6.879-5.465 6.878a1 1 0 01-1.414 0L10.121 12.95a1 1 0 010-1.414l4.879-4.879L7.707 3.707z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-3 z-20 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === index ? "bg-white" : "bg-white/60"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
