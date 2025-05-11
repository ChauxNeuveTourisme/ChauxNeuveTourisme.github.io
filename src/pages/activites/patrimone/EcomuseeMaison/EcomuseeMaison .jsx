import React from 'react'
import EventDetail from '../../../../component/events/HeroEventsPages'
import Description from '../../../../component/events/Description'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import CustomCalendarWithHoraires from '../../../../component/commerces/Horaires'
import { CalendarWithHorairesEcomuseeMaisonMichaud } from '../../../../data/PatrimoineData'
import InfoBlock from '../../../../component/InfoBlock'

function EcomuseeMaison () {
  return (
    <div className=''>
      <EventDetail
        imageSrc="/images/patrimone/EcomuseeMaison/IMG-1236-2.jpg"
        imageAlt="Chapelle-des-Bois"
        caption="Chapelle-des-Bois"
        title="Ecomusée - Maison Michaud"
        dates={['']}
        allDatesLink=""
        backLabel = "Retour au Patrimoine" 
        backLink = "/patrimone" 
        address={{
            label: 'Chapelle-des-Bois',
            details: "26 Combe des Cives, 25240 Chapelle-des-Bois",
        }}
        phone="03 81 69 27 42"
        email="ecomusee.jura@gmail.com"
        website="http://ecomusee-jura.fr/"
      />
      <Description
        introText="Située à Chapelle-des-Bois, dans le massif du Jura, l'Ecomusée Maison Michaud vous invite à remonter le temps pour découvrir la vie rurale d’autrefois. Ce site patrimonial exceptionnel, classé Monument Historique, est une ancienne ferme typique du Haut-Doubs datant du XVIIe siècle."
        paragraphs={[
        ]}
        listTitle=""
        listItems={[
        ]}
      />

      <InfoBlock
        title="Une immersion dans la vie paysanne d’autrefois:"
        textBefore="Lors de votre visite, plongez dans l’univers des montagnes du Jura : leur quotidien, leur savoir-faire, leur ingéniosité face aux rigueurs de l’hiver. Découvrez la fameuse tuyé, cheminée traditionnelle du Haut-Doubs, et les pièces authentiques de cette maison conservée dans son état d’origine.
        
        Les guides passionnés vous racontent l’histoire de la ferme et de ses habitants, vous expliquant comment les familles vivaient en quasi-autarcie, grâce à l’agriculture, l’élevage, la fabrication du fromage et les métiers artisanaux."
        list={[
        ]}
        textAfter=""
      />

      <InfoBlock
        title="Des ateliers vivants et des animations pour toute la famille"
        textBefore="Tout au long de l’année, la Maison Michaud propose des ateliers pédagogiques et interactifs, parfaits pour les familles, les groupes scolaires ou les curieux de tous âges :"
        list={[
          "Atelier pain : fabriquez votre propre pain au levain cuit dans le four traditionnel.",
          "Animations autour des plantes médicinales, du bois ou de la vie en montagne."
        ]}
        textAfter="Ces ateliers permettent de vivre une expérience immersive et sensorielle, en lien avec le patrimoine vivant du Jura."
      />

      <InfoBlock
        title="Un site au cœur de la nature jurassienne"
        textBefore="Située à plus de 1000 mètres d’altitude, la Maison Michaud offre un cadre naturel exceptionnel, au cœur du Parc naturel régional du Haut-Jura. Profitez-en pour découvrir les paysages typiques des Hautes-Combes, entre forêts, tourbières et pâturages, à pied ou en raquettes l’hiver."
        list={[
        ]}
        textAfter=""
      />

      <CustomCalendarWithHoraires schedules={CalendarWithHorairesEcomuseeMaisonMichaud}/>

      <LocationSection 
        lat={46.629421935828496} 
        lng={6.140715011085705}
        title="Ecomusée - Maison Michaud"
        address="26 Combe des Cives, 25240 Chapelle-des-Bois"
      />
    </div>
  )
}

export default EcomuseeMaison 