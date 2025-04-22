import React, { useState } from 'react';
import data from '../data/content.json';

function QueFaire() {
    const [activeButton, setActiveButton] = useState('Que faire ?');

    const handleButtonClick = (button) => {
        setActiveButton(button);
    };

    const filteredCards = data.cards.filter(card =>
        activeButton === 'Que faire ?'
            ? card.category === 'Que faire ?'
            : card.category === activeButton
    );

    return (
        <section className="relative z-10 bg-white  lg:px-[104px]  py-[128px] lg:py-[128px]">
            <div className="max-w-7xl  grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Content */}
                <div className="lg:col-span-5">
                    <div className="lg:sticky lg:top-[173px] self-start ">

                    <h2 className="text-3xl font-semibold mb-6">{data.title}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{data.description}</p>

                    <ul className="space-y-4">
                        {data.buttons.map((btn, idx) => {
                            const isActive = activeButton === btn.text;
                            return (
                                <li key={idx}>
                                    <button
                                        onClick={() => handleButtonClick(btn.text)}
                                        className={`group flex items-center px-4 py-2 rounded-md transition-colors duration-200 ${
                                            isActive
                                                ? 'text-red-600 font-semibold'
                                                : 'text-black hover:text-red-500'
                                        }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="17"
                                            height="17"
                                            fill="none"
                                            className={`mr-3 min-w-[20px] transition-colors duration-150 ${
                                                isActive ? 'text-red-600' : 'text-black group-hover:text-red-500'
                                            }`}
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
                                        <span className="text-base">{btn.text}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                </div>

                {/* Right Content */}
                <div className="lg:col-span-7">
                    <div className="flex lg:grid lg:grid-cols-2 gap-6 overflow-x-auto hide-scrollbar -mx-4 px-4 lg:overflow-visible scroll-smooth">
                        {filteredCards.map((card, idx) => (
                            <a
                                key={card.id || idx}
                                href={card.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="min-w-[85%] max-w-[85%] sm:min-w-[320px] sm:max-w-[320px] lg:min-w-0 lg:max-w-none bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow shrink-0 lg:shrink"
                            >
                                {/* Adjusted fixed height for image */}
                                <div className="bg-gray-100 overflow-hidden">
                                    <img
                                        src={card.imgSrc}
                                        alt={card.imgAlt}
                                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"  // Height increased to 400px
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                    <p className="text-gray-600 text-sm text-justify">{card.description}</p>
                                    <div className="mt-4 flex items-center text-red-600 font-medium">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none">
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
                                        <span className="ml-2">Explorer</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default QueFaire;
