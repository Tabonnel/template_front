"use client";

import { useState, useEffect } from "react";
import Icon from "./icon/Icon";
import Image from "next/image";

interface Props {
  autoSlide?: boolean;
  autoSlideInterval?: number;
}
const WIDTH = 150;
const HEIGHT = 150;

export default function Carousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}: Props) {
  const slides = [
    "https://i.ibb.co/ncrXc2V/1.png",
    "https://i.ibb.co/B3s7v4h/2.png",
    "https://i.ibb.co/XXR8kzF/3.png",
    "https://i.ibb.co/yg7BSdM/4.png",
  ];
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(next, autoSlideInterval);

    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Include all dependencies used in the effect

  return (
    <div
      className={`overflow-hidden relative `}
      style={{ width: `${WIDTH}px`, height: `${HEIGHT}px` }}
    >
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((img, index) => (
          <Image
            src={img}
            alt={`Slide ${index + 1}`}
            key={img}
            width={WIDTH}
            height={HEIGHT}
            style={{ width: "auto", height: "auto" }}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between z-0">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-secondary/80 text-gray-800 hover:bg-secondary"
        >
          <Icon name="chevronLeft" size={20} color="hsl(var(--foreground))" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-secondary/80 text-gray-800 hover:bg-secondary"
        >
          <Icon name="chevronRight" size={20} color="hsl(var(--foreground))"  />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-3 h-3 bg-primary rounded-full
              ${curr === i ? "p-2" : "bg-white/50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
