import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import dataTab from "../src/data.json";
import PageComponent from "../src/components/PageComponent";
import Index from "../src/pages/Index";
import About from "../src/pages/About";
import NotFound from "../src/components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a-propos" element={<About />} />

        <Route path="/logement/:id" element={<PageComponent data={dataTab} />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;