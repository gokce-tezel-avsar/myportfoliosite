import React from "react";
import {
    Card,
    CardText,
    CardTitle,
    CardSubtitle,
    CardGroup,
    CardBody
  } from "reactstrap";
  
  export default function Profile(){
      return (
    <CardGroup className="flex">
          <CardTitle className="mb-[2rem]"  tag="h1">Profile</CardTitle>
          <CardBody className="flex flex-row">
            <CardBody className="flex flex-col">
            <CardSubtitle style={{ paddingBlock: "1rem", color: "#443cca"}} tag="h2">Profile</CardSubtitle>
            <Card className="flex flex-row border-none ">
  <CardGroup className="flex flex-col">   
      <CardText><strong>Doğum tarihi</strong></CardText>
      <CardText><strong>İkamet Şehri</strong> </CardText>
      <CardText><strong>Eğitim Durumu</strong></CardText> 
      <CardText><strong>Tercih Ettiği Rol</strong> </CardText> 
    </CardGroup> 
  <CardGroup className="flex flex-col">
     <CardText> 08.08.1997</CardText>
     <CardText> Kırklareli</CardText>
     <CardText>Trakya Üniversitesi Tıp Fakültesi, 2022</CardText>
     <CardText>Frontend, UI</CardText>
  </CardGroup>
  </Card>
              </CardBody>
  
       <CardBody className="flex flex-col">
  
              <CardSubtitle style={{ paddingBlock: "1rem", color: "#443cca"}} tag="h2">About Me</CardSubtitle>
              <CardText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores officiis facilis inventore esse, ullam dolorum ducimus, repellendus atque adipisci culpa magni.</CardText>
              </CardBody>
          </CardBody>
          </CardGroup>
      )
  }