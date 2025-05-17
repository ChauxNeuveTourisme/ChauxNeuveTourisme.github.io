// components/Gallery.jsx
import React from 'react';
import LightGallery from 'lightgallery/react';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';

const Gallery = ({ images = [] }) => {
  if (images.length === 0) return null;

  return (
    <section className="max-w-screen-3xl mx-auto relative bg-white px-4 sm:px-8 lg:px-[104px]  py-16 lg:py-[30px]">
      {/* Header */}
      <header className="border-b border-gray-700 mb-12 flex flex-wrap items-center justify-between gap-4 pb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Gallery
          </h2>
      </header> 
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-1 gap-y-4 lg:gap-x-4 lg:grid-cols-3 lightgallery-vue"
      >
        {images.slice(0, 3).map((img, index) => (
          <a
            key={index}
            href={img.full}
            className={`relative ${index === 0 ? 'col-span-2' : ''}`}
          >
            <img
              src={img.thumb}
              alt={img.alt || `Gallery image ${index + 1}`}
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
