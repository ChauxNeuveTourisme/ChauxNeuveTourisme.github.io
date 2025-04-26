import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function LesClochettesDuRisoux() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/restauration/LesClochettesDuRisoux/salle-de-restaurant.jpg"
                imageAlt="Chapelle-des-Bois"
                caption="Chapelle-des-Bois"
                title="Les Clochettes du Risoux"
                dates={["Horaires d'ouverture", 'tous les jours, midi et soir']}
                allDatesLink="#Tarifs"
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'Les Clochettes du Risoux',
                    details: "2 Place de l'Église, 25240 Chapelle-des-Bois",
                }}
                phone="+33 03 81 69 21 82"
                email="lesclochettesdurisoux@gmail.com"
                website="https://www.lesclochettesdurisoux.com/restaurant"
            />
            
            <Description
                introText="Le restaurant Les Clochettes du Risoux est une adresse incontournable située à Chapelle-des-Bois, dans le Haut-Doubs. Cet établissement, tenu par Amélie et James depuis 2018, allie authenticité, convivialité et respect de l'environnement.​"
                paragraphs={[
                    "Le restaurant propose une cuisine franc-comtoise généreuse et soignée, élaborée à partir de produits frais, locaux et parfois issus de l'agriculture biologique. Les plats faits maison mettent en valeur les saveurs du terroir dans un cadre chaleureux et authentique.​",
                    "La salle de restaurant, récemment rénovée, séduit par son plafond en sapin provenant des forêts locales, ses murs en chaux et paille, ainsi que son ancien four à pain datant de plusieurs siècles, offrant une atmosphère unique et accueillante.​",
                    "Ouvert : tous les jours, midi et soir",
                    "Fermé : mercredi toute la journée et dimanche soir",
                    "Remarque : le dimanche soir et le mercredi, le restaurant est uniquement ouvert pour les résidents de l'hôtel .​",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "Cuisine traditionnelle française avec des produits frais et locaux",
                ]}
            />              

            <LocationSection 
                lat={46.68116636518269} 
                lng={6.136632126431919}
                title="Les Clochettes du Risoux"
                address=" 2 Place de l'Église, 25240 Chapelle-des-Bois"
            />
        </div>
    )
}

export default LesClochettesDuRisoux

