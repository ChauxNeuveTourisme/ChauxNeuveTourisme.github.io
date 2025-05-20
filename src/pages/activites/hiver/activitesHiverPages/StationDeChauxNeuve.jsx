import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { tarifsChauxNeuve, tarifsPrePoncet } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function StationDeChauxNeuve() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnHiver/LesPistes/chauxNeuve/Chaux-Neuve-12-01-13-_05.jpg"
                imageSrc2="/images/EnHiver/LesPistes/chauxNeuve/haut-doubs-saut-a-ski-discipline-olympique-frederic-roux-14419.jpg"
                imageSrc3="/images/EnHiver/LesPistes/chauxNeuve/Photo-station-Chaux-Neuve.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Station de Chaux-Neuve"
                dates={[]}
                allDatesLink=""
                backLink = "/hiver"
                val = {false}
                open = {false}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Côte Feuillée, 25240 Chaux-Neuve',
                }}
                phone=""
                email=""
                website="https://www.espacenordiquejurassien.com/annuaire/site_nordique_du_pre_poncet~3064b653e0ec30959a5b08c15ea.html"
            />
            <Description
                introText="Station familiale, idéale pour débuter ou se perfectionner, située au pied des tremplins internationaux de saut à ski et composée d'une piste verte, une piste bleue, une piste débutant et d'une piste de luge."
                paragraphs={[
                    "Sur le domaine skiable de la sation de Chaux-Neuve, vous pouvez trouver sur place le nécessaire pour profiter d'une belle journée à la neige.",


                ]}
                listTitle="Sur place, vous trouverez : "
                listItems={[
                    "Location de matériel : raquettes, ski alpin, ski nordique...",
                    "Refuge chauffé avec buvette, restauration et salle hors sac.",
                ]}
            />
            <PricingTable
                title="Tarifs Ski – Enfants & Adultes"
                description="Adulte à partir de 17 ans | Enfants -16 ans"
                data={tarifsChauxNeuve}
            />

            <LocationSection 
                    lat={46.67165383984554} 
                    lng={6.13515065448493}
                    title="Station de Chaux-Neuve"
                    address="Côte Feuillée, 25240 Chaux-Neuve"
            />
            
        </div>
    )
}


export default StationDeChauxNeuve