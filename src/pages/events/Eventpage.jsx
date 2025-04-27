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


function Eventpage() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/Transjurassienne/Transjurassienne.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="La Transjurassienne "
                dates={[' Quand', 'février 2026.']}
                allDatesLink=""
                address={{
                    label: 'Chaux-Neuve',
                    details: 'Traversée du Haut-Jura, de Lamoura à Mouthe, en passant par Chaux-Neuve.',
                }}
                phone=""
                email=""
                website=""
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText="Une course mythique au cœur du Haut-Jura. <be/> Chaque hiver, la Transjurassienne fait vibrer les passionnés de ski nordique dans toute la région. Cette course de fond de renommée internationale traverse les somptueux paysages du Massif du Jura, et parmi les villages emblématiques du parcours, Chaux-Neuve occupe une place de choix."
                paragraphs={[
                    "Située dans la vallée du Val de Mouthe, Chaux-Neuve est connue pour son stade de saut à ski, mais aussi comme point de passage stratégique de la Transjurassienne. Les skieurs y trouvent :",
                    "Une ambiance chaleureuse avec des bénévoles et spectateurs motivés",
                    "Un ravitaillement important pour les coureurs",
                    "Un cadre naturel grandiose entre forêts, combes et plateaux enneigés.",

                ]}
                listTitle="Une immersion totale dans le Jura nordique"
                listItems={[
                    "Pendant la Transjurassienne, Chaux-Neuve devient un véritable village événementiel. C’est l’occasion de :",
                    "Découvrir le patrimoine nordique jurassien.",
                    "Profiter d’animations locales.",
                    "Encourager les athlètes dans une ambiance conviviale.",
                    "Goûter aux produits du terroir jurassien.",

                ]}
            />              

            <Calendrier
                events={[
                    "Chaque année, le deuxième week-end de février.",

                ]}
            />
            <InformationsPratiques
                sectionTitle="Information"
                data={infoEvent_.Transjurassienne}
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

export default Eventpage