
import React from "react";
import WeatherBadge from "../Weather/WeatherBadge";

export default function HeroBanner() {
    return (
        <div className="relative h-[600px] text-white overflow-hidden">
            {/* Background Image */}
            <img
                src="/images/chaux-neuve/chaux-neuve.webp"
                alt="Ski Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Centered Row */}
            <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 text-center bg-[rgba(0,0,0,.3)] p-6 w-[90%] md:w-[70%] lg:w-[40%] h-auto md:h-[40%] rounded-xl">
  {/* Hero Text */}
  <div>
    <h1 className="text-2xl md:text-3xl font-bold text-white font-roboto-condensed mb-3">
      Chaux-Neuve
    </h1>
    <p className="text-base md:text-lg font-bold text-white text-center lg:text-justify md:text-justify">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
    </p>
  </div>

                    {/* Weather Badge */}
                    <div className="flex-shrink-0">
                        <WeatherBadge />
                    </div>
                </div>
            </div>
        </div>
    );
}
