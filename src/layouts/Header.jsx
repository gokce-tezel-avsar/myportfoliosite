import React from "react";
import {useAppContext} from "../context/AppContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

export default function Header() {
  const showSuccess = () => {
    toast.success('İşlem başarılı!');
  };
  const showError = () => {
    toast.error('Bir hata oluştu!');
  };

     const { t, toggleLang, toggleTheme,theme, lang } = useAppContext();
     const isDark = theme === "dark";
    return(
        <>
         <div className="flex justify-end gap-4 mb-4">
          <p><FontAwesomeIcon icon={isDark ? faToggleOn : faToggleOff} /></p>
          <button onClick={toggleLang} className="text-sm underline">
              {t.languageToggle}
            </button>
            <button onClick={toggleTheme} className="text-sm underline">
              {theme === "light" ? t.darkMode : t.lightMode}
            </button>
          </div></>
          
    )
}