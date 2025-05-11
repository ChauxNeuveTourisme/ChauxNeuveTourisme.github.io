import React from 'react'
import { MaisonDeLaReserveTarif } from '../../../../data/PatrimoineData'
import EventDetail from '../../../../component/events/HeroEventsPages'
import Description from '../../../../component/events/Description'
import InfoBlock from '../../../../component/InfoBlock'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import TarifsSection from '../../../../component/events/Tarifs'

function MaisonDeLaReserve() {
    return (
        <div className=''>
            <EventDetail
                imageSrc="/images/patrimone/MaisonDeLaReserve/unnamed.jpg"
                imageAlt="Labergement-Sainte-Marie"
                caption="Labergement-Sainte-Marie"
                title="Maison de la Réserve"
                dates={['']}
                allDatesLink=""
                backLabel = "Retour au Patrimoine" 
                backLink = "/patrimone" 
                address={{
                    label: 'Labergement-Sainte-Marie',
                    details: "28 Rue de Mouthe, 25160 Labergement-Sainte-Marie",
                }}
                phone="03 81 69 35 99"
                email="info@maisondelareserve.fr"
                website="https://www.maisondelareserve.fr/"
            />
            <Description
                introText="Nichée à Labergement-Sainte-Marie, dans le Doubs, au cœur du Haut-Doubs et du massif du Jura, la Maison de la Réserve est un espace incontournable pour les amoureux de la nature, de la faune sauvage et des grands espaces préservés. Situé à deux pas du Lac de Remoray, ce musée interactif vous invite à découvrir la richesse exceptionnelle de la biodiversité locale."
                paragraphs={[
                ]}
                listTitle=""
                listItems={[
                ]}
            />
    
            <InfoBlock
                title="Une visite ludique et pédagogique"
                textBefore="La Maison de la Réserve propose une exposition permanente riche en maquettes, sons, vidéos et dioramas, mettant en scène plus de 1 000 espèces animales et végétales typiques du Haut-Doubs : loutres, lynx, hiboux, cerfs, grenouilles, et une multitude d’oiseaux des tourbières et des forêts jurassiennes."
                list={[
                    "Idéal pour les familles, les curieux de nature ou les passionnés d'écologie !"
                ]}
                textAfter=""
            />

            <InfoBlock
                title="Une immersion dans un territoire protégé"
                textBefore="La Maison de la Réserve valorise le patrimoine naturel de la Réserve naturelle du lac de Remoray, un site classé Natura 2000, reconnu pour ses tourbières, ses forêts humides et ses prairies riches en espèces rares. Grâce à des animations, des balades guidées et des ateliers, petits et grands peuvent mieux comprendre l’importance de protéger ces écosystèmes uniques."
                list={[
                ]}
                textAfter=""
            />

            <InfoBlock
                title="Horaires :"
                textBefore="Ouvert toute l’année (vacances scolaires et week-ends). Consultez les horaires saisonniers sur le site officiel."
                list={[
                ]}
                textAfter=""
            />

            <TarifsSection  
                prices={MaisonDeLaReserveTarif}
            />

            <LocationSection 
                lat={46.76867562245747} 
                lng={6.276246230139323}
                title="Maison de la Réserve"
                address="28 Rue de Mouthe, 25160 Labergement-Sainte-Marie"
            />
        </div>
    )
}

export default MaisonDeLaReserve