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
        className="flex flex-col border-none mx-[4rem]">
        <h1 className="px-[2rem] pt-[2rem] pb-[0] text-[#1f2937]">
       {words.skillTitle}</h1>
        
  
        <article className="flex flex-row ">
          {words.skills.map((skill, index) => (
            <div key={index} className="border-none mx-[2rem] ">
              <h2 className="text-[#443cca] py-[1rem]"
              >
                {skill.title}
              </h2>
              <p className="text-muted">{skill.description}</p>
            </div>
          ))}
        </article>
      </main>
    );
  }
  