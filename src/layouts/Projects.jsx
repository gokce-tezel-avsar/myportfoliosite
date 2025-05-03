import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
import { LanguageContext } from "../context/LanguageContext";

export default function Projects() {
  const { darkMode } = useContext(DarkModeContext);
  const { words } = useContext(LanguageContext);

  return (
    <main
      id="projects"
      className="ml-[6rem] mr-[7rem] mx-[2rem]" >
    

      <h1 className="mb-[2rem]">{words.projectTitle}</h1>
      <div className="flex flex-row  w-[18rem] justify-between gap-[6rem] my-[4rem] ">
        {words.projects?.map((project, index) => (
          <div
            key={index}
            className="flex flex-col "
          >
            <img
              src={project.img}
              alt={project.title}
              className="mb-3 h-[11rem] w-[18rem]"
            />
            <h2 className="text-2xl font-semibold text-[#443cca]">
              {project.title}
            </h2>
            <div className=" pr-[2rem]">
              <p className="text-sm text-muted text-justify">
                {project.description}
              </p>
              <div className="flex flex-row">
                {project.tags.map((tag, i) => (
                  <button
                    type="button"
                    key={i}
                    className="text-sm text-[#443cca] border-[#443cca] rounded-[0.3rem] border-solid border-[1px] py-[0.4rem] px-[1.2rem] mr-[0.5rem] mb-[1rem]"
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <nav className="flex flex-row justify-between">
                <a
                  className="text-[#443cca]"
                  href={project.Url1}
                >
                  Github
                </a>
                <a className="text-[#443cca]" href={project.Url2}>
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
