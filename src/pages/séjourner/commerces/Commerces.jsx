import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import CardGrid from "../../../component/pushCard"
import {cardData }from "../../../data/hebergementsCard"
import FaqSection from '../../../component/hebergements/FaqSection'
import ChauxCommerces from '../../../component/commerces/Commerces'

function Commerces() {
    return (
        <div>
            <HeroPages
                titleText="Commerces à Chaux-Neuve"
                titleStyle="text-navy"
                img="/images/commerces/achat_local.jpg"
            />
            <ChauxCommerces/>
            <CardGrid 
                cardsData={cardData.hebergementsCard}
            />
            <FaqSection faqs={cardData.faqs} />
        </div>
    )
}

export default Commerces