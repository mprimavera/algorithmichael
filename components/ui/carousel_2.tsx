"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useId } from "react";

interface Carousel2Props {
  children: React.ReactNode[];
}

export default function Carousel2({ children }: Carousel2Props) {
  const [current, setCurrent] = useState(0);
  const id = useId();
  const total = children.length;

  const handlePreviousClick = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const handleNextClick = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel2-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / total)}%)`,
        }}
      >
        {children.map((child, index) => (
          <li
            key={index}
            className="flex flex-1 items-center justify-center relative
                       w-[70vmin] h-[70vmin] mx-[4vmin] z-10
                       transition-all duration-300 ease-in-out"
            onClick={() => current !== index && setCurrent(index)}
            style={{
              transform:
                current !== index
                  ? "scale(0.98) rotateX(8deg)"
                  : "scale(1) rotateX(0deg)",
              transformOrigin: "bottom",
            }}
          >
            <div className="[perspective:1200px] [transform-style:preserve-3d] w-full h-full flex items-center justify-center">
              {child}
            </div>
          </li>
        ))}
      </ul>

      {/* Controls */}
      <div className="absolute flex justify-center w-full bottom-2">
        <button
          className="w-10 h-10 flex items-center mx-2 justify-center
                     bg-neutral-800 rounded-full hover:-translate-y-0.5
                     active:translate-y-0.5 transition duration-200 rotate-180"
          title="Previous"
          onClick={handlePreviousClick}
        >
          <IconArrowNarrowRight className="text-blue-500" />
        </button>

        <button
          className="w-10 h-10 flex items-center mx-2 justify-center
                     bg-neutral-800 rounded-full hover:-translate-y-0.5
                     active:translate-y-0.5 transition duration-200"
          title="Next"
          onClick={handleNextClick}
        >
          <IconArrowNarrowRight className="text-blue-500" />
        </button>
      </div>
    </div>
  );
}
