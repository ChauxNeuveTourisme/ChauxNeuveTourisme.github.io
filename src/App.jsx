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
import Gites from "./pages/séjourner/hebergements/gites";
import Hotels from "./pages/séjourner/hebergements/hotels";
import RefugesCabanes from "./pages/séjourner/hebergements/refugesCabanes";
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


const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Decouvrir />} />
          <Route path="/decouvrir" element={<Decouvrir />} />
          <Route path="/hebergements" element={<Hebergements />} />
          <Route path="/gites" element={<Gites />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/refugesCabanes" element={<RefugesCabanes/>} />

          <Route path="/restauration" element={<Restauration />} />
          <Route path="/aubergeDuGrandGit" element={<AubergeDuGrandGit />} />
          <Route path="/cHEZLIADET" element={<CHEZLIADET />} />
          <Route path="/leChaletDeLaSource" element={<LeChaletDeLaSource />} />
          <Route path="/lesClochettesDuRisoux" element={<LesClochettesDuRisouxt />} />
          <Route path="/lesPaturages" element={<LesPaturages/>} />
          <Route path="/restaurantLaTableDuCébriot" element={<RestaurantLaTableDuCébriot/>} />

          
          <Route path="/commerces" element={<Commerces />} />
          <Route path="/locationDeSki" element={<LocationDeSki />} />
          <Route path="/maximarcheFoncineLeHaut" element={<MaximarcheFoncineLeHaut />} />
          <Route path="/laBelFoncine" element={<LaBelFoncine />} />
          <Route path="/boulangerieLeEpicurien" element={<BoulangerieLeEpicurien />} />
          <Route path="/supermarcheBi1" element={<SupermarcheBi1 />} />
          <Route path="/epicerieChezChantal" element={<EpicerieChezChantal />} />
          
          <Route path="/services-de-sante" element={<ServicesDeSante/>} />
          <Route path="/hiver" element={<Hiver/>}/>
          <Route path="/ete" element={<Ete/>} /> 
          <Route path="/patrimone" element={<Patrimone />} /> 
          <Route path="/gastronomie" element={<Gastronomie />} />
          <Route path="/saucisse" element={<Saucisse />} /> 
          <Route path="/fromages" element={<Fromages />} /> 
          <Route path="/distilleries" element={<Distilleries />} /> 
          


          <Route path="/evenements" element={<Evenements />} />
          <Route path="/eventsPage" element={<EvenetPage />} />
          <Route path="/coupeEuropeChauxNeuve" element={<CoupeEuropeChauxNeuve />} />
          <Route path="/summerGrandPrix" element={<SummerGrandPrix/>} />
          <Route path="/festivalDeLaPaille" element={<FestivalDeLaPaille />} />
          <Route path="/trailDuMont" element={<TrailDuMont />} />
          <Route path="/tourDeFrance" element={<TourDeFrance />} />

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
