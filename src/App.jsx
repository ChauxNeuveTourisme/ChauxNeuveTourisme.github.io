import React from "react";
import { Routes, Route } from "react-router-dom";
import Decouvrir from "./pages/Decouvrir";
import Evenements from "./pages/evenements";
import Footer from "./component/footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import NewsLetterSection from "./component/NewsLetter";
import FAQ from "./pages/Faqs";
import EvenetPage from "./pages/events/Eventpage"
import Hiver from "./pages/activites/hiver/Hiver";
import Ete from "./pages/activites/été/Ete";
import Patrimone from "./pages/activites/patrimone/Patrimone";
import Gastronomie from "./pages/activites/gastronomie/Gastronomie";
import Hebergements from "./pages/séjourner/hebergements/Hebergements";
import ServicesDeSante from "./pages/séjourner/ServicesDeSanté/ServicesDeSante";
import Commerces from "./pages/séjourner/commerces/Commerces";
import Restauration from "./pages/séjourner/restauration/Restauration";
import Mentions from "./pages/Mentions";
import Donnees from "./pages/Donnees";
import Conditions from "./pages/Conditions";
import AubergeDuGrandGit from "./pages/séjourner/restauration/AubergeDuGrandGit";
import CHEZLIADET from "./pages/séjourner/restauration/CHEZLIADET";
import LeChaletDeLaSource from "./pages/séjourner/restauration/LeChaletDeLaSource";
import LesClochettesDuRisouxt from "./pages/séjourner/restauration/LesClochettesDuRisoux";
import LesPaturages from "./pages/séjourner/restauration/LesPaturages";
import RestaurantLaTableDuCébriot from "./pages/séjourner/restauration/RestaurantLaTableDuCébriot";
import ScrollToTop from "./component/ScrollToTop";
import CoupeEuropeChauxNeuve from "./pages/events/Coupe-Europe-Chaux-Neuve";
import TrailDuMont from "./pages/events/TrailDuMont";
import TourDeFrance from "./pages/events/TourDeFrance";
import FestivalDeLaPaille from "./pages/events/FestivalDeLaPaille";
import SummerGrandPrix from "./pages/events/SummerGrandPrix";
import LocationDeSki from "./pages/séjourner/commerces/LocationDeSki";
import MaximarcheFoncineLeHaut from "./pages/séjourner/commerces/MaximarcheFoncineLeHaut";
import LaBelFoncine from "./pages/séjourner/commerces/LaBelFoncine";
import BoulangerieLeEpicurien from "./pages/séjourner/commerces/BoulangerieLeEpicurien";
import SupermarcheBi1 from "./pages/séjourner/commerces/SupermarcheBi1";
import EpicerieChezChantal from "./pages/séjourner/commerces/EpicerieChezChantal";
import Saucisse from "./pages/activites/gastronomie/Saucisse";
import Fromages from "./pages/activites/gastronomie/Fromages";
import Distilleries from "./pages/activites/gastronomie/Distilleries";
import EgliseSaintJacques from "./pages/activites/patrimone/EgliseSaintJacques /EgliseSaintJacques";
import LesLegendes from "./pages/activites/patrimone/LesLegendes/LesLegendes";
import LesAlpages from "./pages/activites/patrimone/LesAlpages/LesAlpages";
import Chateaux from "./pages/activites/patrimone/Chateaux/Chateaux";
import MaisonDeLaReserve from "./pages/activites/patrimone/MaisonDeLaReserve/MaisonDeLaReserve";
import EcomuseeMaison from "./pages/activites/patrimone/EcomuseeMaison/EcomuseeMaison ";
import RefugesCabanesListingPage from "./pages/séjourner/hebergements/refugesCabanes";
import HotelListingPage from "./pages/séjourner/hebergements/hotels";
import GitesListingPage from "./pages/séjourner/hebergements/gites";
import HotelLesTremplins from "./pages/séjourner/hebergements/hotelsPage/HotelLesTremplins";
import HotelRestaurantLeLac from "./pages/séjourner/hebergements/hotelsPage/HotelRestaurantLeLac";
import HotelAubergeDuGrandGit from "./pages/séjourner/hebergements/hotelsPage/HotelAubergeDuGrandGit";
import HotelAtelierDeDonat from "./pages/séjourner/hebergements/hotelsPage/hotelAtelierDeDonat";
import HotelRestaurantLeRisoux from "./pages/séjourner/hebergements/hotelsPage/HotelRestaurantLeRisoux";
import LaRedouteLesRousses from "./pages/séjourner/hebergements/hotelsPage/LaRedouteLesRousses";
import HerveLeChatelet from "./pages/séjourner/hebergements/gitesPages/HerveLeChatelet";
import LaBatieDessous from "./pages/séjourner/hebergements/gitesPages/LaBatieDessous";
import ChezLiadet from "./pages/séjourner/hebergements/gitesPages/ChezLiadet";
import LogeDuTremplin from "./pages/séjourner/hebergements/gitesPages/LogeDuTremplin";
import LaMaisonDuMontagnon from "./pages/séjourner/hebergements/gitesPages/LaMaisonDuMontagnon";
import LesEterlous from "./pages/séjourner/hebergements/gitesPages/LesEterlous";
import CampingDeLaSource from "./pages/séjourner/hebergements/refugesCabanesPages/CampingDeLaSource";
import LesEcrins from "./pages/séjourner/hebergements/refugesCabanesPages/LesEcrins";
import RoulotteDeLaJaique from "./pages/séjourner/hebergements/refugesCabanesPages/RoulotteDeLaJaique";


