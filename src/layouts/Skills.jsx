import React from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    CardGroup,
  } from "reactstrap";
  
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
      <Card
        id="skills"
        className="flex flex-col border-none mx-[4rem] "
    
      >
        <CardGroup className="border-none p-[2rem] text-[#1f2937]">
          <CardTitle tag="h1">Skills</CardTitle>
        </CardGroup>
  
        <CardGroup className="flex flex-row ">
          {skills.map((skill, index) => (
            <Card key={index} className="border-none h-100 px-[2rem]">
              <h2 style={{ paddingBlock: "1rem", color: "#443cca" }}
              >
                {skill.title}
              </h2>
              <p className="text-muted">{skill.description}</p>
            </Card>
          ))}
        </CardGroup>
      </Card>
    );
  }
  