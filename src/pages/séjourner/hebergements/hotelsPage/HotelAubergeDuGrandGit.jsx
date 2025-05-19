import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { AubergeDuGrandGit} from '../../../../data/hotelsImg';



const HotelAubergeDuGrandGit = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/AubergeDuGrandGit/d4531ed814954b61c34c197fe5085218-P1050950-3-1600x0.jpg"
                imageSrc2="/images/hebergements/hotel/AubergeDuGrandGit/351724590.jpg"
                imageSrc3="/images/hebergements/hotel/AubergeDuGrandGit/640x480_P1050313.jpeg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Hôtel Auberge du Grand Gît"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Chaux-Neuve",
                    details: '8 Rue des Chaumelles, 25240 Chaux-Neuve',
                }}
                phone="03 81 69 25 75"
                email="aubergedugrandgit@gmail.com"
                website="http://www.aubergedugrandgit.com/"
            />
            <Description
                introText="Hôtel 9 chambres dont une chambre pouvant accueillir les personnes à mobilité réduite."
                paragraphs={[
                    "Au  calme, à l'écart des routes mais au cœur du village typique du Haut-Doubs, habillée de bois pour s'intégrer à la douceur du paysage, l'auberge du grand gît avec ses chambres modernes et confortables saura vous séduire. Venez savourer une cuisine régionale (Jambon à l'arboisienne, truite au vin jaune, fondue...). L'adresse idéale pour les amateurs de sports et de nature. Sentiers de randonnée, centre équestre, cyclotourisme et vtt, ski de fond, raquettes",
                ]}
                listTitle="Types de chambre"
                listItems={[
                    "Chambres familiale",
                    "Chambres Classiques",
                    "chambres Randonneur",
                ]}
            />
            {hotelEquipments && (
                <EquipmentsServices
                    mainTitle={hotelEquipments.mainTitle}
                    categories={hotelEquipments.categories}
                />
            )}
            <Gallery images={AubergeDuGrandGit} maxItems={5} />

            <LocationSection 
                    lat={46.68117372578093} 
                    lng={6.13665358410386}
                    title="Hôtel Auberge du Grand Gît"
                    address="8 Rue des Chaumelles, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default HotelAubergeDuGrandGit