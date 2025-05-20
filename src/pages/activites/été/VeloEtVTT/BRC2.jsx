import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import ParcoursDetails from '../../../../component/ParcoursDetails'
import GPXMap from '../../../../component/LocationSection/GpxMapViewer'

function BRC2() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/VeloEtVTT/BRC2/18972773700.webp"
                imageSrc2="/images/EnEte/VeloEtVTT/BRC2/18e952036ea.webp"
                imageSrc3="/images/EnEte/VeloEtVTT/BRC2/190975415e8.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Circuit en boucle pour VTT à partir de Chaux-Neuve"
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
                introText="VTT - Intermédiaire. Bonne condition physique nécessaire. Pour tous les niveaux."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="21,8 km"
                positif="480 m"
                negatif="480 m"
                altitudeMin="870 m"
                altitudeMax="1200 m"
                duree="2h00 à 2h30"
                gpxLink="/images/EnEte/VeloEtVTT/BRC2/VTTChaux-Neuve.gpx"
            />

            <GPXMap
                title="Circuit en boucle pour VTT à partir de Chaux-Neuve"
                gpxUrl="/images/EnEte/VeloEtVTT/BRC2/VTTChaux-Neuve.gpx"
                tileAttribution='&copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
            />
            
        </div>
    )
}

export default BRC2