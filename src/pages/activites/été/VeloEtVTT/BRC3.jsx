import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function BRC3() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/VeloEtVTT/BRC3/17b4e333cc0.webp"
                imageSrc2="/images/EnEte/VeloEtVTT/BRC3/17bf3083ee6.webp"
                imageSrc3="/images/EnEte/VeloEtVTT/BRC3/182d0959495.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Boucle Source du Doubs – La tourbière de Mouthe au départ de Chaux-Neuve"
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
                introText="VTT - Intermédiaire. Bonne condition physique nécessaire. Excellente maîtrise nécessaire. Point de départ du Tour est à proximité d'un parking."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="39,4 km"
                positif="730 m"
                negatif="730 m"
                altitudeMin="940 m"
                altitudeMax="1380 m"
                duree="3h30 à 4h00"
                gpxLink="/images/EnEte/VeloEtVTT/BRC3/BoucleSourceDoubs-Chaux-Neuve.gpx"
            />

            <GPXMap
                title="Boucle Source du Doubs – La tourbière de Mouthe au départ de Chaux-Neuve"
                gpxUrl="/images/EnEte/VeloEtVTT/BRC3/BoucleSourceDoubs-Chaux-Neuve.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}

export default BRC3
