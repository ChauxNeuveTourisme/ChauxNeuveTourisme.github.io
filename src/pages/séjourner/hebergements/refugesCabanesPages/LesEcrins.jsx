import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { chezLiadet } from '../../../../data/gitesImg';
import { lesEceins } from '../../../../data/refugesCabanesImg';



const LesEcrins = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/RefugesCabanes/LesEcrinsDuVal/5003a10ee8587ac80da442e7973c60b5-terrasse-bois-du-four--1600x0.jpg"
                imageSrc2="/images/hebergements/RefugesCabanes/LesEcrinsDuVal/5003a10ee8587ac80da442e7973c60b5-terrasse-bois-du-four--1600x900.jpg"
                imageSrc3="/images/hebergements/RefugesCabanes/LesEcrinsDuVal/b1ab981ae9a8bbb60f3e56b17ede124b-allee-4--2--1600x0.jpg"
                imageAlt="Petite-Chaux"
                caption="Petite-Chaux"
                title="Les Écrins du Val de Mouthe"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/refugesCabanes"
                val = {false}
                address={{
                    label: "Petite-Chaux",
                    details: '9 Rte de Champvent, 25240 Petite-Chaux',
                }}
                phone="06 37 34 73 50"
                email=""
                website="https://nuit-insolite-jura.com/"
            />
            <Description
                introText="Les Écrins du Val de Mouthe vous proposent de vivre seul ou à deux une nuit insolite dans le Jura dans l'une de ses chaleureuses cabanes dotées d'un spa et d'un sauna privatifs."
                paragraphs={[
                    "Situées dans le Haut Doubs, en plein cœur des montagnes du Jura et de son Parc naturel régional, bordées par un ruisseau, nos cabanes insolites vous permettront de découvrir les merveilles du Doubs, du Jura et de la Suisse voisine ou de simplement profiter d'une parenthèse de détente et de relaxation.",


                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={lesEceins} maxItems={5} />

            <LocationSection 
                    lat={46.69490808857566} 
                    lng={6.175679468760504}
                    title="Les Écrins du Val de Mouthe"
                    address="9 Rte de Champvent, 25240 Petite-Chaux"
            />
        </div>
    )
}

export default LesEcrins