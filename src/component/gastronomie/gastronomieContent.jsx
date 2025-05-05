import React from 'react'

const GastronomieContent = ({ title, text, imgSrc, imgAlt, reverse = false, link }) => {
    return (
        <div className="flex flex-wrap items-center mb-20">
            <div className={`w-full md:w-1/2 ${reverse ? 'order-last md:pl-10' : 'md:pr-10'}`}>
                <h4 className="text-3xl text-gray-800 font-bold mb-3">{title}</h4>
                <p className="text-gray-600 mb-6">{text}</p>

                {/* Only show the button if link is provided */}
                {link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        En savoir plus
                    </a>
                )}
            </div>
            
            <div className="w-full md:w-1/2">
                <img className="rounded-lg" src={imgSrc} alt={imgAlt} />
            </div>
        </div>
    );
};

export default GastronomieContent