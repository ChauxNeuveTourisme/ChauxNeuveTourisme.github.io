import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function AubergeDuGrandGit() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/restauration/AubergeDuGrandGit/auberge-du-grand-git.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Auberge du Grand Git"
                dates={['Toujours ouvert', 'Le 9 mai 2025']}
                allDatesLink="#Tarifs"
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'Auberge du Grand Git',
                    details: ' 8 Rue des Chaumelles, 25240 Chaux-Neuve',
                }}
                phone="+33 03 81 69 25 75"
                email="aubergedugrandgit@gmail.com"
                website="https://www.aubergedugrandgit.com/restaurant"
            />
            
            <Description
                introText="Cuisine traditionnelle dans un cadre chaleureux, avec des plats typiques comme la saucisse de Morteau, fumée au bois de résineux, offrant des saveurs uniques."
                paragraphs={[
                    "L'Auberge du Grand Git est un restaurant familial situé à La Chaux Neuve, offrant une cuisine traditionnelle revisitée qui met en valeur les produits frais et locaux.",
                    " Dans un cadre chaleureux et convivial',' ce lieu accueille les clients pour des repas savoureux',' avec un menu varié qui change quotidiennement.",
                    " Le chef s'engage à proposer une cuisine faite maison',' respectant les saveurs authentiques du terroir',' pour le plus grand plaisir des amateurs de bonne cuisine",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "Cuisine traditionnelle ",
                ]}
            />              

            <LocationSection 
                lat={46.68116636518269} 
                lng={6.136632126431919}
                title="Auberge du Grand Git"
                address=" 8 Rue des Chaumelles, 25240 Chaux-Neuve"
            />
        </div>
    )
}

export default AubergeDuGrandGit

