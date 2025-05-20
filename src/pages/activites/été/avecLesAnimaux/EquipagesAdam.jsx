import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { tarifsEquipagesAdam } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function EquipagesAdam() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/LesAnimaux/LesEquipagesAdam/IMG-20220716-WA0008.jpg"
                imageSrc2="/images/EnEte/LesAnimaux/LesEquipagesAdam/nouveau-dossier-012-scaled.jpg"
                imageSrc3="/images/EnEte/LesAnimaux/LesEquipagesAdam/IMG-20220716-WA0004.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Les Équipages Adam's"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Combe des Cives, 25240 Chaux-Neuve',
                }}
                phone="09 75 58 40 83"
                email="contact@lesequipagesadams.com"
                website="http://www.lesequipagesadams.com/"
            />
            <Description
                introText="A partir de 8 ans – Sur une demi-journée, les participants auront l’occasion individuellement ou par deux, de mener un chien attelé au niveau de votre taille avec une ceinture rembourrée. Durant cette sortie nous vous proposons une animation nature sur des thèmes variés. Activité permettant, à des rythmes différents la découverte de nos forêts d’une façon originale.
                Attention : limite de poids fixée à 90 kilos/personne et femme enceinte non-acceptée"
                paragraphs={[
                    "",


                ]}
                listTitle="Programme : "
                listItems={[
                    "Rencontre et contact avec nos chiens nordiques",
                    "Balade nature en cani-randonnée environ 1 heure",
                    "Préparation des chiens et promenade",
                ]}
            />
            <PricingTable
                title="Tarifs  – Enfants & Adultes"
                description="enfant (8 à 12 ans) "
                data={tarifsEquipagesAdam}
            />

            <LocationSection 
                    lat={46.63386834042126} 
                    lng={6.139225055265794}
                    title="Les Équipages Adam's"
                    address="Combe des Cives, 25240 Chaux-Neuve"
            />
            
        </div>
    )
}

export default EquipagesAdam