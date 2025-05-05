import React from 'react'
import { FromagesData} from '../../../component/gastronomie/data'
import HeroPages from '../../../component/hero/HeroPages'
import GastronomieLayout from '../../../component/gastronomie/gastronomieLayout'

function Fromages() {
    return (
        <div>
            <HeroPages
                titleText="Les Fromages"
                titleStyle="texe-white"
                img="/images/gastronomie/Fromages/1920x1440_haut-doubs-fromage-syndicat-mont-dor-fromage-saisonnier-669.jpg"
            />
            <GastronomieLayout data={FromagesData}/>
        </div>
    )
}
export default Fromages