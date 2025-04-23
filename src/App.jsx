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
import Hebergements from "./pages/séjourner/hébergements/Hebergements";
import ServicesDeSante from "./pages/séjourner/ServicesDeSanté/ServicesDeSante";
import Commerces from "./pages/séjourner/commerces/Commerces";
import Restauration from "./pages/séjourner/restauration/Restauration";
import Mentions from "./pages/Mentions";
import Donnees from "./pages/Donnees";
import Conditions from "./pages/Conditions";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Decouvrir />} />
          <Route path="/decouvrir" element={<Decouvrir />} />
          <Route path="/hebergements" element={<Hebergements />} />
          <Route path="/restauration" element={<Restauration />} />
          <Route path="/commerces" element={<Commerces />} />
          <Route path="/services-de-sante" element={<ServicesDeSante/>} />
          <Route path="//hiver" element={<Hiver/>}/>
          <Route path="/ete" element={<Ete/>} /> 
          <Route path="/patrimone" element={<Patrimone />} /> 
          <Route path="/gastronomie" element={<Gastronomie />} /> 



          <Route path="/evenements" element={<Evenements />} />
          <Route path="/eventsPage" element={<EvenetPage />} />

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
