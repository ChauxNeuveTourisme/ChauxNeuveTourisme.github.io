import React from 'react'
import EventDetail from '../../component/events/HeroEventsPages'
import InformationsPratiques from '../../component/events/InformationsPratiques'
import Calendrier from '../../component/events/Calendrier'
import Description from '../../component/events/Description'
import AnchorNav from '../../component/events/AnchorNav'
import ScrollToHash from '../../component/events/ScrollToHash'
import  { infoEvent_ } from '../../component/events/infoEvent_'
import TarifsSection from '../../component/events/Tarifs'
import  { summerGrandPrix} from '../../component/events/tarifsEvent'


function SummerGrandPrix() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/SummerGrandPrix/Group030923sv277-scaled.webp"

                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Transhumance des vaches"
                dates={[' Quand', 'du 30 août au 1er septembre 2024,.']}
                allDatesLink=""
                address={{
                    label: 'Chaux-Neuve',
                    details: 'Le tremplin de Chaux-Neuve.',
                }}
                phone=" "
                email=""
                website="https://www.facebook.com/chauxneuve/?locale=fr_FR"
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText=" 
                    Chaque été, Chaux-Neuve, petit village niché dans le Haut-Doubs, devient la capitale française du saut à ski estival grâce au Summer Grand Prix. Cette compétition internationale de haut niveau attire les meilleurs athlètes mondiaux de combiné nordique et de saut à ski, venus s’affronter sur les tremplins mythiques du stade nordique Jason Lamy-Chappuis.
                    Un spectacle sportif et festif
                    Organisé sur tremplin synthétique, le Summer Grand Prix propose un programme spectaculaire mêlant épreuves sportives et animations pour toute la famille. Le public peut assister gratuitement à des sauts impressionnants, à des séances d'entraînement ouvertes, ainsi qu'à des rencontres avec les athlètes."
                paragraphs={[
                    "Une vitrine pour le territoire jurassien: ",
                    "Au-delà de l’aspect sportif, le Summer Grand Prix de Chaux-Neuve est une véritable vitrine pour le territoire. Il met en lumière les valeurs du sport, l’engagement local, et la beauté naturelle des montagnes du Jura en été.",
                    "Le Summer Grand Prix 2024 de combiné nordique s'est déroulé à Chaux-Neuve du 30 août au 1er septembre 2024, marquant la clôture de la saison estivale. L'événement a rassemblé l'élite mondiale du combiné nordique sur le site emblématique de la Côte Feuillée, offrant un spectacle de haut niveau aux passionnés de la discipline.​"
                    
                ]}
                listTitle="Programme officiel du Grand Prix d’été 2024 à Chaux-Neuve"
                listItems={[
                    "Vendredi 30 août 2024 – Préparations et qualifications : ",
                    "9h00 : Entraînement officiel dames (2 sauts)",
                    "10h15 : PCR dames (saut de réserve)",
                    "11h00 : Entraînement officiel hommes (2 sauts)",
                    "12h00 : PCR hommes (saut de réserve)",
                    "14h00 : Reconnaissance de la piste de rollerski",
                    "Samedi 31 août 2024 – Épreuves Gundersen: ",
                    "Hommes : Saut sur grand tremplin HS118 suivi d'une course de rollerski de 10 km",
                    "Dames : Saut sur grand tremplin HS118 suivi d'une course de rollerski de 5 km ",
                    "Dimanche 1er septembre 2024 – Épreuves Compact: ",
                    "Hommes : Saut sur grand tremplin HS118 suivi d'une course de rollerski de 10 km",
                    "Dames : Saut sur grand tremplin HS118 suivi d'une course de rollerski de 5 km ",

                ]}
            />              

            <Calendrier
                events={[
                    "Chaque année",

                ]}
            />
            <InformationsPratiques
                sectionTitle="Information"
                data={infoEvent_.SummerGrandPrix}
            />
            {/*
            
            {/*
            <InformationsPratiques
                sectionTitle="Location Information"
                data={infoEvent_.locationInfo}
            />
            <TarifsSection  
                prices={summerGrandPrix}
            />*/}

            
        </div>
    )
}

export default SummerGrandPrix