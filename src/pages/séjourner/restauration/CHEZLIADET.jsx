import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function CHEZLIADET() {
    return (
        <div >
            
            <EventDetail
                imageSrc="/images/restauration/CHEZLIADET/salle-a-manger-vue-2.jpg"
                imageAlt="Mouthe'"
                caption="Mouthe"
                title="Chez Liadet"
                dates={['Ouverture Restaurant ', 'Toute la semaine de 8:00 - 21:00, sauf le dimanche soir hors vacances scolaires']}
                allDatesLink=""
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'Chez Liadet',
                    details: ' Route des Charbonnières, 25240 Mouthe',
                }}
                phone="+33 03 81 39 99 58"
                email="chez.liadet@orange.fr"
                website="https://www.chezliadet.com/"
            />
            
            <Description
                introText="Cuisine traditionnelle dans un cadre chaleureux, avec des plats typiques comme la saucisse de Morteau, fumée au bois de résineux, offrant des saveurs uniques."
                paragraphs={[
                    "Chez Liadet est une auberge familiale située à Mouthe, dans le Haut-Doubs, à environ 10 km de Chaux-Neuve. Nichée à 1080 mètres d'altitude, elle offre un cadre montagnard authentique, idéal pour une escapade nature ou un séjour sportif.",
                    "Les horaires peuvent varier selon la saison. Il est recommandé de contacter directement le restaurant pour obtenir les horaires actuels.​",
                    "La salle de restaurant peut accueillir jusqu'à 40 couverts, et une terrasse exposée plein sud est disponible par beau temps. ",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "Fondue, raclette, croûte au fromage",
                    "La 'Clocherade' : viande à cuire sur une cloche chaude, accompagnée de salade et de pommes de terre",
                    "Tartes maison",
                ]}
            /> 

            <LocationSection 
                lat={46.68139818125027} 
                lng={6.186239369223302}
                title="Chez Liadet"
                address=" Route des Charbonnières, 25240 Mouthe'"
            />
        </div>
    )
}

export default CHEZLIADET


