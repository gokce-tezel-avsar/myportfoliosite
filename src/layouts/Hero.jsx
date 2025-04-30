import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import hero from "../assets/hero.png";

export default function Hero() {
  return (
    <Card id="hero" className="flex justify-end mx-[2rem] mt-[2rem]">
          <CardBody className="px-[4rem] ">
            <h1 className="fw-bold text-[4rem] text-[#1f2937]">
              Creative thinker
            </h1>
            <h1 className="fw-bold text-[4rem] text-[#1f2937]">
              Minimalism lover
            </h1>
            <text className="text-muted">
              Hi, I'm Gökçe. I'm a full-stack developer. If you are looking for a
              developer who can craft solid and scalable frontend products with great
              user experiences, let's shake hands with me.
            </text>
            <div className="d-flex gap-3 mt-4">
             
            </div>
</CardBody>

<CardBody className="mr-[5rem] ml-[1rem]">

            <img 
            src={hero}
            alt="Hero"
            className="hero-image rounded-[1rem]"
           
          />
          </CardBody>
    </Card>
  );
}
