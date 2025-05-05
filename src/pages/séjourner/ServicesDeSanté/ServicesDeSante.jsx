import React from 'react'
import HeroPages from '../../../component/hero/HeroPages'
import SSante from '../../../component/ServicesDeSante/SSante'

function ServicesDeSante() {
    return (
        <div >
            <HeroPages
                titleText="Services De Santé"
                titleStyle="text-black"
                img="/images/https___static.apidae-tourisme.com_filestore_objets-touristiques_images_85_247_16119637.jpg"
            />
            
            <SSante
                image1="/images/medecin_g_instruments.png"
                icon1="stethoscope"
                name1="Dr. GRENARD CATHERINE, Médecin généraliste"
                contact1={{ address: "11 RUE CART BROUMET 25240 MOUTHE", phone: "03 81 39 29 29", email: "", website: "" }}

                image2="/images/medecin_g_instruments.png"
                icon2="stethoscope" 
                name2=  "Dr. GUINEBRETIERE ELORA , Médecin généraliste"           
                contact2={{ address: "CABINET VALENTIN COURTEILLE 7 RUE CART BROUMET 25240 MOUTHE", phone: "03 81 69 86 10", email: "", website: "" }}

                image3="/images/medecin_g_instruments.png"
                icon3="stethoscope" 
                name3=  "Dr. COURTEILLE VALENTIN , Médecin généraliste"           
                contact3={{ address: "CABINET VALENTIN COURTEILLE 7 RUE CART BROUMET 25240 MOUTHE", phone: "03 81 69 86 10", email: "", website: "" }}

            />
            <SSante
                image1="/images/phar612x612.jpg"
                icon1="pharmacy" // 'pharmacy' for pharmacie
                name1=" Pharmacie de la Source"
                contact1={{ address: "2 Grande Rue 25240 MOUTHE", phone: "03 81 69 21 23", email: "pharmaciedelasource25@outlook.com", website: "https://pharmacies.pharm-upp.fr/1865-pharmacie-de-la-source" }}    
                image2="/images/phar612x612.jpg"
                icon2="pharmacy" 
                name2=  "Pharmacie des Lavaux"           //"Pharmacie"
                contact2={{ address: "2 rue des lavaux 25300 pontarlier", phone: "03 81 39 05 48", email: "phiedeslavaux@gmail.com", website: "https://pharmacie-des-lavaux.com/" }}    
                image3="/images/phar612x612.jpg"
                icon3="pharmacy" // 'pharmacy' for pharmacie
                name3=  "Pharmacie Alixant "           //"Pharmacie Centrale"
                contact3={{ address: "12 Grande Rue 39150 Chaux des crotenay", phone: "03 84 51 54 89", email: "", website: "" }}

            />



        </div>
    )
}

export default ServicesDeSante