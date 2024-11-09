"use client";
import React from "react";
import HeroSection from "../HeroPage";
import Navbar from "../Navbar";
import Codingpage from "../codingpage";
import Footer from "../Footer";
import MoveCardPage from "../Moving-card";

const LandingPage = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <MoveCardPage />
      <Codingpage />
      <Footer />
    </div>
  );
};

export default LandingPage;
