import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  const { words } = useContext(LanguageContext);

  return (
    <main
      id="projects"
      className="ml-[6rem] mr-[5rem] " >
  
      <h1 className={`mb-[2rem] text-[#1f2937] ${darkMode ? "dark:text-[#aebccf]" : "" }`}>{words.projectTitle}</h1>
      <div className="flex flex-row gap-[2rem] justify-between  my-[2rem] ">
        {words.projects?.map((project, index) => (
          <div
            key={index}
            className="flex flex-col pl-[0] "
          >
            <img
              src={project.img}
              alt={project.title}
              className="mb-3 h-[11rem] w-[18rem]"
            />
            <h2 className={`text-2xl text-[#443ca3] font-semibold ${darkMode ? "dark:text-[#cfcbfe]" : "" }`}>
              {project.title}
            </h2>
            <div>
              <p className={`text-sm text-baseline h-[11rem] w-[18rem] pr-[2rem] text-[#6b7280] ${darkMode ? "dark:text-[#ffffff]" : "" } `}>
                {project.description}
              </p>
              <div className="flex flex-row">
                {project.tags.map((tag, i) => (
                  <button
                    type="button"
                    key={i}
                    className={`text-sm text-[#443cca] border-[#443cca] rounded-[0.3rem] border-solid border-[1px] py-[0.4rem] px-[1.2rem] mr-[0.5rem] mb-[1rem] bg-[#ffffff] ${darkMode ? "dark:text-[#8f88fc] dark:border-[#8f88fc] dark:bg-[#383838]" : "" } `}
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <nav className="flex flex-row justify-between mr-[2rem]">
                <a
                  className={`text-[#443cca] ${darkMode ? "dark:text-[#e1e1fe]" : "" }`}
                  href={project.Url1}
                >
                  Github
                </a>
                <a  className={`text-[#443cca] ${darkMode ? "dark:text-[#e1e1fe]" : "" }`} href={project.Url2}>
                  View Site
                </a>
              </nav>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}
