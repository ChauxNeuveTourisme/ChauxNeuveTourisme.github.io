import React from "react";


const places = [
    {
        name: "Restaurant La Table Du Cébriot",
        link: "#",
        img: "/images/restauration/TableDuCébriot/caption-1.jpg",
        description: "",
    },
    {
        name: "Auberge du Grand Git",
        link: "#",
        img: "/images/restauration/AubergeDuGrandGit/auberge-du-grand-git-3.jpg",
        description: "",
    },
    {
        name: "Les Clochettes du Risoux",
        link: "#",
        img: "/images/restauration/LesClochettesDuRisoux/caption-11.jpg",
        description: "",
    },
    {
        name: "Les Paturages",
        link: "#",
        img: "/images/restauration/LesPaturages/photo4jpg.jpg",
        description: "",
    },
    {
        name: "CHEZ LIADET",
        link: "#",
        img: "../../../public/images/restauration/CHEZLIADET/Capture d’écran 2025-04-25 à 22.38.46.png",
        description: "",
    },
    {
        name: "Le Chalet de la Source",
        link: "#",
        img: "/images/restauration/ChaletDeLaSource/20180325_113329.webp",
        description: "",
    },
];

const WhereToGo = () => {
    return (
        <section className=" bg-white lg:px-[104px]  py-16 lg:py-[60px]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6">Où s’adresser ?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((place, index) => (
              <div key={index} className="flex flex-col">
                <a href={place.link}>
                  <div className="relative overflow-hidden rounded-xl mb-5 bg-[rgb(243,244,246)]">
                    <img
                      src={place.img}
                      alt=""
                      loading="lazy"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </a>
  
                <footer className="flex items-center justify-between py-4">
                  <div className="line-clamp-1">
                    <h3 className="text-lg font-semibold text-black mb-0">
                      {place.name}
                    </h3>
                  </div>
                  <button className="inline-flex items-center justify-center disabled:pointer-events-none rounded-full mb-0 disabled:cursor-not-allowed outline-none hover:cursor-pointer bg-transparent border border-gray-300 text-gray-600 hover:bg-gray-200 hover:text-black p-2 transition-all duration-200 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        d="M8.5 17a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M12.707 8.5 12 7.793l-3.5-3.5L7.793 5l3 3H4v1h6.793l-3 3 .707.707 3.5-3.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </footer>
  
                {place.description && (
                  <p className="text-sm text-gray-700">{place.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhereToGo;