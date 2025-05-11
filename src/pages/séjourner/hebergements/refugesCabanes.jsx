import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy data for gites
const RefugesCabanes = [
  {
    title: "Gîte l'Erable",
    location: "LIEBVILLERS",
    img: "https://www.doubs.travel/uploads/external/a7fcd0e261689c2caa15ed478d4f009a-3a98661116c6fcabe5994356ea8e0a10-gite-lerable-liebvillers-pergue--5--504x336-340x250-0517692fcd89e1d95678287f73a790a1.jpg",
    url: "https://www.doubs.travel/hebergements/gite-lerable",
    lat: 47.33499,
    lng: 6.78256,
  },
  {
    title: "Le Chant de l’Âme",
    location: "ORNANS",
    img: "https://www.doubs.travel/uploads/external/b1920775447e9df6086804b9ab04eb10-2ea26edbb7caaca74d2d1e3e7cebef18-1-830-504x336-340x250-812311c831c60d21998f442763a76a33.jpg",
    url: "https://www.doubs.travel/hebergements/le-chant-de-lame",
    lat: 47.11517,
    lng: 6.13994,
  },
  {
    title: "Gîte l'Erable",
    location: "LIEBVILLERS",
    img: "https://www.doubs.travel/uploads/external/a7fcd0e261689c2caa15ed478d4f009a-3a98661116c6fcabe5994356ea8e0a10-gite-lerable-liebvillers-pergue--5--504x336-340x250-0517692fcd89e1d95678287f73a790a1.jpg",
    url: "https://www.doubs.travel/hebergements/gite-lerable",
    lat: 47.33499,
    lng: 6.78256,
  },
  {
    title: "Le Chant de l’Âme",
    location: "ORNANS",
    img: "https://www.doubs.travel/uploads/external/b1920775447e9df6086804b9ab04eb10-2ea26edbb7caaca74d2d1e3e7cebef18-1-830-504x336-340x250-812311c831c60d21998f442763a76a33.jpg",
    url: "https://www.doubs.travel/hebergements/le-chant-de-lame",
    lat: 47.11517,
    lng: 6.13994,
  },

  // Add more entries as needed...
];

const RefugesCabanesListingPage = () => {
    return (
        <section className="flex bg-white h-screen  px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            {/* Left - gite Cards */}
            <div className="w-full md:w-1/2 overflow-y-scroll p-4">
                {/* Grid for gite cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {RefugesCabanes.map((gite, i) => (
                        <a
                            key={i}
                            href={gite.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border rounded-lg shadow hover:shadow-md transition p-4 bg-white"
                        >
                            {/* Figure element for image and hover effect */}
                            <figure className="max-h-full max-w-full bg-transparent overflow-hidden w-full h-auto aspect-square relative group">
                                <img
                                    src={gite.img}
                                    alt={gite.title}
                                    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="mt-2">
                                <h2 className="text-lg font-semibold">{gite.title}</h2>
                                <p className="text-gray-500">{gite.location}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            
            {/* Right - Map */}
            <div className="hidden md:block w-1/2 sticky top-0 h-screen">
                <MapContainer center={[47.2, 6.5]} zoom={9} className="h-full w-full z-0">
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {RefugesCabanes.map((gite, i) => (
                        <Marker key={i} position={[gite.lat, gite.lng]}>
                            <Popup>
                                <a
                                    href={gite.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-[275px] no-underline text-black"
                                >
                                  {/* Image */}
                                    <div className="relative w-full h-[160px] overflow-hidden rounded-t-md">
                                        <img
                                            src={gite.img}
                                            alt={gite.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="bg-white p-3 rounded-b-md shadow-md">
                                        <h3 className="text-sm font-semibold">{gite.title}</h3>
                                        <p className="text-xs text-gray-500">{gite.location}</p>
                                    </div>
                                </a>
                            </Popup>

                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </section>
    );
};

export default RefugesCabanesListingPage;


