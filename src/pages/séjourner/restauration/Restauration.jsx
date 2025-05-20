import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import HebergementsSection from '../../../component/hebergements/HebergementsSection'
import WhereToGo from '../../../component/restauration/WhereToGo'
import {cardData }from "../../../data/restaurationCard"
import CardGrid from '../../../component/pushCard'



function Restauration() {
    return (
        <div>
            <HeroPages
                titleText="Les restaurants"
                titleStyle="text-black"
                img="/images/restauration/restaurants-trieves-aspect-ratio.png"
            />
            <HebergementsSection
                title="De la traditionnelle fondue aux mets des cuisines internationales, profitez des meilleures tables à Chaux-Neuve."
                paragraph="La gastronomie de Chaux-Neuve, nichée au cœur du Haut-Doubs, reflète l'authenticité et la richesse du terroir comtois. Les restaurants locaux mettent en avant une cuisine généreuse, préparée à partir de produits frais
                    et locaux, souvent issus de circuits courts."
            />
            <WhereToGo />
            <CardGrid 
                cardsData={cardData.restaurationsCard}
            />
        </div>
    )
}

export default Restauration