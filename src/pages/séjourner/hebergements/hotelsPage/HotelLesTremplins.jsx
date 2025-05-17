import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';


const images = [
    {
      full: '/images/hebergements/hotel/HotelLesTremplins/caption.jpg',
      thumb: '/images/hebergements/hotel/HotelLesTremplins/caption.jpg',
      alt: 'Image 1',
    },
    {
      full: '/images/hebergements/hotel/HotelLesTremplins/double-room1.jpg',
      thumb: '/images/hebergements/hotel/HotelLesTremplins/double-room1.jpg',
      alt: 'Image 2',
    },
    {
      full: '/images/hebergements/hotel/HotelLesTremplins/bathroom.jpg',
      thumb: '/images/hebergements/hotel/HotelLesTremplins/bathroom.jpg',
      alt: 'Image 3',
    },
    {
        full: 'https://example.com/full3.jpg',
        thumb: 'https://example.com/thumb3.jpg',
        alt: 'Image 3',
    },
];

const HotelLesTremplins = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/FestivalDeLaPaille/festival-de-la-paille--1200x766.jpg"
                imageSrc2="/images/FestivalDeLaPaille/festival-de-la-paille--1200x766.jpg"
                imageSrc3="/images/FestivalDeLaPaille/festival-de-la-paille--1200x766.jpg"
                imageAlt="Métabief"
                caption="Métabief"
                title="Festival de la Paille"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Métabief",
                    details: ' Place Xavier Authier, 25370 Métabief.',
                }}
                phone="07 67 96 19 48"
                email="communication@festivalpaille.fr"
                website="https://www.festivalpaille.fr/"
            />
            <Description
                introText="Le Festival de la Paille revient pour sa 23ᵉ édition du 1ᵉʳ au 3 août 2025 à Métabief, au cœur du massif du Jura. Ce rendez-vous incontournable des musiques actuelles en Franche-Comté propose une programmation éclectique mêlant têtes d'affiche et talents émergents, dans un cadre naturel exceptionnel.​"
                paragraphs={[
                    "Le Festival de la Paille 2025 promet une expérience musicale unique dans un cadre naturel exceptionnel. Réservez vos billets dès maintenant pour ne pas manquer cet événement phare de l'été en Franche-Comté.​",
                    "Lieu et cadre: ",
                    "Le festival se déroule au pied des pistes de Métabief, sur la Place Xavier Authier, offrant un panorama exceptionnel sur le Mont d'Or. Deux scènes accueillent les concerts, et un espace camping est disponible pour les festivaliers.",
                    "Retour sur l'édition 2024: ",
                    "L'édition précédente s'est tenue du 26 au 28 juillet 2024 et a rassemblé près de 12 000 festivaliers. La programmation comprenait des artistes tels que MC Solaar, Matmatah, Naâman, Asian Dub Foundation, Pierre de Maere, KO KO MO, Yuston XIII, et Manudigital. Le festival a été salué pour son ambiance conviviale et sa diversité musicale."
                ]}
                listTitle="Dates et programmation"
                listItems={[
                    "Vendredi 1ᵉʳ août: ",
                    "Hatik, Les Ogres de Barback & La Rue Kétanou, Hilight Tribe, Jewly, Ojos, Bonne Nuit​",
                    "Samedi 2 août :",
                    "Deluxe, Julien Granel, Saïan Supa Celebration, 2097, Bandit Bandit, Valérie Ekoumé​I",
                    "Dimanche 3 août : ",
                    "Polo & Pan, Adé, Solann, Jahneration, Bleu Berline"
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={images} showViewAll />

            <LocationSection 
                    lat={46.71014354368934} 
                    lng={6.192010210783954}
                    title="Boulangerie L'Épicurien"
                    address="12 Grande Rue, 25240 Mouthe"
            />
        </div>
    )
}

export default HotelLesTremplins