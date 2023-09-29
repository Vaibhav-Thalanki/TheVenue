import React from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header.js";
import Footer from "./components/header-footer/Footer";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
        
      </Element >
      <Element name="venuenfo">
      <VenueNFO/>
      </Element>
      <Element name="highlights">
        <Highlights/>
      </Element>
      <Element name="pricing">
        <Pricing/>
      </Element >
      <Element name="location">
        <Location/>
      </Element >
      <Footer />
    </div>
  );
};

export default App;
