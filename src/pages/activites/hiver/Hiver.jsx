import React from 'react'
import HebergementsSection from '../../../component/hebergements/HebergementsSection'
import ChauxHebergements from '../../../component/hebergements/chauxHebergements'
import CardGrid from '../../../component/pushCard'
import { cardData } from '../../../data/hebergementsCard'
import HeroPages from '../../../component/hero/HeroPages'
import { StationDeSki } from '../../../data/ActivitesHiver'
import PricingTable from '../../../component/ForfaitsTable'

function Hiver() {
    return (
        <div>
            <HeroPages
                titleText="Activités hiver"
                titleStyle="text-black"
                img="/images/EnHiver/1920x1440_haut-doubs-ski-fond-nordique-hiver-niege-ben-becker-706.jpg"
            />
            <ChauxHebergements callouts={StationDeSki}/>
            
            {/*
            <PricingTable
                title="Tarifs Ski – Enfants & Adultes"
                description="Adulte à partir de 18 ans | Enfants de 3 à 17 ans"
                data={tarifsFoncineleHaut}
            />*/ }
        </div>
    )
}

export default Hiver