import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import ParcoursDetails from '../../../../component/ParcoursDetails'

function TremplinChatelblanc() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/Trail/TremplinChatelblanc/ImgTrace231651_3962.jpg"
                imageSrc2="/images/EnEte/Trail/TremplinChatelblanc/PhoTrace231651_2.jpg"
                imageSrc3="/images/EnEte/Trail/TremplinChatelblanc/PhoTrace231651_4.jpg"
                imageAlt="Châtelblanc"
                caption="Châtelblanc"
                title="Tremplin - Châtelblanc"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Châtelblanc",
                    details: '25240 Châtelblanc',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Au départ du parking du pied du tremplin, cette petite boucle vous embarque jusqu’au point de vue de la Roche. Ce petit mont est perché au-dessus de Châtelblanc, dernier village au sud-est de Mouthe avant d’entrer dans le département du Jura."
                paragraphs={[
                  "Après cette première portion en terrain ouvert vous vous dirigez vers les tremplins de Chaux-Neuve par un agréable chemin vallonné principalement en forêt. L’occasion d’admirer la qualité des infrastructures sportives de la station qui accueille des compétitions toute l’année, et de profiter d'une belle vue lors de la descente vers le village.",
                  "Une boucle qui conviendra parfaitement pour découvrir la pratique, ou pour un footing dans un cadre atypique et varié, allant des collines ouvertes aux forêts de montagne, en passant par les tremplins.",


                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Châtelblanc (25)"
                distance="8.2 km"
                positif="280 m"
                negatif="280 m"
                altitudeMin="982 m"
                altitudeMax="1150 m"
                duree="1h à 2h"
                balisage="suivre balisage rando n°11"
                gpxLink="/images/EnEte/Trail/TremplinChatelblanc/o-bymontagnesdujura_231651.gpx"
            />

            <LocationSection 
                    lat={46.67163158583172} 
                    lng={6.135574907140772}
                    title="Tremplin - Châtelblanc"
                    address="25240 Châtelblanc"
            />
            
        </div>
    )
}

export default TremplinChatelblanc