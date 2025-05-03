import React from "react"; 

import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
export default function Footer (){ 
  const { darkMode } = useContext(DarkModeContext);
  const { words } = useContext(LanguageContext);
return (
<footer className={`bg-[#F9f9f9] px-[6rem] py-[4rem] mt-[6rem] ${darkMode ? "dark:bg-[#141414] text-[#AEBCCF]": "" }`}>
<div >
<h1 tag="h1" className="w-[28rem] text-[2.5rem] leading-[3rem]">Let's work together on your next products.</h1>
</div>
<nav className="flex flex-row justify-between mr-[1rem] mt-[4rem]">
    <a className={`text-[#b03048] ${darkMode ? "dark:text-[#bab2e7]": "" }`} href="mailto:gokcetezelavsar@gmail.com">{words.mail}</a>
   
   
   
    <div className="flex flex-row">
   
    <a className={`no-underline mr-[1rem] text-[#252128] ${darkMode ? "dark:text-[#AEBCCF]": "" }`} href="https://myportfoliosite-j08nws1af-gokce-tezel-avsars-projects.vercel.app/">{words.siteName}</a>

    <a className={`no-underline mr-[1rem] text-[#69d28c] ${darkMode ? "dark:text-[#56ac6c]" : ""} `}  href="https://github.com/gokce-tezel-avsar">{words.socialGit}</a>
    <a className={`no-underline text-[#2977b5] ${darkMode ? "dark:text-[#3ea7f6]" : ""} `} href="https://aedin.com/in/gökçe-tezel-avşar-25756234a">{words.socialLink}</a>
    </div>
    </nav>
 </footer>


)}
