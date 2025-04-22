import React from 'react';

const AnchorNav = () => {
  const sections = [
    { id: 'Description', label: 'Description' },
    { id: 'Agenda', label: 'Calendrier' },
    { id: 'Informations', label: 'Informations pratiques' },
    { id: 'Tarifs', label: 'Tarifs' },
    /* { id: 'Carte', label: 'Carte' }, */
  ];

  return (
    <section className="sticky top-[80px] z-30 bg-white shadow-sm">
      <div className="max-w-screen-3xl mx-auto overflow-x-auto px-4 xl:px-20">
        <ul className="flex items-center gap-6 py-4 whitespace-nowrap border-b border-gray-200 ">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="px-4 py-2 rounded-md font-medium text-gray-800  hover:text-blue-600  hover:bg-blue-50  transition-all"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AnchorNav;
