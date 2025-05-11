import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Dummy data for hotels
const hotels = [
    {
        title: "Hôtel Les Tremplins",
        location: "Chaux-Neuve",
        img: "/images/hebergements/hotel/HotelLesTremplins/resto-super-et-chambre.jpg",
        url: "#",
        lat: 46.67944429665475, 
        lng: 6.132820699174317,
      },
      {
        title: "Hôtel Auberge du Grand Gît",
        location: "Chaux-Neuve",
        img: "/images/hebergements/hotel/AubergeDuGrandGit/d4531ed814954b61c34c197fe5085218-P1050950-3-1600x0.jpg",
        url: "#",
        lat: 46.68120316816392, 
        lng: 6.136675041775811,
      },
  {
    title: "Hôtel-Restaurant Le Lac",
    location: "Malbuisson",
    img: "/images/hebergements/hotel/HotelRestaurantLeLac/57731888.jpg",
    url: "#",
    lat: 46.79975714884202, 
    lng: 6.304883926437128,
  },
  {
    title: "Hôtel Club-Restaurant Le Risoux",
    location: "Bois-d'Amont",
    img: "/images/hebergements/hotel/HotelClubLeRisoux/53310971.jpg",
    url: "#",
    lat: 46.54816199175097, 
    lng: 6.1453638902114935,
  },
  {
    title: "Hôtel Restaurant La Redoute Les Rousses Jura",
    location: "Les Rousses",
    img: "/images/hebergements/hotel/HotelLaRedoute/15360713.jpg",
    url: "#",
    lat: 46.485783419813295, 
    lng: 6.058787839915334,
  },
  {
    title: "Hôtel l'Atelier de Donat",
    location: "Malbuisson",
    img: "/images/hebergements/hotel/HôtelLeAtelierDeDonat/16.jpg",
    url: "#",
    lat: 46.80241997112748, 
    lng: 6.305129997601264,
  },
  
  // Add more entries as needed...
];

const HotelListingPage = () => {
    return (
        <section className="flex bg-white h-screen  px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            {/* Left - Hotel Cards */}
            <div className="w-full md:w-1/2 overflow-y-scroll p-4">
                {/* Grid for hotel cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hotels.map((hotel, i) => (
                        <a
                            key={i}
                            href={hotel.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block border rounded-lg shadow hover:shadow-md transition p-4 bg-white"
                        >
                            {/* Figure element for image and hover effect */}
                            <figure className="max-h-full max-w-full bg-transparent overflow-hidden w-full h-auto aspect-square relative group">
                                <img
                                    src={hotel.img}
                                    alt={hotel.title}
                                    className="h-full w-full object-cover transition duration-300 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="mt-2">
                                <h2 className="text-lg font-semibold">{hotel.title}</h2>
                                <p className="text-gray-500">{hotel.location}</p>
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
                    {hotels.map((hotel, i) => (
                    <Marker key={i} position={[hotel.lat, hotel.lng]}>
                        <Popup>
                            <a
                                href={hotel.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-[275px] no-underline text-black"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[160px] overflow-hidden rounded-t-md">
                                    <img
                                        src={hotel.img}
                                        alt={hotel.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                {/* Content */}
                                <div className="bg-white p-3 rounded-b-md shadow-md">
                                    <h3 className="text-sm font-semibold">{hotel.title}</h3>
                                    <p className="text-xs text-gray-500">{hotel.location}</p>
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

export default HotelListingPage;
