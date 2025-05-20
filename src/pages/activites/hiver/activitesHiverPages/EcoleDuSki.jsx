import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import TarifLink from '../../../../component/TarifLink'

function EcoleDuSki() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnHiver/LesPistes/EcoleDuSkiFoncine/11.jpg"
                imageSrc2="/images/EnHiver/LesPistes/EcoleDuSkiFoncine/22.jpg"
                imageSrc3="/images/EnHiver/LesPistes/EcoleDuSkiFoncine/33.jpg"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="L’École du Ski Français de Foncine "
                dates={[]}
                allDatesLink=""
                backLink = "/hiver"
                val = {false}
                open = {false}
                address={{
                    label: "Foncine-le-Haut",
                    details: '13 Les Ruines - 39460 Foncine-le-Haut',
                }}
                phone="06 47 38 40 14"
                email="contact@esf-foncine.com"
                website="http://www.esf-foncine.com/"
            />
            <Description
                introText="L’École du Ski Français de Foncine et ses moniteurs vous accueillent de décembre à mars pour pratiquer le ski alpin ainsi que les activités nordiques : ski-raquette et raquette, ski de fond classique et skating, biathlon, saut à ski."
                paragraphs={[
                    "Accueil des enfants dès 3 ans (alpin), 5 ans (ski de fond), club Piou-Piou, individuels, groupes, familles, centres de vacances et scolaires. Leçons particulières, cours collectifs, balades et randonnées nordiques.",

                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <TarifLink url="http://www.esf-foncine.com/tarifs.html" />


            <LocationSection 
                    lat={46.65864174119257} 
                    lng={6.085099384006198}
                    title="L’École du Ski Français de Foncine "
                    address="13 Les Ruines - 39460 Foncine-le-Haut"
            />
            
        </div>
    )
}


export default EcoleDuSki