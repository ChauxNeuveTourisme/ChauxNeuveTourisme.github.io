import React from 'react';

const iconMap = {
  WIFI: 'wifi',
  'Service en chambre': 'room_service',
  'Coffres clients': 'lock',
  'Plateaux repas': 'restaurant',
  'Télécopie': 'print',
  'Informations touristiques': 'info',
  'Consigne bagage': 'work',
  'Paniers pique-nique': 'lunch_dining',
  'Réservations de prestations annexes': 'event',
};

const EquipmentsServices = ({ mainTitle = 'Équipements & Services', categories = [] }) => {
  if (!categories.length) return null;

  return (
    <section className="max-w-screen-3xl mx-auto relative bg-white px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
      {/* Header */}
      <header className="border-b border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {mainTitle}
          </h2>
      </header> 

      {categories.map((category, idx) => (
        <div key={idx} className="mb-6">
          <span className="font-semibold text-lg text-gray-800">
            {category.title} <span className="text-gray-500">:</span>
          </span>

          <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-4 text-gray-700">
            {category.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="material-icons text-blue-600 text-lg">
                  {iconMap[item] || 'check_circle'}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default EquipmentsServices;
