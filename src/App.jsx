import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Subs from "./components/form";
import CaraKerja from "./components/CaraKerja";
import background from "./assets/images/bg.jpg";
import Testimonials from "./components/Testimonials";
import css from "./App";
import PricingSection from "./components/PricingSection";
import TeamProfiles from "./components/teamProfiles";
import DoctorConsultation from "./components/DrConsultant";
import WhyEatHealthy from "./components/WhyEatHealthy";

const App = () => {
  return (
    <>
      {/* Bagian dengan background dan overlay */}
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay gelap agar teks lebih terbaca */}
        <div className="absolute inset-0 bg-white opacity-10 z-0" />

        {/* Konten utama (Navbar & Header) */}
        <div className="relative z-10">
          <Navbar />
          <Header />
        </div>
      </div>

      {/* About berada di luar div background, jadi tidak terkena background/overlay */}
      <About />
      <TeamProfiles />
      <Menu />
      <CaraKerja />
      <PricingSection />
      <Subs />
      <WhyEatHealthy />
      <DoctorConsultation />

      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
