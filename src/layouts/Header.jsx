import React from "react";
import { faCircle, faMoon } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";
import { FaMoon } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa6";

export default function Header() {
  const { darkMode, handleDarkModeChange } = useContext(DarkModeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
  const {words} = useContext(LanguageContext)
    return(
        <>
         <div className="flex flex-row place-items-center justify-end gap-[2rem] mb-4 pr-[7rem] text-sm no-underline">
         <p className={`flex flew-row place-items-center text-[#777777] text-[1rem] ${darkMode ? "dark:text-[#9a9a9a]" : "" }`} onClick={handleDarkModeChange}>
         <button
  className={`flex border-none align-middle rounded-[1rem] h-[1.5rem] w-[3.5rem] mr-[1rem] py-[0.2rem] px-[0.3rem] justify-end bg-[#493fd3] text-[#FEE86E] ${darkMode ? "dark:bg-[#3a3a3a] justify-start " : ""}`}
  icon={darkMode ? faMoon : faCircle  }
  id="darkmode-toggle">{!darkMode ? <FaCircle className="size-[1.2rem]" /> : <FaMoon className="size-[1.2rem]" /> }</button>

{!darkMode ? (language === "en" ? englishWords.mode.darkmode : turkishWords.mode.darkmode) : (language === "en" ? englishWords.mode.lightmode : turkishWords.mode.lightmode)}
    <span className="ml-[1rem] ">|</span>
    </p>


<div className="flex flex-row">
     
    <p className={`text-[1rem] text-[#493fd3] ${darkMode ? "dark:text-[#bab2e7]" : "" }`} onClick={toggleLanguage}>
  {!language ? (language === "en" ? englishWords.mode.language : turkishWords.mode.language) : (language === "en" ? englishWords.mode.language: turkishWords.mode.language)} </p>
  
  <p className={`text-[1rem] ${darkMode ? "dark:text-[#777777]" : "" }`}>
  {!language ? (language === "en" ? englishWords.mode.language : turkishWords.mode.language) : (language === "en" ? englishWords.translate: turkishWords.translate)}
 </p>
 </div>
 
     </div>
          </>
  )
}