import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import HebergementsSection from "../../../component/hebergements/HebergementsSection"
import ChauxHebergements from "../../../component/hebergements/chauxHebergements"
import CardGrid from "../../../component/pushCard"
import {cardData }from "../../../data/hebergementsCard"
import FaqSection from '../../../component/hebergements/FaqSection'

function Hebergements() {
    return (
        <div>
            <HeroPages
                titleText="Hébergements"
                titleStyle="text-white"
                img="/images/hebergements/les-hebergements-meaux-marne-ourcq-mellie-jumelle-aspect-ratio-2000-800.jpg"
            />
            <HebergementsSection
                title="À Chaux-Neuve, profitez de la gamme d'hébergement la plus vaste en montagne."
                paragraph="Avec un choix de 45 hôtels, allant de 2 étoiles à palace, Chaux-Neuve vous offre une variété d'options d'hébergement exceptionnelles. Chaque hôtel se distingue par son décor et son ambiance uniques, créant une expérience de séjour personnalisée..."
                linkText="Réservez votre hôtel en ligne"
                linkHref="https://www.airbnb.fr/s/Mairie-de-Chaux~Neuve--Chaux~Neuve/homes?refinement_paths%5B%5D=%2Fhomes&checkin=2025-05-25&checkout=2025-05-31&date_picker_type=calendar&search_type=autocomplete_click&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2025-05-01&monthly_length=3&monthly_end_date=2025-08-01&price_filter_input_type=0&price_filter_num_nights=6&channel=EXPLORE&place_id=ChIJm5fuMMCqjUcRGjT115Q6pHc&acp_id=t-g-ChIJm5fuMMCqjUcRGjT115Q6pHc&source=structured_search_input_header&query=Mairie%20de%20Chaux-Neuve%2C%20Chaux-Neuve&search_mode=regular_search&pagination_search=true&federated_search_session_id=9e271705-ca7f-4410-90dd-c8057ff54139&cursor=eyJzZWN0aW9uX29mZnNldCI6MCwiaXRlbXNfb2Zmc2V0IjozNiwidmVyc2lvbiI6MX0%3D"
            />
            <ChauxHebergements/>
            <CardGrid 
                cardsData={cardData.hebergementsCard}
            />
            <FaqSection faqs={cardData.faqs} />
        </div>
    )
}

export default Hebergements