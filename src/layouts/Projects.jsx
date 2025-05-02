import React from "react";
import { projectList } from "../initialData"
 
  
  export default function Projects() {
return ( 

      <main id="projects" className="border-none ml-[6rem] mr-[5rem] flex flex-col text-[#1f2937]">
        <h1 className="mb-5">Projects</h1>
       <article className="flex flex-row justify-between my-[2rem]">
          {projectList.map((project, index) => (
           
              <article className="flex flex-col border-none pl-[0] px-[2rem]">
                <img
                  src={project.img}
                  alt={project.title}
                  className="mb-3 h-[11rem] w-[18rem]"
                />
                <h2
                  className="text-2xl font-semibold text-[#443cca]"
          >
                  {project.title}
                </h2>
                <section className=" h-[11rem] w-[18rem] ">
                  <p className="text-sm text-muted text-justify">
                    {project.description}
                  </p>
                  <form className="flex flex-row " >
                    {project.tags.map((tag, i) => (
                      <button
                      type="button"
                        key={i}
                        className="text-sm text-[#443cca] border-[#443cca] rounded-[0.3rem] border-solid border-[1px] py-[0.4rem] px-[1.2rem] mr-[0.5rem] mb-[1rem]
                          "
                      >
                        {tag}
                      </button>
                    ))}
                  </form>
                  <nav className="flex flex-row gap-4 justify-between">
                    <a className="text-[#443cca]" href="https://github.com/gokce-tezel-avsar">Github</a>

                    <a className="text-[#443cca] "  href="#hero">View Site</a>
                  </nav>
                </section>
              </article>
            
          ))}
     </article>
      </main>
)
}
