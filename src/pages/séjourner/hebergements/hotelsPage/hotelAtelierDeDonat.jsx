import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { AtelierDeDonat} from '../../../../data/hotelsImg';



const HotelAtelierDeDonat = ({ ht }) => {
    const hotelEquipments = equipmentData.find((h) => h.id === 'ht');

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/hotel/HôtelLeAtelierDeDonat/16.jpg"
                imageSrc2="/images/hebergements/hotel/HôtelLeAtelierDeDonat/53140531.jpg"
                imageSrc3="/images/hebergements/hotel/HôtelLeAtelierDeDonat/52914132.jpg"
                imageAlt="Malbuisson"
                caption="Malbuisson"
                title="Hôtel l'Atelier de Donat"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Malbuisson",
                    details: '4 Chem. des Landes, 25160 Malbuisson',
                }}
                phone="03 81 89 42 43"
                email=""
                website="https://www.logishotels.com/fr/hotel/-237809?partid=1535"
            />
            <Description
                introText=""
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
            <Gallery images={AtelierDeDonat} maxItems={5} />

            <LocationSection 
                    lat={46.80241255261803} 
                    lng={6.30515144153915}
                    title="Hôtel l'Atelier de Donat"
                    address="4 Chem. des Landes, 25160 Malbuisson"
            />
        </div>
    )
}
export default HotelAtelierDeDonat