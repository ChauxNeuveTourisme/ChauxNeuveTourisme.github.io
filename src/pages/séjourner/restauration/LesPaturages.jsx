import React from 'react'
import EventDetail from '../../../component/events/HeroEventsPages'
import Description from '../../../component/events/Description'
import LocationSection from '../../../component/LocationSection/LocationSection'


function LesPaturages() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/restauration/LesPaturages/les-paturages.jpg"
                imageAlt="Chapelle-des-Bois"
                caption="Chapelle-des-Bois"
                title="Les Pâturages"
                dates={["Horaires d'ouverture", 'tous les jours, midi et soir']}
                allDatesLink=""
                backLabel="Retour aux restaurations"   // <-- custom
                backLink="/restauration"   
                address={{
                    label: 'Les Pâturages',
                    details: "25 Route des Pâturages, 25240 Chapelle-des-Bois",
                }}
                phone="+33 03 81 69 29 12"
                email="..."
                website="https://www.facebook.com/p/Les-P%C3%A2turages-100063756241594/"
            />
            
            <Description
                introText="Le restaurant Les Pâturages est une adresse incontournable à Chapelle-des-Bois, offrant une cuisine traditionnelle franc-comtoise dans une ambiance chaleureuse et familiale.​"
                paragraphs={[
                    "Les tarifs varient en fonction des plats et des formules choisies. Pour obtenir des informations détaillées sur les prix, il est recommandé de consulter le site officiel ou de contacter directement l'établissement.​",
                ]}
                listTitle="les spécialités"
                listItems={[
                    "Plats traditionnels franc-comtois",
                    "Pizzas et crêpes",
                    "Galettes et desserts maison​",
                ]}
            />              

            <LocationSection 
                lat={46.6020367997439} 
                lng={6.113263668756414}
                title="Les Pâturages"
                address=" 25 Route des Pâturages, 25240 Chapelle-des-Bois"
            />
        </div>
    )
}

export default LesPaturages


