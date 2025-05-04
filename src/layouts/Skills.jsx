import React from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
import { useContext } from "react";

  export default function Skills() {
    const { darkMode } = useContext(DarkModeContext);
    const { words } = useContext(LanguageContext);
    return (
      <main
        id="skills"
        className={`flex flex-col border-none ml-[6rem] mr-[7rem] text-[#777777]  ${darkMode ? "dark:text-[#ffffff] " : ""}`}>


        <h1 className={`pt-[2rem] pb-[0] text-[#1f2937] ${darkMode ? "dark:text-[#aebccf]": ""}`}>


       {words.skillTitle}</h1>
        
  
        <article className="flex flex-row  justify-between">
          {words.skills.map((skill, index) => (
            <div key={index} className="h-[11rem] w-[18rem] ">
              <h2 className={`text-[#443cca] py-[1rem] ${darkMode ? "dark:text-[#b7aafd]" : ""}`}
              >
                {skill.title}
              </h2>

              <p className={`text-sm text-[#6b7280] text-baseline py-[1rem] ${darkMode ? "dark:text-[#ffffff]" : ""}`}  >{skill.description}</p>
            </div>
          ))}
        </article>
      </main>
    );
  }
  