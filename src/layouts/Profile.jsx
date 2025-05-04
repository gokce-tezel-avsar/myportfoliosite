import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";
import { personalData } from "../assets/personalData";
    export default function Profile() {
      const { darkMode } = useContext(DarkModeContext);
      const { words } = useContext(LanguageContext);
      return (
        <main className="bg-white dark:text-white w-full">
          <h1 className={`mx-[6rem] pt-[2rem] text-[#1f2937] mb-[2rem] ${darkMode ? "dark:text-[#aebccf]" : "" }`} >{words.profileTitle}</h1>
          <div className="flex flex-row ">
            <div className="flex flex-col ml-[6rem] mr-[1rem] w-full">
              <h2 className={`flex flex-col py-[2rem] pt-[0] text-[#443ca3] mb-4 ${darkMode ? "dark:text-[#b7aafd]" : ""}`} >{words.profileSubTitle}</h2>
              <div className="flex flex-row  w-full">
                <div className= {`flex flex-col py-[2rem] pt-[0] mr-[4rem] text-[#000000] ${darkMode ? "dark:text-[#ffffff]" : ""}`} >
                  <p>{words.profileBirthDate}</p>
                  <p>{words.profileCity}</p>
                  <p>{words.profileEducation}</p>
                  <p className="mt-[2.5rem]"  >{words.profileRole}</p>
                </div>
                <div className= {`flex flex-col ml-[2rem] py-[2rem]  pt-[0] mr-[4rem] text-[#000000] ${darkMode ? "dark:text-[#ffffff]" : ""}`} >
                  <p>{personalData.birthDate}</p>
                  <p>{personalData.city}</p>
                  <p>{personalData.education} <br/> {personalData.graduationYear}</p>
                  <p>{personalData.role}</p>
                </div>
              </div>
            </div>
    
            <div className="flex flex-col mr-[6rem] ml-[1rem] w-full">
              <h2 className={`text-[#443ca3] mb-[2rem] ${darkMode ? "dark:text-[#b7aafd]" : ""}`} >{words.profileAbout}</h2>
              <p className={`text-[#6b7280] ${ darkMode ? "dark:text-[#ffffff]" : ""} `}>{words.profileAboutText}</p>
            </div>
          </div>
        </main>
      );
    }
    