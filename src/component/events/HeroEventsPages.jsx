import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal routing

const EventDetail = ({
  imageSrc,
  imageAlt,
  caption,
  title,
  dates,
  address,
  phone,
  email,
  website,
  allDatesLink,
  backLabel = "Retour à l'agenda", // <-- Default if not passed
  backLink = "/evenements",         // <-- Default if not passed
}) => {
  return (
    <div className="max-w-[120rem] mx-auto flex flex-col lg:flex-row pb-24">
      {/* IMAGE SECTION */}
      <div className="relative grid w-full grid-cols-1 gap-2 lg:w-7/12 ">
        <figure className="bg-transparent overflow-hidden relative">
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-full  w-full aspect-video object-cover"
          />
          {caption && (
            <figcaption className="lg:absolute right-6 top-6 lg:bottom-4 lg:right-4 lg:top-auto text-white bg-black bg-opacity-40 px-2 py-1 rounded">
              © {caption}
            </figcaption>
          )}
        </figure>
      </div>

      {/* TEXT SECTION */}
      <div className="w-full lg:w-5/12 lg:py-8 xl:py-[5rem] pt-[30px] lg:pt-0 px-4 xl:px-[5rem] 2xl:px-[6.5rem]">
        {/* Back Link */}
        <Link
          to={backLink}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          <span className="material-m">arrow_back</span>
          {backLabel}
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-semibold border-b border-gray-300 py-6">
          {title}
        </h1>

        {/* Dates */}
        <div className="border-b border-gray-300 py-6">
          <div className="grid grid-cols-3 gap-x-4 items-center">
            {allDatesLink && (
              <p className="font-medium text-gray-800 mb-[.75rem]">Dates</p>
            )}

            <div className="col-span-2 text-center space-y-2">
              {dates && (
                dates.map((date, idx) => (
                  <p key={idx} className="text-lg">{date}</p>
                ))
              )}

              {allDatesLink && (
                <a
                  href={allDatesLink}
                  className="hover:text-blue-600 hover:underline block"
                >
                  Voir toutes les dates
                </a>
              )}
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
      </div>
    </div>
  );
};

export default EventDetail;
