import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { logeDuTremplin } from '../../../../data/gitesImg';



const LogeDuTremplin = ({ ht }) => {

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/LaLogeDuTremplin/48329409_1967679613308099_923081552441638912_n.jpg"
                imageSrc2="/images/hebergements/Gites/LaLogeDuTremplin/chambre-2.-061352-1920x0.jpg"
                imageSrc3="/images/hebergements/Gites/LaLogeDuTremplin/espace-detente-1.-054842-1920x0.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="La Loge Du Tremplin"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Vers Chez Huguenin, 25240 Chaux-Neuve',
                }}
                phone="06 40 73 84 90"
                email=""
                website="http://gite-jura-doubs.fr/"
            />
            <Description
                introText="Le gîte de charme est un appartement de 145 m2 situé au premier étage d’une ferme comtoise récemment rénovée avec des matériaux naturels (bois brut, pierre apparente...)"
                paragraphs={[
                    "Après une ballade vivifiante dans les montagne du Jura, vous rentrez au gîte et vous vous réchauffez devant le poêle à bois tout en savourant un délicieux grog. Vous hésitez entre continuer à profiter de la chaleur du feu ou vous diriger vers l'espace détente et son sauna qui vous tend les bras. Vous n'êtes arrivé que depuis le début d'après-midi et vous commencez déjà à décompresser : les vacances commencent bien !  ",
                ]}
                listTitle="Les chambres (8 couchages)"
                listItems={[
                    "1 chambres avec lit double 160x200 + lit 70x190 + rangements",
                    "1 chambre avec lit double 160x200 + lit 70x190 + rangements",
                    "1 chambres avec lit 160x200 + rangements",
                ]}
            />
            <Gallery images={logeDuTremplin} maxItems={5} />

            <LocationSection 
                    lat={46.68517883117279} 
                    lng={6.122407826432068}
                    title="La Loge Du Tremplin"
                    address="Vers Chez Huguenin, 25240 Chaux-Neuve"
            />
        </div>
    )
}
export default LogeDuTremplin