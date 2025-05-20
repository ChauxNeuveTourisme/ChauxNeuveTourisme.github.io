import React from "react";

export default function ParcoursDetails({
  location,
  distance,
  positif,
  negatif,
  altitudeMin,
  altitudeMax,
  duree,
  balisage,
  gpxLink,
}) {
  return (
    <div className="bg-white px-4 sm:px-8 lg:px-[104px] py-16 lg:py-[30px]">
      {/* Location */}
      <div className="text-center text-sm text-gray-700 mb-6">
        <i className="fas fa-flag mr-1" />
        {location}
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-sm text-gray-700">
        <div><span className="font-semibold">Distance:</span> {distance}</div>
        <div><span className="font-semibold">Dénivelé positif:</span> {positif}</div>
        <div><span className="font-semibold">Dénivelé négatif:</span> {negatif}</div>
        <div><span className="font-semibold">Altitude min.:</span> {altitudeMin}</div>
        <div><span className="font-semibold">Altitude max.:</span> {altitudeMax}</div>
        <div><span className="font-semibold">Durée (selon allure):</span> {duree}</div>
        {balisage &&(
          <div><span className="font-semibold">Balisage:</span> {balisage}</div>
        )}
      </div>

      {/* Download Button */}
      <div className="text-center mt-8">
        <a
          href={gpxLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded hover:bg-blue-700 transition"
        >
          Fichier GPX
          <i className="far fa-arrow-alt-circle-down ml-2" />
        </a>
      </div>
    </div>
  );
}


