import { useContext } from "react";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import HeaderNav from "./layouts/HeaderNav";
import Hero from "./layouts/Hero";
import Profile from "./layouts/Profile";
import Projects from "./layouts/Projects";
import Skills from "./layouts/Skills";
import { DarkModeContext } from "./context/DarkModeContext";
import { LanguageContext } from "./context/LanguageContext";
import React from "react"; 

export default function AppContainer(){
    const { words } = useContext(LanguageContext);
    const { darkMode } = useContext(DarkModeContext);
     return(
        <> 
         
        <div className={`bg-[#ffffff] ${
        darkMode ? " bg-[#2a262b] " : ""
      }`} >
                  <Header/>
                  <HeaderNav/>
                  <Hero />
                  <Skills/>
                  <Profile/>
                  <Projects />
                  <Footer />

                  </div></>
     )
}