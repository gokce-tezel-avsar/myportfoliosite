import React from "react";
import hero from "../assets/hero.png";
import Github from "../components/github";
import Linkedin from "../components/Linkedin";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";


export default function Hero() {
  const { darkMode } = useContext(DarkModeContext);
  const { words } = useContext(LanguageContext);
  
  return (
    <main id="hero" className="flex flex-row justify-between mx-[5rem] mt-[2rem] ">
            <div className="flex flex-col ml-[1rem] mr-[2rem]">

            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937] mb-[0]">
              {words.heroTitle1}
            </h1>
            <h1 className="text-[4rem] fw-bold flex h-auto text-[#1f2937]">
            {words.heroTitle2}
            </h1>
          
            <p className="text-muted text-balance max-w-32  ">
            {words.heroText}
            </p>
            <div className="flex flex-row my-[3rem]">
              <button className="btn-hero-hire mr-[0.5rem]">Hire Me</button>
            <Github/>
            <Linkedin/>
            </div>

            </div>
          <div>
            <img 
            src={hero}
            alt="Hero"
            className="hero-image  rounded-[1rem] ml-[1rem] mr-[2rem]"
          /></div>
          
    </main>
  );
}
