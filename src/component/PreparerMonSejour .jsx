
const callouts = [
    {
      name: 'Appartements',
      description: 'Appartements à Chaux neuve',
      imageSrc: '/images/ims.jpeg',
      imageAlt: 'Photo des appartements',
      href: '#',
    },
    {
      name: 'Hôtels',
      description: 'Hôtels à Chaux neuve',
      imageSrc: '/images/ims.jpeg',
      imageAlt: 'Photo des hôtels',
      href: '#',
    },
    {
      name: 'Commerces',
      description: 'Commerces et services à Chaux neuve',
      imageSrc: '/images/ims.jpeg',
      imageAlt: 'Photo des commerces',
      href: '#',
    },
  ]
  
function PreparerMonSejour() {
    return (
      <div className="bg-white  sm:py-16 lg:px-[104px]  py-16 lg:py-[128px]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Préparer mon séjour à Chaux-Neuve</h2>
  
          <div className="flex gap-6 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 no-scrollbar">
                    {callouts.map((item) => (
              <div key={item.name} className="flex-shrink-0 w-[80%] sm:w-auto group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-xl bg-gray-100 h-[70%]">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                    
                {/* Your custom Explorer button */}
                        <button
                    href={item.href}
                    target="_self"
                    rel=""
                    className="arrowLink flex items-center ArrowLink_arrowLink__qTYF8 mt-4 text-red-600"
                  >
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
            ))}
          </div>

        </div>
      </div>
    )
  }
  
  export default PreparerMonSejour
  
  