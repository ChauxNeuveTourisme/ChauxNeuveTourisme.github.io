import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { BelFoncine } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'
import Description from '../../../component/events/Description'

function LaBelFoncine() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/BelFoncine/labelfoncine-01.jpg"
                imageAlt="Foncine-le-Haut"
                caption="Foncine-le-Haut"
                title="La Bel Foncine"
                dates={['Services  ', ' Boulangerie-Pâtisserie.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: "La Bel Foncine",
                    details: '50 Grande Rue, 39460 Foncine-le-Haut',
                }}
                phone="03 84 37 85 24"
                email=""
                website=""
            />
            <Description
                introText="La Boulangerie-Pâtisserie La Bel Foncine, également connue sous le nom de Boulangerie Henry, est un établissement artisanal situé à Foncine-le-Haut, dans le Jura. Elle est réputée pour ses produits faits maison, notamment ses pains, viennoiseries, pâtisseries fines, chocolats et pièces montées personnalisées."
                paragraphs={[
                    "jeudi : fermé (ouvert de 6h30 à 12h30 du 15 juillet au 15 août et pendant les vacances de Noël et d'hiver) ​",
                ]}
            /> 

            <CustomCalendarWithHoraires schedules={BelFoncine }/>
            <LocationSection 
                    lat={46.65817631725477} 
                    lng={6.07124158410281}
                    title="La Bel Foncine"
                    address="50 Grande Rue, 39460 Foncine-le-Haut"
            />
        </div>
    )
}

export default LaBelFoncine

