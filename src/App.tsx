import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Support from "./components/Support";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Support />
      <Features />
      <Feedback />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
