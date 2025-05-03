import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";
import { englishWords } from "../assets/EnglishData";
import { turkishWords } from "../assets/TurkishData";

export default function Header() {
  const showSuccess = () => {
    toast.success('İşlem başarılı!');
  };
  const showError = () => {
    toast.error('Bir hata oluştu!');
  };

  const { darkMode, handleDarkModeChange } = useContext(DarkModeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);
const {words} = useContext(LanguageContext)

    return(
        <>
         <div className="flex flex-row place-items-center justify-end gap-[2rem] mb-4 pr-[7rem] text-sm no-underline relative">
         <p className="flex flew-row place-items-center text-[1rem]" onClick={handleDarkModeChange}>
         <FontAwesomeIcon 
  className={`text-[1.5rem] mr-[1rem] ${darkMode ? "text-[#493fd3] border-[#3A3A3A]" : "text-[#3A3A3A] "}`}
  icon={darkMode ? faToggleOff:faToggleOn  }
  id="darkmode-toggle"/>

   {!darkMode ? (language === "en" ? englishWords.mode.darkmode : turkishWords.mode.darkmode) : (language === "en" ? englishWords.mode.lightmode : turkishWords.mode.lightmode)}
    <span className="ml-[1rem] ">|</span>
    </p>

<p className="text-[1rem]" onClick={toggleLanguage}>{(language=== "en") ? (words.language + words.translate) : ( words.translate + words.language)}</p>
     </div>
          </>
  )
} 
