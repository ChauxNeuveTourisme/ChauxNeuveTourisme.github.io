// Card.js
import React from 'react';

const Card = ({ title, description, imageUrl, link }) => {
  return (
    <div className="relative max-h-full max-w-full group/CardActivity min-w-[300px] bg-transparent">
      <a href={link} className="" title={title}>
        <figure className="max-h-full max-w-full bg-transparent size-fit overflow-hidden w-full h-auto aspect-square relative">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition duration-300 ease-in-out group-hover/CardActivity:scale-110"
            loading="lazy"
          />
          <div className="flex flex-wrap items-center gap-[.5rem] absolute top-[2.5rem]  left-[2.5rem] z-10"></div>
        </figure>
        <footer className="flex items-center justify-between py-[1rem]">
          <div className="line-clamp-1">
            <h3 className="heading-l shrink-0 mb-0">{title}</h3>
          </div>
          <button className="inline-flex items-center justify-center disabled:pointer-events-none rounded-200 mb-0 disabled:cursor-not-allowed outline-none hover:cursor-pointer bg-transparent dark:bg-transparent border-1 text-accent1-95 dark:text-accent1-10 hover:bg-accent1-10 dark:hover:bg-accent1-70 hover:text-accent1-95 dark:hover:text-accent1-0 disabled:border-basis-30 dark:disabled:border-basis-40 disabled:text-basis-40 dark:disabled:text-basis-40 active:bg-accent1-90 dark:active:bg-accent1-20 active:text-accent1-20 dark:active:text-accent1-80 focus:border-accent1-70 dark:focus:border-accent1-0 p-[1rem] cta-s rounded-500 group-hover/CardActivity:translate-x-4 transition-all duration-200 ease-in-out">
            <span className="material-m">arrow_forward</span>
          </button>
        </footer>
      </a>
    </div>
  );
};

export default Card;

