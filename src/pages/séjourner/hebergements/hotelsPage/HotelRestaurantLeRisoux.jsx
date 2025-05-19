import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { LeRisoux} from '../../../../data/hotelsImg';



const HotelRestaurantLeRisoux = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/HotelClubLeRisoux/53310971.jpg"
                imageSrc2="/images/hebergements/hotel/HotelClubLeRisoux/55628625.jpg"
                imageSrc3="/images/hebergements/hotel/HotelClubLeRisoux/55628624.jpg"
                imageAlt="Bois-d'Amont"
                caption="Bois-d'Amont"
                title="Hôtel Club-Restaurant Le Risoux"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Bois-d'Amont",
                    details: "675 Rue du Crétet, 39220 Bois-d'Amont",
                }}
                phone="03 84 60 94 24"
                email="contact@hotelclublerisoux.com"
                website="http://www.hotelclublerisoux.com/"
            />
            <Description
                introText="Idéalement situé à Bois d’Amont, au cœur du Jura et à quelques minutes des pistes de ski, l’Hôtel club Le Risoux vous accueille dans un cadre paisible et propice aux activités de la nature, hiver comme été : ski nordique, ski alpin, randonnées, activités nautiques.
                    A 1170 mètre d’altitude et à 400 mètres de la frontière Suisse, l’Hôtel offre un point de vue incomparable sur le massif du Risoux et le Val d’Orbe, tout en étant à deux pas du Lac des Rousses."
                paragraphs={[
                    "Groupes : ",
                    "Membre du réseau Hôtels Circuits France, l’Hôtel Club Le Risoux vous propose une formule complète pour vos séjours et circuits en groupe. L’occasion de se retrouver en famille ou entre amis et de partager de merveilleux moments de détente loin des soucis quotidiens, que ce soit pour vos voyages d’affaires (formations, séminaires), tourisme de groupe, tour opérateur, agence de voyage, comité d’entreprise…",
                ]}
                listTitle="Types de chambre :"
                listItems={[
                    "24 chambres familles (capacité 4 personnes).",
                    "3 chambres sont spécialement aménagées et équipées pour l’accès des personnes à mobilité réduite.",
                    "28 Chambre Confort (capacité 2 personnes).",
                    "Fer et planche à repasser mis à disposition sur demande. Lit bébé offert (-3 ans)",
                    
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={LeRisoux} maxItems={5} />

            <LocationSection 
                    lat={46.5481529924128} 
                    lng={6.145349211082135}
                    title="Hôtel Club-Restaurant Le Risoux"
                    address="675 Rue du Crétet, 39220 Bois-d'Amont"
            />
        </div>
    )
}

export default HotelRestaurantLeRisoux