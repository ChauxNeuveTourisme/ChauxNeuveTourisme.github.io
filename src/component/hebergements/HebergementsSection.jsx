import React from "react";

/**
 * Custom default icon – neutral by default, red on hover
 */
const DefaultIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        fill="none"
        className="text-current transition-colors group-hover:text-red-600"
    >
        <path
            fill="currentColor"
            d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
        />
        <path
            fill="#fff"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.707 8.5 12 7.793l-3.5-3.5L7.793 5l3 3H4v1h6.793l-3 3 .707.707 3.5-3.5z"
        />
    </svg>
);

/**
 * HotelInfoSection Component
 */
const HebergementsSection = ({ title, paragraph, linkText, linkHref, icon: Icon = DefaultIcon }) => {
    return (
        <section className="relative z-10 bg-white lg:px-[104px]  py-16 lg:py-[60px]">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="lg:grid grid-cols-12 lg:gap-x-3">
                    {/* Left Column: Title & Link */}
                    <div className="w-full lg:sticky top-0 col-span-6">
                        <p className="text-xl lg:text-2xl font-semibold text-black lg:max-w-lg">
                            {title}
                        </p>  
                        {linkText && linkHref && (
                        <a
                            href={linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 flex items-center gap-2 text-black font-medium group transition-colors hover:text-red-600"
                        >
                            <Icon />
                            <span className="transition-colors group-hover:text-red-600">{linkText}</span>
                        </a>
                        )}
                    </div>  
                    {/* Right Column: Description */}
                    <div className="w-full mt-10 lg:mt-0 col-span-6">
                        <div className="flex flex-col mb-6 lg:mb-10 last:mb-0 lg:w-5/6">
                            <p className="text-base leading-relaxed text-black">{paragraph}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HebergementsSection;

