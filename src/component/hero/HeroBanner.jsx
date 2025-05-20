import React, { useEffect, useState } from "react";

const images = [
  "/images/chaux-neuve/IMG_3309.jpg",
  "/images/chaux-neuve/IMG_1980.jpg",
  "/images/chaux-neuve/IMG_8395.jpg",
  "/images/chaux-neuve/18e9015e338.webp",

];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // 1000 = 1 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] text-white overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots Navigation (Optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}