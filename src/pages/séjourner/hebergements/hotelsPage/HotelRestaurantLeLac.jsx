import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { LeLac} from '../../../../data/hotelsImg';



const HotelRestaurantLeLac = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/HotelRestaurantLeLac/57731888.jpg"
                imageSrc2="/images/hebergements/hotel/HotelRestaurantLeLac/60629011.jpg"
                imageSrc3="/images/hebergements/hotel/HotelRestaurantLeLac/482232409.jpg"
                imageAlt="Malbuisson"
                caption="Malbuisson"
                title="Hôtel-Restaurant Le Lac"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Malbuisson",
                    details: '65 Grande Rue, 25160 Malbuisson',
                }}
                phone="03 81 69 34 80"
                email="contact@complexe-le-lac.fr"
                website="https://www.complexe-le-lac.fr/hotel-le-lac"
            />
            <Description
                introText="Dans un cadre enchanteur en plein cœur du Haut-Doubs, l’hôtel Le Lac*** vous accueille sur les rives du Lac Saint-Point le temps d’une nuit, d’un week-end ou pour vos vacances. Prenez le temps de vous ressourcer dans une ambiance où le temps semble s’être arrêté. Baignades dans la piscine extérieure, farniente dans le jardin surplombant le lac, randonnées, activités nautiques, visites de musées ou encore découverte du patrimoine culinaire régional rythmeront vos journées."
                paragraphs={[
                    "A savoir avant votre séjour: ",
                    "Les clefs de votre chambre sont à retirer à la réception de l'Hôtel Le Lac.",
                    "Les clefs de votre chambre sont à retirer à la réception de l'Hôtel Le Lac.",
                    "Ascenseur (jusqu’au 2 ème étage).",
                    "Accessibilité PMR.",
                    "Moyens de paiement : Eurocard, Mastercard, Visa, Espèces.",
                    "Supplément chien 15€ par jour et par animal (autre animal non accepté).",
                    "La demi-pension (à partir de 3 nuits) est servie au Restaurant Le Lac avec possibilité selon disponibilité d’un dîner dans l’un de nos autres restaurants durant le séjour (hors demi-pension).",
                    "La capacité d'accueil de nos restaurants est limitée, nous vous conseillons d'anticiper la réservation d'une table.",



                ]}
                listTitle="Types de chambre"
                listItems={[
                    "Chambre Double - Standard côté forêt / route",
                    "Chambre Twin (avec ou sans balcon) - Standard côté forêt / route",
                    "Chambre Double (avec ou sans balcon) - Standard côté lac",
                    "Chambre Twin - Standard Côté lac",
                    "Suite avec baignoire balnéo",
                    "Chambre Twin (avec balcon) - Supérieure côté lac",
                    "Chambre Duplex (avec balcon) - Côté lac",
                    "Chambre Familiale",
                    "Plusieurs chambres pour Personne à Mobilité Réduite (PMR) sont disponibles.",
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={LeLac} maxItems={5} />

            <LocationSection 
                    lat={46.79975714884202} 
                    lng={6.304873197601157}
                    title="Hôtel-Restaurant Le Lac"
                    address="65 Grande Rue, 25160 Malbuisson"
            />
        </div>
    )
}
export default HotelRestaurantLeLac