import React from "react";
import "./resources/styles.css";
import Header from "./components/header-footer/Header.js";
import Footer from "./components/header-footer/Footer";
import Featured from "./components/featured";
import VenueNFO from "./components/venueNFO";
import Highlights from "./components/Highlights";

const App = () => {
  return (
    <div className="App">
      <Header />
      <>
        <Featured />
        
      </>
      <>
      <VenueNFO/>
      </>
      <>
        <Highlights/>
      </>
      <div style={{ backgroundColor: "red", height: "800px" }}></div>
      <div style={{ backgroundColor: "blue", height: "800px" }}></div>
      <div style={{ backgroundColor: "green", height: "800px" }}></div>
      <div style={{ backgroundColor: "yellow", height: "800px" }}></div>
      <Footer />
    </div>
  );
};

export default App;
