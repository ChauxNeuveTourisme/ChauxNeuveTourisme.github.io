import React from 'react'
import { DistilleriesData} from '../../../component/gastronomie/data'
import HeroPages from '../../../component/hero/HeroPages'
import GastronomieLayout from '../../../component/gastronomie/gastronomieLayout'

function Distilleries() {
    return (
        <div>
            <HeroPages
                titleText="Les Distilleries"
                titleStyle="texe-white"
                img="/images/gastronomie/Distilleries/1920x1440_haut-doubs-absinthe-alambic-distillerie-distiller-alcool-cheni-films-44.jpg"
            />
            <GastronomieLayout data={DistilleriesData}/>
        </div>
    )
}
export default Distilleries