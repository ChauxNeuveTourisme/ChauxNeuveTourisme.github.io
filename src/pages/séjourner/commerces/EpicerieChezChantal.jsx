import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { ChezChantal  } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'
import Description from '../../../component/events/Description'

function EpicerieChezChantal() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/Chantal/1200x680_sc_20240618-151501.webp"
                imageAlt="Chaux-Neuve'"
                caption="Chaux-Neuve"
                title="Épicerie Chez Chantal"
                dates={['Services  ', 'WIFI, livraison à domicile, parking gratuit.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: 'Épicerie Chez Chantal',
                    details: '1 Grande Rue, 25240 Chaux-Neuve',
                }}
                phone="+33 3 81 69 21 51"
                email=""
                website=""
            />
            <Description
                introText="Située au cœur du village, cette épicerie propose des produits de première nécessité."
                paragraphs={[
                    "",
                ]}
            /> 

            <CustomCalendarWithHoraires schedules={ChezChantal }/>
            <LocationSection 
                    lat={46.67964198313826} 
                    lng={6.133570626158484}
                    title="Épicerie Chez Chantal"
                    address="1 Grande Rue, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default EpicerieChezChantal
