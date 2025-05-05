import React from 'react'
import EventDetail from '../../component/events/HeroEventsPages'
import InformationsPratiques from '../../component/events/InformationsPratiques'
import Calendrier from '../../component/events/Calendrier'
import Description from '../../component/events/Description'
import AnchorNav from '../../component/events/AnchorNav'
import ScrollToHash from '../../component/events/ScrollToHash'
import  { infoEvent_ } from '../../component/events/infoEvent_'
import TarifsSection from '../../component/events/Tarifs'
import  { prixGeneral } from '../../component/events/tarifsEvent'


function TrailDuMont() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/TrailDuMont/trail-mont-d-Or.jpg"
                imageAlt="METABIEF"
                caption="METABIEF"
                title="Trail du Mont d'Or"
                dates={[' Quand', '09 juin 2025.']}
                allDatesLink=""
                address={{
                    label: "METABIEF",
                    details: ' Place Xavier Authier 25370 METABIEF.',
                }}
                phone="06 70 03 31 97"
                email=""
                website="https://www.trailmontdor.com/"
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText="Du samedi 14 au dimanche 15 juin 2025"
                paragraphs={[
                    "",
                ]}
                listTitle="rogramme :"
                listItems={[
                    "Samedi :",
                    "13h - 17h30 : retrait des dossards et inscriptions trails sur place",
                    "18h: Départ de l'Infernale du Mt Ramey (2x4km)",
                    "Dimanche :",
                    "5h : retrait des dossards",
                    "6h: Départ du Trail du Mont d'Or - 52km",
                    "9h: Départ du Tour du Mont d’Or - 25km",
                    "9h à 9h15 : départ libre de la randonnée 10 km",
                    "10h : Départ du Trail des Crêtes - 15km",
                    "A partir de 11h30 : repas sous chapiteau / Podiums",
                ]}
            />              
            {/*
            <Calendrier
                events={[
                    "Chaque année",

                ]}
            />
            <InformationsPratiques
                sectionTitle="Information"
                data={infoEvent_.CoupeEuropeChauxNeuve}
            />
            
            <InformationsPratiques
                sectionTitle="Location Information"
                data={infoEvent_.locationInfo}
            />
            <TarifsSection  
                prices={prixGeneral}
            />*/}

            
        </div>
    )
}

export default TrailDuMont


