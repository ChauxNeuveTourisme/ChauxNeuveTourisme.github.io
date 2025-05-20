import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import ParcoursDetails from '../../../../component/ParcoursDetails'

function ParcourPrePoncet() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/Trail/PrePoncet/PhoTrace231717_3.jpg"
                imageSrc2="/images/EnEte/Trail/PrePoncet/PhoTrace231717_1.jpg"
                imageSrc3="/images/EnEte/Trail/PrePoncet/ImgTrace231717_2179.jpg"
                imageAlt="Châtelblanc"
                caption="Châtelblanc"
                title="Le Pré-Poncet"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Châtelblanc",
                    details: '1 Pré Poncet, 25240 Châtelblanc',
                }}
                phone=""
                email=""
                website=""
            />
            <Description
                introText="Cette superbe boucle d’une quinzaine de kilomètres principalement en forêt ne vous laisse pas le temps de vous échauffer puisque vous prenez directement la direction des tremplins de Chaux-Neuve.
                  Homologué par la fédération internationale de ski le plus haut des 5 vous propose une montée sèche de 120m qui vous permet d’apprécier le panorama qui s’élargit dans votre dos. Les kilomètres suivants sont forestiers, l’idéal pour travailler vos relances dans une alternance de courtes montées et descentes."
                paragraphs={[
                    "Le mythique site de ski de fond du Poncet apparait, vous êtes sur les traces de la Grande Traversée du Jura. S’en suit un passage par le parc animalier avant de reprendre quelques sentiers forestiers pour redescendre vers Chaux-Neuve. Un parcours parfait pour travailler vos relances tout en profitant d’une boucle intimiste en forêt.",


                ]}
                listTitle=""
                listItems={[
                ]}
            />
            <ParcoursDetails
                location="Chaux-Neuve (25)"
                distance="15 km"
                positif="460 m"
                negatif="460 m"
                altitudeMin="1008 m"
                altitudeMax="1204 m"
                duree="1h40 à 3h20"
                balisage="Trail n°8 bleu"
                gpxLink="/images/EnEte/Trail/PrePoncet/o-bymontagnesdujura_231717.gpx"
            />

            <LocationSection 
                    lat={46.67163158583172} 
                    lng={6.135574907140772}
                    title="Le Pré-Poncet"
                    address="1 Pré Poncet, 25240 Châtelblanc"
            />
            
        </div>
    )
}

export default ParcourPrePoncet