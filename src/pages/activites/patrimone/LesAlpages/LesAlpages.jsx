import React from 'react'
import HeroPages from '../../../../component/hero/HeroPages'
import GastronomieLayout from "../../../../component/gastronomie/gastronomieLayout"
import { AlpagesData } from '../../../../data/PatrimoineData'

function LesAlpages() {
  return (
    <div>
      <HeroPages
          titleText="Les Alpages"
          titleStyle="texe-white"
          img="/images/patrimone/LesAlpages/1920x1440_haut-doubs-chalet-alpage-la-petite-echelle-cheni-films-48.jpg"
          backLink="/patrimone"
          backLabel="Retour au Patrimoine"
      />
      <GastronomieLayout data={AlpagesData}/>
    </div>
  )
}

export default LesAlpages