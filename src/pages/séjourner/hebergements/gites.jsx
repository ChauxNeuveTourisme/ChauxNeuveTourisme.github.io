import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router-dom';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix marker path
delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerRetina,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});


const Gites = [
    {
        title: "Chez Hervé le Châtelet",
        location: "Chaux-Neuve",
        img: "/images/hebergements/Gites/ChezHerveLeChatelet/3.jpg",
        url: "#",
        lat: 46.677795843739, 
        lng: 6.136786895743958,
    },
    {
        title: "La Bâtie Dessous",
        location: "Mouthe",
        img: "/images/hebergements/Gites/LaBatieDessous/la-batie-dessous-gite-location-salle-reception-mouthe-doubs-jura-ferme-alpage-terrasse-1600x1600-1.jpg",
        url: "#",
        lat: 46.66803283339151, 
        lng: 6.195865114514756,
    },
    {
        title: "Chez Liadet",
        location: "Mouthe",
        img: "/images/hebergements/Gites/ChezLiadet/3.jpg",
        url: "#",
        lat: 46.68094128611678, 
        lng: 6.186381282252004,
    },
    {
        title: "La Loge Du Tremplin",
        location: "Chaux-Neuve",
        img: "/images/hebergements/Gites/LaLogeDuTremplin/48329409_1967679613308099_923081552441638912_n.jpg",
        url: "#",
        lat: 46.68518619122435, 
        lng: 6.122440012939979,
    },
    {
        title: "La Maison du Montagnon",
        location: "Chapelle-des-Bois",
        img: "/images/hebergements/Gites/LaMaisonDuMontagnon/489821155_3905497049688345_6645143468283037052_n.jpg",
        url: "#",
        lat: 46.601496014008546, 
        lng: 6.1134785687564674,
    },
    {
        title: "Les Éterlous",
        location: "Malbuisson",
        img: "/images/hebergements/Gites/LesEterlous/79e4c25d.jpg",
        url: "#",
        lat: 46.6014812711154,
        lng: 6.1134785687564674,
    },
];

// FlyTo and open popup component
const FlyToMarker = ({ position, markerRef, shouldFly }) => {
    const map = useMap();

    React.useEffect(() => {
        if (shouldFly && markerRef.current) {
            map.flyTo(position, 13, { duration: 1 });
            markerRef.current.openPopup();
        }
        }, [shouldFly]);
    return null;
    };

const GitesListingPage = () => {
    const markerRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="flex bg-white h-screen px-4 sm:px-8 lg:px-[104px] py-16 lg:py-[30px]">
            {/* Left - Hotel Cards */}
            <div className="w-full md:w-1/2 overflow-y-auto max-h-screen p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Gites.map((gI, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            className="block border rounded-lg shadow hover:shadow-md transition p-4 bg-white cursor-pointer"
                        >
                            <figure className="aspect-square relative group overflow-hidden">
                                <img
                                    src={gI.img}
                                    alt={gI.title}
                                    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </figure>
                            <div className="mt-2">
                                <h2 className="text-lg font-semibold">{gI.title}</h2>
                                <p className="text-gray-500">{gI.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Map */}
            <div className="hidden md:block w-1/2 sticky top-0 h-screen">
                <MapContainer center={[47.2, 6.5]} zoom={9} className="h-full w-full z-0">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {Gites.map((gI, i) => {
                        const markerRef = markerRefs.current[i] ?? React.createRef();
                        markerRefs.current[i] = markerRef;
                    
                    return (
                        <Marker
                            key={i}
                            position={[gI.lat, gI.lng]}
                            ref={markerRef}
                        >
                            <Popup>
                                <Link to={gI.url} className="block no-underline text-black">
                                    <img src={gI.img} alt={gI.title} className="w-full h-[160px] object-cover" />
                                    <div className="bg-white p-2">
                                        <h3 className="text-sm font-semibold">{gI.title}</h3>
                                        <p className="text-xs text-gray-500">{gI.location}</p>
                                    </div>
                                </Link>
                            </Popup>
                            <FlyToMarker
                                position={[gI.lat, gI.lng]}
                                markerRef={markerRef}
                                shouldFly={i === activeIndex}
                            />
                        </Marker>
                    );
                })}
            </MapContainer>
            </div>
        </section>
    );
};

export default GitesListingPage;

