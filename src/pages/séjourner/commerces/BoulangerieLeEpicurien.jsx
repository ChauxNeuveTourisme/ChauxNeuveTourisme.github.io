import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { BLeEpicurien } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'

function BoulangerieLeEpicurien() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/Epicurien/469172942_595451212955509_6000387416247235325_n.jpg"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="Boulangerie L'Épicurien"
                dates={['Services  ', 'Large choix de pains et de pâtisseries.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: "Boulangerie L'Épicurien",
                    details: '12 Grande Rue, 25240 Mouthe',
                }}
                phone="+33 3 81 69 21 51"
                email=""
                website="https://www.facebook.com/p/L%C3%89picurien-100076019385000/"
            />

            <CustomCalendarWithHoraires schedules={BLeEpicurien }/>
            <LocationSection 
                    lat={46.71014354368934} 
                    lng={6.192010210783954}
                    title="Boulangerie L'Épicurien"
                    address="12 Grande Rue, 25240 Mouthe"
            />
        </div>
    )
}

export default BoulangerieLeEpicurien
