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


function TourDeFrance() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/TourDeFrance/tour-de-france-2025-1.jpg"
                imageAlt="PONTARLIER"
                caption="PONTARLIER"
                title="Tour de France 2025 - 20e étape"
                dates={[' Quand', '26 juillet 2025']}
                allDatesLink=""
                address={{
                    label: "PONTARLIER",
                    details: '25300 PONTARLIER',
                }}
                phone="03 81 38 81 38"
                email=""
                website=""
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText="La Ville de Pontarlier et ses élus sont heureux de recevoir la 20e étape du Tour de France. Cette étape Nantua > Pontarlier (185km) donne l'occasion à la Ville d'être pour la 8e fois de son histoire ville étape du Tour de France."
                paragraphs={[
                    "",
                ]}
                listTitle=""
                listItems={[
                    "",
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

export default TourDeFrance