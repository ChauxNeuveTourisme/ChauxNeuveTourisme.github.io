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
                imageSrc="/images/ims.jpeg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Title"
                dates={['Toujours ouvert', 'Le 9 mai 2025']}
                allDatesLink="#Tarifs"
                address={{
                    label: 'Chaux-Neuve',
                    details: 'Route de .........',
                }}
                phone="+33333333"
                email="test@test.com"
                website="url"
            />
            <ScrollToHash />
            <AnchorNav />
            <Description
                introText="Depuis 16 ans, Lorem Ipsum accueille de nombreux spectateurs dans sa magnifique salle lors de spectacles humoristiques ou concerts entraînants."
                paragraphs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at suscipit nunc. Donec ut sapien non sem volutpat tincidunt.",
                    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer id justo nec metus bibendum varius.",
                    "Aliquam erat volutpat. In hac habitasse platea dictumst. Curabitur nec mauris at elit fringilla tristique."
                ]}
                listTitle="Programme à venir :"
                listItems={[
                    "Vendredi 21 février, 20h30 : ....",
                    "Vendredi 7 mars, 20h30 : ....",
                    "Vendredi 4 avril, 20h30 : ....",
                    "Vendredi 9 mai, 20h30 : ......",
                ]}
            />              

            <Calendrier
                events={[
                    "Toujours ouvert, Le 23 mai 2025",
                    "Toujours ouvert, Le 12 septembre 2025",
                    "Toujours ouvert, Le 3 octobre 2025",
                    "Toujours ouvert, Le 31 octobre 2025",
                    "Toujours ouvert, Le 9 mai 2026",

                ]}
            />
            <InformationsPratiques
                sectionTitle="Location Information"
                data={infoEvent_.locationInfo}
            />
            <TarifsSection  
                prices={prixGeneral}
            />

            
        </div>
    )
}

export default Eventpage