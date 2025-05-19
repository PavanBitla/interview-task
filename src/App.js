import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import OurStoryPage from "./components/OurStoryPage";
import PricingPage from "./components/PricingPage"
import ContactPage from "./components/ContactPage";
import AboutUs from "./components/AboutUs";
import SellOn from "./components/SellOn";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Our-story" element={<OurStoryPage />} />
        <Route path="/pricing" element={<PricingPage />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
         <Route path="/Sellon" element={<SellOn />} />
        <Route path="/Contact" element={<ContactPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
