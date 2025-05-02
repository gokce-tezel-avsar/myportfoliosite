import React from "react";
import { skills } from "../initialData";
  
  export default function Skills() {
    return (
      <main
        id="skills"
        className="flex flex-col border-none mx-[4rem]">
        <h1 className="px-[2rem] pt-[2rem] pb-[0] text-[#1f2937]">
        Skills</h1>
        
  
        <article className="flex flex-row ">
          {skills.map((skill, index) => (
            <card key={index} className="border-none mx-[2rem] pr-[1rem]">
              <h2 style={{ paddingBlock: "1rem", color: "#443cca" }}
              >
                {skill.title}
              </h2>
              <p className="text-muted">{skill.description}</p>
            </card>
          ))}
        </article>
      </main>
    );
  }
  