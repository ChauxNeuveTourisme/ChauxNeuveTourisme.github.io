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


function CoupeEuropeChauxNeuve() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/competition-internationale-Chaux-Neuve/competition-internationale-Chaux-Neuve.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Coupe d’Europe de Saut et de Combiné Nordique"
                dates={[' Quand', '10 au 12 janvier 2025 .']}
                allDatesLink=""
                address={{
                    label: 'Chaux-Neuve',
                    details: ' à Chaux-Neuve.',
                }}
                phone=""
                email=""
                website="https://www.facebook.com/chauxneuve/?locale=fr_FR"
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText="Cet évènement est conçu pour permettre aux jeunes athlètes européens et internationaux de progresser vers la Coupe du Monde."
                paragraphs={[
                    "Compétition internationale organisée par l’ASNI Chaux-Neuve. Une occasion unique de voir les meilleurs jeunes athlètes européens s'affronter sur les tremplins du village.",
                ]}
                listTitle="Le programme de ces trois jours de fête sportive:"
                listItems={[
                    "vendredi 10 janvier 2025: ",
                    "9h30 : entraînement officiel combiné nordique ( 1 saut)",
                    "10h30 : PCR combiné nordique",
                    "11h30 : entraînement officiel saut spécial dame et homme ( 1 saut)",
                    "14h : compétition saut spécial dame et homme",
                    "Samedi 11 janvier 2025: ",
                    "9h30 : compétition saut combiné nordique",
                    "11h : compétition saut spécial dame et homme",
                    "14h : palmarès saut spécial",
                    "15h30 : course de ski combiné nordique ( 10 Km)",
                    "Dimanche 12 janvier 2025: ",
                    "9h30 : compétition saut combiné nordique",
                    "11h30 : course de ski combiné nordique ( 5 Km)",
                    "12h : palmarès combiné nordique",

                ]}
            />              

            <Calendrier
                events={[
                    "Chaque année",

                ]}
            />
            <InformationsPratiques
                sectionTitle="Information"
                data={infoEvent_.CoupeEuropeChauxNeuve}
            />
            {/*
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

export default CoupeEuropeChauxNeuve