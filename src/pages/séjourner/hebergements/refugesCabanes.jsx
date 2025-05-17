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


const refugesCabanes = [
    {
        title: "Les Ecrins du Val de Mouthe",
        location: "Mouthe",
        img: "/images/hebergements/RefugesCabanes/LesEcrinsDuVal/5003a10ee8587ac80da442e7973c60b5-terrasse-bois-du-four--1600x0.jpg",
        url: "#",
        lat: 46.69491625263858, 
        lng: 6.175715060560305,
    },
    {
        title: "camping de la source",
        location: "Mouthe",
        img: "/images/hebergements/RefugesCabanes/campingDeLaSource/DSC1999-HDR.jpg",
        url: "#",
        lat: 46.70629503200852, 
        lng: 6.208081637133776,
    },
    {
        title: "La roulotte de la Jaique",
        location: "Chaux-Neuve",
        img: "/images/hebergements/RefugesCabanes/RefugeEnRoulotte/snLzUlaA5X4DttZDzTKdbrHx1zU (1).jpg",
        url: "#",
        lat: 46.624495812707586,
        lng: 6.181186268757452,
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

const RefugesCabanesListingPage = () => {
    const markerRefs = useRef([]);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="flex bg-white h-screen px-4 sm:px-8 lg:px-[104px] py-16 lg:py-[30px]">
            {/* Left - Hotel Cards */}
            <div className="w-full md:w-1/2 overflow-y-auto max-h-screen p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {refugesCabanes.map((rC, i) => (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            className="block border rounded-lg shadow hover:shadow-md transition p-4 bg-white cursor-pointer"
                        >
                            <figure className="aspect-square relative group overflow-hidden">
                                <img
                                    src={rC.img}
                                    alt={rC.title}
                                    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </figure>
                            <div className="mt-2">
                                <h2 className="text-lg font-semibold">{rC.title}</h2>
                                <p className="text-gray-500">{rC.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Map */}
            <div className="hidden md:block w-1/2 sticky top-0 h-screen">
                <MapContainer center={[47.2, 6.5]} zoom={9} className="h-full w-full z-0">
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {refugesCabanes.map((rC, i) => {
                        const markerRef = markerRefs.current[i] ?? React.createRef();
                        markerRefs.current[i] = markerRef;
                    
                    return (
                        <Marker
                            key={i}
                            position={[rC.lat, rC.lng]}
                            ref={markerRef}
                        >
                            <Popup>
                                <Link to={rC.url} className="block no-underline text-black">
                                    <img src={rC.img} alt={rC.title} className="w-full h-[160px] object-cover" />
                                    <div className="bg-white p-2">
                                        <h3 className="text-sm font-semibold">{rC.title}</h3>
                                        <p className="text-xs text-gray-500">{rC.location}</p>
                                    </div>
                                </Link>
                            </Popup>
                            <FlyToMarker
                                position={[rC.lat, rC.lng]}
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

export default RefugesCabanesListingPage;




