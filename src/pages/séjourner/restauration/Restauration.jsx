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
                titleStyle="text-white"
                img="/images/ims.jpeg"
            />
            <HebergementsSection
                title="De la traditionnelle fondue aux mets des cuisines internationales, profitez des meilleures tables à Chaux-Neuve."
                paragraph="À Chaux-Neuve, les vacances se passent au rythme de l’art de vivre à la française. Le savoir-faire gastronomique de la station de ski savoyarde est intimement ancré dans les traditions montagnardes. Qu’il s’agisse de tables étoilées, de cuisine traditionnelle française ou de restaurants proposant des cartes dans la plus pure tradition alpine, découvrez une infinité de saveurs autour de plats réalisés avec des produits frais et locaux..."
            />
            <WhereToGo />
            <CardGrid 
                cardsData={cardData.restaurationsCard}
            />
        </div>
    )
}

export default Restauration