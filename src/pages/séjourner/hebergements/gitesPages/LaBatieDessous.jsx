import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { laBatieDessous } from '../../../../data/gitesImg';



const LaBatieDessous = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/LaBatieDessous/la-batie-dessous-gite-location-salle-reception-mouthe-doubs-jura-ferme-alpage-terrasse-1600x1600-1.jpg"
                imageSrc2="/images/hebergements/Gites/LaBatieDessous/la-batie-dessous-gite-location-mouthe-doubs-jura-ferme-alpage-entree.jpg"
                imageSrc3="/images/hebergements/Gites/LaBatieDessous/la-batie-dessous-gite-location-mouthe-doubs-jura-chambre-1.jpg"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="La Bâtie Dessous"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Mouthe",
                    details: 'Bâtie Dessous, 25240 Mouthe',
                }}
                phone="06 01 33 62 35"
                email="contact@labatiedessous.fr"
                website="http://www.labatiedessous.fr/"
            />
            <Description
                introText="
Située à 1130 mètres d’altitude, la Bâtie Dessous est le lieu idéal pour se ressourcer. Nichée en plein cœur d’un alpage typique des montagnes du Jura, séjournez dans lieu rustique et respectueux de l’environnement."
                paragraphs={[
                    "Ce qui est aujourd’hui un gîte, fût un chalet d’alpage qui accueillait les bergers et leurs vaches l’été. Construite en 1827, Le propriétaire d’alors tenait à avoir non seulement un bâtiment volumineux, capable de lui permettre de mener à bien les traditionnels travaux de la campagne, mais aussi une habitation qui soit belle et solide, signe très certain de ses grandes ambitions. Par choix, nous avons gardé l’esprit authentique et rustique de la ferme.",
                    "Capacité: Jusqu’à 8 personnes"
                ]}
                listTitle="Équipements"
                listItems={[
                    "1 chambre double",
                    "1 chambre avec un lit double et un lit superposé",
                    "1 canapé convertible dans la salle à manger",
                    "Sanitaire avec deux douches, 4 lavabos",
                    "2 WC",
                    "Salle de jeux avec mini-table (ping pong, billard, babyfoot), jeux de fléchette, jeux extérieurs, jeux de société",
                    "Cheminée avec bois de chauffage",
                    "Chauffage d’appoint au gaz",
                    "Lit bébé, chaise haute, table à langer",
                    "Cuisine : réfrigérateur, cuisinière",
                    "Téléphone fixe",
                    "Terrasse extérieur avec barbecue",
                ]}
            />
            <Gallery images={laBatieDessous} maxItems={5} />

            <LocationSection 
                    lat={46.66803290785827} 
                    lng={6.195843670611159}
                    title="La Bâtie Dessous"
                    address="Bâtie Dessous, 25240 Mouthe"
            />
        </div>
    )
}

export default LaBatieDessous