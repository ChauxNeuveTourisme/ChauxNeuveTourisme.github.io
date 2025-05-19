import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { chezLiadet } from '../../../../data/gitesImg';



const ChezLiadet = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/ChezLiadet/149326072.jpg"
                imageSrc2="/images/hebergements/Gites/ChezLiadet/149326091.jpg"
                imageSrc3="/images/hebergements/Gites/ChezLiadet/150429121_1388092881.webp"
                imageAlt="Mouthe"
                caption="Mouthe"
                title="Chez Liadet"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Mouthe",
                    details: 'Chez Greset et Chez Liadet, 25240 Mouthe',
                }}
                phone="03 81 39 99 58"
                email="chez.liadet@orange.fr"
                website="http://www.chezliadet.com/"
            />
            <Description
                introText="Chez Liadet ( 1080 m) est situé à 3 km de Mouthe en France.
                    Véritable porte d'entrée des alpages l'été, c'est aussi un départ des pistes de ski de fond, incontournable l'hiver. "
                paragraphs={[
                    "Attention : Les animaux ne sont pas autorisés dans les chalets suivants : Alpage, Toupin, Loge, et Remise. Nous les acceptons seulement dans les petits chalets 4/6 pers, à raison d'un seul chien et sur demande. ",


                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            <Gallery images={chezLiadet} maxItems={5} />

            <LocationSection 
                    lat={46.68097072862636} 
                    lng={6.186359824580063}
                    title="Chez Liadet"
                    address="Chez Greset et Chez Liadet, 25240 Mouthe"
            />
        </div>
    )
}
export default ChezLiadet