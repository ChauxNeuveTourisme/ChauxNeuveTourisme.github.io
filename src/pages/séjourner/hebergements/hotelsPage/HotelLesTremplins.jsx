import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { LesTremplins } from '../../../../data/hotelsImg';



const HotelLesTremplins = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/HotelLesTremplins/restaurant.jpg"
                imageSrc2="/images/hebergements/hotel/HotelLesTremplins/resto-super-et-chambre.jpg"
                imageSrc3="/images/hebergements/hotel/HotelLesTremplins/les-tremplins.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Hôtel Les Tremplins"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Chaux-Neuve",
                    details: ' 2 Grande Rue, 25240 Chaux-Neuve.',
                }}
                phone="03 81 89 30 58"
                email="hotel.lestremplins25240@gmail.com"
                website="https://www.hotellestremplins.fr/"
            />
            <Description
                introText="L'hôtel Les Tremplins de Chaux Neuve détient 10 chambres pour accueillir ses hôtes dans un cadre féerique. Chaux-Neuve, perle du Doubs, une ville où la beauté rencontre l'authenticité dans cette charmante commune. L'hôtel offre une parenthèse nature et terroir pour profiter pleinement de votre séjour. "
                paragraphs={[
                    "",
                ]}
                listTitle="Plusieurs équipements ont également été aménagés pour que vous profitiez intensément de votre escapade dans le Doubs :"
                listItems={[
                    "Sauna (Payant: à demander à la réception pour la remise des peignoirs et chaussons)",
                    "Salle de sport (Libre accès offert)",
                    "4 chambres PMR ou Handicapé (1 Luxe et 3 familiales)",
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={LesTremplins} maxItems={4} />

            <LocationSection 
                    lat={46.67944267380708} 
                    lng={6.132790798489328}
                    title="Hôtel Les Tremplins"
                    address="2 Grande Rue, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default HotelLesTremplins