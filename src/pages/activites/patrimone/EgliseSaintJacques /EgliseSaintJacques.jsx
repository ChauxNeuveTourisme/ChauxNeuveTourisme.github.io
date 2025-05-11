import React from 'react'
import LocationSection from '../../../../component/LocationSection/LocationSection'
import Description from '../../../../component/events/Description'
import EventDetail from '../../../../component/events/HeroEventsPages'

function EgliseSaintJacques() {
  return (
    <div className=''>
      <EventDetail
                imageSrc="/images/patrimone/EgliseSaintJacques/Chaux-Neuve_-_img_44384.jpg"
                imageAlt="Chaux-Neuve"
                caption="Chaux-Neuve"
                title="Église Saint-Jacques de Chaux-Neuve"
                dates={['']}
                allDatesLink=""
                backLabel = "Retour au Patrimoine" // <-- Default if not passed
                backLink = "/patrimone" 
                address={{
                    label: 'Chaux-Neuve',
                    details: "6 Rue de l'Église, 25240 Chaux-Neuve.",
                }}
                phone="03 81 69 22 20"
                email=""
                website=""
            />

            <Description
                introText="L'église Saint Jacques a été construite durant la deuxième moitié du XVème siècle. Après plusieurs agrandissements son architecture définitive daterait de 1684."
                paragraphs={[
                    "Vous pouvez la visiter accompagné d'un guide durant la période estivale. Vous y découvrirez la richesse de l’architecture intérieure dont de nombreux meubles sont classés monuments historiques (6 retables, baptistère, panneaux en bois peints des 2 côtés, chaire, statues de St Pierre en albâtre...).",
                ]}
                listTitle=""
                listItems={[
                  "Cette église de style gothique est inscrite à l'inventaire supplémentaire des monuments historiques."
                ]}
            />  
      
      <LocationSection 
        lat={46.68045708741403} 
        lng={6.13232044187481}
        title="Église Saint-Jacques de Chaux-Neuve"
        address="6 Rue de l'Église, 25240 Chaux-Neuve"
      />
    </div>
  )
}

export default EgliseSaintJacques