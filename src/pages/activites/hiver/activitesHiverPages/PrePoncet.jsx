import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { tarifsPrePoncet } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function PrePoncet() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnHiver/LesPistes/Pre-Poncet/Pre-Poncet-1.jpg"
                imageSrc2="/images/EnHiver/LesPistes/Pre-Poncet/Pre-Poncet-2.jpg"
                imageSrc3="/images/EnHiver/LesPistes/Pre-Poncet/Pre-Poncet-6.jpg"
                imageAlt="Châtelblanc"
                caption="Châtelblanc"
                title="Le Pré-Poncet"
                dates={[]}
                allDatesLink=""
                backLink = "/hiver"
                val = {false}
                open = {false}
                address={{
                    label: "Châtelblanc",
                    details: '1 Pré Poncet, 25240 Châtelblanc',
                }}
                phone=""
                email=""
                website="https://www.espacenordiquejurassien.com/annuaire/site_nordique_du_pre_poncet~3064b653e0ec30959a5b08c15ea.html"
            />
            <Description
                introText="Bienvenue sur les mythiques pistes de ski de fond des Montagnes du Jura ! Depuis le départ des pistes du Pré Poncet les possibilités d'itinéraires ski de fond sont grandes… Le passage de la Grande Traversée du Jura permettra même aux plus sportifs de rejoindre des villages plus lointains comme Foncine le Haut ou même Bellefontaine. Les non skieurs y trouveront également leur compte, grâce aux nombreuses pistes de raquettes à neige balisées, aux mushers qui les emmèneront pour une balade en traîneaux à chiens à travers la Combe des Cives, ou tout simplement sur les pistes piétons qui permettent l'accès à une piste damée et sécurisée. Le petit village de Chaux Neuve est aussi réputé pour son tremplin de saut à ski."
                paragraphs={[
                    "",


                ]}
                listTitle="Ski de fond et raquette : "
                listItems={[
                    "14 pistes de ski de fond (53 km)",
                    "7 pistes de raquettes (34 km)",
                    "Il y a des pistes pour tous les niveaux et tout le monde y trouvera son compte, que ce soit le niveau débutant, le niveau intermédiaire et le niveau confirmé. Le pré-Poncet, c’est le paradis de tous les fans de ski de fond! Les touristes amateurs de glisse seront ravis!",
                    "34 km de raquette avec 7 pistes permettront aux amateurs de randonnée de découvrir les magnifiques forets et les beaux paysages enneigés du domaine.",
                    
                ]}
            />
            <PricingTable
                title="Tarifs Ski – Enfants & Adultes"
                description=""
                data={tarifsPrePoncet}
            />

            <LocationSection 
                    lat={46.643962549066366} 
                    lng={6.141125866553873}
                    title="Le Pré-Poncet"
                    address="1 Pré Poncet, 25240 Châtelblanc"
            />
            
        </div>
    )
}

export default PrePoncet