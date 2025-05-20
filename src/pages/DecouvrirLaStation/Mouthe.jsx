import React from 'react'
import { chauxNevue, mouthe } from '../../data/hotelsImg';
import HotelDetails from '../../component/hebergements/HotelDetails/HotelDetails';
import Description from '../../component/events/Description';
import Gallery from '../../component/hebergements/HotelDetails/Gallery';
import LocationSection from '../../component/LocationSection/LocationSection';



const Mouthe= ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/mouthe/11.webp"
                imageSrc2="/images/mouthe/22.webp"
                imageSrc3="/images/mouthe/33.webp"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="Mouthe"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/decouvrir"
                val = {false}
                open = {true}
                address={{
                    label: "Mouthe",
                    details: ' Mouthe 25240',
                }}
                phone=""
                email=""
                website="https://www.destination-haut-doubs.com/val-de-mouthe.html"
            />
            <Description
                introText="Frontalier avec la Suisse, le Val de Mouthe est un vaste territoire qui englobe un total de 13 villages authentiques du Haut-Doubs. C'est une destination idéale pour une escapade, en hiver comme en été."
                paragraphs={[
                  "Située dans le département du Doubs, la petite ville de Mouthe est surnommée 'la petite Sibérie Française' en raison de ses hivers rigoureux et enneigés.Le 13 janvier 1968, la température à Mouthe est descendue exactement à -36.7 C°. Quelques années plus tard, le 17 janvier 1985, ce village a battu son propre record avec une température de -41,2°C. C'est ainsi que Mouthe a acquis la réputation du village le plus froid de France. Pour les plus courageux, un dipôme de resistance au froid est offert sur demande lors de votre passage au bureau d'information de Mouthe ! ",
                  "En été comme en hiver, vous pouvez pratiquer une multitude d'activités pour profiter des grands espaces vert, de la montagne et de la fôret.  Randonnée, VTT, raquette, ski nordique ou ski alpin, tant d'activité à (re)découvrir tout au long de l'année dans le Val de Mouthe. Avec sa tranquillité et sa beauté naturelle, c'est une destination idéale pour ceux qui cherchent à s'éloigner de la vie trépidante de la ville et à se ressourcer dans un environnement paisible et préservé.",
                  "C'est à Mouthe que se cache la source du Doubs. Accessible toute l'année à pied, vous pouvez vous rendre sur ce site remarquable et voir de vos propres yeux l'eau jaillir d'entre les roches. Ce lieu au coeur d'un écrin naturel est idéal pour se ressourcer. La source du Doubs donne naissance à une rivière faisant plus de 430 km de long. La température de l'eau est voisine de 7°C toute l'année.",
                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={mouthe} maxItems={5} />

            <LocationSection 
                    lat={46.70890328199061} 
                    lng={6.1912387118008}
                    title="Mouthe"
                    address="Mouthe 25240"
            />
        </div>
    )
}

export default Mouthe