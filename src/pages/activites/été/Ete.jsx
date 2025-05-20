import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import ChauxHebergements from '../../../component/hebergements/chauxHebergements'
import { AvecLesAnimaux, Randonnee, Trail, VTT } from '../../../data/ActivitesEte'
import HeaderT from '../../../component/headerT'

function Ete() {
    return (
        <div>
            <HeroPages
                titleText="Activités été"
                titleStyle="text-white"
                img="/images/EnEte/1920x1440_haut-doubs-saut-vtt-descente-station-metabief-thuria-705.jpg"
            />

            <HeaderT title={"VTT"}/>
            <ChauxHebergements callouts={VTT}/>
            <HeaderT title={"Avec les animaux"}/>
            <ChauxHebergements callouts={AvecLesAnimaux}/>
            <HeaderT title={"Trail"}/>
            <ChauxHebergements callouts={Trail}/>
            <HeaderT title={"Randonnée"}/>
            <ChauxHebergements callouts={Randonnee}/>

        </div>
    )
}

export default Ete