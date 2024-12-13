import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Hero } from "./components/HeroContainer";
import { HackathonPage } from "./components/RegistrationContainer";
import { Schedule } from "./components/ScheduleContainer";
import { Sponsors } from "./components/SponsorsContainer";
import { FAQContact } from "./components/FAQContainer";
import { Footer } from "./components/FooterContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <HackathonPage />
      <Schedule />
      <Sponsors />
      <FAQContact />
      <Footer />
    </Router>
  );
}

export default App;
