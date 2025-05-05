import React from 'react'
import CustomCalendarWithHoraires from '../../../component/commerces/Horaires'
import { supermarcheBi1 } from '../../../component/commerces/scheduleConfig'
import EventDetail from '../../../component/events/HeroEventsPages'
import LocationSection from '../../../component/LocationSection/LocationSection'

function SupermarcheBi1() {
    return (
        <div>
            <EventDetail
                imageSrc="/images/commerces/bi1/462209803_7909081742525675_7191459242925565229_n.jpg"
                imageAlt="Mouthe'"
                caption="Mouthe"
                title="Supermarché bi1 (anciennement ATAC)"
                dates={['Services  ', 'Boucherie, charcuterie, fromagerie, poissonnerie, boulangerie, produits régionaux, snacking, station-service 24h/24, borne de recharge électrique, cabine photo.']}
                allDatesLink=""
                backLabel="Retour aux commerces"   // <-- custom
                backLink="/commerces"   
                address={{
                    label: 'Supermarché bi1',
                    details: '32 bis Rue de la Varée, 25240 Mouthe',
                }}
                phone="+33 03 81 69 27 57"
                email=""
                website="https://magasins.bi1.fr/bi1-supermarches/fr/store/france/bourgogne-franche-comte/doubs/mouthe/mouthe/70073?utm_source=GMB&utm_campaign=Multidiffusion&utm_medium=local&utm_content=70073&origin=GMB"
            />

            <CustomCalendarWithHoraires schedules={supermarcheBi1}/>
            <LocationSection 
                    lat={46.71442436361259} 
                    lng={6.195825639925421}
                    title="Supermarché bi1"
                    address="32 bis Rue de la Varée, 25240 Mouthe"
            />
        </div>
    )
}

export default SupermarcheBi1