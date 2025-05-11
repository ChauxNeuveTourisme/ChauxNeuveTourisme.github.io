import React from 'react'
import HeroPages from '../../../../component/hero/HeroPages'
import GastronomieLayout from '../../../../component/gastronomie/gastronomieLayout'
import { LegendesData } from '../../../../data/PatrimoineData'

function LesLegendes() {
  return (
    <div className=''>
      <HeroPages
          titleText="Les Legendes"
          titleStyle="texe-white"
          img="/images/patrimone/LesLegendes/1920x1440_haut-doubs-source-bleue-berthe-de-joux-l-gende-celine-guichard-679.jpg"
          backLink="/patrimone"
          backLabel="Retour au Patrimoine"
      />
      <GastronomieLayout data={LegendesData}/>
    </div>
  )
}

export default LesLegendes