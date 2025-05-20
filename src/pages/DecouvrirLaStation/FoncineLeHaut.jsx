import React from 'react'
import { chapelleDesBois, foncineLeHaut} from '../../data/hotelsImg';
import HotelDetails from '../../component/hebergements/HotelDetails/HotelDetails';
import Description from '../../component/events/Description';
import Gallery from '../../component/hebergements/HotelDetails/Gallery';
import LocationSection from '../../component/LocationSection/LocationSection';



const FoncineLeHaut= ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/foncineLeHaut/11.webp"
                imageSrc2="/images/foncineLeHaut/22.webp"
                imageSrc3="/images/foncineLeHaut/33.webp"
                imageAlt="Foncine-le-Haut "
                caption="Foncine-le-Haut "
                title="Foncine-le-Haut "
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/decouvrir"
                val = {false}
                open = {true}
                address={{
                    label: "Foncine-le-Haut ",
                    details: ' Foncine-le-Haut 39460',
                }}
                phone=""
                email=""
                website="https://www.jura-tourism.com/activite/site-nordique-de-foncine-le-haut/"
            />
            <Description
                introText="Premier village du département du Jura quand on arrive du Doubs, Foncine-le-Haut est la vraie incarnation du petit village à la montagne. On y retrouve tous les services attendus lorsque l’on vient en vacances à la montagne : hébergement, restauration, commerces de proximité, … Foncine n’a rien a envier au grandes stations alpines."
                paragraphs={[
                    "Que l’on soit en recherche d’activités ludiques et familiales ou de grands espaces à explorer, chacun trouvera son bonheur dans ce petit village des Montagnes du Jura. Les activités ne manquent pas, ski de fond, raquettes à neige, luge, et même ski de descente, on ne s’ennuiera pas à Foncine !",
                    "A Foncine on skie de part et d’autre du village : du côté de la Forêt du Mont Noir, départ des pistes chez Valentin, on rejoint d’autres petits villages mythiques des Montagnes du Jura : Chapelle des Bois, Pré Poncet d’un côté et Bellefontaine de l’autre. En face se trouve le Bayard, côté Forêt de la Haute Joux, avec des pistes un peu plus faciles et offrant un autre point de vue sur Foncine.",
                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={foncineLeHaut} maxItems={5} />

            <LocationSection 
                    lat={46.659683031526356} 
                    lng={6.07204960991208}
                    title="Foncine-le-Haut "
                    address="Foncine-le-Haut 39460"
            />
        </div>
    )
}

export default FoncineLeHaut