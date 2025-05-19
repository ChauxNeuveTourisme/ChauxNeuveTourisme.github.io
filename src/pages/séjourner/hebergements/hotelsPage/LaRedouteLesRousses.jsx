import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import {LesRousses} from '../../../../data/hotelsImg';



const LaRedouteLesRousses = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/HotelLaRedoute/15360713.jpg"
                imageSrc2="/images/hebergements/hotel/HotelLaRedoute/174587475.jpg"
                imageSrc3="/images/hebergements/hotel/HotelLaRedoute/174587435.jpg"
                imageAlt="Les Rousses"
                caption="Les Rousses"
                title="Hôtel Restaurant La Redoute Les Rousses Jura"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Les Rousses",
                    details: '357 Rte Blanche, 39220 Les Rousses',
                }}
                phone="03 84 60 00 40"
                email="contact@hotel-les-rousses.com"
                website="http://hotel-les-rousses.com/"
            />
            <Description
                introText="Notre hôtel est situé au cœur du village des Rousses à seulement quelques kilomètres de Morez (capitale de la lunette), de la frontière Suisse et des industries de la ville du Brassus, notre hôtel est situé à 40 km de Genève et à 60km de Lausanne et de ses musées (collection de l'art brut, musée des beaux arts, fondation de l'hermitage), à 35km des cascades du Hérisson et 45 km de Baume Les Messieurs.
                    L'hôtel est situé à quelques mètres des pistes de ski et près du magnifique lac des Rousses pour vos activités de baignade."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                    "",
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={LesRousses} maxItems={5} />

            <LocationSection 
                    lat={46.48570947352962} 
                    lng={6.058766368428723}
                    title="Hôtel Restaurant La Redoute Les Rousses Jura"
                    address="357 Rte Blanche, 39220 Les Rousses"
            />
        </div>
    )
}
export default LaRedouteLesRousses