import React from 'react'
import { chauxNevue } from '../../data/hotelsImg';
import HotelDetails from '../../component/hebergements/HotelDetails/HotelDetails';
import Description from '../../component/events/Description';
import Gallery from '../../component/hebergements/HotelDetails/Gallery';
import LocationSection from '../../component/LocationSection/LocationSection';



const ChauxNevue = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/chaux-neuve/2.jpeg"
                imageSrc2="/images/chaux-neuve/3.webp"
                imageSrc3="/images/chaux-neuve/1.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Chaux-Neuve"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/decouvrir"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: ' 25240 Chaux-Neuve',
                }}
                phone=""
                email=""
                website="https://mickael-rondelli.jimdoweb.com/activites/"
            />
            <Description
                introText="Autant en hiver qu’en été, Chaux-Neuve saura vous proposer des activités pour tous les ages et tous les goûts, le plus dur est de choisir ! Nous avons sélectionné pour vous ci-dessous quelques idées, la liste est bien sure non exhaustive… A vos marques, prêts ?"
                paragraphs={[
                  "Nichés au creux de la Combe des Cives, les équipages Adam’s sera l’endroit idéal pour leur faire découvrir le fonctionnement d ‘une meute de chien de traîneaux, mais aussi pourquoi ne pas partir avec eux pour une balade, hiver ou été. Si vos enfants sont plutôt intéressés par les chevaux, le Centre Equestre des Cerclevaux propose des balades par tous les temps et pour tous les niveaux.",
                  "Mais surtout si vos enfants sont passionnés d’animaux, vous ne pourrez pas louper Le Parc Polaire, et assister lors des visites au nourrissage des nombreuses espèces dans les enclos. Il paraît que le Père Noël y fait même une escale chaque année avant de commencer sa tournée…",
                  "La Visite des Tremplins de saut est également une formidable manière de leur faire découvrir le saut à ski, et les plus téméraires pourront même tenter quelques sauts, été comme hiver!",
                  "Et bien sur en hiver, vous ne pouvez pas venir à Chaux-Neuve sans chausser vos skis ! Initiation ski de fond au site du Pré Poncet, initiation au Biathlon au stade de la Cote Feuillée, et bien sur Ski de descente à la petite station de Chaux-Neuve ou ils pourront profiter des cours de l’ESF, à moins que vous ne souhaitiez seulement faire de la luge ?",
                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={chauxNevue} maxItems={5} />

            <LocationSection 
                    lat={46.67972800841396} 
                    lng={6.133035490993334}
                    title="Chaux-Neuve"
                    address="25240 Chaux-Neuve"
            />
        </div>
    )
}

export default ChauxNevue