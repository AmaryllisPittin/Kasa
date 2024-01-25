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
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  );
};

export default App;