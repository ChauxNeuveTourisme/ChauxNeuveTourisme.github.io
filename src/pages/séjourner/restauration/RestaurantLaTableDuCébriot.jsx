import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function RestaurantLaTableDuCébriot() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/restauration/TableDuCébriot/restaurant.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="La Table du Cébriot"
                dates={["Horaires d'ouverture", 'tous les jours, midi et soir']}
                allDatesLink="#Tarifs"
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'La Table du Cébriot',
                    details: "2 Grande Rue, Hôtel Les Tremplins, 25240 Chaux-Neuve",
                }}
                phone="+33 03 81 69 25 61"
                email="..."
                website="https://www.la-table-du-cebriot-restaurant-chaux-neuve.fr/"
            />
            
            <Description
                introText="La Table du Cébriot vous invite à découvrir une expérience culinaire unique dans un cadre chaleureux et authentique. Située à Chaux-Neuve, notre maison est l’endroit idéal pour une escapade gourmande, qu’il s’agisse d’un déjeuner en famille, d’un dîner romantique ou d’un événement privé. Nous vous proposons une cuisine d’inspiration traditionnelle française, entièrement réalisée maison, qui vous régalera à chaque bouchée.​"
                paragraphs={[
                    "​",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "Cuisine bistronomique française, plats faits maison avec des produits locaux et de saison.",
                ]}
            />              

            <LocationSection 
                lat={46.679444171119854} 
                lng={6.132928055267789}
                title="La Table du Cébriot"
                address=" 2 Grande Rue, Hôtel Les Tremplins, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default RestaurantLaTableDuCébriot

