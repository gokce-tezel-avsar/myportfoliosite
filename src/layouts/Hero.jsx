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
    <main id="hero" className="flex flex-row gap-[2rem] mx-[5rem] mt-[2rem] ">
            <div className="flex flex-col ml-[1rem]">

            <h1 className={`text-[4rem] mb-[0] text-[#1f2937] flex ${ darkMode ?"dark:text-[#aebccf]" : "" }`}>
              {words.heroTitle1}
            </h1>
            <h1 className={`text-[4rem] text-[#1f2937] flex ${ darkMode ?"dark:text-[#aebccf]" : "" }`}       
            >
            {words.heroTitle2}
            </h1>
          
            <p className={`text-[#6b7280] text-wrap max-w-32 ${darkMode ? "dark:text-[#ffffff]" : ""} `}>
            {words.heroText}
            </p>
            <div className="flex flex-row mt-[1rem]">
              <button className={`btn-hero-hire border-none mr-[0.5rem] text-[#ffffff] bg-[#3730a3] ${darkMode ? "dark:text-[#000000] bg-[#e1e1fe]" : ""}`}>Hire Me</button>
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
