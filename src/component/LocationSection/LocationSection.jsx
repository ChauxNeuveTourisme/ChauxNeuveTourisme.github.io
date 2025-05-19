// LocationSection.jsx
import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '800px',
};

const LocationSection = ({ lat, lng, title, address }) => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
    }); 
    const center = {
      lat: lat,
      lng: lng,
    };  
    if (!isLoaded) return <div>Loading...</div>;    
    return (
        <section className="max-w-screen-3xl mx-auto relative bg-white px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
            {/* Header */}
            <header className="border-b border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
                <h2 className="text-3xl font-bold text-gray-900">
                    Emplacement
                </h2>
            </header>   
            {/* Google Map */}
            <div className="overflow-hidden rounded-lg">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={16}
                >
                <Marker position={center} />
                </GoogleMap>
            </div>  
            {/* Footer Button */}
            <footer className="grid items-center md:justify-start mt-8">
                <section className="flex flex-col md:flex-row items-center justify-center gap-24">
                    <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(title)}+${encodeURIComponent(address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-200 border-1 text-accent1-95 dark:text-accent1-10 p-8 cta-s transition-all duration-400 ease-in-out hover:bg-accent1-10 dark:hover:bg-accent1-70"
                    >
                        <span className="px-8">S'y rendre</span>
                        <span className="material-symbols-outlined text-blue-500">navigation</span>
                    </a>
                </section>
            </footer>
        </section>
    );
};

export default LocationSection;
