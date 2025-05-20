import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function RandonneeChauxNeuveChatelblanc() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuveChatelblanc/1740628bfea.webp"
                imageSrc2="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuveChatelblanc/182019b4aaa.webp"
                imageSrc3="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuveChatelblanc/181a093f073.webp"
                imageAlt="Châtelblanc"
                caption="Châtelblanc"
                title="Tremplin de Chaux-Neuve boucle à partir de Châtelblanc"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Châtelblanc 25240",
                    details: '',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Randonnée - Facile. Tous niveaux de condition physique. Sentiers facilement accessibles. Tous niveaux.  "
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Châtelblanc (25)"
                distance="2,8 km"
                positif="110 m"
                negatif="110 m"
                altitudeMin="1010 m"
                altitudeMax="1120 m"
                duree="0h45 à 1h00"
                gpxLink="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuveChatelblanc/ChauxNeuveChatelblanc.gpx"
            />

            <GPXMap
                title="Tremplin de Chaux-Neuve boucle à partir de Châtelblanc"
                gpxUrl="/images/EnEte/BaladesEtRandonnees/RandonneeChauxNeuveChatelblanc/ChauxNeuveChatelblanc.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}

export default RandonneeChauxNeuveChatelblanc