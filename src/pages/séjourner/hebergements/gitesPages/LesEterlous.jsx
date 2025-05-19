import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { lesEterlous } from '../../../../data/gitesImg';



const LesEterlous = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/LesEterlous/79e4c25d.jpg"
                imageSrc2="/images/hebergements/Gites/LesEterlous/1955cedd.jpg"
                imageSrc3="/images/hebergements/Gites/LesEterlous/10441347.jpg"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="Chalets Le Rocheret:Les Éterlous et Les Éterles "
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Foncine-le-Haut",
                    details: '27 Rocheret, 39460 Foncine-le-Haut',
                }}
                phone="06 77 77 05 14"
                email="francois.cat4@wanadoo.fr"
                website="http://www.gitejurafoncine.fr/"
            />
            <Description
                introText="Nos 2 chalets sont situés à Foncine le Haut (870 m - 1200 m).  Ils permettent d'accueillir chacun jusqu'à 10 personnes. un sauna est à votre disposition dans chaque chalet. "
                paragraphs={[
                    "Ils se situent dans le hameau du Rocheret (1000 m d'altitude), à 1km du centre du village, au cœur des montagnes du jura  à quelques kilomètres de la Suisse.",

                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={lesEterlous} maxItems={5} />

            <LocationSection 
                    lat={46.666701508550574} 
                    lng={6.083122041775153}
                    title="Chalets Le Rocheret:Les Éterlous et Les Éterles "
                    address="27 Rocheret, 39460 Foncine-le-Haut"
            />
        </div>
    )
}

export default LesEterlous