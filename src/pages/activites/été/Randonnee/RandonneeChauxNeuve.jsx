import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function RandonneeChauxNeuve() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuve/17b3f091325.webp"
                imageSrc2="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuve/17b933a0fef.webp"
                imageSrc3="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuve/190e46cd77b.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Chaux-Neuve boucle à partir de Chaux-Neuve"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Chaux-Neuve 25240',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Randonnée - Facile. Tous niveaux de condition physique. Sentiers facilement accessibles. Tous niveaux."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="7,1 km"
                positif="110 m"
                negatif="110 m"
                altitudeMin="990 m"
                altitudeMax="1080 m"
                duree="2h00 à 2h30"
                gpxLink="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuve/ChauxNeuve.gpx"
            />

            <GPXMap
                title="Chaux-Neuve boucle à partir de Chaux-Neuve"
                gpxUrl="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuve/ChauxNeuve.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}
export default RandonneeChauxNeuve