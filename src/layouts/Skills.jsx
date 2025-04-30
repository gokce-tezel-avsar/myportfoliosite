import React from "react";
  
  const skills = [
    {
      title: "JavaScript",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.",
    },
    {
      title: "React.Js",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.",
    },
    {
      title: "Node.Js",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit animid est laborum.",
    },
  ];
  
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
  