import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { tarifsFoncineleHaut } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function StationDeFoncine() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnHiver/LesPistes/Foncine-le-Haut/arrivee-ski-alpin-foncine-le-haut-jpg.webp"
                imageSrc2="/images/EnHiver/LesPistes/Foncine-le-Haut/chez-valentin-foncine-le-haut-guillemenet-mathilde-10.jpeg"
                imageSrc3="/images/EnHiver/LesPistes/Foncine-le-Haut/teleshi-ski-alpin-foncine-le-haut-scaled.webp"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="Station de Foncine-le-Haut"
                dates={[]}
                allDatesLink=""
                backLink = "/hiver"
                val = {false}
                open = {false}
                address={{
                    label: "Foncine-le-Haut",
                    details: 'Chez Petit Pierre, 39460 Foncine-le-Haut',
                }}
                phone="03 84 51 92 65"
                email="mairie@jura-foncine.com"
                website=""
            />
            <Description
                introText="Situé au Nord Est du village à coté du hameau du « Petit Pierre », le site est équipé de 4 canons à neige afin de garantir l’enneigement. Il vous propose 1 téléski qui dessert 3 pistes et 2 fils neige pour initiation des débutants et les enfants"
                paragraphs={[
                    "",


                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <PricingTable
                title="Tarifs Ski – Enfants & Adultes"
                description="Adulte à partir de 18 ans | Enfants de 3 à 17 ans"
                data={tarifsFoncineleHaut}
            />

            <LocationSection 
                    lat={46.65864174119257} 
                    lng={6.085099384006198}
                    title="Foncine-le-Haut"
                    address="Chez Petit Pierre, 39460 Foncine-le-Haut"
            />
            
        </div>
    )
}

export default StationDeFoncine