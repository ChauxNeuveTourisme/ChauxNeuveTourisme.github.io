import React from 'react'
import PricingTable from '../../../../component/ForfaitsTable'
import { tarifsEquipagesAdam, tarifsParcPolaire, tarifsPrePoncet } from '../../../../data/tarifsData'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function ParcPolaire() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/LesAnimaux/parcPolaire/494480936_1082132310617709_7756057682714736617_n.jpg"
                imageSrc2="/images/EnEte/LesAnimaux/parcPolaire/482253985_1038009711696636_1305011504542940417_n.jpg"
                imageSrc3="/images/EnEte/LesAnimaux/parcPolaire/482217567_1038009808363293_591486391767719482_n.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Parc Polaire"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Cernois Veuillet et les Fo, 25240 Chaux-Neuve',
                }}
                phone="03 81 69 20 20"
                email="contact@parcpolaire.com"
                website="http://www.parcpolaire.com/"
            />
            <Description
                introText="Situé au cœur de la montagne du Jura, dans le département du Doubs, le Parc Polaire se trouve dans le Val de Mouthe.
                    Ancienne ferme d’alpage à 1200 mètres d’altitude dans la forêt du Risoux, la sérénité du site surprend le visiteur. La cohabitation de nombreuses espèces sauvages différentes dans un vaste parc d’une dizaine d’hectares ne laisse pas indifférent."
                paragraphs={[
                    "",


                ]}
                listTitle="La petite histoire du parc : "
                listItems={[
                    "Une vie hors du temps, 14 ans sans électricité ni eau courante !",
                    "En 1985, Claude et Gilles MALLOIRE prennent le grand virage… tout bascule… C’est pour vivre avec leurs 3 premiers chiens du Groenland qu’ils quittent Besançon, la capitale Franc-comtoise, pour s’installer dans une ferme d’alpage dans le Haut Doubs, sans eau courante ni électricité pendant 14 années !",
                    "Dans cet espace naturel isolé de toute habitation, ils choisissent d’expérimenter « la vie d’une meute ». Pas de chiens attachés dans leur parc, une semi liberté leur donne tout loisir de s’exprimer hiérarchiquement. Claude et Gilles se consacrent totalement à cette meute où la vie de celle-ci devient leur quotidien. Pendant 15 ans, ils conduisent également des attelages en hors-piste lors de raids. L’observation et le respect pour l’organisation sociale de leurs chiens apportent une complète connaissance de cette vie proche de celle du loup. Cette vie en milieu naturel entraîne le couple MALLOIRE à prendre position pour la défense de la faune sauvage. Aujourd’hui, ils travaillent sur le développement d’une réserve animalière où l’homme et l’animal se rencontreront.",
                ]}
            />
            <PricingTable
                title="Tarifs  – Enfants & Adultes"
                description="Gratuit moins de 4 ans"
                data={tarifsParcPolaire}
            />

            <LocationSection 
                    lat={46.65289507673444} 
                    lng={6.1441340280022985}
                    title="Parc Polaire"
                    address="Cernois Veuillet et les Fo, 25240 Chaux-Neuve"
            />
            
        </div>
    )
}

export default ParcPolaire