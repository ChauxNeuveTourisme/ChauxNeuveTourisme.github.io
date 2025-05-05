

import React from 'react';
import ContactInfo from './ContactInfo';

const Card = ({ image, icon, name, contact, iconColor = 'text-blue-600' }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md w-full flex flex-col">
    <img src={image} alt={name} className="w-full h-64 object-cover" />

    <div className="flex flex-col h-full">
  {/* Header Section: Icon + Name */}
  <div className="p-4 flex-1">
    <h2 className="text-xl font-bold flex items-center gap-2 break-words">
      {icon === 'pharmacy' ? (
        <span className="text-green-600 text-xl font-bold">✚</span>
      ) : (
        <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>
      )}
      <span className="flex-1">{name}</span>
    </h2>
  </div>

  {/* Footer Section: Contact Info */}
  <div className="border-t px-4 py-3 bg-gray-50 mb-auto">
    <ContactInfo {...contact} />
  </div>
</div>
  </div>
);

const SSante = ({
  image1,
  icon1,
  name1,
  contact1,
  image2,
  icon2,
  name2,
  contact2,
  image3,
  icon3,
  name3,
  contact3,
}) => {
  return (
    <section className="bg-white sm:py-16 lg:px-[104px] py-16 lg:py-24">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
        <Card image={image1} icon={icon1} name={name1} contact={contact1} />
        {name2 && contact2 && (
          <Card image={image2} icon={icon2} name={name2} contact={contact2} />
        )}
        {name3 && contact3 && (
          <Card image={image3} icon={icon3} name={name3} contact={contact3} />
        )}
      </div>
    </section>
  );
};

export default SSante;

