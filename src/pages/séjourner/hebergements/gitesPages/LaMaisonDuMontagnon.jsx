import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import EquipmentsServices from '../../../../component/hebergements/HotelDetails/EquipmentsServices';
import equipmentData from '../../../../data/equipmentData';
import { laMaisonDuMontagnon } from '../../../../data/gitesImg';



const LaMaisonDuMontagnon = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/LaMaisonDuMontagnon/489717306_3905497039688346_3904943936251511477_n.jpg"
                imageSrc2="/images/hebergements/Gites/LaMaisonDuMontagnon/489691415_3905497036355013_1519873835151381330_n.jpg"
                imageSrc3="/images/hebergements/Gites/LaMaisonDuMontagnon/81706573_2457064287864969_3823282034659295232_n.jpg"
                imageAlt="Chapelle-des-Bois"
                caption="Chapelle-des-Bois"
                title="La Maison du Montagnon"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Chapelle-des-Bois",
                    details: '6 Chem. du Grand Tétras, 25240 Chapelle-des-Bois',
                }}
                phone="03 81 69 26 30"
                email="contact@maison-montagnon.com"
                website="http://www.maison-montagnon.com/"
            />
            <Description
                introText="Hébergement touristique à Chapelle-des-Bois"
                paragraphs={[
                    "Nous vous accueillons dans notre Auberge collective, située dans un écrin de verdure au milieu des pâturages, au centre d’un village typique du Haut-Doubs, dans les Montagnes du Jura.",
                    "Nous disposons de 19 chambres et de 5 appartements meublés, pour une capacité de 72 place",

                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={laMaisonDuMontagnon} maxItems={5} />

            <LocationSection 
                    lat={46.6014665282182} 
                    lng={6.113500026428408}
                    title="La Maison du Montagnon"
                    address="6 Chem. du Grand Tétras, 25240 Chapelle-des-Bois"
            />
        </div>
    )
}

export default LaMaisonDuMontagnon