import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function LeChaletDeLaSource() {
    return (
        <div >
            
            <EventDetail
                imageSrc="/images/restauration/ChaletDeLaSource/la-salle-du-restaurant.jpg"
                imageAlt="Mouthe'"
                caption="Mouthe"
                title="Le Chalet de la Source"
                dates={['Fermeture du restaurant', 'Fermeture le Mardi & Mercredi'  

                    ]}
                allDatesLink=""
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'Le Chalet de la Source',
                    details: ' Route de la source du Doubs, 25240 Mouthe',
                }}
                phone="+33 09 67 37 50 37"
                email="lechaletdelasource@gmail.com"
                website="https://www.lechaletdelasource.fr/"
            />
            
            <Description
                introText="Le restaurant propose une cuisine traditionnelle franc-comtoise, mettant en avant des plats faits maison avec des produits sains et locaux. Parmi les spécialités, on retrouve des recettes inspirées des plats de nos grands-mères.​"
                paragraphs={[
                    "Le Chalet de la Source est un restaurant et hébergement situé à Mouthe, dans le Haut-Doubs, à proximité de la source du Doubs et au pied du mont Risoux. Cet établissement familial propose une cuisine de terroir élaborée à partir de produits locaux et de saison, dans une ambiance chaleureuse et conviviale.​​",
                    "",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "traditionnelle franc-comtoise",
                ]}
            /> 

            <LocationSection 
                lat={46.706823714019535} 
                lng={6.208807926433002}
                title="Le Chalet de la Source"
                address=" Route de la source du Doubs, 25240 Mouthe'"
            />
        </div>
    )
}

export default LeChaletDeLaSource


