import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { stationDeMouthe, tarifsPrePoncet } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function StationDeMouthe() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnHiver/LesPistes/mouthe/1920x1440_haut-doubs-station-mouthe-teleski-neige-hiver-amanda-mouchet-755.jpg"
                imageSrc2="/images/EnHiver/LesPistes/mouthe/Mouthe-Chez-Liadet-ski-fond--EliseThouret.jpg"
                imageSrc3="/images/EnHiver/LesPistes/mouthe/Mouthe-Chez-Liadet-23--Emilie-CLERGET.jpg"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="Station de Mouthe"
                dates={[]}
                allDatesLink=""
                backLink = "/hiver"
                val = {false}
                open = {false}
                address={{
                    label: "Mouthe",
                    details: 'Rue de la Source du Doubs, 25240 Mouthe',
                }}
                phone=""
                email=""
                website="https://www.destination-haut-doubs.com/station-de-mouthe.html"
            />
            <Description
                introText="Cette station familiale vous accueille à 1 km du village de Mouthe et à 200 mètres seulement de la fameuse Source du Doubs."
                paragraphs={[
                    "Pour profiter tout au long de votre séjour, vous pourrez trouver tout ce qu'il vous faut sur place : piste de luge, location de matériel, école de ski, hôtel-restaurant, tables de pique-nique, sanitaires et un camping municipal.",


                ]}
                listTitle="Perchée entre 937 m d'altitude en bas des pistes et de 1172 m à son point culminant, elle comporte 3 téléskis qui donnent accès à 4 pistes :"
                listItems={[
                    "une rouge 'Le Pré Bouillet'",
                    "une bleue 'La Grangette'",
                    "une verte 'Familiale'",
                    "Une baby 'La Source'",
                    
                ]}
            />
            <PricingTable
                title="Tarifs Ski – Enfants & Adultes"
                description="Adulte à partir de 15 ans | Enfants de 5 à 14 ans"
                data={stationDeMouthe}
            />

            <LocationSection 
                    lat={46.70697965696103} 
                    lng={6.209623526433005}
                    title="Station de Mouthe"
                    address="Rue de la Source du Doubs, 25240 Mouthe"
            />
            
        </div>
    )
}

export default StationDeMouthe