import React from 'react'
import QueFaire from '../component/QueFaire'
import PreparerMonSejour from '../component/PreparerMonSejour '
import HeroBanner from '../component/hero/HeroBanner'

function Decouvrir() {
  return (
    <div >
      <div className='container'>
        <HeroBanner/>
        <QueFaire/>
        <PreparerMonSejour/>
      </div>
    </div>
  )
}

export default Decouvrir