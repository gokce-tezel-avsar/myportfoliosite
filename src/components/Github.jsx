import React from "react";
import { faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export default function Github() {
    const { darkMode } = useContext(DarkModeContext);
  return (
    <button
    onClick={()=> window.open("https://github.com/gokce-tezel-avsar")}
    className={`btn-socials mr-[0.5rem] border-[#3730a3] text-[#3730a3] bg-[#ffffff] ${darkMode ? "dark:bg-[#383838] text-[#e1e1e1] border-[#e1e1e1]" : "" } `}
      tag="a" 
      rel="noopener noreferrer"
    > <FontAwesomeIcon className={`text-[#3730a3] size-[1rem] mx-[0.3rem] ${darkMode ? "dark:text-[#bab2e7]" : "" } `} icon={faGithub}
/> Github 
    </button>
  );
}
