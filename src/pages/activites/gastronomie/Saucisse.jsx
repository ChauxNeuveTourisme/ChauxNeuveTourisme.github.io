import React from 'react'
import { salaisonsData } from '../../../component/gastronomie/data'
import HeroPages from '../../../component/hero/HeroPages'
import GastronomieLayout from '../../../component/gastronomie/gastronomieLayout'

function Saucisse() {
    return (
        <div>
            <HeroPages
                titleText="Les Salaisons"
                titleStyle="texe-white"
                img="/images/gastronomie/Saucisse/1920x1440_haut-doubs-charcuterie-salaison-patrick-vallet-668.jpg"
            />
            <GastronomieLayout data={salaisonsData}/>
        </div>
    )
}

export default Saucisse