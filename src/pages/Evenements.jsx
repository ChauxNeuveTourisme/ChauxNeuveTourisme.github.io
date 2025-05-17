import React from 'react'
import HeroPages from '../component/hero/HeroPages'
import WeekView from '../component/events/Events'

function Evenements() {
  return (
    <div >
      <div className='container'>
      <HeroPages
          titleText="Animation"
          titleStyle="text-white"
          img="/images/TourDeFrance/pontarlier2.jpg"
      />
      <WeekView/>
      </div>
    </div>
  )
}

export default Evenements