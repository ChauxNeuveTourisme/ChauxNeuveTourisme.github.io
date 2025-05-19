import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { chezLiadet } from '../../../../data/gitesImg';
import { campinsS } from '../../../../data/refugesCabanesImg';



const CampingDeLaSource = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/RefugesCabanes/campingDeLaSource/ygf.jpg"
                imageSrc2="/images/hebergements/RefugesCabanes/campingDeLaSource/PierreCoutherut-48.jpg"
                imageSrc3="/images/hebergements/RefugesCabanes/campingDeLaSource/PierreCoutherut-3.jpg"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="Camping de la Source du Doubs"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/refugesCabanes"
                val = {false}
                address={{
                    label: "Mouthe",
                    details: 'Rue de la Source du Doubs, 25240 Mouthe',
                }}
                phone="03 81 49 42 40"
                email="contact@espacemontdor.com"
                website="https://camping-mouthe.fr/"
            />
            <Description
                introText="Réservez un séjour tout confort
                    Toute l’année, en hiver pour le ski et la neige ou aux beaux jours pour la randonnée, le VTT et la découverte de la montagne jurassienne, nos 10 chalets grand confort de 4 à 6 personnes vous accueillent sur le site de la Source du Doubs, au cœur du Parc Naturel du Haut Jura."
                paragraphs={[
                    "",


                ]}
                listTitle="Ainsi, dans chaque chalet 4-6 personnes, vous disposerez des équipements suivants :"
                listItems={[
                    "une grande pièce avec cuisine tout équipée (plaque de cuisson induction, réfrigérateur, four, micro-onde, lave-vaisselle), salle à manger 6 personnes et espace salon",
                    "une chambre double (lit double ou 2 lits simples)",
                    "une chambre 2 personnes en lits superposés",
                    "un canapé convertible 2 places dans le salon",
                    "une télévision (avec bouquet parabole)",
                    "une salle de bain avec douche et lavabo",
                    "un WC séparé",
                    "une terrasse équipée (mobilier de jardin)",
                    "une garage ski / vélo fermé et couvert",
                    "une place de parking dédiée",

                ]}
            />
            <Gallery images={campinsS} maxItems={5} />

            <LocationSection 
                    lat={46.70624461394054} 
                    lng={6.207990139925104}
                    title="Camping de la Source du Doubs"
                    address="Rue de la Source du Doubs, 25240 Mouthe"
            />
        </div>
    )
}
export default CampingDeLaSource