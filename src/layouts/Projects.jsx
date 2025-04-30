import React from "react";
import {
    Card,
    CardGroup,
    CardImg,
    CardLink,
    CardText,
    CardTitle,
    ListGroupItem,
    ListGroup,
    CardSubtitle,
    CardBody,
    Col,
    Row
  } from "reactstrap";
  import projects1 from "../assets/projects/projects1.png"
  import projects2 from "../assets/projects/projects2.png"
  import projects3 from "../assets/projects/projects3.png"
  
  const projectData = [
    {
      title: "Workintech",
      img: projects1,
      description: "A simple customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
      tags: ["react", "redux", "axios"],
    },
    {
      title: "Random Jokes",
      img: projects2,
      description: "A simple customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
      tags: ["react", "redux", "axios"],
    },
    {
      title: "Journey",
      img: projects3,
      description: "A simple customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline...",
      tags: ["react", "redux", "axios"],
    }
  ];
  
  export default function Projects() {
    return (
      <main id="projects" className="border-none  text-[#1f2937]">
        <h1 className="mb-5">Projects</h1>
        <Row className="g-4">
          {projectData.map((project, index) => (
            <Col md="4" key={index}>
              <Card className="h-100 border-none p-3">
                <CardImg
                  src={project.img}
                  alt={project.title}
                  style={{ height: "200px", objectFit: "cover", width: "100%", }}
                  className="mb-3"
                />
                <CardSubtitle
                  tag="h2"
                  className="text-2xl font-semibold"
                  style={{ paddingBlock: "1rem", color: "#443cca" }}
                >
                  {project.title}
                </CardSubtitle>
                <CardBody style={{ paddingInline: "0" }}>
                  <CardText className="text-sm text-gray-700 text-justify">
                    {project.description}
                  </CardText>
                  <ListGroup className="flex flex-row gap-2" style={{ marginBlock: "1rem" }}>
                    {project.tags.map((tag, i) => (
                      <ListGroupItem
                        key={i}
                        className="text-sm"
                        style={{
                          border: "solid 1px",
                          borderRadius:"0.5rem",
                          color: "#443cca",
                          borderColor: "#443cca",
                          padding: "0.5rem 1.5rem"
                        }}
                      >
                        {tag}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                  <div className="flex flex-row gap-4">
                    <CardLink href="https://github.com/gokce-tezel-avsar" style={{ color: "#443cca" }}>Github</CardLink>
                    <CardLink href="#hero" style={{ color: "#443cca" }}>View Site</CardLink>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </main>
    );
  } 