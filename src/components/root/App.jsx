import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Navigation from "../navigation/Navigation";
import ScrollTop from "../scroll_top/ScrollTop";
import About from "../pages/About";
import NotFound from "../not_found/NotFound";
import Projects from "../pages/Projects";
import Certificates from "../pages/Certificates";
import Contact from "../pages/Contact";
import { connect } from "react-redux";
import MobileNavigation from "../navigation/MobileNavigation";
import Preloader from "../preloader/Preloader";
import $ from "jquery";
import ScrollToTop from "../scrollToTop/ScrollToTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    // Sayfa yüklendiğinde ve değiştiğinde jQuery kodunu çalıştır
    $(window).on("load", function () {
      $("#loader-container").fadeOut(); // Preloader'ı gizle
    });

    return () => {
      // Eski yükleme olayını temizle
      $(window).off("load");
    };
  }, [location]);

  return (
    <>
      <Preloader />
      <ScrollToTop />
      <Navigation />
      <MobileNavigation />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="certificates" element={<Certificates />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollTop />
    </>
  );
}

export default connect()(App);
