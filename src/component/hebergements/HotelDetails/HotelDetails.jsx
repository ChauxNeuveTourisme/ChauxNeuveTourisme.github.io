import React from 'react';
import { Link } from 'react-router-dom';

const HotelDetails = ({
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageAlt,
    caption,
    title,
    dates,
    address,
    phone,
    email,
    website,
    allDatesLink,
    backLabel = "Retour", // <-- Default if not passed
    backLink = "/hotels",         // <-- Default if not passed
  }) => {
  return (
    <div className="max-w-screen-3xl mx-auto flex flex-col lg:flex-row">
      {/* Image Grid */}
      <div className="relative grid w-full grid-cols-1 gap-2 lg:w-7/12 lg:grid-cols-2">
        <figure className="col-span-1 lg:col-span-2 overflow-hidden">
          <img

            src={imageSrc1}
            alt={imageAlt}
            className="h-full w-full object-cover aspect-video"
            loading="lazy"
          />
        </figure>
        <figure className="hidden lg:block overflow-hidden max-h-[300px]">
          <img
            src={imageSrc2}
            alt={imageAlt}
            className="h-full w-full object-cover aspect-video"
            loading="lazy"
          />
        </figure>
        <figure className="hidden lg:block overflow-hidden max-h-[300px]">
          <img
            src={imageSrc3}
            alt={imageAlt}
            className="h-full w-full object-cover aspect-video"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Details Section */}
      <div className="w-full lg:w-5/12 lg:py-8 xl:py-[5rem] pt-[30px] lg:pt-0 px-4 xl:px-[5rem] 2xl:px-[6.5rem]">
{/* Back Link */}
<Link
          to={backLink}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          <span className="material-m">arrow_back</span>
          {backLabel}
        </Link>

        <h1 className="text-2xl font-semibold border-b py-6 mt-6">{title}</h1>

        {/* Horaires */}
        <div className="border-b py-6">
          <div className="grid grid-cols-3 gap-x-4">
            <p className="font-semibold">Horaires</p>
            <div className="col-span-2 text-end">
              <div className="flex items-center gap-x-2 justify-end">
                <span className="block w-3 h-3 rounded-full bg-green-500"></span>
                <p>Ouvert aujourd'hui</p>
              </div>
              <p className="text-lg font-semibold">Toute la journée</p>
            </div>
          </div>
        </div>

         {/* Address */}
         <div className="border-b border-gray-300 py-6">
          <p className="font-medium mb-3">Coordonnées</p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <span className="material-m shrink-0">place</span>
              <div>
                <p className="font-semibold">{address?.label}</p>
                <p>{address?.details}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-b border-gray-300 flex flex-wrap gap-x-[2rem] gap-y-[1rem] py-[1.5rem]">
          {phone && (
            <div className="flex items-center gap-2">
              <span className="material-m shrink-0">call</span>
              <a href={`tel:${phone}`} className="hover:text-blue-600 hover:underline">
                {phone}
              </a>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <span className="material-m shrink-0">mail</span>
              <a href={`mailto:${email}`} className="hover:text-blue-600 hover:underline">
                {email}
              </a>
            </div>
          )}
          {website && (
          <div className="flex items-center gap-2">
            <span className="material-m shrink-0">explore</span>
            <a
              href={website.startsWith('http') ? website : `https://${website}`}
              className="hover:text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {website.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}

        </div>

        {/* Rating */}
        <span className="inline-flex items-center justify-center rounded-full px-4 py-2 border shadow bg-gray-100 dark:bg-white text-gray-800 dark:text-black border-gray-200 dark:border-gray-300">
  <span className="material-icons text-base mr-2">grade</span>
  <span className="text-sm">3 étoiles</span>
</span>

      </div>
    </div>
  );
};

export default HotelDetails;

