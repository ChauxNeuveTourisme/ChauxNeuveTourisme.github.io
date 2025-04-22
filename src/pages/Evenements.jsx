import React from 'react'
import HeroPages from '../component/hero/HeroPages'
import WeekView from '../component/events/Events'

function Evenements() {
  return (
    <div >
      <div className='container'>
      <HeroPages
          titleText="Agenda de la semaine"
          titleStyle="text-white"
          img="/images/ims.jpeg"
      />
      <WeekView/>
      </div>
    </div>
  )
}

export default Evenements