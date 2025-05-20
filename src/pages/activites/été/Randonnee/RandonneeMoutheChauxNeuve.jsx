import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function RandonneeMoutheChauxNeuve() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/BaladesEtRandonnees/RandonneeMoutheChaux-Neuve/17bf3083ee6.webp"
                imageSrc2="/images/EnEte/BaladesEtRandonnees/RandonneeMoutheChaux-Neuve/173e7f0b19c.webp"
                imageSrc3="/images/EnEte/BaladesEtRandonnees/RandonneeMoutheChaux-Neuve/196b5c46754.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Boucle Mouthe – Chaux-Neuve au départ de Chaux-Neuve"
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
                introText="Randonnée - Intermédiaire. Bonne condition physique nécessaire. Sentiers facilement accessibles. Tous niveaux"
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="15,4 km"
                positif="180 m"
                negatif="180 m"
                altitudeMin="930 m"
                altitudeMax="1030 m"
                duree="4h00 à 5h00"
                gpxLink="/images/EnEte/BaladesEtRandonnees/RandonneeMoutheChaux-Neuve/MoutheChaux-Neuve.gpx"
            />

            <GPXMap
                title="Boucle Mouthe – Chaux-Neuve au départ de Chaux-Neuve"
                gpxUrl="/images/EnEte/BaladesEtRandonnees/RandonneeMoutheChaux-Neuve/MoutheChaux-Neuve.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}

export default RandonneeMoutheChauxNeuve