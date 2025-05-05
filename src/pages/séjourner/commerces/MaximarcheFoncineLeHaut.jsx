import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { BelFoncine } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'
import Description from '../../../component/events/Description'

function MaximarcheFoncineLeHaut() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/Maximarche/supermarche-1280.webp"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="Maximarché"
                dates={['Services  ', ' Supermarché de proximité proposant une large gamme de produits alimentaires et de première nécessité.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: "Maximarché",
                    details: '3 rue des Isles, 39460 Foncine-le-Haut',
                }}
                phone="03 84 51 90 67"
                email=""
                website="https://magasins.maximarche.fr/maximarche/fr/store/12421?utm_source=GMB&utm_campaign=Multidiffusion&utm_medium=local&utm_content=12421&origin=GMB"
            />
            <Description
                introText="Horaires des jours fériés 09:00 – 12:00"
                paragraphs={[
                    "​",
                ]}
            /> 

            <CustomCalendarWithHoraires schedules={BelFoncine }/>
            <LocationSection 
                    lat={46.657149645989534} 
                    lng={6.073062741774694}
                    title="Maximarché"
                    address="3 rue des Isles, 39460 Foncine-le-Haut"
            />
        </div>
    )
}

export default MaximarcheFoncineLeHaut
