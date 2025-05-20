
import React from 'react';
import { Link } from 'react-router-dom';

const defaultCallouts = [
    {
        name: 'Hôtels',
        imageSrc: '/images/chaux-neuve/restaurant.jpg',
        imageAlt: 'Photo des appartements',
        href: '/hotels',
    },
    {
        name: "Gîtes et chambres d'hôtes",
        imageSrc: '/images/hebergements/Gites/LesEterlous/79e4c25d.jpg',
        imageAlt: 'Photo des hôtels',
        href: '/gites',
    },
    {
        name: 'Refuges et Cabanes',
        imageSrc: "/images/hebergements/RefugesCabanes/LesEcrinsDuVal/5003a10ee8587ac80da442e7973c60b5-terrasse-bois-du-four--1600x0.jpg",
        imageAlt: 'Photo des commerces',
        href: '/refugesCabanes',
    },
];

function ChauxHebergements({ callouts = defaultCallouts }) {
    return (
        <div className="bg-white sm:py-16 lg:px-[104px] py-16 lg:py-[32px]">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 no-scrollbar">
                    {callouts.map((item) => (
                        <div key={item.name} className="flex-shrink-0 w-[80%] sm:w-auto group relative">
                            <div className="aspect-[1/1] w-full overflow-hidden rounded-xl bg-gray-100">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <div className="flex items-center justify-between mt-4">
                                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                {item.href.startsWith('http') ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="arrowLink flex items-center text-red-600"
                                    >
                                        <ArrowIcon />
                                        <p className="ml-2 text-justify">Explorer</p>
                                    </a>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className="arrowLink flex items-center text-red-600"
                                    >
                                        <ArrowIcon />
                                        <p className="ml-2 text-justify">Explorer</p>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ArrowIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none">
            <path fill="currentColor" d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17" />
            <path
                fill="#fff"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.707 8.5 12 7.793l-3.5-3.5L7.793 5l3 3H4v1h6.793l-3 3 .707.707 3.5-3.5z"
            />
        </svg>
    );
}

export default ChauxHebergements;

