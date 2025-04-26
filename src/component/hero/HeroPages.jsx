import React from "react";

export default function HeroPages({ titleText, titleStyle = "", img }) {
    return (
        <div className="relative h-[600px] text-white overflow-hidden">
            {/* Background Image */}
            <img
                src={img}
                alt="Hero Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Centered Row */}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="mt-[529px]  p-[20px] lg:p-[70px] z-2 container  lg:mb-12">
                    {/* Hero Text */}
                    <div>
                        <h1 className={`text-[32px] leading-[32px] font-bold  mb-3 ${titleStyle}`}>
                            {titleText}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
