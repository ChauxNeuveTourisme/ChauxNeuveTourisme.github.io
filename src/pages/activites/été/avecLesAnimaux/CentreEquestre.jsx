import React from 'react'
import HotelDetails from '../../../../component/hebergements/HotelDetails/HotelDetails'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'

function CentreEquestre() {
    return (
        <div>
            <HotelDetails 
                imageSrc1="/images/EnEte/LesAnimaux/equestreChauxNeuve/raid5-800x600.webp"
                imageSrc2="/images/EnEte/LesAnimaux/equestreChauxNeuve/photo-pascale-047-800x600.webp"
                imageSrc3="/images/EnEte/LesAnimaux/equestreChauxNeuve/equitation044-800x600.webp"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Centre équestre - Les Cerclevaux - CHEVAL PASSION JURA"
                dates={[]}
                allDatesLink=""
                backLink = "/ete"
                val = {false}
                open = {true}
                address={{
                    label: "Chaux-Neuve",
                    details: 'Communal des Cerclevaux, 25240 Chaux-Neuve',
                }}
                phone="03 39 33 00 54"
                email="contact@cheval-passion-jura.fr"
                website="https://cheval-passion-jura.fr/"
            />
            <Description
                introText="Nous proposons des randonnées dans les trois structures avec malgré tout une plus forte activité à la ferme équestre “Les Bâties” et aux Écuries du Mont d’Or. Ces randonnées peuvent avoir lieu tout au long de l’année."
                paragraphs={[
                    "",


                ]}
                listTitle=""
                listItems={[
                ]}
            />

            <LocationSection 
                    lat={46.686200391849184} 
                    lng={6.137082326432101}
                    title="Centre équestre - Les Cerclevaux - CHEVAL PASSION JURA"
                    address="Communal des Cerclevaux, 25240 Chaux-Neuve"
            />
            
        </div>
    )
}


export default CentreEquestre