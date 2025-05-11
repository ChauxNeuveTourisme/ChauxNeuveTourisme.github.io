import React from 'react'
import HeroPages from '../../../../component/hero/HeroPages'
import GastronomieLayout from '../../../../component/gastronomie/gastronomieLayout'
import { ChateauxData } from '../../../../data/PatrimoineData'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function Chateaux() {
  return (
    <div className=''>
      <HeroPages
          titleText="Châteaux dans le Haut-Doubs"
          titleStyle="texe-white"
          img="/images/patrimone/Chateaux/haut-doubs-chateau-joux-fort-malher-point-vue-celine-guichard-11538.jpg"
          backLink="/patrimone"
          backLabel="Retour au Patrimoine"
      />
      <GastronomieLayout data={ChateauxData}/>
      <LocationSection 
        lat={46.87175532900526} 
        lng={6.371970026440329}
        title="Château de Joux"
        address="1Rte du Château, 25300 La Cluse-et-Mijoux"
      />
    </div>
  )
}

export default Chateaux