import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function HeaderNav(){
  const { darkMode } = useContext(DarkModeContext);
  const { words } = useContext(LanguageContext);
    return(
      <header className="flex justify-end mx-[4rem] mt-[2rem]">
      <nav className="px-[3rem] ">
     <a className="px-[4rem] text-[#6b7280] no-underline " href="#skills">{words.skillTitle}</a>
     <a className="pr-[4rem] text-[#6b7280] no-underline" href="#projects">{words.projectTitle}</a>
   
       <button className="btn-hire-header ">Hire Me</button>
       </nav>
       </header>
    )
}