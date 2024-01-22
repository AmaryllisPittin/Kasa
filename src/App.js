import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Router>
  );
};

export default App;