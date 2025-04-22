
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
                <div className="flex flex-row items-center space-x-10 text-center bg-[rgba(0,0,0,.3)] h-[40%] w-[40%] p-4">
                    {/* Hero Text */}
                    <div className="">
                        <h1 className="text-[32px] leading-[32px] font-bold text-white font-roboto-condensed mb-3">
                            Chaux-Neuve
                        </h1>
                        <p className="text-[20px] font-bold text-white text-justify">
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