const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Decouvrir />} />
          <Route path="/decouvrir" element={<Decouvrir />} />
          {/*   Hebergements  */}
          <Route path="/hebergements" element={<Hebergements />} />

          {/*   Gites */}
          <Route path="/gites" element={<GitesListingPage />} />
          <Route path="/herveLeChatelet" element={<HerveLeChatelet />} />
          <Route path="/laBatieDessous" element={<LaBatieDessous/>} />
          <Route path="/chezLiadet" element={<ChezLiadet />} />
          <Route path="/logeDuTremplin" element={<LogeDuTremplin />} />
          <Route path="/laMaisonDuMontagnon" element={<LaMaisonDuMontagnon />} />
          <Route path="/lesEterlous" element={<LesEterlous />} />

          {/*   Hotel */}
          <Route path="/hotels" element={<HotelListingPage />} />
          <Route path="/hotelLesTremplins" element={<HotelLesTremplins />} />
          <Route path="/hotelRestaurantLeLac" element={<HotelRestaurantLeLac />} />
          <Route path="/hotelAubergeDuGrandGit" element={<HotelAubergeDuGrandGit />} />
          <Route path="/hotelAtelierDeDonat" element={<HotelAtelierDeDonat />} />
          <Route path="/hotelRestaurantLeRisoux" element={<HotelRestaurantLeRisoux />} />
          <Route path="/laRedouteLesRousses" element={<LaRedouteLesRousses />} />
          
          {/* Refuges et Cabanes */}
          <Route path="/refugesCabanes" element={<RefugesCabanesListingPage/>} />
          <Route path="/roulotteDeLaJaique" element={<RoulotteDeLaJaique/>} />
          <Route path="/campingDeLaSource" element={<CampingDeLaSource/>} />
          <Route path="/lesEcrins" element={<LesEcrins/>} />
          

          {/*   Restauration  */}
          <Route path="/restauration" element={<Restauration />} />
          <Route path="/aubergeDuGrandGit" element={<AubergeDuGrandGit />} />
          <Route path="/cHEZLIADET" element={<CHEZLIADET />} />
          <Route path="/leChaletDeLaSource" element={<LeChaletDeLaSource />} />
          <Route path="/lesClochettesDuRisoux" element={<LesClochettesDuRisouxt />} />
          <Route path="/lesPaturages" element={<LesPaturages/>} />
          <Route path="/restaurantLaTableDuCébriot" element={<RestaurantLaTableDuCébriot/>} />

          {/*   Commerces */}
          <Route path="/commerces" element={<Commerces />} />
          <Route path="/locationDeSki" element={<LocationDeSki />} />
          <Route path="/maximarcheFoncineLeHaut" element={<MaximarcheFoncineLeHaut />} />
          <Route path="/laBelFoncine" element={<LaBelFoncine />} />
          <Route path="/boulangerieLeEpicurien" element={<BoulangerieLeEpicurien />} />
          <Route path="/supermarcheBi1" element={<SupermarcheBi1 />} />
          <Route path="/epicerieChezChantal" element={<EpicerieChezChantal />} />

          {/*   services de Sante  */}
          <Route path="/services-de-sante" element={<ServicesDeSante/>} />

          {/*   Hiver */}
          <Route path="/hiver" element={<Hiver/>}/>

          {/*   Ete  */}
          <Route path="/ete" element={<Ete/>} /> 

          {/*   Patrimone  */}
          <Route path="/patrimone" element={<Patrimone />} />
          <Route path="/maisonDeLaReserve" element={<MaisonDeLaReserve />} />
          <Route path="/ecomuseeMaison" element={<EcomuseeMaison />} />
          <Route path="/chateaux" element={<Chateaux />} />
          <Route path="/lesAlpages" element={<LesAlpages />} />
          <Route path="/lesLegendes" element={<LesLegendes />} />
          <Route path="/egliseSaintJacques" element={<EgliseSaintJacques />} />

          {/* Gastronomie */}
          <Route path="/gastronomie" element={<Gastronomie />} />
          <Route path="/saucisse" element={<Saucisse />} /> 
          <Route path="/fromages" element={<Fromages />} /> 
          <Route path="/distilleries" element={<Distilleries />} /> 
          

          {/*  Evenements */}
          <Route path="/evenements" element={<Evenements />} />
          <Route path="/eventsPage" element={<EvenetPage />} />
          <Route path="/coupeEuropeChauxNeuve" element={<CoupeEuropeChauxNeuve />} />
          <Route path="/summerGrandPrix" element={<SummerGrandPrix/>} />
          <Route path="/festivalDeLaPaille" element={<FestivalDeLaPaille />} />
          <Route path="/trailDuMont" element={<TrailDuMont />} />
          <Route path="/tourDeFrance" element={<TourDeFrance />} />
          {/* Footer */}
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/donnees" element={<Donnees />} />
          <Route path="/conditions" element={<Conditions/>} />
        
        </Routes>
      </main>
      <NewsLetterSection/>
      <Footer />
    </>
  );
};

export default App;
