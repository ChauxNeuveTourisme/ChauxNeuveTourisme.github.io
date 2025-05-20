import React from 'react'
import { chapelleDesBois} from '../../data/hotelsImg';
import HotelDetails from '../../component/hebergements/HotelDetails/HotelDetails';
import Description from '../../component/events/Description';
import Gallery from '../../component/hebergements/HotelDetails/Gallery';
import LocationSection from '../../component/LocationSection/LocationSection';



const ChapelleDesBois= ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/chapelleDesBois/11.webp"
                imageSrc2="/images/chapelleDesBois/22.webp"
                imageSrc3="/images/chapelleDesBois/33.webp"
                imageAlt="Chapelle-des-Bois"
                caption="Chapelle-des-Bois"
                title="Chapelle des Bois"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/decouvrir"
                val = {false}
                open = {true}
                address={{
                    label: "Chapelle-des-Bois",
                    details: ' Chapelle-des-Bois 25240',
                }}
                phone=""
                email=""
                website="https://www.destination-haut-doubs.com/chapelle-des-bois.html"
            />
            <Description
                introText="Commune limitrophe du département du Jura et de la Suisse, Chapelle-des-Bois se trouve au Sud du Haut-Doubs. Détrompez-vous, car elle a beau être au sud elle est tout de même à 1100m d'altitude.
Parcourez ce village de charme et rencontrez les Chapelands."
                paragraphs={[
                    "L’origine du nom de Chapelle-des-Bois vient de la construction d’une chapelle érigée dans les bois au cours du XVIIème siècle. Cependant, à l’origine, le bourg s’appelait « Champion » comme la roche qui domine le village à l’heure actuelle. Malgré sa situation géographique excentrée, Chapelle-des-Bois se démarque et se fait connaître grâce à l’implication de ses habitants qui ont à cœur d’en faire la promotion avec fierté et bienveillance. L’économie du village est principalement basée sur 3 piliers : l’artisanat, l'agriculture et le tourisme.",
                    "Ce petit village et ses alentours offre un terrain de possibilités liées à la pratique du sport en pleine nature. En hiver, ses températures négatives et sa neige abondante en font la meque du ski nordique. Un vrai bonheur pour les passionnés des sports d’hiver. Ces facteurs climatiques ont largement participé à l’isolement de Chapelle-des-Bois. Mais ce sont précisément ces obstacles qui en font aujourd’hui sa force et sa typicité."
                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={chapelleDesBois} maxItems={5} />

            <LocationSection 
                    lat={46.60357924256626} 
                    lng={6.122766568688842}
                    title="Chapelle des Bois"
                    address="Chapelle-des-Bois 25240"
            />
        </div>
    )
}

export default ChapelleDesBois