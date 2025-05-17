
import React from "react";

export default function HeroBanner() {
    return (
      <div className="relative h-[600px] text-white overflow-hidden">
        {/* Background Image */}
        <img
            src="/images/chaux-neuve/IMG_1685.jpg"
            alt="Ski Banner"
            className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    );
}
