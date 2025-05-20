import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function BRC1() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/VeloEtVTT/BRC1/188489cf876.webp"
                imageSrc2="/images/EnEte/VeloEtVTT/BRC1/18864b6255a.webp"
                imageSrc3="/images/EnEte/VeloEtVTT/BRC1/191c848ac93.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Boucle Roche Champion – Vue sur les lacs au départ de Chaux-Neuve"
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
                introText="VTT - Intermédiaire. Bonne condition physique nécessaire. Excellente maîtrise nécessaire."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="40,2 km"
                positif="730 m"
                negatif="730 m"
                altitudeMin="1000 m"
                altitudeMax="1340 m"
                duree="3h30 à 4h00"
                gpxLink="/images/EnEte/VeloEtVTT/BRC1/Boucle_Roche_Champion1.gpx"
            />

            <GPXMap
                title="Boucle Roche Champion – Vue sur les lacs"
                gpxUrl="/images/EnEte/VeloEtVTT/BRC1/Boucle_Roche_Champion1.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}

export default BRC1