import React from "react";
import HeroPages from "../../../component/hero/HeroPages";
import CardGrid from "../../../component/pushCard";
import { GastronomieData } from "../../../data/restaurationCard";

const Gastronomie = () => {
    return (
        <div>
            <HeroPages
                titleText="Produits locaux, terroir"
                titleStyle="text-white"
                img="/images/gastronomie/1920x1440_haut-doubs-le-phare-bar-terrasse-produit-terroir-salaison-fromages-celine-guichard-664.jpg"
            />
            <CardGrid 
                sectionTitle =""
                cardsData={GastronomieData.Card}
            />
        </div>
    );
};

export default Gastronomie