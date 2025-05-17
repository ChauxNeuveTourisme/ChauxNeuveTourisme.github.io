import React from 'react'
import EventDetail from '../../component/events/HeroEventsPages'
import InformationsPratiques from '../../component/events/InformationsPratiques'
import Calendrier from '../../component/events/Calendrier'
import Description from '../../component/events/Description'
import AnchorNav from '../../component/events/AnchorNav'
import ScrollToHash from '../../component/events/ScrollToHash'
import  { infoEvent_ } from '../../component/events/infoEvent_'
import TarifsSection from '../../component/events/Tarifs'
import  { festivalDeLaPaille } from '../../component/events/tarifsEvent'


function FestivalDeLaPaille() {
    return (
        <div >
            <EventDetail
                imageSrc="/images/FestivalDeLaPaille/festival-de-la-paille--1200x766.jpg"
                imageAlt="Métabief"
                caption="Métabief"
                title="Festival de la Paille"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                address={{
                    label: "Métabief",
                    details: ' Place Xavier Authier, 25370 Métabief.',
                }}
                phone="07 67 96 19 48"
                email="communication@festivalpaille.fr"
                website="https://www.festivalpaille.fr/"
            />
            {/*
            <ScrollToHash />
            <AnchorNav />*/}
            <Description
                introText="Le Festival de la Paille revient pour sa 23ᵉ édition du 1ᵉʳ au 3 août 2025 à Métabief, au cœur du massif du Jura. Ce rendez-vous incontournable des musiques actuelles en Franche-Comté propose une programmation éclectique mêlant têtes d'affiche et talents émergents, dans un cadre naturel exceptionnel.​"
                paragraphs={[
                    "Le Festival de la Paille 2025 promet une expérience musicale unique dans un cadre naturel exceptionnel. Réservez vos billets dès maintenant pour ne pas manquer cet événement phare de l'été en Franche-Comté.​",
                    "Lieu et cadre: ",
                    "Le festival se déroule au pied des pistes de Métabief, sur la Place Xavier Authier, offrant un panorama exceptionnel sur le Mont d'Or. Deux scènes accueillent les concerts, et un espace camping est disponible pour les festivaliers.",
                    "Retour sur l'édition 2024: ",
                    "L'édition précédente s'est tenue du 26 au 28 juillet 2024 et a rassemblé près de 12 000 festivaliers. La programmation comprenait des artistes tels que MC Solaar, Matmatah, Naâman, Asian Dub Foundation, Pierre de Maere, KO KO MO, Yuston XIII, et Manudigital. Le festival a été salué pour son ambiance conviviale et sa diversité musicale."
                ]}
                listTitle="Dates et programmation"
                listItems={[
                    "Vendredi 1ᵉʳ août: ",
                    "Hatik, Les Ogres de Barback & La Rue Kétanou, Hilight Tribe, Jewly, Ojos, Bonne Nuit​",
                    "Samedi 2 août :",
                    "Deluxe, Julien Granel, Saïan Supa Celebration, 2097, Bandit Bandit, Valérie Ekoumé​I",
                    "Dimanche 3 août : ",
                    "Polo & Pan, Adé, Solann, Jahneration, Bleu Berline"
                ]}
            />              
            {/*
            <Calendrier
                events={[
                    "Chaque année",

                ]}
            />*/}
            <InformationsPratiques
                sectionTitle="Information"
                data={infoEvent_.FestivalDeLaPaille}
            />
            
            <TarifsSection  
                prices={festivalDeLaPaille}
            />

            
        </div>
    )
}

export default FestivalDeLaPaille
