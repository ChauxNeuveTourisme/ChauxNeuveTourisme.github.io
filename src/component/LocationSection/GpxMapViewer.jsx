import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-gpx';

const GPXTrack = ({ gpxUrl }) => {
    const map = useMap();
    const gpxLayerRef = useRef(null);

    useEffect(() => {
        if (gpxLayerRef.current) {
        map.removeLayer(gpxLayerRef.current);
        }

        const gpx = new L.GPX(gpxUrl, {
            async: true,
            marker_options: {
            startIconUrl: 'https://www.openstreetmap.org/assets/marker-icon.png',
            endIconUrl: 'https://www.openstreetmap.org/assets/marker-icon.png',
            shadowUrl: 'https://www.openstreetmap.org/assets/marker-shadow.png',
            },
        });
        gpx.on('loaded', (e) => {
            const bounds = e.target.getBounds();
            map.fitBounds(bounds, { padding: [20, 20] });

            // Zoom in manually after fitting bounds
            setTimeout(() => {
                map.setZoom(12); // Change to 16 if you want closer
            }, 300);
        });

        gpx.addTo(map);
        gpxLayerRef.current = gpx;

        return () => {
            if (gpxLayerRef.current) {
                map.removeLayer(gpxLayerRef.current);
            }
        };
    }, [gpxUrl, map]);

    return null;
};

const GPXMap = ({ title = "Parcours GPX", gpxUrl, tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", tileAttribution }) => {
    return (
        <section className=" relative bg-white px-4 sm:px-8 lg:px-[104px] py-16 lg:py-[30px]">
            <header className="border-b border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </header>
            <div className="w-full h-[600px] rounded shadow">
                <MapContainer center={[46.6, 6.1]} zoom={25} className="w-full h-full z-0">
                    <TileLayer
                    attribution={tileAttribution || '&copy; OpenStreetMap contributors'}
                    url={tileUrl}
                    />
                    <GPXTrack gpxUrl={gpxUrl} />
                </MapContainer>
            </div>
        </section>
    );
};

export default GPXMap;
