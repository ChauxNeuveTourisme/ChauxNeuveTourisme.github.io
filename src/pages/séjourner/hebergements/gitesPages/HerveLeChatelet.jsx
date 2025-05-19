import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import Gallery from '../../../../component/hebergements/HotelDetails/Gallery';
import { ChezHerveLeChatelet } from '../../../../data/gitesImg';



const HerveLeChatelet = ({ ht }) => {
    const hotelLinks = {
        "Chez-Herve-le-Chatelet": "https://www.booking.com/hotel/fr/chez-herve-le-chatelet.fr.html?aid=356931&label=metagha-link-MRFR-hotel-8695216_dev-desktop_los-2_bw-168_dow-Sunday_defdate-0_room-0_gstadt-2_rateid-0_aud-0_gacid-21411112526_mcid-10_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20251102_ppt-_lp-2250_r-5262151436348364585&sid=fd71322fb50bcf36a83a7d4e1fd88554&all_sr_blocks=869521601_365024347_2_33_0&checkin=2025-11-02&checkout=2025-11-04&dest_id=-1435318&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=869521601_365024347_2_33_0&hpos=1&matching_block_id=869521601_365024347_2_33_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=869521601_365024347_2_33_0__17850&srepoch=1747558760&srpvid=d8bd3f31b2650084&type=total&ucfs=1&"
    };

    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/hebergements/Gites/ChezHerveLeChatelet/33.jpg"
                imageSrc2="/images/hebergements/Gites/ChezHerveLeChatelet/479468169.jpg"
                imageSrc3="/images/hebergements/Gites/ChezHerveLeChatelet/479470534.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Chez Hervé le Châtelet"
                dates={[' Quand', 'du 1 au 3 août 2025.']}
                allDatesLink=""
                backLink = "/gites"
                val = {false}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Franche-Comté FR, 27 Grande Rue, 25240 Chaux-Neuve',
                }}
                phone="06 82 06 52 20"
                email=""
                website={hotelLinks["Chez-Herve-le-Chatelet"]}
            />
            <Description
                introText="Proposant une terrasse, l’hébergement Chez Hervé le Châtelet vous accueille à La Chaux Neuve, à respectivement 34 km, 37 km et 38 km de ces lieux d’intérêt : Cascades du Hérisson, Lac des Rousses et Lac de Chalain. Cet hébergement est installé à 24 km de : Lac de Saint-Point. Il comprend un jardin et un parking privé gratuit."
                paragraphs={[
                    "",


                ]}
                listTitle=""
                listItems={[
                    
                ]}
            />
            
            <Gallery images={ChezHerveLeChatelet} maxItems={5} />

            <LocationSection 
                    lat={46.67785473217026} 
                    lng={6.136797624579932}
                    title="Chez Hervé le Châtelet"
                    address="Franche-Comté FR, 27 Grande Rue, 25240 Chaux-Neuve"
            />
        </div>
    )
}


export default HerveLeChatelet