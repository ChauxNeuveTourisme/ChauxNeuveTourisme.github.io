import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { LDeSki } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'
import Description from '../../../component/events/Description'

function LocationDeSki() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/SKIS/5dfb92d227505.jpeg"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="BOURGEOIS Alain – Location de skis"
                dates={['Services  ', 'Locations de skis alpin et fond, Locations de raquettes, Locations de luges.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: "BOURGEOIS Alain – Location de skis",
                    details: 'Rte de Pontarlier, 39460 Foncine-le-Haut',
                }}
                phone="03 84 51 95 30"
                email=""
                website=""
            />
            <Description
                introText="Horaires des jours fériés 09:00 – 12:00"
                paragraphs={[
                    "​",
                ]}
            /> 

            <CustomCalendarWithHoraires schedules={LDeSki }/>
            <LocationSection 
                    lat={46.66246533282673} 
                    lng={6.080221151478435}
                    title="BOURGEOIS Alain – Location de skis"
                    address="Rte de Pontarlier, 39460 Foncine-le-Haut"
            />
        </div>
    )
}

export default LocationDeSki

