import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CosyAppartment from "./pages/CosyAppartment";
import StMartinLogement from "./pages/StMartinLogement";
import ChaumontStudio from "./pages/ChaumontStudio";
import Logement11 from "./pages/Logement11";
import StandingAppartment from "./pages/StandingAppartment";
import ArtistStudio from "./pages/ArtistStudio";
import NotFound from "./components/NotFound";
import CheapStudio from "./pages/CheapStudio";
import EiffelAppartment from "./pages/EiffelAppartment";
import FamilyLogement from "./pages/FamilyLogement";
import ModernParcLogement from "./pages/ModernParcLogement";
import MarshesStudio from "./pages/MarshesStudio";
import RepublicStudio from "./pages/RepublicStudio";
import ForestBungalow from "./pages/ForestBungalow";
import BigHouse from "./pages/BigHouse";
import Vesinet from "./pages/Vesinet";
import DefenseLoft from "./pages/DefenseLoft";
import CharmingAptParis from "./pages/CharmingAptParis";
import CheapParis20 from "./pages/CheapParis20";
import CharmingStudio from "./pages/CharmingStudio";
import Rivoli from "./pages/Rivoli";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/Appartement-cosy" element={<CosyAppartment />} />
      <Route path="/Magnifique-appartement-proche-Canal-Saint-Martin" element={<StMartinLogement />} />
      <Route path="/Studio-de-charme-Buttes-Chaumont" element={<ChaumontStudio />} />
      <Route path="/Nid-douillet-au-coeur-du-11ème" element={<Logement11 />} />
      <Route path="/Appartement-de-standing-10e" element={<StandingAppartment />} />
      <Route path="/Studio-d'artiste" element={<ArtistStudio />} />
      <Route path="/Cheap-Studio-18ème" element={<CheapStudio />} />
      <Route path="/Superbe-appartement-proche-Tour-Eiffel" element={<EiffelAppartment />} />
      <Route path="/Suite-familiale" element={<FamilyLogement />} />
      <Route path="/Appartement-moderne-sur-parc" element={<ModernParcLogement />} />
      <Route path="/Charmant-Studio-Marais" element={<MarshesStudio />} />
      <Route path="/Studio-fonctionnel-République" element={<RepublicStudio />} />
      <Route path="/Bungalow-dans-la-forêt" element={<ForestBungalow />} />
      <Route path="/Grande-Maison-proche-banlieue" element={<BigHouse />} />
      <Route path="/Maison-T5-Le-Vésinet" element={<Vesinet />} />
      <Route path="/Loft-de-Luxe-à-la-Défense" element={<DefenseLoft />} />
      <Route path="/Charmant-apt-aux-portes-de-Paris" element={<CharmingAptParis />} />
      <Route path="/Cheap-Chambre-Paris-20" element={<CheapParis20 />} />
      <Route path="/Charmant-studio" element={<CharmingStudio />} />
      <Route path="/Magnifique-appartement-Rivoli" element={<Rivoli />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  );
};

export default App;