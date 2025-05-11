import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import CardGrid from '../../../component/pushCard'
import { PatrimoineData } from '../../../data/restaurationCard'

function Patrimone() {
    return (
        <div>
            <HeroPages
                titleText="Histoire, Patrimoine"
                titleStyle="text-white"
                img="/images/patrimone/Chateaux/haut-doubs-chateau-joux-fort-malher-point-vue-celine-guichard-11538.jpg"
            />
            <CardGrid 
                sectionTitle =""
                cardsData={PatrimoineData.Card}
            />
        </div>
    )
}

export default Patrimone