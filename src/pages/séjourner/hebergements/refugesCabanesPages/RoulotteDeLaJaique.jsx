import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { roulotte } from '../../../../data/refugesCabanesImg';



const RoulotteDeLaJaique = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/RefugesCabanes/RefugeEnRoulotte/11.avif"
                imageSrc2="/images/hebergements/RefugesCabanes/RefugeEnRoulotte/22.avif"
                imageSrc3="/images/hebergements/RefugesCabanes/RefugeEnRoulotte/33.avif"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="La roulotte de la Jaique"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/refugesCabanes"
                val = {false}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Grande Landoz, 25240 Chaux-Neuve',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Nous serons heureux de vous accueillir au sommet du Risoux, perché à 1377 mètres d’altitude, sur le côté français et à seulement 50 mètres de la frontière suisse."
                paragraphs={[
                    "Le couchage La roulotte de la Jaique vous accueille pendant la période hivernale, de mi décembre à fin mars. ",


                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={roulotte} maxItems={5} />

            <LocationSection 
                    lat={46.62447353255076} 
                    lng={6.181204912699391}
                    title="La roulotte de la Jaique"
                    address="Grande Landoz, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default RoulotteDeLaJaique