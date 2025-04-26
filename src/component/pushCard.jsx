// `cardsData` is passed to `CardGrid` dynamically
// CardGrid.js
import React from 'react';
import Card from './Card';

const CardGrid = ({ cardsData, sectionTitle = "Explorer également" }) => {
  return (
    <section className="bg-white  px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
      <h2 className="text-2xl font-semibold mb-6">{sectionTitle}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  );
};

export default CardGrid;
