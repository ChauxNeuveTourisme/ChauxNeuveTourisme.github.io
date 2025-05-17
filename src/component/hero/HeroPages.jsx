import React from "react";
import { Link } from "react-router-dom";

export default function HeroPages({ titleText, titleStyle = "", img, backLink, backLabel = "Retour" }) {
  return (
    <div className="relative h-[700px] text-white ">
      {/* Background Image */}
      <img
        src={img}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="mt-[400px] lg:mt-[529px] p-[20px] lg:p-[70px] z-2 container lg:mb-12">
          {/* Title and Back Button in One Row */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className={`text-[32px] leading-[32px] font-bold ${titleStyle}`}>
              {titleText}
            </h1>

            {backLink && (
              <Link
                to={backLink}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                {backLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


