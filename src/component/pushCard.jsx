import React from 'react';
import Card from './Card'; // Import the Card component

// `cardsData` is passed to `CardGrid` dynamically
const CardGrid = ({ cardsData }) => {
  return (
    <div className="grid gap-[1.5rem] md:grid-cols-2 lg:md:grid-cols-3 px-6   bg-white  lg:px-[104px]  py-[15px]  pt-0 lg:py-[30px]">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
        />
      ))}
    </div>
  );
};

export default CardGrid;
