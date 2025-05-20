import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import ParcoursDetails from '../../../../component/ParcoursDetails'

function VerticaleDuTremplin() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/Trail/VerticaleduTremplin/PhoTrace231720_1.jpg"
                imageSrc2="/images/EnEte/Trail/VerticaleduTremplin/PhoTrace231720_2.jpg"
                imageSrc3="/images/chaux-neuve/17245b8bc32.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Verticale du Tremplin"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Côte Feuillée, 25240 Chaux-Neuve',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Découvrez cette belle verticale de 120m aussi difficile qu’originale qui vous permet de monter jusqu’au sommet du plus haut tremplin de Chaux-Neuve.  Vous êtes récompensé de votre effort par un superbe point de vue sur le village de Chaux-Neuve et sur les 5 tremplins du site. Cet équipement homologué par la Fédération Internationale de Ski compte parmi les plus grands au monde."
                paragraphs={[
                    "Une bonne partie de la verticale se fait sur des escaliers, l'occasion de travailler votre placement et de vous challenger sur un défi chronométré.",


                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="0.3 km"
                positif="130 m"
                negatif="0 m"
                altitudeMin="1013 m"
                altitudeMax="1135 m"
                duree="0h10 à 0h20"
                balisage="Trail n°10 orange"
                gpxLink="/images/EnEte/Trail/VerticaleduTremplin/o-bymontagnesdujura_231720.gpx"
            />

            <LocationSection 
                    lat={46.67163158583172} 
                    lng={6.135574907140772}
                    title="Verticale du Tremplin"
                    address="Côte Feuillée, 25240 Chaux-Neuve"
            />
            
        </div>
    )
}

export default VerticaleDuTremplin