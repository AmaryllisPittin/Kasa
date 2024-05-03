import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import dataTab from "./data.json";
import PageComponent from "./components/PageComponent";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/a-propos" element={<About />} />

        <Route path="/logement/:id" element={<PageComponent data={dataTab} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </Router>
  );
};

export default App;