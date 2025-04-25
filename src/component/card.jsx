// Card.js
import React from 'react';

const Card = ({ title, description, imageUrl, link}) => {
  return (
    <div>
      
      <div className="relative max-h-full max-w-full group/CardActivity min-w-[300px] bg-transparent">
        <a href={link} className="" title={title}>
          <figure className="max-h-full max-w-full bg-transparent size-fit overflow-hidden w-full h-auto aspect-square relative">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition duration-300 ease-in-out group-hover/CardActivity:scale-110"
              loading="lazy"
            />
            <div className="flex flex-wrap items-center gap-[.5rem] absolute top-[2.5rem] left-[2.5rem] z-10"></div>
          </figure>
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button className="arrowLink flex items-center ArrowLink_arrowLink__qTYF8 text-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                fill="none"
                className="ArrowLink_arrowLinkIcon__LsVWK"
              >
                <path
                  fill="currentColor"
                  d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
                />
                <path
                  fill="#fff"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.707 8.5 12 7.793l-3.5-3.5L7.793 5l3 3H4v1h6.793l-3 3 .707.707 3.5-3.5z"
                />
              </svg>
              <p className="Text_button1__Jch_r ml-2 text-justify">Explorer</p>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
